## yum
[**Yellowdog Updater, Modified**](http://yum.baseurl.org/) (**yum**) is a front-end for the RPM package manager that is written in Python. Prior to the release of Fedora 22 in May 2015 it was the default package manager of Fedora, and it is still the default package manager of CentOS, Oracle Linux, Red Hat Enterprise Linux (RHEL) and Scientific Linux. yum, as its name suggests, started off as a modified version of the Yellowdog Updater (YUP) used by the Yellow Dog Linux distribution, that was developed for use by the Red Hat Linux systems at Duke University in the early 2000s. RHL at the time used the up2date package manager. Later yum was adopted by CentOS, Fedora and their descendants, along with Yellow Dog Linux itself. Its development has since been ceased in favour of its supposedly faster successor, [DNF](#dnf).

### Beginner-Friendliness
Like DNF [`yum`](https://fusion809.github.io/man/yum.8.html)'s syntax is fairly intuitive with {% include Code/coders.html line1="yum install $package" %} to install a package and {% include Code/coders.html line1="yum remove $package" %} to uninstall it. It also has the Qt-based Apper and GTK+ based GNOME Software graphical front-ends available. I would personally rate it at **7-8/10** for beginner-friendliness.

Its basic syntax is:
{% include Code/coder.html line1="yum [<i>action</i>] [option(s)] [<b>target</b>(<b>s</b>)]" no="5" space="62" %}

### Customizability
As yum is a binary package manager its packages cannot be as easily customized as source code packages would be. Source code packages can be downloaded though (with the command {% include Code/codeus-rbc.html line1="yumdownloader &#8208;&#8208;source $package" %} modified, rebuilt and installed as described in the DNF section of this post.

### Development
Developing packages for yum is the same as developing DNF packages as they are both RPM packages. You can use the [method][1] outlined at the *Fedora Wiki* or using the Open Build Service.

### Features
Like its descendant, DNF, yum has in-built support for downloading and then installing software packages from a specified URL, via running:
{% include Code/coder.html line1="yum install $URL" %}

all features mentioned for DNF also exist for yum, including group installs.

### Speed
The output of {% include Code/coders.html line1="time yum reinstall -y vim-common" %} was:

~~~
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirror.overthewire.com.au
 * extras: mirror.overthewire.com.au
 * updates: mirror.overthewire.com.au
Resolving Dependencies
--> Running transaction check
---> Package vim-common.x86_64 2:7.4.160-1.el7 will be reinstalled
--> Finished Dependency Resolution

Dependencies Resolved

================================================================================
 Package            Arch           Version                   Repository    Size
================================================================================
Reinstalling:
 vim-common         x86_64         2:7.4.160-1.el7           base         5.9 M

Transaction Summary
================================================================================
Reinstall  1 Package

Total download size: 5.9 M
Installed size: 21 M
Downloading packages:
vim-common-7.4.160-1.el7.x86_64.rpm                        | 5.9 MB   00:06     
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : 2:vim-common-7.4.160-1.el7.x86_64                            1/1
  Verifying  : 2:vim-common-7.4.160-1.el7.x86_64                            1/1

Installed:
  vim-common.x86_64 2:7.4.160-1.el7                                             

Complete!

real    0m14.461s
user    0m3.574s
sys     0m1.619s
~~~

discounting the time taken to perform the download (6 seconds) this give a real time to reinstall `vim-common` of **8.461s**. Must admit this seems wrong as it is less time than DNF took to install the same package. I think the time measured is unfair and not really representative of its speed, I believe it is slower than all package managers I have used except Entropy and Portage.

{% include_relative yum/table-6-basic-usage-examples.html %}
