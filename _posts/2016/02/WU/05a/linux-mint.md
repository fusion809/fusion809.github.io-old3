#### Linux Mint
{% include Links/image.html image="operating-systems/Linux-Mint-17.3.png" width="1130px" float="none" description="Linux Mint 17.3 with its default Cinnamon desktop" %}

[**Linux Mint**](http://linuxmint.com/) (1-6), a Ubuntu-based distribution developed by a community of unpaid volunteers. It is built on the Long-Term Support (LTS) releases of Ubuntu which come out in April of even-numbered years (e.g., the latest one was in April 2014 and was numbered 14.04) and are designed to be especially stable, although their software tends to lag behind that of newer Ubuntu releases (a new Ubuntu release comes out every six months, in April and October of every year). Its chief advantage, in my opinion, over Ubuntu is that it has better out-of-the-box support for several proprietary multimedia codecs (codecs are programs required to play certain multimedia files) and graphics drivers. It does **not** have out-of-the-box support for Broadcom chips with proprietary drivers like mine.

I have not used its community support, personally, so I cannot comment on its quality. It has a Windows-like look, though, with a task bar (or panel) across the bottom of the screen. If you need free support with Linux Mint I would recommend using their [forums](https://forums.linuxmint.com/) or IRC channel {% include Links/irc.html channel="linuxmint-help" puncl="(" puncr=")." %} It has two official editions, the standard (which features the Cinnamon desktop) and the lighter edition (which features the MATE desktop).

Linux Mint, like its parent Ubuntu, uses the Advanced Packaging Tool (APT) for command-line package management, which installs software from Deb (file extension: `.deb`) packages. APT has several graphical front-ends available on Linux Mint, the most popular is developed by the Linux Mint developers themselves, MintInstall. Alternatively, you can use the command-line front-end (which is more beginner-friendly than APT, according to some), aptitude. To install a software package with APT run:

{% include Code/codeu.html line1="sudo apt-get install $package" %}

while to remove a software package with APT, one would run:

{% include Code/codeu.html line1="sudo apt-get remove $package" %}

and to update one's local software repository indexes, one would run:

{% include Code/codeu.html line1="sudo apt-get update" %}

Finally, to install all software upgrades that are available from enabled repositories (which should be done **after** running the aforementioned `sudo apt-get update` command, to update local repository indexes), one would run:

{% include Code/codeu.html line1="sudo apt-get upgrade" %}
