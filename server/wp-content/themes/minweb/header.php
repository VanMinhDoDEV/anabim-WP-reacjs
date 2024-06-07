<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anabin</title>
    <?php wp_head(); ?>
    <?php $url_theme = get_bloginfo('stylesheet_directory'); ?>
</head>
<body <?php echo body_class() ?>>
    <header id="header" role="banner">
        <div class="header-nav">
            <div class="tutor-wrap">
                <div class="tutor-container">
                    <div class="tutor-row tutor-gx-xl-5">
                        <div class="tutor-col-2">
                            <a href="<?php echo get_site_url(); ?>" class="logo-link">
                                <img src="<?php echo $url_theme ?>/assets/images/logo-anabim.svg" alt="" class="logo-img">
                            </a>                       
                        </div>
                        <div class="tutor-col-8">
                            <div class="main-menu">
                                <?php wp_nav_menu( array( 'theme_location' => 'main_nav', 'container' => 'false', 'menu_id' => 'main-nav', 'menu_class' => 'menu') ); ?>
                            </div>
                        </div>
                        <div class="d-flex tutor-col-2">
                            <a href="<?php echo get_site_url(); ?>/thong-tin-tai-khoan" class="btn btn-primary">
                                Tài khoản
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="header-responsive">
            <div class="tutor-wrap">
                <div class="tutor-container">
                    <div class="tutor-row tutor-gx-xl-5">
                        <div class="tutor-col-4">
                            <div class="main-menu-responsive">
                                <a class="icon-menu-responsive">
                                    <img src="<?php echo $url_theme; ?>/assets/images/icon-menu.svg" alt="">
                                </a>
                                <div class="main-menu-container hidden">
                                    <div class="main-menu-overlay">
                                    </div>
                                    <div class="main-menu-mobile">
                                        <?php wp_nav_menu( array( 'theme_location' => 'main_nav', 'container' => 'false', 'menu_id' => 'main-nav', 'menu_class' => 'menu-mobile') ); ?> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tutor-col-4">
                            <div class="logo-responsive">
                                <a href="<?php echo get_site_url(); ?>" class="logo-responsive-link">
                                    <img src="<?php echo $url_theme ?>/assets/images/logo-anabim.svg" alt="" class="logo-responsive-img">
                                </a>                       
                            </div>
                        </div>
                        <div class="tutor-col-4">
                            <div class="action-account">
                                <a href="javascript:void(0)" class="btn btn-responsive btn-user">
                                    <img src="<?php echo $url_theme; ?>/assets/images/icon-user.svg" alt="">
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>