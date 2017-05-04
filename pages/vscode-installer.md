---
layout:    page2
title:     Visual Studio Code Installer
permalink: /vscode-installer/
date:      2016-05-25 +1000
---

[**Visual Studio Code**](http://code.visualstudio.com) (**VSCode**) is a free and open-source text editor developed by Microsoft. It is built on the Electron framework that was originally developed for use by GitHub's Atom text editor, and is written in CSS, JavaScript and TypeScript. While its source code is released under the MIT License, official Linux binary packages for it (including Debian, RPM and zip archives) are licensed under a proprietary End-User License Agreement (EULA). These binaries are the safest and fastest way to install VSCode on Linux, but those that want to use an open-source version of VSCode are left to build VSCode from source code. This process can be daunting for those that are not used to compiling VSCode.

In order to make the process of installing VSCode easier on Linux I created an automated shell script installer for it, [`vscode-installer`](https://github.com/fusion809/vscode-installer). This page describes the technical details of this installer. The main script of it is `installer.sh`, which is usually invoked by the `quick-install.sh` script. The `quick-install.sh` script downloads the `vscode-installer` repository and then executes the main `installer.sh` script.

{% include_relative vscode-diagram.html %}

{% include_relative table1-legend.html %}

Scripts in the `lib/` folder 
