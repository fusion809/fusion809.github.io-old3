As a Linux user I have found it a real challenge to find free (of monetary charge, not free as in freedom) games that I like, that can be run on Linux, without the use of [Wine](https://www.winehq.org/) or virtualization.{% include_relative fn-inline.html no="1" %} Most of the games I will mention in this post will be open-source, most of the rest will be freeware (free to play, without any paid membership or subscriptions being available), although I will mention one freemium game (wherein a free version is available, but paying for membership gives one some extra perks), RuneScape.

I intend on mentioning a wide variety of free games, including those I dislike and even those I have not really used all that much (or even at all). If you feel any review is inaccurate feel free to create a pull request at this website's source repository [fusion809.github.io](https://github.com/fusion809/fusion809.github.io), or start a [new issue](https://github.com/fusion809/fusion809.github.io/issues/new) at our bug tracker.

There are over a thousand different games available for Linux in all, so in here I will only be covering free games of particular interest to myself (and hopefully the majority of Linux gamers).

<h3 style="margin-right: 0px;">How many Linux games are there?</h3>
To check how many Linux games there were available on Gentoo Linux, on 5 May 2017, I ran:

{% include Code/codeu.html line1='eix -Cc games | grep "games\-[a-z]*\/" | grep -v "util\|engine" | wc -l' %}

and it returned 985, meaning, at least in theory, that there were 985 games available from the overlays I had enabled. My enabled overlays included:

* Gentoo's official overlay, the Portage tree
* [`flatpak-overlay`](https://github.com/fosero/flatpak-overlay)
* [`fusion809-overlay`](https://github.com/fusion809/fusion809-overlay)
* [`gamerlay`](https://gitweb.gentoo.org/proj/gamerlay.git/)
* [`games-overlay`](https://github.com/hasufell/games-overlay)
* [`gnome`](https://gitweb.gentoo.org/proj/gnome.git/)
* [`grub2-themes`](https://github.com/gentoo/grub2-themes-overlay)
* [`mozilla`](https://gitweb.gentoo.org/proj/mozilla.git/)
* [`steam-overlay`](https://github.com/anyc/steam-overlay)

So to determine how many open-source games were in my enabled overlays I ran:

{% include Code/codeu.html line1='eix -Cc games --not -L "EULA" | grep "games\-[a-z]*\/" | grep -v "util\|engine" | wc -l' %}

and it returned: 943. I should explain what this command does; `eix -Cc games` specifies to search for "games" in the category name of packages. `--not -L "EULA"` specifies that the packages should not be licensed under an End-User License Agreement (EULA), the most common type of proprietary software license. 

In an Arch Linux Docker container (the [`dock0/arch`](https://hub.docker.com/r/dock0/arch/) container to be precise) with `pacaur` installed I ran: 

{% include Code/codeu.html line1="pacaur -Ssq game | wc -l" %}

to determine the number of games available from the Arch Linux official stable, non-multilib repositories (so `core`, `community` and `extra`) and the Arch User Repository (AUR) and it returned: 1413. Beware, however, that with `pacaur`, to my knowledge there is no way to exclude programs that are game engines or utilities and not games themselves so some of these results may not be games at all. The equivalent Gentoo command would be:

{% include Code/codeu.html line1="eix -Cc games | wc -l" %}

and it returns 1158. 

<h3 style="margin-right: 0px;">Distribution-specific notes</h3>
In each game monograph I will be mentioning how easy it is to get the game on the following popular, sufficiently independent Linux distributions:

* Arch Linux
* CentOS
* Debian
* Fedora
* Gentoo Linux
* Mageia
* openSUSE
* PCLinuxOS
* Sabayon Linux, while it is based on Gentoo Linux it uses its own repositories (containing some, but not all, packages in the Gentoo Portage tree and all packages in a couple of its own repositories) and binary package manager (Entropy), hence making it sufficiently independent to deserve a mention. 
* Ubuntu

distributions based on these nine distributions usually have repositories containing at least many of the same packages, hence are not mentioned as there are just too many of them to mention them all. Unless otherwise stated you, the reader, are to assume that the game is available from the official repositories of all releases of the distribution in question when it is listed as having a package in their official repositories. If you are wondering why I am not mentioning Slackware Linux it is because Slackware's official repositories do not have a package for any game listed in this review. The unofficial Slackware repository, [SlackOnly](https://slackonly.com/), does have a package for the majority of games mentioned in this review.

<h3 style="margin-right: 0px;">Development stage</h3>
In the infobox of each game I mention the development stage of the game. Post-release development means that the first stable release (version 1.0) of the game has been released and the game is still under active development, or at least maintenance. 
