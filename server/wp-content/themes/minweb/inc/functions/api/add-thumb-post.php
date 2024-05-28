<?php
function add_featured_image_url() {
    register_rest_field( 'post',
      'link_thumb',
      array(
        'get_callback'    => 'get_image_src',
        'update_callback' => null,
        'schema'          => null,
       )
    );
  }
  
  add_action( 'rest_api_init', 'add_featured_image_url' );
  
  
  function get_image_src($object, $field_name, $request) {
    if($object['featured_media']){
      $img = wp_get_attachment_image_src($object['featured_media'], 'full', false);
      return $img[0];
    }
    return false;
  }