## CentOS
{% include_relative infoboxes/02-centos.html %}

[**CentOS**][200] is a free enterprise Linux distribution that uses the RPM/yum package manager. It is likely that sometime in the near future CentOS will adopt the DNF package manager that Fedora has been using since mid 2015.

CentOS is essentially like a more stable, yet old (in terms of how up-to-date its software is) version of Fedora. I have used it for about year in [VirtualBox][201] VMs. I have found it very stable, but its software is so out-of-date that it can sometimes be a deal-breaker. For example, I have used CentOS Docker containers to compile software from source code so I can build an [AppImage][202] for them. Sometimes the version of GNU Compiler Collection (GCC) is so out-of-date, however, that the compilation fails. This is the case for CentOS 5/6 containers being used to build [GNU Octave][203] 4.2.0 from source code. CentOS 7 is barely up-to-date enough to compile GNU Octave 4.2.0. Its repositories are also far less comprehensive than Fedora. For example, it does not even have the SuperTux game in its official repositories (and yes I do include the Extra Packages for Enterprise Linux [EPEL] as an official repository of CentOS). 

It is unusual in that it does not have out-of-the-box FUSE support, despite being a fairly [out-of-the-box][204] operating system. Aside from its kernel (which has the proprietary [binary blobs][205] in place) all the software in its official repositories is open-source, and it has strict licensing requirements for all of its included software (aside from its kernel, apparently), much like the related distribution, Fedora.

### Installer
Also similarly to Fedora, CentOS uses the Anaconda installer, although I have never had too much of a drama with CentOS's version of the Anaconda installer. Then again I usually only have problem with the Anaconda installer, not when I run in it in a virtual machine (and I have never used CentOS outside a VM), but when I run on it my actual machine. 

### Packaging
The OBS also has support for building packages for CentOS. I build the latest Vim for CentOS 5, 6 and 7 using the OBS too, [here][1112] is where the packaging files can be found and [here][113] is the download page for this package and Vim packages for other distros. Fedora's Copr also has support for building CentOS packages, with the [*Extra Packages for Enterprise Linux*][206] (EPEL) chroots enabled. Both support building packages for all presently supported releases of CentOS (so 6 and 7). 

### Leadership
Decisions are made by a consensus reached by its own governing board.{% include_relative includes/fn-inline.html no="5" %}

### Closing remarks
Ideal CentOS users are at least intermediate-level users (so not beginners, unless they are fast learners) that:

* Love open-source, but not enough to ditch the standard kernel in favour of the [Linux-libre][207] kernel.
* Favour software stability over the very latest software releases.
* Favour a fixed release model distribution over a rolling release model.
* Favour a long-term supported distribution over a distribution with a short support cycle (e.g. Fedora). I personally dislike performing distribution upgrades as in my experience, something almost always gets broken, or at least damaged, in the process. 
* Do not have a need for any obscure pieces of software, that is, software that is not universally found in virtually every Linux distribution's repositories. CentOS tends to have more comprehensive repositories than Mageia (if one includes EPEL repositories), but less comprehensive repositories than Arch Linux or Fedora.
* Use CentOS or Red Hat Enterprise Linux at work. CentOS and RHEL are very similar (or so I am told, I have never used RHEL myself as it is a paid product and I refuse to pay for operating systems), so being experienced with one should help one out when using the other.

{% include Layouts/clear.html %}
