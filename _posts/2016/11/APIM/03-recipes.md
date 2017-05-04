## Recipe
**Recipes** are shell scripts that automate the process of building an AppImage. That is, they create a suitable AppDir for building an AppImage and then builds it using `appimagetool`. They were once the recommended way of building AppImages in an easily reproducible way, but this has since changed since the introduction of YAMLs. Although, it is important to note, that if you wish to use RPM packages to build your AppImage you will still likely need to use a Recipe, along with a Dockerfile (for details of this see the [Docker](#docker) section of this post). YAMLs are essentially designed to reduce repetitiveness as most Recipes contain common lines of code to them, so by writing a generalized Recipe that is fed information by a YAML one cuts down on how much one has to type to build an AppImage. Recipes that @probonopd has written (a list can be found [here](https://github.com/probonopd/AppImages/tree/master/recipes)) are designed to be built on a Travis CI build instance with the following characteristics (based on his [`.travis.yml`](https://github.com/probonopd/AppImages/blob/master/.travis.yml)):

```yaml
sudo: required
dist: trusty
addons:
  apt:
    packages:
    - bsdtar
    - curl
    - zsync
    - squashfs-tools
```

so in other words, a build instance using the OS Ubuntu 14.04 (or Trusty), with `bsdtar`, `curl`, `sudo`, `zsync` and `squashfs-tools` available for usage by his Recipe. As such his Recipes are not designed to use RPM packages to build an AppImage. Although it is worthwhile noting that he does include a few Recipes with Dockerfiles. These Dockerfiles exist when his Recipe is to be run on a Red Hat-based system like CentOS. Why does he use Travis CI to build his AppImages? Well that is a question for a later section, specifically the [Travis CI](#travis-ci) section.
