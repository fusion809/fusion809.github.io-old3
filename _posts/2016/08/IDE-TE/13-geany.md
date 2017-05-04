## Geany
{% include Links/image.html image="Geany/Geany-1.24.1.png" float="none" width="1130px" description="Geany 1.24.1 running under Moksha" %}

### Background
{% include Infoboxes/editor.html editor="Geany" repo="geany/geany" date="October 2005." developers="<a href='https://github.com/geany/geany/graphs/contributors' link='_blank'>Geany Development Team</a>." license="<a href='https://github.com/geany/geany/blob/master/COPYING' link='_blank'>GPLv2</a>." country="Germany." language="C, C++." focus="General-purpose IDE." %}
[**Geany**](http://geany.org/) is a lightweight GTK+ and Scintilla-based text editor with basic IDE-type features that was originally developed by Enrico Tr&ouml;ger in 2005. It is licensed under GNU GPLv2.

{% include Layouts/clear.html %}<br/>

### Customizability
The `~/.geany` directory is where customizations are kept. This customization can be made with code [snippets](http://www.geany.org/Download/Extras) (written in HTML, LaTeX, PHP and Python), [plugins](http://www.geany.org/Support/Plugins), [themes](https://github.com/geany/geany-themes/), *etc*.

### Features
Geany provides auto-indentation and syntax-highlighting for over a dozen different computer languages. Geany has an embedded terminal emulator. Several extra features can be added to Geany, using plugins. It has out-of-the-box support for projects written in the following programming languages:

* C
* C++
* D
* Erlang
* HTML
* Java
* Pascal
* PHP
* Python
* Ruby
* TeX
* Vala

### Advantages (Pros)
* It has a few IDE-type features.
* It is fairly lightweight.
* It is cross-platform, hence if you switch from Sabayon to another OS fairly frequently, it should not be too difficult to get Geany on said OS.
* Keyboard shortcuts are fairly intuitive.

### Disadvantages (Cons)
* The list of supported computer languages, for syntax-highlighting and other features is fairly small, compared to Atom, Gedit, GNU Emacs and Vim. See for example, the screenshot below, showing allowed file types.
{% include Links/image.html image="Geany/Geany-Document-File-Type-Programming-Languages.png" float="none" width="1100px" %}

### Obtaining It
It is found in the official repositories of most Linux distributions. It also has an [AppImage package](https://bintray.com/probono/AppImages/Geany#files), granted it is fairly out-of-date (version 1.24.1 vs. the latest version of 1.28) as of 29 August 2016.

### Summary
{% include_relative 13a-geany-summary.html %}
