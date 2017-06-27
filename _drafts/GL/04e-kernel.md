### Installing the kernel
After running this world update you will still have no Linux kernel, therefore you cannot boot this new system. First thing you must do in order to install the kernel is to emerge a kernel sources package like {% include Packages/gentoo.html package="sys-kernel/gentoo-sources" puncr="." %} This will give you the kernel sources, but it will not build (or compile) the sources for you. At this point in time you should run:

{% include Code/coder.html line1="eselect kernel list" %}

Ideally it should just return:

<pre>
Available kernel symlink targets:
  [1]   linux-&lt;VERSION&gt;-gentoo <span style="color: #6767ff">*</span>
</pre>

where `<VERSION>` is the version of the kernel (e.g. the latest kernel marked stable, at the time of writing, in the Portage tree is 4.9.16). Now you should be able to change directory to {% include Layouts/path.html path="/usr/src/linux" %} and run:

{% include Code/coder.html line1="make menuconfig" %}

This will create a kernel config based on the preferences you specify to the ncurses-based dialog that pops up. Below is a screenshot to show you roughly what you should see upon running this command (keep in mind the name of the kernel will, of course, differ according to which kernel you emerged with Portage):

{% include Links/image.html image="GentooLinux/menuconfig.png" %}

After you have finished tweaking your kernel configs run:

{% include Code/coder.html line1="make -j&lt;NO&gt;" line2="make modules_install" line3="make install" line4="emerge @module-rebuild" %}

where `<NO>` is the number of processor cores across which you wish to compile the kernel, plus one. For example `make -j9` will compile across eight cores, while `make -j2` will compile against one core. Now I personally recommend you also emerge the {% include Packages/gentoo.html package="sys-kernel/dracut" %} package and create a initramfs as while an initramfs may not be necessary for some systems, for all systems (including virtual machines and laptops) I have installed Gentoo Linux on it is necessary in order to boot the system. To emerge it and then build an initramfs (assuming you are still in {% include Layouts/path.html path="/usr/src/linux" puncr=")" %} run:

{% include Code/coder.html emerge="1" package="sys-kernel/dracut" line2="dracut -f --fstab --xz /boot/initramfs-$(ls -ld /usr/src/linux | cut -d ' ' -f 11 | sed 's/linux\-//g').img $(ls -ld /usr/src/linux | cut -d ' ' -f 11 | sed 's/linux\-//g')" %}

