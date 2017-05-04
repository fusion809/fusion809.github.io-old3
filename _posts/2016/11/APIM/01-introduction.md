**AppImages** are my personal favourite cross-distribution packaging format, this is because unlike most packaging formats they are compact (which is something that binary tarballs lack, when they are decompressed in order to be run, that is) and do not need root privileges in order to be run. As with many other cross-distribution packaging formats, the fact that many upstream projects have not adopted the format as the primary way they distribute their software in binary format for Linux, is a real disappointment and roadblock hindering its widespread adoption. In my own personal efforts to counter this problem I have decided to write this post documenting the basics of how to create your own AppImage. If you have questions you can ask me, although I am not an expert on this and as such I frequently ask "the master" (my term, not his, rofl) for help on GitHub. The master, in this case, is [Simon Peter](https://github.com/probonopd) (@probonopd on GitHub), the person that created the AppImage package format.

This post will cover the following:

* How to write a YAML file to build an AppImage
* How to build an AppImage locally (although it will only cover how to do this on a Debian-based distribution like deepin, Linux Mint, Q4OS, Ubuntu, *etc.*)
* How to automate an AppImage build using Travis CI
