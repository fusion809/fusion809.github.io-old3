### Entropy
{% include Links/image.html image="Package-Managers/Rigo-Application-Browser.png" width="1366" height="738" float="none" description="Rigo Application Browser running under KDE Plasma 5" %}

{% include Links/links.html package="sys-apps/entropy" program="Entropy" gr="Sabayon/entropy" sw="En:Entropy" link="/man/equo.pdf" pdf="PDF" %}, is a PMS that was specifically designed for Sabayon by Fabio Erculiani, the original creator of Sabayon. Its first unstable release to be added to Sabayon was in July 2008 (although its first unstable release full stop was back in 2007, according to Entropy's GitHub repository[^3]) when {% include Sabayon/forum.html f="60" t="13917" link="Sabayon 3.5 was released" %} and its first stable release to be added to Sabayon was made in 2012. Unlike Portage which is primarily designed to install source code packages (although it can also install binary packages), Entropy is designed to work with binary packages only. Binary packages take less time than source code packages to install and requires less user know-how and input. Entropy is also unique in that it has two official front-ends: command-line/textual (**Equo**) and graphical (**Rigo**). I personally favour using the command-line for installing packages on Linux distributions, because in my experience graphical installers are more prone to crashes during installation than their command-line/textual counterparts.

Compared to Portage, Entropy is far more simple to use, if you go to the Entropy Store you can see the USE flags used to compile the software packages provided by Entropy, as all packages provided by Entropy had to be compiled with Portage on another machine first (in `.tbz2` format) and then convert from a Portage package to an Entropy package with {% include Code/coders-fs.html line1="equo pkg inflate &lt;PACKAGE&gt;"%} Entropy contains packages from the Portage Tree and packages from Sabayon's own overlays, which are called [`sabayon`](https://github.com/Sabayon/for-gentoo) and [`sabayon-distro`](https://github.com/Sabayon/sabayon-distro), respectively. Entropy is also safer to use and support for using Entropy to install packages is far better than support for Portage-installed packages on the [Sabayon forums](https://forum.sabayon.org/).

As of December 2015 there are over 13,100 different packages (not including different package versions) in the Entropy repositories. If you want to check how many unique packages (not including differing package versions) are in the official repositories merely run:

~~~ bash
# Check the number of unique packages in the sabayonlinux.org
export SABO=$(sudo equo query list available --quiet sabayonlinux.org | sort | uniq | wc -l)
# Check the number of unique packages in the sabayon-weekly
export SABW=$(sudo equo query list available --quiet sabayon-weekly | sort | uniq | wc -l)
# Check the number of unique packages in the sabayon-limbo
export SABL=$(sudo equo query list available --quiet sabayon-limbo | sort | uniq | wc -l)

echo "There are ${SABO} unique packages (not including different package version) in the sabayonlinux.org (DAILY) repository"
echo "There are ${SABW} unique packages (not including different package version) in the sabayon-weekly (WEEKLY) repository"
echo "There are ${SABL} unique packages (not including different package version) in the sabayon-limbo (LIMBO) repository"
~~~

#### Equo Syntax
The generalized syntax for Entropy's command-line front-end, Equo, is:
{% include Code/coder.html line1="equo [<em>action</em>] [<em>options</em>] [<em>ebuild</em> | <em>atom</em>]" %}
Some (but by no stretch of the imagine all) options and actions for Equo are listed in tables 5 and 6, below. Note some options are only available for certain actions, for details see the man pages for Equo and its various actions (e.g., run `man equo install` for the equo install manual). One action and another option that are not covered in these tables, that I felt were worthwhile mentioning, are repo and mirrorsort, respectively. The command:
{% include Code/coder.html line1="equo repo mirrorsort &lt;REPO&gt;" %}
where `<REPO>` is the name of an Entropy repository (e.g., `sabayonlinux.org`, `sabayon-weekly` or `sabayon-limbo`), can be used to optimize the order of preference for the repository's mirrors, hence, potentially, accelerating the process by which Sabayon downloads software packages.
{% include_relative table6-equo-options.html %}
<br/>
{% include_relative table7-equo-actions.html %}
It is important to understand the output of Entropy, for example here is some of the output I obtained on 17 December 2015 when running {% include Code/codeus.html line1="sudo equo upgrade" %}:
{% include_relative entropy-output.html %}
{% capture my_capture %}
The first of these lines, indicates that the package `glibc` in the `sabayonlinux.org` repository was being upgraded from 2.20-r2 to 2.21-r1. Second, that `kde-cli-tools` in the `sabayon-limbo` repository was being upgraded from 5.5.0 to 5.5.1. Third, that `grep` 2.22 was being installed from the `sabayon-limbo` repository, over the old version 2.21-r1 that was in the `sabayonlinux.org` repository. Forth indicates that `qbittorrent` was going to be upgraded to version 3.2.5 in the `sabayonlinux.org` repository from the present version 3.2.4 that was installed using Portage (which is what `spm-db` indicates).
{% endcapture %}

{{ my_capture | markdownify }}
