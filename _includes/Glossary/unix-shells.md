### Unix shells
A [**Unix shell**](https://en.wikipedia.org/wiki/Unix_shell) is a program that serves as a command-line interpreter (CLI) for &#42;nix systems including the various distributions of Linux. Unix shells are also defined by their POSIX compliance. Notable free examples include Bash, tcsh and Zsh. POSIX compliance also means that these Unix shells share some parts of their syntax. Bash and Zsh are probably the most feature-packed free widely-used Unix shells and most shell scripts written for Bash should also work without a hitch in Zsh. Although there are exceptions, for example, tests (indicated by single or double square brackets around a segment of code in Bash) in Zsh need double square brackets.

#### Bourne-Again Shell
The [**Bourne-Again Shell**](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (or **Bash**) is the most popular Unix shell around today. It is free, developed as part of the GNU Project and modelled after the Bourne Shell with features from miscellaneous other shells including the KornShell. It is one of the most feature-packed Unix shells too. Any Bash script snippet shown in this post is designed to be added to one's `.bashrc` file (which is found in the user's home directory) so that after one run's `source ~/.bashrc` (which will cause Bash to re-read this file) one can run the functions defined in the script from one's favourite terminal. For example, if you add the Bash script for Debian package management to your `~/.bashrc` file and run `source ~/.bashrc` then running `update` from a terminal emulator it should upgrade all packages on your system.

#### Bourne Shell
The [**Bourne Shell**](https://en.wikipedia.org/wiki/Bourne_Shell) (**sh**) is the best-accepted of the original shells developed for Research Unix. Its development was discontinued many years ago, although some modern-day &#42;nix systems still use it. For example, it is still used as the default user shell of FreeBSD.

#### C Shell
The [**C Shell**](https://en.wikipedia.org/wiki/C_Shell) is an extinct (no longer under active development) Unix shell originally developed in the late 1970s by [Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy) (whom also developed the vi text editor) for use by the Berkeley Software Distribution. It is so named because its command-line syntax is very similar to that of the C programming language.

#### friendly interactive shell
The [**friendly interactive shell**](https://en.wikipedia.org/wiki/Friendly_interactive_shell), or **fish** for short, is a Unix shell that is designed to be more user-friendly than other shells. It features syntax highlighting, auto-completions, *etc.*

#### KornShell
The [**KornShell**](https://en.wikipedia.org/wiki/KornShell) (**ksh**, several descendents of the KornShell also exist, they usually have ksh somewhere in their abbreviated name) is a Unix shell that was first developed at Bell Labs in the early 1980s and while it is not the most popular of Unix shells, it is still under active development and used by a small handful of &#42;nix systems such as OpenBSD, as their default shell.

#### TENEX C Shell
The [**TENEX C Shell**](https://en.wikipedia.org/wiki/tcsh) (or **tcsh**) is a Unix shell with fewer features than the more feature-packed shells, Bash and Zsh, and is considered an improved version of the C Shell. It has been falling out of favour in recent years and it used to be the default shell of OS X (before the release of 10.3 in 2003) and is the default root shell of FreeBSD.

#### Z Shell
The [**Z Shell**](https://en.wikipedia.org/wiki/Z_Shell) (or **Zsh**) is a less popular Unix shell than Bash and is not the official Unix shell of anymore than a couple of unpopular &#42;nix systems. Despite this it is very feature-packed, surpassing even Bash in this regard. An example feature it has that Bash lacks is that of syntax highlighting, which is a feature it borrows from fish.
