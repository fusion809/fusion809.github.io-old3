### Installation
VSCode can be installed via a number of different methods, although it is not in the official repositories of any Linux distribution I am aware of. The closest thing to a distribution with VSCode in its official repositories that I have come across is Arch Linux, which has VSCode (provided by several different packages) in the Arch User Repository. To simplify the installation process I have created my own shell installer for VSCode (GitHub repository: [vscode-installer](https://github.com/fusion809/vscode-installer)). It provides users with two main options, for most Linux distributions, they are:

* Install from a binary package (usually a Debian, RPM package or zip binary provided by Microsoft)
* Install from source code

To use this installer run:

{% include Code/codeu.html line1='/bin/bash -c "$(curl -sL https://git.io/vrLNn)"' %}

or, alternatively, if you would rather use wget to get the quick-install script:

{% include Code/codeu.html line1='/bin/bash -c "$(wget -cqO- https://git.io/vrLNn)"' %}
