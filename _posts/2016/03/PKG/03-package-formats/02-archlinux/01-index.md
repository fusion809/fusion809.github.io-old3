### Arch Linux Packages
**Arch Linux packages** are xz-compressed tar archives that are built and installed using commands provided by the `pacman` package on Arch Linux. ALPs are the package format used by Arch Linux derivatives (like Manjaro Linux) along with the "independent" distributions, Frugalware Linux and KaOS, which also use the pacman package manager, so this information should be applicable to packaging on these distributions too.

#### ALP Contents
ALPs have the following contents:

{% include_relative 03-package-formats/02-archlinux/02-general-contents.md %}

where `$INSTALLED_FILES` are, of course, the installed files of the package with its respective file structure. For example, for the `broadcom-wl` package the `$INSTALLED_FILES` have the directory structure:

{% include_relative 03-package-formats/02-archlinux/03-broadcom-wl-contents.md %}

The package metadata (which is used by pacman when it installs new packages to check for file conflicts and such) is stored in the four hidden files (that is, those with `.` in their filename) in the package's top-level directory.

#### PKGBUILD Structure
ALPs are built from PKGBUILDs using the [`makepkg`](https://fusion809.github.io/man/makepkg.8.html) command that comes bundled with the pacman package manager. They are the easiest packages to build, in my opinion. PKGBUILDs have the following general format (for more details see the [PKGBUILD(5)](https://fusion809.github.io/man/PKGBUILD.5.html) man page):

{% include_relative 03-package-formats/02-archlinux/04-general-format.md %}

the `sha256sums` can be replaced with `sha512sums` and sometimes GPG signatures are used also. For example, the Linux kernel PKGBUILD, in the core pacman repository, uses GPG and sha256sums to check package integrity and validity. The variable definition lines (that is, the `pkgname` line through to `install` line) provide mostly the package's metadata and security checks (as well as variables that can be used in the following functions), while the `prepare()`, `build()` and `package()` functions are responsible for the actual building of the package. The `install` line defines the `.install` file that contains pre-, peri- and post-install checks and functions that need to be executed for the package. Here is an example PKGBUILD I have used to build gVim 7.4.1525:

{% include_relative 03-package-formats/02-archlinux/05-gvim.md %}

`prepare()` is used to *prepare* the source, which means if the source is compressed (like a gz-compressed tar archive) the `prepare()` function will exact its contents so that they are available for the `build()` and `package()` functions. `build()` is used to build, or compile, the source, that is if this needs to be done (for example, some PKGBUILDs actually build ALPs from Debian or RPM packages, so no source code compiling is required). `package()` is what builds a package from either the compiled source (that is, the source after the `build()` function is run) or the prepared pre-compiled sources (that is, the contents of Debian/RPM binaries).

The `package()` function is essentially where the objective of the game is to move all the files you wish to be in the end package from the products (whether it be compiled source code, or unpacked Debian package contents) of the `build()` function into the `$pkgdir` directory. The `$pkgdir` directory is meant to have the same internal file system structure as where the package will place its installed files, if installed on one's file system. For example, GTK themes are usually installed to `/usr/share/themes` so this is an example `package()` function for such cases (this one is specifically taken from the [`osx-el-capitan-theme`](https://build.opensuse.org/package/view_file/home:fusion809:arch_extra/osx-el-capitan-theme/PKGBUILD?expand=1) PKGBUILD):

~~~ bash
package() {
  mkdir -p "$pkgdir/usr/share/themes/"
  cp -a "$srcdir/${_pkgname}-${pkgver}/OS X El Capitan" "$pkgdir/usr/share/themes/"
}
~~~

see the package's contents are moved to `${pkgdir}/usr/share/themes/OS X El Capitan`.

#### Building ALPs
To build an ALP you run:

{% include Code/codeu.html line1="makepkg" %}

from within the same directory, as the PKGBUILD you intend to build is located. You may not have the package's build dependencies pre-installed so this command may return an error stating that you have missing build dependencies. To fix this (assuming all the dependencies are in the presently-enabled pacman repositories) by installing all required build dependencies prior to the build, run:

{% include Code/codeu.html line1="makepkg -s" %}
