<?php
function minweb_setup_theme(){
    add_theme_support('post-thumbnails');
    // Đăng ký sidebar
    if (function_exists('register_sidebar')){
      register_sidebar(array(
        'name'=> __( 'Sidebar', 'minweb' ),
        'id' => 'sidebar',
        'before_widget' => '<div class="widget">',
        'after_widget'  => "</div>",
        'before_title'  => '<h3 class="title">',
        'after_title'   => "</h3>",
      ));
    }
    // Đăng ký menu
    register_nav_menus(
      array(
        'main_nav' => __( 'Menu chính', 'minweb' ),
        'footer_nav_1' => __( 'Menu footer 1', 'minweb' ),
        'footer_nav_2' => __( 'Menu footer 2', 'minweb' )
    ));
  }
  add_action('init','minweb_setup_theme');
  