---
layout:        post
title:         "Virtualization and Linux"
date:          2016-03-12 +1000
categories:    linux, virtualization, docker, virtualbox
permalink:     /virtualization-and-linux/
redirect_from:
  - /2016/03/12/virtualization-and-linux/
---

Two programs, that I have been using on a daily, or at least, weekly basis are the free and open-source virtualization programs **Docker** and **Oracle VM VirtualBox** (or VirtualBox for short). These two programs are quite distinct from one another. There are several other virtualization programs available that are free and open-source and Linux-compatible, but these are the two that I have the greatest experience with and will hence be the main focus of this article. Before I describe them, I will need to clear up some terminology. The **host** operating system, or host machine, is the operating system or physical machine, on which the virtualization program is being run. The operating system, or machine, running inside the virtualization program, is called the **guest** operating system. The virtualized system, or machine, being run through the virtualization program, is also called a virtual machine (VM). The host machine can also be called the actual machine.

## Virtualization Programs

### Docker
[**Docker**](https://www.docker.com/) is written in Google's Go programming language and creates a container for virtualization. In this container, you can do most things you could on an actual machine, but the system uses the host's kernel and has access to far greater amounts of CPU and RAM than a VirtualBox VM would. Docker is best for cases in which you simply need to access the command-line of the guest operating system. Docker itself, is actually run from the command-line. It is especially useful, to me, when I wish to build packages for a distribution I am not presently using. It is possible to give docker containers access to your display server (on Linux systems this is usually X11), but this is not enabled by default. Docker machines usually take up significantly less hard drive space than their VirtualBox counterparts.

### VirtualBox
[**VirtualBox**](https://www.virtualbox.org/) is written in C and C++, and creates a miniature (in terms of the CPU, RAM and hard disk drive space available to it) version of the guest operating system. It is a graphical program. If you open your VirtualBox guest machine in full-screen (which can usually be done via pressing <kbd>Ctrl</kbd>+<kbd>F</kbd>, with <kbd>Ctrl</kbd> having to be your *right* <kbd>Ctrl</kbd> key), it should look identical to how it would if you were running it as your host machine.

### Packer
Another virtualization-related program I have used that is free and open-source and Linux-compatible is [**Packer**](https://www.packer.io/). It is quite distinct from Docker or VirtualBox, because unlike these programs it does not do virtualization itself, rather it creates a VDI (for VirtualBox) or VMDK (for the proprietary VMWare program) files, for a target operating system, based on the contents of JSON files written especially for it. VDIs and VMDKs are essentially the hard disk drive used by VirtualBox or VMWare VMs, respectively. I most often used it to install operating systems on a virtual disk image (VDI) file (which I would later open in VirtualBox) that I did not have to skill to install myself (such as Arch Linux, FreeBSD or Gentoo Linux). Nowadays, however, I seldom ever use it, as I have gained a better ability to install these systems myself.

### chroot
The final virtualization program, I would like to briefly mention is, the Unix `chroot` command. Using it, along with other Unix commands (such as `cp` and `mount`), it is possible to do some basic virtualization. For example, my Lenovo E531 laptop has three partitions on its main internal hard drive (`/dev/sda`), `/dev/sda1` is for Sabayon, `/dev/sda2` is for Swap and lastly, `/dev/sda3` is for Arch Linux (or whichever Linux distro I am presently using as my primary OS). Now, if I am using the operating system on `/dev/sda3`, like I presently am at the time of writing this, I could run:

{% include Code/coder.html line1="mount /dev/sda1 /mnt" line2="mount -t proc /proc /mnt/proc" line3="mount --rbind /dev /mnt/dev" line4="mount --rbind /sys /mnt/sys" line5="mount --rbind /run /mnt/run" line6="cp /etc/resolv.conf /mnt/etc/resolv.conf" line7="chroot /mnt /bin/bash" %}

in order to perform actions within my `/dev/sda1` partition as root, including, package management actions, such as:

{% include Code/coder.html line1="equo update && equo upgrade" %}

to update all the software on my Sabayon partition. This, if my understanding serves me correctly, is an example of virtualization using `chroot`.

## Building Packages with Docker
Docker can be used to build any Linux binary or source code package (if I am wrong, correct me, but every binary package I have attempted to build using it has succeeded) and to maintain ebuilds and PKGBUILDs for Gentoo and Arch Linux, respectively. The basic procedure boils down to:

{% include_relative 01-procedure.html %}

## Installing Operating Systems in VirtualBox
