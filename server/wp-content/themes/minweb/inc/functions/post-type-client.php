<?php
// Hàm tạo custom post type 'client'
function create_client_post_type() {
    register_post_type('client',
        array(
            'labels' => array(
                'name' => __('Khách hàng'),
                'singular_name' => __('Khách hàng'),
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array( 'title', 'excerpt', 'thumbnail'),
            'menu_icon' => 'dashicons-businessperson',
            'show_in_rest' => true
        )
    );
}
add_action('init', 'create_client_post_type');

// Hàm thêm metabox cho custom post type 'client'
function add_client_metaboxes() {
    add_meta_box('client_name', 'Client Name', 'client_name_callback', 'client', 'normal', 'default');
    add_meta_box('client_profession', 'Client Profession', 'client_profession_callback', 'client', 'normal', 'default');
}
add_action('add_meta_boxes', 'add_client_metaboxes');

// Hàm callback cho metabox 'client_name'
function client_name_callback($post) {
    // Lấy giá trị tên khách hàng nếu đã được lưu trữ
    $client_name = get_post_meta($post->ID, '_client_name', true);

    // Output field
    echo '<label for="client_name">Name:</label>';
    echo '<input type="text" id="client_name" name="client_name" value="' . esc_attr($client_name) . '" size="30" />';
}

// Hàm callback cho metabox 'client_profession'
function client_profession_callback($post) {
    // Lấy giá trị nghề nghiệp của khách hàng nếu đã được lưu trữ
    $client_profession = get_post_meta($post->ID, '_client_profession', true);

    // Output field
    echo '<label for="client_profession">Profession:</label>';
    echo '<input type="text" id="client_profession" name="client_profession" value="' . esc_attr($client_profession) . '" size="30" />';
}

// Lưu giá trị của metabox khi lưu post
function save_client_metaboxes($post_id) {
    // Kiểm tra xem đã lưu dữ liệu hay chưa
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;

    // Kiểm tra quyền của người dùng
    if (!current_user_can('edit_post', $post_id))
        return;

    // Lưu giá trị tên khách hàng
    if (isset($_POST['client_name'])) {
        update_post_meta($post_id, '_client_name', sanitize_text_field($_POST['client_name']));
    }

    // Lưu giá trị nghề nghiệp của khách hàng
    if (isset($_POST['client_profession'])) {
        update_post_meta($post_id, '_client_profession', sanitize_text_field($_POST['client_profession']));
    }
}
add_action('save_post', 'save_client_metaboxes');


function change_new_client_text( $translated_text, $text, $domain ) {
    global $pagenow;

    // Chỉ thực hiện khi ở trang tạo mới post type 'client'
    if ( 'Add New' === $text && 'post-new.php' === $pagenow && isset( $_GET['post_type'] ) && 'client' === $_GET['post_type'] ) {
        return 'Add Client New'; // hoặc 'Thêm mới khách hàng'
    }
    return $translated_text;
}
add_filter( 'gettext', 'change_new_client_text', 20, 3 );

function get_featured_image_for_api( $object, $field_name, $request ) {
    if($object['featured_media']){
        $img_arr = wp_get_attachment_image_src($object['featured_media'], 'full');
        if ($img_arr){
            return $img_arr[0];
        }
    }
    return false;
}