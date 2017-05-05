### Debian Packages
The **Debian package format** (file extension: `.deb`) was one of the first Linux package formats developed. It was first developed by Ian Murdock and other members of the Debian development team. The package manager that was originally developed to work with Debian packages (installing, uninstalling, upgrading, *etc.* these packages) was called dpkg (invoked by the [`dpkg`](https://fusion809.github.io/man/dpkg.1.html) command), while APT, aptitude and Synaptic are front-ends that perform repository management, dependency resolution, *etc.* and then use dpkg to perform the actual installation of Debian packages. Debian packages are built based on the contents of several different files in a directory (with its own set file structure, including subdirectories and alike) entitled `debian`. Debian packages are `ar` archives, that is archives generated with the `ar` Unix utility. They are built using the `debuild` or `dpkg-buildpackage` commands that are provided by the `devscripts` package, which is separate from the package that provides the `dpkg` command.

#### Package Contents
As previously mentioned, Debian packages are `ar` archives and they have the following three files inside them:

~~~
debian-binary
control.tar.xx
data.tar.xx
~~~

where `.xx` denotes the compression file extension of the containing files. Most Debian packages use gz-compression for its control and data tar archives, so in this case `.xx` is replaced with `.gz`. Some Debian packages have xz-compressed control and data tar archives inside them. The `debian-binary` file is a plain text file containing the standard number of the Debian package (e.g., the latest is 3.0). The `control.tar.xx` archive contains the package's metadata, while the `data.tar.xx` archive contains the package's installed files.

#### Build Directory Structure
The `debian` directory used to build Debian packages, has the structure:

~~~
debian/
  - changelog
  - compat
  - control
  - copyright
  - rules
  - source/
    - format
~~~

The `changelog` and `copyright` files have pretty self-explanatory contents, so I will not bother describing their contents. The `compat` file has the number nine (9) in it, because allegedly it is a "magic number". The `control`
file contains the package metadata, like its description, name, version, dependencies, *etc.* The `rules` file contains the package build instructions. The `format` file contains the standard of the Debian package being described, for example, most packages at the moment will be using the 3.0 (quilt) standard.
