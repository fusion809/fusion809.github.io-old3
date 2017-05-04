### RPM Packages
**RPM Packages** (file extension: `.rpm`, source RPMs have the `.src.rpm` file extension) are the package format used by Red Hat Linux (RHL), its derivatives (such as CentOS, Fedora, Korora, Oracle Linux, Red Hat Enterprise Linux, Scientific Linux), openSUSE, SUSE Linux Enterprise, *etc.* They are built using the `rpmbuild` command provided by the `rpmdevtools` package on most distributions. From what I understand RPMs are a type of file archive (which can be extracted using the `bsdtar` or `rpm2cpio` commands). They are not `ar` archives, however. RPM is a binary package format, although a source code version also exists, which is called a SRPM. SRPMs can also be extracted using `bsdtar`.

#### RPM Contents
Decompressing RPM packages using {% include Code/codeus.html line1="bsdtar -xf $package.rpm" %} extracts just the package's installed files. This might make it seem like RPM packages have no metadata, but they do, it is just not readily apparent by decompressing them using `bsdtar`. To show a summary of the metadata inside these packages you need to run {% include Code/codeus-fs.html line1="rpm -qip $package.rpm" %}

#### rpmbuild
`rpmbuild` needs to be run within a directory called `rpmbuild` within the current user's home directory, with its own set of subdirectories, this is its general structure:

~~~ bash
rpmbuild/
  - BUILD
  - BUILDROOT
  - RPMS
  - SOURCES
  - SPECS
  - SRPMS
~~~

The `BUILD` and `BUILDROOT` subdirectories are used for compiling the source code and collecting the necessary installed files for packaging, respectively. The `SOURCES` subdirectory contains the source files, including any patches, and `SPECS` contains the all-important spec files, which instruct the `rpmbuild` utility how to build the package and what metadata the RPM should contain. The RPM is stored in the `RPMS` subdirectory and the SRPM is stored in the `SRPMS` subdirectory.

spec files look sort of like PKGBUILDs, except they use macros instead of many of the variables and functions found in PKGBUILDs. I would provide an example here in this post of Vim's spec file (the one I use to build Vim in the Open Build Service) but it is over 520 lines long (as opposed to 72 lines for the gVim PKGBUILD shown earlier). So to view it see [here](https://build.opensuse.org/package/view_file/home:fusion809/vim/vim.spec?expand=1). I personally find writing spec files significantly more complicated than writing PKGBUILDs, as PKGBUILDs are written more like as if you were writing a shell script to install the software package locally on your machine. The use of macros can make things more complicated to follow for package development newcomers. 
