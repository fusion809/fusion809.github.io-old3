<!-- 4 -->
## Installation
I would advise that one creates a directory at {% include Layouts/path.html path="/mnt/gentoo" puncr="," %} then mount your root partition to {% include Layouts/path.html path="/mnt/gentoo" puncr="." %} Say {% include Layouts/path.html path="/dev/sda2" %} is your root partition then run:

{% include Code/coder.html line1="mkdir /mnt/gentoo" line2="mount /dev/sda2 /mnt/gentoo" %}

Next, download the stage3 tarball (links can be found {% include Links/basic.html url="https://gentoo.org/downloads/" link="here" puncr=")" %} specific to your architecture and preferences, to {% include Layouts/path.html path="/mnt/gentoo" puncr="." %} For example, there are stage3 tarballs containing systemd for those that want a Gentoo Linux system with systemd serving as the init system. If you download and build Gentoo using a stage3 tarball that ends up not being the best one for your preferences, do not worry as you can still get the system you would have if you had not made that mistake.

Now one will need to change into {% include Layouts/path.html path="/mnt/gentoo" %} and run:

{% include Code/coder.html line1="tar xvjpf stage3-*.tar.bz2 --xattrs --numeric-owners" %}

to extract the stage3 to the root partition. Then run:

{% include Code/coder.html line1="cp -L /etc/resolv.conf /mnt/gentoo/etc" line2="mount -t proc /proc /mnt/gentoo/proc" line3="mount --rbind /dev /mnt/gentoo/dev" line4="mount --make-rslave /mnt/gentoo/dev" line5="mount --rbind /sys /mnt/gentoo/sys" line6="mount --make-rslave /mnt/gentoo/sys" %}

to bind up the system and make it ready for chrooting. Then run:

{% include Code/coder.html line1="chroot /mnt/gentoo /bin/bash" %}

to chroot into your Gentoo system. 
