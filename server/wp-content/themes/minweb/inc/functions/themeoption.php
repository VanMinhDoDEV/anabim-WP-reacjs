<?php 

// Add Theme Options Page
add_action('admin_menu', 'add_theme_options_page');
function add_theme_options_page() {
    add_menu_page('Theme Options', 'Theme Options', 'manage_options', 'theme-options', 'theme_options_page', '', 99);
}

// Add scripts
function enqueue_admin_scripts() {
    wp_enqueue_media();
    wp_enqueue_script('admin-js', get_template_directory_uri() . './assets/js/admin.js', array('jquery'));
}
add_action('admin_enqueue_scripts', 'enqueue_admin_scripts');

// Theme Options Page
function theme_options_page() {
    if (!current_user_can('manage_options'))  {
        wp_die( __('You do not have sufficient permissions to access this page.') );
    }
    if ($_POST['update_theme_options'] == 'true') {
        check_admin_referer('theme_options_update');
        theme_options_update(); 
    }
?>
<!-- Theme options form -->
<div class="wrap">
    <h1>Theme Options</h1> 
    <form method="POST" action="">
        <?php wp_nonce_field('theme_options_update'); ?>
        <input type="hidden" name="update_theme_options" value="true" />

        <h3>Address:</h3>
        <input type="text" name="address" size="50" value="<?php echo esc_attr(get_option('theme_option_address')); ?>"/>

        <h3>Phone Number:</h3>
        <input type="text" name="phone_num" size="50" value="<?php echo esc_attr(get_option('theme_option_phone_num')); ?>"/>

        <h3>Email:</h3>
        <input type="text" name="email" size="50" value="<?php echo esc_attr(get_option('theme_option_email')); ?>"/>


        <h3>Logo</h3>
        <p>
            <img id="logo_preview" src="<?php echo esc_url(get_option('theme_option_logo')); ?>" style="max-width:100px;" />
            <input id="logo_url" type="hidden" name="logo" value="<?php echo esc_url(get_option('theme_option_logo')); ?>" /> 
            <input id="upload_logo_button" type="button" class="button" value="<?php _e('Upload Logo'); ?>" />
            <input id="delete_logo_button" type="button" class="button" value="<?php _e('Delete Logo'); ?>" /> 
        </p>


<!-- Add similar button for banner -->

        <h3>Banner 1</h3>
        <p>
            <img id="banner1_preview" src="<?php echo esc_url(get_option('theme_option_banner1')); ?>" style="max-width:100px;" />
            <input id="banner1_url" type="hidden" name="banner1" size="60" value="<?php echo esc_url(get_option('theme_option_banner1')); ?>" /> 
            <input id="upload_banner1_button" type="button" class="button" value="<?php _e('Upload Banner'); ?>" />
            <input id="delete_banner1_button" type="button" class="button" value="<?php _e('Delete Banner'); ?>" /> 

        </p>
        <h3>Banner 2 </h3>
        <p>
            <img id="banner2_preview" src="<?php echo esc_url(get_option('theme_option_banner2')); ?>" style="max-width:100px;" />
            <input id="banner2_url" type="hidden" name="banner2" size="60" value="<?php echo esc_url(get_option('theme_option_banner2')); ?>" /> 
            <input id="upload_banner2_button" type="button" class="button" value="<?php _e('Upload Banner'); ?>" />
            <input id="delete_banner2_button" type="button" class="button" value="<?php _e('Delete Banner'); ?>" /> 

        </p>
        <h3>Banner 3</h3>
        <p>
            <img id="banner3_preview" src="<?php echo esc_url(get_option('theme_option_banner3')); ?>" style="max-width:100px;" />
            <input id="banner3_url" type="hidden" name="banner3" size="60" value="<?php echo esc_url(get_option('theme_option_banner3')); ?>" /> 
            <input id="upload_banner3_button" type="button" class="button" value="<?php _e('Upload Banner'); ?>" />
            <input id="delete_banner3_button" type="button" class="button" value="<?php _e('Delete Banner'); ?>" /> 

        </p>

        <p><input type="submit" name="search" value="Update Options" class="button" /></p>
    </form>
</div>
<?php
}

// Update Theme Options
function theme_options_update() {
    update_option('theme_option_address', sanitize_text_field($_POST['address']));
    update_option('theme_option_phone_num', sanitize_text_field($_POST['phone_num']));
    update_option('theme_option_email', sanitize_text_field($_POST['email']));
    update_option('theme_option_logo', esc_url_raw($_POST['logo']));
    update_option('theme_option_banner1', esc_url_raw($_POST['banner1']));
    update_option('theme_option_banner2', esc_url_raw($_POST['banner2']));
    update_option('theme_option_banner3', esc_url_raw($_POST['banner3']));
    // update_option here for Banner 2 and Banner 3
}
?>