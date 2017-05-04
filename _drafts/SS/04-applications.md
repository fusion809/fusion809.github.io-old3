## Bash Scripting Applications
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

## Interesting Scripts
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

### Useful Functions for Sabayon Users
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

###Git Tools
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
