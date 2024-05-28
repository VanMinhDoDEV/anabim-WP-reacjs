<?php


add_filter('rest_prepare_user', 'user_meta_to_rest', 10, 3);

function user_meta_to_rest($response, $user, $request) {

  // Add user email
  $response->data['meta']['user_email'] = $user->data->user_email;

  // List of user meta fields
  $user_meta_fields = array(
    'address',
    'phone',
    '_tutor_profile_job_title',
    '_tutor_profile_bio',
  );

  // Get and add user meta
  foreach($user_meta_fields as $field) {
    $response->data['meta'][$field] = get_user_meta($user->ID, $field, true);
  }
   
  // Get tutor profile photo
  $tutor_profile_photo_id = get_user_meta($user->ID, '_tutor_profile_photo', true);
  if(!empty($tutor_profile_photo_id)) {
    $response->data['meta']['_tutor_profile_photo'] = wp_get_attachment_url($tutor_profile_photo_id);
  }

  // List of social fields
  $social_fields = array(
    'facebook',
    'twitter',
    'linkedin',
    'pinterest',
    'instagram'
  );

  // Get and add social fields
  foreach($social_fields as $field) {
    $response->data['meta']['social'][$field] = get_user_meta($user->ID, $field, true);
  } 
  
  return $response;
}