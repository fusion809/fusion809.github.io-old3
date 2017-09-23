## GNOME Chess
{% include Infoboxes/game.html game="GNOME Chess" date="2000" developers="Robert Ancell, Michael Catanzaro, Sahil Sareen, <i>et al.</i>" developers-link="https://github.com/GNOME/gnome-chess/graphs/contributors" logo="GNOME_Chess.png" screenshot="GNOME_Chess_3.22.2.png" screenshot_caption="Screenshot of GNOME Chess 3.22.2" genre="Board" license="GPLv3" license-link="https://github.com/GNOME/gnome-chess/blob/master/COPYING" language="Vala" development="Post-release" website="wiki.gnome.org/Apps/Chess" website-full="https://wiki.gnome.org/Apps/Chess" github="GNOME/gnome-chess" platforms="FreeBSD" graphics="Medium-quality 3D (&lt;3.14), 2D (&geq;3.14)" %}

**GNOME Chess** (previously known as **glChess**) is a free and open-source, classic chess game that is provided as part of the GNOME games suite. What is interesting about GNOME Chess is that while it provides a nice interface to play chess in, it does not provide a game engine and rather if users want to play against the computer they have to install a chess game engine that GNOME Chess can use. The most popular game engine that GNOME Chess can use is probably [*GNU Chess*](https://www.gnu.org/software/chess/). Users can also play against other humans. One can, via the preferences interface, set time limits to the game, adjust the difficulty setting of the game engine and even adjust the type of clock used to impose time limits on the game. There are other chess games available for Linux, but GNOME Chess is the best one in my opinion as it allows users to easily undo their moves, which, for someone as impatient as myself, is a must. 

Prior to the 3.14 release GNOME Chess had a 3D mode, but in 3.14 and later releases only a 2D mode is available for the game. The reason for ditching 3D support is related to the adoption of the Wayland display server, to continue supporting 3D mode under Wayland would require porting the graphics from GLX to EGL. The GNOME Chess developers were not interested in working in this so in June 2014 it was announced that 3D support would be ditched. 

### Packaging details
On most Linux distributions GNOME Chess has an installed size of approximately 9 MB. *GNU Chess*, its most popular game engine, has an installed size of approximately 1.2 MB. Here are the size-related details on Gentoo Linux:

{% include Code/equery.html package1="games-board/gnome-chess" packageversion1="3.22.2" files1="512" size1="8.8" package2="games-board/gnuchess" packageversion2="6.2.4" files2="64" size2="1.24" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-board/gnome-chess/gnome-chess-3.22.2.ebuild?id=fcc333a85b1ce79142b43ab773bfc74efdc707ad" ebuildurl2="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-board/gnuchess/gnuchess-6.2.4.ebuild?id=fcc333a85b1ce79142b43ab773bfc74efdc707ad" %}

As GNOME Chess is part of the game application suite of GNOME it should be available from the official repositories of any distribution that supports GNOME. It is available from the official repositories of:

* {% include Packages/archlinux.html package="gnome-chess" repo="extra" %}
* {% include Packages/centos.html package="gnome-chess" notepel="1" %}
* {% include Packages/debian.html package="gnome-chess" puncr="," norightb="1" %} for stable, testing and unstable branches and {% include Packages/debian.html no="1" package="glchess" %} for oldstable (Wheezy))
* {% include Packages/fedora.html package="gnome-chess" %}
* {% include Packages/gentoo.html package="games-board/gnome-chess" %}
* {% include Packages/mageia.html package="gnome-chess" %}
* {% include Packages/opensuse.html package="gnome-chess" %}
* {% include Packages/sabayon.html package="games-board/gnome-chess" %}
* {% include Packages/ubuntu.html package="gnome-chess" %}, only in the official repositories of 14.04 and later releases.

{% include Layouts/clear.html %}
