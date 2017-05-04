{% capture mycapture %}
## Editing
{% include Links/image.html image="Atom/Using-Atom-1.4.0-to-edit-Jekyll-site.png" width="1130px" float="none" description="<i>The Hornery</i> opened in Atom 1.4.0" %}
Jekyll sites are essentially just GitHub repositories that contain several markup and source code files that can be edited in any text editor or through GitHub's web-based interface. The way I edit *The Hornery* is by Git cloning its repository, editing its markup and source code files with Atom, GVim or Visual Studio Code and then committing any changes upstream with Git, after first testing for errors by [running Jekyll locally](#running-jekyll-locally). Jekyll sites can also be edited from the command-line with GNU nano or Vim, although one would still need commit any changes upstream with Git. I use the `push` function to push these changes upstream.
{% endcapture %}{{ mycapture | markdownify }}
