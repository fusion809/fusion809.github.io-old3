## Building from Source

### Dependencies
The minimum requirements for building Atom on Linux, according to the [official Atom build instructions for Linux platforms](https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md), include:

* 32-bit / 64-bit computer architecture. 64-bit is preferable.
* C/C++ build tools &mdash; the GNU Compiler Collection (GCC; must also have C++ support, C++ support is usually provided by a separate package called `g++` or `gcc-c++`, depending on one's distribution), the GNU C Library (`glibc`), including its development headers (sometimes provided by a separate package called `glibc-devel`) and GNU Make (usually called `make`) are usually used to satisfy this requirement on Linux platforms.
* Git. Usually this package is called `git` on the distribution, in question.
* Node.js (officially 0.10.x or above is supported, but Fedora has 0.10.x in their repositories and I have never managed to build Atom using their version of Node.js, so I would recommend using the 0.12.x or later series Node.js). The development headers are required, for some distributions this is provided by a package called `nodejs-devel`.
* npm (officially v1.4.x or above is supported). On most distributions this is provided by a package called `npm`. This requires Python 2.6 / 2.7, usually provided by a `python2` or `python` package.
* Development headers for the GNOME keyring. This package is usually called `libgnome-keyring` / `libgnome-keyring-dev` / `libgnome-keyring-devel`.

All these requirements can, for most distributions (in fact all of them that I have experience with), be satisfied quite easily by installing packages from official repositories, except for the Node.js / npm requirement.

#### Node.js / npm
The vast majority of Linux distributions have Node.js and npm in their software repositories, the problem is that the version in their software repositories is seldom ever sufficiently recent for it to be suitable for building Atom with. Popular distributions without a sufficiently recent version of Node.js / npm to build Atom with in their official software repositories, include:
<div class="div-col columns column-count column-count-6" style="-moz-column-count: 6; -webkit-column-count: 6; column-count: 6;">
  <ul>
    <li>{% include Links/distros/centos.html puncr="&#42;" %}</li>
    <li>{% include Links/distros/debian.html puncr="&#42;" %}</li>
    <li>{% include Links/distros/fedora.html %}</li>
    <li>{% include Links/distros/mageia.html %}</li>
    <li>{% include Links/distros/ubuntu.html puncr="&#42;" %}</li>
  </ul>
</div>
those with a sufficiently recent version of Node.js / npm in their official repositories include:
<div class="div-col columns column-count column-count-5" style="-moz-column-count: 5; -webkit-column-count: 5; column-count: 5;">
  <ul>
    <li>{% include Links/distros/archlinux.html %}</li>
    <li>{% include Links/distros/gentoolinux.html %}</li>
    <li>{% include Links/distros/opensuse.html %}</li>
    <li>{% include Links/distros/sabayon.html %}</li>
  </ul>
</div>

Distributions marked with an asterisk (&#42;) can be installed using the distribution's respective package manager, using the distribution's respective NodeSource repository. This method can also be used by older versions of Fedora (namely &le;21). For details see [here](https://nodejs.org/en/download/package-manager/). Fedora &gt;21 users could install a sufficiently recent version of Node.js via another method using their package manager. It involves finding a Copr repository containing a sufficiently recent version of Node.js, for example the `nibbler/nodejs` Copr. To add this particular Copr and install Node.js and npm from it, run:

{% include Code/coder.html line1="dnf copr enable nibbler/nodejs" line2="dnf install -y nodejs-devel npm" %}

On other platforms, one has two main options for installing Node.js and npm: building and installing Node.js from source code (which should automatically also build npm along with it) and installing these packages using the generalized Node.js Linux binary tarballs (GNLBT) officially released by the Node.js project. The latest release of Node.js can be found [here](http://nodejs.org/dist/latest/) (and this link should remain valid indefinitely, even with the release of more recent releases of Node.js). The tarballs relevant to Linux users are (where `x.y.z` refers to the latest version of Node.js, presently at the time of writing this post this is `5.10.1`):

<div class="div-col columns column-count column-count-2" style="-moz-column-count: 2; -webkit-column-count: 2; column-count: 2;">
  <ul>
    <li><code>node-vx.y.z-linux-x86.tar.gz</code></li>
    <li><code>node-vx.y.z-linux-x86.tar.xz</code></li>
    <li><code>node-vx.y.z-linux-x64.tar.gz</code></li>
    <li><code>node-vx.y.z-linux-x64.tar.xz</code></li>
    <li><code>node-vx.y.z.tar.gz</code></li>
    <li><code>node-vx.y.z.tar.xz</code></li>
  </ul>
</div>

The first two are the generalized Linux binary tarballs for 32-bit systems, the second two are the generalized Linux binary tarballs for 64-bit systems and the final two are the source code tarballs. I personally recommend installing Node.js using the generalized Linux binary tarballs, as the source code method is more tedious and failure-prone. To install Node.js 5.10.1 from the GNLBT on a 32-bit system, for example, one would run:

{% include Code/codeu.html line1="curl http://nodejs.org/dist/v5.10.1/node-v5.10.1-linux-x86.tar.xz | tar -xJ" line2="cd node-v5.10.1-linux-x86" line3="sudo cp -a {bin,include,lib,share} /usr/" %}

Before you do this, ensure that an older Node.js package is not already installed on your system via your package manager, as otherwise you will end up overwriting files belonging to this package and this could lead to problems down-the-track. To install Node.js 5.10.1 from the GNLBT for a 64-bit system one would run:

{% include Code/codeu.html line1="curl http://nodejs.org/dist/v5.10.1/node-v5.10.1-linux-x64.tar.xz | tar -xJ" line2="cd node-v5.10.1-linux-x64" line3="sudo cp -a {bin,include,lib,share} /usr/" %}

While to build and install Node.js from source code, assuming you have all the required dependencies already installed (including clang and GCC, both with C++ support, Python 2.6 or 2.7 and GNU Make), one would run:

{% include Code/codeu.html line1="curl http://nodejs.org/dist/v5.10.1/node-v5.10.1.tar.xz | tar -xJ" line2="cd node-v5.10.1" line3="./configure --prefix=/usr" line4="make" line5="sudo make install" %}

#### Summary
On {% include Links/distros/centos.html %} / **Oracle Linux** / **Red Hat Enterprise Linux** running:

{% include Code/coder.html line1="curl --silent --location https://rpm.nodesource.com/setup_5.x | bash -" line2="yum install -y python nodejs-devel npm gcc gcc-c++ make glibc-devel git-core" %}

should install all of Atom's build and runtime dependencies.

On {% include Links/distros/debian.html %} / {% include Links/distros/ubuntu.html puncr = "," %} running:

{% include Code/coder.html line1="curl -sL https://deb.nodesource.com/setup_5.x | bash -" line2="apt-get install -y nodejs npm build-essential git libgnome-keyring-dev fakeroot" %}

should install all of Atom's build and runtime dependencies.

On {% include Links/distros/fedora.html %} running:

{% include Code/coder.html line1="dnf copr enable nibbler/nodejs" line2="dnf install -y nodejs-devel npm glibc-devel python gcc gcc-c++ make git-core libgnome-keyring-devel" %}

should install all of Atom's build and runtime dependencies.

On {% include Links/distros/opensuse.html %} running:

{% include Code/coder.html line1="zypper in -y npm make gcc gcc-c++ glibc-devel git-core libgnome-keyring-devel" %}

should install all of Atom's build and runtime dependencies.

### Building Atom
Building Atom from source code involves of the same basic steps on every distribution. After installing the required build and runtime dependencies, they are:

{% capture getting %}
Getting the source code. There are several different ways to do this, including via git cloning Atom's GitHub repository and via downloading the source code tarball of the latest Atom release. Source code tarballs are far smaller downloads (<10 MB) than Atom's GitHub repository (>250 MB), so usually I would recommend building Atom from source code tarballs. To get the source code tarball of version `$ver` of Atom with cURL, extract its contents, and change directory into it, run:
{% include Code/codeu.html line1="curl https://github.com/atom/atom/archive/v$ver.tar.gz | tar -xz" line2="cd atom-v$ver" %}
{% endcapture %}

{% capture compiling %}
Compiling the source, which is done by running:
{% include Code/codeu.html line1="script/build" %}
{% endcapture %}

{% capture installing %}
Installing Atom to one's live file system, specifically to `/usr` (as opposed to the default location of `/usr/local/`) which is done by running:
{% include Code/codeu.html line1="sudo script/grunt install --install-dir /usr" %}

Alternatively, you can install Atom to a local directory instead of to one's root file system. This can be helpful, as it is easier to undo (that is, to uninstall Atom). To do this run:
{% include Code/codeu.html line1="mkdir install" line2="script/grunt install --install-dir install" %}
{% endcapture %}
<ol>
  <li>{{ getting | markdownify }}</li>
  <li>{{ compiling | markdownify }}</li>
  <li>{{ installing | markdownify }}</li>
</ol>
