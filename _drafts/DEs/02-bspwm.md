## bspwm
{% include_relative infobox-desktop.html wm="bspwm" screenshot="https://fusion809.github.io/images/desktop-environments/Manjaro_bspwm.png" screenshot_caption="bspwm running on Manjaro Linux, with its official branding." arch="bspwm" gentoo="bspwm" wp="bspwm" github="baskerville/bspwm" language="C" size="210 KiB" ram="1.2 MiB" date="2013" license="<a href='https://raw.githubusercontent.com/baskerville/bspwm/master/LICENSE' link='_blank'>BSD-2</a>" devfor="N/A" developer="Bastien Dejean (original and lead) and <a href='https://github.com/baskerville/bspwm/graphs/contributors' link='_blank'>various contributors</a>" type="Tiling window manager" channel="bspwm" %}

**bspwm** is a fast, lightweight and minimalist tiling window manager developed by Bastien Dejean. It represents its windows as leaves on a full binary tree and it only responds to X events and the messages it receives on a dedicated socket. It is very much in-line with the Unix philosophy as it does just one thing, window management, and does it well. It has no drop-down menus in its own right, although applications run under it can provide their own. It does not respond to keyboard or pointer inputs, not on its own anyway, rather any such interaction must be programmed into sxhkd, a daemon that sends output to bspc, which in turn sends messages to bspwm via its dedicated socket. sxhkd is also developed by Dejean. Unlike awesome and i3, bspwm has no official status bar, and if one wants one it must be provided by third-party packages like lemonbar and ybar. 

I must admit that very little background information on it is available online, most information I can find is about using it, not so much about its background, and I have little experience with it myself.

### Availability
Many modern distributions have bspwm in their official repositories, including:

* Arch Linux and derivatives, including Manjaro which even has its own unofficial (or community) edition featuring bspwm as its default user interface. 
* Debian 9 / sid
* Fedora 24 and newer (including Rawhide)
* Gentoo Linux
* openSUSE Leap 42.2 and later, along with Tumbleweed
* Slackware 14.1 and later
* Ubuntu 16.10 and later

Although many distributions, especially those infrequently updated like CentOS and older versions of Debian (e.g. 7/8) and Ubuntu LTS (e.g. 14.04 / 16.04) do not have a bspwm package in their official repositories. bspwm is a fairly simple package to build so it is not surprising that it is finding its way into more and more distribution's official repositories. I would overall rate its availability as 7 out of 10, although in a few years I would expect this to go up to 9 or even 10 out of 10, assuming it is still actively developed. 

### Beginner-friendliness
bspwm is configured solely using text files, with no graphical tools available to simplify the process. It does not work in an intuitive way out-of-the-box like awesome or the mainstream desktop environments, making it fairly non-beginner friendly. I would rate its beginner-friendliness at 2 out of 10, as it is customized mostly using shell scripts which most Linux users are probably at least mildly familiar with. 

### Customizability
It is customized by editing {% include Layouts/path.html path="~/.config/bspwm/bspwmrc" puncr="," %} which is a Bourne shell script. From what I understand it determines what information is sent to bspwm via the dedicated socket, although I could be wrong (do correct me if I am, see [Corrections](/contributing/) for details). If you wish to customize sxhkd you will need to edit {% include Layouts/path.html path="~/.config/sxhkd/sxhkdrc" puncr="." %} 

I would rate its customizability at &ge;8 out of 10.

<h3 style="width: 100%">Stability</h3>
I have minimal experience with bspwm so I cannot really speak to its stability. Given that it still has not had a stable (1.0) release, I would guess its stability to be in the range 3&ndash;7 out of 10.

<h3 style="width: 100%">System resource usage</h3>
bspwm has a very low installed size (210 KiB). Its RAM usage is also rather small at just 1.2 MiB (which I determined in a Manjaro bspwm edition VM), which is lower than that of most window manager. 

{% include Layouts/clear.html %}
