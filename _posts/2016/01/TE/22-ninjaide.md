## Ninja-IDE
{% include Links/image.html image="Ninja-IDE/Ninja-IDE-2.3.0.png" width="1130px" float="none" description="Ninja IDE 2.3.0 running under Manjaro" %}

### Background
{% include_relative links.md package="dev-util/ninja-ide" program="Ninja IDE" pacman="community/any/ninja-ide" link="http://ninja-ide.org/" wp="Ninja_IDE" forum="https://groups.google.com/forum/#!forum/ninja-ide" gr="https://github.com/ninja-ide/ninja-ide" %} is a free and open-source IDE that is designed specifically for Python development. It is developed by its own small donation-sponsored community of developers and only supports Python 2.

### Customizability
{% include Links/image.html image="Ninja-IDE/Ninja-IDE-Preferences.png" width="1130px" float="none" description="Ninja IDE Preferences Window" %}
Ninja-IDE can be customized via its preferences window. Its keyboard shortcuts can be customized in this interface. The theme can also be customized and fewer than 100 plugins can also be installed.

### Features
Ninja-IDE seems to be fairly light on features, but it has basic TE features like syntax-highlighting and  auto-indentation, it also has an embedded Python shell and can run Python scripts by the user right-clicking them and clicking the "Run" option.

### Obtaining It
It is in the official binary package repositories of both Manjaro and Sabayon. It is possible to run it without install it too, by getting the source code and running {% include Code/codeu.html line1="python ninja-ide.py" %} from within its top-level directory. Although on platforms that use Python 3 as their default Python (that is invoked by the `python` command), such as Manjaro Linux and other Arch descendants, one will have to call Python 2 instead of Python in this command. Thus amending this command to:
{% include Code/codeu.html line1="python2 ninja-ide.py" %}

#### Manjaro
Ninja-IDE can be installed on Manjaro by running:
{% include Code/coder.html line1="pacman -S ninja-ide" %}

#### Sabayon
It can be installed on Sabayon by running:
{% include Code/coder.html line1="equo i -av dev-util/ninja-ide" %}
or:
{% include Code/coder.html line1="emerge -av dev-util/ninja-ide" %}

### Advantages (Pros)
* It is easily installable via binary packages on both Manjaro and Sabayon.
* Fairly lightweight

### Disadvantages (Cons)
* Does not support many programming languages

### Summary
{% include_relative 22a-ninjaide-summary.html %}
