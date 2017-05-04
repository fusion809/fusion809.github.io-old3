---
layout:            post
date:              2016-10-17 +1000
title:             "My Sunday, the 16th of October"
permalink:         /my-sunday-the-16th/
categories:        linux, fedora, ubuntu
last_modified_at:  2016-10-17 17:18:00 +1000
---

My Sunday, the 16th of October 2016 started out quite a normal day. When I woke up at 9 am I started installing some needed software on a newly created Ubuntu 16.10 installation. Previously this 16.10 partition had openSUSE Tumbleweed on it. I personally find openSUSE Tumbleweed likened to wet cement, in how hard it is to do basic things on it (like install proprietary firmware and codecs), compared to Arch Linux and Ubuntu. Plus, I find it more prone to bugs and bug-fixing from a user point-of-view tends to be more challenging on openSUSE Tumbleweed, in my opinion, than say on Arch Linux. As building custom packages (like those with patches applied or other attempted fixes) on Arch Linux is easier using `makepkg` than using openSUSE Tumbleweed's `rpmbuild`. My internal drives were partitioned as so:

<pre>
/dev/sda
&rarr; /dev/sda1 &mdash; EFI boot partition.
&rarr; /dev/sda2 &mdash; 16.04 installation (ext4). Approximately 180 GB in size.
&rarr; /dev/sda3 &mdash; Swap partition.
&rarr; /dev/sda4 &mdash; 16.10 installation (ext4). Approximately 800 GB in size.
/dev/sdb
&rarr; /dev/sdb1 &mdash; Arch Linux installation (ext4). Approximately 1 TB in size.
&rarr; /dev/sdb2 &mdash; Swap partition.
</pre>

Later that day, I decided to install Fedora 24 on my old Ubuntu 16.04 partition, as I felt my 16.10 installation was now capable of doing everything my 16.04 installation had been used for. Why? Well, while I had tried Fedora 24 on a removable hard-drive and on virtual machines, I wanted to see how it compared to Ubuntu when installed on an internal drive.

The installation (specifically of the MATE Compiz edition) was successful, using Fedora's Anaconda installer, and it actually took less time than I had anticipated. Then I rebooted and logged into my Ubuntu 16.10 installation. What I wanted to do in my 16.10 installation was to, via a chroot into my Fedora 24 installation, install all the software I needed, including the Broadcom WiFi firmware (from the RPMFusion repository) I needed in order to use the WiFi on my Fedora 24 installation. This seemed to be successful, but when I booted into my Fedora 24 installation and tried to log into a MATE session, I found a major bug. For a reason that baffled me I could not log in! I tried pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd>, to get a TTY session but that too would not allow me to log in.

I think the reason for this might be because I followed the RuneScape NXT Client installation instructions [here](https://www.reddit.com/r/runescape/comments/46n3fh/using_nxt_on_fedora/), after changing the version number, `2.1.3`, to `2.2.2` (the latest release of the NXT Client). The reason why I think this is responsible, is that I know from VirtualBox VMs that Fedora is a very touchy operating system when you move files into the `/usr` folder, without using the DNF package manager to do so. This I learnt in the early stages of testing my [`atom-installer`](https://github.com/fusion809/atom-installer), [`brackets-installer`](https://github.com/fusion809/brackets-installer), [`komodo-installer`](https://github.com/fusion809/komodo-installer), [`lighttable-installer`](https://github.com/fusion809/lighttable-installer) and [`vscode-installer`](https://github.com/fusion809/vscode-installer) programs.

After I learnt my Fedora installation was a bust I decided to delete the Fedora partition and resize my Ubuntu 16.10 to take up the freed space. This I did on my Arch Linux installation. Unfortunately GParted crashed mid-resizing and my Ubuntu 16.10 installation was essentially destroyed. I then booted my Fedora 24 live USB and installed Fedora 24 in the space my 16.10 installation was. This I did so I could boot it and create a live USB for Ubuntu 16.04 on it. See on my Arch Linux partition I had a Ubuntu 16.04.1 ISO, ready to be used to create a live USB for this OS. Something I noticed was that the bootloader (GRUB2) installed by Fedora 24 would not boot my Arch Linux installation. It had an Arch Linux entry, but whenever I clicked them they reported that they could not find `initrd` and `linux`, so they took me back to the bootloader. Oh and yes, I did run `grub2-mkconfig -o /boot/grub2/grub.cfg`, in an attempt to fix this problem, but it failed to fix it. Ubuntu, on the other hand, has never given me this trouble.

{% include Links/image.html image="operating-systems/Ubuntu-MATE-16.04-20161017.png" description="My Ubuntu 16.04 MATE desktop." width="1130px" float="none" %}

After I created the live media for 16.04 I installed 16.04 on my `/dev/sda` partition. Now I am quite content to stick to my present operating systems, partly out of fear of another massive loss of data during resizing of partitions, like I experienced with my previous 16.10 installation. The Arch Linux entry in my Ubuntu's GRUB2 bootloader works fine. Now partition table looks like:

<pre>
/dev/sda
&rarr; /dev/sda1 &mdash; EFI boot partition.
&rarr; /dev/sda2 &mdash; 16.04 installation (ext4). Approximately 1 TB in size.
&rarr; /dev/sda3 &mdash; Swap partition.
/dev/sdb
&rarr; /dev/sdb1 &mdash; Arch Linux installation (ext4). Approximately 1 TB in size.
&rarr; /dev/sdb2 &mdash; Swap partition.
</pre>
