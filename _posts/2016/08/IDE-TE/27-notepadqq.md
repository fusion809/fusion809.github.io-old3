## Notepadqq
{% include Links/image.html image="text-editors/Notepadqq-0.53.0-Ubuntu-16.04.png" width="1130px" float="none" description="Notepadqq 0.53 running on Ubuntu 16.04" %}

### Background
{% include Infoboxes/editor.html editor="Notepadqq" date="2013." developers="Daniel Di Sarli and others." country="Italy." license="GPLv3." language="C++." repo="notepadqq/notepadqq" logo="notepadqq.svg" %}
[**Notepadqq**](http://notepadqq.altervista.org/wp/) is a lightweight text editor built using the Qt widget toolkit. It is designed to be a Linux-compatible equivalent to the Notepad++ text editor. It is still in beta development, and still has not had a "stable" release. I have found it fairly buggy myself, especially when opening up folders in it (as it has a tendency to freeze on me). Despite this it has support for a wide variety of different programming languages. Last point worth mentioning is that its development is donation-funded.

{% include Layouts/clear.html %}
### Customizability
Notepadqq is customizable via going to the menubar, Settings&rarr;Preferences. Through the interface that pops up after clicking Preferences, one can customize:
* Keyboard shortcuts
* Extensions (although from what I can tell there are few, if any available at the moment)
* Notepadqq's Appearance (such as its theme)
* Its human and computer language support

### Features
Provides syntax-highlighting and auto-indentation support for a wide variety of programming languages.

### Obtaining It
An [unofficial PPA](https://launchpad.net/~notepadqq-team/+archive/ubuntu/notepadqq) exists for Ubuntu, which allows it to be easily installed. Arch Linux also has a [package](https://aur.archlinux.org/packages/notepadqq/) for it in its AUR. There are no ebuilds for Notepadqq available from any overlays on the Layman remote list as of 4 September 2016 (source: [this search](http://gpo.zugaina.org/Search?search=notepadqq)). There is [one overlay](https://gitlab.com/kogaion/kogaion-desktop/) I have been made aware of that is not in the Layman remote list with a [Notepadqq 0.51.0 ebuild](https://gitlab.com/kogaion/kogaion-desktop/blob/master/app-editors/notepadqq/notepadqq-0.51.0.ebuild) in it. For other distributions I imagine it is quite a challenge to install.

### Advantages
* Fast to load.
* Fairly lightweight.

### Disadvantages
* Challenging to get on most distributions.
* Not in the official repositories of any distribution I am aware of.
* Not very extensible.

### Summary
{% include_relative 27a-notepadqq-summary.html %}
