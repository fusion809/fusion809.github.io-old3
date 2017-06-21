### Portage tree
Then to set up the Gentoo official ebuild repository (or Portage tree which is stored in {% include Layouts/path.html path="/usr/portage" puncr=")" %} for use by Portage run:

{% include Code/coder.html line1="mkdir /etc/portage/repos.conf" line2="cp /usr/share/portage/config/repos.conf /usr/portage/repos.conf/gentoo.conf" %} 

At this point in time I would advise that a Portage snapshot (which should be no older than a day old) is downloaded with:

{% include Code/coder.html line1="emerge-webrsync" %}

After this you can run:

{% include Code/coder.html line1="emerge --sync" %}

with or without the `--quiet` option, to update your copy of the tree to the very latest. At this point in time rsync is used to keep your copy of the tree up-to-date. rsync has its own set of advantages and disadvantages. The main disadvantage that irritates me about rsync is that you are advised per Gentoo netiquette to not sync any more frequently than once a day. If you sync more than once per day using rsync you may be put on a temporary ban list by the mirror maintainers. One may ask why you would need to sync any more often than once a day, well I am a little obsessive-compulsive about synchronizing fairly frequently but besides that I have once updated to a broken copy of the tree. This copy was generated when a tree maintainer updated an ebuild without running repoman, hence making an ebuild manifest inaccurate.

#### Git-managed tree
Now it is up to you what to do. You can emerge git and use git to control your Portage tree, which is what I recommend. A git-controlled tree means you can update the tree as often as you want and as rarely the tree maintainers will make a careless mistake (like forgetting to run repoman before committing their changes) that may cause significant problems, this can come in handy. To emerge it run:

{% include Code/coder.html emerge="1" package="dev-vcs/git" %}

Then edit your {% include Layouts/path.html path="/etc/portage/repos.conf/gentoo.conf" %} file to:

{% include Layouts/file.html file="/etc/portage/repos.conf/gentoo.conf" caption="Change over to git control" line1="[DEFAULT]" line2="main-repo=gentoo" line3="<br/>" line4="[gentoo]" line5="location = /usr/portage" line6="sync-type = uri" line7="sync-uri = https://github.com/gentoo/gentoo.git" line8="auto-sync = yes" %}

I often install my favourite text editor, Vim, before I edit any files. GNU nano is included in the stage3 tarball, so if you favour using nano you need not install Vim. But if you wish to use Vim merely issue the command:

{% include Code/coder.html emerge="1" package="app-editors/vim" %}

to install it.

