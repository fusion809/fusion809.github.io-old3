## GNU Emacs
{% include Links/image.html image="Emacs/GNU-Emacs.png" description="GNU Emacs running under Moksha" float="none" width="1130px" %}

### Background
{% include_relative links.md program="GNU Emacs" package="app-editors/emacs" wp="GNU_Emacs" gw="GNU_Emacs" aw="Emacs" pacman="extra/x86_64/emacs/" ml="https://www.gnu.org/software/emacs/manual/" wiki="http://www.emacswiki.org/" link="https://www.gnu.org/software/emacs" gr="http://git.savannah.gnu.org/cgit/emacs.git" %} is an extensively-customizable text editor that is developed as part of the GNU Project. Its original developer was Richard Stallman, the founder of the GNU Project and its first release was in 1985. It belongs to a family of text editors called Emacs, which are text editors that are extensively customizable for users with sufficient programming knowledge. Emacs is abbreviated from <b>E</b>ditor <b>Mac</b>ro<b>s</b>, which refers to its origin as editor macros for the TECO text editor, that were developed, in part, by Richard Stallman. GE is written in C and Emacs Lisp (ELisp), a dialect of the Lisp programming language devised just for GE. ELisp is used to write extensions and provide extra functionalities for GE and related text editors like XEmacs.

### Customizability
GE is one of the most customizable text editors available, but much of this customization must be done via writing code in ELisp, which limits much of this customization to advanced users only.

### Features
GNU Emacs provides syntax highlighting for dozens of different computer languages, along with several features of IDEs like shell access, compiling code, using git from within GE, *etc.* The [app-emacs](http://gpo.zugaina.org/app-emacs/) Portage category contains several plugins for GNU Emacs.

### Obtaining It

#### Manjaro
GNU Emacs is in the official pacman repository for Manjaro and can be installed using:
{% include Code/coder.html line1="pacman -S emacs" %}
should install it.

#### Sabayon
GNU Emacs is available from the Entropy Store and the Portage Tree. To install it with Entropy run:
{% include Code/coder.html line1="equo i -av app-editors/emacs" %}
while to install it with Portage run:
{% include Code/coder.html line1="emerge -av app-editors/emacs" %}

### Advantages (Pros)
* Extensively customizable.
* Heavy on features, especially for advanced users that can extend it using ELisp.
* Provides syntax highlighting for dozens, if not hundreds, of computer languages.
* Has its own Wiki, manual and other documentation.

### Disadvantages (Cons)
* Has a steep learning curve for newcomers, hence making it inaccessible to newcomers to Linux and programming, in general.
* Has an unconventional keymap, which can take some time to learn. For example, to cut text you use <kbd>Ctrl+W</kbd>, as opposed to the usual <kbd>Ctrl+X</kbd>, while to paste text you use <kbd>Ctrl+Y</kbd>.

### Summary
{% include_relative 09a-emacs-summary.html %}
