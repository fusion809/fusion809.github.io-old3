## FreeCol
{% include Infoboxes/game.html game="FreeCol" screenshot="FreeCol-0.11.6.png" screenshot_caption="Screenshot of FreeCol 0.11.6 near the start of a game" basis="Sid Meier's Colonization" basis-link="https://en.wikipedia.org/wiki/Sid_Meier's_Colonization" development="Beta" date="2002" genre="Turn-based strategy" license="GPLv2" platforms="FreeBSD, macOS, Windows NT" language="Java" website="www.freecol.org" website-full="http://www.freecol.org/" sf="freecol" github="fenyo1/FreeCol" irc="#freecol" graphics="2D" developers="Michael Vehrs, Mike Pope, Stian Grenborgen, <i>et al.</i>" developers-link="https://sourceforge.net/p/freecol/git/ci/master/tree/" %}

**FreeCol** is a free and open-source, cross-platform clone of [Sid Meier's Colonization](https://en.wikipedia.org/wiki/Sid_Meier%27s_Colonization). Its graphics are similarly two-dimensional and low-quality. In it one has to create a civilization (or colony) of settlers in the New World (the Americas) and defeat the royal expeditionary forces. The storyline of FreeCol begins in 1492. In theory, as it is written in Java, it should be runnable on any Java-compatible platform and it is known to run on FreeBSD, Linux, macOS and Windows NT.

### Packaging details
FreeCol 0.11.6 has an installed size of approximately 41 MB, and here is the output of `equery s` on Gentoo Linux (on 1 May 2017):

{% include Code/equery.html package1="games-strategy/freecol" packageversion1="0.11.6" size1="41.15" files1="1531" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-strategy/freecol/freecol-0.11.6.ebuild?id=fa8320cf0cf3f4543f3163e7b9eb7208305ec0a3" %}

The following distributions have a package for FreeCol in their official repositories:

* {% include Packages/archlinux.html package="freecol" %}
* {% include Packages/debian.html package="freecol" %}
* {% include Packages/fedora.html package="freecol" %}
* {% include Packages/gentoo.html package="games-strategy/freecol" %}
* {% include Packages/mageia.html package="freecol" %}
* {% include Packages/pclinuxos.html package="freecol" %}
* {% include Packages/sabayon.html package="games-strategy/freecol" %}
* {% include Packages/ubuntu.html package="freecol" %}

while the following distributions have no such official package:

* CentOS
* openSUSE, although a package for FreeCol 0.10.7 (an outdated version considering the latest, as of 22 April 2017, is 0.11.6) is in the unofficial {% include Packages/gamesr.html %} repository for openSUSE Tumbleweed.

{% include Layouts/clear.html %}
