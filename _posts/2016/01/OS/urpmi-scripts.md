#### urpmi Scripts

~~~ bash
# Update all installed software
function update {
	sudo urpmi.update -a && sudo urpmi --auto-select
}

# Remove program arguments provided to it
function urm {
  sudo urpme $@
}

# Install program arguments provided to it. URLs (to RPM packages) can also be given to it
function uin {
  sudo urpmi $@
}
~~~
