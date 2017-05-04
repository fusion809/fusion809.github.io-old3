## Non-Techies
If you are not so technologically-talented I would suggest you use a beginner distribution like [**Manjaro Linux**](https://manjaro.github.io/), [**openSUSE**](https://www.opensuse.org/) or [**Ubuntu**](http://www.ubuntu.com) (or one of its derivatives like Linux Mint). If you are ambitious you may try a slightly more challenging distribution like Sabayon, which is fairly beginner-friendly but its documentation and online support is poorer than all four distributions previously mentioned in this section. Manjaro Linux is best suited for individual use, not for server or business use. openSUSE and Ubuntu can be used for server or business use too, but if you want to use Linux for server or business use I suggest you go to the next section.

### Manjaro Linux
**Manjaro Linux** is an Arch Linux derivative that features two graphical installers (Calamares and its own installer, Thus) and [mhwd](https://wiki.manjaro.org/index.php?title=Manjaro_Hardware_Detection) (Manjaro Hardware Detection), a tool for managing kernels and hardware drivers and out-of-the-box support for Broadcom Wi-Fi chipsets. It uses its own repositories (although the same package manager as Arch &mdash; pacman) that are updated once per week, roughly, and for the most part contain the same software in the Arch Linux pacman repositories, except a few Manjaro-specific tools and packages. It also has access to the AUR. The [Yaourt](https://wiki.archlinux.org/index.php/Yaourt) wrapper for pacman with access to the AUR comes pre-installed on Manjaro Linux.

Due to these similarities with Arch Linux, it is possible for people to learn some of the ropes of Arch Linux, by using Manjaro. Like you can learn how to write functioning PKGBUILDs under Manjaro, which is a skill you may use when you later make the transition to Arch Linux.

Like Arch Linux, Manjaro also follows a rolling release model. It only supports i686 and x86_64 architectures.

#### Useful Resources
* [Download Page](http://manjaro.github.io/download/)
* [Forums](https://forum.manjaro.org/)
* {% include Links/irc.html channel="manjaro" %}
* [Manjaro SourceForge Site](http://sourceforge.net/projects/manjarolinux/)
* [Manjaro Wiki Home Page](https://wiki.manjaro.org/index.php?title=Main_Page)

### openSUSE
**openSUSE** is an originally German Linux distribution that uses RPM binary packages (with the `.rpm` file extension) and the **ZYpp** package manager (along with a graphical front end for ZYpp &mdash; **YaST2**). It features an automated installer (also YaST2), during installation one is given choice of several different desktop environments, with the two major choices being GNOME and KDE Plasma, although the lightweight desktop (which uses less CPU and RAM), LXDE. Since 2015 openSUSE has two editions &mdash; the standard edition following a standard release model and a tumbleweed edition which follows a rolling release model. I personally prefer the tumbleweed edition, but if you prefer system stability (which means you will have to deal with fewer bugs) over having the very latest software I would recommend you use the standard release model edition.

Its out-of-the-box support for proprietary multimedia codecs (required for playing some media files, especially video files) and device drivers (including for Broadcom chips) is virtually non-existent, so this may stump some non-techies. It may be possible to install some proprietary programs from the [PackMan repositories](http://packman.links2linux.org/), or from repositories in the [Open Build Service](https://build.opensuse.org).

#### Package Management
As far as package managers go I would give ZYpp four stars out of five, it is a little slower than pacman and one feature (or lack of a feature rather) I dislike about it is that you cannot pass a flag (e.g., for pacman this flag is `--noconfirm`, while for APT, DNF and yum this flag is `-y`) to ZYpp to get it to skip asking you for confirmation before performing the action it is about to do. Apparently this feature used to exist, but it was removed. I like this feature in a package manager because it makes writing Bash scripts for package management easier.

RPM packages are created using spec files (that is, files with the file extension `.spec`), which I must say I find even more confusing and difficult-to-write than ebuilds. So if you plan on later doing some developer stuff on the distribution you pick in this section, I would probably pick Manjaro instead of openSUSE.

It only supports armhf, i586 and x86_64 architectures.

#### Useful Resources
* [Download Page for the Latest Standard Release of openSUSE](https://software.opensuse.org)
* [Documentation for openSUSE](http://doc.opensuse.org/) &mdash; I have heard good things about this documentation from other sources but I have never really found the documentation of good quality, partly because of how up-to-date much of it is (as it refers to older releases of openSUSE, instead of the latest, at times) and it is not really extensive like *The ArchWiki* is.
* [English openSUSE Forums](https://forums.opensuse.org/forum.php)
* [English openSUSE Wiki](https://en.opensuse.org/Main_Page)
* [openSUSE Package Search Site](https://software.opensuse.org/search)
* {% include Links/irc.html channel="opensuse" %}
* [Tumbleweed Installation Guide](https://en.opensuse.org/openSUSE:Tumbleweed_installation)

### Ubuntu
**Ubuntu** has a reputation for being the beginner's distribution, and for me this was most certainly the case. It was the first distribution I even tried and it was the only distribution I used for three straight years. If you cannot make the transition from OS X/Windows to Ubuntu without running back to mummy (that is, your first OS) due to difficulties adjusting, then you probably will not be able to make the transition to any Linux distribution. Ubuntu has two types of releases, Long-Term Support (LTS) releases which come in April of even-numbered years (e.g., April 2014, April 2016, April 2018, *etc.*) and standard releases which come out every six months. LTS releases are supported for up to five years, so if you stick to them you will need to perform a system upgrade (where you install the new version of Ubuntu over the old version, which is a time-consuming, error-prone and generally unpleasant process) far less frequently, although the price you will pay for this is you will be using outdated software.

#### Derivative Distributions
[**Linux Mint**](http://linuxmint.com/) and [**Zorin OS**](http://zorinos.com/) (although Zorin comes with both a free and paid edition) are two distributions based on Ubuntu (otherwise I find them basically the same, Linux Mint is based on the LTS releases, however) that may feel more like home to Windows users, as they look similar to Windows 7 and 10. [**elementary OS**](http://elementary.io/) is a distribution that is derived from Ubuntu (LTS) and it has a vaguely OS X-like look, namely it has a dock at the bottom of the screen. If you like an OS X-like dock, though, I would personally recommend the [deepin](http://www.deepin.org/?lang=en) distribution that was previously a Ubuntu (LTS) derivative, but is now a Debian (Unstable branch) derivative.

If you are using a PC with limited system resources, specifically CPU and RAM then I would suggest you consider using **Lubuntu**, an official flavour of Ubuntu (for which you can still receive support via the links provided at the end of this section on Ubuntu) that uses the LXDE desktop environment and hence should chew up less CPU and RAM.

#### Package Management
As far as package management goes, well Ubuntu is a Debian derivative, so it uses the same package manager, **APT** and the same package format, Deb (file extension: `.deb`). Although graphical front-ends for APT (in other words they run APT in the background, but you install the packages without ever touching the command-line) are available for Ubuntu users, such as **Synaptic** and the **Ubuntu Software Center**. I would give APT three to four stars out of five, it is not as fast as pacman, but still performance is not too big an issue. Creating Debian packages, however, is something I tried in my Ubuntu days and it gave me headaches. See Debian packages unlike pacman and RPM packages are not created using a text file, rather you create a directory with several files in it which you must edit into the correct format for your package.

Paid support is available for Ubuntu from the company behind its development, Canonical Ltd. This paid support is best for businesses using Ubuntu. If you are using Ubuntu merely for individual use odds are the free support detailed below will more than suffice.

It supports only armhf, i686, powerpc, ppc64el and x86_64 architectures.

#### Useful Resources
* [AskUbuntu](http://askubuntu.com/) &mdash; a StackExchange (the family of websites for which the original and most popular member is StackOverflow) website focused on Ubuntu. When I used Ubuntu it was my first port of call and I would say 9 times out of 10 I would either find an answer there before even asking a question, or get an answer within hours of asking a question there.
* [Community Help Wiki](https://help.ubuntu.com/community/CommunityHelpWiki)
* [Download Page](http://www.ubuntu.com/download/desktop)
* {% include Links/irc.html channel="ubuntu" %}
* [Ubuntu Documentation Centre](https://help.ubuntu.com/)
* [Ubuntu Forums](http://ubuntuforums.org/)
