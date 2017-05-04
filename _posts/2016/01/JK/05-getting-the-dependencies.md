## Dependencies
There are two package dependencies for Jekyll that should be installed with one's package manager, Git and RubyGems. This section covers how to install them with the most popular Linux package managers.

### APT
{% include Layouts/used-by.html distro1="antiX" distro2="Bodhi Linux" distro3="Debian" distro4="Deepin" distro5="elementary OS" distro6="Kali Linux" distro7="Linux Lite" distro8="Linux Mint" distro9="LXLE" distro10="PCLinuxOS" distro11="Tails" distro12="Ubuntu" distro13="Zorin OS" %}
{% include Code/codeu.html line1="sudo apt-get install git ruby" %}
or:
{% include Code/coder.html line1="apt-get install git ruby" %}

{% capture dnf %}
### DNF
{% endcapture %}{{ dnf | markdownify }}
{% include Layouts/used-by.html distro1="Chapeau" distro2="Fedora" distro3="Korora" %}
{% include Code/codeu.html line1="sudo dnf install git ruby" %}
or:
{% include Code/coder.html line1="dnf install git ruby" %}

{% capture entropy %}
### Entropy
{% endcapture %}{{ entropy | markdownify }}
{% include Layouts/used-by.html distro1="Sabayon" distro2="Spike" %}
{% include Code/codeu.html line1="sudo equo i -av dev-vcs/git dev-ruby/rubygems" %}
or:
{% include Code/coder.html line1="equo i -av dev-vcs/git dev-ruby/rubygems" %}

{% capture pacman %}
### pacman
{% endcapture %}{{ pacman | markdownify }}
{% include Layouts/used-by.html distro1="Arch Linux" distro2="Antergos" distro3="ArchBang" distro4="Chakra GNU/Linux" distro5="Manjaro Linux" distro6="Parabola GNU/Linux-libre" %}
{% include Code/codeu.html line1="sudo pacman -S git rubygems" %}
or:
{% include Code/coder.html line1="pacman -S git rubygems" %}

{% capture portage %}
### Portage
{% endcapture %}{{ portage | markdownify }}
{% include Layouts/used-by.html distro1="Calculate Linux" distro2="Gentoo Linux" distro3="Sabayon" %}
{% include Code/codeu.html line1="sudo emerge -av dev-vcs/git dev-ruby/rubygems" %}
or:
{% include Code/coder.html line1="emerge -av dev-vcs/git dev-ruby/rubygems" %}

{% capture urpmi %}
### urpmi
{% endcapture %}{{ urpmi | markdownify }}
{% include Layouts/used-by.html distro1="Mageia" distro2="OpenMandriva LX" %}
{% include Code/codeu.html line1="sudo urpmi git ruby-RubyGems" %}
or:
{% include Code/coder.html line1="urpmi git ruby-RubyGems" %}

{% capture yum %}
### yum
{% endcapture %}{{ yum | markdownify }}
{% include Layouts/used-by.html distro1="CentOS" distro2="Oracle Linux" distro3="Red Hat Enterprise Linux" distro4="Scientific Linux" %}
{% include Code/codeu.html line1="sudo yum install git ruby" %}
or:
{% include Code/coder.html line1="yum install git ruby" %}

{% capture zypp %}
### ZYpp
{% endcapture %}{{ zypp | markdownify }}
{% include Layouts/used-by.html distro1="openSUSE" distro2="SUSE Linux Enterprise" %}
{% include Code/codeu.html line1="sudo zypper in git ruby" %}
or:<br/>
{% include Code/coder.html line1="zypper in git ruby" %}
