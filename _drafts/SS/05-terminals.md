## Terminal Emulators
Terminal emulators (TEs) for Linux include tty1-tty6, the whole-screen virtual terminals managed by the getty Unix command[^7] and various graphical TEs (<abbr title="Graphical Terminal Emulators">GTEs</abbr>; that is, TE windows running within a graphical user interface) including GNOME Terminal, Konsole and LXTerminal. The following section will involve me comparing the various graphical terminal emulators I have any real experience with.

### GNOME Terminal
{% include Links/image.html image="GNOME-Terminal-3.16.2.png" width="743px" description="GNOME Terminal 3.16.2 running under Moksha" float="none" %}
{% include Links/links.html package="x11-terms/gnome-terminal" program="GNOME Terminal" link="https://wiki.gnome.org/Apps/Terminal" wp="GNOME Terminal" %} is a GTE that is part of the GNOME Core Applications suite. It is written in C and licensed under GNU GPLv2. I find it, like most GNOME Core Applications fairly feature-packed, with several customization options being available for the terminal window. These include custom keyboard shortcuts, colour schemes, fonts and behaviours.

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes pre-installed on GNOME editions of most major Linux distributions. Also available from the official package repositories of the various Linux distributions." customizability="8" features="8" sru="8." gist="d0e2ea07a2def192cacc" overall="9" %}

### Konsole
{% include Links/image.html image="Konsole-15.08.2.png" width="1000px" description="Konsole 15.08.2 running under Moksha" float="none" %}
{% include Links/links.html package="kde-apps/konsole" program="Konsole" link="https://konsole.kde.org/" wp="Konsole" %} is a GTE based on the Qt widget toolkit that is part of the KDE Core Applications (or KDE Frameworks 5). I would probably say that Konsole and Terminator are the most feature-packed GTEs, with custom keyboard shortcuts, colour schemes, fonts and behaviours possible. Konsole does have an advantage, in my opinion, over Terminator, though. See Konsole highlights tabs (in purple/pink, see the screenshot below) that have pushed out extra output since they were last viewed, which can be handy at times.

{% include Links/image.html image="Konsole-purple-tab-colour.png" width="1000px" float="none" description="Konsole showing the purple/pink tab highlighting. Note, how the first tab with its title starting with <code>...09@brenton-pc</code> is coloured purple/pink, this indicates that it has unread output" %}

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes preinstalled on the KDE edition of most major Linux distributions and is available from the official package repositories of the majority of distributions." customizability="9." sru="8." features="9." overall="9" gist="b03ca0f3e5e6b961ed19" %}

### LXTerminal
{% include Links/image.html image="LXTerminal-0.2.0.png" description="LXTerminal 0.2.0 running under Moksha" width="1000px" float="none" %}
{% include Links/links.html package="lxde-base/lxterminal" program="LXTerminal" link="http://wiki.lxde.org/en/LXTerminal" %} is a terminal emulator that is part of the core applications suite of LXDE. It uses the GTK+2 toolkit and while lightweight still has a few of the features that more advanced terminal emulators like Konsole boast. These include: ability to customize keyboard shortcuts and fonts (although a custom colour scheme is not permitted).

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes pre-installed ." customizability="8" features="8" sru="9." gist="74f4c3c54450760623d2" overall="8" %}

### MATE Terminal
{% include Links/image.html image="MATE-Terminal-1.8.1.png" description="MATE Terminal 1.8.1 running under MATE" width="1000px" float="none" %}
{% include Links/links.html package="x11-terms/mate-terminal" program="MATE Terminal" link="https://github.com/mate-desktop/mate-terminal" %} is a terminal emulator that is part of the core application suite of MATE, a fork of GNOME 2. Consequently the MATE Terminal is based on the GTK+2 toolkit. Unlike most terminal emulators (in fact all of them mentioned in this post) I have found it does not work under Moksha. See whenever I run `mate-terminal` I get segmentation fault messages.

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Installed, by default, on the MATE edition (if any) of most distributions, it can also be installed from the default package repositories of most distributions." customizability="8. Shares many of the same customizability options of GNOME Terminal." features="8. Same features as GNOME Terminal." sru="9. Like most MATE components it is fairly lightweight." gist="b345c67359307ff5bc17" overall="9. To me the fact that it does not work on Moksha is a big drawback, if for you it launches fine on your desktop of choice, it would probably be a better option than GNOME Terminal as it shares the same features but is lighter on SRU." %}

### Terminator
{% include Links/image.html image="Terminator-0.98.png" width="1000px" float="none" description="Terminator 0.98 running under Moksha" %}
{% include Links/links.html package="x11-terms/terminator" program="Terminator" link="https://launchpad.net/terminator" wp="Terminator_(terminal_emulator)" %} is a terminal emulator that uses the GTK toolkit and is written in Python. Compared to other terminal emulators its major advantage is that of window splitting. See, in most terminal emulators the only way you can open another terminal within the same window is by creating another tab (which is something Terminator can do to), which can be annoying if what you want to type into the other terminal is found in the one you are currently working in (as you cannot see what is in the current terminal when you open a new tab and start working in it), while with terminator you can show two terminals side-by-side in the same window, making it easier to work on two or more related things at a time. For example, here is a screenshot of Terminator with two windows in the one tab, with me working on my blog. In the first window I am running `bundle exec jekyll serve` and in the other I am doing the git side of managing my blog.

{% include Links/image.html image="Terminator-0.98-window-splitting.png" float="none" width="1000px" description="Terminator 0.98 running under Moksha, while I work on my blog in both windows" %}

#### Rating(s)
{% include_relative TE-ratings.html availability="8. Not pre-installed on any official editions of any Linux distributions I am aware of, but can be easily installed from the official package repositories of most Linux distributions." customizability="9. Colour scheme, keybindings and several other features are customizable." features="9. Feature-packed, extra features can be added using plugins." sru="5." gist="24dd1c1a4fd65acfe2a9" overall="8" %}

### Terminology
{% include Links/image.html image="Terminology-0.9.1.png" width="1000px" float="none" description="Terminology 0.9.1 running under Moksha" %}
{% include Links/links.html package="x11-terms/terminology" program="Terminology" link="https://www.enlightenment.org/about-terminology" wp="Terminology_(software)" %} is the terminal emulator of the Enlightenment desktop environment. Compared to other GTEs it is less intuitive and can be irritating to get the ropes of, because of how different it is to other GTEs. My experience is fairly limited with it, due to the fact I find it frustrating and hence have usually opted for less irritating alternatives like Konsole and LXTerminal. Despite this it does seem quite customizable and feature-packed, in fact, on their [about page](https://www.enlightenment.org/about-terminology) at enlightenment.org, it even says you can view image files (including bitmap and vector images) in Terminology.  

#### Rating(s)
{% include_relative TE-ratings.html availability="8. Not pre-installed on official editions of most Linux distributions, but is pre-installed on some that have the Enlightenment window manager pre-installed by default." customizability="9. Colour scheme, keybindings and several other features are customizable." features="9. Feature-packed, can even view image files in it" sru="8." gist="cc49c4322790078ae7e0" overall="8" %}

### Xfce Terminal
{% include Links/image.html image="Xfce-terminal.png" width="1000px" float="none" description="Xfce4 Terminal 0.6.3 running under Moksha" %}
{% include Links/links.html package="x11-terms/xfce4-terminal" program="Xfce Terminal" link="http://docs.xfce.org/apps/terminal/start" wp="Terminal_(Xfce)" %} is the terminal emulator of Xfce. I have personally found it, despite using more RAM than LXTerminal, less customizable and feature-packed. It is based on the GTK+3 toolkit. It does have one feature I like that LXTerminal lacks: it provides tab highlighting on unseen output.

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes pre-installed on the Xfce edition of most major Linux distributions. Can be easily installed from the official repositories of most distributions too." customizability="7. The keyboard shortcuts are not even customizable." features="7." sru="9." gist="f250f470f12f08613b54" overall="8" %}

### Other Terminal Emulators
I have limited experience with drop-down terminals and X terminals like UXTerm and XTerm, hence I cannot really comment on anything but their system resource usage (SRU) and ease of installation. Here is a graph comparing RAM usage amongst GTEs, note that each of these GTEs are installable using Entropy:
{% include Links/image.html image="RAM-usage-TEs.png" width="1000px" float="none" description="RAM usage of GTEs" %}
