#### Layman and Portage Scripts

~~~ bash
##############################################
              # cd functions #
##############################################
# cd to keywords directory
function cdk {
  mkdir /etc/portage/package.keywords
  cd /etc/portage/package.keywords
}

# cd to mask directory
function cdm {
  mkdir /etc/portage/package.mask
  cd /etc/portage/package.mask
}

# cd to use flag directory
function cdu {
  mkdir /etc/portage/package.use
  cd /etc/portage/package.use
}

##############################################
              # emerge functions #
##############################################
# Install a package, but ask first
function ema {
  sudo emerge -av $@
}

# Install a package and build binary
function emb {
  sudo emerge -avb $@
}

alias bpkg=emb

# Build a binary (.tbz2) package to /usr/portage/packages/$CAT ($CAT is the package's category),
# but do not install it
function emB {
  sudo emerge -avB $@
}
alias bpkgo=emB

# Test for dependencies
function emdt {
  sudo emerge -deptest $@
}

# Install from list.txt
function eml {
  sudo emerge -av $(cat "$1".txt)
}

# Install package dependencies only and ask before doing so. e.g., emo enlightenment
# would install all of enlightenment's dependencies.
function emo {
  sudo emerge -aov $@ && spm
}

# Pretend to install a package
function emp {
  sudo emerge -pv $@
}

# rev-dep
function emrv {
  sudo revdep-rebuild
}

# Unmerge a package, does not the dependency tree
function emrm {
  sudo emerge -C $@ && spm
}

alias emc=emrm

# Sync Portage Tree and all Layman overlays.
function ems {
  sudo emerge --sync --quiet && sudo layman -Sq
}

alias sync=ems

# Updates all packages in Portage
function emup {
  sudo emerge -uDU --with-bdeps=y @world
}

##############################################
                  # Other #
##############################################
# Search categories
function cats {
  sudo eix -C -c "$@"
}

alias eixcc=cats
alias eicc=cats

##############################################
           # edit config files #
##############################################
# nano keywords
function nkey {
  sudo nano /etc/portage/package.keywords/gentoo.keywords
}

# nano mask
function nmask {
  sudo nano /etc/portage/package.mask/gentoo.mask
}

# nano USE flags
function nuse {
  sudo nano /etc/portage/package.use/gentoo.use
}

# Track the download progress of packages being installed with Portage
function tailf {
  tail -f /var/log/emerge-fetch.log
}
~~~
