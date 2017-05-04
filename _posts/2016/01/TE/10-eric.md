## Eric Python IDE
{% include Links/image.html image="IDEs/Eric6.png" width="1130px" float="none" description="Eric 6 running under Manjaro Linux" %}

### Background
{% include_relative links.md program="Eric Python IDE" package="dev-util/eric" pacman="community/any/eric/" link="http://eric-ide.python-projects.org/" wp="Eric_Python_IDE" hr="http://die-offenbachs.homelinux.org:48888/hg/eric/" sf="eric-ide" %} is a free and open-source IDE that is developed by its own community of donation-sponsored developers. It is written in and used to program in Python. As of Eric version 6, it supports both Python 2 and Python 3.

### Customizability
Eric has an extensive in-built plugin system. These plugins can be installed from within Eric's interface by going to "Plugins&rarr;Plugin Repository" and selecting the required plugin. I have limited experience with it so I cannot comment on its customizability.

### Features
Its features include support for managing Mercurial, Subversion and Git repositories, an integrated Python debugger, an interactive embedded Python shell with syntax-highlighting, syntax-highlighting for its text editor component, code autocompletion, *etc.*

### Obtaining It
The platform-independent method of installing the latest Eric Python IDE release, is three-step:

1. Download the latest tarball release of the Eric Python IDE from [here at SourceForge](http://sourceforge.net/projects/eric-ide/files/latest/download)
2. Extract the contents of said tarball
3. `cd` into the extracted directory of Eric
4. Install the dependencies: PyQt5, QScintilla2, Qt5 and sip.
4. Run {% include Code/coders.html line1="python install.py -b /usr/bin" %}

#### Manjaro
On Manjaro Eric can be installed from the official pacman repositories with:
{% include Code/coder.html line1="pacman -S eric" %}
this will install `eric` and `eric-common` packages, which have a net installed size of 46.6 MB and download size of approximately 8.1 MB.

#### Sabayon
The version of Eric in the Entropy repository is 4.5.25, which is very out-of-date. The versions of Eric in the Portage Tree are 4.5.25 and 5.5.2, which support only Python 2 and Python 3, respectively. These two versions are slotted differently, which means that they can both be installed simultaneously on the same machine. To install Eric 4.5.25 with Entropy run:
{% include Code/coder.html line1="equo i -av eric" %}
while to install Eric 4.5.25 with Portage run:
{% include Code/coder.html line1="emerge -av eric:4" %}
and to install Eric 5.5.2 with Portage run:
{% include Code/coder.html line1="emerge -av eric:5" %}
It is possible to install the latest release of Eric from my Portage Overlay, {% include Sabayon/sabayon-tools.md puncr="," %} by running (assuming this overlay is not currently added):
{% include Code/coder.html line1="layman -a sabayon-tools" line2="emerge -av dev-util/eric::sabayon-tools" %}
To install the latest release of Eric on Sabayon, via following the general instructions outlined earlier, run:
{% include Code/codeu.html line1="sudo equo i -av dev-python/pyqt5 dev-python/sip dev-python/qscintilla-python" line2="mkdir eric" line3="wget -c http://sourceforge.net/projects/eric-ide/files/latest/download -O- > eric.tar.gz" line4="tar -xz -f eric.tar.gz -C eric --strip-components=1" line5="sudo python install.py -b /usr/bin" line6="sudo install -Dm644 eric/eric6.desktop /usr/share/applications/eric6.desktop" %}

### Advantages (Pros)
* Cross-platform
* Supports both Python versions
* Feature-packed for Python developers
* Lightweight

### Disadvantages (Cons)
* The latest version is not available via the usual channels on Sabayon

### Summary
{% include_relative 10a-eric-summary.html %}
