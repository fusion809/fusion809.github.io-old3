---
layout:     post
title:      "How I managed to install Arch Linux and set it up"
categories: arch-linux, installation-guide
id:         "arch-linux-setup"
date:       2016-01-20 +1000
permalink:  /how-to-install-arch-linux/
redirect_from:
  - /installing-arch-linux/
  - /2016/01/20/installing-arch-linux
---
{% include Links/image.html image="operating-systems/Arch-Linux-GNOME.png" float="none" width="1130px" description="GNOME 3.18 running on Arch Linux installed on this removable drive" %}

On 19 January 2016 I installed Arch Linux on a removable drive, using my Lenovo Laptop, after trying and failing to install this distro on this removable drive several times before. Major hurdles in the past were my Broadcom chipset (specifically BCM43228), inexperience with installing Arch Linux on anything but a VirtualBox VM (for which I used install scripts written by others) and inexperience with installing any Linux distribution without some sort of automated installer.

## Hardware Specs
For anyone that is interested, this laptop I used to install Arch Linux on the removable drive, had the following specs:
{% include Code/gist.html id="b44fa06f1ed0075af0cc" %}

## Creating the ISO
{% include Layouts/note.md note1="I do not have perfect memory &mdash; I may have missed the odd command or mixed up when I ran the command, whether it be from the live session or from my Manjaro session, <i>etc.</i>" %}
I started off by creating a releng ISO by following the [archiso](https://wiki.archlinux.org/index.php/Archiso) guide at the ArchWiki on an Arch VirtualBox VM. I found the section entitled ["Installation without Internet access"](https://wiki.archlinux.org/index.php/Archiso#Installation_without_Internet_access) especially alluring, as it sounded like what I wanted, but confusing and difficult for me to follow. It was so confusing that at first I thought it was about creating a live ISO without an Internet connection, while it is really about creating a live ISO that can be used to install Arch Linux without an Internet connection.

Of course, the natural answer to such a query is "Ask for help via official channels such as the IRC Channel or Forum", well when I initially misunderstood the purpose of the "Installation without Internet access" section, I asked for help on the {% include Links/irc.html channel="archlinux" puncr="," %} a user gave me a response that gave me the sense that I was being a burden to them. Plus if you read the [Arch forum rules](https://bbs.archlinux.org/viewtopic.php?id=130309), you may understand that me, a less than advanced Linux user, felt that I would be called a "Help Vampire" as to them it might seem like I just want them to hand-hold me through the process. My standpoint on this, is that I am willing to do as much of the work myself as I can, but I do not have a computer science degree, I do not have an in-depth understanding of Bash scripting and Unix commands, or technology in general, so some "hand-holding", from their point of view, may be necessary. I am mentioning this, because if this fear of mine is unjustified, I would like someone with experience on these forums or IRC channel to:
1. Tell me.
2. Get the Arch Linux forum rules to be rephrased in a less misleading way, I doubt I am the only person afraid to ask questions there.

I ended up settling on just creating an ISO for Arch following the instructions for those with a net connection on the target machine, with custom repos containing i686 and x86_64 packages for `broadcom-wl`, `broadcom-wl-dkms`, `package-query` and `yaourt` that were all built from the AUR. I was hoping that this might enable me to boot the live medium with an automatic connection to the Wi-Fi. To my surprise when I booted the archiso live session not one of the custom packages were installed and I could not figure out a way to install them without an Internet connection. So I ended up having to connect my Laptop to an Ethernet cable, which I took from my mum's computer (I have no spare cables, this is partly why I wanted to just use my Wi-Fi from the beginning) and using the resulting Ethernet connection to install Arch. See in my home I sit on the couch with my laptop and a little over a metre to my right is the computer room where my mum and dad's desktop computers lie. In there is also the modem that provides my parent's desktop computers Ethernet and my Wi-Fi. There are no spare power points in this computer room too, so I had to disconnect my laptop from its battery recharger. My laptop's battery had at most two hours worth of power in it. This is another part of the reason why I wanted to use my Wi-Fi.

## Booting the Live Session
Fortunately before I booted my archiso live session I had created a partition on which to install Arch Linux. This partition was called `/dev/sdc3` in my archiso live session so I ran:
{% include Code/coder.html line1="mount /dev/sdc3 /mnt" line2="pacstrap /mnt base" line3="genfstab -p /mnt >> /mnt/etc/fstab" line4="arch-chroot /mnt" %}
as root. Then I ran, in the chroot, the commands:
{% include Code/coder.html line1="echo 'brenton-pc' >> /etc/hostname" line2="ln -s /usr/share/zoneinfo/Australia/Brisbane /etc/localtime" %}
uncommented `en_AU.UTF-8` in my `/etc/locale.gen` file and then ran:
{% include Code/coder.html line1="locale-gen" line2="echo LANG=en_AU.UTF-8 > /etc/locale.conf" line3="mkinitcpio -p linux" line4="passwd root" %}
Then I set my root password and ran {% include Code/coders.html line1="pacman -S grub --noconfirm" puncr="," %} I tried to follow the ArchWiki guide on setting up GRUB, but it was over my head, so I just hoped that installing GRUB would somehow be sufficient to use it as a bootloader. Then I rebooted and attempted to boot from my Arch Linux installation on `/dev/sdc3`. This failed to boot. At this point I felt like giving up, but instead I exited, started Manjaro and unplugged the Ethernet cable.

## Configuring GRUB
On Manjaro I conducted a Google Search in Chromium, I cannot remember it exactly but it was roughly along the lines of updating the GRUB bootloader. See my Manjaro installation on my internal drive has its own GRUB bootloader that I was hoping to use. This worked and I learned that running `update-grub` should add an Arch entry to my bootloader and it worked. Then I rebooted and entered the Arch session, but it failed to boot properly and it gave me an error message indicating that it could not detect a device with the UUID specified for this session and started a `rootfs` prompt. Yet again I felt like giving up, as this was so frustrating, but instead I rebooted into Manjaro again. I then did another Google search on keywords I remembered from this rootfs session and realized if I could determine the device's UUID and edited `/boot/grub/grub.cfg` (on my Internal drive), adjusting the UUID mentioned for the Arch session, accordingly I could fix this problem. Although this was after a few failed attempts to fix the problem, following solutions I had found from this Google Search. Each time to test if the problem was fixed, I of course rebooted, which added to my desire to give up. When I successfully booted into my Arch session noticed that my Wi-Fi was still offline.

## Setting up the Wi-Fi
Then I booted Manjaro and I ran:
{% include Code/coder.html line1="mount /dev/sdc3 /mnt" %}
but to my surprise the `/dev/sdc3` device could not be found, instead my removable drive was at `/dev/sdd3`, so I instead ran:
{% include Code/coder.html line1="mount /dev/sdd3 /mnt" line2="arch-chroot /mnt" %}
then in this arch-chroot I ran:
{% include Code/coder.html line1="useradd -m -g wheel fusion809" %}
to create a user entitled fusion809, with a home folder. Then I ran {% include Code/coders.html line1="nano /etc/sudoers" puncr="," %} uncommented the `wheel`-related lines, so that I could run the `sudo` command as fusion809. Then I entered a standard user session for fusion809 (with {% include Code/coders.html line1="su - fusion809" puncr=")" %} and ran:
{% include Code/codeu.html line1="git clone https://aur.archlinux.org/package-query.git" line2="pushd package-query" line3="makepkg -si --noconfirm" line4="popd" line5="git clone https://aur.archlinux.org/yaourt.git" line6="pushd yaourt" line7="makepkg -si --noconfirm" line8="popd" line9="git clone https://aur.archlinux.org/broadcom-wl.git" line10="pushd broadcom-wl" line11="makepkg -si --noconfirm" line12="popd" %}
to install Yaourt and broadcom-wl. Why did not I use Yaourt to install `broadcom-wl`? Well because every new kernel I install I must rebuild and install this package, so I felt that I should not use Yaourt (as Yaourt places PKGBUILDs in a subfolder of `/tmp` which is cleaned with each reboot). Then to ensure that my Wi-Fi is loaded on boot I ran:
{% include Code/coder.html line1="wifi-menu -o" %}
after installing the `dialog` package, entered my Wi-Fi network details and ran {% include Code/coders.html line1="netctl list" %} (to check whether I configured `wifi-menu -o` correctly), this returned `wlp4s0-SSID` where `SSID` was my Wi-Fi SSID. I then ran:
{% include Code/coder.html line1="netctl enable wlp4s0-SSID" %}

## Home at Last
At this point I could have rebooted (to the standard command-line interface of Arch), but instead I wanted to install a GUI before I rebooted so I ran:
{% include Code/coder.html line1="pacman -S mate mate-extra xorg sddm --noconfirm" line2="systemctl enable sddm" %}
and rebooted. At this point I finally had the Arch Linux experience I wanted.
