<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '_anabim' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'mysql' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`lYt$NkcV>d~]cVty4KIs{4M?j^M`1gm//lai[tSjv:-90AiMUL0h_V{wI 0dmHV' );
define( 'SECURE_AUTH_KEY',  '3Ng.+,Ua&|!YGl9AUV8S!+&&>Trm5QwpQ``GRsI9F/.v^R%_=HG8N?x=R8Ho7y5:' );
define( 'LOGGED_IN_KEY',    'Ca:?EBw*F_^apHQBlXvTN`L[Jl][&7qEL`*e:t{tO^:z-IbP8cD,2U0/%d`l~2vI' );
define( 'NONCE_KEY',        ':Lx<(4n]CP^{CtV=?W;Xv:J5 LYv$;4~q=<PSt!lna?jfJPn*1n@lEihqSiP+Ee8' );
define( 'AUTH_SALT',        '9G|/EjIEu6/Ss!s9F?^#Of$%do=c3l$Pxj-~ihdpp/Bws9.kRi)huAnqGnACS3_:' );
define( 'SECURE_AUTH_SALT', '3{-30u.&:>TY4<9t[*kJktY{#/H.i6 [rDQ;#Q{NP,{nrUvsy#T!IGno(B8)q O$' );
define( 'LOGGED_IN_SALT',   'Y0f8rg,b54;a,7(V/wY($uJEgaDt*.AT#;/}dX%#BHu0iPHn**#jc.=hMO#f79]I' );
define( 'NONCE_SALT',       'Xf&$^Fb>Dy08[DT)7BhFly$c,/aQFuikDC 4^rSc[D8_49$a#Y[HDA3~w1 fe -r' );


define('JWT_AUTH_SECRET_KEY', 'Xf&$^Fb>Dy08[DT)7BhFly$c,/aQFuikDC 4^rSc[D8_49$a#Y[HDA3~w1 fe -r');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ajfhgrr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
