## Eclipse
{% include Links/image.html image="Eclipse/Eclipse-4.6.0-Ubuntu-16.04.png" width="1130px" float="none" description="Eclipse 4.6.0 running under Ubuntu 16.04" %}

### Background
{% include Infoboxes/editor.html logo="eclipse.png" language="Java." date="November 2001." editor="Eclipse" focus="General-purpose IDE." developers="Eclipse Foundation." license="<a href='https://www.eclipse.org/org/documents/epl-v10.php' link='_blank'>Eclipse Public License</a>." %}
[**Eclipse**](http://eclipse.org/eclipse) is a free and open-source Integrated Development Environment (IDE) written in Java, that is primarily used for programming in C, C++, Java and PHP, although it is possible to program in other languages (such as D, Lua, Perl and Python) using it too. These other languages usually require the installation of additional plugins, such as [PyDev](http://www.pydev.org/) for Python. It features in-built support for several compilers and interpreters and has autocomplete/linter integration.

{% include Layouts/clear.html %}<br/>

### Customizability
I do not have enough experience with Eclipse to make any comment on its customizability, but I do know that extra functionality is usually added using plugins.

### Features
Eclipse features a text editor with syntax-highlighting, debugging, linting and auto-complete support for most programming languages, in-built support for several compilers and interpreters, it also supports the use of project views, *etc.*

### Obtaining It
It is available from the official repositories of many Linux distributions, although some distributions hold outdated versions of Eclipse in their official repositories. For example, Ubuntu 16.04 LTS holds Eclipse 3.8.1 in its official repositories, even though the latest version of Eclipse as of 29 August 2016 is 4.6.0. Likewise Debian (stable) and all other branches (such as unstable and testing) have, at latest, the 3.8.1 version of Eclipse. While Fedora 24 has [4.6.0](http://koji.fedoraproject.org/koji/buildinfo?buildID=780300) in its official repositories. Not surprisingly Arch Linux and Manjaro Linux have Eclipse 4.6.0 in their official repositories. Neither Gentoo nor Sabayon have an Eclipse binary package in their official repositories. Although the unofficial [`necromancy-overlay`](https://github.com/necrose99/necromancy-overlay/tree/master/dev-util/eclipse-cpp-bin) overlay provides an up-to-date build of Eclipse. Eclipse is not present in the official repositories of openSUSE, although the [`eclipse-classic`](https://build.opensuse.org/package/show?project=home%3Amarec2000&package=eclipse-classic) package is present in the [home:marec2000](https://build.opensuse.org/project/show/home:marec2000) repository.

I have created a 64-bit cross-distribution [AppImage](https://bintray.com/fusion809/AppImages/eclipse-cpp#files) for Eclipse 4.6.0 (which is a 185.5 MB download), if anyone is interested in trying it out. There are also cross-distribution binary tarball releases of Eclipse that can be downloaded, extracted and the binary file (entitled `eclipse`) inside executed, without need for the program to be installed.

### Advantages (Pros)
* Written in Java, so it is incredibly cross-platform. Any Java-capable platform should be able to run Eclipse without a problem.
* Has a cross-distribution 64-bit AppImage.
* Easy to install, using the new installer.
* Fairly intuitive to use.

### Disadvantages (Cons)
* Most distributions either do not have it in their official repositories or keep fairly old versions in their official repositories.
* Fairly heavy on system resource usage.
* Slow to boot.
* Extra plugins are required in order to program in other programming languages.

### Summary
{% include_relative 10a-eclipse-summary.html %}
