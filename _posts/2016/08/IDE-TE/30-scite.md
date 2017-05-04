## SciTE
{% include Links/image.html image="text-editors/SciTE-3.6.1-running-under-Moksha.png" description="SciTE 3.6.1 running under Moksha" width="1130px" float="none" %}

### Background
{% include Infoboxes/editor.html logo="Sci48M.png" language="C++." date="1999." focus="General-purpose text editor." editor="SciTE" license="HPND." developers="Neil Hodgson." %}
[**SciTE**](http://www.scintilla.org/SciTE.html) (abbreviated from <b>SCi</b>ntilla based <b>T</b>ext <b>E</b>ditor) is a Scintilla-based text editor originally developed by Neil Hodgson, that is licensed under a GPL-compatible license. It is a fairly user-friendly text editor, that can be customized and scripted with using Lua. Its syntax-highlighting is based on the contents of the `.properties` files it loads. SciTE is cross-platform, available on Microsoft Windows and most Linux distributions for free, although for OS X users it is only available for a fee of 41.99 USD.

I first tried it when it was the default text editor used by GNU Octave to edit m files.

{% include Layouts/clear.html %}<br/>

### Customizability
SciTE can be customized by editing `.properties` files or via scripting with Lua. There are no major graphical tools for customizing SciTE.

### Features
It provides syntax-highlighting for dozens of computer languages. Support for extra languages can be added by creating `.properties` files for them. One can also build projects in it. 

### Obtaining It
SciTE is found in the official repositories of most Linux distributions.

### Advantages (Pros)
* Fairly lightweight.
* Extensively customizable.
* Easy to get on most distributions.

### Disadvantages (Cons)
* The list of languages it automatically supports is &lt;30.

### Summary
{% include_relative 30a-scite-summary.html %}
