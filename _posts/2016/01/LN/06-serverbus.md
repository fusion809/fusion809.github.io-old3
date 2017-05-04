## Business/Server Use
The best distributions for these purposes usually use fairly out-of-date software and follow standard release cycles. This is because older software is usually better-tested, hence it is better established that such software is stable without any apparent bugs. Standard release cycles are used for a reason that escapes me, my guess is it is because rolling release cycles are traditionally used for distributions using the very latest software, so maybe they do not wish to break with tradition.

### CentOS
[**CentOS**](https://www.centos.org/), a Fedora derivative, that essentially looks like and has the same software as Fedora did two years ago, which includes the older package manager, yum. CentOS has a few notable derivatives too like Oracle Linux (which comes with optional paid support), Red Hat Enterprise Linux (RHEL, I do not promote this distro as you need to buy it to use it) and Scientific Linux that are suitable for server use. I have created a VirtualBox VM for CentOS and have booted it at least once a week for several months, I personally find it very similar to older Fedora releases. It also uses Fedora's anaconda installer.

#### Useful Resources
* [CentOS Wiki](https://wiki.centos.org/)
* [Forums](http://www.centos.org/forums/)
* {% include Links/irc.html channel="centos" %}

### Debian
[**Debian**](https://www.debian.org/), which is the eldest Linux distribution mentioned in this post, was first founded in 1993 by the now deceased Ian Murdock (who, if you are unaware died 28 December 2015, by undisclosed yet suspicious means). It has four major software branches, each varying in their level of stability and the currency of their software (in the following list they are ordered in ascending level of stability): experimental, unstable, testing and stable. Most users use the default stable branch which contains software between 1 and 3 years old. The stable branch is very stable and is a popular server distribution, in fact it is roughly tied with Ubuntu for the position of most popular server distro. It has a command-line and graphical installer too. You can also create a very customized distro from the netinstall ISO image of Debian, as it is very minimalistic, although setting up a system like this is more difficult than using the other ISO images for Debian.

Debian has some of the largest software repositories of any Linux distribution, in fact, it is roughly tied with its child distribution, Ubuntu (that is distribution derived from it) for the number of packages it has in its repositories which is in the neighbourhood of 50,000. Although it is worthwhile noting that it is unfair to compare this figure to the number of packages in the Arch Linux pacman repositories, which presently stands at roughly 13,900, as Debian has a tradition of splitting its packages up, especially larger packages, into debug, dev, doc, lib, *etc.* sub-packages. For example, an interpreter for the Lua programming language is not provided by a single Debian package, rather it has been split up into five separate packages. While Arch Linux usually does not split its packages up. I know from personal experience that setting up a web server on Debian can be easily done within a matter of minutes, using packages in the Debian repositories.

The architecture support of Debian includes for arm64, armel, armhf, i386, mips, mipsel, powerpc, ppc64el, s390x and x86_64 processor types.

#### Useful Resources
* [ask.debian.net](http://ask.debian.net/)
* [Debian User Forums](http://forums.debian.net/)
* [Debian Wiki](https://wiki.debian.org/)
* [debianHELP forums](http://www.debianhelp.org/)
* [Documentation](https://www.debian.org/doc/)
* [Download Page](https://www.debian.org/distrib/)

### Mageia
[**Mageia**](http://www.mageia.org/en/) is a free fork of the now defunct proprietary Mandriva Linux distribution. Mageia is developed by several ex-employees of the company that developed Mandriva, that were laid off when the company collapsed in 2011. It uses RPM packages like Fedora and openSUSE, but it uses Mandriva's package manager, urpmi. It also features a graphical installer, Draklive-Install. It uses the latest LTS kernel and its software is usually fairly out-of-date. You will also find its software repositories are significantly less comprehensive than the other distributions mentioned in this post. For example, Mageia has no Apache, awesome, Fluxbox, MariaDB or MySQL package. So I personally would **not** recommend it for use as a server distribution, but it is still sometimes used.

### Others
I have heard of Arch Linux, Fedora and Gentoo Linux being used by servers, although I would not recommend this in the case of Arch and Fedora due to the potential stability issues. Gentoo Linux I could see as a reasonable server option for incredibly experienced Linux users, with a lot of free time, as it is possible to install only the most stable versions of all one's software, hence potentially giving Gentoo the required stability of a Linux server.

### Useful Resources
* [Documentation](https://www.mageia.org/en/doc/)
* [Download Page](https://www.mageia.org/en-gb/downloads/)
* [English Mageia Wiki](https://wiki.mageia.org/en/Main_Page)
* [Forums](https://forums.mageia.org/en/)
* {% include Links/irc.html channel="mageia" %}
