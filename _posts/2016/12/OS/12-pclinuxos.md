## PCLinuxOS
{% include_relative infoboxes/12-pclinuxos.html %}

[**PCLinuxOS**][1200] is a Linux distribution with fairly liberal licensing requirements and out-of-the-box support for most hardware with Linux support (including Broadcom wireless). It is unusual among Linux distributions in that it still uses the [APT-RPM][1201] (which was last updated in early 2008){% include_relative includes/fn-inline.html no="12" %} front-end for the RPM package manager, and includes several outdated (and hence potentially insecure) pieces of software including RPM (it uses 4.8.1, which was released in 2010) and init system. Its official repositories also include some proprietary desktop applications like RuneScape's NXT Client. It is also unusual in a few other ways:

* It follows a rolling release model, but is fairly conservative, in that it consists mostly of more stable (as opposed to the very latest), well-tested versions of its included software. For example, its kernel is presently of the 4.9.x series (the latest LTS release). Most rolling release distros are more bleeding-edge. Likewise until February 2017 it still used KDE Plasma 4 (despite KDE Plasma 5 being out since July 2014) and had not added Plasma 5 to its official repositories.
* Has not adopted the systemd init system and has no intention of ever adopting it. 
* Follows an authoritarian governance model, with a Benevolent Dictator For Life (BDFL), Bill Reynolds (texstar). Or so I think, not certain about this as I have asked for info on this in their IRC channel but I got no reply after waiting for >5 hours. Only 9 or so other people in the channel though so that was not unexpected. 

### Closing remarks
I personally have found it a fairly buggy distribution for one not using software on the bleeding-edge. I maintain a VirtualBox VM running it, and I have had it broken before by a kernel upgrade. Plasma 5 has also rendered my VM unable to reach a usable target (either the command-line or a GUI). It is fairly beginner-friendly and is best suited for those that:

* Want an out-of-the-box experience.
* Like a conservative distribution, in terms of software versioning, favouring stability over the very latest software versions. 
* Are OK with an authoritarian distribution. Dictatorships do not sit too well with me personally, partly because I always fear that I will grow to love the distribution and then the dictator will make a decision that turns the distribution into something I dislike. At least with community-lead distributions usually the decisions reflect more what most users want, instead of just what one dictator wants.

{% include Layouts/clear.html %}
