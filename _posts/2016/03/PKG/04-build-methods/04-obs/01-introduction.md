The [**Open Build Service**](http://openbuildservice.org/) (**OBS**) is the only method outlined here that not only builds packages, but also sets up a repository with which you can distribute your packages. It has a command-line client invoked by the [`osc`](https://fusion809.github.io/man/osc.1.html) command, which is written in Python, and can be run locally to build packages. The problem with this command is that it is not available from the official repositories of most distributions that the OBS can build packages for. `osc` has several additional dependencies (like `obs-build`) that are not necessarily available from the official repositories of most distributions, too, which adds to the difficulty of obtaining it on these distributions. For details on installing the OBS on non-openSUSE platforms see the [Installing](#toc29) section of this post. It can only be used to build packages for the following distributions:[^3]

* Arch Linux
* CentOS / Red Hat Enterprise Linux / Scientific Linux
* Debian
* Fedora
* Mandriva Linux
* openSUSE / SUSE Linux Enterprise
* Ubuntu
