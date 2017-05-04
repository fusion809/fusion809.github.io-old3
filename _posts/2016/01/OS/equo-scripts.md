#### equo Scripts

~~~ bash
# Test for missing dependencies and then install them
function seqd {
	sudo equo deptest
}

alias deptest=seqd

# Test for missing dependencies, quiet the output
function seqdq {
	sudo equo deptest -q
}

alias deptestq=seqdq

# Install a package with Entropy, ask first.
function seqi {
	sudo equo i -av $@
}

alias install=seqi
alias ins=seqi

# Reinstall dependencies of package along with the package itself and all deep
# dependencies
function seqid {
	sudo equo i -av --deep --empty $@
}

alias ined=seqid

# Perform a libtest (looking for missing libraries) with Entropy.
function seql {
	sudo equo libtest -q
}

alias libtest=seql
alias lt=seql

# Quiet libtest
function seqlq {
	sudo equo libtest -q
}

alias libtestq=seqlq
alias ltq=seqlq

# Mask a package
function seqm {
	sudo equo mask $@
}

alias mask=seqm

# Install package dependencies (and only the dependencies) with Entropy
function seqo {
	sudo equo i -aov $@
}

alias build-dep=seqo
alias builddep=seqo
alias bdep=seqo

# Inflate Portage binary into SPM binary.
function seqpi {
	pushd /usr/portage/packages/$1
	sudo equo pkg inflate $2
	popd
}

alias smart=seqpi
alias seqp=seqpi

# Remove a package with Entropy and all packages that depend on said package
# Ask first. It is advisable to ask first, because sometimes this can remove
# packages you want.
function seqr {
	sudo equo rm -av $@
}

alias remove=seqr
alias rem=seqr

# Perform standard bug fixes with Entropy, checking for missing libraries and dependencies.
function seqt {
	spm && sudo equo libtest && sudo equo deptest
}

# Update all packages installed with Entropy and make Entropy acknowledge emerged packages
function sequ {
	spm && sudo equo update && sudo equo upgrade --purge && sudo equo cleanup
}

alias update=sequ
alias upgrade=sequ

# Make Entropy acknowledge the existance of emerged (installed with Portage) packages
function spm {
	sudo equo rescue spmsync
}

alias spmsync=spm
alias seqrs=spm
alias seqs=spm

# List packages available in the three main Entropy Repositories
# Note this requires these repos to be enabled on your system

# sabayonlinux.org repo
function sabo {
	sudo equo query list available --quiet sabayonlinux.org | sort | uniq | wc -l
}

# sabayon-limbo repo
function sabl {
	sudo equo query list available --quiet sabayon-limbo | sort | uniq | wc -l
}

# sabayon-weekly repo
function sabw {
	sudo equo query list available --quiet sabayon-weekly | sort | uniq | wc -l
}
~~~
