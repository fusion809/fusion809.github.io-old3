## Enlightenment
{% include Links/image.html image="Enlightenment-0.20.1.png" width="1130px" float="none" description="Enlightenment 0.20.1 running on Sabayon Linux" %}

### Background
[**Enlightenment**](https://www.enlightenment.org) is a free, BSD-licensed, eye-candy stacking window manager, that was originally developed in the mid 1990s by Carsten Haitzler, also known as Rasterman, whom is still its lead developer. When it was originally released there was only one version of Enlightenment which is now known as E16, but later in December 2012 E17 had its first stable release. E16 is very lightweight in terms of memory footprint and installed size, but it is also very basic. E17, on the other hand, and later releases in its series E18, E19 and E20, are heavier on memory footprint and installed size but also heavier on features.

Enlightenment must be customized through its GUI. This may be via going to `Settings` in its menu. Its appearance, keyboard shortcuts, menus, loaded modules, gadgets (found on its shelf), shelf contents, wallpaper, *etc.* can be customized via going to `Settings`. Its appearance can be customized via several themes, but the themes available for Enlightenment are often compatible only with specific versions, most of which are not current.

### Components
* **Display server/window system**: X11, Wayland compatibility with E20.
* **File manager**: Enlightenment File Manager.
* **Widget toolkit**: EFL.
* **Window manager**: Enlightenment.

it has some core applications including Rage (a media player) and Terminology (a terminal emulator).

### Obtaining It
Enlightenment is found in the software repositories of the vast majority of Linux distributions. Comparatively few distributions come with Enlightenment pre-installed. To install Enlightenment (usually E17) on the various distributions of Linux:
* {% include Search/debian.md package="enlightenment" %}
* {% include Search/arch.md package="enlightenment" %}
* {% include Search/ubuntu.md package="enlightenment" %}
* {% include Search/gentoo.md package="x11-wm/enlightenment" %}
* {% include Search/centos.md package="enlightenment" %}
* {% include Search/fedora.md package="enlightenment" %}
* {% include Search/mageia.md package="enlightenment" %}
* {% include Search/opensuse.md package="enlightenment" %}
* {% include Search/sabayon.md package="x11-wm/enlightenment" %}

on Gentoo and Sabayon the E16 package is installed by default, when Enlightenment is installed. So to install E17 you must replaced `x11-wm/enlightenment` in the above commands with `x11-wm/enlightenment:0.17`.

### Ratings
* **Availability**: 8. Very easy to obtain on most distributions.
* **Beginner-friendliness**: 8.
* **Customizability**: 8. Fairly customize.
* **Features**: 8. Fairly feature-packed.
* <abbr title="My Experience With It">**MEWI**</abbr>: 4.
* **Stability**: 6-7. Not particularly stable and graphical bugs are common with later E17 series releases.
* **Support**: &gt;7. Pretty good DIS.
* **System Resource Usage**: 6-8. Download size for enlightenment is fairly small. `ps_mem` table for Enlightenment 0.20.1 on Arch Linux is: {% include Code/gist.html id="a2a6553cdfbeb649036d" %}. E16 gave this `ps_mem` table: {% include Code/gist.html id="9ac4c3f4d7238cf0d4aa" %}.
* **Overall**: 8.

### External Links
* [Documentation](https://www.enlightenment.org/docs)
* [Enlightenment](https://wiki.archlinux.org/index.php/Enlightenment) at *The ArchWiki*.
* [Enlightenment](https://wiki.gentoo.org/wiki/Enlightenment) at *The Gentoo Wiki*.
* [Enlightenment Git Repositories](https://git.enlightenment.org/)
* {% include Links/wp.md name="Enlightenment_(software)" %}
* {% include Links/irc.html channel="e" %}
