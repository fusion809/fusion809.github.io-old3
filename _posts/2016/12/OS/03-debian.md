## Debian
{% include_relative infoboxes/03-debian.html %}

[**Debian**][300] is one of the oldest Linux distributions still in active development, second only to Slackware Linux. Ian Murdock started developing it in 1993 (when he was 20 years old) and he named it as a portmanteau of the first name of Debra Lynn, his then girlfriend, and his own first name (Deb + Ian = Debian). Debian and its derivatives make up most of the usage share of Linux distributions on the desktop and laptop. Debian and Ubuntu (a Debian derivative) also make up the majority of the usage share of Linux distributions on servers. It is the so called, "The universal operating system", probably because it is open-source (by default, its kernel even has no proprietary binary blobs as of release 6.0 in 2011),{% include_relative includes/fn-inline.html no="6" %} customizable and suitable for a wide variety of different platforms. In fact it is the Linux distribution that has been ported to the greatest number of processor architectures. It has even been ported to FreeBSD and GNU Hurd kernels. 

### Package management
Debian has four supported branches (each with different repositories, different purposes, different derivatives and different usage shares):

* [Oldstable][301] &mdash; the previous stable release, presently Jessie (8).
* [Stable][302] &mdash; the current stable release, presently Stretch (9). Debian stable usually has packages in its repositories that are one to three years old. For example, Debian 8 (released 2015, was the latest until mid 2017) still uses KDE4 despite KDE Plasma 5 coming out in July 2014.
* [Testing][303] &mdash; which will become the next stable release, presently Buster (10).
* [Unstable (sid)][304] &mdash; a bleeding-edge rolling release version of Debian.

its default repositories are entirely free and open-source, but it does have non-free versions of its repositories. Its official repositories are amongst the most comprehensive of any distribution, aside from perhaps Arch Linux, Gentoo Linux and Ubuntu. Like CentOS, Fedora, Linux Mint, Mageia, openSUSE, PCLinuxOS and Ubuntu, Debian packages are split up into several different packages each containing parts (but not all) of the package in question. Those with the `-dev` suffix are those that contain the development headers of the program in question, while those with the `-dbg` suffix contain the debugging symbols of the program and those with the `-doc` suffix contain the documentation of the program.

It uses the APT and dpkg package managers. dpkg provides lower-level package management services, being used for removing, installing and upgrading software packages. APT provides higher-level utilities such as repository management, package downloading, dependency resolution, *etc.* [aptitude][305] is another higher-level front-end to dpkg, the main differences between it and APT are that:

1. aptitude is more intelligent and able to resolve package conflicts.
2. aptitude has a textual user interface (TUI) based on ncurses.
3. aptitude does not come pre-installed with Debian.

### Packaging
The Open Build Service (OBS) can also be used to build packages for Debian, other than that I am unaware of any free methods for building and distributing packages for Debian. I package the very latest Vim (and GVim) for Debian 8.x, among other distributions using the OBS. [Here][306] is where you can find my packaging files and [here][113] is the download page for my Vim package (on all the distributions I package it for, including Debian 8.x). 

### Leadership
Debian's open-source community is one of the largest (with over 1,000 volunteer developers worldwide) and most democratic ones out there and Debian's Project Leader (sort of like the lead developer, or the president of Debian) is elected every few years (range: 1 year - 3 years) by the Debian developers themselves.

### Closing remarks
Debian's ideal users are at least intermediate-level users that:

* Love open-source, but want the option of installing non-free software if they choose to. If they solely want an open-source system, without even having the option of installing proprietary software from official repositories, they should install [gNewSense][307] or [Trisquel][308], which are both Free Software Foundation (FSF)-approved.
* Favour stability over bleeding-edge software. Sure those that prefer bleeding-edge software can install Debian (unstable), but it is usually less bleeding-edge than Arch Linux or Gentoo Linux.
* Are comfortable using APT. Some users find APT's syntax confusing as APT provides a few different commands, each with their own purpose and syntax. These commands include: `apt-get` (used for installing, removing and upgrading packages; also used for updating package lists), `apt-cache` (for APT cache-related actions such as searching for packages), `add-apt-repository` (for adding APT repositories to one's sources), *etc.* Those that prefer a syntactically simpler package manager may wish to use CentOS, which uses yum. I personally am comfortable using APT as I have been using it for the past four years and are just used to it.
* Do not object to using systemd as an init system. Those with a hatred of systemd as an init system should probably try using [Devuan][309] or an older version of Debian that does not use systemd (the latest version of which and the only supported version of which, at the time of writing this post, is Debian 7 or Wheezy). Or they could use Slackware Linux, which does not use systemd and has no plans to change over in the foreseeable future.
* Wish to support democracy in the open-source software community.

Debian also has its own [MoinMoin][310]-based Wiki, known as the [*Debian Wiki*][311]. It mostly has articles pertaining to packaging, and other very Debian-specific articles. It does also have some rather brief articles on other topics like [desktop environments][312]. I personally find it less comprehensive than the *Arch Wiki* and *Gentoo Wiki*, but more comprehensive than the *Fedora Wiki*. 

Those that want a Windows-looking Debian-based distribution may want to use [Q4OS][313]. Those that prefer a macOS-looking Debian derivative should probably use [deepin][314]. 

{% include Layouts/clear.html %}
