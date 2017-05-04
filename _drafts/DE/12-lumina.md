## Lumina
{% include Links/image.html image="Lumina-desktop-0.8.7-Arch.png" width="1130px" float="none" description="Lumina Desktop 0.8.7 running on Arch Linux" %}

### Background
[**Lumina**](http://lumina-desktop.org/) is a lightweight desktop environment designed for and primarily used by FreeBSD and PC-BSD. It has been ported to the more popular Linux distributions, with Gentoo Linux (and its descendant, Sabayon) and Mageia not being amongst them. I personally find it buggy and not so "lightweight" on the Linux distributions I have tried it on. It also has limited extensibility, which mostly has to be done via textual methods. See it uses Fluxbox as its window manager, which is configurable via editing files in `~/.fluxbox`.

### Components
* **Display server/window system**: X11.
* **File manager**: [Insight](http://lumina-desktop.org/development-preview-0-8-7-insight-file-manager/).
* **Widget toolkit**: Qt.
* **Window manager**: Fluxbox, although in the future it is planned to use its own window manager.[^1]

Lumina has no core application suite that I am aware of.

### Obtaining It
* {% include Search/arch.md aur="lumina-desktop" %}
* For other Linux distributions see the [Get Lumina](http://lumina-desktop.org/get-lumina/) article. Obtaining it on most distributions involves using unofficial software repositories.

### Ratings
* **Availability**: 4. For most distributions it can only be obtain from unofficial repositories.
* **Beginner-friendliness**: 7?
* **Customizability**: 6-8? Not enough experience with Lumina to be able to accurately rate this feature.
* **Features**: 5?
* <abbr title="My Experience With It">**MEWI**</abbr>: 2. Not an awful lot of experience, mostly because of how buggy it is on my favourite distributions, but some.
* **Stability**: 3. On Linux distributions its stability is not its strongest point.
* **Support**: ? Never used their support forums or Wiki.
* **System resource usage**: 5. Not as heavy as some desktops but certainly not what I would call "lightweight". Here is my `ps_mem` table: {% include Code/gist.html id="d411a35caab31d05084b" %}
* **Overall**: 4.

### Useful Resources
* [GitHub Repository](https://github.com/pcbsd/lumina/)
