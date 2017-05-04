## PyCharm CE
{% include Links/image.html image="IDEs/PyCharm-CE-5.0.3.png" width="1130px" float="none" description="PyCharm Community Edition 5.0.3" %}

### Background
{% include_relative links.md program="PyCharm Community Edition" package="dev-util/pycharm-community" aur="pycharm-community" wp="PyCharm" link="https://www.jetbrains.com/pycharm/" gr="https://github.com/JetBrains/intellij-community/tree/master/python" puncr="," %} or **PyCharm CE**, is a free and open-source IDE for Python development that is written in Java and developed by JetBrains (the same company that develops IntelliJ IDEA). As it is written in Java it is cross-platform and able to run on Linux, OS X and Windows. Like IntelliJ IDEA it has a proprietary counterpart that is more feature-packed than its FOSS equivalent that this section is about.

### Customizability
It has a [plugin repository](https://plugins.jetbrains.com/?pycharm), with plugins to extend its capabilities.

### Features
It is not as feature-packed as its proprietary counterpart, but it does have a pretty good feature set. This includes the basic text editor amenities such as syntax highlighting for Python, auto-indentation, *etc.* as well as an in-built interpreter for Python that can be set to use whichever interpreter one has installed on one's system.

### Obtaining It
There is a 130 MB binary tarball available for installing PyCharm on any Linux platform that can be downloaded from [here](https://www.jetbrains.com/pycharm/download/#section=linux). Merely extract it and run the `bin/pycharm.sh` installer script inside.

#### Manjaro
PyCharm CE can be installed from the AUR by running:
{% include Code/codeu.html line1="yaourt -S pycharm-community" %}

#### Sabayon
PyCharm CE can be installed from the Tree using Portage, although it is not in the Entropy repositories at the moment. To install it using Portage run:
{% include Code/coder.html line1="emerge -av dev-util/pycharm-community" %}

### Advantages (Pros)
* Cross-platform
* feature-packed

### Disadvantages (Cons)
* Heavy on system resource usage

### Summary
{% include_relative 24a-pycharm-summary.html %}
