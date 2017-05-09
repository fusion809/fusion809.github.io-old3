## Freeciv
{% include Infoboxes/game.html game="Freeciv" date="November 1995" genre="Turn-based strategy" license="GPLv3" basis="Sid Meier's Civilization II" screenshot="Freeciv-2.5.6.png" screenshot_caption="Screenshot of <i>Freeciv</i> 2.5.6" development="Post-release" language="Standalone: C, C++, Lua and Python. Web-based: Java, JavaScript and Python." website="<a href='http://freeciv.org/' link='_blank'>freeciv.org</a>" wiki="<a href='http://freeciv.wikia.com/wiki/Main_Page' link='_blank'>freeciv.wikia.com</a>" official-wiki="Yes" platforms="FreeBSD, macOS, Windows NT" sf="freeciv" github="freeciv" irc="#freeciv" graphics="2D, low-medium quality 3D" %}

***Freeciv*** is a free and open-source, cross-platform turn-based strategy (TBS) game that resembles early versions of Sid Meier's Civilization. Its graphics are of low-quality and it supports both 2D and 3D graphics. In it users build their own civilization and fight opposing teams. I personally have never seen the appeal to TBS games, so I have hardly used Freeciv. It has both a standalone client and a web-based client through which one can play the game.

### Packaging details
*Freeciv* 2.5.6 has an installed size of approximately 47 MB on Linux; the output of `equery s` on Gentoo Linux (on 1 May 2017) is:

{% include Code/equery.html package1="games-strategy/freeciv" packageversion1="2.5.6" files1="3594" size1="47.15" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-strategy/freeciv/freeciv-2.5.6.ebuild?id=fa8320cf0cf3f4543f3163e7b9eb7208305ec0a3" %}

*FreeCiv* is ubiquitous in the Linux world and found in the official repositories of most distributions. Distributions with a *Freeciv* package in their official repositories include:

* {% include Packages/archlinux.html repo="extra" package="freeciv" %}
* {% include Packages/centos.html package="freeciv" %}
* {% include Packages/debian.html package="freeciv" %}
* {% include Packages/fedora.html package="freeciv" %}
* {% include Packages/gentoo.html package="games-strategy/freeciv" %}
* Mageia has two packages belonging to Freeciv: {% include Packages/mageia.html no="1" package="freeciv-client" %} and {% include Packages/mageia.html no="1" package="freeciv-server" puncr="." %}
* {% include Packages/opensuse.html package="freeciv" %}, available for Leap 42.2 and Tumbleweed. Leap 42.1 does not have an official Freeciv package, but there is a package for Freeciv in the unofficial {% include Packages/gamesr.html %} repository.
* {% include Packages/pclinuxos.html package="freeciv-client" package2="freeciv-server" %}
* {% include Packages/sabayon.html package="games-strategy/freeciv" %}
* {% include Packages/ubuntu.html package="freeciv" %}

{% include Layouts/clear.html %}
