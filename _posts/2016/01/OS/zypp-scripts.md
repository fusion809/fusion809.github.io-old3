#### ZYpp Scripts

~~~ bash
# Install software from binary packages in available repos
# Alternatively a URL to the RPM binary can be used as an input
function zypin {
  sudo zypper in $@
}
alias szpi=zypin

# Remove software
function zyprm {
  sudo zypper rm $@
}
alias szpr=zyprm

# Add zypper repo.
# First input is the URL to the repo, e.g.,
# http://download.opensuse.org/repositories/home:/Bumblebee-Project:/nVidia:/310.40/openSUSE_Tumbleweed/
# second input is a name for the repo, e.g., I used home:Bumblebee-Project:nVidia:310.40 for the
# aforementioned example.
function zyprp {
  sudo zypper ar -f $1 $2
}

# Install software from src.rpm packages in available repos
function zypsi {
  sudo zypper si $@
}
alias szps=zypsi

# Update all software on one's system
function update {
        sudo zypper up
}

alias zypup=update
alias szpu=update
~~~
