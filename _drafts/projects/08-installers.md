## Installers
I have created five shell script installers for some text editors/integrated development environments I am fond of. They are all very similar to one another, partly due to laziness and also partly due to how it simplifies things both from my point of view and from user's point of view. They all detect the operating system they are running on by looking at `/etc/os-release`. Due to this they will treat some derivative distributions (e.g., Linux Mint) the same as their parent (in the previous example this would be Ubuntu). They all support the following distributions:

{% capture list %}
* Arch Linux
* CentOS
* Debian
* Fedora
* Linux Mint
* Mageia
* Manjaro Linux
* openSUSE
* Sabayon Linux
* Ubuntu
* Zorin OS
{% endcapture %}{% include Layouts/column.html no="5" content=list %}

So far I have created the following installers:

* [`atom-installer`](https://github.com/fusion809/atom-installer) &mdash; has experimental support for Gentoo Linux too.
* [`brackets-installer`](https://github.com/fusion809/brackets-installer)
* [`komodo-installer`](https://github.com/fusion809/komodo-installer) &mdash; this one is unique in that it has no option to compile the editor from source code. This is due to the difficulty I have experienced trying to install Komodo from source.
* [`lighttable-installer`](https://github.com/fusion809/lighttable-installer)
* [`vscode-installer`](https://github.com/fusion809/vscode-installer)
