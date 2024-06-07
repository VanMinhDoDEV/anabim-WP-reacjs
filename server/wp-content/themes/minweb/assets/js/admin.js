jQuery(document).ready(function($){
    function open_media_uploader_image(button_id, delete_button_id, input_id, preview_id){
        var custom_uploader;
        $(button_id).click(function(e){
            e.preventDefault();
            if (custom_uploader) {
                custom_uploader.open();
            } else {
                custom_uploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: {
                        text: 'Choose Image'
                    },
                    multiple: false
                });
                custom_uploader.on('select', function() {
                    var attachment = custom_uploader.state().get('selection').first().toJSON();
                    $(input_id).val(attachment.url);
                    $(preview_id).attr('src', attachment.url); // Update image preview
                });
                custom_uploader.open();
            }
        });

        // Handle delete button click
        $(delete_button_id).click(function(e) {
            e.preventDefault();
            $(input_id).val('');
            $(preview_id).attr('src', ''); // Remove image preview
        });
    }
    open_media_uploader_image("#upload_logo_button", "#delete_logo_button", "#logo_url", "#logo_preview");
    open_media_uploader_image("#upload_banner1_button", "#delete_banner1_button", "#banner1_url", "#banner1_preview");
    open_media_uploader_image("#upload_banner2_button", "#delete_banner2_button", "#banner2_url", "#banner2_preview");
    open_media_uploader_image("#upload_banner3_button", "#delete_banner3_button", "#banner3_url", "#banner3_preview");


});