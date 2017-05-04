## CodeLite
{% include Links/image.html image="IDEs/CodeLite-9.0.0.png" description="CodeLite 9.0.0 running under Manjaro" float="none" width="1130px" %}

### Background
{% include_relative links.md program="CodeLite" package="dev-util/codelite" gr="https://github.com/eranif/codelite" aur="codelite" link="http://codelite.org/" wp="CodeLite" %} is a lightweight IDE for C, C++, PHP and Node.js that is written in C and C++. It does not support other programming languages, just these four.

### Customizability
I have limited experience with CodeLite, so I cannot really comment with confidence on its customizability, but from what I understand it is designed to be lightweight and their website does not really mention any plugins or other customizations.

### Features
It is fairly feature-packed (including git, subversion, GUI-building, *etc.* support) for the programming languages it supports.

### Obtaining It

#### Manjaro
On Manjaro CodeLite must be installed from the AUR, by running:
{% include Code/codeu.html line1="yaourt -S codelite" %}
for example. At the time of writing this version of the latest (9.0).

#### Sabayon
An old (from February 2013) version of CodeLite (4.1.5770) is presently in the Entropy repositories, to install it run:
{% include Code/coder.html line1="equo i -av dev-util/codelite" %}
alternatively, one can install it from an unofficial Portage overlay. At the time of writing the following overlays have the latest version of CodeLite:

* [`kaa`](http://gpo.zugaina.org/Overlays/kaa)
* [`lif`](https://github.com/killer2tester/gentoo-overlay-lif)
* [`sabayon-tools`](https://github.com/fusion809/sabayon-tools)
I have tried building CodeLite using the `kaa` overlay's ebuild and it failed due to a missing dependency:
`x11-libs/wxGTK:3.0`. I would personally recommend using my overlay's ebuild, because I have some control over it, so I can personally vouch for the fact it manages to build under Sabayon Linux.

### Advantages (Pros)
* Cross-platform able to run on Windows, OS X and Linux.
* Fairly lightweight for an IDE.
* Feature-packed

### Disadvantages (Cons)
* Support for only four programming languages.
* Not in the official binary package repositories for either Manjaro or Sabayon.

### Summary
{% include_relative 07a-codelite-summary.html %}
