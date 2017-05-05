## CentOS
{% include_relative os-shot.html image="CentOS-7.png" width="1130px" float="none" description="CentOS 7 running GNOME 3" %}

### Background
{% include_relative os.md bugs="https://bugs.centos.org/my_view_page.php" d="https://www.centos.org/download/" dw="centos" os="CentOS" forum="https://www.centos.org/forums/" url="https://www.centos.org/" wiki="https://wiki.centos.org/" ml="https://wiki.centos.org/GettingHelp/ListInfo" docs="https://www.centos.org/docs/" irc="https://wiki.centos.org/irc" wp="CentOS" gr="centos" %}, which is an acronym for <b>C</b>ommunity <b>E</b>nterprise <b>O</b>perating <b>S</b>ystem, is a Linux distribution that is based on Fedora and Red Hat Enterprise Linux (RHEL), that unlike Fedora, values stability over bleeding-edge software. It is essentially a free equivalent to RHEL, as it is designed for individuals or organizations that do not require commercial support (that is, paid support, the type of support that comes with RHEL), but still require the system stability of an enterprise-class operating system. Its stability comes from the fact it uses older, but more thoroughly-tested versions of the software found on Fedora. For example, its current (as of {{ page.date | date: "%d %B %Y" }}) 7-1511 release uses GNOME 3.14 and the 3.10 version of the Linux kernel, which are from 15 and 30 months ago, respectively.

I, with my love of using the latest software, have not really taken a liking for CentOS. Rather, if I ever have to use a Linux distribution derived from Red Hat, I usually use the latest release of Fedora (currently Fedora 23). Unlike Fedora, CentOS is also more restricted in its architecture support as of the 7.1-1503 release, see Fedora can run on 32-bit and 64-bit machines, while CentOS 7.1-1503 and 7-1511 can only run on 64-bit machines.

### Installer
CentOS uses the Anaconda installer, similarly to Fedora. For further details about this installer see the [Fedora](#fedora) section of this post.

### Package Management
CentOS uses the [**Yellowdog Updater, Modified**](https://en.wikipedia.org/wiki/Yellowdog_Updater,_Modified) (**yum**) package manager that was once used by Fedora. yum's (or [`yum`](https://fusion809.github.io/man/yum.8.html) from the command-line) development has since been discontinued, in favour of its successor **Dandified yum** (**DNF**), which resolves package dependencies faster and more efficiently than yum does, by using ZYpp's libsolv library, hence it is likely that in the future CentOS will start using DNF as well. yum is widely considered one of the least efficient widely-used Linux package managers presently available and the cause is likely the fact that unlike APT or ZYpp it is written in Python. Python has its advantages and disadvantages as a language for a PMS to be written in and its slow speed is one such disadvantage. yum and DNF have essentially the same syntax, below is an example `~/.bashrc` for CentOS that shows some of its basic syntax.

#### yum Scripts

~~~ bash
# This should update yum's repositories and perform any required package upgrades
# without asking for confirmation
function update {
  sudo yum update -y
}

# Install the dependencies for a package with yum without asking for confirmation
function ybd {
  sudo yum-builddep -y $@
}

# Install a package with yum, without asking for confirmation, from official repositories
function yin {
  sudo yum install -y $@
}

# Install a local (that is, present on one's local system and does not have to be downloaded
# from yum's repositories) package with yum, without asking for confirmation.
function ylin {
  sudo yum localinstall -y $@
}

# Remove a package with yum, without asking for confirmation
function yrm {
  sudo yum remove -y $@
}
~~~

### Derivatives
{% include_relative derivatives.md os="CentOS" %}
CentOS has a few derivatives of its own and there are a few derivatives of its most notable derivative, Red Hat Enterprise Linux (RHEL). Besides RHEL and its derivatives there is very little I can comment on CentOS's derivatives as I have not used any of them or heard anything notable about them. The two RHEL derivatives I know anything about are [Scientific Linux](https://en.wikipedia.org/wiki/Scientific_Linux) and [Oracle Linux](https://en.wikipedia.org/wiki/Oracle_Linux), which while I have not used them I do know a little about their reputation. Scientific Linux, as its name suggests, is primarily targeted towards scientific computing and is co-developed by Fermi National Accelerator Laboratory and the European Organization for Nuclear Research (CERN) and is available free of charge. Oracle Linux is more oriented towards businesses that potentially need paid support (even though Oracle Linux itself is free) and an assurance of system stability.

{% include_relative specs.md arch="x86_64." shell="Bash." type="Linux." PMS="yum." ui="GNOME, KDE." IM="From live media." date="2004." country="U.S.A." rm="Fixed." tm="Individuals and organizations that place great importance on system stability, yet either cannot afford or do not want paid support from Red Hat." base="Fedora, RHEL." %}

{% include_relative os-min.md cpu="x86_64." ims="360 MB." ram="1,024 MB." hdd="10 GB. 20 GB recommended." %}

{% include_relative os-ratings.md bf="8." ob="7. About as out-of-the-box as Fedora, missing proprietary firmware." cmb="5." doc=">6. Has reasonable documentation, that I have little experience with, hence why I am giving it such a broad rating." sup="? Never had to use their support forums or IRC channels." pm="5. yum is definitely not my favourite PMS." sru="<5. Default DEs, GNOME and KDE, are fairly heavy on SRU." sb=">9. Very stable, never had stability issues with it myself." mewi="3-4. Some experience, not an awful lot though." oa="7. As previously mentioned I dislike outdated software in an OS." %}
