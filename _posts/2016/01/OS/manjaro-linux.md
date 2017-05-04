## Manjaro Linux
{% include_relative os-shot.html image="Manjaro-15.09-welcome.png" float="none" description="Manjaro Linux Xfce edition." width="1130px" %}

### Background
{% include_relative os.md os="Manjaro Linux" url="https://manjaro.github.io" wp="Manjaro Linux" wiki="https://wiki.manjaro.org/index.php?title=Main_Page" forum="https://forum.manjaro.org/" ml="https://lists.manjaro.org/mailman/listinfo" irc="irc://irc.freenode.net/#manjaro" dw="manjaro" gr="manjaro" docs="https://wiki.manjaro.org/index.php?title=Main_Page" d="http://manjaro.github.io/download/" %} is a European beginner-friendly Arch Linux-based Linux distribution that features an automated command-line and graphical installer (called [Thus](https://github.com/manjaro/thus), although the platform-independent installer, [Calamares](https://calamares.io), is also available), automatic hardware detection (using the [Manjaro Hardware Detection](https://wiki.manjaro.org/index.php?title=Manjaro_Hardware_Detection) tool) and several official and unofficial (or community) editions that differ only in their preinstalled desktop environment. Such official editions include KDE, NET and Xfce editions. Currently Manjaro is still in beta testing, without any official releases being made yet. I have noticed more bugs in Manjaro than there are in Arch Linux, for example, I once found it impossible to run the [Deepin Desktop Environment](https://github.com/fasheng/arch-deepin/issues/92) on Manjaro, although running it on Arch Linux goes without a hitch.

Manjaro is currently the 7th most popular operating system ranked, according to *DistroWatch*.

### Installer
{% include_relative os-shot.html image="Manjaro-Thus-installer.png" width="500px" float="left" description="Manjaro's Thus installer" %}{% include_relative os-shot.html image="Manjaro-Calamares-installer.png" width="500px" float="right" description="The Calamares installer on Manjaro 15.09" %}{% include Layouts/clear.html %}
One of the major features that distinguishes Manjaro from Arch is an automated installation process that can be performed graphically or textually. Graphically this installation can be done using the distribution-independent Calamares installer or Manjaro's own Thus installer. Textually this must be done using Manjaro's Thus installer. I have not had enough experience with Manjaro installation to really offer any real comparison between the two installers, but I have found [this blog post](http://www.zdnet.com/article/thus-versus-calamares-comparing-manjaro-15-09-installers/) from another author that seems like a decent comparison between the two. I found them both buggy when I tried to install Manjaro Linux on my removable drive.

### Package Management
{% include_relative os-shot.html image="Manjaro-Linux-pamac.png" description="Pamac 2.4.3 running on Manjaro Linux" float="none" width="1130px" %}
Like its parent it uses pacman and Yaourt for command-line package management, although the graphical front-end, [Pamac](https://github.com/manjaro/pamac) (written predominantly in [Vala](https://en.wikipedia.org/wiki/Vala_(programming_language))), which is developed by the Manjaro development team, also comes preinstalled on Manjaro. Manjaro also has the Manjaro Hardware Detection (`mhwd`) tool (which is written predominantly in C++, Bash script and C) which is developed by the Manjaro development team.

{% include_relative mhwd-scripts.md %}

Manjaro Linux has the following pacman repositories enabled by default (note that while their names are the same as their Arch Linux counterparts these repositories are all distinct from their Arch counterparts):
~~~ bash
core
extra
community
multilib
~~~

{% include_relative specs.md arch="i686, x86_64." origin="Austria, France, Germany." date="2013." ui="KDE, Xfce." im="Graphical (Calamares or Thus installer), using live media." type="Linux." pm="pacman, Yaourt." rm="Rolling." base="Arch Linux." tm="Users that prefer to have the latest software but also prefer a graphical installation process." %}

{% include_relative os-min.md cpu="i686 @ 1 GHz." ram="1024 MB." hdd="30 GB." ims="529.5 MB (i686, NET edition)." %}

{% include_relative os-ratings.md bf="≥8." ob="9." cmb="7. Not as customizable as its parent, but still some customizability exists." doc="5-7. Its Wiki is still in its infancy, although most information at the ArchWiki should also be applicable to Manjaro." sup="5. I have used their forums a few times and I must say it is not definitely not the best. For one, if you include a hyperlink in your new thread you will have to a wait a few days, at least, before it receives moderator approval and hence becomes viewable to potential answerers to your question(s)." pm=">8." sru="7. I find it fairly fast and lightweight, considering the fact it uses a graphical user interface, by default." sb="7-8." mewi="8. I have installed it on a removable hard drive before and used it for a while, so I have a reasonable level of experience with it. I presently have it installed on my removable drive." oa="9. Manjaro is one of my favourite OSs, but it is still in beta testing, so bugs are frequent." %}
