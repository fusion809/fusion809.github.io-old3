### Bootloader
Now it is time to think which bootloader you are going to use. A list of the ones available for Gentoo Linux are listed [here](https://wiki.gentoo.org/wiki/Bootloader) at the *Gentoo Wiki*. GRUB2 is the most popular option and the one I personally use. It is also the one that this guide will walk you through using. It is important to note that any bootloader you use you will first have to install with emerge and then set it up as your bootloader. 

#### GRUB2
GRUB2 can be installed with:

{% include Code/coder.html package="sys-boot/grub" emerge="1" %}

After this to install GRUB2 to a particular disk (thereby setting it up as the bootloader) run:

{% include Code/root.html line1="grub-install &lt;DISK&gt;" %}

where `<DISK>` is the path of the disk, for example, I installed Gentoo onto my first hard disk (as my laptop has two internal drives) with:

{% include Code/root.html line1="grub-install /dev/sda" %}

in this case `<DISK>` is /dev/sda. One last thing is necessary before you can boot Gentoo Linux using GRUB2: generating the configuration file. If you are using a non-SysV init system (the default init system of Gentoo, used with OpenRC), like systemd, you will probably need to edit {% include Layouts/path.html path="/etc/default/grub" %} so as to add an init option to the kernel boot options. For systemd the required edit can be found [here](https://wiki.gentoo.org/wiki/Systemd#GRUB_2). After any required edits to {% include Layouts/path.html path="/etc/default/grub" %} are done merely run:

{% include Code/root.html line1="grub-mkconfig -o /boot/grub/grub.cfg" %}

to generate the GRUB2 configuration file. This will need to be done manually every time you install a new kernel. I have added a function called update-grub to my root shell rc file (such as {% include Layouts/path.html path="~/.bashrc" %} or {% include Layouts/path.html puncr=")" path="~/.zshrc" %} to make updating my GRUB2 configuration file just that little bit easier, here is said function:

~~~bash
function update-grub {
    grub-mkconfig -o /boot/grub/grub.cfg
}
~~~

