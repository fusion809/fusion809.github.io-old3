<!-- 4 -->
## Installation
### Stage3 tarball
I would advise that one creates a directory at {% include Layouts/path.html path="/mnt/gentoo" puncr="," %} then mount your root partition to {% include Layouts/path.html path="/mnt/gentoo" puncr="." %} Say {% include Layouts/path.html path="/dev/sda2" %} is your root partition then run:

{% include Code/coder.html line1="mkdir /mnt/gentoo" line2="mount /dev/sda2 /mnt/gentoo" %}

Next, download the stage3 tarball (links can be found {% include Links/basic.html url="https://gentoo.org/downloads/" link="here" puncr=")" %} specific to your architecture and preferences, to {% include Layouts/path.html path="/mnt/gentoo" puncr="." %} For example, there are stage3 tarballs containing systemd for those that want a Gentoo Linux system with systemd serving as the init system. If you download and build Gentoo using a stage3 tarball that ends up not being the best one for your preferences, do not worry as you can still get the system you would have if you had not made that mistake.

Now one will need to change into {% include Layouts/path.html path="/mnt/gentoo" %} and run:

{% include Code/coder.html line1="tar xvjpf stage3-*.tar.bz2 --xattrs --numeric-owners" %}

to extract the stage3 to the root partition. 

### Setting up the chroot system
Then run:

{% include Code/coder.html line1="cp -L /etc/resolv.conf /mnt/gentoo/etc" line2="mount -t proc /proc /mnt/gentoo/proc" line3="mount --rbind /dev /mnt/gentoo/dev" line4="mount --make-rslave /mnt/gentoo/dev" line5="mount --rbind /sys /mnt/gentoo/sys" line6="mount --make-rslave /mnt/gentoo/sys" %}

to bind up the system and make it ready for chrooting. Then run:

{% include Code/coder.html line1="chroot /mnt/gentoo /bin/bash" %}

to chroot into your Gentoo system. Mount the BBP / ESP (e.g. {% include Layouts/path.html path="/dev/sda1" puncr=")" %}q to {% include Layouts/path.html path="/boot" puncr="," %} for example, using:

{% include Code/coder.html line1="mount /dev/sda1 /boot" %}

### Portage tree
Then to set up the Gentoo official ebuild repository (or Portage tree which is stored in {% include Layouts/path.html path="/usr/portage" puncr=")" %} for use by Portage run:

{% include Code/coder.html line1="mkdir /etc/portage/repos.conf" line2="cp /usr/share/portage/config/repos.conf /usr/portage/repos.conf/gentoo.conf" %} 

At this point in time I would advise that a Portage snapshot (which should be no older than a day old) is downloaded with:

{% include Code/coder.html line1="emerge-webrsync" %}

After this you can run:

{% include Code/coder.html line1="emerge --sync" %}

with or without the `--quiet` option, to update your copy of the tree to the very latest. At this point in time rsync is used to keep your copy of the tree up-to-date. rsync has its own set of advantages and disadvantages. The main disadvantage that irritates me about rsync is that you are advised per Gentoo netiquette to not sync any more frequently than once a day. If you sync more than once per day using rsync you may be put on a temporary ban list by the mirror maintainers. One may ask why you would need to sync any more often than once a day, well I am a little obsessive-compulsive about synchronizing fairly frequently but besides that I have once updated to a broken copy of the tree. This copy was generated when a tree maintainer updated an ebuild without running repoman, hence making an ebuild manifest inaccurate. 

#### Git-managed tree
Now it is up to you what to do. You can emerge git and use git to control your Portage tree, which is what I recommend. A git-controlled tree means you can update the tree as often as you want and as rarely the tree maintainers will make a careless mistake (like forgetting to run repoman before committing their changes) that may cause significant problems, this can come in handy. To emerge it run:

{% include Code/coder.html line1="emerge dev-vcs/git" %}

Then edit your {% include Layouts/path.html path="/etc/portage/repos.conf/gentoo.conf" %} file to:

{% include Layouts/file.html file="/etc/portage/repos.conf/gentoo.conf" caption="Change over to git control" line1="[DEFAULT]" line2="main-repo=gentoo" line3="<br/>" line4="[gentoo]" line5="location = /usr/portage" line6="sync-type = uri" line7="sync-uri = https://github.com/gentoo/gentoo.git" line8="auto-sync = yes" %}

I often install my favourite text editor, Vim, before I edit any files. GNU nano is included in the stage3 tarball, so if you favour using nano you need not install Vim. But if you wish to use Vim merely issue the command:

{% include Code/coder.html line1="emerge app-editors/vim" %}

to install it.


### Profiles and updating world
It is now time to set your [Portage profile](https://wiki.gentoo.org/wiki/Profile_(Portage)) to whatever it is you want. To list available profiles run:

{% include Code/coder.html line1="eselect profile list" %}

This may, for example, return (for a 64-bit system):
<pre>
  [1]   default/linux/amd64/13.0 <span style="color: #6767ff">*</span>
  [2]   default/linux/amd64/13.0/selinux
  [3]   default/linux/amd64/13.0/desktop
  [4]   default/linux/amd64/13.0/desktop/gnome
  [5]   default/linux/amd64/13.0/desktop/gnome/systemd
  [6]   default/linux/amd64/13.0/desktop/plasma
  [7]   default/linux/amd64/13.0/desktop/plasma/systemd
  [8]   default/linux/amd64/13.0/developer
  [9]   default/linux/amd64/13.0/no-multilib
  [10]  default/linux/amd64/13.0/systemd
  [11]  default/linux/amd64/13.0/x32
  [12]  hardened/linux/amd64
  [13]  hardened/linux/amd64/selinux
  [14]  hardened/linux/amd64/no-multilib
  [15]  hardened/linux/amd64/no-multilib/selinux
  [16]  hardened/linux/amd64/x32
  [17]  default/linux/uclibc/amd64
  [18]  hardened/linux/uclibc/amd64
</pre>

Now you must decide which profile you want to use. Profile 3 (`default/linux/amd64/13.0/desktop`), for example, would be what you would choose if you wish to set up a system with a desktop environment other than GNOME or KDE Plasma. After you have set a profile you have to emerge any packages that have experienced updates:

{% include Code/coder.html line1="emerge -auvDU --with-bdeps=y --verbose-conflicts @world" %}
