## pluma
{% include Links/image.html image="text-editors/Pluma-1.8.1-running-under-Mokhsa.png" description="pluma 1.8.1 running under Moksha" float="none" width="1130px" %}

### Background
{% include_relative links.md program="pluma" package="app-editors/pluma" pacman="extra/x86_64/pluma/" gr="https://github.com/mate-desktop/pluma" wp="Pluma_(editor)" %} is a fork of gedit 2 created for the MATE desktop environment. It has many of the same features as gedit.

### Customizability
Some customization (to the theme or adding some plugins) can be done by going to Edit→Preferences.

### Features
pluma has a few plugins that can be used to add features (mostly IDE-like features) to the text editor. It also has syntax-highlighting and auto-indenting support for several computer languages.

### Obtaining It

#### Manjaro
pluma can be installed from the pacman extra repository by running:
{% include Code/coder.html line1="pacman -S pluma" %}

#### Sabayon
It can be installed with Entropy by running:
{% include Code/coder.html line1="equo i -av app-editors/pluma" %}
or with Portage by running:
{% include Code/coder.html line1="emerge -av app-editors/pluma" %}

### Advantages (Pros)
* Customization is done graphically, making it easier for beginners.
* Has intuitive keyboard shortcuts.
* Has several IDE-like features like a Python terminal.
* Has syntax-highlighting and auto-indenting support for several computer languages

### Disadvantages (Cons)
* Customization options are fairly limited

### Summary
{% include_relative 23a-pluma-summary.html %}
