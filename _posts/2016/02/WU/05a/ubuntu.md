#### Ubuntu
{% include Links/image.html image="operating-systems/Ubuntu-15.10.png" width="1130px" float="none" description="Ubuntu 15.10 featuring the Unity desktop" %}

[**Ubuntu**](http://ubuntu.com) (1, 2, 4, 6), a distribution that is well-known for its beginner-friendliness. It is developed by a Linux company called Canonical Ltd. Its software is usually more out-of-date than all other distributions mentioned in this post, except for openSUSE Leap. It has got the best support community, in terms of response times, in my opinion. Specifically it has a StackExchange website called [AskUbuntu](http://askubuntu.com) that I find quite good. Its official repositories contain mostly FOSS, along with some proprietary drivers, if my memory serves me correctly. Several unofficial Personal Package Repositories (PPAs) exist, however, although I am yet to find one containing Spotify, probably because a Spotify repository is provided and maintained Spotify AB (the company that develops Spotify), to find details go [here](https://www.spotify.com/uk/download/). Its main support IRC channel is [#ubuntu](irc://irc.freenode.net/ubuntu).

The Ubuntu (LTS) releases I mentioned under the [Linux Mint section](#linux-mint), comes with support (like maintenance and security upgrades) for five years. Consequently, you do not have to (although if you want the latest software you will probably want to every six-months, roughly) perform distribution upgrades for up to five years after the version of Ubuntu (LTS) you are using was initially released. So they form a more beginner-friendly alternative to CentOS for those that dislike performing distribution upgrades.

As previously mentioned, Ubuntu uses the Advanced Packaging Tool (APT) for command-line package management, which installs software from Deb (file extension: `.deb`) packages. The main, officially-supported graphical front-end available for APT on Ubuntu is the Ubuntu Software Center. Alternatively, you can use the command-line front-end (which is more beginner-friendly than APT, according to some), aptitude. To install a software package with APT, run:

{% include Code/codeu.html line1="sudo apt-get install $package" %}

while to remove a software package with APT, one would run:

{% include Code/codeu.html line1="sudo apt-get remove $package" %}

and to update one's local software repository indexes, one would run:

{% include Code/codeu.html line1="sudo apt-get update" %}

Finally, to install all available software upgrades from enabled repositories (which should be done **after** running the aforementioned `sudo apt-get update` command, to update local repository indexes), one would run:

{% include Code/codeu.html line1="sudo apt-get upgrade" %}
