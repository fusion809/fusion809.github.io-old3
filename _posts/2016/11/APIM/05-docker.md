## Docker
As previously mentioned the YAML approach to building an AppImage is only valid for AppImages built from binary archives or Debian packages. So when you would like to build an AppImage from RPM packages you are stuck to using Recipes and Dockerfiles. Although theoretically, you could get around the need for Dockerfiles by building them locally on a system using the RPM package manager. If you used this technique, however, you could not use these Recipes to build an AppImage with Travis CI as Travis CI only supports the use of Ubuntu 12.04 and 14.04 build environments. If you would like to see some example Recipe and Dockerfile combinations that do this see:

* [inkscape](https://github.com/probonopd/AppImages/tree/master/recipes/inkscape)
* [kdevelop](https://github.com/probonopd/AppImages/tree/master/recipes/kdevelop)
* [krita](https://github.com/probonopd/AppImages/tree/master/recipes/krita)
* [scribusctl](https://github.com/probonopd/AppImages/tree/master/recipes/scribusctl)
* [subsurface](https://github.com/probonopd/AppImages/tree/master/recipes/subsurface)
* [vlc](https://github.com/probonopd/AppImages/tree/master/recipes/vlc)

It is notable that many (if not most) of these Recipes do not just build the AppImage from RPM packages but they also build some of the components of the AppImage from source code. Most Docker and Recipe combinations that I have seen use CentOS 6 as the base Docker image. This is why so many components of the AppImage has to be built from source code, as CentOS 6 usually includes very old libraries, executables, *etc.* and some programs require newer versions of these libraries and executables to be present in order for them to be build successfully. Usually the Dockerfile has the layout:

```docker
FROM centos:6
ADD https://github.com/<USER>/<REPO>/raw/master/recipes/<RECIPE>/Recipe /Recipe
RUN sed -i -e 's|sudo ||g' Recipe && bash -ex Recipe && yum clean all && rm -rf /dependencies && rm -rf /out && rm -rf /AppImage* && rm -rf /AppDir
```

where `<RECIPE>` is the name of the Recipe, `<USER>` is the GitHub username for the repo who's Recipe we are using and `<REPO>` is the name of the repo in which the Recipe is. 
