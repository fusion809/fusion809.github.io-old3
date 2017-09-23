## SuperTux
{% include Infoboxes/game.html game="SuperTux" screenshot="SuperTux_0.5.1.png" screenshot_caption="Screenshot of SuperTux 0.5.1" date="? First release was in April 2003." basis="Super Mario Bros" development="Alpha" license="GPLv3" genre="Arcade" language="C++" website="supertuxproject.org" website-full="https://supertuxproject.org/" wiki="github.com/SuperTux/supertux/wiki" wiki-link="https://github.com/SuperTux/supertux/wiki" platforms="DragonFlyBSD, FreeBSD, macOS, NetBSD, OpenBSD, Solaris, Windows 9x, Windows NT" irc="#supertux" github="SuperTux/supertux" sf="super-tux" graphics="2D" %}

**SuperTux** is a free and open-source, extremely cross-platform arcade game that is most similar to the proprietary Super Mario Bros game. In it one guides the hero, Tux, through a series of obstacles. Its graphics are 2D and hence graphics quality is not a major concern for the game. Presently there are two major variants of the game: milestone 1 (which was released in 2003) and milestone 2 (first stable release of which was in December 2015). Milestone 1 uses far less resources (like CPU, GPU and RAM) and is a 32-bit game. Only milestone 1 is available for FreeBSD. Milestone 2 uses a lot more resources, but has more features to it.

It is one of my favourite games, as while it is simple on paper it can be an entertaining challenge. One can create one's own maps for the game and otherwise customize it. One can play it with a joystick or just with a mouse.

### Packaging details
On Linux SuperTux 0.5.1 has an installed size of approximately 125 MB. Here is what `equery` has to say about its installed size:

{% include Code/equery.html package1="games-arcade/supertux" packageversion1="0.5.1" files1="3384" size1="126.82" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-arcade/supertux/supertux-0.5.1.ebuild?id=fabb4eec7e2144c418733c13c958c931cc691bb2" %} 

SuperTux is a fairly ubiquitous game in the Linux world. Distributions with a SuperTux package in their official repositories include:

* {% include Packages/archlinux.html package="supertux" %}
* {% include Packages/centos.html package="supertux" versions="6" %} although CentOS 7 does not.
* {% include Packages/debian.html package="supertux" %}
* {% include Packages/fedora.html package="supertux" %}
* {% include Packages/gentoo.html package="games-arcade/supertux" %}
* {% include Packages/mageia.html package="supertux" %}
* {% include Packages/opensuse.html package="supertux2" %}, only a package in the official repositories of openSUSE Tumbleweed exist. No such package exists in the official repositories of either supported openSUSE Leap release. Despite this, a SuperTux package is available for Leap in the unofficial {% include Packages/gamesr.html %} repository.
* {% include Packages/pclinuxos.html package="supertux" %}
* {% include Packages/sabayon.html package="games-arcade/supertux" %}
* {% include Packages/ubuntu.html package="supertux" %}

{% include Layouts/clear.html %}
