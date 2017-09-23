## Warzone 2100
{% include Infoboxes/game.html game="Warzone 2100" date="? First released in 1999" genre="Real-time strategy/tactics" license="GPLv2" logo="Warzone2100.png" screenshot="Warzone_2100_3.2.3.png" screenshot_caption="Screenshot of Warzone 2100 3.2.3 running on Gentoo Linux" language="C, C++ (>85%)" website="wz2100.net" website-full="http://wz2100.net" wiki="developer.wz2100.net" wiki-link="http://developer.wz2100.net/" official-wiki="Yes" platforms="FreeBSD, macOS, Windows NT" sf="warzone2100" github="Warzone2100/warzone2100" irc="#warzone2100" developers="Pumpkin Studios" development="Post-release" graphics="Low-quality 3D" %}

**Warzone 2100** is a free and open-source, cross-platform, hybrid RTS and real-time tactics game. Its graphics are three-dimensional, but low-quality, at least, in my opinion. In 1999 the first release was made, at that time it was closed-source, but in 2004 it was open-sourced so that the community could work on it. In it users lead the forces of *The Project* in a battle to rebuild the world after a nuclear holocaust. There are single-player and multiplayer skirmishes available, along with a campaign. Its window is not resizable using the maximize button, or by pulling the sides of the window across, and rather its window must be resized using the graphics options in the game. 

### Packaging details
Warzone 2100 has an installed size of approximately 100 MB, excluding the extra videos that can be included in the game, here is what `equery` has to say about its size (on 2 May 2017):

{% include Code/equery.html package1="games-strategy/warzone2100" packageversion1="3.2.3" files1="176" size1="99.53" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-strategy/warzone2100/warzone2100-3.2.3.ebuild?id=fa8320cf0cf3f4543f3163e7b9eb7208305ec0a3" %}

Debian-based distributions, along with openSUSE, split Warzone 2100 into two packages, `warzone2100` and `warzone2100-data`. Most distributions have a Warzone 2100 package in their official repositories, including:

* {% include Packages/archlinux.html package="warzone2100" %}
* {% include Packages/centos.html package="warzone2100" versions="7" %}
* {% include Packages/debian.html package="warzone2100" norightb="1" puncr="," %} for stable, testing and unstable. Oldstable (Wheezy) does not have a `warzone2100` package. 
* {% include Packages/fedora.html package="warzone2100" %}
* {% include Packages/gentoo.html package="games-strategy/warzone2100" %}
* {% include Packages/mageia.html package="warzone2100" %}
* {% include Packages/opensuse.html package="warzone2100" variant="Tumbleweed" puncr="," %} Leap has no official `warzone2100` package, but a package exists in the unofficial {% include Packages/gamesr.html %} repository.
* {% include Packages/pclinuxos.html package="warzone2100" %}
* {% include Packages/sabayon.html package="games-strategy/warzone2100" %}
* {% include Packages/ubuntu.html package="warzone2100" %}

{% include Layouts/clear.html %}
