## Writing a PKGBUILD
Now that we understand the basics of a PKGBUILD's layout, I will discuss some which [text editors](#text-editors) are best adept at writing PKGBUILDs and where to get [help](#help), if you get stuck.

### Text Editors
Most modern text editors have in-built syntax-highlighting support for Shell, a few of them even automatically syntax-highlight PKGBUILDs as shell scripts. Open-source text editors that I know[^9] that automatically syntax-highlight opened PKGBUILDs as shell scripts, include:[^10]<sup>,</sup>[^11]<sup>,</sup>[^12]

* [Atom](https://aur.archlinux.org/packages/atom-editor)<sup>AUR,W</sup>
* [GNU Emacs](https://www.archlinux.org/packages/extra/x86_64/emacs)
* [Kate](https://www.archlinux.org/packages/extra/x86_64/kate)
* [KWrite](https://www.archlinux.org/packages/extra/x86_64/kwrite)
* [Vim](https://www.archlinux.org/packages/extra/x86_64/vim)
* [Visual Studio Code](https://aur.archlinux.org/packages/visual-studio-code-oss)<sup>AUR,W</sup> (VSCode)

#### Atom
Atom is definitely the best text editor for the job &mdash; at least, in my opinion, this is, in part, because its syntax-highlighting, with my [`language-unix-shell`](https://atom.io/packages/language-unix-shell) package is far more detailed than syntax-highlighting by other packages. It is also because my [`language-archlinux`](https://atom.io/packages/language-archlinux) package provides extra commands for performing common Arch Linux development tasks in Atom. In my opinion, it is best to get Atom from my PKGBUILDs repository, as these packages contain a package of mine that provides better, more comprehensive, syntax-highlighting for Shell, and extra commands for working with PKGBUILDs, *etc.* My most helpful packages at the time of writing this, includes:

<ul>
  <li><code><a href="https://github.com/fusion809/arch-atom" link="_blank">atom-bleeding</a></code> &mdash; the latest stable build of Atom designed to work on the latest stable releases of APM and Electron, both built from source and provided by different packages. If you use this package with 64-bit Arch Linux, I would strongly recommend you use my binary repository and do not build everything yourself from source code. This is because the total compile time can easily take over 3 hours, during much of this time your PC will be grinding to a hault, speed-wise. This package has several core packages missing, so that they can be managed with APM. This will allow your packages to be more up-to-date. To install it and all packages I recommend (especially for Arch Linux package development) running: <div class="language-bash highlighter-rouge"><pre class="highlight"><span class="codeu"><abbr title="This is to be run as standard, non-root, user">user $</abbr></span> &nbsp;/bin/bash <span class="opt">-c</span> <span class="s2">"</span><span class="k">$(</span><span class="si">curl</span> <span class="opt">-sL</span> <a href="https://git.io/vKvcY" link="_blank">https://git.io/vKvcY</a><span class="k">)</span><span class="s2">"</span></pre></div></li>
  <li><code><a href="https://github.com/fusion809/atom-editor-arch" link="_blank">atom-editor-arch</a></code> &mdash; the latest stable build of Atom, build with the default versions of APM and Electron. Has a few extra packages installed for Arch Linux development.</li>
  <li><code><a href="https://github.com/fusion809/atom-editor-base" link="_blank">atom-editor-base</a></code> &mdash; the latest stable build of Atom, build with the default versions of APM and Electron. All non-essential packages removed so that they can be managed with APM. All core packages have been replaced with the latest versions available.</li>
</ul>

#### Visual Studio Code
The [`visual-studio-code`](https://aur.archlinux.org/packages/visual-studio-code) AUR package is not free and open-source, rather it is licensed under a proprietary End-User License Agreement (EULA). The link I provided earlier for a VSCode AUR package was for the open-source version of this package, which is built from source code. This OSS build has no extension installer, which can make it a pain to install extra extensions. If you want, an extension installer, yet still OSS build of VSCode, I recommend using my [`code-oss`](https://github.com/fusion809/code-oss) package. You can install it via running (as standard, not super, user):

<div class="language-bash highlighter-rouge"><pre class="highlight"><span class="k">if</span> <span class="sb">`</span><span class="s">cat</span> /etc/pacman.conf | <span class="s">grep</span> <span class="s2">"pkgbuild-current"</span> &gt; /dev/null 2&gt;&amp;1<span class="sb">`</span>; <span class="k">then
  </span><span class="gt">sudo</span> <span class="nb">printf</span> <span class="s1">'[pkgbuild-current]\nServer = https://github.com/fusion809/PKGBUILDs/releases/download/current/\nSigLevel = PackageOptional'</span> &gt;&gt; /etc/pacman.conf
<span class="k">fi</span>

<span class="gt">sudo</span> <span class="na">pacman</span> <span class="opt">-Syuu</span> code-oss <span class="opt">--noconfirm</span> <span class="opt">--needed</span></pre></div>

### Help
When writing your own PKGBUILD it is usually best to attempt to debug your package yourself, when you can. This is because the experience and knowledge it will give you will likely be well worth the extra effort. Plus, of course, we have to be mindful of our (by "our", I mean the free and open-source software community) limited resources, the most relevant resource when it comes to getting help is, of course, other people's spare time. If you fail to fix the error yourself, Google it, see if anyone else has experienced a similar error and if so, was it handled in a way that may be of use to you? If these two separate attempts to fix the problem fail, you have two main options as to how to proceed:

* Ask for help at the Arch Linux forums. The Arch Linux forums can be an obstacle to newcomers, the key is:

  * Give them every detail you can. The bare minimums are your PKGBUILD and your error message(s). With your error message(s) it is important to include at least ten extra lines of output that precedes the actual error message, in order to give those that wish to help you, some much-needed context for the error.
  * Explain your efforts to fix the problem so far. This is especially important as in my experience, if you do not do this, you will have some people calling you a help vampire.

* Ask someone you know, for help. I am willing to help, if I can but keep in mind I am not perfect, sometimes I will not have an answer for you. Other times I may be too busy with my own work to help you.

### External Links
* [Arch Linux Packaging Guidelines](https://wiki.archlinux.org/index.php/Arch_packaging_standards)
