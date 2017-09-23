## XBoard
{% include Infoboxes/game.html game="XBoard" date="? The earliest reference to XBoard I can find was in 1994" developers="GNU Project" screenshot="XBoard_4.9.1.png" screenshot_caption="Screenshot of XBoard 4.9.1 running on Gentoo Linux" genre="Turn-based strategy board game" license="GPLv3" license-link="https://github.com/arunpersaud/xboard/blob/master/COPYRIGHT" language="C, Objective-C" development="Post-release" website="www.gnu.org/software/xboard" website-full="https://www.gnu.org/software/xboard/" github="arunpersaud/xboard" platforms="FreeBSD, macOS, NetBSD, OpenBSD, Windows NT" graphics="2D" %}

**XBoard** is a free and open-source, X11 graphical front-end to any of a variety of different chess game engines like Crafty or GNU Chess. It is developed as part of the GNU Project, unlike GNOME Chess XBoard seems to only support single-player mode, that is, when the player plays against the computer (namely the game engine). In my opinion its interface is still stuck in the 1990s and is less intuitive than that of GNOME Chess, although unlike GNOME Chess it has been ported to a wide array of different operating systems. One can undo moves in XBoard, it is just an option that took me a while to find as it is hidden in the "Engine" drop menu and is called "Retract Move", while usually this option is called "Undo" in other games.

### Packaging details
XBoard 4.9.1 has an installed size on Linux of approximately 3.8 MB and the most common game engine for it, GNU Chess has an installed size of 1.2 MB. Here is what `equery` reports about its installed size on Gentoo Linux (on 3 May 2017):

{% include Code/equery.html package1="games-board/xboard" package2="games-board/gnuchess" packageversion1="4.9.1" packageversion2="6.2.4" files1="294" files2="64" size2="1.24" size1="3.84" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/58bbd69bb7a54e49ee53a290ec2a5119e620613c/games-board/xboard/xboard-4.9.1.ebuild" ebuildurl2="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-board/gnuchess/gnuchess-6.2.4.ebuild?id=fcc333a85b1ce79142b43ab773bfc74efdc707ad" %}

XBoard is available from the official repositories of the majority of distributions, including:

* {% include Packages/archlinux.html package="xboard" %}
* {% include Packages/debian.html package="xboard" %}
* {% include Packages/fedora.html package="xboard" %}
* {% include Packages/gentoo.html package="games-board/xboard" %}
* {% include Packages/mageia.html package="xboard" %}
* {% include Packages/opensuse.html package="xboard" %}
* {% include Packages/pclinuxos.html package="xboard" %}
* {% include Packages/sabayon.html package="games-board/xboard" %}
* {% include Packages/ubuntu.html package="xboard" %}

while it is not in the official repositories of CentOS. 

{% include Layouts/clear.html %}
