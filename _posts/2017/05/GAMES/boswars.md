## Bos Wars
{% include Infoboxes/game.html game="Bos Wars" logonot="1" screenshot="Bos_Wars_2.7.png" screenshot_caption="Screenshot of Bos Wars 2.7" date="2003" developers="Bos Wars Team" development="Post-release" license="GPLv2" genre="Real-time strategy" language="C++, Lua, Python." website="www.boswars.org" website-full="https://www.boswars.org/" wiki="www.boswars.org/wiki/" wiki-link="https://www.boswars.org/wiki/" platforms="DragonFlyBSD, FreeBSD, macOS, NetBSD, OpenBSD, Windows NT, <i>etc.</i>" irc="#bos" graphics="Low-quality 3D" %}

**Bos Wars** is a free and open-source, cross-platform futuristic RTS game. Like most RTS games in Bos Wars one has to fight their enemy armies while developing their economy. Bos Wars is fairly infrequently updated with its last update being version 2.7 which was released in June 2013, almost four years ago. Its graphics are poor, although I doubt its developers ever intended its graphics to be anything worth showing-off. Both single-player (wherein one plays against the computer) and multiplayer (wherein one plays against other players) options for playing the game are available.

### Packaging details
The installed size of Bos Wars 2.7 on Gentoo Linux is roughly 88 MB, here is an `equery s` command and its output on Gentoo Linux (on 1 May 2017):

{% include Code/equery.html package1="games-strategy/boswars" packageversion1="2.7-r1" size1="87.67" files1="1685" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-strategy/boswars-2.7-r1.ebuild?id=fcc333a85b1ce79142b43ab773bfc74efdc707ad" %}

Bos Wars is a fairly ubiquitous game in the Linux world; the following distributions have a package for Bos Wars in their official repositories:

* {% include Packages/debian.html package="boswars" %}
* {% include Packages/fedora.html package="boswars" %}
* {% include Packages/gentoo.html package="games-strategy/boswars" %}
* {% include Packages/mageia.html package="boswars" %}
* {% include Packages/sabayon.html package="games-strategy/boswars" %}
* {% include Packages/ubuntu.html package="boswars" %}

and it is not in the official repositories of:

* Arch Linux, although it is in the Arch User Repository (AUR) with the package name [`boswars`](https://aur.archlinux.org/packages/boswars).
* CentOS
* openSUSE, although it is in the unofficial {% include Packages/gamesr.html %} repository.

The Bos Wars development team also provide an official tarball binary for *Bos Wars*, a link to it can be found on the [downloads page](https://www.boswars.org/download.shtml).

{% include Layouts/clear.html %}
