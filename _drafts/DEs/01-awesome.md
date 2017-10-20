## awesome
{% include_relative infobox-desktop.html wm="awesome" logo="awesome.png" screenshot="http://dotshare.it/public/images/uploads/648.png" screenshot_caption="awesome running with the <a href='https://github.com/copycat-killer/awesome-copycats/tree/master/themes/steamburn' link='_blank'>steamburn theme</a>" arch="awesome" gentoo="awesome" wp="awesome (window manager)" website="https://awesomewm.org/" website-pretty="awesomewm.org" type="Dynamic window manager" language="<a href='https://en.wikipedia.org/wiki/C_(programming_language)' link='_blank'>C</a>, <a href='https://en.wikipedia.org/wiki/Lua_(programming_language)' link='_blank'>Lua</a>" size="8.33 MiB" ram="18.7 MiB" date="2007" license="<a href='https://raw.githubusercontent.com/awesomeWM/awesome/master/LICENSE' link='_blank'>GPLv2</a>" devfor="N/A" developer="Julien Danjou (original) and the awesome project." forked="<a href='https://en.wikipedia.org/wiki/dwm' link='_blank'>dwm</a>" irc="awesome" server="oftc" github="awesomeWM/awesome" %}

**awesome** is a fast, lightweight and extensively customizable [dynamic window manager](https://wiki.archlinux.org/index.php/Window_manager#Types) primarily targeted towards power users. The reason why it is primarily geared towards power users is that its customization is done with Lua, the lightweight, yet powerful, multi-paradigm scripting language. I do not understand the Lua language myself but from what I have read it is one of the easier programming languages to learn, so while awesome is definitely not suitable for programming no-hopers it may be possible for someone who does not understand Lua, that hs the time and willing to learn, to pick it up while using awesome. A tutorial for newcomers to awesome can be found [here](https://awesomewm.org/apidoc/). 

It was originally forked in 2007 from the simple window manager, dwm, by Julien Danjou, and named jdwm, with &ldquo;jd&rdquo; coming from Danjou's initials. Later it was renamed after Barney Stinson's, from the TV series *How I Met Your Mother*, catchphrase, &ldquo;awesome&rdquo;.

### Availability
It is available from the official repositories of most mainstream Linux distributions, which is likely more due to how easy it is to build and package it more than its popularity. Overall I would rate its availability as 9 out of 10. 

### Beginner-friendliness
awesome is not configured using graphical tools or simple text files and is rather customized using Lua scripts. It is still usable without any customization, although it is rather dull. So I would rate its beginner-friendliness as being 3 out of 10. A 1 out of 10 would be if it was customized using a really obscure and/or difficult-to-learn programming language, or by forking its source code and editing and re-compiling it manually. 

### Customization
Customizing awesome is done by editing its configuration files which are written in Lua. Its primary user configuration file is {% include Layouts/path.html path="~/.config/awesome/rc.lua" puncr="." %}. On Arch Linux, at least, its default configuration file is at {% include Layouts/path.html path="/etc/xdg/awesome/rc.lua" puncr="." %} If you want some example configurations [this GitHub repository](https://github.com/copycat-killer/awesome-copycats) has some that I rather like. This repository has 1,267 stars at the time of writing, suggesting that awesome may be more popular than I thought. For further customization information I would suggest seeing the *ArchWiki* article linked in the infobox. 

I would rate its customizability as &ge;9 out of 10.

### Stability
It is very stable. I have tried it on three different platforms (Arch Linux, Debian 9 and Gentoo Linux), on all three I noticed no bugs. I would rate stability as being &ge;8 out of 10. 

### System resource usage
awesome has a fairly low installed size (8.33 MiB), although higher than some window managers like bspwm (210 KiB), Fluxbox (2.98 MiB), i3 (1.27 MiB) and Openbox (1.19 MiB). Its RAM usage is also fairly low (18.7 MiB, when running on Gentoo Linux with the default theme), but higher than that of some of the lightest window managers. 

{% include Layouts/clear.html %}
