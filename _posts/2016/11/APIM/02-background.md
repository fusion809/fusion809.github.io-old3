## Background
The objective when building an AppImage is to create a directory, called an AppDir (usually with the folder name `<APPNAME>.AppDir` where `<APPNAME>` is the name of the application you are creating an AppImage for) with the following structure:

~~~bash
<FS>
AppRun
<APPNAME>.desktop
<APPNAME>.{png,svg,xpm,jpg}
~~~

The final file `<APPNAME>.{png,svg,xpm,jpg}` is whatever image file (in PNG, SVG, XPM, JPG formats, just to name a few possible formats) for the app that is referenced in the desktop configuration file. `<FS>` is the AppImage's copy of the application's file system, this is also known by the variable name `$PREFIX`. See every app installed via one's package manager has a set of system directories that contain its files. In the case of AppImages this file system also includes extra file libraries and executables to ensure the program will work on whichever system it finds itself. [Here](https://gist.github.com/972ee179cefb92e32c2334cd8eae68ff) is an example `<FS>` for the Code::Blocks AppImage, I provided a link to it instead of including it in this post because it is simply too large to fit in this post.

Usually `<FS>` is created by downloading Debian or RPM packages for a package providing `<APPNAME>` and all of its dependencies for a **source distribution** and extracting their contents (usually if Debian packages are used they are extracted using the `dpkg-deb -x` command) to the AppDir. See these packages contain the files they provide in the location they are installed on your live system. For example, if you downloaded a Code::Blocks Debian package and extracted its contents to a local directory (say for argument's sake `/home/fusion809`) then you would expect to see an executable file at `/home/fusion809/usr/bin/codeblocks`, as when that Code::Blocks Debian package is installed it installs an executable file to `/usr/bin/codeblocks` on your file system. The source distribution ideally should be the oldest (especially with regard to the age of the software in its official repositories), yet still supported distribution, that has a suitable package one can build the AppImage from. As an AppImage will only work on distributions of the same age or newer than the source distribution used to build the AppImage. So if you build an AppImage using packages from CentOS 7 you should not expect it to run on CentOS 6, as CentOS 6 is *older* than the source distribution, CentOS 7.

Before I tell you some reasonable choices for a source distribution, I need to clarify some notation I am going to use. For the distributions listed later this will be my version notation:
* Release **n** is the latest stable release. For Debian as of {{ page.date | date: "%-d %B %Y" }} this would be version 8 (or Jessie).
* Release **n-1** is the second latest stable release. For Debian as of {{ page.date | date: "%-d %B %Y" }} this is version 7 (or Wheezy).
* Release **n-2** is the third latest stable release. For Debian as of {{ page.date | date: "%-d %B %Y" }} this is version 6 (Squeeze).
Please note how in the above notation examples I did not include dot point releases. That is, technically 8.6 is the latest stable release of Debian as of {{ page.date | date: "%-d %B %Y" }}, but I dropped the dot point release .6 from that to give 8.

So some reasonable choices for a source distribution include:
* CentOS n-2/n-1/n, as of {{ page.date | date: "%-d %B %Y" }} this would be 5, 6 or 7.
* Debian n-1/n, although an older system would be preferable to n.
* Mageia n-1/n. I personally would not recommend using Mageia, as their repositories are fairly minimalistic, in terms of the incldued software. Although, if you can get it to work, so be it.
* openSUSE n-1. The latest Leap release of this distro as of {{ page.date | date: "%-d %B %Y" }} is 42 (or if you include dot point releases 42.2). So n-1 is 13 (or 13.2 to be precise). I would say n-2 as well, but only n-1 and n are presently officially supported by the openSUSE development/packaging team.
* Ubuntu LTS n-2/n-1. So presently, as of {{ page.date | date: "%-d %B %Y" }}, this would be 12.04/14.04.

After a suitable AppDir has been created, one merely needs to run the command [`appimagetool`](https://github.com/probonopd/AppImageKit) on the AppDir.
