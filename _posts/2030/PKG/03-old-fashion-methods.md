## Old fashion methods
The old fashion methods of installing programs not packaged for one's distributions include:
* Manual compilation
* Coaxing existing binaries
* Binary tarballs 

. I should mention that if a package is available that, while in the format your distribution's package manager will accept (e.g. .deb for Debian, .rpm for CentOS, Fedora, Mageia, *etc.*), has dependencies not available for your distribution because the package was designed for a distribution, then often it is possible to install the dependencies required that are not provided by your distribution's repositories by downloading manually/apt-pinning the package's dependencies and then, of course, installing them. Sometimes this is not possible due to library inconsistencies but often it is. For example, on Debian 9 I installed RuneScape's NXT Client (originally packaged for Ubuntu 14.04) by adding Ubuntu 14.04's relevant repositories to my /etc/apt/sources.list, along with RuneScape's repository, and apt-pinning appropriately to satisfy the dependencies of the NXT Client that are not provided by Debian 9, then of course installing the NXT Client using APT.

### Manual compilation
When I first wanted programs that were not available for Ubuntu (including newer versions of programs in Ubuntu's repositories) I would download source code tarballs and try to compile the source code within. A lot of the time this would fail at first, even after I ran:

{% include Code/coder.html line1="apt-get build-dep program" %}

for when I wanted a newer version of a packaged program. The reason is likely that different versions have different requirements (including different versions of the dependencies) and that sometimes patching the source code is required for the build to be successful.

Likewise when I wanted a program that had no versions at all packaged for Ubuntu and I installed all the dependencies I could find in the README file of it a lot of the time the build would fail as I was missing development headers, the exact package versions required or there was some need for patching. When different versions of the dependencies were required, or when Ubuntu lacked a dependency and I was forced to build them myself the whole problematic cycle repeated itself. 

This is only an option for open-source programs, as you cannot manually compile source code if you do not have access to it. 

### Coaxing binaries
One method that is useful for closed-source programs that are only packaged as Debian and/or RPM packages and/or other packages is to try to coax binaries (found in said Debian/RPM/other packages) into working on distribution(s) they were not built for. The way one manages this is by:

1. Downloading all dependencies for the package the binary is found in that have not been packaged for one's own distribution. If these dependencies have been packaged for one's own distribution it is usually preferable to install it using one's own distribution's package manager as it will reduce the number of packages you will have to update yourself, manually, when a new update for them comes out. 
2. Extracting the relevant files within (including binaries and libraries).
3. Editing/writing a script to execute the binary with environment variables (like PATH/LD_LIBRARY_PATH) that point to the relevant files that were in these packages (but have been extracted). 

This method is not fool-proof but it is usually rather effective if done right. It was the way I managed to run RuneScape's NXT Client on openSUSE Tumbleweed before a Flatpak for it became available.

### Binary tarballs
This method is straight-forward. Some programs are packaged as binary tarballs, these are fairly self-explanatory. They are tarballs that contain the required files to execute the program on virtually any distribution. They usually provide most, if not all, dependencies for the program that cannot be reasonably expected to be provided by your distribution. Firefox is one program that is packaged by its developers as a binary tarball, which is convenient if you want a newer version of Firefox than that provided by your distribution, or if your distribution is really unusual and does not have Firefox in its repositories (which is something I have never seen before). 
