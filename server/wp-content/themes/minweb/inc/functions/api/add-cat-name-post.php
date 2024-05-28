<?php
function add_category_names() {
    register_rest_field( 'post', 'categories_name', array(
        'get_callback'    => 'get_category_names',
        'update_callback' => null,
        'schema'          => null,
        )
    );
}

add_action( 'rest_api_init', 'add_category_names' );

function get_category_names( $post, $field_name, $request ) {
    $category_names = array();
    $categories = wp_get_post_terms( $post['id'], 'category' );

    foreach( $categories as $category ) {
        $category_names[] = $category->name;
    }

    return $category_names;
}