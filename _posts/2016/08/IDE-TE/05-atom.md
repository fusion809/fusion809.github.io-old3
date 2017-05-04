## Atom
{% include Links/image.html image="Atom/Atom-1.9.9-Ubuntu-16.04.png" width="1130px" float="none" description="Atom 1.9.9 running under KDE on Ubuntu 16.04" repo="atom/atom" %}

### Background
{% include Infoboxes/editor.html editor="Atom" logo="atom.png" focus="General-purpose text editor." date="June 2014." developers="GitHub, Inc." license="<a href='https://github.com/atom/atom/blob/master/LICENSE.md' link='_blank'>MIT</a>." language="CoffeeScript, CSS, JavaScript and Less." repo="atom/atom" country="U.S.A." %}
[**Atom**](https://atom.io) ([here](https://github.com/atom/atom) is its GitHub Repository) is a free and open-source (licensed under MIT) text editor developed by GitHub, Inc. Its first public release was in 2014, although its first stable release (1.0 release) was not until June 2015. It is unusual amongst the text editors listed here in a few different ways, firstly, its target audience is very wide with it being designed to be usable for inexperienced programmers as well as seasoned programmers and software developers. Secondly, it is written in CoffeeScript, HTML, JavaScript and Less &mdash; computer languages usually used to write web pages.
{% include Layouts/clear.html %}
### Customizability
{% include Links/image.html image="Atom/atom-packages-homepage-20160108.png" width="1130px" float="none" description="[Atom Packages Repository Homepage](https://atom.io/packages), note the current count of packages is 3,433 in this screenshot." %}
Atom is very customizable, via a grand total of over 6,320 themes and plugins that can be installed from the command-line, using the `apm` command, or from within Atom itself. I personally prefer the command-line, as I have had some bad experiences with the built-in installer. From the command-line the command for installing new themes or plugins is:
{% include Code/codeu.html line1="apm install &lt;PACKAGE&gt;" %}
where `<PACKAGE>` is the plugin/theme's name. Customizations, including plugins and themes are stored in `~/.atom`. Advanced customization (for example, of keyboard shortcuts) must be done by directly editing files in this directory. For example, in order to edit your keyboard shortcuts you need to edit `~/.atom/keymap.cson`. A guide on how to do this can be found in [Atom's Flight Manual](https://atom.io/docs/latest/using-atom-basic-customization#customizing-key-bindings). For example, to help me write this blog I have been using the following `~/.atom/keymap.cson`:
{% include Code/gist.html id="93dd0d16cd40875faa9e" %}
this is helpful because in order to bold text in a markdown file I merely need to select the text and press <kbd>Ctrl</kbd>+<kbd>B</kbd>. It also means that when I am editing HTML files, in order to wrap the code to make it easier to read, I merely press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>.

### Features
Atom has plugins for syntax highlighting and auto-indentation of most major computer languages including (each language is hyperlinked to its respective package description page, *if and only if*, said package does not come preinstalled on Atom):
{% capture proglang %}
* [Ada](https://atom.io/packages/language-ada)
* C
* C#
* C++
* CoffeeScript
* CSS
* [Fortran](https://atom.io/packages/language-fortran)
* [GNU Octave/MATLAB](https://atom.io/packages/language-matlab-octave)
* HTML
* Java
* JavaScript
* Less
* [Lua](https://atom.io/packages/language-lua)
* Markdown
* [MediaWiki markup](https://atom.io/packages/language-mediawiki)
* [PyMOL](https://atom.io/packages/language-pymol)
* Python
* [R](https://atom.io/packages/language-r)
* [SageMath](https://atom.io/packages/language-sage)
* [Scilab](https://atom.io/packages/language-scilab)
* Shell script
* XML
{% endcapture %}
<div class="div-col columns column-count column-count-3" style="-moz-column-count: 3; -webkit-column-count: 3; column-count: 3;">{{ proglang | markdownify }}</div>
and several others. It has packages that provide other features, including previews for markup languages such as [HTML](https://atom.io/packages/atom-html-preview) and [Markdown](https://atom.io/packages/markdown-preview) (which comes preinstalled with Atom) and [one](https://atom.io/packages/markdown-writer) that turns Atom into an excellent markdown writer. [One package](https://atom.io/packages/jekyll) can even enable one to run Jekyll (the static site generator used to power *The Hornery*) from within Atom, I personally avoid it due to the fact it continuously creates popups whenever one saves any changes to a file in one's Jekyll site directory and instead I use the {% include Atom/apm.md package="terminal-fusion" %} package to run Jekyll from within a terminal in Atom. This also gives me more detailed debugging information when issues are encountered on my site. These packages make it very convenient for me to write *The Hornery* in Atom, which I did for the year following *The Hornery*'s inception, although since late 2016 I have been using GVim to edit *The Hornery*. 

Atom can also gain code linting and autocompletion capabilities via the installation of packages. Packages with the <span class="package"><a href="https://atom.io/packages/search?q=linter-" link="_blank">linter-</a></span> prefix are, as you can guess, linters and the {% include Atom/apm.md package="linter" %} package must be installed in order for, at least most of them, to work. For instance, {% include Atom/apm.md package="linter-clang" puncr="," %} provide linting for C/C++/Objective-C/Objective-C++ files. Some autocompletion packages come pre-installed with Atom, although most autocompletion capabilities must be added via installing extra packages. Autocompletion packages usually have the <span class="package"><a href="https://atom.io/packages/search?q=autocomplete-" link="_blank">autocomplete-</a></span> prefix. For example, for C/C++/Objective-C/Objective-C++ code autocompletion I would recommend installing the {% include Atom/apm.md package="autocomplete-clang" %} package.

Atom also has packages that give it IDE capabilities, including compiling and interpreting source code files from within Atom's own interface as well as the ability to run git commands from within Atom (the later is provided by {% include Atom/apm.md package="git-plus" puncr=")." %} It also has a package ({% include Atom/apm.md package="mercurial" puncr=")" %} that provides support for managing Mercurial (`hg`) repositories, support for GNU Bazaar and Subversion repositories, from my understanding, is not yet available. I personally have installed the {% include Atom/apm.md package="script" %} package for the purpose of running Python scripts from within Atom, C/C++ developers may also wish to install the {% include Atom/apm.md package="build" puncr="," %} {% include Atom/apm.md package="build-tools" %} or {% include Atom/apm.md package="gpp-compiler" %} packages. One can also do Gentoo/Sabayon development in Atom using the {% include Atom/apm.md package="language-gentoo" %} package, specifically it is helpful in maintaining Portage overlays as it can create and update manifests without the need for opening up a terminal. It also provides syntax highlighting for ebuilds.

One package I like, that I would recommend if you wish to use Atom on more than one PC, but with the same packages on each PC, is {% include Atom/apm.md package="package-sync" puncr="." %} It reads a file, `~/.atom/packages.cson`, and when it is run, it will install all packages listed in this cson file. To save all my Atom customizations (in `~/.atom`) I use [this](https://github.com/fusion809/atom) GitHub repository. In it you can find my package.cson, keymap.cson, *etc.*

### Obtaining It
Atom is not in the official repositories of most distributions, with the exceptions of Arch Linux, Gentoo Linux, Manjaro Linux and Sabayon Linux. Official 64-bit Debian and RPM builds of Atom are available from its [releases page on GitHub](https://github.com/atom/atom/releases). Atom has an AppImage, which supports all 64-bit Linux platforms: [here](https://bintray.com/probono/AppImages/Atom) is its description page. I have also created my own shell script installer for it, [`atom-installer`](https://github.com/fusion809/atom-installer).

### Advantages (Pros)
* Easily and extensively customizable. Customization beyond that afforded by plugins provided by the Atom community must be done via writing plugins or scripts in CoffeeScript or JavaScript.
* Intuitive and easy to learn.
* Support for a wide range of different computer languages.
* Displays directory structure in (left) side panel.
* Very feature-packed, so feature packed it can be used as both a text editor and an IDE.

### Disadvantages (Cons)
* Slow to start, although with the release of version 1.3.0 the start time has been supposedly cut by 20-30%.[^1] I personally have not noticed any such improvement, although I cannot say for certain I would even if there was such an improvement.

### Summary
{% include_relative 05a-atom-summary.html %}

### External Links
* [Atom Blog](http://blog.atom.io/) @ blog.atom.io.
* [Atom Latest Release download page](https://github.com/atom/atom/releases/latest).
* [Atom Package Repository](https://atom.io/packages) @ atom.io/packages.
* [Atom Theme Repository](https://atom.io/themes) @ atom.io/themes.
* [atom-installer](https://github.com/fusion809/atom-installer), my Linux installer for Atom.
* [Build Instructions for Linux](https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md).
* [Support Forums](https://discuss.atom.io/) @ discuss.atom.io.
* [Tutorial for writing Atom Packages &mdash; written for those with a JavaScript background](https://www.sitepoint.com/how-to-write-a-syntax-highlighting-package-for-atom/) @ sitepoint.com.
