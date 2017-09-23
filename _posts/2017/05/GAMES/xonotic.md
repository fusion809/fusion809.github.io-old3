## Xonotic
{% include Infoboxes/game.html game="Xonotic" screenshot="Xonotic_0.8.2.png" screenshot_caption="Screenshot of Xonotic 0.8.2 running on Arch Linux" date="2010" forked="Nexuiz" development="Beta" genre="First-person shooter" developers="Team Xonotic" license="BSD, GPLv2, GPLv3, LGPLv2.1" language="C++" website="<a href='http://www.xonotic.org' link='_blank'>www.xonotic.org</a>" wiki="<a href='https://gitlab.com/xonotic/xonotic/wikis' link='_blank'>gitlab.com/xonotic/xonotic/wikis</a>" official-wiki="Yes" gitlab="xonotic/xonotic" irc="#xonotic" irc-server="quakenet.org" platforms="FreeBSD, macOS, NetBSD, Windows NT" graphics="High-quality 3D" %}

**Xonotic** is a free and open-source, high-definition, arena-style first-person shooter game. It is the highest-definition open-source game in its genre, from what I have seen. Its graphics are 3D and of similar quality to those of 0 A.D. and RuneScape. I have little experience with this game as FPS games do not really interest me, but it seems rather well done. 

Xonotic packages for the various Linux distributions often have an installed size of almost 1 GB. 

### Packaging details
Xonotic 0.8.1  has an installed size of approximately 890 MB. `equery` has this to say about its installed size:

{% include Code/equery.html package1="games-fps/xonotic" packageversion1="0.8.1" files1="53" size1="889.31" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-fps/xonotic/xonotic-0.8.1.ebuild?id=52dce951269764f9aa6e8599b85bd0fc994e8277" %}

Xonotic is distributed by its developers as a zip archive, which can be run on, in theory, an Linux distribution. It is a fairly ubiquitous game in the Linux world, with the following distributions having packages for it in their official repositories:

* {% include Packages/archlinux.html package="xonotic" %}
* {% include Packages/centos.html package="xonotic" versions="7" %}
* {% include Packages/fedora.html package="xonotic" %}
* {% include Packages/gentoo.html package="games-fps/xonotic" %}
* {% include Packages/mageia.html package="xonotic" %}
* {% include Packages/opensuse.html package="xonotic" %}. Official packages are available for Leap 42.2 and Tumbleweed only.
* {% include Packages/pclinuxos.html package="xonotic" %}
* {% include Packages/sabayon.html package="games-fps/xonotic" %}

while oddly it does not appear to be available from the official repositories of any Debian or Ubuntu release. In the case of Ubuntu, however, Xonotic is available from the [unofficial PlayDeb repository](http://www.playdeb.net/app/Xonotic).
