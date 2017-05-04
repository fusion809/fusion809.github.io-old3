## Terminology
In this post I will use several terms that are not explained in [the glossary](/glossary/), this section will (hopefully) explain them so that everyone knows what I mean when I use each of them. If this section, or any other section of this post, is confusing please [contact me](/contributing/) and tell me. I am afraid I am not perfect, or a mind-reader, so I need you to tell me if something is wrong or if I omitted some important information. 

### Package Building
**Building a package** will be used to refer to the process of compiling, or otherwise making a package's source code executable, usually so that some file inside (usually a shell script or file written in object code) can be executed in order to start the program the package is for.

### Package Installation
The act of **installing a software package** involves moving the installed files of a package into a file system. Most of the time, when someone says that they are installing a package, what they are doing is they are installing the package's file to the live file system (that is, the file system of the PC that is being used).

### Package Preparation
An important step in package development is the **preparation** of the sources being used to build the package.

### Source Compilation
When one is creating a software package, quite frequently one will need to **compile the package's source code**, which means convert the source code written in some programming language into something that is machine readable and executable. This conversion is performed, using so called "compilers" like the GNU Compiler Collection (GCC) which creates object code from the source code.
