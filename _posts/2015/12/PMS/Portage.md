### Portage
{% include Links/image.html image="Package-Managers/GTK-based-Portage-front-end-Porthole.png" description="Screenshot of Porthole running under KDE Plasma 5" width="1100px" float="none" %}

{% include Links/links.html sw="En:Portage" wp="Portage_(software)" package="sys-apps/portage" program="Portage" gw="Portage" %} is a package management system that is arguably the most powerful Linux PMS available today. It is written in [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) and [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script, so as to afford users the ability to script with Portage. Portage installs, removes and upgrades software using the instructions contained in a specialized type of Bash script known as an [**ebuild**](#ebuild). The `sys-apps/portage` package provides the executable commands listed below. Each are hyperlinked to their respective manpage, if they have one. You can replicate this list using {% include Code/codeus-fs.html line1="equery files sys-apps/portage | grep /usr/bin" %} You can show all the manpages associated with `sys-apps/portage` with (assuming the [Gentoolkit](#gentoolkit) is installed): {% include Code/codeus-fs.html line1="equery files sys-apps/portage | grep /usr/share/man" %}

* [`ebuild`](/man/ebuild.1.html)
* [`egencache`](/man/egencache.1.html)
* [`emerge`](/man/emerge.1.html)
* `emerge-webrsync`
* [`emirrordist`](/man/emirrordist.1.html)
* `portageq`
* [`quickpkg`](/man/quickpkg.1.html)
* [`repoman`](/man/repoman.1.html)

Portage affords users this extra control via **USE flags**, which are &ldquo;keywords that embodies support and dependency-information for a certain concept&rdquo; (quoted from the [Gentoo Handbook](https://wiki.gentoo.org/wiki/Handbook:X86/Working/USE)), in other words they are keywords that allow users to decide which (if any) optional package features (like language bindings, for example) will be built, when the package itself is built. These USE flags can be enabled or disabled for individual packages (via modifying files in the directory `/etc/portage/package.use`) or for all packages (via editing the `USE="...` line in [`/etc/portage/make.conf`](/man/make.conf.5.html)). USE flags should not be confused with **package keywords** (individual package keywords can be found in the directory `/etc/portage/package.keywords`, editing keywords for all packages can be done by editing the `ACCEPT_KEYWORDS="..."` line in `/etc/portage/make.conf`), which are entirely separate keywords, that detail architecture support (x86_64 vs. x86) and a few other features. Likewise packages you do not want Portage to emerge under any circumstances (which can be called **masked packages**) can be added to files within the directory `/etc/portage/package.mask`.

Portage is traditionally a **command-line package management system** (invoked by the command `emerge`), with no official graphical front-ends available, but a few unofficial graphical front-ends exist in the PT, of which the most popular is probably the GTK+ based {% include Links/links.html package="app-portage/porthole" program="Porthole" link="http://porthole.sourceforge.net/" %}

The PT contains over 18,750 software packages, as of December 2015, and while this may seem like quite a fair number (which it is) there will always be some people that will want to install software that is not in the PT. To do this it is advisable to search the [GPO website](http://gpo.zugaina.org/), for the package you would like and then add the overlay that contains the package you want with **Layman**.

#### Emerge Syntax
According to **Portage's Manpage**[^2], emerge commands have the following format:
{% include Code/coder.html line1="emerge [<em>options</em>] [<em>action</em>] [<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]" no="1" %}
This can be confusing to users not familiar with the formatting used by Gentoo's Manpages (or Linux Manpages in general, for that matter), but I will attempt to explain. Before I do, I need you to get into the mind-frame you had when you first learnt algebra in high school, where variables (like x or y) could be substituted with numbers, letters, other characters or a combination of any, or even all of these. With this mind-frame the above generalized format of emerge commands will make more sense, as all words in that command except for root and emerge can be substituted, depending on what you want to do with Portage.

What is in square-brackets (`[...]`) are optional parts of the command (that is, they can be omitted) and when you are writing an actual command you omit the square brackets and substitute the word inside with any of a set of possible values it can take on. Some (not all, I do not even understand them all!) possible values *options* and *action* can take on are covered in the tables below. Multiple options can be combined with certain actions, often using the shortened notation. For example, to combine the ask and verbose options when emerging GNU Octave, one can run the shortened form {% include Code/coders.html line1="emerge -av sci-mathematics/octave" %} or the full-lengthed form {% include Code/coders.html line1="emerge --ask --verbose sci-mathematics/octave" %}. The vertical lines or pipes, as they can also be called, which is `|`, in (1) means the options separated by it and between the square brackets are mutually-exclusive options (that is, you either pick one or you pick none, depending on what you want to do). To save time, I will call the following part of (1) &quot;**input**&quot;:
<div class="code">[<em>ebuild</em> | <em>tbz2file</em> | <em>file</em> | <em>@set</em> | <em>atom</em>]</div>
**Sets** (`@set` in the "input") are essentially a useful way of specifying a large group of packages. There are six sets found in a default install of Sabayon, more can be created by users with root access by them editing files in the directory, `/etc/portage/sets`. Running {% include Code/coders.html line1="emerge --list-sets" %} should list all available sets. **ebuilds** are just the names of packages you want to install. At a bare minimum they should be the package's name (case-sensitive), without its category (e.g., wordpress for `www-apps/wordpress`), but sometimes specifying a package's name without its category leaves some ambiguity (that is, there may be more than one package in the Portage Tree or unofficial overlays added with Layman, that has the name specified), so it is often safer to specify the category also. Some people may want to specify the specific package version they want too, to do this add an equal sign before the category and specify the package version after the package's name, for example running {% include Code/coders.html line1="emerge =sys-apps/portage-2.2.20" %} should install Portage version 2.2.20. **Files** are files that have been created by installed packages. **tbz2file**, as one can probably guess are any binary packages created by emerge itself, in the `.tbz2` file format that one wishes to install. Please note, however, that installing tbz2 files by path is deprecated and may not work, if you want to install tbz2 binaries use the `-K` option for `emerge` and instead specify the package's Atom as the input for `emerge`. **Atoms** (`atom`) are essentially the same as ebuilds, only with bounds on their version numbers specified. For example, {% include Code/coders.html line1="emerge &lt;dev-lang/python-2.0" %} should install the best (but not necessarily the latest) version of Python available before version 2.0.
{% include_relative table1-options-for-emerge.html %}
<br/>
{% include_relative table2-actions-for-emerge.html %}
<br/>

#### tbz2 Binaries
As previously mentioned `.tbz2` is the binary package format used by Portage. It contains a tarball (in `.tar.bz2` format) that contains the binary package data (that is, the installed files of the package) and a xpak (with `.xpak` file extension) file that contains the package's metadata, including the USE flags used to generate the package. You can split `.tbz2` binaries into these two components by issuing the command (with `app-portage/portage-utils` installed):
{% include Code/codeu.html line1="qtbz2 -s &lt;PACKAGE&gt;" %}

#### Links
<h5>Handbook</h5>

* [AMD64 Handbook](https://wiki.gentoo.org/wiki/Handbook:AMD64/Working/Portage)

<h5>Manpages</h5>

* [EMERGE(1) Manpage](/man/emerge.1.html)
* [PORTAGE(5) Manpage](/man/portage.5.html)
