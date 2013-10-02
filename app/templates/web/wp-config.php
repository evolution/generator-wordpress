<%= wpConfigFile
  // Replace DB_*
  .replace('database_name_here',  props.DB_NAME)
  .replace('username_here',       props.DB_USER)
  .replace('password_here',       props.DB_PASSWORD)
  .replace('localhost',           props.DB_HOST)

  // Replace WP_DEBUG
  .replace(/define\('WP_DEBUG'.+\);/, "define('WP_DEBUG', Genesis::isDebug());")

  // Replace salts
  .replace(/define\('AUTH_KEY'[\s\S]+'put your unique phrase here'\);/, props.salts)
%>
/** Sets up WordPress to work with Genesis */
require_once(ABSPATH . '/../bower_components/genesis-wordpress/src/Genesis.php');

if (Genesis::isDebug()) {
  Geneis::rewriteUrls();
}
