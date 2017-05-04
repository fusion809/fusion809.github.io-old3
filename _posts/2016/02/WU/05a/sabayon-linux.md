#### Sabayon Linux
{% include Links/image.html image="operating-systems/Sabayon-Linux Xfce.png" width="1130px" float="none" description="Sabayon Linux Xfce edition" %}

[**Sabayon Linux**](http://sabayon.org/) (1-5), a distribution with similarly extensive, out-of-the-box support to Manjaro. Like Manjaro, however, it is also based on a non-beginner-friendly distro, except in Sabayon's case this distro is Gentoo Linux and not Arch Linux. Most of Sabayon's software is as up-to-date as the corresponding Manjaro software, although some programs may lag behind. It follows a rolling release model, so you never have to perform traditional distribution upgrades. Its chief disadvantage is its small online support community, which I have found can be a little more testy (more prone to bite your head off) than that of openSUSE. Its official software repositories contain some freeware packages like Spotify too.

Its official repositories (that is, the ones you can access and install packages from using its main package manager, Entropy) may be missing some packages you would like to use, most of these packages you can get via more challenging methods (most notably by using Gentoo's package manager, Portage, which also comes pre-installed on Sabayon), which for the most part have to be done from the command-line. For example, when I first started using this distribution, I wanted to install SageMath, a mathematics program not in the official Entropy repositories, to do this I needed to use Portage and the [`sage-on-gentoo`](https://github.com/cschwan/sage-on-gentoo) overlay (which is an unofficial Gentoo repository). Its forums are [here](https://forum.sabayon.org/) and its main support IRC channel is [here](irc://irc.freenode.net/sabayon).

It has seven main editions:

* GNOME
* KDE
* MATE
* Minimal (which uses the Fluxbox window manager, sort of like a lighter weight desktop environment than LXDE or Xfce)
* Server (useful for servers, I would not recommend using this edition as it has no desktop environment, by default)
* Spinbase (pretty useless since the Anaconda installer was ditched. See it just has the command-line and its new installer cannot be run from the command-line)
* Xfce

Its officially supported package manager is Entropy, which installs packages with the `.tbz2` file extension. It has a command-line interface invoked by the command `equo` and a graphical user interface (GUI) called Rigo. To install a program with equo one would run:

{% include Code/codeu.html line1="sudo equo install $package" %}

while to uninstall (or remove) a program with Entropy, one simply runs:

{% include Code/codeu.html line1="sudo equo remove $package" %}

to update one's local package repositories, one runs:

{% include Code/codeu.html line1="sudo equo update" %}

to upgrade all software packages (which is best done after updating the local repositories, with the aforementioned command), one runs:

{% include Code/codeu.html line1="sudo equo upgrade" %}
