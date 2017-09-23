## KMines
{% include Infoboxes/game.html game="KMines" screenshot="KMines_17.04.0.png" screenshot_caption="KMines 17.04.0 running on Gentoo Linux" license="GPLv2" license-link="https://github.com/KDE/kmines/blob/master/COPYING" genre="Puzzle" date="1996" development="Post-release" language="C, C++ (>90%)" github="KDE/kmines" developers="Nicolas Hadacek, Mauricio Piacentini, Dmitry Suzdalev, <i>et al.</i>" developers-link="https://www.kde.org/applications/games/kmines" platforms="DragonFlyBSD, FreeBSD, NetBSD, OpenBSD" website="www.kde.org/applications/games/kmines" websites-link="https://www.kde.org/applications/games/kmines" graphics="2D" %}

**KMines** is a free and open-source, minesweeper game that is developed as part of the KDE Project. In it users click on tiles and deduce, by the numbers displayed on the tiles (which tell one the number of mines in the immediate vicinity of the tile), as to where the mines are and where the tiles that are safe to click are. Once all the safe tiles have been clicked the game is won, but if a single mine is clicked the game is lost. 

### Packaging details
KMines has an installed size of approximately 3.46 MB on Gentoo Linux. `equery` prints the following report on its installed size:

{% include Code/equery.html package1="kde-apps/kmines" packageversion1="17.04.0" files1="275" size1="3.46" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/kde-apps/kmines/kmines-17.04.0.ebuild?id=1799b8fd29a3d6fdfea87b210897ce86c6a1936a" %}

Like KMahjongg, KMines is part of the games suite of KDE so it should be available from the official repositories of any distribution with KDE in its repositories. Packages with KMines in its official repositories include:

* {% include Packages/archlinux.html package="kmines" %}
* {% include Packages/centos.html package="kmines" %}
* {% include Packages/debian.html package="kmines" %}
* {% include Packages/fedora.html package="kmines" %}
* {% include Packages/gentoo.html package="kde-apps/kmines" %}
* {% include Packages/mageia.html package="kmines" %}
* {% include Packages/opensuse.html package="kmines" %}
* {% include Packages/pclinuxos.html package="kmines" %}
* {% include Packages/sabayon.html package="kde-apps/kmines" %}
* {% include Packages/ubuntu.html package="kmines" %}

{% include Layouts/clear.html %}
