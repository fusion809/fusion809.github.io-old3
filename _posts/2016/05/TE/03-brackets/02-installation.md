### Installation
Brackets is more challenging than most other editors mentioned in this post to install on Linux distributions that do not use the `APT`/`dpkg` package managers, this is because on most distributions you either have to install Brackets from the Debian binaries provided by the Bracket's GitHub repository (on non Debian-based distributions this can still be done via extracting these binaries and moving the files within to the appropriate locations on one's system) or build Brackets from source code. You can find these Debian binaries provided by the Bracket's GitHub repository on their [releases][3] page.

I have created a [shell script installer][4] for Brackets, that should work on most popular Linux distributions (see its [README][5] for details on which distributions are supported). To use it, run (assuming cURL is installed):

{% include Code/codeu.html line1='/bin/bash -c "$(curl -sL https://git.io/vrYlf)"' %}

or, if cURL is not installed but wget is, run:

{% include Code/codeu.html line1='/bin/bash -c "$(wget -cqO- https://git.io/vrYlf)"' %}

[3]: https://github.com/adobe/brackets/releases
[4]: https://github.com/fusion809/brackets-installer
[5]: https://github.com/fusion809/brackets-installer/blob/master/README.md
