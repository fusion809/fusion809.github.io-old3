## OpenRA
{% include Infoboxes/game.html game="OpenRA" screenshot="OpenRA.png" screenshot_caption="Screenshot of OpenRA 20170408 playtest" date="? Before or in 2007 (copyright date on website)." basis="Command & Conquer: Red Alert" development="Post-release" license="GPLv3" genre="Real-time strategy" language="C#" website="www.openra.net" website-full="http://www.openra.net/" wiki="github.com/OpenRA/OpenRA/wiki" wiki-link="https://github.com/OpenRA/OpenRA/wiki" platforms="DragonFlyBSD, FreeBSD, macOS, Windows NT" irc="#openra" github="OpenRA/OpenRA" graphics="2D" developers-link="https://github.com/OpenRA/OpenRA/blob/bleed/AUTHORS" developers="Chris Forbes, Igor Popov, Lukas Franke, <i>et al.</i>" %}

**OpenRA** is a free and open-source, cross-platform RTS game that is an open-source remake of Command & Conquer: Red Alert. It is developed by its own community of volunteer developers and it strives for compatibility with the original Command & Conquer: Red Alert game, but it does have a few extra features not found in Command & Conquer: Red Alert. In it one leads a fairly modern society and must command units to make the money one needs to fund an army capable of defeating opposing team(s). In it one can play against other players or against any (or even multiple different bots) of four different bots (Naval AI, Normal AI, Petra AI and Turtle AI). There are three official mods available for the game: Dune 2000, Red Alert (the default; its logo is also the official OpenRA logo) and Tiberian Dawn. Unofficial, user-submitted mods are available from [www.moddb.com/games/openra/mods](http://www.moddb.com/games/openra/mods). Each mod has its own backstory and a series of maps on which one can play. For details about the backstory of each official mod see the [OpenRA about page](http://www.openra.net/about/).

OpenRA is unusual among games in that it is written in C# and is built on the Mono framework. Most games are written in C, C++ or occasionally Java or Python. Its graphics are low-quality, although frankly I do not think graphics are really a priority for its development team as otherwise they probably would not write it in C#.

### Packaging details
On Linux OpenRA 20170421 has an installed size of approximately 25 MB. Here is what `equery` has to say about its size on Gentoo Linux (on 2 May 2017):

{% include Code/equery.html package1="games-strategy/openra" packageversion1="20170421" files1="2013" size1="26.51" overlay="fusion809" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/63cbd6d/games-strategy/openra/openra-20170421.ebuild" %}

Distributions with an OpenRA package in their official repositories include:

* {% include Packages/archlinux.html arch="any" package="openra" %}
* {% include Packages/mageia.html package="openra" %}

while:

* CentOS
* Debian
* Fedora
* Gentoo Linux
* openSUSE
* PCLinuxOS
* Sabayon Linux
* SUSE Linux Enterprise (SLE)
* Ubuntu

do not have an OpenRA package in their official repositories. Although CentOS, Fedora, openSUSE and SUSE Linux Enterprise do have OpenRA packages in the unofficial [`games:openra`](https://build.opensuse.org/project/show/games:openra) Open Build Service repository ([download package link](https://software.opensuse.org/download.html?project=games:openra&package=openra)). The OpenRA development team attaches an architecture-independent Debian binary (with the file extension `.deb`) to every new tagged release of OpenRA on GitHub. These Debian binaries are compatible with both Debian and Ubuntu. One can find the tagged releases of OpenRA and the attached Debian binaries at the [OpenRA GitHub repository releases page](https://github.com/OpenRA/OpenRA/releases). Gentoo Linux has unofficial overlays that contain ebuilds for *OpenRA*, details about many of these ebuilds can be found [here](http://gpo.zugaina.org/games-strategy/openra). Not included in that search for OpenRA in Gentoo overlays is my overlay, {% include Packages/fusion809.html package="games-strategy/openra" puncr="," %} which has an ebuild (at the time of writing this it only contains an ebuild for the then latest stable release, 20170421) for *OpenRA*.

{% include Layouts/clear.html %}
