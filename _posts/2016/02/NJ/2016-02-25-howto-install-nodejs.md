---
layout:        post
title:         "How to Install Node.js on Linux"
date:          2016-02-25 +1000
categories:    linux, nodejs, installation-guides
permalink:     /howto-install-nodejs/
id:            "nodejs"
redirect_from:
  - /howto-install-nodejs-on-linux/
  - /2016/02/25/howto-install-nodejs/
---

One of the first things I do whenever I install a new distribution on my hard drive is I install all the programs I know and love. Usually one of the first such programs is the Atom text editor, and to build Atom from source code I need a fairly recent version of Node.js installed. The majority of distributions have Node.js in their software repositories, the only problem is that many distributions keep fairly old versions of Node.js in their official repositories. Case in point, as of 25 February 2016, Fedora 23 had Node.js 0.10.42 (belonging to the 0.10.x series which while still maintained was first released 19 March 2013) in their software repositories, even though the latest version (released 23 February 2016) is 5.7.0. openSUSE Tumbleweed (OT; a supposedly bleeding edge distro) even lags a little behind in their version of Node.js (presently 5.6.0), not as much as Fedora but still.

The following distributions have at least the 5.x series of Node.js available from their official software repositories as of 25 February 2016 (some distributions I have limited, or no experience with may be omitted by accident):

* Arch Linux &mdash; presently has the latest 5.7.0.
* Gentoo Linux &mdash; several different versions of Node.js exist in the Portage Tree, including members of the 5.x series.
* Manjaro Linux &mdash; presently has the 5.6.0 version, but will likely get the 5.7.0 version within a week.
* Sabayon Linux &mdash; presently has the 5.6.0 version in the official Entropy repositories.

My present distribution is OT, however and OT's version of Node.js has also been prone to bugs, specifically the `npm` command it provides has a bug, namely running it (with any inputs or even no input) gives:

~~~ bash
module.js:462
  if fs.exists('/usr/lib64', fs.F_OK, function(err) {
     ^^

SyntaxError: Unexpected identifier
    at runInThisContext (node.js:904:18)
    at NativeModule.compile (node.js:988:14)
    at Function.NativeModule.require (node.js:937:18)
    at startup (node.js:99:35)
    at node.js:1001:3
~~~

In order to build Atom myself (so that I can customize the package to my liking, more than I could if I stuck to the official releases at atom.io) I have to find a way around this bug. As my ability to fix spec file errors (i.e., the errors that are causing this bug to begin with) is in its infancy I really have two options at my disposal:

1. Build and install Node.js from source code. This method does work for me, as I have tried it, but it is tedious and takes up a lot of CPU when it is being done. This method is more error prone than option 2, so if this method fails for you I would use option 2 instead. Error reports for this option should be made as issues (or if you know the solution as pull requests) at Node's GitHub repository https://github.com/nodejs/node. I am afraid odds are, unless it is a dependency issue, I personally will not be able to help you with any such errors, hence you will need to report the error at said GitHub repository.
2. Use the pre-build Node.js Linux 64-bit binary tarball.

## Option 1: From Source Code
Option 1 takes probably roughly an hour and involves running:

{% include Code/codeu.html line1="wget -cqO- http://nodejs.org/dist/latest/node-v5.7.0.tar.xz | tar -xJ" line2="cd node-v5.7.0" line3="./configure --prefix=/usr" line4="make" line5="sudo make install" %}

The forth of these lines (`make`) should take by far the longest. Several build dependencies will need to be installed before installing Node.js via this method. Most package managers have an option to install build dependencies without installing the actual Node.js package in the official repositories (odds are it will not matter if the version in the official repositories is vastly out-of-date, if you get errors at the configure or make stages refer to [this article](https://github.com/nodejs/node/wiki/Installing-and-Building-Node.js#installing-via-package-manager) for possible missing dependencies). For example, to install them on Debian run {% include Code/coders.html line1="apt-get build-dep nodejs" %}.

## Option 2: From the Binary
I personally opted for option 2 as it is faster and easier. It entailed running:

{% include Code/codeu.html line1="wget -cqO- http://nodejs.org/dist/latest/node-v5.7.0-linux-x64.tar.xz | tar -xJ" line2="sudo cp -a node-v5.7.0-linux-x64/{bin,include,lib,share} /usr/" %}

and it worked perfectly. This method should, as far as I know, work on Debian, CentOS, Fedora, Mageia and Ubuntu and the best thing is that you do not need to install any build dependencies as you are **not** *building* Node.js, you are installing it from a pre-compiled binary. The only caveat is that this does not give one the latest npm, presently it gives npm 3.6.0 while 3.7.3 is the latest. To upgrade to the latest npm run:

{% include Code/coder.html line1="npm install -g npm" %}

## Installing Different Versions of Node.js
{% include Layouts/note-comp.html method="xz" %}
To install different versions of Node.js via option 1, run:

{% include Code/codeu.html line1="wget -cqO- http://nodejs.org/dist/v$ver/node-v$ver.tar.xz | tar -xJ" line2="cd node-v$ver" line3="./configure --prefix=/usr" line4="make" line5="sudo make install" %}

while to install different versions of Node.js via option 2, run:

{% include Code/codeu.html line1="wget -cqO- http://nodejs.org/dist/v$ver/node-v$ver-linux-x64.tar.xz | tar -xJ" line2="sudo cp -a node-v$ver-linux-x64/{bin,include,lib,share} /usr/" %}
