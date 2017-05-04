#### Manjaro Linux
{% include Links/image.html image="operating-systems/manjaro-kde-15.12.jpg" width="850px" float="none" description="Manjaro Linux 15.12 KDE Edition" %}

[**Manjaro Linux**](https://manjaro.github.io/) (1-6), an Arch Linux-based distribution that unlike Arch Linux itself is very beginner-friendly. It too is developed by its own FOSS community. It has out-of-the-box support for most graphics cards, multimedia codecs and Broadcom chips like mine. It has even more up-to-date software than Fedora, so if you want the latest software I would recommend using Manjaro. Bugs may be more frequent under Manjaro than under more stable distributions such as CentOS and Ubuntu (LTS). It has three official editions: a netinstall edition (which contains the bare minimum software that constitutes a Manjaro system, it is so bare, in fact, that it has no desktop environment preinstalled), a KDE edition (featuring the KDE desktop) and a Xfce edition (which is faster and a smaller download than the KDE edition, it is fairly Windows-like in its appearance too).

You can install just about any Linux-compatible program (including proprietary programs) on Manjaro, either from its own repositories or from the [Arch User Repository](https://aur.archlinux.org) (AUR) of Arch Linux, which I am afraid is best accessed from the command-line. Fortunately, the most popular and arguably best tool for installing packages from the AUR, Yaourt (`yaourt` from the command-line) comes pre-installed on Manjaro Linux. If you find a package in the AUR you wish to install you simply need to run {% include Code/codeus-rc.html line1="yaourt -S $package" %} where `$package` is to be replaced with the package's name. I would personally say that Manjaro has the greatest number of software packages available for easy installation of all distributions mentioned in this post. Manjaro Linux, like its parent Arch Linux, follows a rolling release model. What this means is that you never need to perform a distribution upgrade (that is, the type of upgrade mentioned in the Fedora section). Simply run your package manager (Octopi, Pamac or Yaourt) regularly to ensure your software is up-to-date.

If you need free support for Manjaro I recommend you use either [their forums](https://forum.manjaro.org) or their IRC channel {% include Links/irc.html channel="manjaro" puncl="(" puncr=")." %} Their forums has at least one person, I have come across, that believes that Manjaro should be DIY, and hence requires anyone looking for support to show extensive attempts to fix their own problem before he will help.

Manjaro Linux uses the pacman (and yes, I got the case right, it is stylized such that lower case letters are appropriate) command-line package manager of Arch Linux, by default, although Yaourt is also pre-installed, on at least most Manjaro Linux installations. pacman installs packages with the `.pkg.tar.xz` file extension. These packages are generated using a utility provided by the pacman program, which is invoked from the command-line by the command `makepkg`. `makepkg` looks for files in the present working directory (PWD), with the name "PKGBUILD" and, following the instructions therein, attempts to build a `.pkg.tar.xz` package. The graphical pacman front-ends, Octopi and Pamac also come pre-installed on Manjaro. As previously mentioned one would run:

{% include Code/codeu.html line1="yaourt -S $package" %}

to install a package.

{% include Code/codeu.html line1="yaourt -Rs $package" %}

to remove a package (beware, due to dependency issues, sometimes `yaourt -Rsc $package` may be necessary) and:

{% include Code/codeu.html line1="yaourt -Syua" %}

to upgrade all installed packages, after first synchronizing the local pacman repository databases checking for AUR package updates.
