## Kate/KWrite
{% include Links/image.html image="text-editors/Kate-under-Moksha.png" float="none" description="Kate 15.08.1 running under Moksha" width="1130px" %}

{% include Links/image.html image="text-editors/KWrite-15.08.0-under-Moksha.png" float="none" description="KWrite 15.08.0 running under Moksha" width="1130px" %}

### Background
{% include_relative links.md program="Kate" package="kde-apps/kate" wp="Kate_(text_editor)" pacman="extra/x86_64/kate/" link="http://kate-editor.org" forum="http://kate-editor.org/support/" gr="https://projects.kde.org/projects/kde/applications/kate/repository" %} which is abbreviated from <b>K</b>DE <b>A</b>dvanced <b>T</b>ext <b>E</b>ditor, is a text editor that is a KDE Core Application (a part of the KDE Software Compilation or KDE SC) and combines features of an advanced text editor (that is, one geared towards software developers and experienced programmers) such as customizability, extensive syntax-highlighting, code-indentation, *etc.* support with sufficient user-friendliness for it to be suitable for inexperienced Linux users. Its development began in 2001 and has been a central part of KDE SC ever since.

{% include_relative links.md program="KWrite" package="kde-apps/kwrite" pacman="extra/x86_64/kwrite" wp="KWrite" gr="https://projects.kde.org/projects/kde/applications/kate/repository" %} as I understand it (but I must admit I am a little confused by the degree of overlap between Kate and KWrite) is designed to be a lightweight derivative of Kate.

### Customizability
Some customization (such as of keyboard shortcuts, the toolbar and a few other features) can be done graphically via going to the "Settings" menu and selecting an option from the menu. From what I can gather, however, limited customization can be done textually via user-supplied scripts.

### Features
It has syntax-highlighting and auto-indentation support for over 180 different computer languages, including MediaWiki and shell script, but excluding PyMOL. It also has embedded terminal support.

### Obtaining It

#### Manjaro
Kate/KWrite can be installed using pacman, via running:
{% include Code/coder.html line1="pacman -S kate" %}
and:
{% include Code/coder.html line1="pacman -S kwrite" %}
, respectively.

#### Sabayon
Kate can be quite easily obtained from Entropy or Portage. To install it from Entropy run:
{% include Code/coder.html line1="equo i -av kde-apps/kate" %}
while to install it with Portage run:
{% include Code/coder.html line1="emerge -av kde-apps/kate" %}
Getting KWrite is similarly easy, just use (for installation with Entropy):
{% include Code/coder.html line1="equo i -av kde-apps/kwrite" %}
while to install KWrite with Portage run (no need to add any overlays, it is in the Portage Tree):
{% include Code/coder.html line1="emerge -av kde-apps/kwrite" %}

### Advantages (Pros)
* Easily customizable via graphical tools
* Intuitive keyboard shortcuts by default
* Extensive support for a wide range of computer languages

### Disadvantages (Cons)
* Minimal customization can be made to Kate/KWrite, via user-supplied scripts.
* Due to it being part of KDE SC it cannot be too easily ported to Microsoft Windows or OS X, although it is readily available on most Linux distributions.

### Summary
{% include_relative 15a-kate-summary.html %}
