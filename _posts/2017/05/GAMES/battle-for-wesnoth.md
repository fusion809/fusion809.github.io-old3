## Battle for Wesnoth
{% include Infoboxes/game.html game="Battle for Wesnoth" logo="Wesnoth.png" screenshot="Wesnoth-1.12.6.png" screenshot_caption="Screenshot of Battle for Wesnoth 1.12.6" license="GPLv2" license-link="https://github.com/wesnoth/wesnoth/blob/master/COPYING" genre="Turn-based strategy" development="Post-release" language="C++, Java, Python, Lua" wiki="wiki.wesnoth.org" wiki-link="https://wiki.wesnoth.org" official-wiki="Yes" website="wesnoth.org" website-link="http://wesnoth.org/" sf="wesnoth" github="wesnoth/wesnoth" date="~2003" developers="David White and others" developers-link="https://wiki.wesnoth.org/Credits" platforms="DragonFlyBSD, FreeBSD, macOS, NetBSD, OpenBSD, Windows NT, <i>etc.</i>" irc="#wesnoth" graphics="2D" %}

**Battle for Wesnoth** (**BfW**) is a free and open-source, incredibly cross-platform turn-based strategy (TBS) game with a high fantasy theme. I personally dislike all TBS games, aside from those that are also board games like chess, so I have limited experience with BfW, but enough information to do a brief overview. In BfW users usually fight for the throne of *Wesnoth*, hence the name of the game, although other game goals are also available, for further details on these goals see the [*Description*](https://wiki.wesnoth.org/Description) article at the *Wesnoth Wiki*. In BfW the user can play against the computer or other user(s). The game is played on a [hex map](https://en.wikipedia.org/wiki/Hex_map) with low-quality graphics.

### Packaging details
BfW has an installed size of about 380 MB, here is a command I ran on Gentoo Linux and below it is the output:

{% include Code/equery.html package1="games-strategy/wesnoth" packageversion1="1.13.7" files1="16214" size1="383.98" sizeunit1="MiB" overlay="fusion809" ebuildurl1="https://github.com/fusion809/fusion809-overlay/blob/6454ca6/games-strategy/wesnoth/wesnoth-1.13.7.ebuild" %}

No *official* cross-distribution Linux binary is available for BfW, as users are encouraged to get BfW from their distribution's package manager or by grabbing the source code and compiling it themselves.{% include_relative fn-inline.html no="7" %} It is probably the single most ubiquitous game in the Linux world and it is available from the official repositories of the following distributions:

* {% include Packages/archlinux.html package="wesnoth" %}
* {% include Packages/centos.html package="wesnoth" %}
* {% include Packages/debian.html package="wesnoth" %}
* {% include Packages/fedora.html package="wesnoth" %}
* {% include Packages/gentoo.html package="games-strategy/wesnoth" %}
* {% include Packages/mageia.html package="wesnoth" %}
* {% include Packages/opensuse.html package="wesnoth" variant="Tumbleweed " %}, for Leap one will have to install BfW from the unofficial {% include Packages/gamesr.html %} repository.
* {% include Packages/pclinuxos.html package="wesnoth" %}
* {% include Packages/sabayon.html package="games-strategy/wesnoth" %}
* {% include Packages/ubuntu.html package="wesnoth" %}

Its total installed size on most Linux distributions is between 400 and 500 MB. 

{% include Layouts/clear.html %}
