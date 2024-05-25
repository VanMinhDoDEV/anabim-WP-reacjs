<?php 
add_action( 'rest_api_init', 'add_roles_to_json_api' );

function add_roles_to_json_api() {
  register_rest_field( 'user',
    'roles',
    array(
      'get_callback'    => 'get_user_roles',
      'update_callback' => null,
      'schema'          => array(
        'description' => 'User roles',
        'type'        => 'array',
      ),
    )
  );
}

function get_user_roles( $object, $field_name, $request ) {
  $user = get_userdata( $object['id'] );
  return $user->roles;
}