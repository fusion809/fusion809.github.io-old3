## Background on Unix Shells

### Bourne Shell
The [Bourne Shell](https://en.wikipedia.org/wiki/Bourne_shell) was one of the first official Unix shells to be developed and was first developed in 1977. I am using the phrasing "official Unix shells", to draw attention to the fact that the Bourne Shell was developed at Bell Labs for use by Research Unix, which was the original Unix system. The Bourne Shell is named after [Stephen Bourne](https://en.wikipedia.org/wiki/Stephen_R._Bourne), its original developer.

### Bash
{% include Links/image.html image="BrianJFox.png" width="300px" height="401px" description="Brian J. Fox (1959-), the original developer of Bash" %}

**Bash**, which is abbreviated from the **Bourne-again shell**, is a Unix shell and command language, that is developed as part of the [GNU Project](http://www.gnu.org/). Bash was originally developed by [Brian J. Fox](https://en.wikipedia.org/wiki/Brian_Fox_(computer_programmer)) in 1989 and has since become the most-widely used Unix shell, with the vast majority of Linux distributions using it as their default command shell (only notable exception I have come across is [Deepin](https://en.wikipedia.org/wiki/Deepin), which uses Zsh) and since the release of 10.3 in October 2003 is has replaced tcsh as the default command shell for [OS X](https://en.wikipedia.org/wiki/OS_X).

The development of Bash began in January 1988, when [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman), the founder of the GNU Project and the [Free Software Foundation](http://www.fsf.org/) (FSF), became dissatisfied with the previous author of the GNU shell's failure to meet the required deadlines and decided, instead, to get FSF staff member, Brian J. Fox to write a free imitation of the Bourne Shell.[^2] Later in June 1989, the first public release of Bash was made, 0.99 (which was a beta release) and until mid 1992 (when Bash 1.12 was released), Fox remained the lead developer of Bash.[^3] When Fox left the FSF in mid 1992, [Chet Ramey](http://tiswww.case.edu/php/chet/) took over responsibility for Bash's development, which he has kept to this very day.[^4] Bash was and still is written entirely in C, as was its predecessor, the Bourne Shell.

{% include Links/image.html image="Bill_Joy.jpg" width="300px" height="375px" description="Bill Joy (1954-), the original developer of Csh and Vi" float="left" %}
While Bash was originally developed as a free "imitation" of the Bourne Shell, it also has features that it borrows from other Unix shells: including the C shell and the Korn shell. The **[C shell](https://en.wikipedia.org/wiki/C_shell)** (**csh**) is a Unix shell that was originally developed by [Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy) &mdash; the author of the Vi text editor (which is a direct ancestor of Vim) and was first released in 1978 (and is still under active development today). Its chief distinguishing feature is that its syntax is similar to that of the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)). A notable descendant of C shell that is also widely used today, is **[tcsh](https://en.wikipedia.org/wiki/Tcsh)** (the **TENEX C Shell**), which before release 10.3 was the default shell of OS X and continues to be the default shell of most [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) derivatives such as [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD). The **[Korn shell](https://en.wikipedia.org/wiki/Korn_shell)** (**ksh**) was one of the Unix shells developed at Bell Labs for Research Unix, although unlike most other of the original Unix shells it is still under active development today.

Bash scripts usually have the file extension of `.sh`, although some have no file extension. When Bash is started as an interactive, non-login shell (for example, from within a terminal emulator) it first reads `~/.bashrc`. When it is started as an interactive, login shell (like when it is started within tty1) it first reads `/etc/profile`, `~/.bash_profile`, `~/.bash_login` and `~/.profile`. Commands executed in Bash are also recorded in `~/.bash_history`.
{% include Layouts/clear.html %}

### Z Shell
Another Unix Shell I have experience with is the [**Z Shell**](https://en.wikipedia.org/wiki/Z_shell) (**Zsh**). Zsh was first released by Paul Falstad in 1990 and at the time Falstad was a student at Princeton University. Since then Zsh's development has become coordinated by Peter Stephenson. What is notable about Zsh, is how feature-packed it is. It has many of the same features as Bash, but it also has spelling-correction, easier customizability via the use of plugins, and a few other features that Bash lacks. Its syntax is mostly Bash-compatible, the main difference that I have noticed is that the POSIX `[...]` test syntax is unacceptable, rather double-square brackets (`[[...]]`) must be used for tests. I rather Zsh over Bash for everyday use, if it were not for one disadvantage. See, I have noticed that after using Zsh for several hours on the one machine (and it does not seem to matter what OS the machine is running) Zsh will no longer be able to be launched in a new terminal window or tab and will be giving errors in the existing windows or tabs.

### Changing Unix Shells
On Unix/Unix-like platforms it is possible to change your login shell using the [`chsh`](/man/chsh.1.html) command. For example, to change your login shell to Zsh (assuming it is installed), run:
{% include Code/codeu.html line1="chsh -s /bin/zsh" %}
and then reboot.

### Definitions
On most Linux systems, Unix shells are stored in the file directory `/bin`. You can list them all by issuing the command:
{% include Code/coder.html line1="cat /etc/shells" %}
for me, for example, on my Sabayon machine this gives the output:
```sh
/bin/bash
/bin/csh
/bin/esh
/bin/fish
/bin/ksh
/bin/sash
/bin/sh
/bin/tcsh
/bin/zsh
/bin/rcsh
/bin/mksh
```
Bash and other Unix shells, have their own unique syntax or language (that is, how commands are passed onto Bash and other Unix shells), although most text editors (TEs) group all shell scripting languages together and call their collective syntax or language, "Shell script" or even just "sh". Examples of such TEs include: Atom, gedit and SciTE. They can do this without a problem in most cases because Unix shells share quite a lot of their syntax with one another.

Another important concept, for one to understand in order for the rest of this post to make any sort of sense, is that of a **script**. Scripts are programs that can be interpreted from within a **run-time environment** (**RTE**) and they automate the execution of tasks that would otherwise have to be performed manually, one-by-one, by a human operator. In the case of shell scripts, including Bash scripts, the RTE in which the script is interpreted is the Unix shell.
