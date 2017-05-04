### Docker
[**Docker**](https://www.docker.com/) is an open-source virtualization program, that is written in Google's [Go programming language](https://en.wikipedia.org/wiki/Go_(programming_language)) and that enables the automated deployment of software containers (which usually contain miniature operating systems) that can be used for a variety of different purposes. One such purpose is the building of software packages. Building packages using Docker is similar to building packages in a chroot, as it involves using the standard tools for building the package in question (e.g., `makepkg` for ALPs and `ebuild` for Gentoo / Sabayon packages), but it is done in a safer environment (in this case, a software container). This environment (which is called a **container** in the case of Docker) is designed so that any programs running inside it (including package-building commands) cannot access or modify anything outside the environment, including components of the host's file system.

Alternatively, a more tedious and hard drive space-exhausting method, is using VirtualBox VMs for the distribution being packed for, instead of Docker containers. It is not covered in this post because it is not a method I would recommend using. 

#### Setup
Docker can only be run on 64-bit Linux systems and is available from the official software repositories of many Linux distributions, including:

* Arch Linux
* Fedora
* Gentoo Linux
* Manjaro Linux
* openSUSE / SUSE Linux Enterprise
* Sabayon Linux

Docker can be installed on [CentOS](https://docs.docker.com/engine/installation/linux/centos/), [Debian](https://docs.docker.com/engine/installation/linux/debian/), [Red Hat Enterprise Linux](https://docs.docker.com/engine/installation/linux/rhel/) and [Ubuntu](https://docs.docker.com/engine/installation/linux/ubuntulinux/), from unofficial repositories via methods outlined at the links provided. On most distributions after installing Docker you will need to add your user to the `docker` group, log out and log back in to this user account and start the Docker daemon using systemd. To add your user to the `docker` group run:

{% include Code/coder.html line1="gpasswd -a $USER docker" %}

where `$USER` is the name of your user. And to start the Docker daemon with systemd one would run:

{% include Code/coder.html line1="systemctl start docker" %}

While to get the Docker daemon to automatically start on startup one would run:

{% include Code/coder.html line1="systemctl enable docker" %}

#### Pulling
To find pre-existing containers that you can use, search the [Docker Hub](https://hub.docker.com/).

To build Arch Linux packages you are probably better off pulling the [`base/archlinux`](https://hub.docker.com/r/base/archlinux/) container, with:

{% include Code/codeu.html line1="docker pull base/archlinux" %}

To build Debian packages you will probably be better off using the Debian container. To pull it (which makes it available for use on your current PC) run:

{% include Code/codeu.html line1="docker pull debian:latest" %}

To build Gentoo packages you can use either a Gentoo or Sabayon container, out of these I would personally recommend the [`sabayon/base-amd64`](https://hub.docker.com/r/sabayon/base-amd64/) container. This is because Sabayon containers have the Entropy package manager available, which can be helpful in helping one more quickly install required build dependencies for any ebuilds you wish to build. This makes installing the build dependencies faster than if one was using a Gentoo container, as Gentoo containers have only the Portage package manager available for installing the required build dependencies which is quite often a tedious process. To pull the `sabayon/base-amd64` container run:

{% include Code/codeu.html line1="docker pull sabayon/base-amd64:latest" %}

To build a RPM package one would probably be best using the latest official [Fedora](https://hub.docker.com/r/fedora) container, to pull it run:

{% include Code/codeu.html line1="docker pull fedora:latest" %}

alternatively, you can use the [`opensuse`](https://hub.docker.com/r/opensuse) container. If you cannot find a suitable container for the distribution you wish to package for, you can write your own Dockerfile and build a container based on it. I have never written one so I am afraid I cannot give you any pointers on how to do this, besides directing you to the [official documentation on writing Dockerfiles](https://docs.docker.com/engine/reference/builder/).

#### Running
Once you have chosen a Docker container to build your packages in and have pulled it to make it available for local use, then the next command you will need to run is `docker run`. It has the following general syntax (for further details see its [official documentation](https://docs.docker.com/engine/reference/commandline/run/)):

{% include Code/codeu.html line1="docker run [OPTION] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]" %}

as with the chroot command, square brackets (`[...]`) are used to denote optional arguments, with all remaining arguments being mandatory. The `IMAGE` argument as you can see is mandatory and refers to the Docker container's image ID. The `[COMMAND]` argument, as with the `chroot` command, refers to an optional command you wish to start your container off with. Any extra commands or programs you wish to run in this container, will have to be started by this first command. This is why most people will choose the `/bin/bash` (or some other Unix shell) command as this argument, as additional commands can be easily started off it.

For example, to start the `sabayon/base-amd64` container I have on my local machine, to build packages in it, I usually run:

{% include Code/codeu.html line1="docker run -i -t 8bdbc44b6570 /bin/bash" %}

#### Copying Files to Host
Once you have built a package with Docker you will likely want to copy it across to your host machine, using the `docker cp` command. Here is its basic syntax (for further details see its [official documentation](https://docs.docker.com/engine/reference/commandline/cp/))

{% include Code/codeu.html line1="docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH" %}

`CONTAINER` is the container's ID (which is distinct from its image ID, by the way!), `SRC_PATH` is the file's path on the Docker container, while `DEST_PATH` is where on the host machine one wishes to copy the file to. To determine the container ID, I suggest you run:

{% include Code/codeu.html line1="docker ps" %}

which will show you all Docker containers presently running. To show every container, including those that are not running, run:

{% include Code/codeu.html line1="docker ps -a" %}

#### Committing Changes
If you have made some changes to a Docker container, like upgraded its software, installed some packages you need to build new packages, *etc.* you will probably not want to loose them. You will loose them, however, if you exit the machine normally (which you do by running `exit` inside the container, potentially repeatedly, until you are no longer in it). To save your changes you need to commit them (its official documentation is [here](https://docs.docker.com/engine/reference/commandline/commit/)), by running:

{% include Code/codeu.html line1="docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]" %}

I usually never have to concern myself with `[OPTIONS]` myself. `CONTAINER` is the container ID.
