## Installing Atom
Atom is nowhere near as straight-forward to install as GNU Emacs, Vim or any other major free and open-source text editors. The reasons are several fold. Firstly, the vast majority of Linux distributions so far do not have an Atom package in their official software repositories. This leaves users to either have to build an Atom package themselves or [compile Atom from source code](#building-from-source), that is, if unofficial software repositories or other sources cannot provide a binary package for Atom. Secondly, building Atom from source code is an error-prone process that requires Internet access (and I do not mean to just retrieve Atom's source code, rather the build itself, requires Internet access). Thirdly, building Atom requires a recent version of Node.js and npm to be installed on one's system. The Atom GitHub repository has a mechanism for automatically building 64-bit Deb and RPM packages for each new Atom release, which allows Atom to be easily installed on platforms capable of installing these packages. The main problems with this method are that:

* Firstly, not all distributions can work with Deb/RPM packages.
* Secondly, these binaries are available for only 64-bit systems.
* Third, even 64-bit systems that are capable of installing these packages do not get automatic updates when new releases of Atom become available. Rather the user will have to manually download the new Atom package for their respective distribution and upgrade Atom using said package.

On some distributions Atom can be installed from official or unofficial package repositories, if your distribution supports this I would strongly recommend you install Atom via this method. This way, when new releases of Atom come out, your Atom installation should be automatically updated when you run your package manager.

On a side note, anyone interested in making Atom easier to install on Linux I would recommend check out my new [`atom-installer`](https://github.com/fusion809/atom-installer) GitHub repository. It is my aim to get this repository capable of automating the installation process of Atom on at least the following distributions:

{% capture dlist %}
* Arch Linux
* CentOS
* Debian
* Fedora
* Gentoo Linux
* Linux Mint
* Mageia
* openSUSE
* Sabayon Linux
* Ubuntu
{% endcapture %}{% include Layouts/column.html content=dlist %}

pull request, bug reports, improvement suggestions, *etc.* will be welcome.

{% include_relative 05a-binaries.md %}

{% include_relative 05b-pms.md %}
