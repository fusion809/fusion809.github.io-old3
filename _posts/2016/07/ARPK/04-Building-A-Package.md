## Building a Package
After you have written a PKGBUILD you would like to build a package from (beware odds are you will encounter the odd error while doing this, especially if you are new to Arch Linux packaging) run `makepkg` from the directory in which your PKGBUILD is stored. If your package has some build dependencies that you do not have installed you will need to run `makepkg -s` instead, provided these packages are in your presently-enabled (in `/etc/pacman.conf`) list of package repositories. This will, if successful, build a binary package for your current PC architecture in your present working directory. It will be called:

<div class="language-bash highlighter-rouge"><pre class="highlight"><span class="nv">$pkgname</span>-<span class="nv">$pkgver</span>-<span class="nv">$pkgrel</span>-<span class="nv">$ARCH</span>.pkg.tar.xz</pre></div>

where all these variables are as they were defined in the previous section, except `$ARCH` which is your current system's architecture. If the package is architecture-independent `$ARCH` will be replaced with `any`. If your package builds successfully I recommend you run `namcap` on it, to search for some common packaging errors you may have made. This may include missing dependencies, or dependencies included that are not needed, missing license files, *etc.* Beware it is **not** infalliable, sometimes it will miss dependencies and falsely report unneeded dependencies. You can also run `namcap` on your PKGBUILD, to check if it is correctly-written. See [this gist](/aa04e92372414e3a05ddf7020c5d905f/) for an example output of `makepkg` running successfully. `makepkg`, when run, does the following actions (which it tells you about, so you can skip the rest of this section if you want, this is for those that want some details), in order (if I am missing some actions feel free to [email me](mailto:brentonhorne77@gmail.com)):

* It downloads any needed sources, or if the sources are a VCS repository that has already been downloaded, it will update the local copy of this repository.
* It verifies the sources using the checksums provided, and (optionally) the GPG keys provided.
* It runs `prepare()` on the sources.
* It runs `pkgver()` if provided. Then it updates the `pkgver` field in the PKGBUILD, accordingly.
* It removes any existing `$pkgdir` directory(s).
* It runs `build()` if provided.
* For each package specified in the PKGBUILD it:
  * Enters the fakeroot environment. This is designed as a safety measure against potential security threads in the `package()` function.
  * It runs `package()` and variations thereof (like `package_<PKG1>`, `package_<PKG2>`, `package_<PKG3>`, *etc.*).
  * It 'tidies' the install, which means:
    * It removes libtool files, static library files and other unwanted files
    * Compresses man and info pages
    * Removes unneeded symbols and libraries from the binaries and libraries.
  * It checks for packaging issues, like `$srcdir` and `$pkgdir` being mentioned in files in the `$pkgdir` directory. If there is one, you will be left to fix it yourself. NPM packages with several dependencies are bad for this, see quite often the `package.json` of these dependencies will have `$srcdir` specified in them.
  * Generates the `.MTREE`, `.BUILDINFO` and `.PKGINFO` files, and adds any install file specified.
  * Compresses the package using tar and xzip.
  * Exits the fakeroot environment.
