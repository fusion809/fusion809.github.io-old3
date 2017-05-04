---
layout:        post2
title:         "Installing Moksha on Fedora 23"
date:          2015-11-16 06:47:50 +1000
categories:    fedora, moksha, installation-guides
permalink:     /installing-moksha-on-fedora/
---
{% include Links/image.html image="operating-systems/Fedora-23-Moksha-desktop.png" description="Moksha running under Fedora 23, with the default Fedora 23 wallpaper" id="1" width = "1034px" float="none" %}

**[Moksha](http://mokshadesktop.org/)**, the free Enlightenment 17 fork, is the default desktop environment of the lightweight Ubuntu (LTS) derivative, [Bodhi Linux](http://www.bodhilinux.com). Unlike most desktop environments originally developed with a specific distribution in mind, however, I have found very little interest in building binary packages for it on other distributions, including Fedora. The only distribution, besides Bodhi Linux, with an official binary package available for Moksha, that I am aware of, is [Sabayon Linux](http://www.sabayon.org).

The following Bash script should install Moksha for you, provided you are a member of the user group `wheel` and hence can run the `sudo` command.

~~~ bash
RAW=https://raw.githubusercontent.com/fusion809/moksha-scripts/master
wget -c $RAW/list.txt $RAW/MokshaRadiance.edj

sudo dnf install -y $(cat list.txt)

# Define these variables to save space
alias atrin='./autogen.sh --prefix=/usr && make && sudo make install'
alias trin='./configure --prefix=/usr && make && sudo make install'
EVAS=evas_generic_loaders
ELIBS=https://download.enlightenment.org/rel/libs
MOK=https://github.com/JeffHoogland/moksha/archive
REL=https://download.enlightenment.org/releases

# Get EFL 1.15.2
wget -cqO- $ELIBS/efl/efl-1.15.2.tar.xz | tar -xJ
pushd efl-1.15.2
  trin
popd

# Get e_dbus
wget -cqO- $REL/e_dbus-1.7.10.tar.bz2 | tar -xv
pushd e_dbus-1.7.10
  atrin
popd

# Get evas_generic_loaders
wget -cqO- $ELIBS/$EVAS/$EVAS-1.15.0.tar.xz | tar -xJ
pushd $EVAS-1.15.0
  atrin
popd

# Get Moksha
wget -cqO- $MOK/0.1.0.tar.gz | tar -xz
pushd moksha-0.1.0
  atrin
popd

cp -a MokshaRadiance.edj ~/.e/e/themes
~~~
