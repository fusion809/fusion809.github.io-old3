## TORCS
{% include Infoboxes/game.html logonot="1" game="TORCS" genre="Racing" screenshot="TORCS_1.3.7.png" screenshot_caption="TORCS 1.3.7 running on Gentoo Linux" date="1997" developers="Eric Espié, Christophe Guionneau, Bernhard Wymann, <i>et al.</i>" development="Post-release" license="GPLv2</a>" license-link="http://torcs.cvs.sourceforge.net/viewvc/torcs/torcs/torcs/COPYING" language="C++" website="torcs.sourceforge.net" website-full="http://torcs.sourceforge.net/" sf="torcs" irc="#torcs" platforms="DragonFlyBSD, FreeBSD, macOS, NetBSD, OpenBSD, Solaris, Windows NT" graphics="Medium-quality 3D" %}

**TORCS** is a free and open-source, 3D racing simulator game. The major difference between TORCS and SuperTuxKart are are that SuperTuxKart has a fictional theme to it as the various open-source project mascots are racing against one another and in it players can use weapons to slow their adversaries down. TORCS on the other hand, is designed to be as realistic as possible and it even includes stands where fans can watch the race and racers cannot use weapons against one another. 

### Packaging details
On Gentoo Linux TORCS 1.3.8-test1 has an installed size of approximately 620 MB. `equery` gives the following size report (on 1 May 2017):

{% include Code/equery.html package1="games-sports/torcs" packageversion1="1.3.8_rc1" files1="3681" size1="617.03" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/19504c2bb964a1c78e6dd3fbb6a8b2a5d42d79a9/games-sports/torcs/torcs-1.3.8_rc1.ebuild" %}

Distributions with a TORCS package in their official repositories include:

* {% include Packages/archlinux.html package="torcs" %}
* {% include Packages/debian.html package="torcs" %}
* {% include Packages/fedora.html package="torcs" %}
* {% include Packages/gentoo.html package="games-sports/torcs" puncr="," %} although presently the Portage tree provides the outdated 1.3.6 version of *TORCS*, but my {% include Packages/fusion809.html package="games-strategy/torcs" %} overlay provides the latest stable and testing releases of *TORCS*.
* {% include Packages/mageia.html package="torcs" %}
* {% include Packages/pclinuxos.html package="torcs" %}
* {% include Packages/sabayon.html package="games-sports/torcs" %}
* {% include Packages/ubuntu.html package="torcs" %}

while the following distributions do not:

* CentOS
* openSUSE, although the unofficial {% include Packages/gamesr.html package="scorched3d" %} repository has a package for it on Leap and Tumbleweed.

{% include Layouts/clear.html %}
