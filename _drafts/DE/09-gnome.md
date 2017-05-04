## GNOME
{% include Links/image.html image="GNOME/GNOME-3.18-Arch.png" width="1130px" float="none" description="GNOME 3.18 running under Arch Linux" %}

### Background
[**GNOME**](https://www.gnome.org/) is a GTK+ based desktop environment that is developed as part of the GNU Project. It is written in C, C++, JavaScript, Python and Vala. It was founded in the late 1990s, when the Qt widget toolkit that the newly formed KDE desktop was based on, was still proprietary-licensed. The developers of GNOME created their own freely-licensed widget toolkit, which became known as the GIMP Toolkit or GTK+ for short, for GNOME to use. GNOME and KDE have been widely seen as the two major Linux desktop environments ever since. Each new series of GNOME, denoted by different integers (e.g., GNOME 1, GNOME 2 and GNOME 3), is based on a new series (also denoted by different integers, e.g., GTK+ 1, GTK+ 2, GTK+ 3) of the GIMP Toolkit. GNOME 1 was first officially released in March 1999, GNOME 2 was first released in June 2002 while GNOME 3 was released in April 2011.

GNOME 3 featured a new look (GNOME Shell) that broke with the traditional desktop metaphor and was met with much controversy and criticism in the FOSS community. Because of this around the time that GNOME 3 was released several unofficial forks of GNOME were also developed that were designed to keep with the traditional desktop metaphor that GNOME 3 broke with, the most notable of these are Cinnamon (forked from GNOME 3) and MATE (forked from GNOME 2).

GNOME is fairly customizable, its keyboard shortcuts and theme can be customized, it can be extended by use of plugins (although I personally find that most of these extensions or plugins are not compatible with the current release of GNOME, though, which can be irritating), startup applications can be customized, *etc.* These are all customized via GNOME Settings or the GNOME Tweak Tool. Most of its extensions/plugins are also fairly limited in how much they can be customized.

GNOME's feature set can be extended using extensions/plugins, although it is important to note that many such extensions are only compatible with older releases of GNOME. These extensions can be installed from within one's web browser, although this method of installing extensions is only compatible with select few web browsers such as Firefox. It is one of the most feature-packed DEs and, in fact, I have found its Wayland session to be the most stable of all the Wayland sessions I have tried (which includes Hawaii, GNOME on Wayland and Plasma on Wayland). It is stable enough for me to use it long-term without too much of a stability problem. Hawaii always crashes soon after it is started for me, while Plasma on Wayland usually crashes soon after starting, although I have managed to boot a Kubuntu live USB running on Wayland without it crashing immediately, although it did not take much to make it crash after it started.

### Components
* **Display server/window system**: X11 and Wayland (GNOME &#8805;3.10).
* **File manager**: GNOME Files (previously called Nautilus).
* **Widget toolkit**: GTK+.
* **Window manager**: Mutter.

it also has one of the most comprehensive core applications suites, and includes (but not limited to, just naming some of the more notable ones):
* Empathy (IM/VoIP client).
* Evince (PDF viewer).
* Eye of GNOME (image viewer).
* gedit (text editor).
* GIMP (image editing program, similar to Adobe Photoshop).
* GNOME Terminal.
* GParted (partition editing program).

### Obtaining It
* {% include Search/debian.md task="gnome-desktop" %}
* {% include Search/arch.md package="gnome" %}
* {% include Search/ubuntu.md package="gnome" %}
* {% include Search/gentoo.md package="gnome-base/gnome" %}
* {% include Search/centos.md category="gnome-desktop" %}
* {% include Search/fedora.md category="gnome-desktop" %}
* {% include Search/opensuse.md package="gnome" %}
* {% include Search/sabayon.md package="gnome-base/gnome" %}

### Ratings
* **Availability**: 9. Comes pre-installed on special editions of several Linux distributions including CentOS, Debian, Fedora, Mageia and Sabayon.
* **Beginner-friendliness**: 8. It is fairly beginner-friendly.
* **Customizability**: 7-8. Fairly customizable.
* **Features**: &gt;8.
* <abbr title="My Experience With It">**MEWI**</abbr>: 7-8. I have a fair amount of experience with it.
* **Stability**: 8. Never had stability issues with it myself.
* **Support**: 7? Never had to use its DIS but it seems, fairly high-quality based on the fact there is a Wiki for it, mailing lists, IRC channel, *etc.*
* **System Resource Usage**: 3. Here is my `ps_mem` table on my Arch VM: {% include Code/gist.html id="39426fed9a69b26c1ceb" %}
* **Overall**: 8.

### External Links
* [GNOME](https://wiki.archlinux.org/index.php/GNOME) at *The ArchWiki*.
* [GNOME](https://en.wikipedia.org/wiki/GNOME) at *The English Wikipedia*.
* [GNOME](https://wiki.gentoo.org/wiki/GNOME) at *The Gentoo Wiki*.
* [GNOME Extensions Repository](https://extensions.gnome.org/) &mdash; you can install extra extensions from within the Firefox web browser.
* [GNOME Look](http://gnome-look.org/) &mdash; where you can get some themes, wallpapers, *etc.* for GNOME.
