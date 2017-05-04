## Mousepad
{% include Links/image.html image="text-editors/Mousepad-under-Moksha.png" description="Mousepad 0.4.0 running under Moksha" float="none" width="1130px" %}

### Background
{% include_relative links.md program="Mousepad" package="app-editors/mousepad" pacman="extra/x86_64/mousepad/" gr="http://git.xfce.org/apps/mousepad/" wp="Xfce#Mousepad" %} is a core application of the Xfce desktop environment, that was originally forked from Leafpad. Like Leafpad it is fairly lightweight, but unlike Leafpad, Mousepad can be customized and has a few basic features that are absent from Leafpad, such as syntax highlighting support for a few computer languages.

### Customizability
Some basic customization can be done, graphically, by going to Edit←Preferences in the toolbar. Some customization of its appearance can be done by going to the View menu. Beyond this, to my knowledge, it cannot be customized.

### Features
It supports syntax-highlighting for roughly, a couple of dozen computer languages.

### Obtaining It

#### Manjaro
It can be easily installed by running:
{% include Code/coder.html line1="pacman -S mousepad" %}

#### Sabayon
It is fairly easy to obtain it on Sabayon, to install it with Entropy run:
{% include Code/coder.html line1="equo i -av app-editors/mousepad" %}
while to install it with Portage (and yes it is available in the Portage Tree):
{% include Code/coder.html line1="emerge -av app-editors/mousepad" %}

### Advantages (Pros)
* Lightweight
* All customization can be done graphically
* User-friendly

### Disadvantages (Cons)
* Basic, limited computer language support
* Limited customization options

### Ratings
{% include_relative 19a-mousepad-summary.html %}
