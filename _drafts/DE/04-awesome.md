## awesome
{% include Links/image.html image="Pengw-awesome-screenshot-20150215.png" width="1130px" float="none" %}

### Background
The [**awesome window manager**](http://awesome.naquadah.org/) is a [dynamic window manager](https://en.wikipedia.org/wiki/Dynamic_window_manager) for the X Window System that is developed by Julien Danjou (who now works for Red Hat) and others, that is oriented towards more advanced users. See unlike more beginner-friendly WMs, which can be configured graphically, awesome must be configured using Lua scripts. Now my knowledge of Lua is in its infancy, so needless to say my experience with awesome is also fairly limited. What I do know about Lua is that it is easier to learn than lower-level languages like C, C++ or Java, so while awesome is not the best choice for programming-nohopers it may be possible for someone that does not understand Lua, that has the time and willingness to learn, to pick it up while using awesome. A tutorial for newcomers to awesome can be found [here](http://awesome.naquadah.org/wiki/My_first_awesome).

awesome was originally forked from [dwm](https://en.wikipedia.org/wiki/Dwm), a very basic dynamic window manager, in 2007 and named jdwm with the "jd" in its name coming from Danjou's initials. Later that year it was renamed awesome after the catchphrase of the *How I Met Your Mother* character, Barney Stinson.

All configuration must be done by editing files in the `~/.config/awesome` folder. In this folder is a Lua script called `rc.lua`, which is the Lua script awesome will run whenever it is started, by default. It is also called the &ldquo;config&rdquo; file. awesome comes with a default config file usually found in the `/etc/xdg/awesome/` folder, which can be customized to one's liking.

### Components
* **Display server/window system**: X11.
* **File manager**: None.
* **Widget toolkit**: None.
* **Window manager**: awesome.

### Obtaining It
awesome is found in the official repositories of the vast majority of Linux distributions, including:
* {% include Search/debian.md package="awesome" %}
* {% include Search/arch.md package="awesome" %} I would also recommend you install the optional dependency of xterm, as without it it will be fairly difficult to customize Awesome from a running session.
* {% include Search/ubuntu.md package="awesome" %}
* {% include Search/gentoo.md package="x11-wm/awesome" %}
* {% include Search/centos.md package="awesome" %}
* {% include Search/fedora.md package="awesome" %}
* {% include Search/opensuse.md package="awesome" %}
* {% include Search/sabayon.md package="x11-wm/awesome" %}
oddly it does not seem that Mageia has an awesome package, look at [this search](http://madb.mageia.org/package/list/t_search/awesome) for confirmation. At least one of the its dependencies, xproto, is not in the Mageia repositories either, so building from source is not as straight-forward an option as one may hope.

### Ratings
* **Availability**: 7. The majority of Linux distributions have it in their official repositories.
* **Beginner-friendliness**: 3. At least Lua is a fairly simple programming language.
* **Customizability**: 9. Very customizable.
* **Features**: &gt;8. Additional features are added via editing `rc.lua`.
* <abbr title="My Experience With It">**MEWI**</abbr>: 1.
* **Stability**: 7. On Arch and Manjaro it seems very stable, but I have found it nigh impossible to run on Sabayon Linux, oddly enough.
* **Support**: 8. Support for people with the required knowledge in Lua scripting, seems high-quality. It has its own Wiki, IRC channel and mailing list.
* **System Resource Usage**: 8. Very lightweight, when installed it takes up no more than 3 MB and is no bigger than a 1 MB download on most platforms. Its `ps_mem` table on an Arch VM, using its default config file is: {% include Code/gist.html id="d97092ccf6baf11e5016" %}
* **Overall**: 4. My rating is so low as I put a premium on beginner-friendliness.

### External Resources
* [awesome](https://wiki.archlinux.org/index.php/Awesome) at *The ArchWiki*.
* [awesome](https://wiki.gentoo.org/wiki/Awesome) at *The Gentoo Wiki*.
* {% include Links/wp.md name="awesome_(window_manager)" %} at *The English Wikipedia*.
* [awesome wiki](http://awesome.naquadah.org/wiki/Main_Page).
* {% include Links/irc.html channel="awesome" %}
