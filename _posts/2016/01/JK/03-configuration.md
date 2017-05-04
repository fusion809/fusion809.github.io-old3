## Configuring Jekyll
Jekyll's main configuration file is `_config.yml`. In it there are several pieces of information about the website, like its title, as well as its associated email address, Facebook, GitHub and Twitter accounts. It also lists the Rubygems it needs besides the default set used by all Jekyll sites, along with what markdown parser is to be used by the site and the various extensions for said rendering engine that is required. Here is an example `_config.yml` (it is the one being used by *The Hornery* as of 25 January 2016) file:
{% include Code/gist.html id="b3d9df27d9c71e75caaa" %}
In this example the markdown parser being used is Redcarpet, while the Redcarpet extensions being loaded are listed on lines 32 to 45. The additional gems being used are `jekyll-redirect-from` and `jekyll-last-modified-at`. If you want to add extra gems to your site you will need to also add them to `Gemfile`, via adding the line `gem 'gem_name'` where, of course, `'gem_name'` is the gem's name. After this you will also have to run `Bundle install` to install these gems. 

Further information on Jekyll configuration can be found [here](http://jekyllrb.com/docs/configuration/).
