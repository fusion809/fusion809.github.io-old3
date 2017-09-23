## MegaGlest
{% include Infoboxes/game.html game="MegaGlest" screenshot="MegaGlest_3.13.0.png" screenshot_caption="Screenshot of MegaGlest 3.13.0 running on Gentoo Linux" date="2010" forked="Glest" development="Post-release" license="GPLv3" genre="Real-time strategy" language="C++" website="megaglest.org" website-full="https://megaglest.org" developers-link="https://megaglest.org/credits" developers="Titus Tscharntke, Tom Reynolds, <i>et al.</i>" wiki="docs.megaglest.org" wiki-links="https://docs.megaglest.org/" official-wiki="Yes" irc="#MegaGlest" irc-server="megaglest.org" github="MegaGlest/megaglest-source" sf="megaglest" platforms="FreeBSD, macOS, NetBSD, OpenBSD, Windows NT" graphics="Medium-quality 3D" %}

**MegaGlest** is a free and open-source, cross-platform, three-dimensional real-time strategy game that was forked from the discontinued Glest game in 2010. Glest's development ceased in 2009, so MegaGlest is essentially a project to try and keep the game alive in some form. MegaGlest has graphics of similar quality to that of SuperTuxKart, but they are poorer than that of 0 A.D. and RuneScape. In MegaGlest the player leads an army consisting of one of seven different factions: Egypt, Indians, Magic, Norsemen, Persians, Romans or Tech. It is played on one of seventeen different maps. Further details about gameplay are mentioned in this quote from the official website:{% include_relative fn-inline.html no="8" %}

> A game of MegaGlest takes place on a map of varying size, such as large plains and fields, with terrain features like rivers, mountains, seas, or cliffs. Players must establish settlements to gain resources, defend against other players, and train units to explore the map and attack enemies. Different resources have to be gathered by every faction. This can be energy, food, gold, housing, stone and wood. Choose a faction and create its different units and buildings while developing its unique abilities over the course of the game. But beware: micro management and strategy matter, so chose wisely when deciding which units to use when and where if you want a chance to beat the enemy.

### Packaging details
On Linux MegaGlest is often split into two packages: `megaglest` and `megaglest-data`, with `megaglest` containing the game engine and `megaglest-data` containing the game content. Together these two packages have an installed size of roughly 500 MB. To illustrate this here is a command I ran on Gentoo Linux (on 30 April 2017) and below it is the output:

{% include Code/equery.html package1="games-strategy/megaglest" packageversion1="3.13.0" files1="27" files2="6877" size1="10.93" size2="488.93" overlay="fusion809" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/791d0d6/games-strategy/megaglest/megaglest-3.13.0.ebuild" ebuildurl2="https://github.com/fusion809/fusion809-overlay/blob/0a28377/games-strategy/megaglest-data/megaglest-data-3.13.0.ebuild" %}

Both packages were provided by my own {% include Packages/fusion809.html puncr="," %} building the ebuild in the Portage tree fails, due to an issue I reported in [Gentoo Bug 614408](https://bugs.gentoo.org/show_bug.cgi?id=614408).

MegaGlest is available from the official repositories of a wide range of different Linux distributions, including:

* {% include Packages/archlinux.html package="megaglest" %}
* {% include Packages/debian.html package="megaglest" %}
* {% include Packages/fedora.html package="megaglest" %}
* {% include Packages/gentoo.html package="games-strategy/megaglest" %}
* {% include Packages/mageia.html package="megaglest" %}
* {% include Packages/pclinuxos.html package="megaglest" %}
* {% include Packages/ubuntu.html package="megaglest" %}

while it is not available from the official repositories of:

* CentOS
* openSUSE, although it is available from the unofficial {% include Packages/gamesr.html %} repository.
* Sabayon Linux, although users are free to emerge it with Portage from the Portage tree. 

{% include Layouts/clear.html %}
