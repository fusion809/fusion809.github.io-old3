## PCLinuxOS
{% include_relative os-shot.html image="PCLinuxOS-KDE.png" description="PCLinuxOS using the KDE Plasma 4 desktop." float="none" width="1130px" %}

### Background
{% include_relative os.md os="PCLinuxOS" url="http://www.pclinuxos.com" d="http://www.pclinuxos.com/get-pclinuxos/" dw="pclinuxos" forum="http://www.pclinuxos.com/forum" ircs="pclinuxos-support" docs="http://pclinuxoshelp.com/index.php/Main_Page" wp="PCLinuxOS" %} is a Linux distribution that follows a rolling-release model and uses the APT-RPM package manager. What is unique about PCLinuxOS is that while it follows a RRM it is not bleeding-edge in its system software, in fact its desktop and system software is usually no more (if not less) up-to-date than fixed releases of openSUSE. Currently it is using the 4.1.13 kernel (which is the latest LTS) and KDE Plasma 4.14 desktop (which is from over a year ago). PCLinuxOS is designed to be beginner-friendly, with out-of-the-box support for many popular graphics cards and sound cards and the Synaptic graphical front-end for APT-RPM preinstalled.

It was originally forked from Mandriva Linux, but it has since become an independent Linux distribution, with little resemblance to Mandriva. Currently it ranks 14th, in terms of popularity, according to the *DistroWatch* website.

### Installer
PCLinuxOS uses the Draklive-Install installer, which is a remnant of its Mandriva roots.

### Package Management
{% include_relative os-shot.html image="PCLinuxOS-KDE-Synaptic.png" float="none" description="Synaptic 0.57.2 running on PCLinuxOS under the KDE Plasma 4 desktop" width="1130px" %}
As previously mentioned PCLinuxOS uses APT-RPM for package management, with Synaptic as a preinstalled graphical front-end. APT-RPM has virtually identical syntax to APT, so for example Bash scripts refer to the [Debian](#debian) section of this post.

{% include_relative specs.md arch="i586, x86_64." origin="U.S.A." date="2005." ui="KDE, LXDE." shell="Bash." im="Graphical using Draklive-Install." type="Linux." base="Independent, originally forked from Mandriva Linux." rm="Rolling." tm="Linux beginners." pm="APT-RPM." %}

{% include_relative os-min.md cpu="i586." ram="384 MB. 1024 MB recommended." hdd="3 GB. 10 GB recommended." ims="656 MB." %}

{% include_relative os-ratings.md ob="≥7. Never attempted to install it on a removable drive, so I do not know the quality of its out-of-the-box support." bf="~8. Not enough experience with it to be confident as to this rating, but from what I can tell it is fairly user-friendly." cmb="&lt;7." doc="5. From what I can tell its documentation is not tip-top by any means." sup="? Never had to use their forum." sb="≥8. Never had any stability issues with it myself." mewi="5." oa="8." pm="7." sru="8. LXDE is available as a default desktop and is fairly lightweight." %}
