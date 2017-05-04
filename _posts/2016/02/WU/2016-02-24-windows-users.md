---
layout:           post
title:            "An Introduction to Linux for Windows Users"
categories:       linux, newcomers, simplified
date:             2016-02-24 +1000
last_modified_at: 2016-03-04 12:26:53 +1000
permalink:        /linux-for-windows-users/
id:               "windows-users"
redirect_from:
  - /windows-users/
  - /2016/02/24/windows-users/
---

A few days ago, I was asked by a long-time Windows user, how steep the learning curve for Linux is, as he wanted to make the transition from Windows to Linux, due to privacy concerns relating to Windows 10. This post is essentially a longer and more thorough answer than the answer I originally gave him. As such this post is oriented towards the average Windows user whom knows little, if anything, about Linux and is not necessarily otherwise technologically-knowledgeable. On this site there is a [glossary page](/glossary/), to which I would like to ask you to refer if any term I use is unknown to you. If you cannot find a definition for any term that confuses you there, please [contact me](/contributing/).

{% include_relative 01-what-is-linux.md %}

{% include_relative 02-common-applications.md %}

{% capture my_capture %}
{% include_relative 03-running-windows-applications-under-linux.md %}

{% include_relative 04-which-pc.md %}

{% include_relative 05-best-distros.md %}

{% include_relative 06-conclusions.md %}

{% endcapture %}{{ my_capture | markdownify }}

{% include_relative footnotes.html %}
