<?php
function get_menu_data( $location ) {
    $locations = get_nav_menu_locations();
    $menu = wp_get_nav_menu_object( $locations[ $location ] );
    
    if(!$menu) {
        return null;
    }
  
    $menu_items = wp_get_nav_menu_items( $menu->term_id );
  
    // Arrange the menu items into an associative array
    $menu_arr = array();
    foreach ($menu_items as $item) {
        $menu_arr[$item->menu_item_parent][] = array(
            'id' => $item->ID,
            'title' => $item->title,
            'url' => $item->url,
            'menu_order' => $item->menu_order,
            'parent' => $item->menu_item_parent,
        );
    }
  
    // Recursively build the menu
    $menu_tree = build_menu_tree($menu_arr, 0);
  
    return $menu_tree;
  }
  
  function build_menu_tree($menus, $parent_id=0) {
    $branch = array();
  
    if(isset($menus[$parent_id])) {
        foreach ($menus[$parent_id] as $item) {
            $children = build_menu_tree($menus, $item['id']);
            if ($children) {
                $item['children'] = $children;
            }
            $branch[] = $item;
        }
    }
  
    return $branch;
  }
  
  function register_custom_menu_endpoint() {
    register_rest_route( 'wp/v2', '/menu/(?P<location>[a-zA-Z0-9_-]+)', array(
        'methods' => 'GET',
        'callback' => 'custom_menu_endpoint_handler',
        'permission_callback' => '__return_true', // Điều chỉnh quyền truy cập nếu cần
    ));
  }
  
  function custom_menu_endpoint_handler( $data ) {
    $location = $data['location'];
    $menu_data = get_menu_data( $location );
  
    if ( ! $menu_data ) {
        return new WP_Error( 'no_menu', 'Menu not found', array( 'status' => 404 ) );
    }
  
    return rest_ensure_response( $menu_data );
  }
  
  add_action( 'rest_api_init', 'register_custom_menu_endpoint' );