<?php
function add_custom_meta_to_posts($object) {
    $post_id = $object['id'];

    // Lấy tên của tác giả
    $author_id = get_post_field('post_author', $post_id);
    $author_name = get_the_author_meta('display_name', $author_id);
    
   // Lấy tên của tag
    $tags = wp_get_post_tags($post_id);
    $tag_name_arr = [];
    foreach ($tags as $tag) {
        array_push($tag_name_arr, $tag->name);
    }
    
    // Trả về meta data
   // Trả về meta data
    return [
        'author_name' => $author_name,
        'tag_name' => $tag_name_arr
    ];
}

function register_custom_meta_in_api() {
    register_rest_field(
        'post',
        'custom_meta',
        [
            'get_callback' => 'add_custom_meta_to_posts',
            'schema' => null
        ]
    );
}

add_action('rest_api_init', 'register_custom_meta_in_api');