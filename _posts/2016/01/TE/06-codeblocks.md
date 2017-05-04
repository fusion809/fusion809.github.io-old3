## Code::Blocks
{% include Links/image.html image="Code::Blocks/Code::Blocks-13.12.png" width="1130px" float="none" description="Code::Blocks 13.12 running under Manjaro" %}

### Background
{% include_relative links.md program="Code::Blocks" package="dev-util/codeblocks" link="http://www.codeblocks.org/" forum="http://forums.codeblocks.org/" wiki="http://wiki.codeblocks.org/index.php/Main_Page" sf="http://sourceforge.net/projects/codeblocks/" wp="Code::Blocks" pacman="codeblocks" pacman="community/x86_64/codeblocks" gr="https://github.com/jenslody/codeblocks" %} is a free and open-source cross-platform IDE for C, C++ and Fortran, that is written predominantly in C++ and to a lesser extent C. Its GUI is based on the wxWidgets toolkit. It is compatible with a wide range of different compilers, including GCC, Clang and Visual C++. Its development began ca. 2004.[^2]

### Customizability
It is extensible through plugins[^3], although I have limited experience with this program so I cannot really comment any further on this.

### Features
It provides many of the advanced features of text editors like syntax highlighting, code folding, code completion, *etc.* for C, C++, Fortran and XML files.

### Obtaining It

#### Manjaro
On Manjaro Code::Blocks can be very easily installed using pacman:
{% include Code/coder.html line1="pacman -S codeblocks" %}

#### Sabayon
Code::Blocks is in the Entropy repositories and Portage Tree, consequently it can be installed via running:
{% include Code/coder.html line1="equo i -av dev-util/codeblocks" %}
or:
{% include Code/coder.html line1="emerge -av dev-util/codeblocks" %}

### Advantages (Pros)
* Cross-platform and able to run on Windows, OS X and Linux.
* Fairly lightweight.
* Feature-packed.
* Easy to install on both distributions.

### Disadvantages (Cons)
* Only supports three programming languages: C, C++ and Fortran.
* Fairly infrequently updated. As of the time of writing (12 January 2016) the latest version was released in December 2013. although a new version is expected to be released within the next month or so.

### Summary
{% include_relative 06a-codeblocks-summary.html %}
