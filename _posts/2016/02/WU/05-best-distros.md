## Which Distro is Best?
The best distribution for you to start out with, greatly depends on several variables. So many, that I cannot give you a straight answer, rather you will have to find out which distribution is best for you via experience. The easiest distribution for Windows users to use as a first distribution would have the following characteristics:

{% include Links/image.html image="Terminals/Yakuake-OT-command-line.png" width="500px" float="right" description="The Linux command-line on my openSUSE Tumbleweed installation." %}
1. A graphical and easy-to-use package manager. Most Windows users are not particularly comfortable with using the command-line for installing software packages and this is why a graphical package manager is probably best.
2. Large software repositories containing thousands of at least fairly up-to-date software packages. This way the user will need to use alternate methods to install the software they need in fewer cases. These alternate methods are usually more difficult and error-prone.
3. Liberal requirements on software package licensing. Some distributions only have FOSS in their software repositories, while others are more liberal and have some freeware in there too. Many programs you may wish to install are not FOSS. For example, most graphics cards and Wi-Fi chips have [proprietary drivers](https://en.wikipedia.org/wiki/Device_driver) or firmware that either outperforms their corresponding open-source driver/firmware or for which there is no corresponding open-source driver/firmware. My Lenovo Laptop, for example, has dual Intel and NVIDIA graphics cards as well as a Broadcom BCM43228 Wi-Fi chip. There are FOSS drivers for my graphics cards, which usually have inferior performance to their corresponding proprietary drivers. My Wi-Fi chip, however, requires proprietary firmware from the Broadcom corporation itself, so in order to access my Wi-Fi I need to install this firmware.
4. A graphical installer. A graphical program for installing the distro, this is as opposed to distros that must be installed from the command-line, which can be quite disconcerting to Windows users.
5. Out-of-the-box support for most hardware, like popular graphics cards and Wi-Fi chips. "Out-of-the-box" in this context, at least, means that this support exists by default, it is there as soon as you boot the live DVD or USB you are using to install the distro, you do not have to do anything to get this support yourself.
6. A large and friendly online support community. This way if you encounter any errors with your installation, you can easily and quickly get free help. Beware though, many people in these support sites will believe that Linux is supposed to be a "do it yourself" (DIY) operating system, that is, if you have a problem that needs fixing, you have to work as hard as you can to fix it yourself (and gather evidence of this &mdash; often these people will **not** take your word!) before asking others for help. This is a belief they will often force on others, including newcomers to the distro. I personally think that DIY better describes the Arch Linux and Gentoo Linux distributions and FreeBSD than Linux, in general. Unfortunately, this view is not shared by everyone.

Most distributions fulfill at most four of these requirements.

### Specific Distributions
Examples of distributions that fulfill at least four of the aforementioned requirements, are mentioned in the sections below, with the requirements they fulfill listed in brackets.

{% include_relative 05a-distrolist.md %}

### Distros for Older Computers
If you have a **fairly old computer**, with an older CPU, little RAM (say &lt;2 GB) and hard drive space to spare then odds are you will be best to stick to one of the following:

* Fedora (namely, the LXDE edition).
* openSUSE Tumbleweed (in the automated installer you will need to choose the LXDE desktop, however).
* [Puppy Linux](http://www.puppylinux.com/), an Australian distro that is designed to run from a live USB. I personally find it a buggy distro, so buggy I have not even managed to install it on a VirtualBox VM.
* Ubuntu (namely, the official Lubuntu spin; the unofficial spins called [Bodhi Linux](http://www.bodhilinux.com/) and [LXLE](http://lxle.net/) may also be suitable in these cases. Note, if you use an unofficial spin, you cannot get support in the #ubuntu IRC channel or askubuntu.com website).

### Other Distros
While if you have a preference for an **OS X-like look** to your PC, then I would recommend using [deepin](https://www.deepin.org/?language=en) or [elementary OS](http://elementary.io/). deepin is a Chinese distribution based on Debian's unstable branch, while elementary OS is an American distribution based on Ubuntu's LTS releases. It is possible to get such a look on other systems but the OS X-like look is not the default for these other systems, rather you need to customize their look to get them this way.

### Testing Out
<iframe width="1100" height="618" src="https://www.youtube.com/embed/QkJmahizwO4" frameborder="0" allowfullscreen></iframe>
In order to pick the best distribution for you, I would recommend trying out whichever distributions you think might be best for you in VirtualBox ([here](https://www.virtualbox.org/wiki/Downloads) is the Download page), before installing it on your hard drive. A nice video tutorial on installing VirtualBox on Windows 7 and then installing Ubuntu 14.04 in VirtualBox is shown above. VirtualBox is best run on a PC with at least 4 GB RAM, 4 CPUs, and 20 GB hard drive space free.
