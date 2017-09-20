## APT
The [**Advanced Packaging Tool**](https://wiki.debian.org/Apt) (**APT**) is the default front-end for the dpkg package manager used by Debian-based systems. See what APT does is it performs dependency resolution, repository management, and assorted other higher-level functions while dpkg is what actually installs and removes packages. So in essence what APT does for dpkg is it gives it some intelligence; package management with dpkg by itself is not an experience I would like to have as you would have to do just about everything yourself. It is the eldest package manager mentioned in this review and was first developed in 1998. APT is written in C++ and Bash script.

### Beginner-Friendliness
APT was the first Linux package manager I ever used and I started using it on Ubuntu, so I may be biased towards saying it is beginner-friendly, although I will admit I think there are more beginner-friendly package managers out there, like [DNF](#dnf), [yum](#yum) and [zypper](#zypp). See APT has a somewhat confusing syntax, as you do not just run {% include Code/coders.html line1="apt [<i>action</i>] [option(s)] [<b>target</b>(<b>s</b>)]" %} rather there are five distinct commands for APT, each with their own options, actions and permissible targets: [`add-apt-repository`](https://fusion809.github.io/man/add-apt-repository.1.html), [`apt`](https://fusion809.github.io/man/apt.8.html), [`apt-cache`](https://fusion809.github.io/man/apt-cache.8.html), [`apt-config`](https://fusion809.github.io/man/apt-config.8.html) and [`apt-get`](https://fusion809.github.io/man/apt-get.8.html). `apt-get` is used to install, remove and upgrade packages and update local index files for enabled repositories. `apt-cache` is for searching and dealing with the cache and metadata in it. `add-apt-repository` is used for managing repositories, while `apt-config` is for editing configuration files from the command-line. `apt` itself, on the other hand, seems to be capable of performing select actions from `apt-cache`, `apt-get` and `apt-config`.

Despite this APT has several more beginner-friendly front-ends such as the ncurses-based textual program, aptitude, that is run from within a terminal and the GTK-based graphical front-end Synaptic. Here is the [`aptitude`](https://fusion809.github.io/man/aptitude.8.html) man page in HTML. My experience with both front-ends is fairly limited as I was willing to just stick to APT and the Ubuntu Software Center (another graphical front-end for APT, as its name suggests it is used by Ubuntu and select derivatives thereof) during my three years using Ubuntu as my distro. Overall I would rate APT as **5-7/10** for **beginner-friendliness** as while its syntax can get confusing when you are just beginning to use it, there are two perfectly adequate, more beginner-friendly front-ends for it available.

### Customizability
APT, being a binary package manager, has limited customizability when it comes to the binary packages it installs. By this I mean these binary packages have already been compiled so it is impossible for users to specify desired features for the package to have. There is one way one can customize installed packages that I know of: by downloading the corresponding source code package for each installed package one wishes to customize, editing the files used to build the package and finally building and installing the package. A [guide](https://wiki.debian.org/BuildingTutorial) on how to do this can be found at the *Debian Wiki*. It essentially consists of running {% include Code/codeus-rc.html line1="apt-get source $package" %} changing into the package's directory, modifying the required files, getting the build dependencies with {% include Code/coders-rc.html line1="apt-get build-dep $package" %} then building the package with {% include Code/codeus.html line1="debuild -b -uc -us" %} and finally installing it with {% include Code/coders.html line1="dpkg -i ../$package-$version.deb" %} The most important file for one to customize, in terms of changing the features the package is built with, is the `rules` file in the `debian/` folder.

### Development
Debian package development (an introduction to Debian packaging can be found [here](https://wiki.debian.org/IntroDebianPackaging) at the *Debian Wiki*) is more complicated than developing Arch and RPM packages and writing ebuilds for Gentoo packages, in my opinion. See first of all, Debian packages are not built based on the contents of a single file plus files referred to by said single file, as is the case for ebuilds and PKGBUILDs, rather Debian packages are built based on the contents of an entire directory. In the top-level of the directory there is the package's upstream source along with a `debian/` subfolder, which contains several components that are specific to the Debian package being built. Its structure is as follows:

~~~
- debian/
-- changelog
-- compat
-- control
-- copyright
-- rules
-- source/
--- format
~~~

the contents of the `changelog` and `copyright` files I think are pretty obvious, so I will skip them and just mention what is in the `compat`, `control` and `rules` files. The `compat` file is a file that contains nothing but the number nine (9) in it, as it is supposedly a "magic number". The `control` file contains most of the package's metadata like its description, name, version, dependencies, *etc.* while the `rules` file contains the build instructions for the `debuild` command to follow, in order to build the Debian binary package. Frequently, a single upstream package will be split up into over three different Debian packages, each with different suffixes (most commonly `debug`, `dev` and `doc`) and/or prefixes (most commonly `lib`). This package splitting, to my understanding, is designed to give users greater freedom over their installed packages. If they want debugging symbols, development features, documentation or the package's installed libraries they can install them separately, while if they just want basic functionality for the package in question they can install the base package and not install these extras, hence saving space.

### Features
APT, by default, installs binary packages, with the file extension `.deb`, although a RPM rewrite for APT exists called APT-RPM that uses binary packages with the `.rpm` file extension. APT-RPM is only used by one Linux distribution I have personal experience with, PCLinuxOS, and I have personally noticed no syntactic, performance or other difference between it and APT, based on my limited experience with it. APT can also be used to build and install software from source code packages (which are provided by the APT src repositories). Its enabled repositories are listed in `/etc/apt/sources.list`, here is an example one taken from my Debian 8.3 VM:

~~~
deb http://debian.mirror.digitalpacific.com.au/debian/ jessie main
deb-src http://debian.mirror.digitalpacific.com.au/debian/ jessie main

deb http://security.debian.org/ jessie/updates main
deb-src http://security.debian.org/ jessie/updates main

# jessie-updates, previously known as 'volatile'
deb http://debian.mirror.digitalpacific.com.au/debian/ jessie-updates main
deb-src http://debian.mirror.digitalpacific.com.au/debian/ jessie-updates main
~~~

. One disadvantage of APT, as opposed to DNF, yum or ZYpp, is that it cannot be used to download a package and install it from a specified URL. Instead, if one wishes to install a `.deb` package from a URL one has to run something like:

{% include Code/codeu.html line1="wget $URL" line2="sudo dpkg -i $package.deb" line3="sudo apt-get -f install" %}

where `$URL` is the URL you wish to install the Debian package from, while `$package` is the package's name, without its `.deb` file extension. The third of these lines installs any missing dependencies that are available from enabled repositories (listed in `/etc/apt/sources.list`) and then will install the `$package.deb` file, if line 2 failed to, due to missing dependencies. I have heard that later releases of APT may be able to install local packages and do dependency management without `dpkg` having to be explicitly called. In other words, these later releases of APT may be able to install a package from URL with just two commands, namely:

{% include Code/codeu.html line1="wget $URL" line2="sudo apt-get install $package.deb" %}

. One feature of APT that can be handy is that it supports the use of wildcards, e.g. {% include Code/coders.html line1="apt-get install lua5.2*" %} should install all packages with the `lua5.2` prefix. It supports the installation of package groups too. To list available package groups I suggest you install the `tasksel` if it is not presently installed (via issuing {% include Code/coders-rb.html line1="apt-get install tasksel" %} and run {% include Code/codeus-fs.html line1="tasksel &#8208;&#8208;list-tasks" %} Then to install the package group you run {% include Code/coders-rc.html line1="apt-get install $group^" %} where `$group` is the package group in question. One-click installs are supported by APT, on Ubuntu at least.

### Speed
Running {% include Code/coders.html line1="time apt-get install -y &#8208;&#8208;reinstall vim" %} gives:

~~~
Reading package lists... Done
Building dependency tree
Reading state information... Done
0 upgraded, 0 newly installed, 1 reinstalled, 0 to remove and 0 not upgraded.
Need to get 0 B/953 kB of archives.
After this operation, 0 B of additional disk space will be used.
Can't set locale; make sure $LC_* and $LANG are correct!
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
        LANGUAGE = "en_AU:en",
        LC_ALL = (unset),
        LANG = "en_AU.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_MESSAGES to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
(Reading database ... 229043 files and directories currently installed.)
Preparing to unpack .../vim_2%3a7.4.488-7_amd64.deb ...
Unpacking vim (2:7.4.488-7) over (2:7.4.488-7) ...
Setting up vim (2:7.4.488-7) ...

real    0m2.783s
user    0m1.076s
sys     0m0.392s
~~~

so it took **2.783s** to reinstall Vim. I think this figure is fair enough, as it is the third fastest package manager reviewed in this comparison.

{% include_relative APT/table-1-basic-usage-examples.html %}
