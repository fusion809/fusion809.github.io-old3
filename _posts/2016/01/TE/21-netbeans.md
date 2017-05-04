## NetBeans
{% include Links/image.html image="IDEs/NetBeans-8.1.png" width="1130px" float="none" description="NetBeans 8.1 running under Manjaro" %}

### Background
{% include_relative links.md program="NetBeans" package="dev-util/netbeans" pacman="community/any/netbeans" link="https://netbeans.org/" forum="http://forums.netbeans.org/" wp="NetBeans" aw="Netbeans" hr="http://hg.netbeans.org/" %} is a cross-platform free and open-source IDE written in Java and developed by the Oracle Corporation. It was originally proprietary, but it has since been re-released under the <abbr title="Common Development and Distribution License">CDDL</abbr> and GNU GPL licenses. It can be used to write programs in C, C++, Java, PHP and HTML5.

### Customizability
NetBeans is extensible via plugins provided at its [website](http://plugins.netbeans.org/PluginPortal/). I have little experience with it myself, but I suspect it is reasonably extensible, but not totally.

### Features
NetBeans has the usual features of IDEs, including those of TEs like syntax highlighting, autocompletion and auto-indentation for its programming languages and the ability to compile programs written in it.

### Obtaining It

#### Manjaro
On Manjaro installing NetBeans is as simple as running:
{% include Code/coder.html line1="pacman -S netbeans" %}

#### Sabayon
On Sabayon installing NetBeans can be done using Entropy or Portage. To install NetBeans using Entropy run:
{% include Code/coder.html line1="equo i -av dev-util/netbeans" %}
while to install it with Portage run:
{% include Code/coder.html line1="emerge -av dev-util/netbeans" %}

### Advantages (Pros)
* It is extensible
* Cross-platform and is able to run on any Java-capable platform.
* Feature-packed

### Disadvantages (Cons)
* Fairly heavy on system resources
* Fairly limited set of supported languages

### Summary
{% include_relative 21a-netbeans-summary.html %}
