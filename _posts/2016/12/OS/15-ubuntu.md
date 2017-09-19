## Ubuntu
{% include_relative infoboxes/15-ubuntu.html %}

[**Ubuntu**][1500] is a beginner-friendly Linux distribution developed by a community of volunteers, along with Canonical Ltd employees and that is sponsored by Canonical Ltd. Canonical Ltd. is a company founded and funded by Mark Shuttleworth, a South African entrepeneur and astronaut. He also leads the development of Ubuntu, although the community of volunteer developers also has a say in its development. Shuttleworth was a volunteer contributor to the Debian operating system in the 1990s and when he created the Ubuntu operating system he decided to base it on Debian. Like Debian Ubuntu uses the APT and dpkg package management systems. It also uses a similar file system layout to that of Debian. Despite being developed by a company Ubuntu is a free product, and Canonical Ltd. instead makes its money by selling paid support for Ubuntu to businesses that use it.

### Editions and releases
Ubuntu, by default, does not come with any proprietary software that I am aware of, aside from the binary blobs on its kernel. Despite this its official repositories do contain some proprietary drivers like the Broadcom wireless driver. It is designed to be fairly out-of-the-box, but it does not have out-of-the-box support for Broadcom wireless. It also has several different official editions, including:

* [Edubuntu][1501], which only exists for LTS releases of Ubuntu. It is education-oriented, primarily intended for children.
* [Kubuntu][1502] (using KDE)
* [Lubuntu][1503] (using LXDE)
* [Ubuntu GNOME][1504] (using GNOME), which is to become the default edition in April 2018 with the release of Ubuntu 18.04.
* [Ubuntu Kylin][1505], which is intended for Chinese Linux users due to it complying with the Chinese government procurement regulations.
* [Ubuntu MATE][1506] (using MATE)
* [Xubuntu][1507] (using Xfce)

Ubuntu is oriented towards both desktop and server users, and has even been ported to smartphones and tablets. It has one of the best free online support websites I have ever seen, [Ask Ubuntu][1508]. It is also unusual in the Linux world in that it has two types of releases, one standard releases which come out every six months and another LTS releases which come out in even-numbered years in April (e.g. April 2012, April 2014, April 2016). Releases are assigned a version number that corresponds to the year and month they were released, so the Ubuntu release that came out in April 2012 was given the version string 12.04, likewise the Ubuntu release that came out in October 2016 was called 16.10. They are also given a codename, e.g. 14.04 was called Trusty Tahr and 16.04 was called Xenial Xerus. LTS releases are officially and freely supported for 5 years after they are released, while standard releases are supported for only nine months after their release.

### Packaging
Like Fedora and openSUSE, Ubuntu has its own mechanism by which users can create and disseminate their own custom packages, namely via the Canonical Ltd. owned website [Launchpad][1509]. Repositories setup using this website are called Personal Packaging Archives (PPAs). I personally have managed to setup two working PPAs, one for [Geany][1510], the lightweight GTK-based IDE, and another for [GNU Octave][1511]. I have real difficulties building my own custom Debian packages due to challenges related to writing the packaging source files (like the Debian rules and control files), and I only managed to create these two working PPAs via slightly modifying existing packaging files I found online. The OBS can also be used for packaging Ubuntu packages and distributing them. For example, I package the latest Vim using the OBS for Ubuntu 14.04/16.04/16.10, [here][306] are my packaging files (for both Debian and Ubuntu) and [here][113] is the download page for this and my other Vim packages. 

### Reputation
Canonical Ltd. has a reputation in the open-source community, of not collaborating with upstream projects on their solutions (to problems facing the open-source community) and instead substituting their own. This has lead to some anger in open-source circles. For example, instead of collaborating on the development of the [Wayland][1512] display protocol as a replacement for the old, deprecated Xorg server, they decided to provide their own replacement, [Mir][1513]. Likewise instead of working with upstream projects on their cross-distribution packaging formats (like [AppImages][1514]) and [Flatpaks][1515] they decided to create their own, [Snaps][1516]. In April 2017 it was [announced][1517] that Canonical was ditching Unity 8's development and hence also the Mir display server, in favour of GNOME and Wayland.

### Closing remarks
Ubuntu is perhaps best for users that:

* Love open-source, but not enough to use a distribution with no proprietary drivers in its official repositories and no binary blobs on its kernel. [Trisquel][1518] is a Linux distribution based on Ubuntu but with a focus on open-source, with no proprietary software in its repositories and no binary blobs on its kernel.
* Prefer a fixed release cycle over a rolling release model distribution.
* Favour a stable system over a bleeding-edge system.
* Like a distribution that they can use on almost every device.
* Require/want free or paid support, as either option is available and free support is certainly of high quality. I have never used their paid support (as I think it kind of defeats one of the reasons I choose Linux in the first place &mdash; it is free), but I assume it would be superior to the free support available at Ask Ubuntu (as otherwise no one would pay for it) which is pretty good.

{% include Layouts/clear.html %}
