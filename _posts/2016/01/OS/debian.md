## Debian
{% include Links/image.html image="operating-systems/Debian-8.2-KDE-appmenu.png" width="1130px" description="Debian 8.2 running KDE Plasma 4" float="none" %}
<br/>
### Background
{% include_relative os.md bugs="https://www.debian.org/Bugs/" wiki="https://wiki.debian.org/" ml="https://www.debian.org/MailingLists/" irc="https://wiki.debian.org/IRC" forum="http://forums.debian.net/" wp="Debian" os="Debian" docs="https://www.debian.org/doc/" dw="debian" d="https://www.debian.org/distrib/" gr="Debian" %} was one of the first Linux distributions to be founded and was founded back in 1993, by a then [Purdue University](https://en.wikipedia.org/wiki/Purdue_University) student, named [Ian Murdock](https://en.wikipedia.org/wiki/Ian_Murdock). He named it Debian as a portmanteau of his first name and the first name of his then girlfriend, Debra Lynn. Since 1993 Debian has become one of the most popular Linux distributions, in fact, since 2002 every year Debian has appeared within the top 10 list for popularity in terms of page hit rankings, according to *DistroWatch*. Presently Debian is ranked number 2 for popularity according to *DistroWatch*.

It has also been ported to the greatest number of different processor architecture types of any Linux distribution. Over 1,000 volunteer Debian developers exist worldwide, making the Debian Project, the FOSS project behind Debian, one of the largest worldwide. Debian is also the most popular base Linux distribution on which to build new Linux distributions.

### Installer
Debian uses its own installer known as the [Debian-Installer](https://wiki.debian.org/DebianInstaller), which is available from the command-line and as a graphical user interface. The official installation guide (for 64-bit systems, the guide for other architectures can be easily found using a Google search) can be found [here](https://www.debian.org/releases/stable/amd64/).

### Package Management
Debian uses the [**Advanced Packaging Tool**](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool) (**APT**, [`apt`](https://fusion809.github.io/man/apt.8.html) from the command-line) and [**dpkg**](https://en.wikipedia.org/wiki/dpkg) ([`dpkg`](https://fusion809.github.io/man/dpkg.1.html) from the command-line) for package management, by default. Although [Aptitude](https://wiki.debian.org/Aptitude) and [Synaptic](https://wiki.debian.org/Synaptic) are popular alternatives to APT that are generally considered more user-friendly, I personally prefer to just use APT and dpkg. Debian's repositories currently contain approximately 50,000 binary packages &mdash; amongst the most of any Linux distribution. There are four main repository branches of Debian, including (in order of increasing levels of stability) experimental, unstable (or sid), testing and stable. New software starts off in experimental and then makes its way (over the course of a few years) to stable. These different repositories cannot be used safely, simultaneously, on the same Debian installation, I know this well as I have tried to do this before (namely mix unstable and stable branches) and I ended up breaking my system. Despite this some unofficial APT repositories can be used along with one of the official Debian repositories relatively safely. This too, I know from experience as I often add the [Trinity Desktop Environment](https://wiki.trinitydesktop.org/DebianInstall) (TDE) repositories to my Debian VMs.

APT and dpkg have a limitation that DNF, RPM and yum lack, see DNF, RPM and yum can be used to install software packages from a URL, while APT and dpkg cannot. For example:
{% include Code/coder.html line1="apt-get install https://github.com/atom/atom/releases/download/v1.3.2/atom-amd64.deb" %}
and:
{% include Code/coder.html line1="dpkg -i https://github.com/atom/atom/releases/download/v1.3.2/atom-amd64.deb" %}
will **not** install Atom on 64-bit Debian systems. While:
{% include Code/coder.html line1="dnf install https://github.com/atom/atom/releases/download/v1.3.2/atom.x86_64.rpm" %}
will install Atom on Fedora ≥22.

APT is a command-line front-end for dpkg. dpkg is what does the actual software installation, while APT manages repositories and software dependencies. APT is written in [C++](https://en.wikipedia.org/wiki/C++) and [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script, while dpkg is written in [C](https://en.wikipedia.org/wiki/C_(programming_language)), C++ and [Perl](https://en.wikipedia.org/wiki/Perl_(programming_language)). APT by default installs software from binary packages found in the repositories specified in the text file `/etc/apt/sources.list`, although it can be used to install software from source code too. From the command-line APT is called by a variety of slightly different commands, including [`add-apt-repository`](https://fusion809.github.io/man/add-apt-repository.1.html), [`apt-cache`](https://fusion809.github.io/man/apt-cache.8.html), [`apt-config`](https://fusion809.github.io/man/apt-config.8.html) and [`apt-get`](https://fusion809.github.io/man/apt-get.8.html). APT is fairly unique amongst the major Linux package managers in that it can work with Debian and RPM packages, although when it works with RPM packages it is usually referred to as **[APT-RPM](https://en.wikipedia.org/wiki/APT-RPM)**.

Something that is worthwhile noting is that like many other popular Linux distributions (including CentOS, Fedora, openSUSE and Ubuntu) it splits many of its programs up into several different packages. For example, components of Lua (the programming language) 5.2 can be found in the following packages:
~~~ bash
lua5.2
lua5.2-doc
liblua5.2-0
liblua5.2-0-dbg
liblua5.2-dev
~~~
this feature can be a blessing and a curse, depending on what you do with your Debian system. I personally do a lot of software compiling on my Debian VMs and having to remember to install all of a program's components individually can be a real nuisance at times.

#### APT Scripts

~~~ bash
# Upgrade installed software. Then remove any software that is no longer needed and clean the
# APT cache.
function update {
  sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get autoremove -y && sudo apt-get autoclean
}

# Search for software
function sacs {
  sudo apt-cache search $@
}

# Show package details
function sacsp {
  sudo apt-cache showpkg $@
}

# Install software dependencies only
function sagdb {
  sudo apt-get build-dep -y $@
}

# Install software
# The input(s) can be local packages or packages in enabled repos
function sagi {
  sudo apt-get install -y $@
}

alias install=sagi

# Install local software package(s)
# sudo apt-get -f install installs any missing dependencies
# present in the currently-enabled repositories.
function sdli {
  sudo dpkg -i $@ && sudo apt-get -f install
}

# Remove software
function sagr {
  sudo apt-get remove -y $@
}

# Build Debian package from Debian sources, which are specified in
# /etc/apt/sources.list. The package will NOT be installed, however.  
function sagsb {
  sudo apt-get source -b $@
}
~~~

### Derivatives
{% include_relative derivatives.md os="Debian" excluding="Ubuntu" %}
Besides [antiX](#antix), [Ubuntu](#ubuntu) and its various progeny (like [Linux Mint](#linux-mint)) Debian has several other derivatives, the only two I have managed to install on a VM are {% include_relative os.md os="gNewSense" dw="gnewsense" url="http://gnewsense.org/" puncr="," %} which is an incredibly out-of-date Debian derivative (still using GNOME 2.30.2 as of December 2015, which was released in May 2010) built on the Linux-libre kernel (it was the distribution used by Richard Stallman, until he switched to Trisquel) and {% include_relative os.md os="Kali Linux" dw="kali" url="https://www.kali.org/" forum="https://forums.kali.org/" docs="https://www.kali.org/kali-linux-documentation/" d="http://www.kali.org/downloads/" bugs="https://bugs.kali.org/" %} (previously known as **BackTrack**) which is predominantly used for penetration testing and supports ARM, i386 and x86_64 processor types.

{% include_relative specs.md arch="arm64, armel, armhf, i386, mips, mipsel, powerpc, ppc64el, s390x, x86_64." shell="Bash." type="Linux." PMS="APT and dpkg." ui="Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, <i>etc</i>." IM="Live CD, DVD or USB." date="1993." country="U.S.A." rm="Fixed, approximately once every 1-3 years." tm="Individuals/organizations with a reasonable skill set, that do not require commercial support, but greatly favour system stability over how up-to-date software." %}

{% include_relative os-min.md cpu="i386." ims="<280 MB." ram="128 MB. >512 MB recommended." hdd="2 GB. 10 GB with a desktop environment." %}

{% include_relative os-ratings.md bf="7-8." ob="6. By default it contains only free and open-source software sources, so out-of-the-box for proprietary firmware is missing for the most part." cmb="5." doc=">7. Has pretty good documentation, but I have fairly little experience with said documentation." sup="? Never had to use their support forums or IRC channels." pm="7. APT is OK enough, but still not something I would claim is the best PMS." sru="7. Lighter than CentOS, but not as minimalistic as Arch." sb=">9. Very stable, never had stability issues with it myself." mewi="4. Some experience, not an awful lot though." oa="7. As previously mentioned I dislike outdated software in an OS." %}
