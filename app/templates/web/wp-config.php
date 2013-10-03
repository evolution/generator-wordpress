<?php

/** Include Genesis to use with WordPress */
require_once(dirname(__FILE__) . '/../bower_components/genesis-wordpress/src/Genesis.php');
<%= wpConfigFile
  // Already started PHP
  .replace('<?php', '')

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

if (Genesis::isDebug()) {
  Genesis::rewriteUrls();
}
