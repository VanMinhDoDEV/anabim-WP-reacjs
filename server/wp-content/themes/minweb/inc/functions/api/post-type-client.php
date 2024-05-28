<?php
function custom_register_rest_fields() {
    register_rest_field( 'client', 'client_name', array(
        'get_callback' => 'get_meta_for_api',
        'schema' => array(
            'description' => __( 'Client Name' ),
            'type' => 'string',
            'context' => array( 'view', 'edit' )
        ),
    ));

    register_rest_field( 'client', 'client_profession', array(
        'get_callback' => 'get_meta_for_api',
        'schema' => array(
            'description' => __( 'Client Profession' ),
            'type' => 'string',
            'context' => array( 'view', 'edit' )
        ),
    ));

    register_rest_field( 'client', 'link_thumb_client', array(
        'get_callback' => 'get_featured_image_for_api',
        'schema' => array(
            'description' => __( 'Client featured image' ),
            'type' => 'string',
            'context' => array( 'view', 'edit' )
        ),
    ));
}
add_action( 'rest_api_init', 'custom_register_rest_fields' );

function get_meta_for_api( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], '_'.$field_name, true );
}