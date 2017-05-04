---
layout:           post
title:            "How I switched from Arch Linux to openSUSE Tumbleweed"
date:             2016-02-10 +1000
categories:       opensuse-tumbleweed, linux, arch-linux
id:               "opensuse-tumbleweed"
permalink:        /arch-linux-to-opensuse-tumbleweed/
redirect_from:
  - /opensuse-tumbleweed/
  - /2016/02/09/opensuse-tumbleweed/
---

{% include Links/image.html image="KDE/openSUSE-Tumbleweed-KDE.png" width="1130px" float="none" description="openSUSE Tumbleweed with the KDE Plasma 5 desktop" %}

On 8 February 2016, I experienced an issue with Xorg / my graphics card on my Arch Linux installation after rebooting that prevented me from accessing SDDM, LightDM and the desktop environments I had set up (the exact time this was, would have been roughly 3-4 am, Australian Eastern Standard Time [AEST, or UTC+10]). I spent about an hour trying to fix it myself, guided by the *ArchWiki* documentation,  but then I asked for help at the [Arch Linux forums](https://bbs.archlinux.org/viewtopic.php?pid=1602691) and instead of receiving the help I was looking for, I received rude treatment from one of the forum's admins and a series of failed solutions from others in the forum. If all I was getting was failed solutions, with no abuse, odds are I would have stuck it out for a while longer, as obviously no one is God, we all make mistakes as we do not know everything, so I was prepared for several failed attempts to fix my problem before an actual successful solution would come along, but I have had to deal with this sort of abuse or rudeness before on other Linux forums and I was sick of it, so I decided to jump ship to **openSUSE Tumbleweed** (**OT**).

## Why openSUSE Tumbleweed?
The natural question is "Why openSUSE Tumbleweed? Why not *distribution X*?" Well, there were several factors guiding my decision. What I was looking for in a distribution included:

1. A rolling release model, as I loathe having to upgrade systems that use a standard release model (e.g., for three years, as I have previously stated on this blog, I used Ubuntu and only Ubuntu, as my Linux distribution and it has to be upgraded like this every six months), as it always seems something gets broken in the process.
2. Decently-sized (at least 20) team of developers maintaining its packages, repositories and other components, as I had past experience with a distribution with a small development team, Sabayon, and I knew from this distribution that no matter how "bleeding edge" they claim their system is, some packages inevitably slip through the cracks and become out-of-date.
3. A fairly popular distribution as more popular distributions tend to have better free support, like online forums and IRC channels.
4. An intuitive and easy-to-use automated installer, as while I had managed to install Arch without one, it made the process a little less straight-forward.
5. Enough stability so that I would never experience the graphics issues I had experienced with Arch Linux.
6. Easy and fast package management.
7. An easy package development process so that I could create packages myself without having to put in so much effort that I may as well be getting a university degree for it.
8. High quality of free documentation.

The distribution that fulfilled these criterion to the greatest extent, in my opinion (based on knowledge I had gained from running it in VirtualBox VMs and from reading other reviews), was openSUSE Tumbleweed, runners up were **Fedora** and **Manjaro Linux**. See openSUSE fulfills criterion 1-6 and 8, as for 7 well it seems it will be more difficult for me to pick it up than it was for me to pick up package development on Arch Linux / Manjaro Linux. Although I suspect it will not be quite as bad as learning to write ebuilds was when I was using Sabayon.

Fedora on the other hand, fulfills criterion 2-6 and to a lesser extent than openSUSE, criterion 8. Manjaro fulfills criterion 1-7 and (with the help of the *ArchWiki*) criterion 8. The reason I did not choose to go back to Manjaro was because, firstly I was curious as to what OT would be like to use and because Manjaro's software is not quite as bleeding edge as I would like. See Manjaro's software repositories are updated once a week (when updates from upstream, that is the Arch repositories, are allowed to trickle downstream into their repositories), roughly, which means that every week I would have a heap of packages that are to be upgraded, as opposed to OT in which the updated packages are released whenever they are created.

One review that made me think it might be the distribution for me, was [one](http://www.cio.com/article/3008856/open-source-tools/is-opensuse-tumbleweed-good-enough-for-a-seasoned-arch-user.html) by Swapnil Bhartiya at CIO.com. It was written from the point of view of an experienced Arch user and it mentioned some strong points of OT over Arch Linux.

## How I installed openSUSE Tumbleweed
I installed openSUSE Tumbleweed from the netinstall ISO image, as it is much smaller (~100 MB) than the larger DVD image (~4.3 GB) and getting the DVD image would take me at least three hours with my Internet connection. I had been up for roughly 13 hours at the time, so I felt if I had to wait three hours I would probably be too tired to go through the ~1 hour installation process for OT. Fortunately the netinstall image more than sufficed for the installation, although it took me about two hours to install OT using this method. I had to borrow my mum's Ethernet cable to install OT though, as it did not provide out-of-the-box support for my Broadcom chipset. Then I installed the [broadcom-wl](https://software.opensuse.org/package/broadcom-wl) package from the home:X0F:HSF:Kernel repository. Later I used the PackMan repository's broadcom-wl package as it is better-maintained than the home:X0F:HSF:Kernel repository.

## Building RPM Packages
Two days ago, I spent fairly minimal time using openSUSE as when I installed it, I had been up for ~15 hours and was near the time I would go to bed. Yesterday, my first full day using openSUSE, I encountered an issue that prompted me to [ask a question](https://forums.opensuse.org/showthread.php/513459-Atom-spec-file-is-not-building-an-RPM-or-SRPM-why?p=2753208#post2753208) at the openSUSE forums. The response I got at these forums (which was partly from a forum admin too, ironically) was much more polite than I received at the Arch forums and I eventually got the answer I was looking for. See I wanted to be able to write a spec file for building the Atom text editor (and yes I do know that Atom provides official binary package releases for RPM-based distributions, openSUSE included, but I wanted to see if I could do it myself).

spec files are quite different from PKGBUILDs in both their syntax and how they are built. With PKGBUILDs you can build them in any directory you want, so long as you have write privileges in the directory you are building in, while with ebuilds and spec files there are strict requirements on the directory structure in which the spec file being used is located. See to build an RPM from a spec file you need to follow [this guide](http://fedoraproject.org/wiki/How_to_create_an_RPM_package) at the *Fedora Wiki*, and part of this guide is creating a new "mock" user called makerpm, then login as this user from the command-line (using something like {% include Code/coders-rb.html line1="su - makerpm" %} and setup the directory structure required for RPM building.

Fortunately, however, for openSUSE there is an extra method for building RPM packages without having to login to a mock account, it is done via the **Open Build Service** (**OBS**). It is a system by which you can write a spec file, submit it to your own unofficial repository (which you can create and maintain for free) that is hosted by build.opensuse.org, along with required source files, patch files and build.opensuse.org will build a RPM package, which you can install yourself (including via the one-click install system), and others are also allowed to install these packages.

Here is the spec file I originally used to create this RPM file for Atom:

~~~
Name:           atom
Version:        1.4.3
Release:        0
Summary:        A hackable text editor for the 21st century
License:        MIT
Group:          Productivity/Publishing/Other
Url:            https://atom.io/
Source0:        %{name}-%{version}.tar.gz
BuildRequires:  git-core
BuildRequires:  hicolor-icon-theme
BuildRequires:  npm
BuildRequires:  nodejs-packaging
BuildRequires:  libgnome-keyring-devel
BuildRequires:  python-setuptools
BuildRequires:  update-desktop-files
# MANUAL BEGIN
Requires:       nodejs
Requires:       python-http-parser
# MANUAL END
BuildRoot:      %{_tmppath}/%{name}-%{version}-build

%description
Atom is a text editor that is modern, approachable, yet hackable to the core
- a tool you can customize to do anything but also use productively without
ever touching a config file.

%prep
%setup -q
sed -i -e 's/<%= installDir %>/\/usr/g' \
      -e 's/<%= iconPath %>/atom/g' \
      -e 's|text/plain;|application/javascript;application/json;application/postscript;application/x-csh;application/x-desktop;application/x-httpd-eruby;application/x-httpd-php;application/x-httpd-php3;application/x-httpd-php4;application/x-httpd-php5;application/x-latex;application/x-msdos-program;application/x-ruby;application/x-sh;application/x-shellscript;application/x-sql;application/x-tcl;application/x-tex;application/xhtml+xml;application/xml;application/xml-dtd;application/xslt+xml;text/css;text/csv;text/html;text/plain;text/xml;text/xml-dtd;text/x-asm;text/x-bibtex;text/x-boo;text/x-c++;text/x-c++hdr;text/x-c++src;text/x-c;text/x-chdr;text/x-csh;text/x-csrc;text/x-dsrc;text/x-diff;text/x-eiffel;text/x-fortran;text/x-go;text/x-haskell;text/x-java;text/x-java-source;text/x-lua;text/x-makefile;text/x-markdown;text/x-objc;text/x-pascal;text/x-perl;text/x-php;text/x-python;text/x-ruby;text/x-scala;text/x-scheme;text/x-sh;text/x-tcl;text/x-tex;text/x-vala;text/yaml;|g' \
      resources/linux/atom.desktop.in

%build
# Hardened package
export CFLAGS="%{optflags} -fPIC -pie"
export CXXFLAGS="%{optflags} -fPIC -pie"
until ./script/build 2>&1; do :; done

%install
script/grunt install --install-dir "%{buildroot}%{_prefix}"
# copy over icons in sizes that most desktop environments like
for i in 1024 512 256 128 64 48 32 24 16; do
    install -Dm 0644 /tmp/atom-build/icons/${i}.png \
      %{buildroot}%{_datadir}/icons/hicolor/${i}x${i}/apps/%{name}.png
done
%suse_update_desktop_file %{name}

%post
%desktop_database_post
%icon_theme_cache_post

%postun
%desktop_database_postun
%icon_theme_cache_postun

%files
%defattr(-,root,root,-)
%doc README.md docs/
%{license} LICENSE.md
%{_bindir}/atom
%{_bindir}/apm
%dir %{_datadir}/atom
%{_datadir}/atom/*
%{_datadir}/applications/atom.desktop
%{_datadir}/icons/hicolor/*/apps/%{name}.png
%exclude %{_datadir}/%{name}/libgcrypt.so.*
%exclude %{_datadir}/%{name}/libnotify.so.*

%changelog
~~~

you can find other spec files I have written [here](https://build.opensuse.org/project/show/home:fusion809) at build.opensuse.org.

## Further Comments
I consider openSUSE a fairly bloated operating system in terms of how large its DVD installation media is and in my case, since I used the netinstall medium, the total size of the downloads required to install openSUSE. Despite this I found it had several missing packages including the GNU nano text editor, the multimedia codecs required to play most media files in VLC and the driver required to use my Broadcom Wi-Fi chipset. Quite frankly I have found it the least out-of-the-box Linux distribution out there that has an automated installer. Even VirtualBox would not work after I installed it using ZYpp, rather I also had to install the virtualbox-host-source package, run:
{% include Code/coder.html line1="cd /usr/src/kernel-modules/virtualbox" line2="make" line3="make install" %}
and {% include Code/coders-fs.html line1="modprobe -a vboxdrv" %} I suspect part of the reason is because openSUSE has strict licensing requirements (namely that they be free and open-source) for software in its official repositories and the broadcom-wl driver, along with the multimedia codecs I required, are not FOSS. Despite this, to date I have only received help (that is, no abuse, just helpful advice) from their forums even though I have asked six questions there since when I started using OT on 8 February 2016, which I am mentioning as I feared their welcomeness would run dry, if I asked so many questions in such a small period of time.
