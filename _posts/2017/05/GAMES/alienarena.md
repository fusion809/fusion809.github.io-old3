## Alien Arena
{% include Infoboxes/game.html game="Alien Arena" logo="Alien_Arena.png" screenshot="Alien_Arena.jpg" screenshot_caption='Screenshot of Alien Arena 20130827' date="2003" basis="Quake II (engine)" developers="COR Entertainment" development="Post-release" license="Game content is proprietary (freeware); code is GPLv2 and BSD-3" genre="First-person shooter" language="C and C++" website="red.planetarena.org" website-full="http://red.planetarena.org/" wiki="alienarena.wikia.com" wiki-link="http://alienarena.wikia.com" platforms="FreeBSD, macOS, Windows NT" irc="#alienarena" irc-server="planetarena.org" graphics="Medium-quality 3D" %}

**Alien Arena** is a mixed-licensed, cross-platform first-person shooter (FPS) game that uses the [Open Dynamics Engine](https://en.wikipedia.org/wiki/Open_Dynamics_Engine) (ODE) as its game physics engine. In AlienArena one is an alien fighting other aliens. The game also features an in-built IRC client for communicating with other players. I personally have fairly limited experience with it, but on Gentoo Linux, at least, I have found it quite a pain to get the game to go full-screen (I have a laptop with 1600x900 optimal resolution, the closest resolution allowed by the game is 1600x1200) without parts of the screen being hidden from one's view, or bizarre mouse issues happening. Its graphics, while 3D, are not quite as high quality, in my opinion, as *0 A.D.*'s.

The latest release of AlienArena was in September 2013.{% include_relative fn-inline.html no="5" %} Despite this, COR Entertainment still seems active in developing *Alien Arena*, as they have asked people to vote for their upcoming game, "[*Alien Arena: Warriors of Mars*](http://steamcommunity.com/sharedfiles/filedetails/?id=897799480)" on Steam Greenlight.{% include_relative fn-inline.html no="6" %}

### Packaging details
On most Linux distributions the installed size of AlienArena is around 1.15 GB, for example, here is a command I ran on Gentoo Linux (on 1 May 2017) and its output:

{% include Code/equery.html package1="games-fps/alienarena" packageversion1="20130827" files1="4138" size1="1.15" sizeunit1="GiB" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-fps/alienarena/alienarena-20130827.ebuild?id=2717f31754ada85bb68e56df2ae489188d722d1b" %}

Slightly fewer distributions have official packages for AlienArena than for *0 A.D.* Those that do have official packages for AlienArena include:

* {% include Packages/archlinux.html package="alienarena" %}
* {% include Packages/debian.html package="alien-arena" %}
* {% include Packages/fedora.html package="alienarena" %}
* {% include Packages/gentoo.html package="games-fps/alienarena" %}
* {% include Packages/mageia.html package="alienarena" %}
* {% include Packages/pclinuxos.html package="alienarena" %}
* {% include Packages/sabayon.html package="games-fps/alienarena" %}
* {% include Packages/ubuntu.html package="alien-arena" %}

of note, the following two popular distributions have no official packages for *Alien Arena*:

* CentOS, not even the EPEL repositories have it.
* openSUSE, neither Leap nor Tumbleweed have official packages for it. Although the unofficial {% include Packages/gamesr.html %} repository does have AlienArena in it for both Leap and Tumbleweed.

{% include Layouts/clear.html %}
