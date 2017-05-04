### Official Binaries
Quite often installing Atom from official binary releases (that is, the Deb/RPM releases previously mentioned) is the simplest method for those on distributions that use said package formats. So this section will guide one through this process.

#### Deb
If your specific distribution is capable of working with 64-bit Deb packages (e.g., 64-bit Debian, Linux Mint and Ubuntu should be able to work with these packages), presumably using the `dpkg` package manager, then the following should download the latest Atom release and install it, provided the presently-enabled repositories are capable of satisfying its dependencies:

{% include Code/coder.html line1="curl https://atom.io/download/deb > atom-amd64.deb" line2="dpkg -i atom-amd64.deb" line3="apt-get -f install" %}

#### RPM
On 64-bit RPM distributions several different commands maybe better suited to install Atom, depending on the specific distribution being used. For CentOS / Fedora &le;21 / Oracle Linux / Red Hat Enterprise Linux / Scientific Linux and other distributions still using the **yum package manager**, running the following should install Atom from the latest official RPM binary:

{% include Code/coder.html line1="curl https://atom.io/download/rpm > atom.x86_64.rpm" line2="yum install -y atom.x86_64.rpm" %}

while Fedora &ge;22, Korora &ge;22 and other distributions that are now using the **DNF package manager** run:

{% include Code/coder.html line1="curl https://atom.io/download/rpm > atom.x86_64.rpm" line2="dnf install -y atom.x86_64.rpm" %}

While on Mageia and other distributions using the **urpmi package manager** one would run:

{% include Code/coder.html line1="urpme apm # Mageia has a package called apm that is non-essential but conflicts with Atom" line2="curl https://atom.io/download/rpm > atom.x86_64.rpm" line3="urpmi atom.x86_64.rpm" %}

On openSUSE and other distributions using the **ZYpp package manager**, to install Atom, one would run:

{% include Code/coder.html line1="curl https://atom.io/download/rpm > atom.x86_64.rpm" line2="zypper in -y atom.x86_64.rpm" %}
