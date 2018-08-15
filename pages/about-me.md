---
layout:           page2
title:            "About Me"
date:             2015-11-18 +1000
last_modified_at: 2018-08-15 17:12:40 +1000
permalink:        /about-me/
---

{% include Links/image.html image="operating-systems/Ubuntu_12.04.png" description="Desktop of Ubuntu 12.04, with its default wallpaper" id="1" width = "1034px" float="none" %}

My journey through the world of Linux began in mid 2012, when I first tried [Ubuntu](http://www.ubuntu.com) 12.04 as a dual-boot with Windows 7 on my Dell laptop. At first, I must admit I was not impressed, as it was like I had landed on an alien planet, as I had never had any need to use a terminal emulator (or command prompt as it is called under Microsoft Windows) before. Fortunately, I persevered (although, I did return to Windows on-and-off) and after a while I became almost addicted to Linux. A couple of years later I decided to delete the Windows 7 partition on my Dell laptop and make the laptop 100% pure Linux. Since then, I have never regretted making the transition to Linux. Although, I eventually outgrew Ubuntu as it was essentially preschool with so much hand-holding that I was left out of many of the important decisions about my own system.

{% include_relative about-me/list-of-distros-tried.md %}

{% include_relative about-me/distribution-difficulty.md %}

My favourite were, in ascending order:

{% capture openmandriva %}
{% include_relative about-me/openmandriva.md %}
{% endcapture %}

{% capture freebsd %}
{% include_relative about-me/freebsd.md %}
{% endcapture %}

{% capture blacklab %}
{% include_relative about-me/blacklab.md %}
{% endcapture %}

{% capture nixos %}
{% include_relative about-me/nixos.md %}
{% endcapture %}

{% capture sabayon %}
{% include_relative about-me/sabayon.md %}
{% endcapture %}

{% capture elementary %}
{% include_relative about-me/elementary.md %}
{% endcapture %}

{% capture ubuntu %}
{% include_relative about-me/ubuntu.md %}
{% endcapture %}

{% capture mageia %}
{% include_relative about-me/mageia.md %}
{% endcapture %}

{% capture fedora %}
{% include_relative about-me/fedora.md %}
{% endcapture %}

{% capture deepin %}
{% include_relative about-me/deepin.md %}
{% endcapture %}

{% capture mint %}
{% include_relative about-me/mint.md %}
{% endcapture %}

{% capture void-musl %}
{% include_relative about-me/void-musl.md %}
{% endcapture %}

{% capture void-glibc %}
{% include_relative about-me/void-glibc.md %}
{% endcapture %}

{% capture funtoo %}
{% include_relative about-me/funtoo.md %}
{% endcapture %}

{% capture gentoo %}
{% include_relative about-me/gentoo.md %}
{% endcapture %}

{% capture opensuse %}
{% include_relative about-me/opensuse.md %}
{% endcapture %}

{% capture arch %}
{% include_relative about-me/arch.md %}
{% endcapture %}

<ul>
<li><b>OpenMandriva Lx 3.03</b></li>
{{ openmandriva | markdownify }}

<li><b>FreeBSD 11.2</b></li>
{{ freebsd | markdownify }}

<li><b>Black Lab Linux 8</b></li>
{{ blacklab | markdownify }}

<li><b>elementary OS</b></li>
{{ elementary | markdownify }}

<li><b>Ubuntu</b></li>
{{ ubuntu | markdownify }}

<li><b>Mageia</b></li>
{{ mageia | markdownify }}

<li><b>NixOS</b></li>
{{ nixos | markdownify }}

<li><b>Sabayon Linux</b></li>
{{ sabayon | markdownify }}

<li><b>Fedora</b></li>
{{ fedora | markdownify }}

<li><b>deepin</b></li>
{{ deepin | markdownify }}

<li><b>Linux Mint</b></li>
{{ mint | markdownify }}

<li><b>Void Linux (musl)</b></li>
{{ void-musl | markdownify }}

<li><b>Void Linux (glibc)</b></li>
{{ void-glibc | markdownify }}

<li><b>Funtoo Linux</b></li>
{{ funtoo | markdownify }}

<li><b>Gentoo Linux</b></li>
{{ gentoo | markdownify }}

<li><b>Gecko Linux</b> / <b>openSUSE</b></li>
{{ opensuse | markdownify }}

<li><b>Arch Linux / Manjaro Linux</b></li>
{{ arch | markdownify }}
