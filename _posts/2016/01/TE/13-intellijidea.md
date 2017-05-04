## IntelliJ IDEA CE
{% include Links/image.html image="IDEs/IntellijIDE-CE-15.0.2.png" description="IntelliJ IDEA Community Edition 15.0.2 running under Manjaro Linux" float="none" width="1130px" %}

### Background
{% include_relative links.md program="IntelliJ IDEA Community Edition" package="dev-util/idea-community" aur="intellij-idea-ce-eap" wp="IntelliJ_IDEA" link="http://www.jetbrains.com/idea/" forum="https://devnet.jetbrains.com/community/idea" gr="https://github.com/JetBrains/intellij-community" %}, which I will abbreviate as **IJCE**, is a free and open-source IDE developed by JetBrains that is designed specifically for Java development. It is the free counterpart to a proprietary IDE (called IntelliJ IDEA Ultimate Edition) that is more feature-packed with support for several additional programming languages. Its support for programming languages is extended by use of plugins &mdash; the ultimate edition can even get a Python plugin that will provide it with all the features of PyCharm Professional Edition, which is also developed by JetBrains.

### Customizability
IntelliJ IDEA's customizability is something I really cannot comment on, but I would imagine it is not very customizable due to the fact that this would defeat the purpose of JetBeans creating a community edition, which is to tempt users to buy the proprietary, Ultimate Edition, with the extra features it has as opposed to the community edition.

### Features
Its features is something I cannot really comment on as I have limited experience with it, but it does not support any programming languages beyond a limited set including and related to Java like the Groovy programming language.

### Obtaining It
IJCE is installable on both distributions covered in this post (theoretically these instructions should also work for most other distributions as well), via downloading the tarball (in `.tar.gz` format) from their website, extracting its contents and running the install script `idea.sh` in the `bin/` folder within. If you want me to hold your hand through it, here we go, assuming the latest version of IntelliJ IDEA is still 15.02 when you try this, run:
{% include Code/codeu.html line1="wget -cqO- https://d1opms6zj7jotq.cloudfront.net/idea/ideaIC-15.0.2.tar.gz | tar -xz" line2="cd idea-IC-143.1184.17/bin" line3="./idea.sh" %}
to get the installer for the program running. From there just follow the installer through its various steps and hopefully you should have IJCE install on your system.

#### Manjaro
On Manjaro an experimental version of IJCE is also installable from the AUR by running:
{% include Code/codeu.html line1="yaourt -S intellij-idea-ce-eap" %}

#### Sabayon
**Update**: soon after posting this Francesco Ferro added IntelliJ Community Edition 15.0.0 to the [`sabayon`](https://github.com/Sabayon/for-gentoo/commit/51194fcbbf4fa67a83519fbebd1c1ec3036fdf99) overlay, which was then added to the sabayon-limbo repository. To install it run:
{% include Code/coder.html line1="equo i -av dev-util/idea-community" %}

### Advantages (Pros)
* Easy to install on any Linux platform.
* Cross-platform

### Disadvantages (Cons)
* Cannot be installed via the usual methods on Manjaro and Sabayon.
* Limited set of features and supported languages

### Summary
{% include_relative 13a-intellijidea-summary.html %}
