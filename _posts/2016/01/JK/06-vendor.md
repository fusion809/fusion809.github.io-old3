{% capture vendor %}
## Vendor Folder
Running `bundle install` will create a folder called `vendor` inside your Jekyll site. This directory contains gems (the package format used by RubyGems) and they can take up a large amount of space in your Jekyll site. Consequently you may wish to edit your `.gitignore` file to include this vendor folder (to see how to do this you are welcome to look at this repository's [`.gitignore`](https://github.com/fusion809/fusion809.github.io/blob/master/.gitignore) file) so as to save space on your Jekyll site, it is important to do this **before** making any commits.
{% endcapture %}{{ vendor | markdownify }}
