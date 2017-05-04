### Gentoo/Sabayon Packages
**Gentoo packages** (file extension: `.tbz2`) are bz2-compressed binary packages used by Gentoo Linux and its derivatives. They are produced and installed using the Portage package manager. **Sabayon Linux**'s Entropy package manager uses a slightly different package format (same file extension though, `.tbz2`), generated from the corresponding Gentoo packages using Entropy. Most Gentoo users will not install their software from tbz2 files, as Portage is a source code package manager (which is usually the reason why people use Gentoo in the first place, because they want to install packages from source code using Portage) and as a result most packages are built from source code and not installed from binary packages. The way that Portage installs software from source code is by following the instructions found in a specialized Bash script called an ebuild. Portage can be used to install tbz2 binary packages, however, and it can be configured to work with (that is, install, remove, upgrade, *etc.* packages in said repositories) binary package repositories. This is just an uncommon Portage configuration.

#### Package Contents
Running:

{% include Code/codeu.html line1="qtbz2 $package.tbz2" %}

where `$package.tbz2` is a tbz2 binary, extracts an xpak file (file extension: `.xpak`; which contains the package metadata) and `.tar.bz2` archive containing the installed files of the package.

#### ebuild Structure
Syntactically, I would say that ebuilds are most similar to PKGBUILDs, but there are several key differences. For one, they include eclasses, specialized Bash functions designed specifically for ebuilds, many of which are poorly documented, in my opinion. Secondly, PKGBUILDs are all named `PKGBUILD`, while ebuilds only share the same file extension `.ebuild`. Their name consists of the package's name and its version, e.g., gVim 7.4.1342 would have an ebuild named `gvim-7.4.1342.ebuild`. ebuilds also come with manifests (files entitled `Manifest`) that include checksums for all the source files and the ebuilds themselves. [Here](https://github.com/fusion809/sabayon-tools/blob/master/app-editors/gvim/gvim-7.4.1342.ebuild) is an ebuild for gVim that you can compare to the previously-provided PKGBUILD and spec file for gVim, it is over 400 lines long so I am not going to include it in this post. To build a Gentoo binary package from an ebuild run:

{% include Code/codeu.html line1="ebuild $package.ebuild package" %}

while to build a Sabayon binary package, one has to run one additional command:

{% include Code/coder.html line1="equo pkg inflate $package.tbz2" %}
