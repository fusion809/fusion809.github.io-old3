## SciTE
{% include Links/image.html image="text-editors/SciTE-3.6.1-running-under-Moksha.png" description="SciTE 3.6.1 running under Moksha" width="1130px" float="none" %}

### Background
{% include_relative links.md program="SciTE" package="app-editors/scite" pacman="community/x86_64/scite" link="http://www.scintilla.org/SciTE.html" wp="SciTE" aw="SciTE" hr="http://sourceforge.net/p/scintilla/scite/ci/default/tree/" sf="scintilla" %} (abbreviated from <b>SCi</b>ntilla based <b>T</b>ext <b>E</b>ditor) is a Scintilla-based text editor originally developed by Neil Hodgson, that is licensed under a GPL-compatible license. It is a fairly user-friendly text editor, that can be customized and scripted with using Lua. Its syntax-highlighting is based on the contents of the `.properties` files it loads. SciTE is cross-platform, available on Microsoft Windows and most Linux distributions for free, although for OS X users it is only available for a fee of 41.99 USD.

I first tried it when it was the default text editor used by GNU Octave to edit m files.

### Customizability
SciTE can be customized by editing `.properties` files or via scripting with Lua. There are no major graphical tools for customizing SciTE.

### Features
It provides syntax-highlighting for dozens of computer languages. Support for extra languages can be added by creating `.properties` files for them.

### Obtaining It

#### Manjaro
It is easy to install SciTE on Manjaro using pacman. To do this run:
{% include Code/coder.html line1="pacman -S scite" %}

#### Sabayon
It is easy to install it with Entropy or Portage. To install it with Entropy, run:
{% include Code/coder.html line1="equo i -av app-editors/scite" %}
To install it with Portage, run:
{% include Code/coder.html line1="emerge -av app-editors/scite" %}

### Disadvantages (Cons)
* The list of languages it automatically supports is &lt;30.

### Advantages (Pros)
* Fairly lightweight
* Extensively customizable
* Easy to get on Sabayon and other Linux distributions like Manjaro.

### Summary
{% include_relative 25a-scite-summary.html %}
