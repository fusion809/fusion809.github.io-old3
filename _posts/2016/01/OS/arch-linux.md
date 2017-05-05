## Arch Linux
{% include_relative os-shot.html image="Arch-Linux-DDE-menu.png" width="1130px" float="none" description="Arch Linux running the Deepin Desktop Environment" %}

### Background
{% include_relative os.md os="Arch Linux" d="https://www.archlinux.org/download/" dw="arch" wp="Arch Linux" url="https://www.archlinux.org/" wiki="https://wiki.archlinux.org/" forum="https://bbs.archlinux.org/" bugs="https://bugs.archlinux.org/" gr="archlinux" irc="https://wiki.archlinux.org/index.php/IRC_channel" ml="https://lists.archlinux.org//listinfo" %} is an independent Linux distribution that was first founded in 2002 and has since become one of the most popular Linux distributions that is geared towards experienced users. It aims to adhere to the "Keep It Simple, Stupid" principle. Its take on this principle is that no automation should be done and that a fresh install of Arch should have as little software on it as possible. The purpose of this minimalism is that it gives the user as much control over their system as possible. Arch uses its own package management system too, pacman. Due to its minimalism it is also often said to be a "Do It Yourself" (DIY) distribution.

The manual installation process can be a newbie-killer (mostly in the sense that it is tedious and the [guide](https://wiki.archlinux.org/index.php/Beginners%27_guide) for it is not really written for Linux newcomers), although with installation scripts this can be bypassed. As I have never used Arch Linux on my PC, except through Oracle VM VirtualBox, I always use [Packer](https://github.com/fusion809/arch-builder) to automate the installation process. Once installed, intermediate-experienced Linux users that are comfortable with the command-line should feel at home, although novice Linux users that are much more comfortable with GUIs than with CLIs will probably struggle at this stage too. I personally find software installation on Arch Linux easier than it is on Debian and Fedora, because of its command-line package managers, pacman and Yaourt.

It is the 8th most popular Linux distribution, according to the *DistroWatch* website.

### Package Management
**pacman** is a PMS written in C that installs software from binary packages with the file extension `.pkg.tar.xz`. These binary packages are stored in the pacman repositories, which contain over 13,600 packages as of {{ page.date | date: "%d %B %Y" }}.[^1] One can search the official repositories [here](https://www.archlinux.org/packages/). The [`pacman`](https://fusion809.github.io/man/pacman.8.html) package provides a number of different commands (which are all contained in the `/usr/bin` directory and a complete list of the files included by the pacman package on 64-bit systems may be found [here](https://www.archlinux.org/packages/core/x86_64/pacman/files/)) that can be executed from the command-line, including, but not limited to: [`makepkg`](https://fusion809.github.io/man/makepkg.8.html) and [`pactree`](https://fusion809.github.io/man/pactree.8.html). `makepkg` is used to build pacman binary packages (in `.pkg.tar.xz` format) from instructions contained in a specialized type of Bash script called a [PKGBUILD](https://fusion809.github.io/man/PKGBUILD.5.html). PKGBUILDs usually describe to `makepkg` how to build binary packages from source code, which is, of course, a tedious and error-prone process, although similarly to Gentoo's ebuilds PKGBUILDs sometimes describe how to build a binary package from another Linux distribution's binary package (usually `.deb` or `.rpm` binaries).

Arch Linux also has its own git-managed online repository of PKGBUILDs, that is called the [**Arch User Repository**](https://aur.archlinux.org/) (**AUR**). The AUR actually contains more PKGBUILDs than there are binary packages in pacman's official repositories &mdash; as of {{ page.date | date: "%d %B %Y" }} it contains over 30,000 PKGBUILDs.[^2] If one wants to install software from the PKGBUILDS contained in the AUR one has two choices: either do so manually, using `git`, `makepkg` (to compile the package using PKGBUILD instructions) and `pacman` (to install the package build with makepkg) command-line tools or use a wrapper for pacman that is called [Yaourt](https://wiki.archlinux.org/index.php/Yaourt) ([`yaourt`](https://fusion809.github.io/man/yaourt.8.html) from the command-line).

Yaourt is French for yogurt and is so named as it is an acronym for <b>Y</b>et <b>A</b>n<b>o</b>ther <b>U</b>ser <b>R</b>epository <b>T</b>ool. Yaourt has the same syntax as pacman, but unlike pacman, which when asked to install a program will only search for the program in the Arch binary package repositories, Yaourt will look at both Arch's binary package repositories and the AUR.

I would personally rate pacman and Yaourt as two of my favourite package managers, because of how simple, fast, yet flexible they are. Most package managers will install software from either binary packages or from source code, unlike Yaourt which can install from both. pacman and Yaourt are also fairly fast compared to equivalent package managers operating on other systems. For example, Yaourt will most of the time take less time to install a software package from source code than Portage will take to install the same package. I suspect the reason behind this is that Portage is written in Python and Bash script, while pacman is written in C and Yaourt, being a wrapper for pacman, is written in C and Bash script. pacman is actually widely considered the fastest Linux package manager available.

Arch Linux also follows a bleeding-edge rolling release model (BE-RRM), which means that users almost always have the latest software and never need to perform a standard system upgrade. Although it is worthwhile noting that not all software on Arch is bleeding-edge, some can be a few releases behind. For example, until 14 December 2015 [e_dbus 1.7.9](https://www.archlinux.org/packages/extra/x86_64/e_dbus/) was still in their official pacman repositories, even though version 1.7.10 was released on 6 January 2014.[^3] Although as a side note it may also be worthwhile mentioning that I have set up a GitHub repository containing [PKGBUILDs](https://github.com/fusion809/PKGBUILDs) for packages that are either not in the AUR/pacman repositories, or the versions that are there have since become out of date. At the time of writing this, these PKGBUILDs are all related to the Enlightenment desktop (and includes e_dbus 1.7.10).

pacman and Yaourt both have a very unusual syntax, see most command-line BSD/Linux package managers use the `install` option to install software, `remove` to remove software, `update` to update software repositories and `upgrade` to update all installed software. pacman (and hence also Yaourt, although for upgrades the option is `-Syua` for Yaourt) instead uses `-S`, `-R`, `-Sy` and `-Syu` options, respectively. Further details of its syntax can be found [here](https://wiki.archlinux.org/index.php/Pacman_Rosetta).

Here is an example `~/.bashrc` file one can use on Arch VMs.

#### pacman/Yaourt Scripts

~~~ bash
# A less powerful replacement for Yaourt, I use when Yaourt is somehow inappropriate
function aurin {
  for i in "$@"
  do
    git clone https://aur.archlinux.org/$i.git
    pushd $i
    makepkg -si
    popd
    rm -rf $i
  done
}

# `paclin` installs software with pacman from a local package.
function paclin {
  sudo pacman -U $@*.pkg.tar.xz
}

# `pacin` installs software with pacman, without asking for confirmation
# to get this command to ask for confirmation first remove the --noconfirm
# option
function pacin {
  sudo pacman -S $@ --noconfirm
}

# `pacrm` removes software with pacman, without asking for confirmation
# -Rsc option is used to get pacman to remove reverse dependencies of the target
# package, as needed. If you use the -R option instead quite often this command
# will fail due to reverse dependencies that would be broken if the target package
# is removed
function pacrm {
  sudo pacman -Rsc $@ --noconfirm
}

# `pacup` updates software installed with pacman (not Yaourt-installed software)
# without asking for confirmation
function pacup {
  sudo pacman -Syu --noconfirm
}

# `update` updates all software, including that originally installed with Yaourt
# without asking for confirmation
function update {
  yaourt -Syua --noconfirm
}

alias yaup=update

# `yain` installs software using Yaourt, without asking for confirmation
function yain {
  yaourt -S $@ --noconfirm
}

# `yalin` installs a local software package using Yaourt, without asking for
# confirmation
function yalin {
  yaourt -U $@ --noconfirm
}

# `yarm` removes software using Yaourt
function yarm {
  yaourt -Rsc $@ --noconfirm
}
~~~

By default Arch has the following pacman repositories enabled:

~~~ bash
core
community
extra
~~~

### Derivatives
{% include_relative derivatives.md os="Arch" %}
Several derivatives of Arch Linux exist, most of them are designed to be more user-friendly and less minimalistic than Arch, although some differ in other respects instead. Examples of user-friendly Arch derivatives include (all of which feature graphical installers):

* [Antergos](http://distrowatch.com/table.php?distribution=antergos) &mdash; a Spanish distribution that used to be called Cinnarch due to its default Cinnamon desktop. Since then, extra live media has become available that feature different desktop environments. It supports both 32-bit and 64-bit processors and presently ranks 38th for popularity, according to *DistroWatch*. I have attempted to install this on a VirtualBox VM but failed due to bugs in the graphical installer.
* [ArchBang](http://distrowatch.com/table.php?distribution=archbang) &mdash; a Canadian distribution that uses Openbox as its default user interface. It is currently ranked 49th according to the *DistroWatch* website for popularity and supports both 32-bit and 64-bit processors. I have attempted to install this on a VirtualBox VM but failed due to bugs in the graphical installer.
* [Chakra](http://chakraos.org/) &mdash; a German distribution that uses the KDE Plasma 5 desktop by default. I have managed to install it on a VirtualBox VM, after I disabled 3D acceleration (which may have caused my inability to install Antergos and ArchBang), did not use it very long as I was more interested in Arch and Manjaro. It is presently ranked 60th according to the *DistroWatch* website for popularity and supports only 64-bit processors.
* [Manjaro Linux](#manjaro-linux) which is covered later in this post.

Another notable Arch derivative is [Parabola GNU/Linux-libre](http://distrowatch.com/table.php?distribution=parabola) which is just as challenging as Arch, if not more challenging, but unlike Arch it uses the Linux-libre kernel by default. Parabola is currently ranked 153rd for popularity according to the *DistroWatch* website.

{% include_relative specs.md arch="arm, i686, x86_64." shell="Bash." type="Linux." PMS="pacman" ui="Command-line." IM="Manual from the command-line or via unofficial shell script installers" date="2002." country="Canada." rm="Rolling." tm="Experienced users, especially those that value the latest software over system stability." %}

{% include_relative os-min.md cpu="i686." ims="659 MB." ram="256 MB." hdd="<800 MB." %}

{% include_relative os-ratings.md bf="4." cmb=">8." ob="1. It, due to its minimalism, is not very out-of-the-box." doc="8. Has some of the best documentation out there." sup="I have found their forums only useful when you can provide truck loads of information and screenshots, otherwise, beware there be sharks in these waters!" pm=">8." sru=">8." sb="7. I have found Arch disturbingly easy to inadvertently break and make unusable, but most of the time it is stable enough to use." mewi=">5. I have a decent amount of experience with this system and its more newbie-friendly derivative, Manjaro Linux." oa="8." %}
