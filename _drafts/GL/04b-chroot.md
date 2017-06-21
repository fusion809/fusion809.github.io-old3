### Setting up the chroot system
Then run:

{% include Code/coder.html line1="cp -L /etc/resolv.conf /mnt/gentoo/etc" line2="mount -t proc /proc /mnt/gentoo/proc" line3="mount --rbind /dev /mnt/gentoo/dev" line4="mount --make-rslave /mnt/gentoo/dev" line5="mount --rbind /sys /mnt/gentoo/sys" line6="mount --make-rslave /mnt/gentoo/sys" %}

to bind up the system and make it ready for chrooting. Then run:

{% include Code/coder.html line1="chroot /mnt/gentoo /bin/bash" %}

to chroot into your Gentoo system. The Gentoo Handbook suggests using a trick to make it clear which prompt is the chroot so as to distinguish it from standard prompts. If you wish to use such a trick run:

{% include Code/coder.html line1="source /etc/profile" line2='export PS1="(chroot) $PS1"' %}

Mount the BBP / ESP (e.g. {% include Layouts/path.html path="/dev/sda1" puncr=")" %} to {% include Layouts/path.html path="/boot" puncr="," %} for example, using:

{% include Code/coder.html line1="mount /dev/sda1 /boot" %}
