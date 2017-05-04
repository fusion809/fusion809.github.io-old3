## GNU Emacs
{% include Links/image.html image="Emacs/GNU-Emacs.png" description="GNU Emacs running under Moksha" float="none" width="1130px" %}

### Background
{% include Infoboxes/editor.html editor="GNU Emacs" repo="emacs-mirror/emacs" date="March 1985." license="<a href='https://sourceforge.net/p/codeblocks/code/HEAD/tree/trunk/COPYING' link='_blank'>GPLv3</a>." logo="emacs.png" language="C, Emacs Lisp." developers="GNU Projects." country="U.S.A." category="General-purpose text editor." %}
[**GNU Emacs**](https://www.gnu.org/software/emacs) is an extensively-customizable text editor that is developed as part of the GNU Project. Its original developer was Richard Stallman, the founder of the GNU Project and its first release was in 1985. It belongs to a family of text editors called Emacs, which are text editors that are extensively customizable for users with sufficient programming knowledge. Emacs is abbreviated from <b>E</b>ditor <b>Mac</b>ro<b>s</b>, which refers to its origin as editor macros for the TECO text editor, that were developed, in part, by Richard Stallman. GE is written in C and Emacs Lisp (ELisp), a dialect of the Lisp programming language devised just for GE. ELisp is used to write extensions and provide extra functionalities for GE and related text editors like XEmacs.

{% include Layouts/clear.html %}<br/>

### Customizability
GE is one of the most customizable text editors available, but much of this customization must be done via writing code in ELisp, which limits much of this customization to advanced users only. One customization of note that is available is the plugin of [Spacemacs](http://spacemacs.org/), it provides Vim-like features, as well as some theming to Emacs.

### Features
GNU Emacs provides syntax highlighting for dozens of different computer languages, along with several features of IDEs like shell access, compiling code, using git from within GE, *etc.* The [app-emacs](http://gpo.zugaina.org/app-emacs/) Portage category contains several plugins for GNU Emacs on Gentoo.

### Obtaining It
GNU Emacs is available from the official repositories of most Linux distributions. If your distribution, for whatever reason, does not have Emacs in its official repositories you can install it using [this](https://uappexplorer.com/app/emacs-tealeg.tealeg) 64-bit Snappy package. [Here](https://transfer.sh/14u8jA/emacs-25.1-glibc2.17-x86-64.appimage) is a 64-bit AppImage for GNU Emacs 25.1.

### Advantages (Pros)
* Extensively customizable.
* Heavy on features, especially for advanced users that can extend it using ELisp.
* Provides syntax highlighting for dozens, if not hundreds, of computer languages.
* Has its own Wiki, manual and other documentation.

### Disadvantages (Cons)
* Has a steep learning curve for newcomers, hence making it inaccessible to newcomers to Linux and programming, in general.
* Has an unconventional keymap, which can take some time to learn. For example, to cut text you use <kbd>Ctrl+W</kbd>, as opposed to the usual <kbd>Ctrl+X</kbd>, while to paste text you use <kbd>Ctrl+Y</kbd>.

### Summary
{% include_relative 11a-emacs-summary.html %}
