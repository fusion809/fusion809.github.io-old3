## Vim
{% include Links/image.html image="Vim/gVim-7.4.827-running-under-Moksha.png" description="gVim 7.4.827 running under Moksha" width="1130px" float="none" %}

### Background
{% include Infoboxes/editor.html logo="gvim.png" editor="Vim" repo="vim/vim" language="C, VimL." license="<a href='https://github.com/vim/vim/blob/master/runtime/doc/uganda.txt' link='_blank'>Vim License</a>." date="November 1991." developers="Bram Moolenaar." focus="General-purpose text editor." country="Netherlands." %}
[**Vim**](http://www.vim.org/) (short for **Vi**-<b>IM</b>proved) is a text editor that was first released in 1991 by Bram Moolenaar, as a clone of Bill Joy's Vi text editor. It and GNU Emacs are seen as the most powerful free text editors available for experienced programmers. Vim is available as a command-line text editor (which is its default and is invoked by running the `vim` command), where users can edit text files from the command-line, or as a graphical text editor (which is called **gVim**). There is also a Qt-based GUI for Vim called Vim-Qt that is only available on a few Linux distributions. Compared to most text editors, Vim is far less intuitive and has a steep learning curve. For one, its keyboard shortcuts are far from conventional, with <kbd>Ctrl</kbd>+<kbd>C</kbd> for copy, <kbd>Ctrl</kbd>+<kbd>V</kbd> for paste, *etc.* not being available. Vim also has its own scripting language (Vim script) for adding functionalities to it.

{% include Layouts/clear.html %}<br/>

### Customizability
Vim is extensively customizable, for people with the required level of finesse in programming. There are also several extensions and other plugins available for it, from the Internet. [Here](http://vimawesome.com/) is a centralized database of Vim plugins, with search tools to help you find the plugin you want. There are several plugin managers available for Vim, some of the more popular ones include:

* [apt-vim](https://github.com/egalpin/apt-vim), a cross-platform package manager that is written in Python. It is fairly easy to install, just go to the GitHub repository I just linked and follow the instructions.
* [vim-addon-manager](https://github.com/MarcWeber/vim-addon-manager), a plugin manager written almost entirely in VimL (the scripting language of Vim).
* [vim-update-bundles](https://github.com/bronson/vim-update-bundles), a plugin manager written in Ruby, its development has ceased but it still seems to work fine.
* [Vimana](https://github.com/c9s/Vimana), a cross-platform plugin manager that is written in Perl. It is fairly easy to install.
* [Vundle](https://github.com/VundleVim/Vundle.vim), a plugin manager written in VimL, it is probably the most popular package manager for Vim.

### Features
It has syntax-highlighting support for almost (if not every) every computer language. It also has several IDE-type features, like compiling source code from within it. Several other features can be added to it, for example, I wrote some of this post in Vim when my blog was powered by WordPress, using the [Vimpress plugin](https://github.com/PotHix/Vimpress).

### Obtaining It
Aside from nano it is probably the easiest editor mentioned in this post to obtain on Linux. This is because it is found in the official repositories of virtually every Linux distribution.

### Advantages (Pros)

* Easy to obtain it on virtually every &#42;nix system.
* Extremely customizable.
* Fairly light on system resources.

### Disadvantages (Cons)

* Steep learning curve, making it difficult to learn. If you run `vimtutor` from the command-line after installing it, you will be taken through a tutorial of how to use it, which can be helpful.

### Summary
{% include_relative 31a-vim-summary.html %}

### External Links
* [vim/vim GitHub Repository](https://github.com/vim/vim)
* [Vim Awesome Repository of Plugins](http://vimawesome.com/)
