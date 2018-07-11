openSUSE Leap uses RPM packages like Fedora, but unlike Fedora its system software and desktop environments are usually nowhere near as bleeding edge. This is likely because openSUSE is designed to be compatible with both servers and desktops/laptops, with the former usually valuing stability over being up-to-date, while Fedora is mostly geared towards desktops/laptops.

I tend to find that installing programs on openSUSE is similar to installing them on Fedora, in terms of difficulty. Its chief advantage over Fedora is that it has a Tumbleweed edition that is essentially like a simpler (less compiling software not in the repositories from source code) version of Arch Linux, thanks to the Open Build Service (OBS). The OBS is a system whereby users can freely build and distribute packages of their choosing for any one of a variety of different distributions (including Arch Linux, Fedora, openSUSE, *etc.*), the main problem with it is that it cannot build packages that require Internet access during the build (like the Atom text editor, for example). 

I initially thought OT had fewer bugs than Arch Linux, but, regrettably, I found OT definitely has its fair share of bugs (especially with respect to GNOME, for example ca. January 2018 GNOME on Xorg would not launch from SDDM, while GNOME on Wayland launched but after 2 & 1/2 hours it consistently froze the whole system (even preventing accessing agetty terminals), requiring a reboot), as does its derivative Gecko Linux (Rolling edition).

For example, when I booted Gecko Linux (Rolling) for the first time, after installing it, I typed in my credentials to access the WiFi (which did not require any extra packages installed as Gecko comes with Broadcom firmware pre-installed from the unofficial Packman repository of openSUSE), from the network section of the KDE Plasma 5 system tray, and while it seemed to connect to the WiFi (i.e. no errors were mentioned) the WiFi was not available to any of my applications, including my web browser (Google Chrome, which I installed manually as it does not come with Gecko, by default) and command-line programs like `ping` and `zypper`.

The main thing that keeps me coming back to OT is that:

* It has developmental releases of most major desktop environments (including GNOME, KDE and MATE) in experimental, yet official repositories
* It is treated like a first-class citizen in the eyes of the OBS, with repositories updated very quickly after a package is built (usually mere minutes), while non-openSUSE build targets like Arch Linux and Ubuntu tend to have to wait a bit longer, in the case of Arch I have you have to wait hours, if not days, for the repositories to update. 
* Its repositories are vast, not quite as vast as Arch's, if you include the Arch User Repository anyway, but still.
* Its forums are usually quite helpful and I do need to use them from time to time.
* It is developed by both a community and a company (SUSE), both of which seem to be doing rather well, so I can be fairly confident its development will continue into the forseable future.
* One-click install can be handy. 
* 
