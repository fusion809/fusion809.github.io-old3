## Setup A Repository
You can set up an unofficial Arch Linux package repository, given that you can provide the following:

* A **server** you have reliable[^13] write access to, but that no one else, aside from some trusted individuals that may be collaborating on your repository with you, has write access to. This server should have a reliable and high-speed network connection, so that packages can be easily and rapidly downloaded from it. This is where the cost element comes in. Setting up your own web server is costly, hence the significance of this post.
* An **Arch Linux system**, or some other Linux distribution with the required tools (such as pacman's `makepkg` and `updpkgsums` utilities) for building Arch Linux packages. This system is one you need to have easy access to and it must be easily possible to transfer your package files (which may be quite large in some instances) to your server. An Arch Linux `namcap` can be handy for checking packages for common errors.

Now this post is about setting up a free Arch Linux package repository, and there are only two ways of doing this that I have experience with and are aware of (if there are more ways of doing this, especially ones that can be managed from the command-line and have great download speeds, please do tell me in an email [brentonhorne77@gmail.com](mailto:brentonhorne77@gmail.com)). These methods are:

* [**GitHub**](#github)
* [**Open Build Service**](#open-build-service)

### Open Build Service
Via the **Open Build Service** (**OBS**) &mdash; this is a great method if you are packaging free software,[^14] that is infrequently updated, does not require a network connection in the `build()` function and if you are only building a small number of packages. The OBS itself requires you to gain some extra knowledge, in order to use it effectively. The main advantage of this method over the GH method, in my opinion, is that it can be managed from the command-line, so you can automate package updates using shell scripts. It can also be accessed from a web interface ([https://build.opensuse.org](https://build.opensuse.org)), which is mostly handy when you are on system where the command-line client, `osc`, is either not available or not working. Its major disadvantages are that:

1. It does not provide internet access during the `build()`, or any other function.
2. Package databases can take awfully long to update after a package is updated. This is especially true if you have quite a few packages you are building.
3. If you have more than a small handful of packages to build, the download speeds and build speeds of your packages can really lag behind what you would likely expect or want. Sometimes packages will fail to download altogether!
4. The help available for OBS-related issues is via the [OBS Forums](https://forums.opensuse.org/forumdisplay.php/692-Open-Build-Service-(OBS)) (which is hosted by the openSUSE Forums) and while they try to help,[^15] I have found that unless your issue also affects the building of openSUSE packages, they are unlikely to be of much help.

#### External Resources
* [Build Service Tips and Tricks](https://en.opensuse.org/openSUSE:Build_Service_Tips_and_Tricks) at *The openSUSE Wiki*.
* [Build Service Tutorial](https://en.opensuse.org/openSUSE:Build_Service_Tutorial) at *The openSUSE Wiki*.
* [OSC Wiki Article](https://en.opensuse.org/openSUSE:OSC)

### GitHub
Via **GitHub** (**GH**) &mdash; this is my favourite method of hosting binary packages. You can tag a release in GitHub and add binary packages to a tagged release ([here](https://help.github.com/articles/creating-releases/) is the official GitHub documentation on how to do this from a web-browser). Although it is important to remember to include your Arch Linux package database files (of which there should be four). These are files generated using the command: `repo-add <ALRN>.db.tar.gz <PACKAGES>`. Where `<ALRN>` is the name of your Arch Linux repository[^16] and `<PACKAGES>` is the relative (or absolute, but relative is good enough) path of each of your binary package(s). Then your Arch repository will have the `Server=` field (for your `/etc/pacman.conf` file):

<div class="language-bash highlighter-rouge"><pre class="highlight">Server <span class="o">=</span> https://github.com/&lt;USER&gt;/&lt;REPO&gt;/releases/download/&lt;TAG&gt;/</pre></div>

where `<USER>` is the username field of the repo (that is, who owns it, or if it belongs to an organization, which organization owns it). `<REPO>` is the name of the repository. `<TAG>` is the name of the tag. For example for my (fusion809) `PKGBUILDs` repo's `current` tag I would use the `Server` field:

<div class="language-bash highlighter-rouge"><pre class="highlight">Server <span class="o">=</span> https://github.com/fusion809/PKGBUILDs/releases/download/current/</pre></div>

A natural question is, "How do I update my tagged release so that it is for the latest commit, without loosing the binary packages I have already attached?" The answer is that I do not know. I do not think it is possible, especially considering [this StackOverflow Answer](http://stackoverflow.com/a/8044605/1876983), which seems to indicate that to do this you need to delete your original tag and create a new tag of the same name. I have found their download speeds amazing (up to 3 MB/s), and they have no specific limit on the total size of the packages you upload to a release. The maximum size of an individual package is capped at 2 GB and quite frankly I have never heard of an individual Arch Linux package that is even 1 GB in size.

GH package databases are updated as soon as your binaries and database files have been uploaded, so this is certainly an efficient means of disseminating your packages to your friends, colleagues and others.

There are no officially-supported means of attaching binaries from the command-line, I know this as I have sent an email to GitHub asking for help. Their reply did provide a helpful alternative, however &mdash; there is a program written in Go that provides the ability to edit tags and releases, including attaching binaries, from the command-line. It is called [`github-release`](https://github.com/aktau/github-release) and I have created two AUR packages for it, [`github-release-bin`](https://aur.archlinux.org/packages/github-release-bin) and [`github-release`](https://aur.archlinux.org/packages/github-release). I have not quite mastered using it yet, so I am afraid I cannot share much information about using it. I have added `github-release` to my `pkgbuild-current` repository. To install it run:

<div class="language-bash highlighter-rouge"><pre class="highlight"><span class="k">if</span> <span class="sb">`</span><span class="s">cat</span> /etc/pacman.conf | <span class="s">grep</span> <span class="s2">"pkgbuild-current"</span> &gt; /dev/null 2&gt;&amp;1<span class="sb">`</span>; <span class="k">then
  </span><span class="gt">sudo</span> <span class="nb">printf</span> <span class="s1">'[pkgbuild-current]\nServer = https://github.com/fusion809/PKGBUILDs/releases/download/current/\nSigLevel = PackageOptional'</span> &gt;&gt; /etc/pacman.conf
<span class="k">fi</span>

<span class="gt">sudo</span> <span class="na">pacman</span> <span class="opt">-Syuu</span> github-release <span class="opt">--noconfirm</span> <span class="opt">--needed</span></pre></div>
