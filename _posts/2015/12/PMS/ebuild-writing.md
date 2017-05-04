## ebuild Writing
{% include Layouts/note.md note1="This section is for advanced users (or those that are interested in attaining this level of understanding) and is mostly based on the [official ebuild writing guide](https://devmanual.gentoo.org/)." %}
**ebuild writing** and **testing** are two of the most important, yet difficult activities for Gentoo developers to do. Efficient ebuild writing requires a good knowledge of [Bash scripting](/2015/11/26/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users/), which I do not even possess, so bare with me. ebuilds can contain traditional Bash functions and calls to standard POSIX utilities (such as `cp` or `mv`), as well as specialized ebuild functions, ebuild variables and code snippets. **eclasses** (which are included into an ebuild by a line that starts with `inherit`) can add extra functions, variables and code snippets to ebuilds. If you are interested in writing ebuilds I recommend you install `app-portage/eclass-manpages` with Entropy by running: {% include Code/coders.html line1="equo i app-portage/eclass-manpages" %} as this will add manpages (and additional documentation) for the various eclasses to your system. To list the eclass manpages installed with this package, run (assumming you have the [Gentoolkit](#gentoolkit) installed): {% include Code/codeus-fs.html line1="equery files app-portage/eclass-manpages | grep /usr/share/man" %}

ebuilds are so varied in their contents and structure that it is difficult for me to find a reasonable example with which to teach their general structure. This is partly because many ebuilds have components that are specific to them and take up so much space that I do not wish to include them here. This is probably the best ebuild example I can provide (which is in the Portage Tree, its name is `supertux-0.1.3.ebuild` and is in the `games-arcade` category):
{% include_relative supertux-0.1.3.html %}
{% capture my_capture1 %}
The header in lines one to three is common to all ebuilds, with the date `1999-2015` being adjusted every new year (e.g., in 2016 it will be adjusted to `1999-2016`). Lines 5, 8-10, 12-15, 17-21 are where ebuild variables are being defined. They (and other allowed variables) are explained in **table 8**. Table 8 and 9 are essentially modified versions of tables present in the [Gentoo Development Guide's Variables Entry](https://devmanual.gentoo.org/ebuild-writing/variables/index.html).

{% include_relative table8-ebuild-variables.html %}
The sixth line, `inherit eutils games`, is where eclass functions are inherited (inheriting means make them available to the ebuild). Certain eclasses make extra ebuild-specified variables available for use. For example, the [`git-r3`](/man/git-r3.eclass.5.html) eclass allows for the specification of a `EGIT_REPO_URI` variable, which is essentially the same as a `SRC_URI` field, except it is for a git repository instead. **Table 9** describes variables that are predefined read-only in nature (that is, they are **not** set in ebuilds, although they can be used in ebuilds).
{% include_relative table9-ebuild-variables.html %}

ebuilds also contain their own set of functions, that are specified in **table 10**.
{% include_relative table10-ebuild-functions.html %}
<br/>
### Learning by Example
I personally learn ebuild writing best by trying it out myself, aided by the documentation and guided by specific examples that share similarities with the ebuild I am writing, so in order to aid you in finding example ebuilds I have decided to include this Bash script that can be used to search for them:

{% include Code/codeu.html line1="grep --include='&#42;.ebuild' -R &quot;&lt;PATTERN&gt;&quot; &lt;DIRECTORY&gt;" %}

In most cases the best value for `<DIRECTORY>` would likely be `/usr/portage` (the Portage Tree), although for ebuilds found in all the unofficial overlays managed by Layman that have been locally installed on your system, the `<DIRECTORY>` variable can be set to `/var/lib/layman`. The `<PATTERN>` field depends on what you want in the ebuild examples you are searching for. For example:

{% include Code/codeu.html line1="grep --include='&#42;.ebuild' -R &quot;pkg_config() {&quot; /usr/portage" %}

can be used to search for ebuilds in the Portage Tree with `pkg_config() {` appearing in them.

Whenever I feel I am ready to test out an ebuild, to see if it works, what I do is I run:

{% include Code/coder.html line1="ebuild &lt;PACKAGE&gt;.ebuild manifest && ebuild &lt;PACKAGE&gt;.ebuild package" %}

if this command returns errors I go back to the ebuild and look for any errors I may have made, whilst simultaneously looking at the error message I received from `ebuild`.

### Testing ebuilds
Usually the way I test out ebuilds is I enter a Sabayon chroot on my PC, build a binary package from the ebuild and if the package is usable from the command-line I install it on the chroot and test it out. To create a Sabayon chroot at `/root2` I run:
{% include_relative sabayon-chroot.html %}
while to change into this chroot I run:
{% include_relative sabayon-enter-chroot.html %}
When I reboot after setting up a chroot (regardless of its operating system, I have created both Gentoo and Sabayon chroots on my Sabayon machine) I find that it is then broken and will not work (specifically running `emerge` in the chroot will return an error mentioned [here](https://forums.gentoo.org/viewtopic-t-995438-view-previous.html) on the Gentoo forums). To fix this I run this script:
{% include_relative sabayon-chroot-res.html %}
while if after rebooting I decide I no longer want to use the chroot I run this to free up memory (as otherwise quite often I will find I do not have enough free RAM to even use several instances of Bash or a single instance of Google Chrome):
{% include_relative sabayon-chroot-umount.html %}
Other methods for testing ebuilds out do exist, but in my experience they are very tedious and can be quite wasteful (in terms of the bandwidth they chew up). One such method I have tried (and do not intend to use again, due to these limitations) is using Docker, for details on this method see [Ettore Di Giacinto (mudler)'s Blog Post](http://blog.mudler.pm/2015/11/part-1-building-gentoo-and-sabayon.html). Another method, that provides one the ability to perform more extensive tests than building and installing in a chroot, is to build and install the package on a Sabayon Linux Virtual Machine (VM). I have used this method a few times, usually when the package in question is graphical, instead of textual (e.g., my Enlightenment 20 and Moksha ebuilds), which means that I cannot test it out properly in a chroot.
{% endcapture %}
{{ my_capture1 | markdownify }}
