## Atom
{% include Links/image.html image="Atom/Atom-1.3.2.png" width="1130px" float="none" description="Atom 1.3.2 running under DDE" %}

### Background
{% include_relative links.md link="https://atom.io" gr="https://github.com/atom/atom" forum="https://discuss.atom.io" program="Atom" package="app-editors/atom" aw="Atom" wp="Atom_(text_editor)" irc="#atom" aurs="atom-editor" sw="Atom" ml="https://atom.io/docs/latest/" %} is a free and open-source (licensed under MIT) text editor developed by GitHub, Inc. Its first public release was in 2014, although its first stable release (1.0 release) was not until June 2015. It is unique amongst the text editors listed here in a few different ways, firstly, its target audience is very wide with it being designed to be usable for inexperienced programmers as well as seasoned programmers and software developers. Secondly, it is written in CoffeeScript, HTML, JavaScript and Less &mdash; computer languages usually used to write web pages.

### Customizability
{% include Links/image.html image="Atom/atom-packages-homepage-20160108.png" width="1130px" float="none" description="[Atom Packages Repository Homepage](https://atom.io/packages), note the current count of packages (themes and plugins included) is 3,433." %}
Atom is very customizable, via a grand total of over 3,400 themes and plugins that can be installed from the command-line, using the `apm` command, or from within Atom itself. I personally prefer the command-line, as I have had some bad experiences with the built-in installer. From the command-line the command for installing new themes or plugins is:
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
and several others. It has packages that provide other features, including previews for markup languages such as [HTML](https://atom.io/packages/atom-html-preview) and [Markdown](https://atom.io/packages/markdown-preview) (which comes preinstalled with Atom) and [one](https://atom.io/packages/markdown-writer) that turns Atom into an excellent markdown writer. [One package](https://atom.io/packages/jekyll) can even enable one to run Jekyll (the static site generator used to power *The Hornery*) from within Atom, I personally avoid it due to the fact it continuously creates popups whenever one saves any changes to a file in one's Jekyll site directory and instead I use the [`terminal-plus`](https://atom.io/packages/terminal-plus) package to run Jekyll from within a terminal in Atom. This also gives me more detailed debugging information when issues are encountered on my site. These packages make it very convenient for me to write *The Hornery* in Atom, which I did for over a year since I created the website in late 2015, although since 2017 I mostly use GVim to edit *The Hornery*. 

Atom also has packages that give it IDE capabilities, including compiling and interpreting source code files from within Atom's own interface as well as the ability to run git commands from within Atom (the later is provided by {% include Atom/apm.md package="git-plus" puncr=")." %} It also has a package ({% include Atom/apm.md package="mercurial" puncr=")" %} that provides support for managing Mercurial (`hg`) repositories, support for GNU Bazaar and Subversion repositories, from my understanding, is not yet available. I personally have installed the [`script`](https://atom.io/packages/script) package for the purpose of running Python scripts from within Atom, C/C++ developers may also wish to install the [`build`](https://atom.io/packages/build) or [`build-tools`](https://atom.io/packages/build-tools) packages. One can also do Gentoo/Sabayon development in Atom using the {% include Atom/apm.md package="language-gentoo" %} package, specifically it is helpful in maintaining Portage overlays as it can create and update manifests without the need for opening up a terminal. It also provides syntax highlighting for ebuilds.

One package I like, that I would recommend if you wish to use Atom on more than one PC, but with the same packages on each PC, is [`package-sync`](https://atom.io/packages/package-sync). It reads a file, `~/.atom/packages.cson`, and when it is run, it will install all packages listed in this cson file. To save all my Atom customizations (in `~/.atom`) I use [this](https://github.com/fusion809/atom) GitHub repository. In it you can find my package.cson, keymap.cson, *etc.*

### Obtaining It

#### Manjaro
Manjaro users must install Atom via the Arch User Repository (AUR), or via using my own [PKGBUILD](https://github.com/fusion809/PKGBUILDs/blob/master/atom-editor/PKGBUILD). At the time of writing the AUR contains five Atom packages, you can check to see if this statement has become outdated by going to [here](https://aur.archlinux.org/packages/?O=0&SeB=nd&K=atom-editor&outdated=&SB=n&SO=a&PP=50&do_Search=Go). These Atom packages are (**bold** is used to highlight keywords or points):

* {% include ArchLinux/aurb.md package="atom-editor" %} which builds a package for the **latest stable release** of Atom from **source code**. As it builds Atom from source code any momentary glitches in Internet connectivity can cause the build to fail, which would require one to start building the package again from scratch. My PKGBUILD is a more resilient version of this one, it will not fail due to momentary Internet connectivity issues.
* {% include ArchLinux/aurb.md package="atom-editor-bin" %} which builds a package for the **latest stable release** of Atom from a **precompiled Debian binary**. This PKGBUILD tends to lag behind its source code counterpart, in terms of how soon it is updated after a new version of Atom comes out.
* {% include ArchLinux/aurb.md package="atom-editor-beta" %} which builds a package for the **latest beta release** of Atom from **source code**. This package **cannot** be installed simultaneously, on the same machine, as the `atom-editor` package. If you would like to install the latest beta release of Atom and the latest stable release of Atom, simultaneously, on the same machine I suggest you use the `atom-editor` PKGBUILD in the AUR, or my GitHub repository, and the [`atom-editor-beta`](https://github.com/fusion809/PKGBUILDs/blob/master/atom-editor-beta/PKGBUILD) PKGBUILD in my GitHub repository. My `atom-editor-beta` PKGBUILD is specifically designed so that its installed files do **not** conflict with the installed files of `atom-editor`, it also has the same &ldquo;perseverance&rdquo; of the `atom-editor` PKGBUILD, and should keep running even if it runs into momentary Internet connectivity issues.
* {% include ArchLinux/aurb.md package="atom-editor-beta-bin" %} which builds a package for the **latest beta release** of Atom from its **Debian binary package**. This package **can** be installed simultaneously, on the same machine, as the `atom-editor` or `atom-editor-bin` package.
* {% include ArchLinux/aurb.md package="atom-editor-git" %} which builds a package for the **latest git snapshot** of Atom from **source code**.

#### Sabayon
Recently, I have noticed that Atom in the Entropy repositories is usually updated within a week or so of me updating it in the [`sabayon`](https://github.com/Sabayon/for-gentoo) overlay, so it should almost always be the latest version available. So to install it from the command-line one would merely run:
{% include Code/coder.html line1="equo i -av app-editors/atom" %}
If, the version(s) of Atom in the Entropy repositories are significantly out-of-date I usually use the ebuild in my overlay, {% include Sabayon/sabayon-tools.md %} to install it. The advantage of my ebuild over other ebuilds (including the one in the `sabayon` overlay, which I too help mantain) is that if you experience any momentary disruption of your Internet connection the other ebuilds may fail and you will have to start the build from the beginning again, while my ebuild will keep soldering on. This is unless the glitches in your Internet connection are so great in severity or length that it overwhelms my ebuild. To install Atom from this ebuild, run (this code assumes you have not added my overlay already, if you have, you may wish to substitute `layman -a sabayon-tools` with `layman -s sabayon-tools`):
{% include Code/coder.html line1="layman -a sabayon-tools" line2="emerge -av app-editors/atom::sabayon-tools" %}

#### Building from Source Code
If you are using some other platform, or for whatever reason none of the methods previously mentioned is applicable I suggest you compile and install Atom from source code. Official instructions on this can be found [here](https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md). To do this, you need to:
<ul>
  <li>{% capture point1 %}Get the source code. This can be done via git with: {% include Code/codeus.html line1="git clone https://github.com/atom/atom" %} and then checking out the latest release with:
  {% include Code/codeu.html line1="cd atom" line2="git fetch -p" line3="git checkout $(git describe --tags `git rev-list --tags --max-count=1`)" %}
  or via wget with (this will create a folder entitled `atom` with the 1.4.0 version of Atom's source code &mdash; replace 1.4.0 in the following code with the version of Atom you want):
  {% include Code/codeu.html line1="wget -cO- https://github.com/atom/atom/archive/v1.4.0.tar.gz > atom.tar.gz" line2="tar -xz -f atom.tar.gz -C atom --strip-components=1" %} Using git to get the source code takes up more hard drive space on your machine and uses up more bandwidth to download the source code, so odds are it will be best for you to use this wget approach to get the source code.{% endcapture %}{{ point1 | markdownify}}</li>
  <li>{% capture point2 %}Compile the source code, by running: {% include Code/codeus.html line1="script/build" %} from within the `atom` directory (to get into it run `cd atom`). This step requires a reliable Internet connection, as otherwise it will fail and you will then need to re-run this step.{% endcapture %}{{ point2 | markdownify }}</li>
  <li>{% capture point3 %}Install Atom by issuing the command {% include Code/codeus.html line1="sudo script/grunt install" %}{% endcapture %}{{ point3 | markdownify }}</li>
</ul>

### Advantages (Pros)
* Easily and extensively customizable. Customization beyond that afforded by plugins provided by the Atom community must be done via writing plugins or scripts in CoffeeScript or JavaScript.
* Intuitive and easy to learn.
* Support for a wide range of different computer languages.
* Displays directory structure in (left) side panel.
* Very feature-packed, so feature packed it can be used as both a text editor and an IDE

### Disadvantages (Cons)
* Slow to start, although with the release of version 1.3.0 the start time has been supposedly cut by 20-30%.[^1] I personally have not noticed any such improvement, although I cannot say for certain I would even if there was such an improvement.

### Summary
{% include_relative 04a-atom-summary.html %}
