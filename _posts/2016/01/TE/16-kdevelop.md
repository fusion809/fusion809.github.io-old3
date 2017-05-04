## KDevelop
{% include Links/image.html image="IDEs/KDevelop-4.7.2.png" width="1130px" float="none" description="KDevelop 4.7.2 running under Manjaro Linux" %}

### Background
{% include_relative links.md program="KDevelop" package="dev-util/kdevelop" pacman="extra/x86_64/kdevelop" wp="KDevelop" link="https://www.kdevelop.org/" gr="https://projects.kde.org/projects/extragear/kdevelop/kdevelop/repository" %} is an IDE that is part of the KDE Core Applications (KDE-CA) suite, unlike most other members of the KDE-CA suite it is still based on Qt4 and has not yet made the transition to KDE Frameworks 5 (KF5). Plans to transition to KF5 are currently in place for the near future. It is designed for C, C++, PHP and Python development.

### Customizability
KDevelop is a program I have little experience with, but if you go to the "Settings" menu you can choose to modify the program's keyboard shortcuts and other aspects of its behaviour.

### Features
KDevelop features source code editor support (including syntax highlighting, autocompletion, autoindentation, *etc.*) for its four programming languages, it also has in-built support for git and compilers/interpreters for C, C++, PHP and Python.

### Obtaining It

#### Manjaro
KDevelop is in Manjaro's pacman repositories and can be installed by running the command:
{% include Code/coder.html line1="pacman -S kdevelop" %}

#### Sabayon
KDevelop is in the Entropy repositories and Portage Tree. The version in the Entropy repositories is a developmental version based on Qt5. To install KDevelop on Sabayon, merely run:
{% include Code/coder.html line1="equo i -av dev-util/kdevelop" %}
or:
{% include Code/coder.html line1="emerge -av dev-util/kdevelop" %}

### Advantages (Pros)
* Easy to install.

### Disadvantages (Cons)
* Only supports four programming languages.
* Not very customizable.

### Ratings
{% include_relative 16a-kdevelop-summary.html %}
