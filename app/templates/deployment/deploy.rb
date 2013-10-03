set :application,   "<%= props.name %>"
set :deploy_to,     "/var/www/#{application.downcase}/#{branch}"
set :local_web,     "<%= props.web %>"
set :remote_web,    "#{current_path}/<%= props.web %>"
