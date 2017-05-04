## Eclipse
{% include Links/image.html image="Eclipse/Eclipse-4.5.1.png" width="1130px" float="none" description="Eclipse 4.5.1 running under Manjaro" %}

### Background
{% include_relative links.md program="Eclipse" forum="https://www.eclipse.org/forums/" irc="eclipse" link="http://eclipse.org/eclipse" package="dev-util/eclipse-sdk" wiki="http://wiki.eclipse.org/Main_Page" wp="Eclipse_(software)" gw="Eclipse" aw="Eclipse" pacman="extra/x86_64/eclipse" %} is an free and open-source Integrated Development Environment (IDE) written in Java, that is primarily used for programming in C, C++, Java and PHP, although it is possible to program in other languages (such as Lua, Perl and Python) using it too. These other languages usually require the installation of additional plugins, such as {% include ArchLinux/aur.md package="pydev" program="PyDev" %} for Python. It features in-built support for several compilers and interpreters.

### Customizability
I do not have enough experience with Eclipse to make any comment on its customizability, but I do know that extra functionality is usually added using plugins. Many of these plugins are also in the Arch User Repository, but not in any official or unofficial Portage overlays.

### Features
Eclipse features a text editor with syntax-highlighting, debugging and auto-complete support for most programming languages, in-built support for several compilers and interpreters, it also supports the use of project views, *etc.*

### Obtaining It

#### Manjaro
Eclipse comes in several different versions. To install what is common to every version available in the Manjaro repositories one would simply issue the command:
{% include Code/coder.html line1="pacman -S eclipse-common" %}
while, if you would like to list all Eclipse-related programs in the AUR and pacman repositories (most of which will be plugins) run:
{% include Code/codeu.html line1="yaourt -Ss eclipse" %}

#### Sabayon
On Sabayon, Eclipse should not be installed via the default package managers: Entropy and Portage, due to the fact that it is not in the Entropy repositories and the versions found in the official and unofficial Portage overlays are fairly out-of-date and present security risks. Instead I would recommend you go to the download page, https://eclipse.org/downloads/, find the version you want (which will depend on the specifics of the programming you would like to perform) and download the respective tarball. This tarball should contain the executable script for launching the program. Alternatively, you can install it using the new installer, assuming you have all the dependencies already installed. I cannot find a comprehensive list of dependencies for Eclipse, but based on [this](http://gpo.zugaina.org/AJAX/Ebuild/13519201/View) ebuild I would hazard a guess that they are:

~~~ bash
>=virtual/jdk-1.6
x11-libs/gtk+:2
~~~

~~~ bash
# Set this mirror variable, according to whichever mirror is closest and best for you
MIRROR=http://mirror.internode.on.net
wget -cqO- $MIRROR/pub/eclipse/oomph/epp/mars/R1a/eclipse-inst-linux64.tar.gz | tar -xz
cd eclipse-installer
./eclipse-inst
~~~

**Update**: Soon after I posted this, Francesco Ferro added [`dev-util/eclipse-sdk-bin`](https://packages.sabayon.org/quicksearch?q=dev-util%2Feclipse-sdk-bin&x=0&y=0) (version 4.4.2, not quite the latest but it is fairly recent) to the [`sabayon`](https://github.com/Sabayon/for-gentoo/commit/38234bc122094ca4cc818d92e2e42bd32fe749d9) overlay and then to the sabayon-limbo repository. To install it run:
{% include Code/coder.html line1="equo i -av dev-util/eclipse-sdk-bin" %}

### Advantages (Pros)
* Written in Java, so it is incredibly cross-platform. Any Java-capable platform should be able to run Eclipse without a problem.
* Easy to install, using the new installer.

### Disadvantages (Cons)
* Cannot be installed using Entropy.
* Fairly heavy on system resource usage.
* Slow to boot.
* Extra plugins are required in order to program in other programming languages.

### Summary
{% include_relative 08a-eclipse-summary.html %}
