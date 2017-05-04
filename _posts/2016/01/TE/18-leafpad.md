## Leafpad
{% include Links/image.html image="text-editors/Leafpad-running-under-Moksha.png" description="Leafpad 0.8.18.1 running under Moksha" float="none" width="1130px" %}

### Background
{% include_relative links.md program="Leafpad" package="app-editors/leafpad" pacman="extra/x86_64/leafpad/" wp="Leafpad" link="http://tarot.freeshell.org/leafpad/" %} is a lightweight and basic GTK+ based text editor. Its capabilities (or rather lack thereof) are very similar to those of Windows' Notepad.

### Customizability
There is little, if any, customizability for Leafpad.

### Features
It offers no syntax highlighting support or auto-indentation support that I am aware of.

### Obtaining It

#### Manjaro
To install Leafpad on Manjaro merely run:
{% include Code/coder.html line1="pacman -S leafpad" %}

#### Sabayon
To install it on Sabayon with Entropy run:
{% include Code/coder.html line1="equo i -av app-editors/leafpad" %}
while to install it with Portage run:
{% include Code/coder.html line1="emerge -av app-editors/leafpad" %}

### Advantages (Pros)
* Its chief advantage is its low system resource usage
* Easy to install on Sabayon

### Disadvantages (Cons)
* It is very basic, has minimal customizability or features

### Ratings
{% include_relative 18a-leafpad-summary.html %}
