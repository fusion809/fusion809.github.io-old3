### Layman
{% include Links/links.html gp="Layman" gw="Layman" package="app-portage/layman" program="Layman" link="http://layman.sourceforge.net/" gr="gentoo/layman" %} is a command-line tool for managing Portage overlays. It can be installed with Portage (from the PT) using the command:
{% include Code/coder.html line1="emerge -av app-portage/layman" %}
or with Entropy using the command:
{% include Code/coder.html line1="equo i -av app-portage/layman" %}
I would recommend installing Layman using Entropy as it is less error-prone and the Layman package it installs was compiled with all the USE flags required to add every type of overlay available (including Bazaar (bzr), Git, Mercurial (hg) and Subversion (svn)). It is important to note that the Layman packages in the Entropy repositories do not have `dev-vcs/bazaar`, `dev-vcs/git`, `dev-vcs/mercurial` or `dev-vcs/subversion` listed amongst its dependencies, which means each of these packages will need to be installed manually in order to add overlays managed by them. If you want to install Layman and these version control systems run:
{% include Code/coder.html line1="equo i -av app-portage/layman dev-vcs/bazaar dev-vcs/git dev-vcs/mercurial dev-vcs/subversion" %}

Layman-added overlays (and the ebuilds contained within them) are stored in `/var/lib/layman/`.

#### Layman Syntax
The basic syntax for Layman is:
{% include Code/coder.html line1="layman [<em>options</em>] [<em>action</em>]" %}
As with emerge, I am not going to cover every option and action available for layman, as that would take too long, plus this is not meant to be a substitute for the manpages of the package managers and other tools covered in this post. Some of the more important/frequently-used actions and options are covered in tables 4 and 5. Please note that all actions when given in long form, if they require input (like `--add` does) this input must be specified with an equal sign and no spaces. For example, to add the [`sabayon`](https://github.com/Sabayon/for-gentoo) overlay you may run:
{% include Code/coder.html line1="layman --add=sabayon" %}
or in shortened notation:
{% include Code/coder.html line1="layman -a sabayon" %}
It is important to note that while this technique will add the `sabayon` overlay to one's machine not all overlays can be added this way, as some overlays are not within Layman's default list of available overlays (which I will henceforth refer to as the **remote list**). To view the remote list, run:
{% include Code/coder.html line1="layman -L" %}
while to see the list of overlays currently installed, locally, on your machine run:
{% include Code/coder.html line1="layman -l" %}
To add a new overlay that is not within the Layman remote list, run:
{% include Code/coder.html line1="layman -o &lt;URL of repository XML file&gt; -f -a &lt;OVERLAY&gt;" %}
For example, for my overlay [`sabayon-tools`](https://github.com/fusion809/sabayon-tools), you could add it with:
{% include Code/coder.html line1="layman -o https://raw.githubusercontent.com/fusion809/sabayon-tools/master/overlays.xml -f -a sabayon-tools "%}
or as it is now in the Layman remote list (per {% include Links/genbug.md punc=")" id="566188" %} you could add it with:
{% include Code/coder.html line1="layman -a sabayon-tools" %}
{% include_relative table4-options-for-layman.html %}
<br/>
{% include_relative table5-actions-for-layman.html %}
