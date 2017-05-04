### Package Managers
The following distribution(s) have Atom in their official software repositories:

* {% include Links/distros/gentoolinux.html puncr="." %} Atom (`app-editors/atom-1.6.2` to be precise) was added to Gentoo's official repository, that is, the Portage Tree, on the 6th of April 2016. Hence it can now be installed by running: {% include Code/coders.html line1="emerge app-editors/atom" %}, assuming one's local copy of the Portage Tree is up-to-date. A package conflict that will occur with a newly-installed Gentoo system is that `app-editors/atom` depends on `net-libs/nodejs`, which in turn depends on `dev-libs/openssl[-bindist]` (that is, this package without the `bindist` USE flag enabled), while `net-misc/openssh` requires this USE flag be enabled. The best solution is to re-emerge `net-misc/openssh` with the `bindest` flag disabled.
* {% include Links/distros/sabayon.html puncr="." %} To install Atom on Sabayon, run: {% include Code/coders-fs.html line1="equo i app-editors/atom" %}

the following distributions have an Atom package available from unofficial repositories:

{% include_relative 05ba-unofficial.md %}
