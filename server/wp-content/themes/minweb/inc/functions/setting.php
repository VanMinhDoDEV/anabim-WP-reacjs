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
  
  function init_css_js() {
    // link css
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0');
    wp_enqueue_style('flaticon', get_template_directory_uri() . '/assets/fonts/custom/flaticon.css', array(), '1.0');


      // link JS
      wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
  }
  add_action('wp_enqueue_scripts', 'init_css_js');