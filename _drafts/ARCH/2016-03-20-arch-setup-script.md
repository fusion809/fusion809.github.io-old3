---
layout:         post
title:              "How to setup Arch Linux using my automated scripts?"
date:             2016-03-20 +1000
permalink:  /arch-setup-script/
categories:  arch-linux, shell-scripts
---

In the following post I describe a series of shell scripts (found in my [`arch-setup`](https://github.com/fusion809/arch-setup) GitHub repository) I wrote for the purpose of automating and simplifying the installation process of Arch Linux. Regrettably, I doubt that anyone at the [Arch Linux forums](https://bbs.archlinux.org) will be willing to help you, if you choose to use my installation scripts, as they believe that all Arch users should  also believe in their "Do It Yourself" (DIY) attitude towards the system, that forbids any form of automation to the installation process. So if you need help I suggest you start a [new issue](https://github.com/fusion809/arch-setup/issues/new) for this GitHub repository. If you would like to fix some problems with these scripts yourself, I would suggest cloning my repo and starting a [new pull request](https://github.com/fusion809/arch-setup/pulls) with your changes.

To get a tarball snapshot of the `arch-setup` repo, run:

{% include Code/coder.html line1="wget -cqO- https://git.io/vagB2 | tar -xz" %}

## Scripts
The `install-base.sh` script installs the Arch Linux base system, with the necessary packages to connect to the Wi-Fi with a Broadcom chip. The only thing you need to do after booting this base install is run {% include Code/coders.html line1="wifi-menu -o" %} (which will prompt you to select your desired Wi-Fi network, enter its passphrase) and then {% include Code/coders-fs.html line1="netctl start $ID" %} Where `$ID` is the ID of the Wi-Fi network you wish to connect to. To determine available Wi-Fi networks and their IDs run {% include Code/coders-fs.html line1="netctl list" %} If you are using a PC with BIOS firmware, then this script will set up GRUB2 as your boot manager. If you are using (U)EFI firmware then systemd-boot will be used as your boot manager.

The `install-myprefs.sh` script installs all that `install-base.sh` installs, except it also installs `git` and `zsh` and sets up Zsh as the default shell for `$USERNAME` (which is set by the user, when they are prompted with the question, "What username do you want your administrator account to have?") and root. It also changes `~/.zshrc` and `~/.bashrc` for both root and `$USERNAME` to that stored in the [`arch-scripts`](https://github.com/fusion809/arch-scripts) GitHub repository.
