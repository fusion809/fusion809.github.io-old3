## Cinnamon
{% include Links/image.html image="operating-systems/Linux-Mint-17.3.png" width="1130px" float="none" description="Cinnamon running on Linux Mint 17.3" %}

### Background
[**Cinnamon**](http://cinnamon.linuxmint.com/) is a GNOME 3 fork developed for Linux Mint that is similarly heavy on SRU. It provides a more traditional user interface than GNOME 3, with its appearance more closely resembling that of GNOME 2 than GNOME 3. Compared to the GNOME 2 fork, MATE, that was originally released roughly the same time as it (in 2011 &mdash; the year that GNOME 3 was released), it is significantly more configurable but also heavier on SRU. In fact, I would argue it is even more configurable than its parent, GNOME 3. Like its parent, however, this configuration is done via the use of extensions/plugins, themes and its system settings GUI. Its major disadvantages are mostly related to its SRU, instability, lack of Wayland support and lack of distribution-independent support.

It is written in C++, JavaScript and Python (source: [its GitHub repository](https://github.com/linuxmint/Cinnamon)).

Most things can be customized in Cinnamon, for one it has a digital clock that can be configured to a custom format. I usually use the format (for details on how to create your own custom date and time format see https://help.gnome.org/users/gthumb/unstable/gthumb-date-formats.html.en):
`%l:%M:%S %P, %A %e %B %Y`
for example as I am typing this post this would be rendered as: `1:26:00 pm, Thursday 28 January 2016`. This custom format is not available under GNOME or MATE, by the way. Additionally, one can modify one's keyboard shortcuts, one's theme and several other details about one's system.

Cinnamon has several extensions available for it, which can be installed via a built-in installer. I have found more extensions available for it, that are compatible with the latest release of the desktop, than are available for GNOME and MATE. For example, I have found a weather desklet which can be handy.

### Components
* **Display server/window system**: X11.
* **File manager**: Nemo.
* **Widget toolkit**: GTK+ 3.
* **Window manager**: Muffin, a fork of Mutter.

it has its own core application suite, which are forked from the corresponding GNOME Core Applications.

### Obtaining It
Cinnamon is in the package repositories of the vast majority of Linux distributions, including (note, these instructions should install the Cinnamon meta-package, which should draw in all core components of the desktop for installation):
* {% include Search/debian.md package="cinnamon" %}
* {% include Search/arch.md package="cinnamon" %}
* {% include Search/ubuntu.md package="cinnamon" %}
* {% include Search/gentoo.md package="gnome-extra/cinnamon" %}
* {% include Search/centos.md package="cinnamon" %}
* {% include Search/fedora.md package="cinnamon" %}
* {% include Search/mageia.md package="cinnamon" %}
* {% include Search/opensuse.md package="cinnamon" %}
* {% include Search/sabayon.md package="gnome-extra/cinnamon" %}

### Ratings
* **Availability**: 8. It is in the software repositories of almost every major Linux distribution.
* **Beginner-friendliness**: 9. It is very beginner-friendly.
* **Customizability**: 8-9. Very customizable.
* **Features**: 9. It is tied with KDE Plasma 5 for the position of the most feature-packed graphically-configured DE I have used.
* <abbr title="My Experience With It">**MEWI**</abbr>: 8. I have used it quite extensively.
* **Stability**: 7. On Arch and Manjaro it is stable enough for everyday use without too many problems. Although I have noticed that Nemo, its file manager, frequently crashes on me. On Sabayon I have found it more buggy, especially with respect to its keyboard shortcuts settings window, which fails to even launch for me under Sabayon. On Linux Mint it is very stable.
* **Support**: 2. Distribution-independent support for it is virtually non-existent, I have attempted to get support in the Linux Mint forums but they informed me that they merely support the use of Cinnamon under Linux Mint. Its associated IRC Channels are also distribution-specific.
* **System Resource Usage**: 3. its various components are fairly heavy overall, for example, under Arch on 28 January 2016 I have Cinnamon installed and running `sudo pacman -Rsc cinnamon` to remove its components says its total removed size would be 53.71 MB. Here is its Arch VM `ps_mem` table: {% include Code/gist.html id="20fac68c45f06e00b257" %}
* **Overall**: 8. Its stability and lack of DIS are its major let-downs.

### External Resources
* [Cinnamon](https://wiki.archlinux.org/index.php/Cinnamon) at *The ArchWiki*.
* [Cinnamon](https://wiki.gentoo.org/wiki/Cinnamon) at *The Gentoo Wiki*.
* {% include Links/wp.md name="Cinnamon_(software)" %} at *The English Wikipedia*.
* [Cinnamon Spices](http://cinnamon-spices.linuxmint.com/), which are desktop themes for Cinnamon.
* [GitHub Repository](https://github.com/linuxmint/Cinnamon).
* [GitHub Repository Wiki](https://github.com/linuxmint/Cinnamon/wiki).
