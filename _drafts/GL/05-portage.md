## Portage
Portage is my favourite package manager besides Arch Linux's pacman and openSUSE's ZYpp, but that could, in part, be because I am very used to it and its syntax. Its syntax is the most unique, or unintuitive, of all package managers, except perhaps pacman. Most package managers have syntaxes that are very intuitive, for example, to install a package with ZYpp you would run:

{% include Code/root.html line1="zypper install &lt;PACKAGE&gt;" %}

where `<PACKAGE>` is the package's name. I say it is intuitive as you just type the command-line interface to the package manager and add a subcommand that basically says what you want to do (in this case install). While with Portage the command is:

{% include Code/root.html line1="emerge &lt;PACKAGE&gt;" %}

although `<PACKAGE>` may need the category of the package to be specified (for example, as {% include Packages/gentoo.html package="dev-vcs/git" %} for git). This command will not ask whether you want to install the package or not, it will simply do it. To ask for confirmation the way ZYpp would, run:

{% include Code/root.html line1="emerge --ask &lt;PACKAGE&gt;" %}

`--ask` can be abbreviated to `-a`. To remove the package run (with ZYpp):

{% include Code/root.html line1="zypper remove &lt;PACKAGE&gt;" %}

or (with Portage), without prompting:

{% include Code/root.html line1="emerge --depclean &lt;PACKAGE&gt;" %}

where `--depclean` can be abbreviated as `-c`. To add in the prompting (for confirmation) run:

{% include Code/root.html line1="emerge --ask --depclean &lt;PACKAGE&gt;" %}

### Man Pages
I do not have the time to explain every option and subcommand of emerge, so please refer to the man pages of Portage:

{% include_relative 05a-portage-man.html %}
