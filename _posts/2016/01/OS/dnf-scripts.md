#### DNF Scripts

~~~ bash
# Install software without asking first and then clean repos and caches
function sdyi {
  sudo dnf install -y $@ && sudo dnf clean all
}

# Remove software without asking first
function sdyr {
  sudo dnf remove -y $@
}

# Update all of one's software, without asking for confirmation
function update {
  sudo dnf update -y
}

# Install target's dependencies only, without asking first.
function sdyb {
  sudo dnf builddep -y $@
}
~~~
