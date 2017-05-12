## MidnightBSD
Installed MidnightBSD and it seems like over half of mport packages either won't build or won't launch after being built. Vim build fine, but won't run as it can't find libperl.so, trying to build perl5.20 to fulfill this requirement also fails miserably with the error shown below

![](https://fusion809.github.io/images/operating-systems/MidnightBSD_perl5.20_mportbuilderror.log)

Zsh is about the only app that built and runs fine from mports.
