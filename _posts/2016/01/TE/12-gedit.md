## gedit
{% include Links/image.html image="text-editors/gedit-screenshot-under-Moksha.png" float="none" width="1130px" description="gedit running under Moksha" %}

### Background
{% include_relative links.md aw="GNOME/Gedit" wp="gedit" program="gedit" ml="https://help.gnome.org/users/gedit/" link="https://wiki.gnome.org/Apps/Gedit" pacman="extra/x86_64/gedit/" gr="https://github.com/GNOME/gedit" package="app-editors/gedit" %} is a GTK+ based text editor that is one of the core applications of GNOME. In my opinion, it is the second most advanced text editor (after Kate) that is part of a desktop environment's core application suite. It is also more advanced than Windows' Notepad and Wordpad text editors. Despite this it is also beginner-friendly and uses a standard keymap.

### Customizability
gedit is able to be customized, although from what I have gathered from reading its Wiki, customization options are limited as it does not seem to support advanced customization (via editing configure files, for example), rather there are some themes and plugins available but the plugins seem fairly limited.

### Features
It supports syntax highlighting of several computer languages, including Desktop Configuration files (`.desktop` or `.directory`), MATLAB, MediaWiki, GNU Octave, Scilab and shell script, just to name a few I know are absent in a few basic text editors. Although it does not support syntax highlighting for PyMOL or SageMath, so I would not say its syntax highlighting is as extensive as Atom's or Vim's.

### Obtaining It

### Manjaro
gedit is in the official pacman repositories of Manjaro so merely running:
{% include Code/coder.html line1="pacman -S gedit" %}
should install it.

#### Sabayon
It is easy to obtain gedit on Sabayon, via either Entropy or Portage (and yes it is available in the Portage Tree). gedit comes with a default installation of Sabayon GNOME edition. To install it using Entropy on an existing Sabayon machine, simply run (you can omit the `-av` options, if you are sure gedit is not already installed on your system, I am using these options in case it is and you are not aware of it):
{% include Code/coder.html line1="equo i -av app-editors/gedit" %}
Alternatively to install it using Portage run:
{% include Code/coder.html line1="emerge -av app-editors/gedit" %}

### Advantages (Pros)
* Light on resources
* Easy to obtain on Manjaro and Sabayon

### Disadvantages (Cons)
* Customization options, beyond with a limited set of available themes and plugins, are limited.
* Fairly light on features, beyond syntax highlighting.

### Summary
{% include_relative 12a-gedit-summary.html %}
