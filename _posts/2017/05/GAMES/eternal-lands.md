## Eternal Lands
{% include Infoboxes/game.html game="Eternal Lands" genre="Massively multiplayer online role-playing game" license="Modified QTPL" license-link="https://github.com/raduprv/Eternal-Lands/blob/master/eternal_lands_license.txt" logo="Eternal_Lands.png" screenshot="Eternal_Lands_1.9.4-20170425-Arch.png" screenshot_caption="Screenshot of Eternal Lands 1.9.4.1" language="C (>80%), C++ (~15%)" basis="Independent" development="Post-release" developers="Radu Privantu and others" developers-link="http://www.eternal-lands.com/page/developers.php" website="www.eternal-lands.com" website-full="http://www.eternal-lands.com/" wiki="www.el-wiki.net" wiki-link="http://www.el-wiki.net/" platforms="FreeBSD, macOS, Windows NT" irc="#eternal-lands" github="raduprv/Eternal-Lands" date="2002" graphics="Medium-quality 3D" %}

**Eternal Lands** (**EL**) is an open-source, free-to-play massively multiplayer online role-playing game (MMORPG). It is written predominantly in C and uses OpenGL and SDL for graphics rendering. Its graphics are lower quality, in my opinion, than RuneScape (both the old deprecated Java client and the newer NXT client) and 0 A.D., and similar to that of SuperTuxKart. There are twelve skills in the game that users can train: Alchemy, Attack, Crafting, Defense, Engineering, Harvest, Magic, Manufacturing, Potion, Ranging and Tailoring. 

### Packaging details
Eternal Lands is less ubiquitous in the Linux world than 0 A.D. or SuperTux, although a universal shell script installer exists for it on Linux and can be downloaded from the [Eternal Lands download page](http://www.eternal-lands.com/page/download.php). It is approximately 55 MB in size. Its installed size is roughly 115 MB on Linux and here is an `equery` command I ran and its output on Gentoo Linux (on 1 May 2017):

{% include Code/equery.html package1="games-rpg/eternal-lands" packageversion1="1.9.3-r3" packageversion2="1.9.3-r1" files1="21" files2="4205" size1="2.43" size2="111.73" overlay="fusion809" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/295523588f25fbf27ece6cbf59d0045ff8c2d869/games-rpg/eternal-lands/eternal-lands-1.9.3-r3.ebuild" ebuildurl2="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-rpg/eternal-lands-data/eternal-lands-data-1.9.3-r1.ebuild?id=2717f31754ada85bb68e56df2ae489188d722d1b" %}

A package for Eternal Lands is available from the official repositories of the following Linux distributions:

* {% include Packages/gentoo.html package="games-rpg/eternal-lands" puncr="," %} although the official repositories only provide the slightly outdated 1.9.3 version of Eternal Lands (where 1.9.4 is available).
* {% include Packages/sabayon.html package="games-rpg/eternal-lands" puncr="," %} Sabayon's package is built from the outdated 1.9.3 ebuild in the Portage tree.

and it is not available for the following distributions, from their official repositories anyway:

* Arch Linux, although an up-to-date [`eternallands`](https://aur.archlinux.org/packages/eternallands) AUR package exists.
* CentOS
* Debian
* Fedora
* Mageia
* openSUSE, although an up-to-date [`eternal-lands`](http://software.opensuse.org/package/eternal-lands) package exists in the unofficial {% include Packages/gamesr.html %}  repository.
* PCLinuxOS
* Ubuntu

{% include Layouts/clear.html %}
