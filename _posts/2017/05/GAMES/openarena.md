## OpenArena
{% include Infoboxes/game.html game="OpenArena" screenshot="OpenArena_0.8.8.png" screenshot_caption="Screenshot of OpenArena 0.8.8" license="<a href='https://github.com/OpenArena/engine/blob/master/COPYING.txt' link='_blank'>GPLv2</a>" genre="First-person shooter" development="Beta" language="C" website="<a href='http://openarena.ws/' link='_blank'>openarena.ws</a>" sf="oarena" github="OpenArena/gamecode" date="2005" developers="<a href='https://github.com/OpenArena/engine#credits' link='_blank'>James Canete, Ludwig Nussel, Thilo Schulz, <i>et al.</i></a>" platforms="DragonFlyBSD, FreeBSD, macOS, Windows NT" graphics="Medium-quality 3D" basis="Quake III Arena" irc="#openarena" irc-server="quakenet.org" %}

**OpenArena** is a free and open-source, cross-platform, FPS game that is designed fro a Quake III Arena clone. I have limited experience with this game but I will say its keybindings are rather intuitive with arrow keys used to move around in the game. 

### Packaging details
Its installed size on Gentoo is approximately 400 MB. `equery` gives this report on its size:

{% include Code/equery.html package1="games-fps/openarena" packageversion1="0.8.8" files1="30" size1="399.11" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-fps/openarena/openarena-0.8.8.ebuild?id=2717f31754ada85bb68e56df2ae489188d722d1b" %}

The following distributions have a package for OpenArena in their official repositories:

* {% include Packages/centos.html package="openarena" versions="7" %}
* {% include Packages/debian.html package="openarena" %}
* {% include Packages/fedora.html package="openarena" %}
* {% include Packages/gentoo.html package="games-fps/openarena" %}
* {% include Packages/mageia.html package="openarena" %}
* {% include Packages/pclinuxos.html package="openarena" %}
* {% include Packages/sabayon.html package="games-fps/openarena" %}
* {% include Packages/ubuntu.html package="openarena" %}

while the following distributions do not have an OpenArena package in their official repositories:

* Arch Linux, the AUR does have a [PKGBUILD](https://aur.archlinux.org/packages/openarena) for OpenArena, however. 
* openSUSE, the unofficial {% include Packages/gamesr.html package="openarena" %} repository does have packages for Leap 42.2 and Tumbleweed, however. 

{% include Layouts/clear.html %}
