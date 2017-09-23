## RuneScape
{% include Infoboxes/game.html game="RuneScape" genre="MMORPG" license="EULA" license-link="https://www.jagex.com/terms" logo_caption="NXT client logo" screenshot="RuneScape_2.2.4.png" screenshot_caption="Screenshot of RuneScape's NXT client version 2.2.4 running on Arch Linux" date="1999" developers="Jagex Limited" development="Post-release" language="C++ (NXT), Java (old client)" website="www.runescape.com" website-link="http://www.runescape.com" wiki="runescape.wikia.com" wiki-link="http://runescape.wikia.com" platforms="macOS, Windows NT" graphics="High-quality 3D" %}

**RuneScape** is a proprietary, cross-platform MMORPG that I have played since 2006. In it users train skills, including combat, make money (which while it is illegal to trade this money for real-world currency, it can be used to buy bonds which, in turn, can be used to buy game membership) and undertake quests. It is a freemium game, as while it is free to play the game, paying for game membership gives users several extra perks, such as being able to say adios to advertisements and unlock extra map areas, quests and skills. Free-to-play users have access to sixteen skills total while pay-to-play (P2P) users (or members) have access to twenty-seven skills total. These skills include (and they are all hyperlinked to their respective article on the *RuneScape Wiki*):

{% capture list %}
* [Agility](http://runescape.wikia.com/wiki/Agility) (P2P-only)
* [Attack](http://runescape.wikia.com/wiki/Attack)
* [Constitution](http://runescape.wikia.com/wiki/Constitution)
* [Construction](http://runescape.wikia.com/wiki/Construction) (P2P-only)
* [Cooking](http://runescape.wikia.com/wiki/Cooking)
* [Crafting](http://runescape.wikia.com/wiki/Crafting)
* [Defence](http://runescape.wikia.com/wiki/Defence)
* [Divination](http://runescape.wikia.com/wiki/Divination) (P2P-only)
* [Dungoneering](http://runescape.wikia.com/wiki/Dungeoneering)
* [Farming](http://runescape.wikia.com/wiki/Farming) (P2P-only)
* [Firemaking](http://runescape.wikia.com/wiki/Firemaking)
* [Fishing](http://runescape.wikia.com/wiki/Fishing)
* [Fletching](http://runescape.wikia.com/wiki/Fletching) (P2P-only)
* [Herblore](http://runescape.wikia.com/wiki/Herblore) (P2P-only)
* [Hunter](http://runescape.wikia.com/wiki/Hunter) (P2P-only)
* [Invention](http://runescape.wikia.com/wiki/Invention) (P2P-only)
* [Magic](http://runescape.wikia.com/wiki/Magic)
* [Mining](http://runescape.wikia.com/wiki/Mining)
* [Prayer](http://runescape.wikia.com/wiki/Prayer)
* [Ranged](http://runescape.wikia.com/wiki/Ranged)
* [Runecrafting](http://runescape.wikia.com/wiki/Runecrafting)
* [Slayer](http://runescape.wikia.com/wiki/Slayer) (P2P-only)
* [Smithing](http://runescape.wikia.com/wiki/Smithing)
* [Strength](http://runescape.wikia.com/wiki/Strength)
* [Summoning](http://runescape.wikia.com/wiki/Summoning) (P2P-only)
* [Thieving](http://runescape.wikia.com/wiki/Thieving) (P2P-only)
* [Woodcutting](http://runescape.wikia.com/wiki/Woodcutting)
{% endcapture %}
{% include Layouts/column.html no="4" content=list %}

Its original client, that has been in use since the game was first officially released in 2001, is written in Java. In April 2016 a new NXT client written in C++, which had been in the works since 2012, was officially released. This was after a few beta weekends in which a select set of users had the opportunity to test out the new game client. The Java client is set to be phased out, although an exact timeline of when this will happen has not been made public. The NXT client only supports 64-bit Linux, macOS and Windows NT.

### Packaging details
#### Java
The Java client is far easier to use on Linux and it supports at least x86 and x86_64 Linux (as opposed to NXT which only supports x86_64). One method is to go to [www.runescape.com/game-applet](https://www.runescape.com/game-applet) in a Java-compatible web browser like the long-term supported releases of Mozilla Firefox (version 52 and later of Firefox **do not** support Java) and play the game. Alternatively, one can use the [Unix RuneScape Client](https://github.com/HikariKnight/rsu-client) (RSU) for which there is a cross-distribution installer.

#### NXT
Its installed size on Linux is approximately 8 MB, although it is worthwhile noting that the client downloads an awful lot of data (~3.4 GB for myself as of 2 May 2017) to a folder in the user home directory called {% include Layouts/path.html path="Jagex" puncr="." %} Here is what `equery` has to say about the `games-rpg/runescape-launcher` package's installed size:

{% include Code/equery.html package1="games-rpg/runescape-launcher" packageversion1="2.2.4" files1="41" size1="7.53" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/c0dcbe1/games-rpg/runescape-launcher/runescape-launcher-2.2.4.ebuild" overlay="fusion809" %}

The NXT client is only in the official repositories of a small handful of Linux distributions, including:

* {% include Packages/gentoo.html package="games-rpg/runescape-launcher" %}
* {% include Packages/pclinuxos.html package="runescape-launcher" puncr="," %} their package is presently (as of 26 April 2017) the outdated 2.2.2 release, which is no longer supported as of the release of 2.2.4 on 3 April 2017.
* {% include Packages/sabayon.html package="games-rpg/runescape-launcher" %}

while it is in the unofficial repositories of:

* Arch Linux (AUR package: [`runescape-launcher`](https://aur.archlinux.org/packages/runescape-launcher))
* 64-bit Ubuntu 14.04, which is the only distribution it is *officially* packaged for by the RuneScape development team of Jagex. Details for how to install on Ubuntu 14.04 can be found [here](https://www.runescape.com/download), one has to click the "Linux" button to see the installation details.

It is possible to run the NXT client on other distributions such as Fedora, Mageia, openSUSE, *etc.* via methods like:

* Downloading the official Ubuntu 14.04 package, extracting its contents to one's file system (using the Alien package, or `dpkg-deb -x <PACKAGE> <DESTINATION>`) and installing the package(s) required to satisfying the dependencies of the package (which would by trial and error, trying to start the client and based on any errors given installing the package(s) that are meant to provide any libraries the error mentions are missing). I have had success with this method on openSUSE Tumbleweed, wherein I took the 64-bit Debian package and extracted its contents to `~/Programs` (as opposed to `/` which is the most commonly-used method) and extracted the Debian packages for Ubuntu 14.04 that provide the dependencies of the package that I could not install from the official repositories of Tumbleweed to `~/Programs` also. I also edited `~/Programs/usr/bin/runescape-launcher` so that it included `~/Programs/usr/lib/x86_64-linux-gnu` in its `LD_LIBRARY_PATH` environment variable.
* Running the game via Docker. I have a [Docker container](https://hub.docker.com/r/fusion809/runescape-launcher/) at Docker Hub that can be used for this purpose. Note that with this method audio can be a little touchy to get working. I personally have not managed to get the sound working with my Docker container, not that this really matters to me as I usually mute the game whenever I play it.
* Running the game via a chroot into a distribution that better supports the client. I had Ubuntu 14.04 installed on my laptop for about a fortnight or more just so I could run the NXT client via a chroot from my openSUSE Tumbleweed installation on the same laptop. This method is also likely to make audio difficult to get working.

{% include Layouts/clear.html %}
