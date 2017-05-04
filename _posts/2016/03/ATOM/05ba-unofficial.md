<!-- item1 -->
{% capture item1 %}
{% include Links/distros/archlinux.html puncr="." %} Atom (package name is [`atom-editor`](https://aur.archlinux.org/packages/atom-editor)) is available from the Arch User Repository (AUR). The AUR provides PKGBUILDs with which users can build Atom from source code. To install Atom from the AUR one must run {% include Code/codeus.html line1="yaourt -S atom-editor --noconfirm" %} (provided Yaourt is installed) or:

{% include Code/codeu.html line1="git clone https://aur.archlinux.org/atom-editor.git" line2="cd atom-editor" line3="makepkg -si --noconfirm" %}

this takes at least 20 minutes to build Atom, for me, at least. Alternatively you can install Atom from my `PKGBUILDs` GitHub Repository:

{% include Code/codeu.html line1="git clone https://github.com/fusion809/PKGBUILDs" line2="cd PKGBUILDs/atom-editor" line3="makepkg -si --noconfirm" %}

this will take the same amount of time, though, but it is less likely to fail on you due to momentary Internet glitches. Alternatively, if these PKGBUILDs are not fast enough to install Atom for you, then provided you are using 64-bit Arch Linux you can install Atom from the [`atom-editor-bin`](https://aur.archlinux.org/packages/atom-editor-bin) PKGBUILD in the AUR. It creates an Atom Arch Linux package by taking its installed files from the Atom Debian package provided by the Atom GitHub repository. Cuts the install time to less than five minutes, usually. To install `atom-editor-bin` using Yaourt run {% include Code/codeus.html line1="yaourt -S atom-editor-bin --noconfirm" %}. While to install the `atom-editor-bin` package manually run:

{% include Code/codeu.html line1="git clone https://aur.archlinux.org/atom-editor-bin.git" line2="cd atom-editor-bin" line3="makepkg -si --noconfirm" %}
{% endcapture %}

<!-- item2 -->
{% capture item2 %}
{% include Links/distros/centos7.html puncr="." %} Atom is available from the [Mosquito Copr](https://copr.fedorainfracloud.org/coprs/mosquito/atom/) and can be installed via running:

{% include Code/coder.html line1="yum copr enable mosquito/atom" line2="yum install -y atom" %}
{% endcapture %}

<!-- item3 -->
{% capture item3 %}
{% include Links/distros/fedora.html puncr="." %} Atom is available from the [Mosquito Copr](https://copr.fedorainfracloud.org/coprs/mosquito/atom/) and can be installed via running:

{% include Code/coder.html line1="dnf copr enable mosquito/atom" line2="dnf install -y atom" %}
{% endcapture %}

<!-- item4 -->
{% capture item4 %}
{% include Links/distros/ubuntu.html puncr="." %} Atom (package name: [`atom`](https://launchpad.net/~webupd8team/+archive/ubuntu/atom)) is available from the Webupd8team Personal Package Archive (PPA). To install Atom from it run:

{% include Code/coder.html line1="add-apt-repository ppa:webupd8team/atom" line2="apt-get update" line3="apt-get install -y atom" %}
{% endcapture %}
<ul>
  <li>{{ item1 | markdownify }}</li>
  <li>{{ item2 | markdownify }}</li>
  <li>{{ item3 | markdownify }}</li>
  <li>{{ item4 | markdownify }}</li>
</ul>
