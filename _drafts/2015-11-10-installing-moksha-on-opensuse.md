---
layout: post
title:  "Installing Moksha on openSUSE 42.1"
date:   2015-11-10 +1000
categories: opensuse, moksha, installation-guides
---


```bash
sudo zypper addrepo http://download.opensuse.org/repositories/X11:Enlightenment:Factory/openSUSE_Leap_42.1/X11:Enlightenment:Factory.repo
sudo zypper addrepo http://download.opensuse.org/distribution/leap/42.1/repo/oss/
sudo zypper refresh
sudo zypper install automake libtool gcc gcc-c++ autoconf ocaml-gettext gettext-tools efl efl-devel evas-generic-loaders\ e_dbus e_dbus-devel libxcb-keysyms1 xcb-util-keysyms-devel
wget -cqO- https://github.com/JeffHoogland/moksha/archive/0.1.0.tar.gz | tar -xz
pushd moksha-0.1.0
  ./autogen.sh --prefix=/usr && make && sudo make install
popd
L=('e.cfg' 'e_randr.cfg' 'exehist.cfg' 'module.battery.cfg' 'module.clock.cfg' 'module.conf.cfg' 'module.everything-apps.cfg' 'module.everything-files.cfg' 'module.everything.cfg' 'module.gadman.cfg' 'module.ibar.cfg' 'module.notification.cfg' 'module.pager.cfg' 'module.syscon.cfg' 'module.tasks.cfg')
sudo mkdir -p /usr/share/enlightenment/data/config/bodhi
for i in "${L[@]}"
do
  wget -c https://github.com/JeffHoogland/moksha-profiles/raw/master/bodhi/$i
  sudo mv $i /usr/share/enlightenment/data/config/bodhi
done
rm -rf ~/.e
```
