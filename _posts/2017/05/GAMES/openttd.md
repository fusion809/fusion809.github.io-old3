## OpenTTD
{% include Infoboxes/game.html screenshot="OpenTTD_1.7.0.png" screenshot_caption="Screenshot of OpenTTD 1.7.0 running on Gentoo Linux" game="OpenTTD" basis="Transport Tycoon Deluxe" development="Post-release" license="GPLv2" genre="Business simulation" language="C++" website="www.openttd.org" website-full="https://www.openttd.org/en/" wiki="wiki.openttd.org" wiki-link="https://wiki.openttd.org" official-wiki="Yes" platforms="DragonFlyBSD, FreeBSD, macOS, NetBSD, OpenBSD, Solaris (and derivatives like OpenIndiana), Windows 9x, Windows NT" irc="#openttd" sf="openttd" date="2003" developers="Ludvig Strigeus, Serge Paquet, Remko Bijker, <i>et al.</i>" developers-link="https://wiki.openttd.org/Developers" graphics="2D" %}

**OpenTTD** is a free and open-source, extremely cross-platform, largely two-dimensional business simulation game. It is designed to be an actively maintained, improved clone of the 1995 proprietary video game [*Transport Tycoon Deluxe*](https://en.wikipedia.org/wiki/Transport_Tycoon) that was developed by [Chris Sawyer](https://en.wikipedia.org/wiki/Chris_Sawyer). In it players earn money by transporting passengers and freight by air, rail, road and water. Compared to the game it is based on it, it has several extra features including extra language support, a more user-friendly user interface, downloadable extensions and greater portability. I personally have little experience with this game as I generally do not like games that are business-oriented. 

### Packaging details
OpenTTD 1.7.0 has an installed size of approximately 15 MB. `equery` gives the following size details:

{% include Code/equery.html package1="games-simulation/openttd" packageversion1="1.7.0" size1="15.49" files1="137" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/064297a/games-simulation/openttd/openttd-1.7.0.ebuild" overlay="fusion809" %}

There are cross-distribution binary tarballs for 32-bit and 64-bit Linux that are published by the OpenTTD development team, they can be downloaded from [here](https://www.openttd.org/en/download-stable). The following distributions have a package for OpenTTD in their official repositories (note everything date-specific mentioned below is as of 5 May 2017, when this section of the article was written):

* {% include Packages/archlinux.html package="openttd" %}
* {% include Packages/debian.html package="openttd" puncr="," %} the latest releases of OpenTTD have Deb packages published for oldstable and stable by the OpenTTD development team, they also can be downloaded from [here](https://www.openttd.org/en/download-stable). 
* {% include Packages/fedora.html package="openttd" puncr="," %} rather impressive that every presently-supported release of Fedora (so 24, 25, 26 and rawhide) have the very latest OpenTTD at the time of writing, 1.7.0. 
* {% include Packages/gentoo.html package="games-simulation/openttd" puncr="," %} presently the Portage tree provides fairly outdated versions of OpenTTD (1.6.0, 1.6.1-r1), although my overlay, {% include Packages/fusion809.html puncr="," %} provides the very latest OpenTTD, 1.7.0. 
* {% include Packages/mageia.html package="openttd" %}
* {% include Packages/opensuse.html package="openttd" puncr="," %}
* {% include Packages/pclinuxos.html package="openttd" %}
* {% include Packages/sabayon.html package="games-simulation/openttd" puncr="," %} also stores an out-of-date version of OpenTTD, 1.6.1-r1. Although if you are willing to use Portage to install the latest you can from my overlay, {% include Packages/fusion809.html puncr="." %}
* {% include Packages/ubuntu.html package="openttd" puncr="," %} the OpenTTD development team provide Deb packages for the latest stable release of OpenTTD on Ubuntu 14.04, for download details see [this page](https://www.openttd.org/en/download-stable).

{% include Layouts/clear.html %}
