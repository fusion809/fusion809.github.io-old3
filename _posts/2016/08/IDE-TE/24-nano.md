## nano
{% include Links/image.html image="text-editors/GNU-nano-under-LXTerminal.png" description="nano 2.4.2 running within LXTerminal under Moksha" width="1130px" float="none" %}

### Background
{% include Infoboxes/editor.html editor="nano" date="1999." country="U.S.A." language="C." focus="General-purpose, simple text editor." developers="GNU Project (previously) and <a href='https://nano-editor.org/who.php' link='_blank'>various developers</a>." license="GPL" %}
[**nano**](http://www.nano-editor.org/) is a command-line text editor that was once developed as part of the GNU Project, although it left the GNU Project in June 2016.[^4] Its development began in 1999 by Chris Allegretta, as a free alternative to the proprietary Pico text editor. Later, in 2001, it officially became part of the GNU Project. It since left the project in June 2016. Several features (like search, search and replace, save, exit, *etc.*) are accessed using keyboard shortcuts. It can be invoked by running the command "nano" from the command-line. nano can be passed several different options from the command-line, to see a full list see its man page (invoked by running `man nano` or, if you would prefer to view it in your browser, go [here](/man/nano.1.html)). Usually when I want to edit a file with nano I simply run `nano <FILE>` where `<FILE>` is the file's name (potentially also with its path if it is not in my current directory).

{% include Layouts/clear.html %}<br/>

### Customizability
I am unaware of any possible customization of nano, if you know some please do tell me in the comments of this post.

### Features
It offers syntax-highlighting, auto-indenting and miscellaneous other support for several computer languages. It also auto-detects the computer language using file extensions. It also has search functions (accessable via pressing <kbd>Ctrl</kbd>+<kbd>W</kbd>).

### Obtaining It
On many distributions nano comes pre-installed with the OS, those it is not usually have it in their official repositories.

### Advantages (Pros)
* Easy to install on Linux. On many distributions it is pre-installed.
* It is also the lightest-weight of TEs/IDEs.

### Disadvantages (Cons)
* Command-line TE only, no advanced IDE-like features.
* Lacks customizability.
* Unintuitive keymap, can take a little getting used to.

### Summary
{% include_relative 24a-nano-summary.html %}
