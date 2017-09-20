## ZYpp
[**ZYpp**](https://en.opensuse.org/Portal:Zypper) (also known as **libzypp**) is the default package manager of openSUSE, SUSE Linux Enterprise (SLE) and their derivatives. ZYpp provides the libraries for openSUSE's command-line package manager, [`zypper`](https://fusion809.github.io/man/zypper.8.html) and its graphical package manager, YaST2. ZYpp serves as a front-end for the RPM package manager, providing advanced features like repository management, dependency resolution, *etc.*, making it similar to DNF and yum in that regard. ZYpp, unlike most other RPM package manager front-ends I am aware of (the only exception is, of course, APT-RPM), is written predominantly in the compiled language, C++, as opposed to DNF and yum which are written mostly in the interpreted language, Python, and urpmi (from Mageia/Mandriva/OpenMandriva) which is written in the interpreted language, Perl. The significance of this, from the point of view of users, is that it may give ZYpp a speed advantage over these package managers. Zypper is written in C++ too while YaST is written in Ruby (another interpreted language, equally, if not more, slow than Perl or Python).

### Beginner-Friendliness
{% include Links/image.html image="Package-Managers/YaST2-control-centre.png" width="600px" float="right" description="The YaST2 Control Center" %}
ZYpp is a fairly beginner-friendly package manager. Zypper has an intuitive syntax, which includes abbreviated commands such as `zypper in` for `zypper install`, `zypper rm` for `zypper remove` and `zypper up` for `zypper update`. YaST2 is probably the most powerful graphical package management system I have ever used, in that it gives users the greatest number of options, with which to configure their system. YaST2 is also the default installer of openSUSE, that is, it is used to install the openSUSE operating system. Overall I would rate it as **9/10** for beginner-friendliness.

{% include Layouts/clear.html %}
Its basic syntax is:
{% include Code/coder.html line1="zypper [<i>action</i>] [option(s)] [<b>target</b>(<b>s</b>)]" no="6" space="59" %}
{% include Layouts/clear.html %}

### Customizability
ZYpp, being a binary package manager, does not afford users much control over installed packages, although, it is possible to download the source packages (that is, the packages with the file extension `.src.rpm`) of installed packages, customize them and install the customized package.

### Development
As ZYpp works with RPM packages, following the [*Fedora Wiki*][1] instructions should suffice. It essentially involves creating a mock user called `makerpm`, with the required file system structure, getting the required spec file, source code files, *etc.* into their respective locations in your `/home/makerpm/rpmbuild` directory and finally running {% include Code/codeus.html line1="rpmbuild -ba $specfile.spec" %} (from the `rpmdevtools` package, which is not in the default repositories of any presently-supported openSUSE version, so to add it I recommend you use the `devel:tools` repository. [Here](https://software.opensuse.org/download.html?project=devel%3Atools&package=rpmdevtools) is where you can find one-click install files and installation instructions for the `rpmdevtools` package from this repository).

Here is an example `/home/makerpm/rpmbuild` directory structure, to serve as a guide for the discussion that follows:

~~~
.
├── BUILD
│   ├── atom-1.5.3.tar.gz
│   └── atom-1.6.0-beta3
├── BUILDROOT
│   ├── atom-0.194.0-1.x86_64
│   ├── atom-1.4.3-1.x86_64
│   ├── atom-1.5.2-0.x86_64
│   └── atom-beta-1.6.0-3.x86_64
├── OTHER
│   ├── atom.cpio.rsasign
│   ├── pesign-repackage.spec
│   ├── vim-7.4-rpmlintrc
│   └── vim.cpio.rsasign
├── RPMS
│   ├── noarch
│   └── x86_64
├── SOURCES
│   ├── apparmor.vim
│   ├── atom-beta.desktop
│   ├── atom.desktop
│   ├── gvim.desktop
│   ├── gvim.png
│   ├── gvim.svg
│   ├── missing-vim-client
│   ├── README.Japanese-XIM
│   ├── spec.skeleton
│   ├── suse.gvimrc
│   ├── suse.vimrc
│   ├── v1.5.3.tar.gz
│   ├── v1.6.0-beta3.tar.gz
│   ├── v7.4.1344.tar.gz
│   ├── vim132
│   ├── vim-7.1.314-CVE-2009-0316-debian.patch
│   ├── vim-7.3-filetype_changes.patch
│   ├── vim-7.3-filetype_ftl.patch
│   ├── vim-7.3-filetype_spec.patch
│   ├── vim-7.3-gvimrc_fontset.patch
│   ├── vim-7.3-help_tags.patch
│   ├── vim-7.3-mktemp_tutor.patch
│   ├── vim-7.3-name_vimrc.patch
│   ├── vim73-no-static-libpython.patch
│   ├── vim-7.3-sh_is_bash.patch
│   ├── vim-7.3-use_awk.patch
│   ├── vim-7.4-disable_lang_no.patch
│   ├── vim-7.4-filetype_apparmor.patch
│   ├── vim-7.4-filetype_mine.patch
│   ├── vim-7.4-highlight_fstab.patch
│   ├── vim-7.4-rpmlintrc
│   ├── vim.changes
│   ├── vimrc_example1
│   ├── vimrc_example2
│   ├── vitmp.1
│   └── vitmp.c
├── SPECS
│   ├── atom-beta.spec
│   ├── atom.spec
│   ├── build-rpm
│   └── vim.spec
├── SRPMS
│   ├── atom-1.5.3-0.src.rpm
│   └── vim-7.4.1344-0.src.rpm
~~~

The contents of the `BUILD`, `BUILDROOT`, `RPMS`, `SRPMS` and `OTHER` folders are generated automatically when `rpmbuild` is run, so you need not worry yourself about their content. It is the content of the `SOURCES` and `SPECS` directories that package developers have to concern themselves with. `SOURCES` contains the package's upstream source, along with any patches or other files that are specified as sources in the package's spec file. `SPECS` contains the most important file of all to RPM development, the one that package developers likely spend the greatest amount of time writing and fixing, the spec file (which has the `.spec` file extension). The `build-rpm` subdirectory in this directory can be ignored as it too is built automatically when `rpmbuild` is run. One thing about the `rpmbuild` command that I really dislike is that it cannot download the upstream source code file for you, and place it in the `SOURCES` directory if it is not already there. pacman's `makepkg` command and Portage's `ebuild` command do this automatically for users.

Alternatively, for most packages you can use the [**Open Build Service**][2], which can also be run locally without ever submitting the package to one's OBS repository. Some packages cannot be built using the OBS though, which is something I found out when I was trying to build my first RPM package, ironically, which was the [Atom text editor](https://atom.io).[^3] It was an exception as the OBS does **not** give packages Internet access during compilation. The Atom text editor is built or compiled by running the `script/build` command in its source's top-level directory, which requires Internet access as it downloads several Node.js modules and [Electron](https://electron.atom.io) using git and compiles them. A solution I came up with that ended up crashing and burning (refer to the forum thread mentioned in [^3]) was to compress a source code directory in which `script/build` had been run already (and as this command compiles everything in the source directory, this should have meant that I would not have to run `script/build` again in my atom spec file) and use that as the spec file's source.

### Features
ZYpp is very feature-packed, it possesses all the features previously mentioned of DNF, with one exception: group installs. Instead if you wish to install a group of packages you have to use patterns, similarly to APT's tasks. For example, to install all members of the pattern `books` one would run: {% include Code/coders.html puncr="." line1="zypper in -t pattern books" %} To list all available patterns run {% include Code/coders.html puncr="." line1="zypper pt" %} YaST2 can also do so called &ldquo;one-click installs&rdquo;, wherein you click a button on a webpage, that is hyperlinked to a file with the `.ymp` file extension, which if your web browser preferences are set properly, should automatically download. If you click on the file either in your browser or in your file manager, it will open YaST2 which will, with your permission, attempt to install the package (or even group of packages specified by some pattern) specified in the `.ymp` file. This system can be handy (and a time-saver) when one wishes to install a package from a repository not presently added, although if I already have the repository in question added, I usually prefer to use `zypper` to install the package.

### Speed
On openSUSE Tumbleweed running {% include Code/coders.html line1="time zypper &#8208;&#8208;no-refresh in -y &#8208;&#8208;force vim" %} returned:

~~~
Loading repository data...
Reading installed packages...
Forcing installation of 'vim-8.0.130-1.1.x86_64' from repository 'Main Repository (OSS)'.
Resolving package dependencies...

The following package is going to be reinstalled:
  vim

1 package to reinstall.
Overall download size: 0 B. Already cached: 1.4 MiB. No additional space will be used or
freed after the operation.
Continue? [y/n/? shows all options] (y): y
In cache vim-8.0.130-1.1.x86_64.rpm                (1/1),   1.4 MiB (  2.9 MiB unpacked)
Checking for file conflicts: .....................................................[done]
(1/1) Installing: vim-8.0.130-1.1.x86_64 .........................................[done]
zypper --no-refresh install -y --force vim  1.02s user 0.22s system 14% cpu 8.338 total
~~~

giving time of `1.02s`. Making it the second-fastest package manager in this comparison.

{% include_relative ZYpp/table-7-basic-usage-examples.html %}
