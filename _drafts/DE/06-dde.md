## Deepin Desktop Environment
{% include Links/image.html image="Deepin-Desktop-Environment-Arch-20160128.png" width="1130px" float="none" description="Deepin Desktop Environment running on Arch Linux" %}

### Backgrounds
The **Deepin Desktop Environment** (**DDE**) is a desktop environment that uses the Qt 5 widget toolkit, although it was once (only a few months ago) based on HTML5 and WebKit with JavaScript extensions. It now also uses the Mutter window manager, which is from GNOME 3. DDE was originally developed for the Chinese Debian (Unstable) and previously Ubuntu-based Linux distribution, deepin. DDE is only available for two Linux distributions that I am aware of &mdash; Arch Linux (thanks to the efforts of Xu Fasheng and Felix Yan) and deepin. I am aware of efforts to port it to Gentoo-based distributions, via the [`gentoo-zh`](https://github.com/gentoo-mirror/gentoo-zh) overlay, but these efforts have since been abandoned.

It is now written in C, C++, CoffeeScript, Go, JavaScript, Objective-C, Python, QML, *etc.* according to the various GitHub repositories of its components. DDE is a DE with limited customizability. Most of the available customizations are done via the control centre program, and pertain to the aesthetics of the DE. Its features include an OS X like dock, a few unique core applications, *etc.* The only one of its core applications I have used enough to review is its terminal emulator, Deepin Terminal, which I must say is my least favourite terminal emulator.

### Components
* **Display server/window system**: X11.
* **File manager**: GNOME Files (Nautilus).
* **Widget toolkit**: Qt 5.
* **Window manager**: Mutter.

Its core applications suite includes a game centre, music player, video player and terminal emulator.

### Obtaining It
It comes pre-installed on deepin, while on Arch Linux (and its derivatives that use similar repositories) running {% include Code/coders.html line1="pacman -S deepin" %} will install just the DDE, while {% include Code/coder.html line1="pacman -S deepin-extra" %} will install its core applications suite.

### Ratings
* **Availability**: 2-3. It is only available from the official repositories of two distributions.
* **Beginner-friendliness**: 8. It is fairly beginner-friendly.
* **Customizability**: 4. Not very customizable, beyond with regard to its default applications and aesthetics.
* **Features**: 4. Not particularly feature-packed.
* <abbr title="My Experience With It">**MEWI**</abbr>: 4. I have some experience with it, but I usually end up abandoning it due to SRU/stability/lack of customizability issues.
* **Stability**: 5. Stability is an issue with DDE, I have found it not uncommon for applications to take >3 times as long to launch under DDE than they would under say GNOME, I have also found it not uncommon for DDE to freeze or for its control center to have bugs.
* **Support**: 2-3. Fairly minimal DIS.
* **System Resource Usage**: 2. It is fairly heavy on SRU, its download size is >100 MB (including core applications) on Arch Linux, while its installed size is >300 MB. Its `ps_mem` table on Arch Linux is {% include Code/gist.html id="794e887916c257f72c67" %}
* **Overall**: 7. I find it an ambitious desktop environment, especially when it was based on HTML5 and WebKit, but ambition and reality have not come together in a nice and consistent way, just yet.

### External Resources
* [Deepin Desktop Environment](https://wiki.archlinux.org/index.php/Deepin_Desktop_Environment) at *The ArchWiki*.
