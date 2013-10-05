role :db,           "staging.<%= props.domain %>"
role :web,          "staging.<%= props.domain %>"

set :stage,         "staging"
set :deploy_to,     "/var/www/#{domain}/master"

# Open site after deploying
after "deploy" do
    system "open http://#{branch}.#{stage}.#{domain}/"
end
