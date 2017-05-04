{% capture my_capture %}
## Specifics on Common Languages

### Ada
{% include Links/links.html program="Ada" category="dev-ada" %} is a high-level programming language that supports multiple paradigms and is descended from Pascal. The most popular free compiler for Ada is {% include Links/links.html program="GNAT" package="dev-lang/gnat-gcc" wp="GNAT" puncr="," %} a front-end of the **GNU Compiler Collection** (**GCC**).

### Assembly Language
**Assembly language** is a low-level programming language that has a very strong correspondence to machine code. Due to this, it is very hardware-specific &mdash; an assembly language for one processor may not work for another. The only  program that I am aware of that is written, even partly, in assembly language is the Linux kernel. Although, I know other programs written in Assembly do exist, after all it is listed in the [TIOBE top 20 programming language (by popularity) list][1], I just cannot personally name them.

{% include_relative bash.md %}

{% include_relative c.md %}

{% include_relative cpp.md %}

### C Sharp
{% include Layouts/note.md note1="The use of the name <b>C Sharp</b>, is because of technical restrictions, the correct name is C#" %}
**C#** is a proprietary programming language that is developed by the Microsoft Corporation. Some C# compilers are proprietary, others are not. It is very popular, according to [TIOBE][1]. Microsoft employees started its development in the late 1990s, for the purpose of it being used in their .NET framework. In its early days it was said to be very similar to Java, although since then the two have become increasingly different to one another.

### D
**D**, a member of the C programming language family, is a free and open-source programming language, that is essentially like a more feature-packed, modern version of C++, with support for extra programming paradigms, automatic memory management and syntactic sugar (to make the language more human-readable).

### Fortran
**Fortran** is the eldest high-level programming language and was first developed in 1957 by [John Backus](https://en.wikipedia.org/wiki/John_Backus) (1924-2007), specifically suited for the purpose of numerical calculations and scientific computing. A program written in Fortran is used to test the performance of computers for the TOP500 list. The GCC includes a Fortran compiler.

### Go
{% include Links/links.html program="Go" package="dev-lang/go" puncr="," %} or **golang**, is a programming language, initially developed by [Google](https://en.wikipedia.org/wiki/Google) employees, [Robert Griesemer](https://en.wikipedia.org/wiki/Robert_Griesemer), [Rob Pike](https://en.wikipedia.org/wiki/Rob_Pike) and [Ken Thompson](https://en.wikipedia.org/wiki/Ken_Thompson) (one of the original developers of Research Unix at Bell Labs). The GCC has a front-end for compiling Go.

### Groovy
{% include Links/links.html program="Groovy" package="dev-java/groovy" %} is a programming language that is specifically designed to work on the Java platform, wherein it serves predominantly as a scripting language, that interfaces with Java to modify program behaviour, extract data, *etc.*

{% include_relative java.md %}

### JavaScript
**JavaScript** (**JS**) is a cross-platform web-oriented programming language that is used primarily for the purpose of controlling the behaviour of web pages. Despite this it can be used for non-web applications. For example, the text editor I am using to write this blog post, [Atom](https://atom.io), is written predominantly in JavaScript and its close lesser-used relative, CoffeeScript. JavaScript was also used to write extensions for the Deepin Desktop Environment. Despite being an interpreted language it is usually rated as one of the fastest high-level programming languages around.

### Lisp
{% include Links/links.html program="Lisp" category="dev-lisp" %} is a family of programming languages that are second only to Fortran for the title of being the eldest high-level programming languages. Notable members include the {% include Links/wp.md name="Common Lisp" %} and {% include Links/wp.md name="Emacs Lisp" puncr="," %} the latter of which is used by {% include Links/wp.md name="GNU Emacs" %} and other Emacs text editors. GNU Emacs is written predominantly in Emacs Lisp, with most of the remainder of its source code being written in C. Maxima is also written mostly in Common Lisp.

### Lua
{% include Links/links.html program="Lua" package="dev-lang/lua" category="dev-lua" %} is a lightweight programming language that is primarily used for scripting in web development applications. The two examples of its use that I have come across, personally (out of the hundreds out there), are its use to improve the efficiency of MediaWiki templates using the [Scribunto extension](https://www.mediawiki.org/wiki/Extension:Scribunto) and its use by the [Awesome Window Manager](https://en.wikipedia.org/wiki/Awesome_(window_manager)) (where it is used to extend functionality).

{% include_relative matlab.md %}

### Objective-C
{% include Links/links.html program="Objective-C" wp="Objective-C" link="https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html" %} is a programming language that belongs to the C family of programming language and is primarily object-oriented in its paradigm. It is one of the main languages that Apple's OS X is written in. The most popular free Objective-C compiler is probably GCC.

### Pascal
**Pascal** is a fairly old programming language, it and its derivatives (like {% include Links/wp.md name="Delphi" cat="programming_language" %} and {% include Links/wp.md name="Object Pascal" puncr=")" %} are still widely used today. Programs written, predominantly, in Pascal and its simple descendants include (in brackets is the specific programming language each are written in):
* {% include Links/wp.md name="Dev-C++" %} (Delphi)
* {% include Links/wp.md name="Dev-Pascal" %} (Delphi)
Very few are written, predominantly, in Pascal itself, the only program I recognize that I have been able to find that is written, even in part, in Pascal is {% include Links/wp.md name="MiKTeX" %} (a Windows program for writing LaTeX documents) and C, C++ make up most of its source code.

### Perl
{% include Links/links.html program="Perl" package="dev-lang/perl" category="dev-perl" %} is a family of interpreted scripting languages, the most notable members are Perl 5 and Perl 6. It was originally developed for the purpose of automating reporting tasks on &#42;nix systems in 1987. It is licensed under GNU GPL. The only program I have personal experience with that is written mostly in Perl is the [RuneScape Unix Client](https://github.com/HikariKnight/rsu-client) (RSU).

### PHP
{% include Links/links.html program="PHP" package="dev-lang/php" category="dev-php" %} is a server-side scripting language that is primarily intended for web development. Most web applications will use PHP to some extent, prominent examples of such applications include: [MediaWiki](https://www.mediawiki.org), a software application that powers several Wiki websites including all the Wikimedia Foundation websites (such as Wikipedia, for example) and [WordPress](https://wordpress.org), an application that powers many blogs and personal websites on the web. It is a copyleft licensed under the PHP License.

{% include_relative python.md %}

### R
{% include Links/links.html program="R" package="dev-lang/R" %} is an interpreted programming language designed for statistical computing, that was first developed in 1993 by two New Zealand programmers and statisticians and is now developed as part of the GNU Project. It is licensed under the GNU GPL.

### Ruby
{% include Links/links.html program="Ruby" package="dev-lang/ruby" category="dev-ruby" %} is a general-purpose, interpreted, programming language that is not as widely-used as C, C++, Java or Python, in my experience. The programs that are written in it, that I have experience with are two in number: {% include Links/wp.md name="Jekyll" cat="software" %} (the static site generator that powers this website) and {% include Links/wp.md name="YaST2" %} (the graphical package manager used by openSUSE). A program that I have never used, but I have heard of, that is used as a package management system for OS X, {% include Links/wp.md name="Homebrew" puncr="," %} is written in Ruby too. Ruby like Python has its own package manager too, [RubyGems](https://rubygems.org/) that is invoked by the command `gem`. For example, to install Jekyll one may run:
{% include Code/coder.html line1="gem install jekyll" %}
[Bundler](http://bundler.io) is a Ruby package manager that has better dependency-resolution than RubyGems that is also popular. I personally use Bundler to install Jekyll, because installing it with RubyGems can be a nightmare. Ruby, Bundler and RubyGems are all licensed under the permissive MIT License.

### Swift
**Swift** is a general-purpose compiled programming language that is proprietary, although plans to make it open-source in the near future are apparently underway. Swift has features that are most similar to Objective-C, although it is considered faster, hence its name. The speed estimate is based on limited comparisons with Objective-C.

### Visual Basic
**Visual Basic** and its descendents [Visual Basic for Applications](https://en.wikipedia.org/wiki/Visual_Basic for_Applications) (VBA) and [Visual Basic .NET](https://en.wikipedia.org/wiki/Visual_Basic_.NET), are programming languages that are usually used for developing GUIs.

[1]: http://www.tiobe.com/index.php/content/paperinfo/tpci/index.html
[^1]: [endlessm/dpkg](https://github.com/endlessm/dpkg) (7 Jan 2016)
[^2]: [videolan/vlc](https://github.com/videolan/vlc) (5 Jan 2016).
[^3]: [fusion809/octave-src](https://github.com/fusion809/octave-src) (6 Jan 2016)
[^4]: [Debian/apt](https://github.com/Debian/apt) (7 Jan 2016)
[^5]: [MariaDB/server](https://github.com/mariadb/server) (7 Jan 2016)
[^6]: [mysql/mysql-server](https://github.com/mysql/mysql-server) (7 Jan 2016)
[^7]: [openSUSE/zypper](https://github.com/openSUSE/zypper) (7 Jan 2016)
{% endcapture %}{{ my_capture | markdownify }}
