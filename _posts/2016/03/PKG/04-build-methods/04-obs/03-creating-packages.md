#### Creating Packages
{% include Layouts/notei.md note1="An excellent Open Build Service tutorial can be found [here](https://en.opensuse.org/openSUSE:Build_Service_Tutorial) at the *openSUSE Wiki*. While this tutorial is hosted by the *openSUSE Wiki*, it should work regardless of your platform. I recommend you read it as this post section **is not** designed to replace it! It merely contains a few, hopefully helpful, observations I have made about using the OBS." %}

Creating packages in the OBS, modifying their characteristics, *etc.* can be the done from either the command-line or from within a web browser (URL: [https://build.opensuse.org](https://build.opensuse.org)). I would recommend you have access to both methods, as they both compliment each other, although you can use just one method by itself. Both require an Internet connection; the command-line means of accessing the OBS also requires you have `osc` installed, while the browser method merely requires that you have a functioning web browser available to you. I personally use both methods of accessing the OBS, with my preference for doing most OBS things being using `osc`. The OBS uses its own **version control system** (**VCS**), that is most similar to Subversion.

An OBS source repository (from which the OBS attempts to build your packages) should contain the following files:

{% capture point1 %}Any necessary **patch files**. Many packages, especially smaller packages, will have no patches though, so this component is not always needed.{% endcapture %}
{% capture point2 %}Any **package format-specific files** (**PFSFs**) required to build the package (e.g., for an RPM package this would be a spec file, while for a Arch Linux package this would be a PKGBUILD).{% endcapture %}
{% capture point3 %}The package's **upstream source** (or whatever you intend to build the package in question from, like a Debian or RPM binary will also do). The user can add the upstream source manually, the same way one adds patch files and other files to the OBS repository. This can be repetitive and annoying when upstream package updates come out frequently, so my preference is to add a `_service` file to the OBS repository. Most commonly, [this](https://build.opensuse.org/package/view_file/home:fusion809/vim/_service?expand=1) is all you need in your `_service` file. This will then automatically download the upstream source(s) listed in the PFSFs mentioned earlier, when required. Like PKGBUILDs and spec files often include the upstream source's download URL and this is where the `_service` file will attempt to download the source from. You need to be careful with this `_service` method, as sometimes the download URL will not be in an acceptable format for the `_service` file to download the upstream source from it. For example, for a PKGBUILD this `source` variable will **not** work:

~~~ bash
source=($pkgname-$pkgver.tar.gz::https://github.com/xylosper/bomi/archive/v$pkgver.tar.gz)
~~~

while, this:

~~~ bash
source=(https://github.com/xylosper/bomi/archive/v$pkgver.tar.gz)
~~~

will work.{% endcapture %}
<ul>
<li>{{ point1 | markdownify }}</li>
<li>{{ point2 | markdownify }}</li>
<li>{{ point3 | markdownify }}</li>
</ul>

Something that is important to note, however, is that a single OBS source repository can be used to build packages for several different Linux distributions, even distributions that have their own very different PFSFs. For example, my [Vim OBS repository](https://build.opensuse.org/package/show/home:fusion809/vim) builds packages for Arch Linux, Fedora and openSUSE. Even though Arch Linux uses PKGBUILDs for its PFSFs and Fedora / openSUSE use spec files.

Something that is particularly important to note for users that want to build Arch Linux packages, is that any dependencies your packages have that are in the Arch Linux community repository, or AUR, will need to be added to your OBS Project too. See the OBS does not have the packages in the Arch `[community]`/`[multilib]` repositories, or AUR, available to it (for use satisfying build dependencies) only packages in the Arch `[core]` and `[extra]` repositories. I have requested that the `[community]` repository be added to the OBS, [here](https://features.opensuse.org/320680) at openFATE.

If the Build Service Tutorial linked previously is not sufficient to help you start building OBS packages then I recommend reading the *openSUSE Wiki* articles linked to at the aforementioned Build Service Tutorial article. It has most of the more helpful information for packagers, although there is also a free OBS manual available and [here](http://openbuildservice.org/files/manuals/obs-reference-guide.pdf) is a PDF copy. If you have specific queries related to the OBS, you may wish to ask a question on [this board](https://forums.opensuse.org/forumdisplay.php/692-Open-Build-Service-(OBS)) at the *openSUSE Forums*.
