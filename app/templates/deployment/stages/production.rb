role :db,           "production.<%= props.domain %>"
role :web,          "production.<%= props.domain %>"

set :stage,         "production"
set :branch,        "master"
set :deploy_to,     "/var/www/#{application.downcase}/master"

# Open site after deploying
after "deploy" do
    system "open http://#{stage}.#{application.downcase}/"
end
