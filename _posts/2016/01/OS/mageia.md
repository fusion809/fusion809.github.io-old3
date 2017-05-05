## Mageia
{% include_relative os-shot.html image="Mageia-5-KDE4.png" float="none" description="Mageia 5 with its default KDE Plasma 4 desktop." width="1130px" %}

### Background
{% include_relative os.md os="Mageia" url="http://www.mageia.org/en/" forum="https://forums.mageia.org/en/" irc="irc://irc.freenode.net/#mageia" d="http://www.mageia.org/en/downloads/" ml="https://wiki.mageia.org/en/Mailing_lists" dw="mageia" docs="http://www.mageia.org/en/doc/" wiki="http://wiki.mageia.org/" bugs="https://bugs.mageia.org/" wp="Mageia" %} is a French Linux distribution that was originally forked from the proprietary Mandriva Linux distribution by several former employees of Mandriva S.A. Mageia 1, the first release of Mageia, was released in 2011. Mageia follows a fixed release model and uses older and more stable versions of almost (if not all) all of its software, including its kernel (currently the latest LTS release 4.1.13, although a week or so ago it was still using 3.18) and desktop environments (GNOME 3.14 and KDE Plasma 4.14 are currently used). Like its parent its package management system is [urpmi](https://en.wikipedia.org/wiki/urpmi), which uses RPM packages. The word &ldquo;mageia&rdquo; is Latin for &ldquo;magic&rdquo;.

Mageia is fairly popular and is currently ranked 6th, by the *DistroWatch* website, in terms of popularity over the past year.

### Installer
Mageia uses the graphical DrakX installer, which I have fairly limited experience with and have probably used at most three times (as you only ever use it when you are installing Mageia, after the installation you never see it again). The guide to using DrakX can be found [here](https://doc.mageia.org/installer/5/en/content/installer.html).

### Package Management
{% include_relative os-shot.html image="Mageia-5-rpmdrake-6.20.png" width="1130px" float="none" description="rpmdrake 6.20 running on Mageia 5" %}
As previously mentioned Mageia uses the command-line urpmi ([`urpmi`](https://fusion809.github.io/man/urpmi.8.html) from the command-line) package manager, which installs software using RPM binary packages and the RPM package manager. urpmi is written in Perl. Other commands included in the `urpmi` package includes a command for uninstalling software ([`urpme`](https://fusion809.github.io/man/urpme.8.html)), another command for querying installed software and software repositories ([`urpmq`](https://fusion809.github.io/man/urpmq.8.html)) and one for querying the files installed by software packages ([`urpmf`](https://fusion809.github.io/man/urpmf.8.html)), amongst others. Mageia also uses Mandriva's graphical front-end for urpmi, rpmdrake. Below is a Bash script showing some useful commands involving urpmi. My experience with Mageia is just barely at the point where I am comfortable reviewing it, so I cannot really add much beyond this about it. I have noticed, however, that Mageia is one Linux distribution wherein I have had great difficulty installing the [Atom](https://atom.io) text editor (which is the text editor I am using to write this post). I have managed to by using the official [RPM binary package](https://atom.io/download/rpm) provided by the Atom development team, by running {% include Code/coders.html line1="urpmi https://atom-installer.github.com/v1.2.4/atom.x86_64.rpm?s=1448042930" %}, although I did have to uninstall the `apmd` package first due to a file conflict (as both packages provide a `/usr/bin/apm` file).

{% include_relative urpmi-scripts.md %}

{% include_relative specs.md arch="i586, x86_64." origin="France." date="2011." shell="Bash." ui="GNOME, KDE." im="Graphical, using live media." type="Linux." pm="urpmi." rm="Fixed." base="Mandriva Linux." tm="Users that favour stability over having the latest software." %}

{% include_relative os-min.md cpu="i586." ram="512 MB, 2048 MB preferred." hdd="5 GB minimum, 20 GB preferred." ims="39 MB (NET), 3.6 GB (DVD)." %}

{% include_relative os-ratings.md bf="8." cmb="<6." ob="6. Not enough experience with it to know, but I suspect it lacks support for [Broadcom chipsets](https://wiki.mageia.org/en/Setup_wireless_networking)." doc="5? Documentation seems to be in its infancy." sup="? Never had to use their forums." pm="8." sru="4." sb="≥7. Never experienced any bugs myself." mewi="≤4." oa="7." %}
