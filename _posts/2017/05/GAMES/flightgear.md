## FlightGear
{% include Infoboxes/game.html game="FlightGear" screenshot="FlightGear_2017.1.3.png" screenshot_caption="FlightGear 2017.1.3 running on Gentoo Linux" date="1996" developers="David Murr, James Turner, Torsten Dreyer, <i>et al.</i>" developers-link="https://github.com/FlightGear/flightgear/graphs/contributors" license="GPLv2" license-link="https://github.com/FlightGear/flightgear/blob/master/COPYING" genre="Simulation" development="Post-release" language="C++" website="www.flightgear.org" website-full="http://www.flightgear.org/" wiki="wiki.flightgear.org" wiki-link="http://wiki.flightgear.org" official-wiki="Yes" platforms="DragonFlyBSD, FreeBSD, macOS, NetBSD, OpenBSD, Solaris, Windows NT" graphics="High-quality 3D" sf="flightgear" irc="#flightgear" irc-server="flightgear.org" %}

**FlightGear** is a free and open-source, extremely cross-platform flight simulator game that is able to emulate flight for several dozen different aircraft. I personally think it is best designed for actual pilots as its controls are so complex I, for one, cannot get any aircraft into the air. 

### Packaging details
FlightGear has an installed size of approximately 2.1 GB on Gentoo Linux. Here is the `equery` size report:

{% include Code/equery.html package1="games-simulation/flightgear" packageversion1="2017.1.3" files1="67" size1="21.85" files2="83919" size2="2.07" sizeunit2="GiB" ebuildurl1="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-simulation/flightgear/flightgear-2017.1.3.ebuild?id=92e30e27bdb5940d3aa5b5039b3b214204b59cc5" ebuildurl2="https://gitweb.gentoo.org/repo/gentoo.git/tree/games-simulation/flightgear-data/flightgear-data-2017.1.3.ebuild?id=92e30e27bdb5940d3aa5b5039b3b214204b59cc5" %}

FlightGear is fairly ubiquitous in the Linux world, with most distributions having a package for it in their official repositories, this includes:

* {% include Packages/archlinux.html package="flightgear" %}
* {% include Packages/debian.html package="flightgear" puncr="," %} stable, testing and unstable have packages.
* {% include Packages/fedora.html package="FlightGear" %}
* {% include Packages/gentoo.html package="games-simulation/flightgear" %}
* {% include Packages/mageia.html package="flightgear" %}
* {% include Packages/opensuse.html package="FlightGear" variant="Tumbleweed" %}
* {% include Packages/pclinuxos.html package="flightgear" %}
* {% include Packages/sabayon.html package="games-simulation/flightgear" %}
* {% include Packages/ubuntu.html package="flightgear" %}

openSUSE Leap's unofficial games repository does contain a package for FlightGear on both supported releases (package name: `FlightGear`). To my knowledge no CentOS repositories (official or otherwise) have a FlightGear package. 

{% include Layouts/clear.html %}
