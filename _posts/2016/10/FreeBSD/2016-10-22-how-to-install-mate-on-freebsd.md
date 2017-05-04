---
layout:           post
date:             2016-10-22 +1000
title:            "How to install the MATE desktop environment on FreeBSD 11.0"
permalink:        /mate-freebsd/
redirect_from:    /how-to-install-mate-on-freebsd/
last_modified_at: 2016-10-22 07:23 +1000
categories:       howto, freebsd, mate, installation-guides
---

{% include Links/image.html image="operating-systems/freebsd-11.0-mate-1.12.png" width="1130px" float="none" description="MATE 1.12 desktop running on FreeBSD 11.0" %}

This is merely a short guide on how to install MATE on FreeBSD 11.0. I normally do not do these sort of guides, as I prefer to leave it up to the official documentation of the operating system to guide one through the process of installing desktop environments, but in this case I have decided to make an exception as the installation process of MATE on FreeBSD is not covered in the [official FreeBSD handbook](https://www.freebsd.org/doc/handbook/x11-wm.html). I have found one [unofficial guide](http://linoxide.com/linux-how-to/install-freebsd-10-2-mate-desktop/) to installing MATE on FreeBSD but it has some errors in it, so I would like to create a completely accurate guide.

## Step 1: The actual installation
Run:

{% include Code/coder.html line1="pkg install -y mate mate-desktop xorg xf86-video-fbdev slim" %}

This is where the aforementioned guide got it wrong, as they omitted the `slim` package from this command.

## Step 2: Editing your rc.conf file
I would recommend running:

{% include Code/coder.html line1="pkg install -y nano" %}

Unless, of course, you are a vi fan in which case no installation is required as vi comes pre-installed with FreeBSD 11.0. After performing whatever command you need to install the editor of your choice use it to open your `/etc/rc.conf` file. If you have choosen to use nano to do this run:

{% include Code/coder.html line1="nano /etc/rc.conf" %}

And add the following lines to this file:

~~~bash
moused_enable="YES"
dbus_enable="YES"
hald_enable="YES"
slim_enable="YES"
~~~

## Step 3: Creating a xinitrc file
Create a `.xinitrc` file in the home directory of whichever user account you intend to log into MATE as. This file should have the contents:

~~~bash
exec mate-session
~~~

## Step 4: Reboot and login
{% include Links/image.html image="operating-systems/freebsd-11.0-slim.png" width="1130px" float="none" description="SLiM running on FreeBSD 11.0" %}
At this stage it is time to reboot FreeBSD. When FreeBSD is finished rebooting you will be welcomed with the SLiM display manager as shown in the above screenshot. Merely enter your login credentials (specifically for the user account in which you placed your `.xinitrc` file in the previous step) and you should be able to login to MATE.
