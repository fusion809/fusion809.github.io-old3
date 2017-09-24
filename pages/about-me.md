---
layout:           page2
title:            "About Me"
date:             2015-11-18 +1000
last_modified_at: 2017-09-24 18:12:00 +1000
permalink:        /about-me/
---

{% include Links/image.html image="operating-systems/Ubuntu_12.04.png" description="Desktop of Ubuntu 12.04, with its default wallpaper" id="1" width = "1034px" float="none" %}

My journey through the world of Linux began in mid 2012, when I first tried [Ubuntu](http://www.ubuntu.com) 12.04 as a dual-boot with Windows 7 on my Dell laptop. At first, I must admit I was not impressed, as it was like I had landed on an alien planet, as I had never had any need to use a terminal emulator (or command prompt as it is called under Microsoft Windows) before. Fortunately, I persevered (although, I did return to Windows on-and-off) and after a while I became almost addicted to Linux. A couple of years later I decided to delete the Windows 7 partition on my Dell laptop and make the laptop 100% pure Linux. Since then, I have never regretted making the transition to Linux. Although, I eventually outgrew Ubuntu as it was essentially preschool with so much hand-holding that I was left out of many of the important decisions about my own system.

When I outgrew Ubuntu in mid 2015, I started to search for a new free operating systems to call "home", using [Oracle VM VirtualBox](https://www.virtualbox.org/), KVM/QEMU and live USB I tried a variety of free (of monetary cost) operating systems, including (note official Ubuntu spins like Kubuntu, Lubuntu, Ubuntu GNOME, Ubuntu MATE, Xubuntu are not mentioned, although I have tried them):

{% capture my_capture %}
* [Android-x86 6.0-r1](http://www.android-x86.org/)
* [Antergos](https://antergos.com/)
* [antiX 15/15-MX/16.2](http://antix.mepis.org/index.php?title=Main_Page)
* [ArchBang](http://bbs.archbang.org/)
* [Arch Linux](https://www.archlinux.org/)
* [Arya Linux 2017](http://aryalinux.org/)
* [Bodhi Linux 3.10](http://www.bodhilinux.com/)
* [Calculate Linux 15.17](http://www.calculate-linux.org/)
* [CentOS 7](https://www.centos.org/)
* [Chakra](https://chakralinux.org/)
* [Chapeau 22.1](http://chapeaulinux.org/)
* [Chromixium 1.5](http://chromixium.org/)
* [Debian 8.x/9.x/testing/unstable](https://www.debian.org/)
* [deepin 2014.3/15/15.3/15.4](http://www.deepin.org/?lang=en)
* [DragonFlyBSD 4.8](https://www.dragonflybsd.org/)
* [elementary OS 0.3.x](https://elementary.io/)
* [Exherbo Linux](http://exherbo.org/)
* [Fedora 22-26](https://getfedora.org/)
* [FreeBSD 10.2/10.3/11.0/11.1/11-STABLE/12-CURRENT](https://www.freebsd.org/)
* [FreeDOS 1.2](http://www.freedos.org/)
* [Frugalware Linux 2.1](http://frugalware.org/)
* [Funtoo Linux](http://www.funtoo.org/Welcome)
* [Gecko Linux](http://geckolinux.github.io/)
* [Gentoo Linux](https://www.gentoo.org/)
* [GhostBSD 10.1/10.2](http://ghostbsd.org/)
* [GhostOS 0.5.6](https://ghostkernel.org/)
* [gNewSense 3.1](http://www.gnewsense.org/index.html)
* [GuixSD 0.13.0](https://www.gnu.org/software/guix/)
* [Haiku OS rev 51133](https://www.haiku-os.org/)
* [Icaros Desktop 2.2](http://icarosdesktop.org/)
* [Kali Linux 2](https://www.kali.org/)
* [KDE Neon git-unstable](https://neon.kde.org/)
* [Korora 21/22/23/24](https://kororaproject.org/)
* [Linux Mint 17.2/17.3/18.1](http://linuxmint.com/)
* [Lunar Linux](http://www.lunar-linux.org/)
* [LXLE 14.04](http://lxle.net/)
* [Mageia 5/6 sta2](http://www.mageia.org/en/)
* [Manjaro Linux](https://manjaro.github.io/)
* [MidnightBSD 0.8.5](http://www.midnightbsd.org/)
* [NetBSD 7/7.1](https://www.netbsd.org)
* [NixOS 17.03](https://nixos.org/)
* [NuTyX 9.0](http://www.nutyx.org/)
* [OpenBSD 5.9/6.0/6.1](https://www.openbsd.org/)
* [OpenIndiana 201604/201610/201704](https://www.openindiana.org/)
* [OpenMandriva Lx 2014.2/3/3.01](https://www.openmandriva.org/en)
* [openSUSE 13.2/42.1/42.2/42.3/Tumbleweed](https://www.opensuse.org/)
* [PC-BSD 10.1/10.2/TrueOS](https://www.trueos.org/)
* [PCLinuxOS](http://www.pclinuxos.com/)
* [Pisi Linux 2.0-beta2](http://www.pisilinux.org/en/)
* [Q4OS 1.6.x/2.3.x](http://q4os.org/)
* [ReactOS 0.4.2/0.4.4/0.4.5](https://www.reactos.org/)
* [Remix OS 3](http://www.jide.com/remixos)
* [ROSA R8](http://en.rosalinux.com/)
* [Sabayon Linux](https://www.sabayon.org/)
* [Scientific Linux 6.7](https://www.scientificlinux.org/)
* [SmartOS](https://www.joyent.com/smartos)
* [Solus OS 1.0-RC1/1.2.1](https://solus-project.com/)
* [Slackware Linux 14.2-RC2/14.2](http://www.slackware.com/)
* [Trisquel GNU/Linux 7](https://trisquel.info/)
* [Ubuntu 12.04-17.04](http://www.ubuntu.com)
* [Vector Linux 7.1](http://vectorlinux.com/)
* [Void Linux](http://www.voidlinux.eu/)
* [Zorin OS 7/12](http://zorinos.com/)
{% endcapture %}
<div class="div-col columns column-count column-count-3" style="-moz-column-count: 3; -webkit-column-count: 3; column-count: 3;">
{{ my_capture | markdownify }}
</div>

I have also repeatedly tried to build a Linux From Scratch system but it fails every time. The last time it failed (on 28 May 2017) with Manjaro Linux 17.0 live session as the host (or bootstrap) OS and I was building LFS 8.0 and the failure was due to glibc 2.25 issues. Namely its test suite failed during [this stage](http://www.linuxfromscratch.org/lfs/view/stable/chapter06/glibc.html) (chapter 6.9) giving [this log](https://pastebin.com/Skvn0k8j). After this running:

```bash
echo 'int main(){}' > dummy.c
cc dummy.c -v -Wl,--verbose &> dummy.log
readelf -l a.out | grep ': /lib'
```

per chapter 6.10 of the manual failed as the compiler was malfunctioning. Also tried using ALFS with jhalfs-2.4 and that still failed due to kernel issues. The #lfs IRC channel was not really helpful people just said to try the manual way over and over (doing a clean start from the beginning the LFS guide) again until it magically works. 

of these operating systems I have also installed the following six on my PC:
{% capture my_capture %}
* Arch Linux
* Fedora
* Funtoo Linux
* Gecko Linux
* Gentoo Linux
* Manjaro Linux
* openSUSE Tumbleweed
* Sabayon Linux
* Ubuntu
{% endcapture %}
<div class="div-col columns column-count column-count-3" style="-moz-column-count: 3; -webkit-column-count: 3; column-count: 3;">
{{ my_capture | markdownify }}
</div>
my favourite were, in ascending order:

## Ubuntu
**Ubuntu** was my first distro so I feel very comfortable with it, despite the fact that package development under it is difficult and tedious. Ubuntu affords one comparatively few customization options, although it is sufficient for me to use 16.04 LTS as my primarily operating system. This is because I find it more stable than any other operating system that makes the top five.

## Sabayon Linux
It is the distribution that I have decided to keep on my `/dev/sda1` partition permanently, because it is a good fallback distribution in case the distro on my `/dev/sda3` partition fails to boot or otherwise has serious issues. It is a Gentoo derivative that has a beginner-friendly binary package manager, Entropy, alongside the complicated yet powerful package manager (oriented towards experienced Linux users) of Gentoo, Portage. Its software is usually fairly up-to-date (e.g., its website claims that its software is "bleeding-edge"), although sometimes you will see a lag, sometimes due to upstream issues (see most packages in its repositories come from the Portage Tree of Gentoo. e.g., GNOME 3.18 was released 23 September 2015, yet it was not until 15 November 2015 that the GNOME Shell 3.18 was finally added to the Portage Tree) and sometimes because only two people directly maintain the Entropy Store and as there are over 13,100 software packages in the Entropy Store it is sometimes impossible for them, from a practical standpoint, to keep all of them up-to-date.

## openSUSE
**openSUSE** uses RPM packages like Fedora, but unlike Fedora its system software and desktop environments are usually nowhere near as bleeding edge. This is likely because openSUSE is designed to be compatible with both servers and desktops/laptops, with the former usually valuing stability over being up-to-date, while Fedora is mostly geared towards desktops/laptops. I tend to find that installing programs on openSUSE is similar to installing them on Fedora, in terms of difficulty. Its chief advantage over Fedora is that it has a Tumbleweed edition that is essentially like a simpler (less compiling software not in the repositories from source code) version of Arch Linux, thanks to the Open Build Service (OBS). The OBS is a system whereby users can freely build and distribute packages of their choosing for any one of a variety of different distributions (including Arch Linux, Fedora, openSUSE, *etc.*), the main problem with it is that it cannot build packages that require Internet access during the build (like the Atom text editor, for example). I initially thought OT had fewer bugs than Arch Linux, but, regrettably, I found OT definitely has its fair share of bugs, as does its derivative Gecko Linux (Rolling edition).

For example, when I booted Gecko Linux (Rolling) for the first time, after installing it, I typed in my credentials to access the WiFi (which did not require any extra packages installed as Gecko comes with Broadcom firmware pre-installed from the unofficial Packman repository of openSUSE), from the network section of the KDE Plasma 5 system tray, and while it seemed to connect to the WiFi (i.e., no errors were mentioned) the WiFi was not available to any of my applications, including my web browser (Google Chrome, which I installed manually as it does not come with Gecko, by default) and command-line programs like `ping` and `zypper`.

## Fedora
**Fedora** is interesting to me, in that installing software packages in its software repositories is usually at least as easy as it is on Ubuntu, but installing software manually from source code or setting up web applications (e.g., MediaWiki or WordPress) tends to be substantially more difficult than on other more user-friendly distributions. It is also interesting to me in that its system software and desktop environment-related software is usually the most up-to-date of any distribution following a fixed-release cycle, yet the rest of its software tends to be at least two releases behind the latest available release, in my experience, anyway. It has its own equivalent to the OBS, Copr (although unlike the OBS it can only build packages for Fedora), which does afford packages Internet access during their build, if the packager grants them this. Copr also like the OBS, has strong licensing restrictions (namely, that they have to be FOSS) on any packages built and distributed through it.

## Funtoo Linux
**Funtoo Linux** was the first source-based distribution I had successfully set up on my computer, outside a VM. It, for the most part, was quite an enlightening experience and it gave me the confidence to re-try installing Gentoo Linux on my PC outside a VM, after my first attempt failed quite miserably. 

## Gentoo Linux
I successfully installed **Gentoo Linux** around early April 2017 and with what I learnt from installing Funtoo Linux I found it fairly easy. I ended up switching my init system from OpenRC to systemd, using git to control my local Portage tree copy (as opposed to the default of rsync). 

## Arch Linux / Manjaro Linux
**Manjaro Linux** is a beginner-friendly derivative of **Arch Linux**, a Linux distribution based on the "Keep It Simple, Stupid" (KISS) principle, that is geared towards more experienced Linux users. The way it interprets the KISS principle, is that a fresh Arch install should be the barebones and that automation (e.g., there is no automated installer for Arch, by default) should be kept to a minimum. For this reason, Arch Linux was previously out of my reach, until I found some scripts for automating its installation process. Unfortunately, installing Arch on my removable drive did not go well at first (I forgot to install and configure a boot loader for it, I think), so I then opted to use Manjaro Linux in its place on this drive.

Later I managed to install Arch Linux on this removable drive and successfully boot it and then I successfully installed it on my internal hard drive (namely on my `/dev/sda3` partition, with `/dev/sda1` being my Sabayon partition and `/dev/sda2` being my swap partition). Graphics issues caused me to delete this internal drive installation and install OT in its place. Later I deleted this installation and installed Arch in its place. Manjaro Linux uses its own repositories, which are updated approximately once a week, this is apparently to ensure the system's stability.
