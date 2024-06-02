<?php

// tạo endpoin mới và add price cources
// function register_course_price_endpoint() {
//     register_rest_route('custom/v1', '/course-price/(?P<id>\d+)', array(
//         'methods' => 'GET',
//         'callback' => 'get_course_price',
//     ));
// }

// function get_course_price($data) {
//     $course_id = $data['id'];
    
//     // Lấy ID sản phẩm từ meta field '_tutor_course_product_id'
//     $product_id = get_post_meta($course_id, '_tutor_course_product_id', true);

//     if (!$product_id) {
//         return new WP_REST_Response(array('error' => 'Product ID not found'), 404);
//     }

//     // Lấy giá sản phẩm từ WooCommerce
//     $product = wc_get_product($product_id);
//     if (!$product) {
//         return new WP_REST_Response(array('error' => 'Product not found'), 404);
//     }

//     $price = $product->get_price();
    
//     return new WP_REST_Response(array('price' => $price), 200);
// }

// add_action('rest_api_init', 'register_course_price_endpoint');




// add price và category vào post type cource : http://domain/wp-json/wp/v2/courses
function add_course_data_to_api() {
  // Thêm giá cả
  register_rest_field('courses', 'price', array(
      'get_callback' => 'get_course_price',
  ));

  // Thêm slug của category
  register_rest_field('courses', 'slug_category', array(
      'get_callback' => 'get_course_slug',
  ));
}
add_action('rest_api_init', 'add_course_data_to_api');

// Lấy giá của khóa học
function get_course_price($object) {
  $course_id = $object['id'];
  $product_id = get_post_meta($course_id, '_tutor_course_product_id', true);
  
  if ($product_id) {
      $product = wc_get_product($product_id);
      if ($product) {
          return $product->get_price();
      }
  }
  return '';
}

// Lấy slug của category
function get_course_slug($object) {
  $term_list = wp_get_post_terms($object['id'], 'course-category', array("fields" => "all"));
  if (!is_wp_error($term_list)) {
      if (count($term_list)) {
          return $term_list[0]->slug;
      }
  }
  return '';
}


function get_slug_category($object) {
  $term_list = wp_get_post_terms($object['id'], 'course-category', array("fields" => "all"));
  return $term_list;
}

// chuyển đổi ID --> name 
function custom_rest_prepare_courses( $response, $post, $request ) {
    $data = $response->get_data();
    
    // Thêm tên tác giả vào response
    $author_id = $data['author'];
    $data['author'] = get_the_author_meta('display_name', $author_id);
    $data['author_id'] = $author_id;
    // Thêm thông tin thêm vào response
    $data['additional_info'] = array(
        'course_duration' => get_post_meta($post->ID, '_course_duration', true),
        'course_level' => get_post_meta($post->ID, '_tutor_course_level', true),
        'course_benefits' => get_post_meta($post->ID, '_tutor_course_benefits', true),
        'course_material_includes' => get_post_meta($post->ID, '_tutor_course_material_includes', true),
        'course_price_type' => get_post_meta($post->ID, '_tutor_course_price_type', true),
        'course_settings' => get_post_meta($post->ID, '_tutor_course_settings', true),
    );

    
    // Chuyển đổi ID của category thành tên
    $categories = array();
    foreach ($data['course-category'] as $cat_id) {
      $term = get_term($cat_id);
      if (!is_wp_error($term)) {
        $categories[] = $term->name;
      }
    }
    $data['course-category'] = $categories;
  
    // Chuyển đổi featured_media thành URL của hình ảnh
    if ($data['featured_media']) {
      $image = wp_get_attachment_image_src($data['featured_media'], 'full');
      if ($image) {
        $data['featured_media'] = $image[0];
      }
    }
    
    $response->set_data($data);
    return $response;
  }
  
  add_filter('rest_prepare_courses', 'custom_rest_prepare_courses', 10, 3);