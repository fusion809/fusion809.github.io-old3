## Setup
*The Hornery* like most Jekyll-powered sites is hosted by [GitHub Pages](https://pages.github.com/), this section covers how to set up your website with GitHub pages and assumes you already have a GitHub account. If you do not have a GitHub account merely go to the [Home Page](https://github.com/) and fill out the form there.

The way I created *The Hornery* was by creating a GitHub repository with the name: `username.github.io`, where `username` was replaced by my username, fusion809. The next step requires that Jekyll be installed with RubyGems itself (even if Jekyll has already been installed with Bundle) on your computer. To do this run:
{% include Code/codeu.html line1="gem install jekyll" %}
then move onto this next step I speak of, by running:
{% include Code/codeu.html line1="jekyll new username.github.io" %}
this should create a new folder with the default layout of a Jekyll site in `/home/username/username.github.io` (assuming you ran this from your home directory and your PC username is the same as your GitHub username). Then change into this directory ({% include Code/codeus.html line1="cd /home/username/username.github.io" %}) and run {% include Code/codeus.html line1="git init" %} (to install Git see the [Getting the Dependencies](#getting-the-dependencies) below). Then configure your git remote to point to your GitHub repo. This means, for me at least, running something like:
{% include Code/codeu.html line1="git remote add origin https://github.com/username/username.github.io" %}
after this you will likely wish to edit your site's `_config.yml` file, adding information about your site, further details can be found in the [next section](#configuration). After you think you are finished editing `_config.yml` I would recommend you run Jekyll locally by following the Bundle instructions outlined in [this section](#running-locally), as this will tell you if there are any issues you need to fix with your Jekyll site and give you some hints as to where and what they might be. If no errors turn up then I would recommend you start making commits to your site's Git repository with:
{% include Code/codeu.html line1="git add --all" line2="git commit -m &quot;Commit message&quot;" line3="git push origin master" %}
where, of course, `"Commit message"` is to be replaced with your actual commit message. Typing this out everytime one wishes to make a commit can get a little tedious and irritating so I would recommend adding this function to your `~/.bashrc` file:
{% include Code/gist.html id="239ff3639cb9930b444d" %}
and then sourcing this file with `source ~/.bashrc`. This way whenever you want to make a commit merely type `push "Commit message"` inside a terminal window running Bash.
