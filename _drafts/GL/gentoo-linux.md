---
layout:           post
date:             2017-07-01
last_modified_at: 2017-06-09 04:19:06
title:            "Taming the Penguin: a guide to Gentoo Linux"
permalink:        /gentoo-linux/
---

After some five years of looking for an operating system that suites me I have finally found my home and it is [**Gentoo Linux**](https://gentoo.org/). This is not to say it is perfect but it seems as close to perfect as I have found. While it can be challenging to install, it is still definitely worth it. In this post I will guide one through the installation process in a, hopefully, simple and informative manner and also discuss some useful advice to be used post-installation. Beware the Gentoo Wiki has a mighty fine [handbook](https://wiki.gentoo.org/wiki/Handbook:Main_Page) to guide one through installation and some post-installation tasks, this article is designed to be an alternative take on it, with some simplification. 

<!-- 1 -->
## About Gentoo Linux
Gentoo Linux is a flexible, do it yourself-style Linux distribution, with its own source-based package manager known as [Portage](https://wiki.gentoo.org/wiki/Portage). Installing Gentoo is a great way to learn about Linux. The Portage package manager is written in Python and as the adjective "source-based" suggests it, by default, installs software that it locally compiles from source code, usually immediately before the package is installed (although it is possible to just compile the package and compress it as a `.tbz2` binary package that can be installed later). This is as opposed to most Linux package managers which installs software from pre-compiled binaries found within the repositories of the distribution. As such installing packages from source with Portage (if one includes the compilation that is performed immediately before the installation itself) takes much longer than installing the corresponding package with a binary package manager like pacman. Generally speaking setting up a Gentoo system with a full desktop environment like KDE Plasma 5 will take several hours, if not days. 

Despite this Portage can be set up to install software from binary packages. These binary packages can be built using Portage using the `-b` or `-B` options for the `emerge` command. If one wishes to install binary packages with Portage from a repository one should note that Gentoo has no *official* binary package repository so one will have to use an unofficial binary package repository. The most notable example of such a binary package repository I can think of is that of [Calculate Linux](http://www.calculate-linux.org/). 

<!-- 2 -->
## Minimum requirements
If you have a modern computer, with ample RAM (256 MB or more), a reasonably-sized disk drive (at least 2.5 GB) and a decent set of processors in it (I would recommend i3, i5 or i7, but alternate processors can be used, refer to the [CPU subsection](#CPU) for details) you should be able to skip the rest of this section. 

### CPU
Alpha, AMD64 (64-bit x86; i3, i5 and i7 all fit into this category), HPPA, IA64, MIPS, PPC, PPC64, SPARC and x86 (i486 or later; i386 is **not** compatible) processors are all compatible with Gentoo Linux. The more powerful your processor(s) are, the faster packages will build which is definitely a plus. Most modern PCs have at least two core processors.

### RAM
The amount of RAM required is not really set in stone. The Gentoo Handbook indicates that at least 256 MB RAM should be available if you are using the minimal Gentoo CD installation medium, but theoretically this could be reduced by using a Linux distribution, or live Linux medium with lesser requirements, from which one can follow the steps in this guide and the Gentoo Handbook to build the distribution. Any Linux distribution or Linux live medium could, in theory, be used to build a Gentoo system, provided it has an internet connection and a set of widely available pieces of command-line software like the GNU core utilities package (usually named <span class="package">coreutils</span>), something to download files from a specified URL (like cURL/wget), tar and bzip2.

Depending on which packages you wish to use you may need far more RAM than 256 MB. Some packages require a certain amount of RAM in order for them to build properly. I have seen one package, {% include Packages/gentoo.html package="www-client/chromium" puncr="," %} that under certain circumstances requires up to 16 GB RAM to build! 

### Disk space
The minimum requirement for installing Gentoo is about 2.5 GB disk drive space, although as one can probably guess more would be better, especially if one wishes to install large collections of software like GNOME and KDE Plasma 5. 

<!-- 3 -->
## Preparation
Boot a Linux system (whether live or installed) from which you can install Gentoo Linux. This system you boot and use to install Gentoo Linux will henceforth be referred to as the **host system**. The Gentoo Handbook recommends using either the Gentoo minimal CD image or Gentoo DVD image as a live session from which to install Gentoo. I personally recommend using whichever distribution whether live or installed you are most comfortable with. I have successfully used the Gentoo DVD, SystemRescueCd (a Gentoo-based live medium for rescuing damaged Linux systems and recovering data), Manjaro Linux (specifically its 17.0 live medium), Funtoo Linux and openSUSE Tumbleweed as the host system on which I installed Gentoo. If you have enough RAM and CPU it would be ideal if the system you boot has an X server running so that you can copy instructions from either this guide or the Gentoo Handbook. 

You will also need to set up a network connection for use during installation. Beware you will need to download at least the stage3 tarball which is roughly, as of 13 June 2017, 100-300 MB in size, depending on the specific architecture and software characteristics of the stage3. The size of the stage3 tarball is likely to change in the future to see its current size see <a href='https://gentoo.org/downloads/' link='_blank'>https://gentoo.org/downloads/</a>. It would also be advisable to download a Portage tree snapshot during the installation which is a further 70 MB in size. Quite often one will also need to update a few packages which will take some extra data (which greatly depends on the specifics of the updates). I would say the minimum data allowance you should have before you try to install a Gentoo system is 300 MB and that greatly depends on your build settings, your architecture, your preferences, <i>etc.</i>

### Partitioning
It is important to partition your disk appropriately before installing Gentoo. You can do this using graphical tools (like GParted) or command-line tools. My personal preference is command-line tools, mostly because they are less likely to crash on you and give you grief, but they are less user-friendly. Regardless of method one should be able to specify a *type* for the partitions. The most popular command-line tools for doing this include: cfdisk, fdisk and gdisk.fdisk and gdisk are specific to master boot record (MBR) and GUID Partition Table (GPT) partition tables, respectively, while cfdisk can be used for both. MBR is an older partition table from the 1980s with a limitation placed on partition size of just 2 TB. Back in the 1980s this limitation was no big dilemma as 2 TB was way out of their league. Nowadays, however, 2 TB is within the size range of modern disk drives. MBR is more popular, but not exclusive, to systems with BIOS firmware. GPT is a newer partition table that can hold partitions with a size of up to 9 ZB.  

There is only one partition that is compulsory for all Gentoo Linux systems:

* Root partition. This is where all files belonging to the distribution, including your personal files (unless they are stored on a separate home partition) and package files, are stored. This partition should have a "Linux" type. 

Another partition that is also required if you want to, or need to manage the bootloader using Gentoo Linux (as opposed to other operating systems you may be dual-booting with) is:

* BIOS boot / EFI partition. If you are using a legacy BIOS system (like a PC that originally came with Windows 7 or earlier) you will need a BIOS boot partition, while if you are using a system with UEFI firmware you will need a EFI partition. This is where all files essential to your bootloader, along with your Linux images (vmlinuz) and initramfs are kept. If you are dual-booting and planning to set up the bootloader (like GRUB) using your other operating system will can ignore this requirement and all further mentions of this partition. BIOS partitions usually have the BIOS boot type, while EFI partitions have the EFI type. 

If your system has less than 4 GB RAM it will likely be helpful to have a swap partition also, although alternatives like zram and swap files are available. Likewise if you want to back up your personal data (like your desktop environment configuration, your application settings, your documents, *etc.*) in case you ever have to reinstall Gentoo or install a new operating system in Gentoo's place you may wish to create a separate home partition. 

### Making your file systems

<!-- 4 -->
## Stage3
Download the stage3 tarball (links can be found <a href='https://gentoo.org/downloads/' link='_blank'>here</a>) specific to your architecture and preferences, for example, there are stage3 tarballs containing systemd for those that favour it over OpenRC as an init system. 
