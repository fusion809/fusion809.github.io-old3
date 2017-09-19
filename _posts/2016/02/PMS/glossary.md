## Glossary

### Debian Packages
**Debian packages** are software packages with the file extension `.deb`. They are archives formed with the `ar` utility, inside them are three files:

* tar archive called `data`, that is optionally bz2, gz, lzma or xz-compressed. It contains the installed files.
* tar archive called `control`, that is optionally compressed with any of the aforementioned algorithms and it contains package metadata.
* `debian-binary` text file that contains the deb format number, the latest is presently 2.0.

They are probably the single most popular type of Linux binary package out there, as they are used by three of the most popular Linux distributions, according to *DistroWatch* (Debian, Linux Mint and Ubuntu).

### dpkg
[**dpkg**](https://wiki.debian.org/Teams/Dpkg) is a low-level package management tool that installs, removes, upgrades and provides information about Debian packages. dpkg was first developed by Ian Murdock in 1994 and is written in C, C++ and Perl.

### RPM Packages
The **RPM Packages** are the binary package format that the RPM package manager works with. They have the `.rpm` file extension. They are archive files, you can extract their contents with the `bsdtar -xf $package.rpm` command, where `$package` is the package's name, without the `.rpm` file extension. There is also a source code version of the RPM Package format, with the file extension `.src.rpm`.

### RPM Package Manager
The [**RPM Package Manager**](http://rpm.org/)[^1] is a low-level package management tool that installs, removes, upgrades and provides information about RPM packages. Its initial release was in 1997.
