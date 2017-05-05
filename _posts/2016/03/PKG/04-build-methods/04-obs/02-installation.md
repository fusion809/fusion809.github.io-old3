#### Installing
On **openSUSE**, installing `osc` and its dependencies is simple, merely run:

{% include Code/coder.html line1="zypper in osc" %}

and it is installed! One way, that one can install `osc` and all its dependencies on non-openSUSE distributions is by manually compiling them all from source code. Now I am no expert, in fact, I have not tried installing these packages, manually from source code, on any distribution other than Arch Linux, so if there are gaps or flat out errors in this brief tutorial, please [contact me](https://fusion809.github.io/contributing/) or fork the [fusion809.github.io](https://github.com/fusion809/fusion809.github.io) GitHub repo, modify the `_posts/2016/03/PKG/04-build-methods/04-obs.md` file in your fork and start a pull request. Firstly, ensure you have the following packages installed on your system:[^2]

* `bash`
* `diffutils`
* `libxml2`
* `make`
* `perl`
* `perl-uri`
* `python-keyring`
* `python2`
* `python2-m2crypto`
* `rpm` (if you are using a RPM-based distribution like CentOS, Fedora, Mageia, Red Hat Enterprise Linux, Scientific Linux, *etc.* this program should be pre-installed)
* `urlgrabber`
* `wget`
* `xz`

The following is the procedure I recommend you follow to install each OBS-specific package:

<ul>
{% include_relative 04-build-methods/04-obs/obs.html package="obs-service-source_validator" %}
{% include_relative 04-build-methods/04-obs/obs.html package="obs-service-format_spec_file" %}
{% include_relative 04-build-methods/04-obs/obs.html package="obs-build" %}
{% include_relative 04-build-methods/04-obs/obs.html package="obs-service-download_files" %}
{% include_relative 04-build-methods/04-obs/obs.html package="osc" %}
</ul>

These are the bare minimum you need in order to run the `osc` command, but you may wish to install a few extra packages, in order for `osc` to have its full capabilities. To see all available officially-supported OBS-related packages see [this GitHub search](https://github.com/openSUSE?utf8=%E2%9C%93&query=obs-). Now, I have not installed each of these packages of myself, so all I can say is that based on the contents of their respective GitHub repositories (most importantly, that they contain a `Makefile`) I think, you should be able to install them via following the same procedure used to install the packages above. That is, `git clone` their GitHub repository, `cd` into your local copy of their repository, and run {% include Code/codeus-fs.html line1="sudo make install" %}
