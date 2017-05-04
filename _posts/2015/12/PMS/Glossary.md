## Glossary
To ensure that everything in this post is clear as day to understand I felt I should explain some [acronyms](#acronyms), [terminology](#terminology) and [formatting conventions](#formatting) adopted in this post.

### Acronyms
The acronyms used in this post include:

* **CLI**: <b>c</b>ommand-<b>l</b>ine <b>i</b>nterface. Which is usually accessed on Sabayon via terminal emulators.
* **GPO**: <b>G</b>entoo <b>P</b>ortage <b>o</b>verlay.
* **GUI**: <b>g</b>raphical <b>u</b>ser <b>i</b>nterface.
* **PMS**: <b>p</b>ackage <b>m</b>anagement <b>s</b>ystem.
* **PT**: <b>P</b>ortage <b>T</b>ree, the main official overlay of the Gentoo Foundation.

### Formatting
Angle brackets `<` and `>` with a word between them denotes user-provided variables. For example, `<PACKAGE>` denotes the name of a software package, `<OVERLAY>` denotes the name of a software overlay, `<FILE>` is the name of a file, including its extension (e.g., it may equal `atom-1.3.2.ebuild`, when are referring to ebuild files), *etc.* `This` formatting denotes pieces of code, file paths or file extensions, while [`this`](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) formatting denotes pieces of code/file paths for which I have provided a hyperlink. <code><span class="codeu">user $</span></code> means that code that follows, that is on the same line, are to be run as standard user (as opposed to superuser, or root). <code><span class="coder">root #</span></code> indicates that the code that follows, that is on the same line, is to entered into a instance of Bash with root privileges.

### Terminology

#### Bandwidth
This is a term I am using to mean data transferred via a network, such as the Internet. Although this definition may not be strictly correct, see for example its [Wikipedia article](https://en.wikipedia.org/wiki/Bandwidth_(computing)).

#### [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
The **Bourne-Again Shell** that is developed as part of the GNU Project, is the default command shell of Sabayon Linux and most other Linux distributions (including Gentoo Linux). It is covered in greater detail, by the [*Bash Scripting and the Command-Line: an Introduction for Sabayon Users*](../../../11/26/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users) post.

#### Binary package
A type of [software package](#software-package) that contains an executable script that is ready to be run. They are usually produced from pre-compiled source code. Most package managers work with binary packages, example of package managers that work with binary packages by default, include:

* [APT](https://en.wikipedia.org/wiki/Advanced_Packaging_Tool), the default command-line package manager used by Debian-based distributions, including Ubuntu. APT uses [**Deb packages**](https://en.wikipedia.org/wiki/Deb_(file_format)) which have the `.deb` file extension. Deb packages are installed using dpkg (`dpkg`), although APT (`apt`) provides dependency resolution, repository management, package querying, *etc.* and uses `dpkg` to perform the actual package installation. Deb packages can be unpacked using the command `ar -xv <PACKAGE>` ([`ar`](/man/ar.1p.html) is provided by [GNU Binutils](http://en.wikipedia.org/wiki/GNU_Binutils)). They contain a metadata tarball called `control` that can be left uncompressed, gzipped or xzipped, yielding the file names `control.tar`/`control.tar.gz`/`control.tar.xz`, binary package data (including installable files) tarball (which can be compressed with [gzip](https://en.wikipedia.org/wiki/Gzip) (making the file extension `.tar.gz`), [bzip2](https://en.wikipedia.org/wiki/Bzip2) (`.tar.bz2`), [xzip](https://en.wikipedia.org/wiki/Xz) (`.tar.xz`) or [lzma](https://en.wikipedia.org/wiki/Lempel-Ziv-Markov_chain_algorithm) (`.tar.lzma`)) and `debian-binary` (which contains the Debian format version number, currently the latest version is 2.0).
* [APT-RPM](https://en.wikipedia.org/wiki/APT-RPM), the default command-line package manager used by OpenMamba and PCLinuxOS. It is a version of APT that has been specifically modified to work with [**RPM packages**](https://en.wikipedia.org/wiki/RPM_Package_Manager). RPM packages can be decompressed (or unpacked) using `bsdtar`, namely by running: {% include Code/codeus.html line1="bsdtar -xf &lt;PACKAGE&gt;" %}.
* [DNF](https://en.wikipedia.org/wiki/DNF_(software)), which is the default package manager of Fedora &#8805;22. It uses **RPM packages** (with the `.rpm` file extension).
* [Entropy](https://en.wikipedia.org/wiki/Entropy_(package_manager)) is the default package manager of Sabayon and uses `.tbz2` binaries, the same type of binaries that Portage packages software as.
* [yum](https://en.wikipedia.org/wiki/Yellowdog_Updater,_Modified), the default package manager of CentOS, Fedora &lt;22 and Red Hat Enterprise Linux, which also uses **RPM packages**.
* [ZYpp](https://en.wikipedia.org/wiki/ZYpp), the default command-line package manager of openSUSE and SUSE Linux Enterprise, which also works with **RPM packages**.

#### Metadata
Metadata is essentially information (or data) about data. Software package metadata may contain details about when the package was built, who built the package, the features of the package, maybe a description, its web page, *etc.*

#### [Software package](https://en.wikipedia.org/wiki/Package_manager)
A distribution of software and data contained in archive files, that can be used by package managers to install software.[^1] There are two main types of software package: [binary](#binary-package) and [source code](#source-code-package), which are both covered separately.

#### Source code package
A type of [software package](#software-package) that contain raw software source code which must be configured and compiled before an executable script is generated that can be run, as opposed to [binary packages](#binary-package) which contain an executable script that can be immediately run. The best example Linux package manager that works with source code packages by default is [Portage](https://en.wikipedia.org/wiki/Portage_(software)).
