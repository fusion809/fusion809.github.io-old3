## Footnotes
[^1]: That is, it does not take much of an error to stuff an entire script up.
[^2]: As I may later mention, I am a cheap so-and-so, always opting for the free option where possible.
[^3]: Presented in their *usual*, but **not** mandatory order. Not every single default variable is listed, if you want a list see the [PKGBUILD(5)](/man/PKGBUILD.5.html) man page.
[^4]: An <sup>A</sup> superscript denotes that this variable can be an **array**.
[^5]: <sup>M</sup> superscripts denote a mandatory field.
[^6]: A <sup>P</sup> superscript denotes that this variable should be defined under the individual package's `package_...()` function, **if** the `pkgname` variable is an array. If the variable is defined outside of the package's individual package_...() function, then it will be applied to **all** packages specified in the PKGBUILD.
[^7]: This version number does **not** come from the upstream source, it is a revision number for the PKGBUILD.
[^8]: **Excluding** `$pkgname` &mdash; this is automatically added to this array when `makepkg` is run.
[^9]: If there are some open-source text editors I am missing that you know for a fact can run on Arch Linux (that is, you have installed them yourself and they run fine) and have automatic syntax-highlighting for PKGBUILDs.
[^10]: Hyperlinks are to the editor's Arch Linux package description page, if there are more than one due to architecture differences I will link to the 64-bit version of the package.
[^11]: An <sup>AUR</sup> superscript indicates that this package is only provided by the AUR and other unofficial sources.
[^12]: A <sup>W</sup> superscript indicates that I would not recommend installing the version of this package linked, as I have a better build. See the editor's respective section for details.
[^13]: That is, one you can communicate with easily, without fear that the server will be down for server hours at a time and not available for you to communicate with.
[^14]: It cannot be licensed under a proprietary license, even if it is a freeware license!
[^15]: Keeping in mind that these people are all volunteers &mdash; they are not being paid a cent for this!
[^16]: Which, for your information, can be different from your GitHub repository's name.
