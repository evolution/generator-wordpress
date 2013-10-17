role :db,           "www.<%= props.domain %>"
role :web,          "www.<%= props.domain %>"

set :stage,         "old"
set :branch,        "master"

set :stage,         "old"
set :user,          "myuser"
set :password,      "mypassword"
set :ssh_options,   {}

set :deploy_to,     "/path/to/mysite/genesis"
set :remote_web,    "/path/to/mysite/public_html"
