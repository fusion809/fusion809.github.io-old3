## Komodo Edit
{% include Links/image.html image="Komodo/Komodo-Edit-9.3.1.png" width="1130px" float="none" description="Komodo Edit 9.3.1 running under Manjaro Linux" %}

### Background
{% include_relative links.md program="Komodo Edit" package="app-editors/komodo-edit-bin" aur="komodo-edit" link="http://komodoide.com/komodo-edit/" gr="https://github.com/Komodo/KomodoEdit" wp="Komodo_Edit" %} is a free and open-source text editor developed by ActiveState that is based on the Mozilla Platform. ActiveState also develops a proprietary IDE based on Komodo Edit called [Komodo IDE](https://en.wikipedia.org/wiki/Komodo_IDE). It supports several popular computer languages, including: Bash, C, C++, C#, CoffeeScript, CSS, Go, HTML, JavaScript, Less, Markdown, Perl, PHP, Python, Python3, *etc.*

### Customizability
Komodo Edit can be customized and extended by use of packages that come in the `.xpi` file format (the same format used by Firefox extensions) and can be downloaded from http://komodoide.com/packages/. I have limited experience with Komodo Edit, so I do not know just how customizable it is by use of these extensions.

### Features
Komodo Edit can have extra features added to it by use of plugins.

### Obtaining It
Komodo Edit is built from precompiled binaries on both Manjaro and Sabayon, when installed via the methods outlined below.

#### Manjaro
Komodo Edit can be installed from the AUR by running:
{% include Code/codeu.html line1="yaourt -S komodo-edit" %}

#### Sabayon
Komodo Edit can be installed from the [`spike`](https://github.com/Spike-Pentesting/spike-overlay) overlay, but it is a fairly old version (9.0.0, as of {% include Layouts/date.html %} the latest version is 9.3.2). Presently my overlay, [`sabayon-tools`](https://github.com/fusion809/sabayon-tools), contains a newer Komodo Edit ebuild (9.3.2), but it is presently not working. The following code should install Komodo Edit on Sabayon:
{% include Code/coder.html line1="layman -a spike" line2="emerge -av app-editors/komodo-edit-bin::spike" %}

### Advantages (Pros)
* Seems fairly feature-packed, something tells me that its feature set is likely similar to Atom.

### Disadvantages (Cons)
* Komodo Edit is fairly heavy on SRU.
* Not in the pacman repos for Manjaro. Komodo Edit 9.3.2 cannot be installed from any ebuilds in the Layman remote list.

### Ratings
{% include_relative 17a-komodoedit-summary.html %}
