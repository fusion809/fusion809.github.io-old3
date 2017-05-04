## Package Formats
In order to effectively build packages one must understand the basics of the **package format** one intends to build. There are four major types of Linux package format that I worked with:

* **Arch Linux packages** (**ALPs**, file extension: `.pkg.tar.xz`), the package format used by Arch Linux, its derivatives and select "independent" distributions such as Frugalware Linux and KaOS. They are built based on the contents of PKGBUILDs, which are Bash scripts with build instructions for the package along with its associated metadata.
* **Debian packages** (or **Deb packages**, file extension: `.deb`), the package format used by Debian and its derivatives such as Ubuntu and its derivative, Linux Mint. They are built based on the contents of a whole directory and its subdirectories. The build instructions are found within the `rules` file.
* **Gentoo packages** (file extension: `.tbz2`), the package format used by Gentoo Linux and its derivatives like Sabayon Linux. tbz2 files are built based on the contents of a specialized Bash script called an ebuild (with the `.ebuild` file extension). ebuilds are stored within a set of directories and subdirectories (called **overlays**), usually managed by Git (`git`) or some other version control system (VCS) like Mercurial (`hg`) or Subversion (`svn`). They are essentially like more complicated (and hence more difficult to write) equivalents to PKGBUILDs and like PKGBUILDs they include package metadata and build instructions.
* **RPM packages** (file extensions: `.rpm`, `.src.rpm`), a package format used by select distributions such as CentOS, Fedora, Mageia and openSUSE. They are built based on the contents of a whole directory, entitled `rpmbuild`, and its subdirectories. The most important file in the `rpmbuild` directory and its subdirectories is called a spec file, which has the `.spec` file extension. This spec file contains package metadata and build instructions, similarly to ebuilds and PKGBUILDs.

{% include_relative 03-package-formats/02-archlinux/01-index.md %}

{% include_relative 03-package-formats/03-debian/01-index.md %}

{% include_relative 03-package-formats/04-ebuilds/01-index.md %}

{% include_relative 03-package-formats/05-rpm/01-index.md %}
