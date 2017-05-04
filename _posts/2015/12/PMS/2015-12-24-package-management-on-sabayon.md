---
layout:           post
title:            "Package Management on Sabayon Linux"
date:             2015-12-24 +1000
id:               "pms"
last_modified_at: 2016-02-13 19:21:00 +1000
categories:       sabayon, package-management, command-line
permalink:        /package-management-on-sabayon/
redirect_from:
  - /2015/12/20/package-management-on-sabayon/
  - /2015/12/23/package-management-on-sabayon/
---

{% include Layouts/note.md note1="This post contains links to external resources, which I have little, if any, control over and hence I cannot guarantee their accuracy." note2="Any instruction involving Portage or manual installation from source code, has the capability to break your system and cause other problems, so if you follow them you and you alone assume any and all responsibility for the consequences!" %}

Often, on this blog, I write posts regarding installing software with Sabayon's two package managers: **Portage** which it borrows from Gentoo and **Entropy** which is wholly original. I felt I would dedicate this post to both package managers, giving you some tips on how to use them safely and most efficiently. Generally speaking when it comes to Sabayon, unless you know what you are doing (for future reference users that "know what they are doing" in this context will be referred to as *competent Sabayon users*), you are recommended to only use Entropy as your **package management system** (**PMS**), as working with Portage is more risky and mixing Entropy with Portage is known to sometimes lead to system breaks. I mix the two, even though I have no formal training in anything technology-related and I have only been using Sabayon since July/August 2015 and had no experience before this with Gentoo Linux or Gentoo-based distributions like Calculate Linux.

This post will cover some of the basics of using Entropy and Portage individually and how to use them together, in the safest way possible. It will also cover other related topics like using Layman to add overlays and the basics on how to write ebuilds. You will probably notice that the command-line is featured heavily in this article, with little mention (usually all they will get is about a sentence mention each, if they are really notable) of graphical user interface (GUI) front-ends for these programs, this is because I tend to find command-line front-ends for package managers are more stable than their graphical counterparts.

{% include_relative Glossary.md %}

## Preliminaries
Entropy, Layman and Portage are all written in Python, Bash script and to smaller extents other programming languages like C. [Entropy](#entropy) is maintained by Fabio Erculiani and other developers of Sabayon, while [Layman](#layman) and [Portage](#portage) are both maintained by the Gentoo community. This section will cover some of the preliminary information for each of these programs, including their command-line syntax, so as to make the rest of this post easier to understand.

{% include_relative Portage.md %}

{% include_relative ebuilds.md %}

{% include_relative Layman.md %}
<br/>
{% include_relative Entropy.md %}
<br/>
{% include_relative gentoolkit.md %}
{% include_relative q-applets.md %}
{% include_relative mixing-entropy-and-portage.md %}

{% include_relative ebuild-writing.md %}

## The Algorithm
If you come across a program you want to install on your Sabayon machine (and you know it is compatible with Linux systems) the following is an algorithm I would suggest you follow to install it.

{% include_relative algorithm.md %}

### Examples
{% include_relative openra.md %}

{% include_relative supertux.md %}

{% include_relative enlightenment.md %}

## Acknowledgements
I would like to thank pontiki from the {% include Links/irc.html channel="jekyll" %} channel for some help with the formatting of this post and floppym from the {% include Links/irc.html channel="gentoo-dev-help" %} channel for providing the Bash script for use searching the Portage Tree for specific examples.

## Footnotes
[^1]: This is copied mostly from the [English Wikipedia](https://en.wikipedia.org/wiki/Package_manager)
[^2]: Specifically the [emerge.1.html](/man/emerge.1.html) manpage
[^3]: Source: [Entropy releases before 0.6.9](https://github.com/Sabayon/entropy/releases?after=0.6.9)
