<?php
// Thêm trường social media vào trang hồ sơ người dùng
function custom_user_profile_fields($user) {
    ?>
    <h3><?php _e('Thông tin mạng xã hội', 'textdomain'); ?></h3>

    <table class="form-table">
        <tr>
            <th><label for="facebook"><?php _e('Facebook', 'textdomain'); ?></label></th>
            <td>
                <input type="url" name="facebook" id="facebook" value="<?php echo esc_attr(get_the_author_meta('facebook', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập địa chỉ Facebook của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
        <tr>
            <th><label for="twitter"><?php _e('Twitter', 'textdomain'); ?></label></th>
            <td>
                <input type="url" name="twitter" id="twitter" value="<?php echo esc_attr(get_the_author_meta('twitter', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập địa chỉ Twitter của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
        <tr>
            <th><label for="linkedin"><?php _e('LinkedIn', 'textdomain'); ?></label></th>
            <td>
                <input type="url" name="linkedin" id="linkedin" value="<?php echo esc_attr(get_the_author_meta('linkedin', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập địa chỉ LinkedIn của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
        <tr>
            <th><label for="pinterest"><?php _e('Pinterest', 'textdomain'); ?></label></th>
            <td>
                <input type="url" name="pinterest" id="pinterest" value="<?php echo esc_attr(get_the_author_meta('pinterest', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập địa chỉ Pinterest của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
        <tr>
            <th><label for="instagram"><?php _e('Instagram', 'textdomain'); ?></label></th>
            <td>
                <input type="url" name="instagram" id="instagram" value="<?php echo esc_attr(get_the_author_meta('instagram', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập địa chỉ Instagram của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
    </table>
    <?php
}

add_action('show_user_profile', 'custom_user_profile_fields');
add_action('edit_user_profile', 'custom_user_profile_fields');

// Lưu thông tin các trường social media khi hồ sơ người dùng được cập nhật
function save_custom_user_profile_fields($user_id) {
    if (!current_user_can('edit_user', $user_id)) {
        return false;
    }

    update_user_meta($user_id, 'facebook', sanitize_text_field($_POST['facebook']));
    update_user_meta($user_id, 'twitter', sanitize_text_field($_POST['twitter']));
    update_user_meta($user_id, 'linkedin', sanitize_text_field($_POST['linkedin']));
    update_user_meta($user_id, 'pinterest', sanitize_text_field($_POST['pinterest']));
    update_user_meta($user_id, 'instagram', sanitize_text_field($_POST['instagram']));
}

add_action('personal_options_update', 'save_custom_user_profile_fields');
add_action('edit_user_profile_update', 'save_custom_user_profile_fields');


// Thêm trường Địa chỉ và Số điện thoại vào trang hồ sơ người dùng
function custom_contact_information_fields($user) {
    ?>
    <h3><?php _e('Thông tin liên hệ bổ sung', 'textdomain'); ?></h3>

    <table class="form-table">
        <tr>
            <th><label for="address"><?php _e('Địa chỉ', 'textdomain'); ?></label></th>
            <td>
                <input type="text" name="address" id="address" value="<?php echo esc_attr(get_the_author_meta('address', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập địa chỉ của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
        <tr>
            <th><label for="phone"><?php _e('Số điện thoại', 'textdomain'); ?></label></th>
            <td>
                <input type="text" name="phone" id="phone" value="<?php echo esc_attr(get_the_author_meta('phone', $user->ID)); ?>" class="regular-text" /><br />
                <span class="description"><?php _e('Xin nhập số điện thoại của bạn.', 'textdomain'); ?></span>
            </td>
        </tr>
    </table>
    <?php
}

add_action('show_user_profile', 'custom_contact_information_fields');
add_action('edit_user_profile', 'custom_contact_information_fields');

// Lưu thông tin các trường Địa chỉ và Số điện thoại khi hồ sơ người dùng được cập nhật
function save_custom_contact_information_fields($user_id) {
    if (!current_user_can('edit_user', $user_id)) {
        return false;
    }

    update_user_meta($user_id, 'address', sanitize_text_field($_POST['address']));
    update_user_meta($user_id, 'phone', sanitize_text_field($_POST['phone']));
}

add_action('personal_options_update', 'save_custom_contact_information_fields');
add_action('edit_user_profile_update', 'save_custom_contact_information_fields');
