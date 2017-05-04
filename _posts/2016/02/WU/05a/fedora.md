#### Fedora
{% include Links/image.html image="operating-systems/Fedora-23-GNOME.png" width="1130px" float="none" description="Fedora 23 with its default desktop, GNOME 3" %}

[**Fedora**](https://getfedora.org/) (1, 2, 4, 6), a distribution developed by its own FOSS community, but sponsored by Red Hat, the largest Linux company in the world. It has strict licensing requirements for all software in its official repositories, which means that many proprietary multimedia codecs, graphics drivers and Wi-Fi drivers will need to be installed from third-party sources like [RPM Fusion](http://rpmfusion.org/). Fortunately, I have found one method that manages to install the drivers for my BCM43228 chip is running: {% include Code/codeus.html line1="wget http://git.io/vuLC7 -v -O fedora23_broadcom_wl_install.sh && sh ./fedora23_broadcom_wl_install.sh" %}{% include Links/fn.html no="6" %}, from the command-line (although this is designed for Fedora 23 specifically, future releases may not be compatible with this command). Granted this command, in and of itself, does require a working Internet connection in order to succeed (to get such an Internet connection I borrow an Ethernet cable, usually).

I personally have found it more difficult to pick up than Ubuntu (partly because of inferior community support), but it uses, generally more up-to-date software than Ubuntu. The main support site for it that I have used is [Ask Fedora](https://ask.fedoraproject.org/). There is also an IRC channel for support questions, called {% include Links/irc.html channel="fedora" puncr="." %} It has a less popular derivative with more liberal software licensing requirements and out-of-the-box support for Broadcom chips, [Chapeau](http://chapeaulinux.org/).

It is recommended that if you use Fedora, you upgrade your system to the latest release of Fedora (this upgrade process is called a *distribution upgrade*) at least once every nine-months. This process can be quite unpleasant, as software breakage (that is, when software you have installed on your PC, including device drivers, potentially, simply will not work anymore) is not unheard of after doing a distribution upgrade. Plus, there will be times when your computer will be practically unusable (due to how slow it is) during the upgrade.

If you would prefer to upgrade less frequently, but otherwise would like to have a Fedora-like system, I would recommend using [**CentOS**](https://centos.org). Distribution upgrades are only required for this distribution as infrequently as once every seven years. The main disadvantage of using CentOS as opposed to Fedora, is that CentOS's system software is usually fairly outdated (roughly 1-3 years out-of-date I have found). Additionally the latest release of CentOS (CentOS 7), has support for only the x86-64 processor instruction set (while Fedora also supports processors with armhfp and i686 instruction sets), so older computers may be incompatible with CentOS. CentOS also uses Fedora's old command-line package manager, yum, which means in the commands shown below for package management with DNF, one would substitute `dnf` with `yum`.

Fedora uses **DNF** for command-line package management, which installs RPM packages (file extension: `.rpm`), although the **GNOME Software** and **Apper** graphical front-ends are also available. To install software from the command-line, one merely runs:

{% include Code/codeu.html line1="sudo dnf install $package" %}

while to remove said software one runs:

{% include Code/codeu.html line1="sudo dnf remove $package" %}

to synchronize one's packages with those in the online repositories and upgrade all of one's packages that have become out-of-date run:

{% include Code/codeu.html line1="sudo dnf update" %}
