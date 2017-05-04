---
layout:           post
title:            "Bash Scripting and the Command-Line: an Introduction for Sabayon Users"
date:             2015-11-26 +1000
id:               "bash-scripting"
categories:       sabayon, bash, shell-scripting, command-line
last_modified_at: 16:00 2016-01-22 +1000
permalink:        /bash-scripting-and-the-command-line-an-introduction-for-sabayon-users/
redirect_from:
  - /2015/10/31/an-introduction-to-the-command-line-and-bash-scripting-for-sabayon-users/
  - /2015/10/31/an-introduction-to-bash-scripting/
  - /2015/11/24/an-introduction-to-the-command-line-and-bash-scripting-for-sabayon-users/
  - /2015/11/24/bash-scripting-and-the-command-line-an-introduction-for-sabayon-users/
---

{% include Links/image.html image="Terminals/optipng2.png" description="OptiPNG 0.7.5 running under Bash 4.3.39 in LXTerminal 0.2.0" width = "1130px" float = "none" %}
{% include Layouts/note.html note1="Links to Wiki articles are provided in this post for those that wish to learn more, but it is important to note that I cannot guarantee their accuracy." %}

On **Sabayon Linux** and other [Linux distributions](https://en.wikipedia.org/wiki/Linux_distribution), along with other [Unix](https://en.wikipedia.org/wiki/Unix)/[Unix-like](https://en.wikipedia.org/wiki/Unix-like) systems,[^1] the command-line is a pivotal way by which users can interact with the operating system, the files stored on it and the system's various components. The command-line on such systems is usually accessed via so called &ldquo;**[terminal emulators](https://en.wikipedia.org/wiki/Terminal_emulator)**&rdquo;, which start and allow users to interact with their [Unix shell](https://en.wikipedia.org/wiki/Unix_shell). It is Unix shells that really serve as the command-line of &#42;nix systems and from within them various command-line programs can be called and used to perform specific tasks. Examples of such programs include `cp`, `find`, `ls`, `rm`, *etc.* In fact, one of the defining properties of all &#42;nix systems is that they share a set of basic command-line utilities that perform specific and usually singular tasks. On Linux platforms such as Sabayon these basic utilities are usually provided by the [**GNU Core Utilities**](https://en.wikipedia.org/wiki/GNU_Core_Utilities) ([sys-apps/coreutils](https://packages.sabayon.org/show/coreutils,156043,sabayon-weekly,amd64,5,standard)) package and the Unix shell used is usually **[Bash](https://en.wikipdia.org/wiki/Bash_(Unix_shell))**.

**Bash**, which is abbreviated from the **Bourne-again shell**, is a Unix shell and command language, that is developed as part of the [GNU Project](http://www.gnu.org/). Along with the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel) and [package management system](https://en.wikipedia.org/wiki/Package_manager), I would rank Bash as one of the three most important components of a Sabayon Linux system. Without it or some other Unix shell in its place, one's ability to interact one's system would be very limited and difficult. Bash was originally developed by [Brian J. Fox](https://en.wikipedia.org/wiki/Brian_Fox_(computer_programmer)) in 1989 and has since become the most-widely used Unix shell, with the vast majority of Linux distributions using it as their default command shell (only notable exception I have come across is [Deepin](https://en.wikipedia.org/wiki/Deepin), which uses Zsh) and since the release of 10.3 in October 2003 is has replaced tcsh as the default command shell for [OS X](https://en.wikipedia.org/wiki/OS_X).

In this post I will give provide an introduction to the &#42;nix command-line, including some available terminal emulators, Unix shells, with some focus on Bash and how all this relates to Sabayon users. It is important to remember I am not an expert on Bash, Bash scripting or programming in general, I have even had doubts I could even write this blog post. It is important to note too that this post is nowhere near *comprehensive* on this topic, as the only type of text I, or anyone, could write that would be comprehensive on this topic would be an entire several-hundred page book, not a dozen-or-so-page blog post. This post just gives you some of the tools to do many of the basic things a novice or intermediate user of Sabayon would like to be able to do with Bash.

## Background
{% include Links/image.html image="People/BrianJFox.png" width="300px" height="401px" description="Brian J. Fox (1959-), the original developer of Bash" %}

The development of Bash began in January 1988, when [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman), the founder of the GNU Project and the [Free Software Foundation](http://www.fsf.org/) (FSF), became dissatisfied with the previous author of the GNU shell's failure to meet the required deadlines and decided, instead, to get FSF staff member, Brian J. Fox to write a free imitation of the Bourne Shell.[^2] Later in June 1989, the first public release of Bash was made, 0.99 (which was a beta release) and until mid 1992 (when Bash 1.12 was released), Fox remained the lead developer of Bash.[^3] When Fox left the FSF in mid 1992, [Chet Ramey](http://tiswww.case.edu/php/chet/) took over responsibility for Bash's development, which he has kept to this very day.[^4] Bash was and still is written entirely in C, as was its predecessor, the Bourne Shell.
{% include Layouts/clear.html %}

### Other Unix Shells
The [Bourne Shell](https://en.wikipedia.org/wiki/Bourne_shell) was one of the first official Unix shells to be developed and was first developed in 1977. I am using the phrasing "official Unix shells", to draw attention to the fact that the Bourne Shell was developed at Bell Labs for use by Research Unix, which was the original Unix system. The Bourne Shell is named after [Stephen Bourne](https://en.wikipedia.org/wiki/Stephen_R._Bourne), its original developer.

{% include Links/image.html image="People/Bill_Joy.jpg" width="300px" height="375px" description="Bill Joy (1954-), the original developer of Csh and Vi" float="left" %}
While Bash was originally developed as a free "imitation" of the Bourne Shell, it also has features that it borrows from other Unix shells: including the C shell and the Korn shell. The **[C shell](https://en.wikipedia.org/wiki/C_shell)** (**csh**) is a Unix shell that was originally developed by [Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy) &mdash; the author of the Vi text editor (which is a direct ancestor of Vim) and was first released in 1978 (and is still under active development today). Its chief distinguishing feature is that its syntax is similar to that of the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)). A notable descendant of C shell that is also widely used today, is **[tcsh](https://en.wikipedia.org/wiki/Tcsh)** (the **TENEX C Shell**), which before release 10.3 was the default shell of OS X and continues to be the default shell of most [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) derivatives such as [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD). The **[Korn shell](https://en.wikipedia.org/wiki/Korn_shell)** (**ksh**) was one of the Unix shells developed at Bell Labs for Research Unix, although unlike most other of the original Unix shells it is still under active development today.

Along with these shells, another free Unix shell that has gained notoriety, that I feel is worthwhile mentioning is the **[Z shell](https://en.wikipedia.org/wiki/Z_shell)** (**Zsh**). Zsh was first released by Paul Falstad in 1990 and at the time Falstad was a student at Princeton University. Since then Zsh's development has become coordinated by Peter Stephenson. What is notable about Zsh, is how feature-packed it is. It has many of the same features as Bash, but it also has spelling-correction, easier customizability and a few other features that Bash lacks.

All free Unix shells that are available for Gentoo or Sabayon systems are located in the category of app-shells within the [Entropy Store](https://packages.sabayon.org/quicksearch?q=app-shells&amp;filter=category_startswith&amp;filter_data=app-shells), [Portage Tree](https://packages.gentoo.org/categories/app-shells) and [Gentoo Portage Overlays](http://gpo.zugaina.org/app-shells). To show them all from the command-line run:
{% include Code/coder.html line1='eix -C -c "app-shells"' %}

### Changing Unix Shells
On Unix/Unix-like platforms it is possible to change your login shell using the [`chsh`](/man/chsh.1.html) command. For example, to change your login shell to Zsh (assuming it is installed), run:
{% include Code/codeu.html line1="chsh -s /bin/zsh" %}
and then reboot.

### Definitions
On most Linux systems, Unix shells are stored in the file directory `/bin`. You can list them all by issuing the command:
{% include Code/coder.html line1="cat /etc/shells" %}
for me, for example, on my Sabayon machine this gives the output:

~~~ sh
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
~~~

Bash and other Unix shells, have their own unique syntax or language (that is, how commands are passed onto Bash and other Unix shells), although most text editors (TEs) group all shell scripting languages together and call their collective syntax or language, "Shell script" or even just "sh". Examples of such TEs include: Atom, gedit and SciTE. They can do this without a problem in most cases because Unix shells share quite a lot of their syntax with one another.

Another important concept, for one to understand in order for the rest of this post to make any sort of sense, is that of a **script**. Scripts are programs that can be interpreted from within a **run-time environment** (**RTE**) and they automate the execution of tasks that would otherwise have to be performed manually, one-by-one, by a human operator. In the case of shell scripts, including Bash scripts, the RTE in which the script is interpreted is the Unix shell.

### Bash and Files
Bash scripts usually have the file extension of `.sh`, although some have no file extension. When Bash is started as an interactive, non-login shell (for example, from within a terminal emulator) it first reads `~/.bashrc`. When it is started as an interactive, login shell (like when it is started within tty1) it first reads `/etc/profile`, `~/.bash_profile`, `~/.bash_login` and `~/.profile`. Commands executed in Bash are also recorded in `~/.bash_history`. Commands interpreted by Bash are case-sensitive, that is, `mv` is not the same as `Mv`, `mV` or `MV`.

## Basic Syntax
The Bash syntax has several distinct components, which can be classed as <a href="#keywords-and-special-characters">keywords and special characters</a>, <a href="#basic-unix-commands">external commands</a>, <a href="#builtins">builtins</a>, <a href="#variables">variables</a>, <a href="#functions">functions</a>, <a href="#loops">loops</a>, <a href="#selectors">selectors</a>, <a href="#tests">tests</a> and <a href="#conditionals">conditionals</a>. Many of these are shared by other Unix shells.

### Unix Commands
**Table 1** lists some basic Unix commands that are provided by the GNU Core Utilities package. Not all are listed, as I do not even understand them all.
<table style="width: 100%;" class="green">
<caption>Table 1: Basic Unix Commands, provided by the GNU Core Utilities Package</caption>
<tbody>
<tr>
<td class = "title">Command</td>
<td class = "title">Meaning/Usage</td>
<td class = "title">Example(s)</td>
<td class = "title">Manpage (HTML)</td>
</tr>
<tr>
<td class="green"><code>cat</code></td>
<td class="green">Concatenate file. Take file contents and send them to <a href = "https://en.wikipedia.org/wiki/Standard_streams">standard output</a>.</td>
<td class="green">{% highlight bash %}cat /etc/shells{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="cat.1p" %}</td>
</tr>
<tr>
<td class="green"><code>chmod</code></td>
<td class="green">Change the permissions of a file</td>
<td class="green">{% highlight bash %}chmod +x build.sh{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="chmod.1p" %}</td>
</tr>
<tr>
<td class="green"><code>chown</code></td>
<td class="green">Change the ownership of a file</td>
<td class="green">{% highlight bash %}chmown apache:apache -R /var/www/localhost/htdocs{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="chown.1p" %}</td>
</tr>
<tr>
<td class="green"><code>chroot</code></td>
<td class="green">Run a command/interactive shell with a special root directory</td>
<td class="green">{% highlight bash %}chroot /mnt/sabayon /bin/bash{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="chroot.1" %}</td>
</tr>
<tr>
<td class="green"><code>cp</code></td>
<td class="green">Copy file</td>
<td class="green">{% highlight bash %}cp ~/.bashrc ~/GitHub/.bashrc{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="cp.1p" %}</td>
</tr>
<tr>
<td class="green"><code>du</code></td>
<td class="green">Estimate file space usage</td>
<td class="green">{% highlight bash %}du -bs tmp.bundle{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="du.1" %}</td>
</tr>
<tr>
<td class="green"><code>echo</code></td>
<td class="green">Display a line of text</td>
<td class="green">{% highlight bash %}echo $SHELL{% endhighlight %} returns the current shell's file system location.</td>
<td class="green">{% include Links/man.html man="echo.1" %}</td>
</tr>
<tr>
<td class="green"><code>ln</code></td>
<td class="green">Make a link between files</td>
<td class="green">{% highlight bash %}ln -s /usr/bin/atom /usr/local/bin/atom {% endhighlight %} when Atom is installed from Entropy allows <code>/usr/local/bin/atom</code> to be used to launch Atom.</td>
<td class="green">{% include Links/man.html man="ln.1p" %}</td>
</tr>
<tr>
<td class="green"><code>ls</code></td>
<td class="green">List files</td>
<td class="green">{% highlight bash %}ls{% endhighlight %} lists files and directories in the current directory, except for hidden ones.</td>
<td class="green">{% include Links/man.html man="ls.1p" %}</td>
</tr>
<tr>
<td class="green"><code>mkdir</code></td>
<td class="green">Create a new empty directory</td>
<td class="green">{% highlight bash %}mkdir -p $HOME/Documents/Manpages{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="mkdir.1"%}</td>
</tr>
<tr>
<td class="green"><code>mv</code></td>
<td class="green">Move file</td>
<td class="green">{% highlight bash %}mv ~/.bashrc ~/GitHub/sabayon-scripts/{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="mv.1p" %}</td>
</tr>
<tr>
<td class="green"><code>rm</code></td>
<td class="green">Remove file(s)</td>
<td class="green">{% highlight bash %}rm $HOME/Documents/Manpages/equo.1.html{% endhighlight %}</td>
<td class="green">{% include Links/man.html man="rm.1" %}</td>
</tr>
<tr>
<td class="green"><code>uname</code></td>
<td class="green">Print system information</td>
<td class="green">{% highlight bash %}uname -r{% endhighlight %} lists the kernel details.</td>
<td class="green">{% include Links/man.html man="uname.1" %}</td>
</tr>
</tbody>
</table><br/>
{% include Layouts/clear.html %}
### Builtins
Several Bash commands (or **builtins**) exist and some (but by no stretch of the imagination all &mdash; I do not even understand them all!) basic ones are explained in **Table 2**. It is worthwhile noting that all these commands are purely Bash commands, by this I mean, they do not call any command-line programs to do their work for them. See many commands you will see in Bash scripts are not Bash commands, *per se*, rather they are commands that use another command-line program such as `mv` or `pwd` to do the work, but they can be run from within Bash.

<table style="width: 100%;">
<caption>Table 2: Some Basic Builtins</caption>
<tbody>
<tr>
<td class="title">Command</td>
<td class="title" style="width: 20%;">Meaning</td>
<td class="title" style="width: 50%;">Examples</td>
<td class="title" style="width: 20%;">Manpage (HTML)</td>
</tr>
<tr>
<td class="green"><code>alias</code></td>
<td class="green">Set a synonym for a command or function</td>
<td class="green">
{% highlight bash %}alias ..='cd ..'{% endhighlight %}
</td>
<td class="green"><a href="/man/alias.1p.html">alias.1p.html</a></td>
</tr>
<tr>
<td class="green"><code>cd</code></td>
<td class="green">Change directory.</td>
<td class="green">
{% highlight bash %}cd ~/Documents{% endhighlight %}
changes one's directory to /home/username/Documents.</td>
<td class="green"><a href="/man/cd.1p.html">cd.1p.html</a></td>
</tr>
<tr>
<td class="green"><code>date</code></td>
<td class="green">Outputs the date. Inputs/variables can be used to set the timezone and the format of the date given.</td>
<td class="green">This gives my local date and time in my preferred format:<br/>
{% highlight bash %}TZ="Australia/Brisbane" date +"%r %A, %d %B %Y"{% endhighlight %}
</td>
<td class="green"><a href="/man/date.1.html">date.1.html</a></td>
</tr>
<tr>
<td class="green"><code>export</code></td>
<td class="green">Set variables provided to it as environment, or global, variables.</td>
<td class="green">{% highlight bash %}export JAVA_HOME=/usr/lib/jvm/oracle-jdk-bin-1.8/bin{% endhighlight %}</td>
<td class="green"><a href="/man/export.1p.html">export.1p.html</a></td>
</tr>
<tr>
<td class="green"><code>history</code></td>
<td class="green">Outputs Bash history.</td>
<td class="green">
{% highlight bash %}history -10{% endhighlight %}
should show the last ten commands executed with Bash.</td>
<td class="green"><a href="/man/history.3.html">history.3.html</a></td>
</tr>
<tr>
<td class="green"><code>source</code></td>
<td class="green">Execute script(s) provided to it.</td>
<td class="green">{% highlight bash %}
source ~/.bashrc
{% endhighlight %}
runs the <code>~/.bashrc</code> script.
</td>
<td class="green"><a href="/man/source.n.html">source.n.html</a></td>
</tr>
</tbody>
</table>

### Conditionals
In Bash scripts conditionals use the output of a test and perform an action accordingly. Conditionals usually involve at least one of the following keywords: `case`, `if`, `else`, `elseif` and `fi`.

### Functions
Functions are essentially convenient ways we can group pieces of code together, so as to give them order and make them more logical. Quite often functions are designed to take input and use it to generate an output, or to perform a task, although some functions require no input. All Bash functions share two main things in common: the use of the word "function" and the fact the function's contents are contained within curly braces `{...}`.

### Keywords and Special Characters
**Keywords and special characters** (**KSCs**) are an important concept to understand, they are words, or symbols, that have a special, set meaning when scripting in Bash. Examples are listed in **Table 3**.
<table style="width: 100%;"><caption>Table 3: Some Keywords and Special Characters Permitted in Bash</caption>
<tbody>
<tr>
<td class="title" style="width: 10%;"><abbr title = "Keywords/Special Character">KSC</abbr></td>
<td class="title" style="width: 40%;">Meaning, or usage</td>
<td class="title" style="width: 50%;">Example(s)</td>
</tr>
<tr>
<td class="green"><code>{...}</code><br/> <code>function</code></td>
<td class="green">Used to define <a href="#Functions">functions</a>. Curly braces can also be used to just group lines of code together.</td>
<td class="green">
{% highlight bash %}
function update {
   sudo equo update && sudo equo upgrade
}
{% endhighlight %}

</pre>
</td>
</tr>
<tr>
<td class="green"><code>[...]</code><br/><code>[[...]]</code></td>
<td class="green">Used for <a href="#Tests">tests</a>, double square brackets are only available in more advanced Unix shells such as Bash, ksh and Zsh.</td>
<td class="green">
{% highlight bash %}
[[ -n $1 ]]
{% endhighlight %}
tests whether the input variable, <code>$1</code> exists.
</td>
</tr>
<tr>
<td class="green"><code>#</code></td>
<td class="green">Whatever follows is interpreted by Bash, as a comment, for human operators to read but to be left uninterpreted by Bash.</td>
<td class="green">
{% highlight bash %}
# This is a comment
{% endhighlight %}</td>
</tr>
<tr>
<td class="green"><code>!</code></td>
<td class="green">Returns the reciprocal (opposite) or negates of what follows it.</td>
<td class="green">
{% highlight bash %}
[[ $X != 3 ]]
{% endhighlight %}
(which returns 0 (true) if the variable X does not equal 3, or 1 if it is equal to 3).
</td>
</tr>
<tr>
<td class="green"><code>$</code></td>
<td class="green">Evaluates what comes after it, such as a mathematical expression in double square brackets.</td>
<td class="green"><code>echo $[3 * 2]</code> returns 6.</td>
</tr>
<tr>
<td class="green"><code>|</code></td>
<td class="green">This is called a <b>pipe</b> and it sends the output of a command through another. For example, <code>A | B</code> does A and sends its output through B.</td>
<td class="green">The following example downloads the source code tarball of the 1.1.0 release of Atom and pipes it through tar and gzip to decompress it.
<br/>
{% highlight bash %}
wget -qO- https://github.com/atom/atom/archive/v1.1.0.tar.gz | tar -xz
{% endhighlight %}</td>
</tr>
<tr>
<td class="green"><code>;</code></td>
<td class="green">Allows several commands to be executed on the same line.</td>
<td class="green">
{% highlight bash %}sudo equo update ; sudo equo upgrade{% endhighlight %}
</td>
</tr>
<tr>
<td class="green"><code>~</code></td>
<td class="green">Denotes the home directory. For example, as my username is fusion809 on my Sabayon machine, my home directory is <code>/home/fusion809</code>.</td>
<td class="green">{% highlight bash %}
cd ~
{% endhighlight %}
takes one to current user's home directory. If it is run as root it will take one to one's <code>/root</code>.</td>
</tr>
<tr>
<td class="green"><code>-</code></td>
<td class="green">Can be used as the arithmetic operator, minus, or as the previous working directory.</td>
<td class="green">{% highlight bash %}
cd -
{% endhighlight %}
takes one to one's previous working directory.</td>
</tr>
<tr>
<td class="green"><code>*</code></td>
<td class="green">Wildcard operator, can take on any value. Can also be used for multiplication.</td>
<td class="green">
If you have a directory, <code>~/VirtualBox</code> on your machine and no others starting with the prefix <code>~/Virtual</code> then:
<br/>
{% highlight bash %}
cd ~/Virtual*
{% endhighlight %}
should change your current working directory to <code>~/VirtualBox</code>.
</td>
</tr>
<tr>
<td class="green"><code>.</code></td>
<td class="green">Serves as an equivalent to the <code>source</code> builtin and as an equivalent to <code>pwd</code></td>
<td class="green">As <code>source</code> (the following will execute every file with the extension <code>.sh</code> in the <code>~/Shell</code> directory):
<br/>
{% highlight bash %}
for i in ~/Shell/*.sh
do
	. $i
done
{% endhighlight %}
whereas as <code>pwd</code>:
<br/>
{% highlight bash %}
cd .
{% endhighlight %}
which causes no change in current directory.
</td>
</tr>
<tr>
<td class="green"><code>..</code></td>
<td class="green">Denotes the parent directory</td>
<td class="green">If I am working in the <code>~/Shell</code> directory, and run:
<br/>
{% highlight bash %}
cd ..
{% endhighlight %}
my present working directory (pwd) would then be <code>~</code>, my home directory. </td>
</tr>
<tr>
<td class="green"><code>&&</code></td>
<td class="green">Executes subsequent commands, provided the preceding command(s) were executed without error. For example, <code>A && B</code> does A and then B, provided that A is executed without error. While <code>A && B && C</code> would do A, then if A returns no error, it would perform B and if A and B ran without error it would then run C.</td>
<td class="green">
{% highlight bash %}sudo equo update && sudo equo upgrade{% endhighlight %}
</td>
</tr>
<tr>
<td class="green"><code>case</code><br/> <code>esac</code></td>
<td class="green">Conditional statement, checking whether inputs match. <code>case</code> starts them and <code>esac</code> ends them.</td>
<td class="green">
{% highlight bash %}
case $X in
     [1-5])
      Message="You're not at school yet!"
     ;;
     [6-12])
      Message="You're in primary school now, enjoy!"
     ;;
     [13-17])
      Message="You're in high school now, changes are coming!"
     ;;
     [18-20]*)
      Message="You're at Uni, enjoy the freedom!"
     ;;
esac
{% endhighlight %}</td>
</tr>
<tr>
<td class="green"><code>do</code><br/> <code>done</code><br/> <code>for</code></td>
<td class="green">Used in <code>for</code> loops. <code>for</code> begins the loop, <code>do</code> enacts commands and <code>done</code> and finishes the loop.</td>
<td class="green">
{% highlight bash %}
for i in `find . -name "*.png"`
do
  optipng -o7 "$i"
done
{% endhighlight %}</td>
</tr>
<tr>
<td class="green"><code>elif</code><br/> <code>else</code><br/> <code>fi</code><br/> <code>if</code><br/> <code>then</code></td>
<td class="green">Used in <code>if</code> conditionals.</td>
<td class="green">{% highlight bash %}
if [[ -n $1 ]]
   then
     atom ~/Shell/$1.sh
   elif [[ -v $X ]]
     atom ~/Shell/$X.sh
   else
     atom ~/.bashrc
fi
{% endhighlight %}</td>
</tr>
<tr>
<td class="green"><code>in</code></td>
<td class="green">Used when dealing with lists</td>
<td class="green">This script should, if passed an argument open Atom to <code>~/Shell/$1.sh</code>, otherwise ask the user to select from the list of shell scripts in <code>~/Shell</code> of which one to open in Atom.<br/>
{% highlight bash %}
pushd ~/Shell
if [[ -n $1 ]]
   then
     atom $1.sh
   else
     select x in `find . -name "*.sh"`
     do
       atom $x
      break
     done
fi
popd
{% endhighlight %}</td>
</tr>
<tr>
<td class="green"><code>select</code></td>
<td class="green">Gets users to select from a list of options.</td>
<td class="green">{% highlight bash %}
pushd ~/Shell #moving into the ~/Shell directory
if [[ -n $1 ]]
   then
     atom $1.sh
   else
     select x in `find . -name "*.sh"`
     do
       atom $x
      break
     done
fi
popd #moving back out of the ~/Shell directory
{% endhighlight %}</td>
</tr>
</tbody>
</table>
`until`, `while` and `time` are some other keywords that are not mentioned there, as I do not know enough about them to really comment on them. Keywords can be used as variables but I would not advise this, as this can quite easily become confusing.

### Loops
Loops (which involve the `for` keyword), in Bash scripts, are used to automate the performing of tedious tasks that are sufficiently similar to one another.

### Selectors
Selectors (marked by the `select` keyword) gives users choices as to which input(s) the rest of the selector block uses.

### Tests
Tests are essential for conditionals. As their name suggests, they test to see whether or not a condition is satisfied. If the condition is satisfied they return 0, while if the condition is unsatisfied they return 1. Square brackets (which are a builtin, by-the-way), `[...]`, are used for tests, although double square brackets (`[[...]]`) can also be used for this purpose since Bash 2.02. The difference, from what I can tell, between single and double square brackets is that double square brackets allow one to perform more advanced tests than single square brackets. Single square brackets are also POSIX compliant and are found on all Unix shells.[^5]

### Variables
Bash **variables** are defined using equal signs. They can be made global (making them available for all processes) or local (making them available just for the script at hand). Local variables are defined by just using an equal sign, for example:
{% include Code/codeu.html line1="PYTHONPATH=/usr/bin/python" %}
while to define this variable globally, one would run:
{% include Code/codeu.html line1="export PYTHONPATH=/usr/bin/python" %}

## Applications
The primary value of Bash scripts is to automate tasks that would otherwise have to be done, over a longer time-frame by a human operator. I personally use shell scripts to make my life, when I am at the command-line, easier.

In my `~/.bashrc` file I have links to several shell scripts stored in my `~/Shell` directory. Both my `~/.bashrc` and the shell scripts in my `~/Shell` directory can be found at [this GitHub repository](https://github.com/fusion809/sabayon-scripts). Here is my current `~/.bashrc` file:[^6]

~~~ bash
# /etc/skel/.bashrc
#
# This file is sourced by all *interactive* bash shells on startup,
# including some apparently interactive shells such as scp and rcp
# that can't tolerate any output. So make sure this doesn't display
# anything or bad things will happen !

# Test for an interactive shell.  There is no need to set anything
# past this point for scp and rcp, and it's important to refrain from
# outputting anything in those cases.
if [[ $- != *i* ]] ; then
	# Shell is non-interactive.  Be done now!
	return
fi

# Execute all shell scripts in the ~/Shell directory
for i in ~/Shell/*.sh
do
	. $i
done
~~~

I have at least three dozen functions I have defined in shell scripts located in the `~/Shell` directory, but here I will mention some of the more interesting, or useful ones for Sabayon users, in general.

### Interesting Scripts
*Whether these scripts are interesting, is, of course, in the eye of the beholder, you may not find these interesting at all.*

You may have noticed that I am hosting HTML versions of several Linux man pages within the `/man` subdomain of this blog. I generate them using a function contained within `~/Shell/man.sh` called `manhtml`. For example, to generate [emerge.1.html](/man/emerge.1.html) I ran:
{% include Code/codeu.html line1="manhtml 1 emerge" %}

Here are the contents of `~/Shell/man.sh` (showing all the contents as `manhtml` depends on other functions to work):

~~~ bash
# Copy man page from /usr/share/man/... to ~/Documents/Manpages
function cpman {
  sudo cp -a /usr/share/man/man$1/$2.$1.bz2 ~/Documents/Manpages
}

# Convert bz2 man page to HTML
function manconv {
  cdman
  sudo chmod 777 -R $2.$1.bz2
  bzip2 -d $2.$1.bz2
  gzip -c $2.$1 > $2.$1.gz
  zcat $2.$1.gz | groff -mandoc -Thtml > $2.$1.html
  sudo chmod 777 -R *
  rm $2.$1.gz $2.$1
}

# Run cpman and manconv and then move the result to my local version of
# https://github.com/fusion809/fusion809.github.io
function manhtml {
  cpman $1 $2 && manconv $1 $2 && cp -a * $HOME/GitHub/fusion809.github.io/man
}
~~~

while here is a function I created to help me install Moksha themes (it appears differently in my <code>~/Shell/other.sh</code> file, as this form is mostly to walk you through how it works):

~~~ bash
function theme {
  #clone repo
  git clone https://github.com/JeffHoogland/$1
  #change directory to new cloned repo
  cd $1
  # add an upstream source
  git remote add upstream https://github.com/JeffHoogland/$1
  #change into the repo subdirectory where build.sh is located
  cd $1
  #build an edj file for the theme
  ./build.sh
  #cd back into the base repo directory
  cd ..
  #move edj file to theme directory
  cp -a $1.edj ~/.e/e/themes/
  #cd out of repo
  cd ..
}
~~~

to install a new Moksha theme you would run:
{% include Code/codeu.html line1="theme &lt;THEME&gt;" %} where `<THEME>` is, of course, the theme's name (how they appear in their respective GitHub repo's URL).

### Useful Functions
The following are some functions that, depending on how you operate on Sabayon, may be helpful.

#### Chroots
`chroot` is a Unix command-line program that allows you to change the apparent root directory for the current running process and all processes started by said process (that is, its "children"). Most commonly `chroot` is used to run Bash as from within Bash one can perform several tasks. `chroot` also makes all other files on a system, outside the chroot directory (and its subdirectories) inaccessible to processes run within the chroot. This can be handy, when one is running processes that could potentially cause unwanted, even damaging changes, to one's system, as if it blows up in your face, the damage will be confined to the chroot directory. On Gentoo and Sabayon chroots are usually, in my fairly minimal experience, used to create a new installation (when for whatever reason the graphical Calamares installer is not suitable), repair an existing installation, build new binary packages and test out ebuilds. The following are taken from [`~/Shell/chroot.sh`](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/chroot.sh).

~~~ bash
# root2 enters a chroot in the /root2 directory. To generate such a chroot
# (which is necessary before entering it) use gentoo-chrootn or sabayon-chrootn
# Upon rebooting, however, you may wish to run chrootb, as otherwise your chroot
# will take up a lot of your RAM leading to program crashes. DON'T RUN chrootb
# BEFORE REBOOTING AS IT CAN CAUSE DAMAGE TO YOUR SYSTEM!
function root2 {
  sudo chroot /root2 /bin/bash
}

function gentoo-chrootn {
  # First input ($1) is usually 2, unless you want to set up multiple chroots
  # Second input refers to the release date of the stage3 tarball being used.
  # Go to
  # http://distfiles.gentoo.org/releases/amd64/autobuilds/current-stage3-amd64/
  # As of 25 November 2015 the latest release was on 19 November 2015 and
  # to get it, you would use the second input 20151119
  # e.g., gentoo-chrootn 2 20151119, would create a chroot at /root2 for the
  # 20151119 stage3 tarball.
  if [[ $1 > 1 ]]
    then
      wget -c http://distfiles.gentoo.org/releases/amd64/autobuilds/current-stage3-amd64/stage3-amd64-$2.tar.bz2
      sudo mkdir /root$1
      sudo cp -a stage3-amd64-$2.tar.bz2 /root$1
      cd /root$1
      sudo tar xvjpf stage3-amd64-$2.tar.bz2
      sudo mount -t proc none /root$1/proc
      sudo mount -o bind /dev /root$1/dev
      sudo mkdir usr/portage
      sudo mount -o bind /usr/portage /root$1/usr/portage
      sudo mkdir usr/src/linux
      sudo mount -o bind /usr/src/linux /root$1/usr/src/linux
      sudo mkdir lib/modules
      sudo mount -o bind /lib/modules /root$1/lib/modules
      sudo mount -o bind /sys /root$1/sys
      sudo cp /etc/resolv.conf /root$1/etc/resolv.conf
      sudo mount -o bind /tmp /root$1/tmp
      sudo mount --rbind /dev /root$1/dev
      sudo mount --rbind /sys /root$2/sys
  fi
}

function chrootb {
  sudo umount /root2/proc
  sudo umount /root2/dev
  sudo umount /root2/usr/portage
  sudo umount /root2/usr/src/linux
  sudo umount /root2/lib/modules
  sudo umount /root2/sys
  sudo umount /root2/tmp
  sudo umount /root2/dev
  sudo umount /root2/sys
}

# Select Sabayon mirrors from which to download the release tarball
function sabayon-mirror {
  ## Declare the associative array
  declare -A L=(
  [Argentina 1]="ftp://mirrors.coopvgg.com.ar/sabayon"                            [Argentina 2]="http://mirrors.coopvgg.com.ar/sabayon"
  [Austria 1]="ftp://gd.tuwien.ac.at/linux/sabayonlinux"                          [Austria 2]="http://gd.tuwien.ac.at/linux/sabayonlinux"
  [Australia 1 FTP Internode]="ftp://mirror.internode.on.net/pub/sabayon"         [Australia 2 HTTP Internode]="http://mirror.internode.on.net/pub/sabayon"
  [Australia 3 FTP OptusNet]="ftp://mirror.optusnet.com.au/sabayon"               [Australia 4 FTP OptusNet]="http://mirror.optusnet.com.au/sabayon"
  [Belgium 1]="ftp://ftp.belnet.be/mirror/sabayonlinux"                           [Belgium 2]="http://ftp.belnet.be/mirror/sabayonlinux"
  [Brazil 1]="ftp://sabayon.c3sl.ufpr.br/sabayon"                                 [Brazil 2]="http://sabayon.c3sl.ufpr.br"
  [Czech Republic 1]="ftp://mirror.dkm.cz/pub/sabayon"                            [Czech Republic 2]="http://sabayon.mirror.dkm.cz/pub/sabayon"
  [Germany 1]="http://mirror.de.sabayon.org"                                      [Denmark 1]="ftp://ftp.klid.dk/sabayonlinux/enttropy"
  [Denmark 2]="http://ftp.klid.dk/sabayonlinux"                                   [Greece 1]="ftp://ftp.cc.uoc.gr/mirrors/linux/SabayonLinux"
  [Greece 2]="http://ftp.cc.uoc.gr/mirrors/linux/SabayonLinux"                    [Hungary 1]="ftp://ftp.fsn.hu/pub/linux/distributions/sabayon"
  [Hungary 2]="http://ftp.fsn.hu/pub/linux/distributions/sabayon"                 [Italy 1]="http://mirror.it.sabayon.org"
  [Italy 2]="ftp://na.mirror.garr.it/mirrors/sabayonlinux"                        [Italy 3]="http://na.mirror.garr.it/mirrors/sabayonlinux"
  [Japan 1]="ftp://ftp.riken.jp/Linux/sabayon"                                    [Japan 2]="http://ftp.riken.jp/Linux/sabayon"
  [Japan 3]="ftp://ftp.kddilabs.jp/Linux/packages/sabayonlinux"                   [Japan 4]="http://ftp.kddilabs.jp/Linux/packages/sabayonlinux"
  [Japan 5]="http://ftp.tsukuba.wide.ad.jp/Linux/sabayon"                         [Netherlands 1]="ftp://ftp.nluug.nl/pub/os/Linux/distr/sabayonlinux"
  [Netherlands 2]="http://ftp.nluug.nl/os/Linux/distr/sabayonlinux"               [Netherlands 3]="ftp://ftp.surfnet.nl/pub/os/Linux/distr/sabayonlinux"
  [Portugal 1]="ftp://glua.ua.pt/sabayon"                                         [Portugal 2]="ftp://ftp.rnl.ist.utl.pt/pub/sabayon"
  [Portugal 3]="http://ftp.rnl.ist.utl.pt/pub/sabayon"                            [Russian Federation 1]="ftp://mirror.yandex.ru/sabayon"
  [Russian Federation 2]="http://mirror.yandex.ru/sabayon"                        [Sweden 1]="ftp://ftp.portlane.com/pub/os/linux/sabayon"
  [Sweden 2]="http://ftp.portlane.com/pub/os/linux/sabayon"                       [United States 1]="ftp://mirrors-usa.go-parts.com/sabayon"
  [United States 2]="http://mirrors-usa.go-parts.com/sabayon"                     [United States 3]="ftp://mirror.cs.vt.edu/pub/SabayonLinux"
  [United States 6]="http://mirror.clarkson.edu/sabayon"                          [United States 7]="http://mirror.umd.edu/sabayonlinux"
  [United States 4]="http://mirror.cs.vt.edu/pub/SabayonLinux"                    [United States 5]="http://cross-lfs.sabayonlinux.org"
  [South Africa 1]="ftp://sabayon.mirror.ac.za"                                   [South Africa 2]="http://sabayon.mirror.ac.za"
  )
  ## Unfortunately, associative arrays are not stored in the
  ## order you create them with so, to have the select show
  ## sorted options, we need a second, helper array.
  sorted=(
  [1]="Argentina 1"                            [2]="Argentina 2"                            [3]="Australia 1 FTP Internode"
  [4]="Australia 2 HTTP Internode"             [5]="Australia 3"                            [6]="Australia 4"
  [7]="Austria 1"                              [8]="Austria 2"                              [9]="Belgium 1"
  [10]="Belgium 2"                             [11]="Brazil 1"                              [12]="Brazil 2"
  [13]="Czech Republic 1"                      [14]="Czech Republic 2"                      [15]="Denmark 1"
  [16]="Denmark 2"                             [17]="Germany 1"                             [18]="Greece 1"
  [19]="Greece 2"                              [20]="Hungary 1"                             [21]="Hungary 2"
  [22]="Italy 1"                               [23]="Italy 2"                               [24]="Italy 3"
  [25]="Japan 1"                               [26]="Japan 2"                               [27]="Japan 3"
  [28]="Japan 4"                               [29]="Japan 5"                               [30]="Netherlands 1"
  [31]="Netherlands 2"                         [32]="Netherlands 3"                         [33]="Portugal 1"
  [34]="Portugal 2"                            [35]="Portugal 3"                            [36]="Russian Federation 1"
  [37]="Russian Federation 2"                  [38]="South Africa 1"                        [39]="South Africa 2"
  [40]="Sweden 1"                              [41]="Sweden 2"                              [42]="United States 1"
  [43]="United States 2"                       [44]="United States 3"                       [45]="United States 4"
  [46]="United States 5"                       [47]="United States 6"                       [48]="United States 7"
  )
  select x in "${sorted[@]}"
  do
      export MIRROR="${L[$x]}"
      break
  done
}

function sabayon-chrootn {
  if [[ $1 > 1 ]]
    then
      # Create a chroots directory, in which to store tarball releases of Gentoo/
      # Sabayon. This directory is NOT where the chroot will end up being
      mkdir $HOME/chroots
      # Enter the chroots directory
      pushd "$HOME/chroots"
        # Select a mirror from which to download the tarball, using sabayon-mirror
        # These tarballs are usually >500 MB in size, so closer
        # the mirror, the better.
        wget -c $MIRROR/iso/daily/Sabayon_Linux_DAILY_amd64_tarball.tar.gz
        sudo mkdir /root$1
        sudo cp -a "Sabayon_Linux_DAILY_amd64_tarball.tar.gz" /root$1
        cd /root$1
        sudo tar xvzpf Sabayon_Linux_DAILY_amd64_tarball.tar.gz
        sudo mount -t proc none /root$1/proc
        sudo mount -o bind /dev /root$1/dev
        sudo mount -o bind /usr/portage /root$1/usr/portage
        sudo mount -o bind /usr/src/linux /root$1/usr/src/linux
        sudo mount -o bind /lib/modules /root$1/lib/modules
        sudo mount -o bind /sys /root$1/sys
        sudo cp /etc/resolv.conf /root$1/etc/resolv.conf
        sudo mount -o bind /tmp /root$1/tmp
        sudo mount --rbind /dev /root$1/dev
        sudo mount --rbind /sys /root$1/sys
      popd
  fi
}

alias schrootn=sabayon-chrootn
alias schroot2='sabayon-chrootn 2'
~~~

#### Entropy
The following are taken from [`~/Shell/equo.sh`](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/equo.sh) and they are functions (with aliases for said functions) that essentially automate some common actions one may perform with Entropy. They are not all the lines of code in `equo.sh`, they merely represent some of the more commonly-used codes. It is important to note some of these functions need not be defined as functions, they could instead be defined as aliases (using `alias NAME='CODE'` where NAME is the function's name and `CODE` is what is between the curly brackets).

~~~ bash
# Inflate Portage binary into SPM binary.
function sepi {
	pushd /usr/portage/packages/$1
	sudo equo pkg inflate $2
	popd
}

# Reinstall dependencies of package along with the package itself and all deep
# dependencies
function seqd {
	sudo equo i -av --deep --empty $@
}

# Install a package with Entropy, ask first.
function seqi {
	sudo equo i -av $@
}

alias install=seqi
alias ins=seqi

# Install package dependencies (and only the dependencies) with Entropy
function seqo {
	sudo equo i -aov $@
}

alias build-dep=seqo
alias builddep=seqo
alias bdep=seqo

# Remove a package with Entropy and all packages that depend on said package
# Ask first. It is advisable to ask first, because sometimes this can remove
# packages you want.
function seqr {
	sudo equo rm -av $@
}

alias remove=seqr
alias rem=seqr

# Update all packages installed with Entropy and make Entropy acknowledge emerged packages
function sequ {
	spm && sudo equo update && sudo equo upgrade --purge && sudo equo cleanup
}

alias update=sequ

# Make Entropy acknowledge the existence of emerged packages
function spm {
	sudo equo rescue spmsync
}
~~~

#### Gentoo Documentation
I wrote a Bash script ([`~/Shell/gentoo-doc.sh`](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/gentoo-doc.sh)) to generate a PDF of the complete Gentoo Handbook. Sadly, the final document does not include the CSS styling of the original handbook, but still it is better than no PDF at all. To get the complete PDF handbook for a specific architecture merely run:
{% include Code/codeu.html line1="unit &lt;ARCHITECTURE&gt;"%}
where `<ARCHITECTURE>` is, of course, the architecture of the system. For example for AMD64 run:
{% include Code/codeu.html line1="unit AMD64"%}

gentoo-doc.sh is shown below.

~~~ bash
# Requires wkhtmltopdf, which was recently added to the Entropy Store.
# To install it run: sudo equo i wkhtmltopdf
function ghand {
  # Input 1 is the architecture
  # Input 2 is the Page name.
  mkdir -p ~/Textbooks/Gentoo/$1/$2/..
  cd ~/Textbooks/Gentoo/$1/$2/..
  wkhtmltopdf https://wiki.gentoo.org/wiki/Handbook:"$1"/"$2" "${2##*/}".pdf
}

function ghandall {
  mkdir -p ~/Textbooks/Gentoo/$1 && cd ~/Textbooks/Gentoo/$1
  wkhtmltopdf https://wiki.gentoo.org/wiki/Handbook:"$1" "$1".pdf

  # Convert to PDF the four major sections
  L=('Installation' 'Working' 'Portage' 'Networking')
  for i in "${L[@]}"
  do
    wkhtmltopdf https://wiki.gentoo.org/wiki/Handbook:"$1"/Full/"$i" "$i".pdf
  done
}

function unit {
  ghandall "$1"
  pdfunite Installation.pdf Working.pdf Portage.pdf Networking.pdf ""$1"-Handbook".pdf
}
~~~

#### Git Tools
The following script (taken from [`~/Shell/git.sh`](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/git.sh)) makes my life simpler when I am working with Git repositories.

~~~ bash
# Switch to SSH. Allows for contributing without having to constantly provide
# one's username and password.
function gitsw {
  # $1 is the username of the repo
  git remote rm origin
  git remote rm upstream
  if [[ -n "$1" ]]
    then
      git remote add origin git@github.com:$1/"${PWD##*/}".git
      git remote add upstream git@github.com:$1/"${PWD##*/}".git
    else
      git remote add origin git@github.com:fusion809/"${PWD##*/}".git
      git remote add upstream git@github.com:fusion809/"${PWD##*/}".git
  fi
}

alias SSH=gitsw
alias gitssh=gitsw
alias gits=gitsw

#############################################################
# Sign in with SSH at startup
# Makes contributing to GitHub projects a lot simpler.
SSH_ENV=$HOME/.ssh/environment

# start the ssh-agent
# Remember, for this to work you need your SSH keys setup
# https://help.github.com/articles/generating-ssh-keys/
function start_agent {
    echo "Initializing new SSH agent..."
    # spawn ssh-agent
    /usr/bin/ssh-agent | sed 's/^echo/#echo/' > "${SSH_ENV}"
    echo succeeded
    chmod 600 "${SSH_ENV}"
    . "${SSH_ENV}" > /dev/null
    /usr/bin/ssh-add
}

if [ -f "${SSH_ENV}" ]; then
     . "${SSH_ENV}" > /dev/null
     ps -ef | grep ${SSH_AGENT_PID} | grep ssh-agent$ > /dev/null || {
      start_agent;
    }
else
    start_agent;
fi
~~~

#### Layman/Portage
Here are some lines from my [`~/Shell/emerge.sh`](https://github.com/fusion809/sabayon-scripts/blob/master/Shell/emerge.sh) script.

~~~ bash
# Install a package, but ask first
function ema {
  sudo emerge -av $@
}

# Install package dependencies only and ask before doing so. e.g., emo enlightenment
# would install all of enlightenment's dependencies.
function emo {
  sudo emerge -aov $@
}

# Pretend to install a package
function emp {
  sudo emerge -pv $@
}

# Unmerge a package
function emrm {
  sudo emerge -C $@
}

alias emc=emrm

# Sync Portage Tree and all Layman overlays.
function sync {
  sudo emerge --sync && sudo layman -S
}

# Track the download progress of packages being installed with Portage
function tailf {
  tail -f /var/log/emerge-fetch.log
}
~~~

## Terminal Emulators
Terminal emulators (TEs) for Sabayon include tty1-tty6, the whole-screen virtual terminals managed by the getty Unix command[^7] and various graphical TEs (<abbr title="Graphical Terminal Emulators">GTEs</abbr>; that is, TE windows running within a graphical user interface) including GNOME Terminal, Konsole and LXTerminal. Most of these graphical TEs are found in the "x11-terms" category in the [Portage Tree](https://packages.gentoo.org/categories/x11-terms), [Gentoo Portage Overlays](http://gpo.zugaina.org/x11-terms/) and [Entropy Store](https://packages.sabayon.org/category/x11-terms), although there are exceptions, the most notable one being Konsole (which is in the kde-apps category). You can list all programs in this category by issuing the command:
{% include Code/coder.html line1='eix -C -c "x11-terms"' %}

The following section will involve me comparing the various graphical terminal emulators I have any real experience with.

### GNOME Terminal
{% include Links/image.html image="Terminals/GNOME-Terminal-3.16.2.png" width="743px" description="GNOME Terminal 3.16.2 running under Moksha" float="none" %}
{% include Links/links.html package="x11-terms/gnome-terminal" program="GNOME Terminal" link="https://wiki.gnome.org/Apps/Terminal" wp="GNOME Terminal" %} is a GTE that is part of the GNOME Core Applications suite. It is written in C and licensed under GNU GPLv2. I find it, like most GNOME Core Applications fairly feature-packed, with several customization options being available for the terminal window. These include custom keyboard shortcuts, colour schemes, fonts and behaviours.

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes pre-installed on GNOME edition of Sabayon. Also available from the Entropy Store." customizability="8" features="8" sru="8." gist="d0e2ea07a2def192cacc" overall="9" %}

### Konsole
{% include Links/image.html image="Terminals/Konsole-15.08.2.png" width="1000px" description="Konsole 15.08.2 running under Moksha" float="none" %}
{% include Links/links.html package="kde-apps/konsole" program="Konsole" link="https://konsole.kde.org/" wp="Konsole" %} is a GTE based on the Qt widget toolkit that is part of the KDE Core Applications (or KDE Frameworks 5). I would probably say that Konsole and Terminator are the most feature-packed GTEs, with custom keyboard shortcuts, colour schemes, fonts and behaviours possible. Konsole does have an advantage, in my opinion, over Terminator, though. See Konsole highlights tabs (in purple/pink, see the screenshot below) that have pushed out extra output since they were last viewed, which can be handy at times.

{% include Links/image.html image="Terminals/Konsole-purple-tab-colour.png" width="1000px" float="none" description="Konsole showing the purple/pink tab highlighting. Note, how the first tab with its title starting with <code>...09@brenton-pc</code> is coloured purple/pink, this indicates that it has unread output" %}

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes preinstalled on the KDE edition of Sabayon and available from the Entropy Store." customizability="9." sru="8." features="9." overall="9" gist="b03ca0f3e5e6b961ed19" %}

### LXTerminal
{% include Links/image.html image="Terminals/LXTerminal-0.2.0.png" description="LXTerminal 0.2.0 running under Moksha" width="1000px" float="none" %}
{% include Links/links.html package="lxde-base/lxterminal" program="LXTerminal" link="http://wiki.lxde.org/en/LXTerminal" %} is a terminal emulator that is part of the core applications suite of LXDE. It uses the GTK+2 toolkit and while lightweight still has a few of the features that more advanced terminal emulators like Konsole boast. These include: ability to customize keyboard shortcuts and fonts (although a custom colour scheme is not permitted).

#### Rating(s)
{% include_relative TE-ratings.html availability="8, available in the Entropy Store but not preinstalled on any official Sabayon edition." customizability="8" features="8" sru="9." gist="74f4c3c54450760623d2" overall="8" %}

### MATE Terminal
{% include Links/image.html image="Terminals/MATE-Terminal-1.8.1.png" description="MATE Terminal 1.8.1 running under MATE" width="1000px" float="none" %}
{% include Links/links.html package="x11-terms/mate-terminal" program="MATE Terminal" link="https://github.com/mate-desktop/mate-terminal" %} is a terminal emulator that is part of the core application suite of MATE, a fork of GNOME 2. Consequently the MATE Terminal is based on the GTK+2 toolkit. Unlike most terminal emulators (in fact all of them mentioned in this post) I have found it does not work under Moksha. See whenever I run `mate-terminal` I get segmentation fault messages.

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Installed, by default, on Sabayon MATE edition." customizability="8. Shares many of the same customizability options of GNOME Terminal." features="8. Same features as GNOME Terminal." sru="9. Like most MATE components it is fairly lightweight." gist="b345c67359307ff5bc17" overall="9. To me the fact that it does not work on Moksha is a big drawback, if for you it launches fine on your desktop of choice, it would probably be a better option than GNOME Terminal as it shares the same features but is lighter on SRU." %}

### Terminator
{% include Links/image.html image="Terminals/Terminator-0.98.png" width="1000px" float="none" description="Terminator 0.98 running under Moksha" %}
{% include Links/links.html package="x11-terms/terminator" program="Terminator" link="https://launchpad.net/terminator" wp="Terminator_(terminal_emulator)" %} is a terminal emulator that uses the GTK toolkit and is written in Python. Compared to other terminal emulators its major advantage is that of window splitting. See, in most terminal emulators the only way you can open another terminal within the same window is by creating another tab (which is something Terminator can do to), which can be annoying if what you want to type into the other terminal is found in the one you are currently working in (as you cannot see what is in the current terminal when you open a new tab and start working in it), while with terminator you can show two terminals side-by-side in the same window, making it easier to work on two or more related things at a time. For example, here is a screenshot of Terminator with two windows in the one tab, with me working on my blog. In the first window I am running `bundle exec jekyll serve` and in the other I am doing the git side of managing my blog.

{% include Links/image.html image="Terminals/Terminator-0.98-window-splitting.png" float="none" width="1000px" description="Terminator 0.98 running under Moksha, while I work on my blog in both windows" %}

#### Rating(s)
{% include_relative TE-ratings.html availability="8. Not pre-installed on any official Sabayon edition, but can be easily installed using Entropy." customizability="9. Colour scheme, keybindings and several other features are customizable." features="9. Feature-packed, extra features can be added using plugins." sru="5." gist="24dd1c1a4fd65acfe2a9" overall="8" %}

### Terminology
{% include Links/image.html image="Terminals/Terminology-0.9.1.png" width="1000px" float="none" description="Terminology 0.9.1 running under Moksha" %}
{% include Links/links.html package="x11-terms/terminology" program="Terminology" link="https://www.enlightenment.org/about-terminology" wp="Terminology_(software)" %} is the terminal emulator of the Enlightenment desktop environment. Compared to other GTEs it is less intuitive and can be irritating to get the ropes of, because of how different it is to other GTEs. My experience is fairly limited with it, due to the fact I find it frustrating and hence have usually opted for less irritating alternatives like Konsole and LXTerminal. Despite this it does seem quite customizable and feature-packed, in fact, on their [about page](https://www.enlightenment.org/about-terminology) at enlightenment.org, it even says you can view image files (including bitmap and vector images) in Terminology.  

#### Rating(s)
{% include_relative TE-ratings.html availability="8. Not pre-installed on any official Sabayon edition, but can be easily installed using Entropy." customizability="9. Colour scheme, keybindings and several other features are customizable." features="9. Feature-packed, can even view image files in it" sru="8." gist="cc49c4322790078ae7e0" overall="8" %}

### Xfce Terminal
{% include Links/image.html image="Terminals/Xfce-terminal.png" width="1000px" float="none" description="Xfce4 Terminal 0.6.3 running under Moksha" %}
{% include Links/links.html package="x11-terms/xfce4-terminal" program="Xfce Terminal" link="http://docs.xfce.org/apps/terminal/start" wp="Terminal_(Xfce)" %} is the terminal emulator of Xfce. I have personally found it, despite using more RAM than LXTerminal, less customizable and feature-packed. It is based on the GTK+3 toolkit.

#### Rating(s)
{% include_relative TE-ratings.html availability="10. Comes pre-installed on the Xfce edition of Sabayon" customizability="7. The keyboard shortcuts are not even customizable." features="7." sru="9." gist="f250f470f12f08613b54" overall="8" %}

### Other Terminal Emulators
I have limited experience with drop-down terminals and X terminals like UXTerm and XTerm, hence I cannot really comment on anything but their system resource usage (SRU) and ease of installation. Here is a graph comparing RAM usage amongst GTEs, note that each of these GTEs are installable using Entropy:
{% include Links/image.html image="Graphs/RAM-usage-TEs.png" width="1000px" float="none" description="RAM usage of GTEs" %}

## Free Help Resources
* [Stack Overflow](http://stackoverflow.com/)[^8]
* [Unix & Linux StackExchange](http://unix.stackexchange.com)[^9]

## Further Reading
{% include Layouts/note.html note1="All the following links are to free PDFs" %}
* [Advanced Bash-Scripting Guide (2014) @ www.tldp.org](http://www.tldp.org/LDP/aBS/abs-guide.pdf)
* [Bash Guide for Beginners (2008) @ www.tldp.org](http://www.tldp.org/LDP/Bash-Beginners-Guide/Bash-Beginners-Guide.pdf)
* [Bash Official Manual (2014) @ www.gnu.org](http://www.gnu.org/software/bash/manual/bash.pdf)
* [GNU/Linux Tools Summary (2006) @ www.tldp.org](http://www.tldp.org/LDP/GNU-Linux-Tools-Summary/GNU-Linux-Tools-Summary.pdf)
* [GNU Core Utilities Manual (2015) @ www.gnu.org](http://www.gnu.org/software/coreutils/manual/coreutils.pdf) (helpful in explaining what GNU Core Utilities you can call from within your Bash scripts)

## Footnotes
[^1]: Henceforth I will refer to Unix/Unix-like systems, collectively, as &#42;nix systems.
[^2]: Source: [email from 1987](https://groups.google.com/forum/#!original/comp.unix.questions/iNjWwkyroR8/yedr9yDWSuQJ)
[^3]: Source: [Chet Ramey's Scribd document](http://www.scribd.com/doc/40556434/2010-10-31-Chet-Ramey-Early-Bash-Dates)
[^4]: Source: [Bash Webpage](https://www.gnu.org/software/bash/)
[^5]: Source: [Server Fault](http://serverfault.com/a/52050/298691)
[^6]: The for loop I got from the answers to [this question](http://unix.stackexchange.com/q/239881/27613) at Unix & Linux SE
[^7]: Which are started with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Fn</kbd> with n ranging from 1 to 6. For example, to launch tty1 run <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd>, while to launch tty2 run <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F2</kbd> and so forth.
[^8]: Its general topic is programming, so it is suitable for shell script-related questions. I have asked two questions there relating to shell script, as of 26 November 2015, both were resolved within an hour.
[^9]: As of 26 November 2015 I have asked 16 questions relating to shell scripts there and 15 have been answered. Each of those that have been answered were resolved (that is, given an answer that solved whatever problem I had) within a day of me asking them.
