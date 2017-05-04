#### openSUSE
{% include Links/image.html image="operating-systems/openSUSE-42.1-desktop-screenshot.png" width="1130px" float="none" description="openSUSE 42.1 (the latest Leap release) running the KDE desktop" %}

[**openSUSE**](https://www.opensuse.org/) (1, 2, 4, 6), a distribution developed by its own FOSS community and sponsored by Novell, another Linux company. It has the largest installation ISOs (that is, the files you use to install it) of any distribution mentioned here, with its live DVD ISO being 4.3 GB. Despite this, it has similarly poor out-of-the-box support for most proprietary codecs and drivers. openSUSE comes in two main flavours: Leap and Tumbleweed. Leap is more stable and popular, yet uses older software. Tumbleweed uses later software (usually a little less up-to-date than Manjaro Linux, though) but is maybe a little less stable (although I am presently using it and have never noticed any stability issues). Leap also has more limited architecture (processor instruction set) support than Tumbleweed, as Leap only supports x86-64 processors. While Tumbleweed also supports armhf and i586 architectures.

On the plus side its online support community is amongst the friendliest I have come across. I have asked roughly ten questions on their forums and I have not yet encountered anyone forcing the DIY philosophy on others. openSUSE's official repositories are, at least, mostly FOSS, but several user-maintained unofficial repositories housed by the [Open Build Service](https://build.opensuse.org) (OBS) and the community-maintained [PackMan repository](http://packman.links2linux.org/) contain proprietary software, including Spotify. Its main support IRC channel is [here](irc://irc.freenode.net/suse).

openSUSE uses the ZYpp package manager (which like DNF uses RPM packages), which is invoked from the command-line using the `zypper` command, although a graphical front-end for it called YaST2 (which is also used as openSUSE's installer) is also available. To install software using `zypper` one would run:

{% include Code/codeu.html line1="sudo zypper install $package" %}

or, to remove a package one would run:

{% include Code/codeu.html line1="sudo zypper remove $package" %}

while to update all packages to the latest version available, one would run:

{% include Code/codeu.html line1="sudo zypper update" %}
