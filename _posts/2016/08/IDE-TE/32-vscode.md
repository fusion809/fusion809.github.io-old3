## Visual Studio Code
{% include Links/image.html image="VScode/VSCode-1.4.0-Ubuntu-16.04.png" width="1130px" float="none" description="Visual Studio Code 1.4.0 running on Ubuntu 16.04. The mouse is over the Extension Gallery button" %}

### Background
{% include Infoboxes/editor.html logo="code.png" editor="Visual Studio Code" focus="General-purpose text editor." language="JavaScript, Less and TypeScript." date="April 2015." developers="Microsoft, Inc." repo="Microsoft/vscode" license="<a href='https://github.com/Microsoft/vscode/blob/master/LICENSE.txt' link='_blank'>MIT</a>." country="U.S.A." %}
[**Visual Studio Code**](https://code.visualstudio.com) ([GitHub Repository](https://github.com/Microsoft/vscode); or **VSCode** for short) is an open-source (licensed under the MIT License) text editor developed by Microsoft. It is intended to be a lightweight counterpart to the proprietary Visual Studio (VS) IDE, although it does not share any of VS's source code. Like Atom, it too is built on the Electron framework and is written in web languages such as JavaScript, TypeScript and Less. As such it is cross-platform supporting Linux, OS X and Windows NT. Like Atom it is extended using plugins (or extensions as they are officially referred to) written in web languages, although unlike Atom these plugins must be installed from VSCode's own interface and cannot be installed from the command-line. In contrast to Atom, VSCode has fewer plugins available and a seemingly smaller community (although the differences in the size of their communities are likely modest). Although it has some out-of-the-box features that Atom also lacks (although Atom can gain via the installation of extra packages), such as an embedded code debugger and terminal and integrated git version control.

You can browse plugins for VSCode by going to the Extension Gallery in VSCode or going to this URL: [https://marketplace.visualstudio.com/](https://marketplace.visualstudio.com/).

{% include Layouts/clear.html %}<br/>

### Customizability
VSCode is extensively customizable via plugins. I have never written one so I cannot give one any pointers on how to do this, but there are several VSCode plugins available from the previously mentioned marketplace website/extension gallery. Packages can be installed from the extension gallery or via the command palette (toggled via pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>) by typing in `ext install <PACKAGE>`, where `<PACKAGE>` is the package's name.

### Features
As previously mentioned VSCode has an embedded terminal and debugger, as well as git management system. Its support for the C# programming language is superior to that of Atom (specifically it has autocomplete/linter features provided by the <span class="package"><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp" link="_blank">C#</a></span> extension), even when extra plugins are installed for Atom. VSCode, in my opinion, is a better markdown writer than Atom, as it has an extension that provides <span class="package"><a href="https://marketplace.visualstudio.com/items?itemName=seanmcbreen.Spell" link="_blank">grammar and spell-checking</a></span> support, in contrast to Atom's core {% include Atom/apm.md package="spell-check" %} package which provides only spell-checking (and only supports American English, plus <span class="package">spell-check</span> does not allow one to add words to your own custom dictionary). Another package of VSCode that provides writing markdown documents is the [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts) package, which provides keybindings for common formatting actions for markdown.

### Obtaining It
VSCode is not available from the official repositories of any Linux distribution I am aware of, but Debian, RPM and zip archive builds of VSCode for both 32-bit and 64-bit platforms are provided by Microsoft, although beware they are **not** open-source! While VSCode's source code is released under the MIT License, official binary builds of VSCode are licensed under a proprietary (but freeware) <abbr title="End-User License Agreement">EULA</abbr>. Despite this it is possible to build your own open-source binary build of VSCode. My [`vscode-installer`](https://github.com/fusion809/vscode-installer) can be used to aid with this process.

### Advantages (Pros)
* Easy to use.
* Cross-platform.
* Is fairly feature-packed with an embedded debugger and terminal.
* Has a powerful autocomplete/linting tool for C#.

### Disadvantages (Cons)
* Heavy on RAM and CPU usage.
* Not in the official repositories of any distributions I am aware of.

### Summary
{% include_relative 32a-vscode-summary.html %}
