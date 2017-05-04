## jEdit
{% include Links/image.html image="text-editors/jEdit-screenshot.png" description="jEdit 5.2.0 running under Moksha" width="1130px" float="none" %}

### Background
{% include_relative links.md program="jEdit" package="app-editors/jedit" link="http://www.jedit.org/" sf="jedit" ml="http://www.jedit.org/users-guide/" sr="http://sourceforge.net/p/jedit/svn/HEAD/tree/" wp="jEdit" pacman="community/x86_64/jedit/" %} is a Java-based text editor that began life in 1998, when Slava Pestov started developing it. Pestov later left the project in 2006, when he handed the reigns to the free software community. jEdit provides syntax highlighting for dozens of computer languages so far, and can be customized using scripts written in a variety of different programming languages such as JavaScript and Jython. As it is written in Java it can run on any Java-capable platform, including Manjaro and Sabayon.

### Customizability
It is extensively customizable, via scripts in supported languages. Several plugins, that provide extra functionality, are available via a built-in plugin installer (under the "Plugins" menu).

### Features
As previously mentioned auto-indentation and syntax-highlighting support exists for a long list of computer languages. Plugins with extra IDE-like capabilities also exist, including a plugin for using git from within jEdit, another for using a Jython interpreter from within jEdit, another for a Python shell, *etc.*

### Obtaining It

#### Manjaro
On Manjaro jEdit can be installed with:
{% include Code/coder.html line1="pacman -S jedit" %}

#### Sabayon
On Sabayon jEdit can be installed via Entropy or Portage (from the Portage Tree, no need to add unofficial overlays for it). To install it using Entropy run:
{% include Code/coder.html line1="equo i -av app-editors/jedit" %}
while to install it using Portage run:
{% include Code/coder.html line1="emerge -av app-editors/jedit" %}

### Advantages (Pros)
* Easy to obtain it on Sabayon
* Extensively customizable
* Has intuitive keyboard shortcuts
* Written in Java, hence can run on most platforms, if you end up switching to a new operating system in the future
* User-friendly

### Disadvantages (Cons)
* Heavy on system resources.

### Summary
{% include_relative 14a-jedit-summary.html %}
