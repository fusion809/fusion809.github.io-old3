## DNF
[**Dandified Yum**](http://dnf.baseurl.org/) (**DNF**) is a rewrite of yum that's major distinguishing feature, from its predecessor, is the fact it uses ZYpp's libsolv library for dependency resolution and hence has performance advantages over yum. Despite this DNF is very similar to its parent, as it has an almost identical syntax, is written in Python and it serves as a front-end (for dependency resolution, repository management, *etc.*) for the RPM package manager. DNF has replaced yum as the default package manager of Fedora since the release of Fedora 22 in May 2015. CentOS is likely to follow suit sometime in the future.

### Beginner-Friendliness
DNF is more intuitive than APT as there is just a single command that calls it, [`dnf`](https://fusion809.github.io/man/dnf.8.html). Its syntax is simple, for example {% include Code/coders.html line1="dnf install octave" %} should install GNU Octave, while {% include Code/coders.html line1="dnf remove octave" %} should uninstall it. Fedora and most of its derivatives use PackageKit front-ends such as Apper (for Qt-based desktop environments such as KDE) and GNOME Software, for graphical package management, both of which run DNF in the background. Overall I would rate DNF as **8/10** for beginner-friendliness. Its basic syntax is:

{% include Code/coder.html line1="dnf [<i>action</i>] [option(s)] [<b>target</b>(<b>s</b>)]" no="1" space="62" %}

for more details see its [man page](https://fusion809.github.io/man/dnf.8.html).

### Customizability
As with APT, DNF is primarily a binary package manager, so by default there are not many customizations that can be done to existing packages. Like with Debian packages for APT, however, a single upstream software package is often split into multiple smaller RPM packages, with each RPM package providing different functionalities of the upstream package. So this allows for some customization of installed packages, as users that just want basic core functionalities of the upstream package can just install the base package, while those that want to do development or debugging with the package can install the respective package providing said features.

DNF, however, is capable of downloading `.src.rpm` packages, which can be extracted (several ways this can be done, my personal preference as it works on any Linux platform is {% include Code/codeus-rbc.html line1="bsdtar -xf $package.src.rpm" %} modified and rebuilt if the user really wants to customize the package, like adjust its configure options. I would personally recommend that if you wish to do this and you are not familiar with the process of building RPM packages that you read [this][1] *Fedora Wiki* article on it.

### Development
As DNF is just a command-line front-end for the RPM package manager, package development is the same as it is on other Linux distributions that use RPM packages. Follow [this][1] *Fedora Wiki* guide on building RPM packages. Alternatively for most packages, you can also use the **Open Build Service** (**OBS**) to build the package, which affords one the ability to more easily distribute the packages to others should you wish to. [Here][2] is an OBS tutorial, further details on the OBS and its limitations can be found in the [ZYpp Development section](#toc51). It is also possible to do package development using the [Copr](https://copr.fedorainfracloud.org/), which I had never used until I wrote this post. I used it once, to get some info for you, my readers, on it and I must say it is like the OBS but it seems more flexible in some areas but less flexible in others.

Copr is an online tool that is specific to Red Hat Enterprise Linux and Fedora as it can only be used to build packages for these two distributions. It can take a spec file as its input, along with the required sources (which are taken from a git repository, like a GitHub repository, that you specify to it), or it can take a `.src.rpm`, but regardless of its sources it will build an RPM package for the platforms specified to it. These packages are then available from an online repository created and hosted by the Copr. Unlike the OBS, however, and this is where the Copr really shines in my books, it can provide packages Internet access during the build, hence making Atom package development for Fedora far easier. The OBS does have the advantage of being able to download the upstream source of the package for you (using download services), unlike Copr which requires you to upload the upstream source to it manually (which, of course, chews up your bandwidth). 

### Features
DNF can be used to download and then install RPM packages from a specified URL too, which is a feature it has inherited from yum. For example, to install Atom 1.5.3 on a 64-bit Fedora system from the official RPM binary one would run (this command will **not** prompt the user before downloading and installing this package):

{% include Code/coder.html line1="dnf install -y https://github.com/atom/atom/releases/download/v1.5.3/atom.x86_64.rpm" %}

. I ran this command on a Fedora 23 VirtualBox VM to test it out and here was its output:

~~~
Last metadata expiration check performed 0:05:36 ago on Mon Feb 15 16:25:44 2016.
Dependencies resolved.
================================================================================
 Package      Arch           Version                 Repository            Size
================================================================================
Upgrading:
 atom         x86_64         1.5.3-0.1.fc21          @commandline          55 M

Transaction Summary
================================================================================
Upgrade  1 Package

Total size: 55 M
Downloading Packages:
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Upgrading   : atom-1.5.3-0.1.fc21.x86_64                                  1/2
  Cleanup     : atom-1.2.4-0.1.fc21.x86_64                                  2/2
  Verifying   : atom-1.5.3-0.1.fc21.x86_64                                  1/2
  Verifying   : atom-1.2.4-0.1.fc21.x86_64                                  2/2

Upgraded:
  atom.x86_64 1.5.3-0.1.fc21                                                    

Complete!
~~~

I find it gives better, more detailed, output than APT, pacman or ZYpp. Additionally it supports group installs, which can save one a lot of time installing several different pieces of software that belong to the one group. For example, to install the KDE desktop one would run {% include Code/coders-fs.html line1="dnf install @kde-desktop" %} It also includes some actions (and yes these that are not included by basic or "simple" package managers like pacman). These include:

* autoremove &mdash; remove no longer needed packages. For example, packages that were once required for a package to run but are no longer.
* builddep &mdash; install the required build-dependencies of a package.
* URL installs.

it also has support for use of wildcard operators. For example:

{% include Code/coder.html line1="dnf install kernel&#8727;" %}

will attempt (not necessarily succeeding though, in the case of package conflicts) all packages that's name begins with the word "kernel". This can be helpful and time-saving when one wishes to install all subpackages of a package (e.g. the `-devel`, `-doc`, *etc.* subpackages).

### Speed
Running {% include Code/coders.html line1="time dnf install -y vim-common" %} returns:

~~~
Last metadata expiration check performed 0:17:31 ago on Sat Feb 13 22:08:01 2016.
Dependencies resolved.
================================================================================
 Package           Arch          Version                    Repository     Size
================================================================================
Reinstalling:
 vim-common        x86_64        2:7.4.827-1.fc23           fedora        6.0 M

Transaction Summary
================================================================================

Total download size: 6.0 M
Downloading Packages:
vim-common-7.4.827-1.fc23.x86_64.rpm            1.0 MB/s | 6.0 MB     00:05    
--------------------------------------------------------------------------------
Total                                           357 kB/s | 6.0 MB     00:17     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Reinstalling: vim-common-2:7.4.827-1.fc23.x86_64                          1/2
  Erasing     : vim-common-2:7.4.827-1.fc23.x86_64                          2/2
  Verifying   : vim-common-2:7.4.827-1.fc23.x86_64                          1/2
  Verifying   : vim-common-2:7.4.827-1.fc23.x86_64                          2/2

Reinstalled:
  vim-common.x86_64 2:7.4.827-1.fc23                                            

Complete!

real	0m33.853s
user	0m2.064s
sys	0m3.964s
~~~

as you can see, when I reinstalled `vim-common` the package was re-downloaded (even though I had just installed the package when I ran this command, so I thought, but was clearly mistaken, that it was in the DNF cache), which adds some time to the `real` time. To get a better estimate as to the actual installation time, let us take 17 seconds (the time recorded in this message as the total time taken to download the package) from the real time, getting **16.853s**. This figure I think may be an inaccurate representation of its speed as DNF is supposed to be faster than yum.

On 7 March 2017 I decided to re-perform this test with DNF 2.1.0 on Mageia 6 sta2 (on advice of Neal Gompa, or Pharaoh_Atem in the #mageia IRC channel, as he suggested DNF 2.x would be faster) and I got the output:

~~~bash
Last metadata expiration check: 0:14:22 ago on Tue Mar 07 15:56:10 2017 AEST.
Dependencies resolved.
=============================================================================
 Package         Arch        Version              Repository            Size
=============================================================================
Reinstalling:
 vim-common      x86_64      8.0.388-1.mga6       cauldron-x86_64      4.6 M

Transaction Summary
=============================================================================

Total size: 4.6 M
Downloading Packages:
[SKIPPED] vim-common-8.0.388-1.mga6.x86_64.rpm: Already downloaded          
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Reinstalling: vim-common-8.0.388-1.mga6.x86_64                         1/2
  Erasing     : vim-common-8.0.388-1.mga6.x86_64                         2/2
  Verifying   : vim-common-8.0.388-1.mga6.x86_64                         1/2
  Verifying   : vim-common-8.0.388-1.mga6.x86_64                         2/2

Reinstalled:
  vim-common.x86_64 8.0.388-1.mga6                                           

Complete!

real    0m11.977s
user    0m3.001s
sys     0m3.114s
~~~

as you can see the time was reduced, but not enough to make it faster than the other package managers compared in this article.

{% include_relative DNF/table-2-basic-usage-examples.html %}
