## Slackware
{% include_relative infoboxes/14-slackware.html %}

[**Slackware**][1400] is the eldest presently-maintained Linux distribution available and is perhaps the most authoritarian of Linux distributions too, in terms of its governance. The later is because Slackware's development is lead by Patrick Volkerding, the so called "Benevolent Dictator for Life" of Slackware. Slackware uses a very simple package management system (called pkgtools), by default, so simple, in fact, that it does not manage repositories or resolve dependencies for you and rather you, the user, are expected to manage the dependencies and repositories yourself. Slackware also has an unofficial package manager modelled after Debian's APT that is called slapt-get. One has to install this package manager manually, however, by going to its [home page][1401], downloading the relevant binary and installing it with pkgtools. slapt-get serves as a wrapper around pkgtools and automatically manages dependencies and repositories for one.

### Installer
Slackware is unusual amongst modern Linux distributions in that it has no graphical installer, but rather its official installer is a textual installer. In this regard it is most similar to the &#42;BSDs like DragonFlyBSD, FreeBSD, NetBSD and OpenBSD, which all use a textual installer by default. Personally I have found the installers of the &#42;BSDs a little easier to use than Slackware's. This is partly because with Slackware you are expected to partition your disks yourself (with fdisk, for example), as opposed to the BSDs where the installer usually does this for you. 

### Package management
Slackware is also unusual in how out-of-date the software is in its repositories (e.g. it is still using KDE Plasma 4, even though KDE Plasma 5 has been out since July 2014) and how relatively small its repositories are. You will find many pieces of software you may want, including open-source software, that are absent from the official repositories of Slackware. Rather one often has to rely on the [SlackBuilds repositories][1402]. There is also a developmental version of Slackware that has more bleeding-edge software than the latest Slackware stable release, this developmental version is called Slackware-Current. 

One can also write one's own SlackBuilds, I find them similar to PKGBUILDs, except they are usually significantly longer and shell-scripting heavy (I know they are both shell scripts, PKGBUILDs and SlackBuilds, but SlackBuilds often involve more complicated shell scripting than PKGBUILDs. Conditionals are rare in PKGBUILDs, but common-place in SlackBuilds, for example).

### Closing remarks
I have personally found Slackware a fairly easy Linux distribution to inadvertently break, especially with respect to its kernel. After kernel upgrades I have had it fail to boot for me. But most of the time it works fine. It is not without its charm, especially for those that dislike systemd.

Ideally Slackware is best suited to advanced users that:

* Love open-source, but not enough to use a libre kernel.
* Do not need out-of-the-box support for devices with proprietary drivers, like Broadcom wireless.
* Want to build their system from the ground-up.
* Favour stability over a bleeding-edge system.
* Do not mind using a distribution with authoritarian governance. Authoritarian governance always has the chance to lead this project down roads long-time users dislike, whereas democracies tend to keep decisions more conservative and less likely to anger many users.
* Do not like systemd.

I have never used their forums or IRC channels, that I can recall at least, so I cannot really comment on their quality. 

{% include Layouts/clear.html %}
