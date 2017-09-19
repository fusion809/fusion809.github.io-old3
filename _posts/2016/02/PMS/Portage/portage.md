## Portage
[**Portage**](https://wiki.gentoo.org/wiki/Portage) is the default package manager of Gentoo Linux and many of its derivatives, including Calculate and Funtoo Linux. The main command that invokes Portage from the command-line, is [`emerge`](https://fusion809.github.io/man/emerge.1.html). It is written in Python and Bash script and unlike all other package managers mentioned in this post it works with source code packages, by default. As such there are several differences between it and other package managers, in term of how it operates.

Its chief repository is found in the `/usr/portage` directory (the so called "Portage Tree", it can be searched from [this website](https://packages.gentoo.org)), which is structured similarly to the FreeBSD ports system and contains ebuilds, a specialized type of Bash script, along with patch files and Manifests (a file that contains checksums and file size information about ebuilds and other files). This structure is such that the top-level subdirectory of `/usr/portage` is for package categories like `app-editors` for text editors, `x11-wm` for window managers, *etc.*, the next lower level is for specific packages (e.g. `/usr/portage/app-editors/gvim` is where gVim ebuilds and related files can be found). ebuilds contain instructions that Portage can use to build a binary software package (in the `.tbz2` format) and/or install the software package from source code or a binary package from another distribution (e.g. Debian packages and RPM packages).

Additional Portage repositories (which are more commonly referred to as *overlays*), have the same internal file structure to the Portage Tree, that is, their top-level subdirectories are package categories and their subdirectories are for specific packages. They are managed by a tool also developed by the Gentoo Foundation called Layman which stores its repositories in the `/var/lib/layman` directory. For example, `/var/lib/layman/sabayon-tools`, if it exists on one's system, would contain my Portage overlay, [`sabayon-tools`](https://github.com/fusion809/sabayon-tools). Layman is written in Python too and is not included with Gentoo Linux by default (although it is included with Sabayon Linux, by default) and instead has to be installed with Portage before it can be used.  

### Beginner-Friendliness
Portage is probably the least beginner-friendly package management system mentioned in this post, its syntax is less than intuitive and quite frequently installing, removing and upgrading software is not as simple as running a single command. This is due to USE flag constraints, package conflicts, *etc.*, that the user sometimes has to deal with. It has no official graphical front-ends, although an unofficial GTK-based one called Porthole ([`app-portage/porthole`](https://packages.gentoo.org/packages/app-portage/porthole)) is available from the Portage Tree. Despite this it does have pretty high-quality documentation for a Linux package manager, so the really motivated and persistent beginners could probably learn how to use it without needing help from others. Overall I would rank it at **2-3/10** for beginner-friendliness.

Its basic syntax is:
{% include Code/coder.html line1="emerge [<em>options</em>] [<em>action</em>] [<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]" no="4" space="32" %}

For further details on its syntax go [here](https://fusion809.github.io/2015/12/24/package-management-on-sabayon#emerge-syntax).

### Customizability
Being a source code package manager, Portage affords users almost infinite control over the packages on their system. It does this via the specification of so called "USE flags". They are usually options that ebuilds pass to the respective configure script of the package they build. The Portage Tree (PT) and unofficial Portage overlays usually contain several different versions of the same package too (each with different ebuilds), hence affording users a choice of multiple different versions of the same package. For example, the [`x11-wm/enlightenment`](https://packages.gentoo.org/packages/x11-wm/enlightenment) package (which is for the Enlightenment window manager) at the time of writing has the following different versions available in the PT:

* 0.16.9999
* 0.17.9999
* 0.18.8
* 0.19.10
* 0.19.12
* 0.20.1
* 0.20.2
* 1.0.11
* 1.0.17

These packages also differ in their allowed USE flags, the 0.20.2 package has the `wayland` USE flag, for example, which if enabled will build the package with Wayland support. Additionally one is free to set up one's own overlay, like I have, and install one's own custom packages using it.

### Development
Package development with Portage is easier than developing Debian packages, about as difficult as developing RPM packages and more difficult than writing PKGBUILDs and developing pacman packages, in my opinion. By package development I mean both writing working ebuilds and building binary packages from them. Writing ebuilds is a skill that comes slowly and only by doing several examples, and having a good knowledge of Bash syntax is a prerequisite for doing it well. Those interested in writing ebuilds may wish to read the [`ebuild`](https://fusion809.github.io/man/ebuild.1.html) command man page and the [`ebuild`](https://fusion809.github.io/man/ebuild.5.html) file format man page, both of which are hosted on this site.

### Features
Portage is one of the most feature-packed package managers out there. Its output can be made more detailed (or verbose) by passing the `--verbose/-v` flag to it. The `--buildpkgonly/-B` option can be passed to get it to only build a binary package and not install the program into the live file system. It does not do installs from a specified URL, although it can be used to install local binary packages, although they have to be in a specific location in the root file system. The way it downloads the source files, that are used to build the package, is via wget and, if possible, rsync.

### Speed
Portage is, by far, the slowest package manager compared in this comparison, as it builds software packages from source code, by default. To test its speed I ran {% include Code/coders.html line1="time emerge app-editors/vim::sabayon-tools" %} when the latest version of Vim (and the version in my `sabayon-tools` overlay) was 7.4.1342, the full output it gave was very long so I have placed it [here](https://gist.github.com/c32ec431120dd5b90947) and rather I will just give the time it took to reinstall `app-editors/vim` (none of the related packages like `vim-core` or `gvim`):

~~~
real	3m18.828s
user	2m6.109s
sys	0m20.541s
~~~

{% include_relative Portage/table-5-basic-usage-examples.html %}
