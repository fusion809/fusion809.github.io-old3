---
date:             2016-07-05 +1000
title:            PKGBUILDs GitHub Repository (deprecated)
permalink:        /PKGBUILDs/
redirect_from:    
  - /PKGBUILDs
  - /pkgbuilds/
  - /pkgbuilds
  - /PKGBUILD/
  - /PKGBUILD
last_modified_at: 2017-01-23 19:52:00 +1000
layout:           page
---

My [`PKGBUILDs`](https://github.com/fusion809/PKGBUILDs) GitHub repository provides Arch Linux packages that fit into one of the following three different categories:

1. They are **not** provided by the Arch Linux official repositories (ALORs) or Arch User Repository (AUR).
2. The package provided by the ALORs/AUR is missing some important features in my opinion, hence I felt the need to provide them in my own package.
3. The version of the package provided by the ALORs/AUR is old, so I wanted to provide a more up-to-date version of the package.

Many of these packages I have built into 64-bit binary packages and added to the [current tag](https://github.com/fusion809/PKGBUILDs/releases/tag/current) of the repository. I have also provided 64-bit versions of select packages in the AUR. Fortunately, I have discovered that this allows one to use GitHub as a package server for pacman. To use this package server one merely needs to add:

<div class="console" style="white-space: pre; width: 725px;">[pkgbuild-current]
Server = https://github.com/fusion809/PKGBUILDs/releases/download/current/
SigLevel = PackageOptional
</div>

to one's `/etc/pacman.conf` file. I would personally recommend adding it **before** all other repositories, although as I cannot (nor can anyone else) predict the future it is possible that one day I will get behind in maintaining these packages and they will fall behind the versions in the ALORs. Where possible all packages in `[pkgbuild-current]` are built by myself from source code, although sometimes this is not possible for whatever reason (usually related to errors in building the package from source), so I provide packages built from a pre-compiled binary.

{% include_relative 01-gh-table1.html %}
