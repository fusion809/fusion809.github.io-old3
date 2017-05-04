## KDE
{% include Links/image.html image="Arch-Linux-Plasma-5.5.3-El-General-maia-icons.png" width="1130px" float="none" description="KDE Plasma 5.5.3 with El General shell theme and Maia icon theme" %}

### Background
[**KDE**](https://www.kde.org/) is a Qt-based desktop environment that is one of the most popular desktop environments available for Linux. KDE is both the name of the desktop environment itself and the international FOSS community behind its development and the development of its associated application software. KDE, the project, was first founded in 1996 by Matthias Ettrich, who at the time was a German university student. In July 1998 the first release of KDE, the desktop environment, was made which was dubbed, "K Desktop Environment 1". Later releases were dubbed K Desktop Environment 2 and 3, made in October 2000 and April 2002, respectively and KDE Plasma 4 and 5 released in January 2008 and July 2014, respectively. The numbers given to each KDE release refers to the version of Qt used, for example, K Desktop Environment 1 used Qt 1, while KDE Plasma 4 used Qt 4.

The name KDE is a play on the acronym, CDE, which was used by the then popular proprietary Unix desktop environment, the Common Desktop Environment. CDE was based on the then proprietary widget toolkit, Motif, so as KDE developers intended to create an entirely FOS desktop environment they chose to use the free (or rather dual-licensed under the free QPL license and its own proprietary license) widget toolkit, Qt. KDE was originally abbreviated from **Kool Desktop Environment**, although this meaning was later dropped in favour of **K Desktop Environment** until all use of KDE as an acronym was abandoned.

{% include Links/image.html image="KDE-Plasma-5.5.4-Settings.png" width="1130px" float="none" description="KDE Plasma 5.5.4 System Settings and showing the interface for editing the plasma panel, the mouse pointer is down at the Plasma 5 icon that opens this interface" %}
{% include Links/image.html image="TU-plasma5.png" width="54px" float="right" description="Plasma 5 icon" %}
KDE is extensively customizable via the system settings interface, the plasma panel is also extensively-customizable via right-clicking it, while widgets can be moved or removed by clicking the Plasma 5 icon in the bottom-right corner in the screenshot shown above.

KDE's feature set is the greatest of any desktop environment I am aware of. Even its system settings has a built-in installer for themes, panel widgets, wallpapers, *etc.*

KDE is written in C++ and QML, with QML being the user-interface markup language of the Qt toolkit.

### Components
* **Display server/window system**: X11, Wayland (experimental, as of Plasma 5.4).
* **File manager**: [Dolphin](https://www.kde.org/applications/system/dolphin/).
* **Widget toolkit**: Qt.
* **Window manager**: KWin.

KDE has its own core application suite, which includes:

* [**Ark**](https://www.kde.org/applications/utilities/ark/), an archiving tool.
* [**Kate**](https://www.kde.org/applications/utilities/kate/), a feature-packed text editor.
* [**KGet**](https://www.kde.org/applications/internet/kget/), a HTTP/FTP download manager.
* [**Konqueror**](https://www.kde.org/applications/internet/konqueror/), a file manager and web browser.
* [**Konsole**](https://www.kde.org/applications/system/konsole/), a terminal emulator. I would say it is the most customizable terminal emulator available, except perhaps for Terminator (which does not belong to any core application suite).
* [**Konversation**](https://www.kde.org/applications/internet/konversation/), an IRC client.
* [**KSnapshot**](https://www.kde.org/applications/graphics/ksnapshot/), a screenshooting program.
* [**KTorrent**](https://www.kde.org/applications/internet/ktorrent/), a BitTorrent client.
* [**Yakuake**](https://www.kde.org/applications/system/yakuake/), a drop-down terminal. I previously was not one for drop-down terminals but I have been using it recently and rather like it.

and countless others.

### Obtaining It
* {% include Search/debian.md task="kde-desktop" %}
* {% include Search/arch.md package="plasma-meta" %}
* {% include Search/ubuntu.md package="kubuntu-desktop" %}
* {% include Search/gentoo.md package="kde-plasma/plasma-meta" %}
* {% include Search/centos.md category="kde-desktop" %}
* {% include Search/fedora.md category="kde-desktop" %}
* {% include Search/opensuse.md package="kde-desktop" %}
* {% include Search/sabayon.md package="kde-plasma/plasma-meta" %}

### Ratings
* **Availability**: 9. Official flavours, or spins, of the more popular Linux distributions (including Debian, Fedora, Mageia, Manjaro, openSUSE and Sabayon) with KDE preinstalled are common.
* **Beginner-friendliness**: 9. Very beginner-friendly.
* **Customizability**: 9. Very customizable, seeing how all configuration is done graphically.
* **Features**: 9. Very feature-packed.
* <abbr title="My Experience With It">**MEWI**</abbr>: 9. I have a fair amount of experience with it. In fact, during much of the writing of this post I have been using KDE Plasma 5.
* **Stability**: 5-7. KDE Plasma 5.3 I found unstable when run on Sabayon Linux (I do not believe I tried its predecessors 5.0, 5.1 and 5.2), Plasma 5.4 was more stable on Sabayon and other distributions I tried and 5.5 has been the most stable yet. When run on Wayland, however, KDE Plasma 5 (the only version that presently supports Wayland) is incredibly unstable with crashes frequent occurrences. KDE Plasma 4, however, is very stable in my experience (in fact it was so much more stable than its successor that many distributions refused to let go of Plasma 4 until Plasma 5 become sufficiently stable, examples of such distributions include Arch, Sabayon and Ubuntu), although my experience with it is significantly less than my experience with its successor, Plasma 5.
* **Support**: 6? It has its own forums and family of Wikis, although my experience with either is in its infancy.
* **System resource usage**: 2. Very heavy on RAM and installed size (on Arch this size is ~ 800 MB). Here is my `ps_mem` table: {% include Code/gist.html id="434a4aa6655f51929317" %}
* **Overall**: 9.

### Useful Resources
* [KDE](https://wiki.archlinux.org/index.php/KDE) at *The ArchWiki*
* [KDE](https://wiki.gentoo.org/wiki/KDE) at *Gentoo Wiki*
* [KDE](https://en.wikipedia.org/wiki/KDE) at *The English Wikipedia*
* [KDE Plasma 5](https://en.wikipedia.org/wiki/KDE_Plasma 5) at *The English Wikipedia*
