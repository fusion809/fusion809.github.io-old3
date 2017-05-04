### Installation
Komodo Edit while not in the official repositories of any Linux distribution I am aware of, can be easily installed on x86 and x86_64 Linux systems from the binary tarball releases on the Komodo Edit home page. You can browse available binary tarballs [here](http://downloads.activestate.com/Komodo/releases/), although beware half of the binary tarballs are for Komodo IDE. I have written a shell script installer {% include Links/fusgr.md repo="komodo-installer" puncl="(" puncr=")" %} for Komodo Edit that should work on most major Linux distributions (including all distributions in the top 10 most popular, as ranked by *DistroWatch*). If you experience any errors with it feel free to file [a new issue](https://github.com/fusion809/komodo-installer/issues/new), or if you have a solution to any problems you experience you may file a new pull request. To use this installer with cURL run:

{% include Code/codeu.html line1='/bin/bash -c "$(curl -sL https://git.io/vrGbs)"' %}

while to use it with `wget`, run:

{% include Code/codeu.html line1='/bin/bash -c "$(wget -cqO- https://git.io/vrGbs)"' %}
