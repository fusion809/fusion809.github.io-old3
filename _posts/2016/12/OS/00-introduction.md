I have used quite a few free operating systems and I decided to create a more detailed comparison of a few more popular or major free operating systems, including:

{% include_relative includes/list.html %}

Now to be clear, what I mean by "free" is free of monetary cost to the end user, I am not referring to the [Free Software Foundation][1] (FSF)'s definition of "free". 

## Proper Etiquette in forums and IRC channels
In this section I intend to help people get the most out of forums, IRC channels and other forms of user support media. If you are looking for help it is important to always remember that those helping you are, generally, unpaid individuals, volunteering their free time to help you. Beware though, just because they may have had good intentions, does not mean that everyone in these forums and channels will be in a helpful mood. As these volunteers, just like all of us, sometimes have one of those days (or have just come from a situation that put them into such a mood) where they are quick to anger and negative assumptions. As these people are volunteers that are trying to help you, good manners, basic courtesy (like do not make your own negative assumptions about them!), clearly explaining the problem (which can be far more difficult than it sounds, if you are having trouble, remember a picture says a thousand words) and trying to troubleshoot your own problems before asking for help is always a good idea. The first thing you should always do is read any rules of the forum or IRC channel (that is, if they have them, I know the [Arch Linux][2] has them though). 

Equally important to trying to troubleshooting your own problems, is mentioning your attempts to troubleshoot your own problems in detail. This serves two equally-important purposes: for one, it gives those interested in helping you information as to what has not worked yet (in case they are thinking like you did that what you have already tried might work) and secondly it tells them you have done your research. As if you do not tell them about your own troubleshooting attempts (in as much detail as possible, too little detail and they will probably assume you are lying or exaggerating your efforts to fix the problem), they will usually assume you have done little, if not nothing, to troubleshoot the problem. I know this from first-hand experience, it is especially true with the support communities of do-it-yourself (DIY) distributions like Arch Linux. With Gentoo Linux, openSUSE and Ubuntu, usually the support communities are a little more forgiving and tolerant.

It is also important to remember that if no one gives you an answer to a question you ask, it does not mean they are ignoring you, or that your question is not a valid one. It usually means that no one has an answer for you, at that point in time. I know this can be frustrating (you will find several questions of mine on Atom Discuss, AskUbuntu and several other online sources that have no answers), but unfortunately it is life. Do not let this cause you to be rude to people trying to help you. 

I would also like to clarify what is helpful and unhelpful criticism in my books, as I hope it will help both the helpers in these support communities and the help recipients. To me what constitutes helpful criticism is detailed criticism that is intended and, reasonably expected, to result in positive change and not offend the person to whom the criticism is directed. It is usually phrased in a way that criticizes their actions, or their work, instead of the person themself. It is things, like proposing how someone can improve their experience in a forum or IRC channel, in a way, that is polite (so no name-calling and no profanity) and clear (sarcasm is usually a poor idea, as it is liable to offend and without facial expressions and other social clues it can be difficult to tell when sarcasm is intended). Faulty assumptions are usually a way to turn potentially well-meaning criticism into unhelpful criticism. Unhelpful criticism is usually vague (like "this is a load of ...."), does not specify the exact problem, does not offer any solutions to the problem (if there is one, as sometimes one has to ask if they are merely letting off steam and you just happen to be in the way) and is unnecessarily offensive or rude (if you are trying to avoid unhelpful criticism, I usually find using "LOL", "ROFL" or any other laughing gesture is not a good place to start, as it makes people think you are laughing at them or what they are saying. Likewise using profanity usually inflames the situation without any benefit). 

Generally speaking, beginner-friendly distributions have more friendly, slower to negative assumptions (I will clarify this in the next sentence) support communities than those of advanced distributions like Arch Linux. By negative assumptions, I mean a number of different assumptions (that often end up being false) I have seen people jump to, including:

* That you are not doing your own research on the issues you are asking for help with. Likewise that you are not trying to troubleshoot your own problems. This is why it is crucial to explain all your troubleshooting efforts in detail. Do not just say, "I Googled the problem and found no solutions." Tell them which results you looked at, if there were any that you did not understand (and hence may need help understanding, give details on exactly what you do not understand!), what you have tried based on the search results you did find and what output (if any) you received from these efforts. I know that this can be annoying to have to spell out to people, but sometimes it is a necessary annoyance. 
* That you are, even deliberately, not giving them enough information. This is a false assumption I have seen when I had an Xorg issue, that prevented me from copy-pasting everything into the [Arch Linux forums][3] (to help those trying to help me). Sometimes the situation itself can make it difficult to share information, so one only shares what one thinks (sometimes mistakenly) are the only relevant pieces of information.
* That you are not even trying to help them help you. That you want them to magically do everything for you. This is an assumption they are most likely to jump to, if they think your question is not clear. There is no shame in taking a few extra minutes to write your question as clearly as possible. This is something I have had difficulty with too, as sometimes the situation I am in is challenging to explain in words. It is usually in these situations that I use pictures to help me with my explanations. 

Beware that while DIY distributions usually have community members that are faster to negative assumptions and anger, I have found the odd negative-assumer in the communities of the fairly beginner-friendly distributions, Manjaro Linux and in the Sabayon Linux.

## Frequently-Asked Questions (FAQs)
This section covers some common questions I expect to arise from this post. 

### Question 1
**Question:** Which free operating system is best for an old computer?

**Answer:** Well, one has to account for personal preference and that there is, of course, some variation in what constitutes an old computer, but the following distributions are likely the best for most users operating on old hardware:

* [antiX][4] &mdash; a Greek Debian (stable) derivative that uses the IceWM window manager as its default user interface.
* [Bodhi Linux][5] &mdash; a Ubuntu LTS derivative that uses the Moksha window manager (a fork of the Enlightenment window manager) and ships with only four pre-installed applications.
* [Lubuntu][6] &mdash; the one I would be recommending for most users, especially beginners. It is an official Ubuntu derivative and uses the lightweight LXDE desktop environment.
* [LXLE][7] &mdash; a Ubuntu LTS derivative that uses the lightweight LXDE desktop environment by default.
* [Puppy Linux][8] &mdash; an Australian distribution that I have never managed to install in a VirtualBox VM due to graphics and mouse issues. I have never tried to install it onto my hard disk, so I have no idea how it runs on an actual machine (as opposed to a VirtualBox VM). 
* [Quirky Linux][9] &mdash; a Puppy Linux-derived distribution, that I have also failed to install in VirtualBox VMs. 
* [ReactOS][10] &mdash; a Russian open-source, binary-compatible clone of Microsoft Windows NT. Its aesthetics most closely resemble those of Windows 2000 or XP. Most binaries built for Windows XP are compatible with ReactOS.  

For a list of further, presently-maintained operating systems that are designed to run on older computers see [this *DistroWatch* search][11]. Not covered in this list are minimalist, extensively-customizable operating systems like:

* [Arch Linux][100]
* [Debian][300]
* [FreeBSD][600]
* [Gentoo Linux][700]
* [Linux From Scratch][12]
* [NetBSD][602]
* [OpenBSD][603]

these operating systems are more oriented towards intermediate-advanced users, but as they are so customizable it is possible for the user to install a lightweight desktop environment/window manager and hence make them suitable for older computers. All six of these distributions are presently compatible with 32-bit (i386, i486, i586, i686) and 64-bit (x86_64) systems, but beware Arch Linux presently only supports i686, x86_64 and ARM systems, with i686 support set to be phased out over the coming months.{% include_relative includes/fn-inline.html no="1" %}

### Question 2
**Question:** Which free operating system is best suited to a developer? 

**Answer:** Developers are people too, so inevitably there will not be one single distribution that is best for every developer. Fedora is specifically designed for software developers, especially those with a preference for open-source software. Linus Torvalds even uses this Linux distribution while working on the Linux kernel. Some developers will want a more stable distribution (that way, they can spend more time on their work, as opposed to filing bug reports and otherwise spending time on system maintenance), especially those with vast repositories (so that they can more easily get whatever software they want), for those developers the following distributions may be best: CentOS, Debian, Ubuntu (LTS) and derivatives thereof (like elementary OS, Linux Mint, Q4OS, Zorin OS, *etc.*). Likewise others will want a highly configurable operating system in which case they may want: Arch Linux, Debian, FreeBSD, Gentoo Linux, Sabayon Linux or Slackware. 

[Semicode OS][13] was also designed specifically for developers and has several IDEs and text editors pre-installed. 

### Question 3
**Question:** What is so important about out-of-the-box FUSE support? (Hence why did I include it in my infoboxes?)

**Answer**: FUSE is used for easily mounting file systems without root privileges. It is useful for a few things, including running AppImages (a type of cross-distribution package format).

### Question 4
**Question:** What is the relevance of the default file system of operating systems? 

**Answer:** File systems are relevant for a few different reasons. The main reason is that the [Btrfs][14] file system used by openSUSE allows for snapshots of the operating system to be taken, that one can rollback to if the operating system becomes unusable later. This can be incredibly handy, especially when one is using openSUSE Tumbleweed which I have found incredibly easy to inadvertently break, rendering it unusable. Beware though that the tool one uses to rollback Btrfs file systems is called snapper and it will only work if it can access DBus, hence it cannot be run (to my knowledge, at least, do correct me if I am wrong!) from a chroot (and, of course, a chroot is sometimes necessary to recover an OS that will not boot).

## Package managers
In this section I will briefly review the key characteristics of the package managers of the operating systems reviewed in this post.

### Debian package management
[**dpkg**][15] and its higher-level official front-end [**APT**][16] are used extensively by Debian-based operating systems. dpkg was initially developed in the early-mid 1990s by Ian Murdock (the founder of Debian) and a few other members of a fairly small development team. Originally it was written predominantly in Perl, but it was later rewritten in C. APT's development began in the mid-late 1990s and it was and still is written predominantly in C++, with most of the remaining code being written in Shell. When installing a package that has already been downloaded (and placed in the cache) the APT/dpkg combination installs packages fairly fast, although slower than pacman and ZYpp do. 

Debian packages are built using a tool called debuild (which is provided by a package called [`devscripts`][17]), which uses the contents of a specialized folder usually named `debian`, along with the upstream source code, to construct the Debian package. Usually the `debian` folder is placed as a subfolder of the upstream source code. The most important file in this folder is probably the `rules` file (with that exact name). This file is a type of Makefile (you will even find its first line is `#!/usr/bin/make -f`, which essentially says this file should be treated as a Makefile). 

### Entropy
[**Entropy**][18], which is used by Sabayon Linux and its derivatives (like Spike Pentesting), is the fastest binary package manager mentioned in this post that is written in an interpreted language. Packages installed with Entropy were originally built using Portage and then converted from a Portage binary package to an Entropy binary package using Entropy itself. 

### pacman
[**pacman**][19], which is used by Arch Linux-based distributions as well as the &ldquo;independent&rdquo; (using quotation marks as I think the mere fact these distros use pacman as their package manager suggests they are not *truly* independent) distributions Frugalware and KaOS. pacman is the single fastest package manager mentioned in this review and it is written predominantly in C and to a lesser extent Python and Shell. 

The `pacman` package on Arch Linux and derived distributions usually includes a utility called `makepkg` for building packages. `makepkg` is a shell script that takes a specialized type of shell script known as a PKGBUILD (which always have that exact filename), along with other source files (like the upstream sources) and produces a package that can be installed using pacman. Nowadays most pacman packages have the `.pkg.tar.xz` file extension, although they can have the `.pkg.tar.gz` file extension also. See pacman packages used to be gz-compressed back when xz-compression was too time and resource-expensive but nowadays the packages in the official Arch Linux repositories (and the official repositories of most of its derivative distributions) are all xz-compressed (as they usually have better compression and hence take up less disk space and take less bandwidth to transfer across the internet). 

### pkgtools
[**pkgtools**][20] is the official, default package management system of Slackware and a few of its derivatives. It is unusual among Linux package managers in that it serves only low-level functions (like installing packages, removing them and upgrading) and has no official, default front-end for carrying out more high-level functions (such as repository management, download management, dependency resolution, *etc.*). It does have an unofficial front-end for package management, slapt-get, that is quite popular but does not come pre-installed with Slackware. Packages that pkgtools can install are built using a type of specialized shell script known as a SlackBuild.

### Portage
[**Portage**][21], which is used by Gentoo Linux-based distributions and is written in Python and Shell. It is one of only two source code Linux package management systems mentioned in this review, with the other being Exherbo's Paludis. The fact it is a source-based package manager means that by default it installs software that it manually compiles from source code, as opposed to most Linux package managers which install software from pre-compiled binary packages. Portage works with ebuilds, a type of specialized shell script that Portage command can read, compile software packages and install them by following the instructions contained therein.

### Ports
FreeBSD and the others BSDs use a [**ports system**][23] and binary pkg package manager. The ports system is a means by which people can build their packages from source code and install them. It consists of a series of Makefiles and patches for building software packages from source code. The pkg package manager installs binary packages that have already been compiled using the ports system on a distant build server. On FreeBSD the ports collection is located at `/usr/ports` on a live file system.

### RPM
[**RPM**][23] and its higher-level front-ends [**APT-RPM**][24], [**DNF**][25], [**urpmi**][26], [**yum**][27] and [**ZYpp**][28]. Used by Red Hat, SUSE and Mandriva-based distributions. RPM originally stood for Red Hat Package Manager but now it is a recursive acronym (so it stands for RPM package manager). RPM is written predominantly in C, with most of the remainder of its code being made up of Perl and Shell. RPM itself is fairly fast, although some of its most popular front-ends, DNF, urpmi and yum are written in interpreted languages namely Perl and Python and so inherently are rather slow. RPM packages are built using the rpmbuild command and they require a special file directory layout in order for their build to succeed. The most important file for building RPM packages is the so called spec file which is similar in its syntax to shell but with several &ldquo;macros&rdquo; one can use to simplify building tasks. 

RPM is unique among lower-level package managers in that it can download RPM files and install them itself. For example, running:

{% include Code/coder.html line1="rpm -i https://github.com/atom/atom/releases/download/v1.14.3/atom.x86_64.rpm" %}

should, provided there are no missing dependencies, download the atom.x86_64.rpm file from https://github.com/atom/atom/releases/download/v1.14.3/atom.x86_64.rpm and then install it with RPM. It also keeps track of required and provided libraries for each RPM package.

RPM packages are built using the `rpmbuild` tool. This tool is provided by the `rpm-build` package on most RPM-based distros like Fedora and openSUSE. 
