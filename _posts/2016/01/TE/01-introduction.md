{% include Links/image.html image="Atom/Atom-1.3.2.png" width="1130px" float="none" description="Atom 1.3.2 running under the Deepin Desktop Environment (DDE) on Manjaro Linux" %}

**Text editors** are essential programs for software developers and programmers in general, as they enable users to write and edit source code or markup files. They are popular tools used by both experienced and novice Linux users. In this post I will compare the various *free and open-source* text editors available for Manjaro and Sabayon, with regard to several features and properties of each. It is important to note that I am not a programmer, my experience with programming is limited to mostly MATLAB/GNU Octave scripts, a small handful of Python scripts I wrote for technical computing (that is, numerical analysis) and a few Bash scripts I have written to make my life easier, when I use Linux systems.

Also covered in this post are *free and open-source* **integrated development environments** (see [here](#integrated-development-environment) for a definition), or **IDEs** for short, which are essentially text editors with extra tools for programmers. Many of the IDEs compared here I have even less experience with than I do with standard text editors, due to the fact I am not a computer programmer.

On Sabayon there are over a dozen different text editors (see, for example, the category [app-editors](http://gpo.zugaina.org/app-editors/) at gpo.zugaina.org) and IDEs (see the category [dev-util](http://gpo.zugaina.org/dev-util/)) available for installation, many of these are part of the core applications of complete desktop environments, such as GNOME or KDE Plasma. Each of these programs also have their own target market, with some being designed to be used only by seasoned programmers while others are useful only for writing simple text files. Entropy and Portage both use the category for programs relating to text editing of `app-editors`. To list the Entropy packages in this category, from the command-line, run:
{% include Code/codeu.html line1="equo search &quot;app-editors&quot;" %}
While to list ebuilds in installed overlays, plus the Portage tree, within the category of app-editors run:
{% include Code/codeu.html line1="emerge --search &quot;%@^app-editors&quot;" %}
To search all overlays run (the first two of these lines ):
{% include Code/codeu.html line1="eix-update" line2="eix-remote update" line3="eix -RCc &quot;app-editors&quot;" %}
This post will compare several different text editors that are available for Sabayon (I know as I have installed them all myself), with respect to several aspects.
IDEs can usually be found in the `dev-util` category, so to list those available in the Entropy repositories, run:
{% include Code/codeu.html line1="equo search &quot;dev-util&quot;" %}
to search all overlays (including the Portage Tree) run:
{% include Code/codeu.html line1="eix -RCc &quot;dev-util&quot;" %}
{% include Links/image.html image="Package-Managers/PkgBrowser-text-editors.png" description="How to list the text editors in PkgBrowser" width="1130px" float="none" %}
On Manjaro Linux many, if not all of these text editors/IDEs, are also available from the [Arch User Repository](https://aur.archlinux.org) (AUR) or the Manjaro repositories. Unfortunately, pacman, does not use categories for its packages, so one cannot use this to search for TEs/IDEs. One can, however, use the graphical PkgBrowser program, which can be installed using the command:
{% include Code/coder.html line1="pacman -S pkgbrowser" %}
to show the text editors in the pacman repositories go to the `Categories` menu, press the `app` submenu and then the `editor` submenu under there.
