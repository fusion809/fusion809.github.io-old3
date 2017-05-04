## Glossary

### Acronyms
* **CE**: **Community Edition**. Some programs have both community (usually indicated they are licensed under a GPL-compatible FOSS license) and proprietary (sometimes alternatively named like Ultimate Edition in the case of IntelliJ IDEA) editions.

### Command-Line Interface
A [**command-line interface**](https://en.wikipedia.org/wiki/Command-line_interface) (**CLI**) or **command-line interpreter** is a type of user interface that allows users to interact with their computer by issuing a series of commands. On &#42;nix systems the most common type of CLI are [Unix shells](#unix-shells) such as Bash.

### Cross-distribution Packaging Formats
**Cross-distribution packaging formats** (**CDPFs**), as their title suggests, are packaging formats designed to run on a wide variety of different Linux distributions (note, however, that I did **not** say *all* Linux distributions &mdash; there are usually limitations to which distributions they support). This is in contrast to distribution-specific packaging formats (DSPFs) like Debian packages (file extension: `.deb`) and RPM packages (<abbr title="File Extension">FE</abbr>: `.rpm`), which only work on select few Linux distributions. Notable CDPFs include (each are hyperlinked to their respective section in this glossary):

* [**AppImages**](#appimage)
* [**Flatpaks**](#flatpak)
* [**Snaps**](#snap)

#### AppImage
An [**AppImage**](http://appimage.org/) (previously known as **klik**; <abbr title="File Extension">FE</abbr>: `.AppImage`) is a type of CDPF that unlike other CDPFs do not need to be &ldquo;installed&rdquo;, rather they merely need to be made executable (with {% include Code/codeus-rb.html line1="chmod +x &lt;APPIMAGE&gt;" %} and run with {% include Code/codeus-fs.html line1="./&lt;APPIMAGE&gt;" %} AppImages contain all the required libraries and alike needed to run the program they provide, so they are completely distribution-agnostic. They are my personal favourite CDPF, although they are a pain to build from source code, rather they are usually built from a pre-built binary package (like a Debian or RPM binary). The largest collection of AppImages are provided by Simon Peter ([probonopd](https://github.com/probonopd) as he is known on GitHub), the same person that created the AppImage format, you can search these AppImages [here](https://bintray.com/probono/AppImages/) at Bintray. AppImages are built using [AppImageKit](https://github.com/probonopd/AppImageKit) which is written mostly in C, Python and Shell.

#### Flatpak
[**Flatpak**](http://flatpak.org/) (formerly known as **xdg-app**; <abbr title="File Extension">FE</abbr>: `.flatpak`) is a CDPF that has been developed by its own community and runs apps in their own sandbox environment. While it is not *officially* tied to Fedora or GNOME (according to its own [FAQ](http://flatpak.org/faq.html) page), it is better supported by Fedora and GNOME's Builder IDE has some rudimentary support for Flatpak packaging. Flatpaks are installed using a command-line program invoked by the command `flatpak`. This program is written predominantly in C (source: [flatpak/flatpak](https://github.com/flatpak/flatpak) GitHub repository) and is dependent on systemd (hence it will not work on distributions without systemd, such as Gentoo Linux or Slackware).

#### Snap
[**Snap**](http://snapcraft.io/) (<abbr title="File Extension">FE</abbr>: `.snap`) is a CDPF being developed by Canonical Ltd, the same company that sponsors the development of the Ubuntu distribution. Needless to say they are easiest to install on Ubuntu, at least, in my opinion. They, unlike AppImages, are &ldquo;installed&rdquo; globally, specifically to the `/snap` directory on one's file-system. Snaps are managed by a snap daemon (or snapd for short) that is written in Google's Go programming language. It too is dependent on systemd, from what I can tell.

### Fork
In the field of software development a [**fork**](https://en.wikipedia.org/wiki/Fork_(software_development)) is when software developers take a copy of a project's source code and start working on it independently of its previous developers. Proprietary software licenses do not usually allow for forks except with the expressed permission of the software's previous developer(s). In the FOSS community forks are common due to the fact that FOSS licenses permit the creation of forks without the previous developer(s)'s permission.

### Graphical User Interface
A [**graphical user interface**](https://en.wikipedia.org/wiki/Graphical_user_interface) (**GUI**) is a type of interface that allows users to interact with their computer using graphical icons and visual indicators. This is as opposed to command-line interfaces (CLIs) and textual user interfaces (TUIs), in which users interact with the computer by issuing lines of commands or by writing textual responses to prompts. The most notable type of GUI found on many &#42;nix systems is that of a desktop environment like Cinnamon, GNOME, KDE, LXDE, MATE, Xfce, *etc.*

### Integrated Development Environment
An {% include Links/wpb.md name="Integrated Development Environment" %} (**IDE**) is a program that provides users, supposedly comprehensive, facilities for software development. I used the word "<i>supposedly</i>", to draw attention to the fact that the definition of comprehensive does vary quite substantially from IDE to IDE. IDEs are almost universally also [text editors](#text-editor), and it is quite often difficult to distinguish the more feature-packed text editors from IDEs.

### IDE Features
IDEs possess several features that are supposed to distinguish them from standard TEs, these features include:

* **In-built implementation support**: in other words, the ability to implement (compile or interpret, depending on the programming language) the files being edited or created in the IDE.
* **Project Views**: this is my way of saying that usually in IDEs you can navigate the contents of a project folder, editing each file therein without having to open up a new IDE window.

### Modes of Communicating with Open-Source Communities
I thought I would provide a brief overview of the most popular ways of communicating with the FOSS communities that develop the various editors mentioned in this post. My personal favourite way of communicating with them is via [Gitter](http://blog.gitter.im/about/), second favourite is [GitHub issues](https://guides.github.com/features/issues/), third favourite is by forums (like Atom's [discuss.atom.io](https://discuss.atom.io), fourth favourite is via [IRC channels](http://www.irchelp.org/), fifth is via Bugzilla-style bug trackers and then after that comes mailing lists and even less favourable modes of communication. Gitter is my favourite, as it is real-time communication, just like in IRC, but unlike IRC Gitter logs past messages, so you do not miss anything that was said when you were not online. Its only real disadvantage, in my opinion, is that it is not open-source, although it is a free service. GitHub issues and Bugzillas are only useful when discussing bugs or feature requests, so there is a clear limitation there. Forums, in my experience, are amongst the slowest modes of communication between community members, as are mailing lists. I dislike mailing lists because depending on their traffic they can get irritating in that you get emails from everyone in the list and a lot of the time the topics discussed will not be of interest to you. 

### Text Editor
A {% include Links/wpb.md name="Text editor" %} (**TE**) is any program that can be used to edit text files, they are particularly invaluable to computer programmers because they can be used to edit software source code or document markup.

### Unix Shell
A type of **command-line interpreter**, that takes commands written in their own type of command language (known as shell script, which is specific, its dialect, to the particular variety of Unix shell being used) and converts them into actions performed by the shell (such as moving, renaming, copying, deleting or editing files, usually with the help of command-line programs such as the GNU Coreutils, along with several other actions). As the title &ldquo;Unix shell&rdquo; suggests, they are designed specifically for &#42;nix systems like Linux. Examples include Bash (Bourne Again Shell), Csh (short for C Shell), Tcsh (TENEX C Shell) and Zsh.

### Wine
[**Wine**](http://www.winehq.org/) (which is abbreviated from the recursive acronym, **Wine Is Not an Emulator**), is a free and open-source compatibility layer application that allows users to run Windows applications on &#42;nix systems such as Linux. Not all Windows applications can be run in Wine (I would argue that most cannot, in fact), but some can.
