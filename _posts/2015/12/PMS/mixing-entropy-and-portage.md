## Mixing Entropy and Portage
By default Entropy and Portage act fairly independently of one another. In order for you to use them together, you must tell Entropy that you are also using Portage to install packages by running:
{% include Code/coder.html line1="equo rescue spmsync" %}
whenever you emerge, unmerge or update a package. I have this saved in my `~/.bashrc` (for root user) as the function `spm`, so as to make it easier for me to run it when necessary. What this will do is it will cause packages you installed with Portage to be acknowledged by Entropy, as otherwise Entropy has no clue as to their existence. After this you may also wish to mask packages you installed with Portage, so as to prevent Entropy from attempting to upgrade or remove software installed with Portage. To do this run:
{% include Code/coder.html line1="equo mask &lt;PACKAGE&gt;" %}
To prevent Entropy from downgrading emerged packages you need to edit `/etc/entropy/client.conf` and uncomment (removing the hashtag `#`) the line `ignore-spm-downgrades = enable`.
Packages installed with Entropy are almost always safer (less likely to lead to system breaks or have bugs) than their Portage-installed counterparts, so when you want to install a package with Portage that has several dependencies that are not yet installed, I would suggest you install as many of these dependencies as possible with Entropy before you merge the remaining dependencies and the package itself with Portage. To get Portage to print you a list of the dependencies you need, along with the USE flags they require, run:

{% include Code/coder.html line1="emerge -pv &lt;PACKAGE&gt;" %}

Unfortunately there is no Bash script to automate the process of installing Portage package dependencies with Entropy, according to the responses to [this forum thread](https://forum.sabayon.org/viewtopic.php?f=76&t=32603) I started.

### Further Reading
* ["HOWTO: Safely mix Entropy and Portage" at the Sabayon Wiki](https://wiki.sabayon.org/index.php?title=HOWTO:_Safely_mix_Entropy_and_Portage)
