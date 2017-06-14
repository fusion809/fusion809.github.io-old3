<!-- 2 -->
## Minimum requirements
If you have a modern computer, with ample RAM (256 MB or more), a reasonably-sized disk drive (at least 2.5 GB) and a decent set of processors in it (I would recommend i3, i5 or i7, but alternate processors can be used, refer to the [CPU subsection](#CPU) for details) you should be able to skip the rest of this section. 

### CPU
Alpha, AMD64 (64-bit x86; i3, i5 and i7 all fit into this category), HPPA, IA64, MIPS, PPC, PPC64, SPARC and x86 (i486 or later; i386 is **not** compatible) processors are all compatible with Gentoo Linux. The more powerful your processor(s) are, the faster packages will build which is definitely a plus. Most modern PCs have at least two core processors.

### RAM
The amount of RAM required is not really set in stone. The Gentoo Handbook indicates that at least 256 MB RAM should be available if you are using the minimal Gentoo CD installation medium, but theoretically this could be reduced by using a Linux distribution, or live Linux medium with lesser requirements, from which one can follow the steps in this guide and the Gentoo Handbook to build the distribution. Any Linux distribution or Linux live medium could, in theory, be used to build a Gentoo system, provided it has an internet connection and a set of widely available pieces of command-line software (which will be discussed in details in [Preparation](#preparation)).

Depending on which packages you wish to use you may need far more RAM than 256 MB. Some packages require a certain amount of RAM in order for them to build properly. I have seen one package, {% include Packages/gentoo.html package="www-client/chromium" puncr="," %} that under certain circumstances requires up to 16 GB RAM to build! 

### Disk space
The minimum requirement for installing Gentoo is about 2.5 GB disk drive space, although as one can probably guess more would be better, especially if one wishes to install large collections of software like GNOME and KDE Plasma 5. 
