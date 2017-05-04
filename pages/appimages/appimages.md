---
layout:           page
date:             2016-11-01 +1000
title:            "AppImages: the Linux packaging format of the future"
permalink:        /appimages/
last_modified_at: 2017-03-31 13:50:01 +1000
---

[**AppImages**](http://appimage.org/) are a type of *cross-distribution packaging format* (CDPF), that are not installed and need no special tools to be run. They contain all the libraries, binaries, desktop configuration files and icons that cannot be reasonably expected to be provided out-of-the-box by the target systems (that is, the Linux distributions one would run them on), the application provided by the AppImage requires. In essence they are self-mounting disk image files, that run the application contained within them. They are most similar to the disk image package format (file extension: `.dmg`) of macOS. Usually, all that is required to run them is for them to be made executable (using `chmod +x <AppImage>`, where `<AppImage>` is the file name [with file extension] of the AppImage) and run (with `./<AppImage>`). Although one does not need to make them executable if the `appimaged` daemon is running. I personally have not contributed to the development of the AppImage package format itself (as I am not competent enough a programmer, to be honest), but I have collaborated with the developer of the AppImage format, Simon Peter (or [@probonopd](https://github.com/probonopd) as he is known as on GitHub) on creating AppImages for popular Linux apps like [Code::Blocks](https://github.com/probonopd/AppImages/issues/107), [GNU Emacs](https://github.com/probonopd/AppImages/issues/94), [NetBeans](https://github.com/probonopd/AppImages/issues/105) and [SuperTux](https://github.com/probonopd/AppImages/issues/113).

## Available Open-Source AppImages
{% include Layouts/note.md note1="If you notice an open-source Linux app missing from this section or linked pages, that you would like to see provided as an AppImage, please request it from the upstream developers." %}

I personally have built a few AppImages, such as my [GVim (GTK+2)](https://github.com/fusion809/GVim.AppImage/releases/tag/continuous) and [NetBeans packages](https://github.com/fusion809/AppImages/releases/tag/netbeans8.2), although the per [vim/vim#1204](https://github.com/vim/vim/issues/1204) they (the Vim maintainers) now provide their own GVim AppImage too. Mine is smaller (so hence also a smaller download), however, by about 5 MB. I also came up with the [qBittorrent AppImage](https://github.com/probonopd/AppImages/issues/112) that @probonopd provides and collaborated on a few others. We have also failed at building other AppImages such as one for [CodeLite](https://github.com/probonopd/AppImages/issues/108), [OpenRA](https://github.com/probonopd/AppImages/issues/106) (although the upstream developers are still considering [providing one themselves](https://github.com/OpenRA/OpenRA/issues/12257)) and [RuneScape's NXT Client](https://github.com/probonopd/AppImages/issues/110). The [KDevelop](https://www.kdevelop.org) development team also provides an official AppImage release of their newer releases (namely for versions ≥5.0.0). A list of further AppImages can be found [here](https://github.com/probonopd/AppImageKit/wiki/AppImages). I have also created the following AppImage GitHub repositories with the AppImages uploaded by Travis CI to their continuous tag (so when you go to the repository links provided go to the "Releases" section and find the `continuous` tag. Attached to this tag should be the AppImage I built using Travis CI and the shell scripts in said repository): [Code-OSS.AppImage](https://github.com/fusion809/Code-OSS.AppImage) and [GVim.AppImage](https://github.com/fusion809/GVim.AppImage).

{% include_relative table1.html %}

{% include_relative table2.html %}

## See Also
* [probonopd's Collection of Example AppImages](https://bintray.com/probono/AppImages/)
