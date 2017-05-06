## Mageia
{% include_relative infoboxes/09-mageia.html %}

[**Mageia**][900] is a French Linux distribution descended from the no-longer maintained French Linux distribution, Mandriva Linux, and developed by former employees of the company that developed Mandriva Linux, Mandriva S.A. Like its parent it utilizes the [urpmi][901] package manager. It is somewhere between Ubuntu LTS and Debian (stable), in terms of how out-of-date, yet stable its software is. The latest stable release of Mageia, Mageia 5.1, ships with KDE Plasma 4, GNOME 3.14 and the 4.4.x series of the Linux kernel. Making it roughly as out-of-date as Debian 8, except with a newer kernel. They mostly just contain desktop environment packages, core packages (like the kernel and GNU coreutils), a few games and some packages common to virtually every Linux distribution (like GNU Emacs). Like many other Linux distributions Mageia follows a fixed release model, but there is also a rolling release, developmental version of Mageia, known as Mageia Cauldron.

Previous revisions of this post stated its repositories were rather small, but nowadays it seems as though its repositories are larger than those of CentOS, openSUSE Leap, PCLinuxOS and Slackware Linux, but smaller than those of Arch Linux, Debian, Fedora, Gentoo Linux, Sabayon Linux and Ubuntu. They are particularly comprehensive with respect to games. It is fairly stable but I have inadvertently broken it before in my VirtualBox VMs after a kernel upgrade.

### Closing remarks
Mageia is best suited to intermediate to advanced users that:

* Love open-source, but not enough to remove the binary blobs from one's kernel.
* Do not require out-of-the-box support for devices with proprietary drivers such as Broadcom WiFi chips.
* Are comfortable using the urpmi package manager. I personally dislike the urpmi package manager's syntax, as I find it even more confusing than APT's.
* Are comfortable with a fixed release model with new releases coming out roughly annually.
* Favour stability over having the very latest software the open-source world has to offer. If you favour bleeding-edge software over stability you will likely be better suited to [OpenMandriva][902].

Fedora's Copr build service can be used to build packages for Mageia 6 (presently a developmental preview release only) and Cauldron. Although it does not support building packages for the present stable release, Mageia 5. The OBS can also be configured to build packages for Mageia 5 and Cauldron. For example, my OBS project builds the very latest Vim for both Mageia 5 and Cauldron, the packaging files for this can be found [here][1112] while the download page is [here][113]. 
{% include Layouts/clear.html %}
