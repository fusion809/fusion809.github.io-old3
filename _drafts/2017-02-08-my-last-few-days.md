---
layout:           post
date:             2017-02-08 +1000
title:            My days of late
permalink:        /my-last-few-days/
categories:       experiences, Linux, Arch-Linux, ubuntu, openSUSE, Fedora
last_modified_at: 2017-02-06 +1000
---

Between the 3rd and 5th of February 2017 I made a major transition from triple-booting Arch Linux, Fedora 25 and Ubuntu 16.04.1 to dual-booting Fedora 25 and openSUSE Tumbleweed. In this post I am reviewing the sequence of events that lead me to this transition. 

## Part 1: The Lead Up
It all started when I realized that my Arch Linux system was busted. At this point of time I had the following partition scheme:

~~~
/dev/sda
  /dev/sda1 — EFI boot partition, originally created by Ubuntu, but used by Fedora. 
  /dev/sda2 — Ubuntu 16.04.1 root partition.
  /dev/sda3 — Swap partition for Ubuntu 16.04.1.
  /dev/sda4 — Fedora 25 root partition.
/dev/sdb
  /dev/sdb1 — Arch Linux root partition.
  /dev/sdb2 — Swap partition for Arch Linux. 
~~~

For some bizarre reason it would not start its GUI (even though it had GNOME, KDE Plasma 5, LXDE, MATE and several other desktop environments installed) on start-up, even though I had configured it to do so. The last time I had booted it (a month or so prior) its GUI started fine on start-up. Its display manager (which was originally SDDM) had been configured to start-up on boot (as I had enabled it using the `systemctl` command of systemd) and while it tried to start the display manager it always failed to load properly (leaving me with either a blank screen or with the systemd boot screen). This was regardless of which boot manager I used, as I did switch it to GDM and LightDM after realizing SDDM was not working. 

I had also experienced some bootloader issues at this stage. I originally had been using Fedora's GRUB2 bootloader, as it was the one my system used by default. I noticed it could not boot Arch Linux (as when I tried to boot it was giving errors described in [this thread][1]. The solution offered there by mstefano80 failed, however) or Ubuntu, even though it previously had been able to. So I then decided to re-install GRUB2 via a chroot into my Arch Linux partition. This bootloader managed to start Arch Linux without a problem (except the aforementioned GUI bug), but not Fedora or Ubuntu.

At this point I thought my only option to fix this bootloader problem was to reinstall Fedora 25 and pray that worked. Unfortunately, as I was creating a live USB for Fedora I accidentally erased `/dev/sda` as I ran:

{% include Code/coder.html line1="dd bs=4M if=/path/to/fedora/iso of=/dev/sda status=progress && sync" %}

when I meant to run:

{% include Code/coder.html line1="dd bs=4M if=/path/to/fedora/iso of=/dev/sdd status=progress && sync" %}

as `/dev/sdd` was the USB I wanted to turn into a live Fedora USB. Running this command with `/dev/sda` completely wiped my operating systems on `/dev/sda`, so I then decided I might give openSUSE Tumbleweed (OT) another try instead of just installing Fedora on `/dev/sda`. The main reason why I favoured OT over Fedora was because Fedora follows a fixed release model with a new release every six months (although they have been considering switching to a new release every twelve months) and I much prefer a rolling release model, which OT uses. A second reason for this choice was that the Anaconda installer of Fedora has a nasty habit of freezing up on me (while the YaST2 installer of openSUSE does not share this habit), becoming unresponsive for over 10 minutes after I click "Continue" at its first stage (selecting the language used by the installer, I usually use English (AU)), for further details see [this question][2] of mine at Ask Fedora.

<!-- Links -->
[1]: https://bbs.archlinux.org/viewtopic.php?id=192296
[2]: https://ask.fedoraproject.org/en/question/101267/is-it-possible-to-install-fedora-without-using-anaconda/
