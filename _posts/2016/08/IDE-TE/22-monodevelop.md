## MonoDevelop
{% include Links/image.html image="MonoDevelop/MonoDevelop-5.10-Ubuntu-16.04.png" description="MonoDevelop 5.10 running on Ubuntu 16.04" width="1130px" float="none" %}

### Background
{% include Infoboxes/editor.html editor="MonoDevelop" repo="mono/monodevelop" date="2004." language="C#." developers="Xamarin." license="<a href='http://www.monodevelop.com/help/faq/#under-which-license-is-monodevelop-available' link='_blank'>LGPLv2 and MIT</a>." focus="Mono/.NET IDE." logo="monodevelop.png" %}
[**MonoDevelop**](http://www.monodevelop.com/) (or **MD** for short) is a cross-platform IDE that is primarily intended to be used by Mono/.NET developers. Despite this it can be used for development unrelated to Mono/.NET. It is itself written almost entirely in C#, and has autocomplete, linting and syntax-highlighting support for a wide variety of different Mono/.NET framework languages such as C, C++, C#, D, F# and Vala. It also has a visual designer for building Gtk# (GTK+ with C# findings) interfaces.

It started off in 2003 as a cross-platform SharpDevelop fork. Although it has since become very distinct from SharpDevelop. It is developed by Xamarin (which itself is now a subsidiary of Microsoft) and its own FOSS community. Despite being considered "cross-platform", capable of running on Linux, OS X and Windows NT, many of its features are limited to Linux (source: [*Feature List*](http://www.monodevelop.com/documentation/feature-list/)). For example, debugging C/C++ programs with MonoDevelop is limited to Linux platforms.

{% include Layouts/clear.html %}<br/>

### Customizability
{% include Links/image.html image="MonoDevelop/MonoDevelop-5.10-Add-in-Manager-Ubuntu-16.04.png" width="500" float="none" description="MonoDevelop 5.10's Add-in Manager running on Ubuntu 16.04" %}

MonoDevelop is customizable via a plugin system, it has its own add-in manager. To open this add-in manager go to <code>Tools&rarr;Add-in Manager</code>. I personally have not needed to install any plugins, so I cannot really add much on this.

### Features
{% include Links/image.html image="MonoDevelop/MonoDevelop-5.10-debugging-C++.png" width="1130px" float="none" description="MonoDevelop 5.10 C++ debugger" %}
MonoDevelop has several important features expected of an IDE, such as autocompletion (or intellisense), linting and syntax-highlighting for its supported languages. It also has an integrated debugger for its supported languages. I have used MonoDevelop to work on a very simple C++ program that is completely unrelated to Mono/.NET, and its integrated debugger was quite useful. Unfortunately its support for C/C++ is to be removed in the upcoming 6.x release of MonoDevelop. Preview builds of MonoDevelop 6.x are available as flatpaks from [here](https://download.mono-project.com/monodevelop/). These flatpaks have a few minor graphical bugs (mostly related to their GTK menubars), but otherwise work fairly well in my experience. Installing them should be fairly simple and straight-forward and involves following [this guide](http://www.monodevelop.com/download/linux/).

### Obtaining It
MonoDevelop is in the official repositories of most Linux distributions, including:
* Arch Linux
* Debian (stable/testing/unstable)
* Fedora
* Gentoo Linux
* openSUSE Tumbleweed (Leap 42.1 has a MonoDevelop package in the Mono:Factory repository, but not in an official repository)
* Sabayon
* Ubuntu

notable distributions it is not in the official repositories of, include:

* CentOS

### Advantages
* Cross-platform so it should be easy to work on your MonoDevelop projects on whichever OS you find yourself on, Linux or not.
* Available for the majority of Linux distributions.

### Disadvantages
* Can be confusing how it manages files in projects

### Summary
{% include_relative 22a-monodevelop-summary.html %}

### External Links
* [mono/monodevelop](https://gitter.im/mono/monodevelop) Gitter chat room. You can ask for help with MonoDevelop installation and alike here. I have personally found responses are very slow, taking a matter of days or so, so prepare to be frustrated.
