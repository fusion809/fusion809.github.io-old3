## YAML
**YAML** files are metadata files that can be read by a specialized type of Recipe script to provide it the specifics of how it should build your AppImage. The main Recipe script that should be used to build an AppImage from the data in a YAML is [here](https://github.com/probonopd/AppImages/recipes/meta/blob/master/Recipe). They are only to be used when Debian packages are going to be used to build the AppImage or [binary archives](/glossary/#cross-distribution-package-formats) are to be used. If you want to use RPM packages to build your AppImage I am afraid that you will need to see the next section [Docker](#docker). YAML files used to build AppImages have the following general format:

~~~yaml
app:      <APP>          # Name of the App; can be capitalized
binpatch: true           # Only specified as needed, most AppImages should not need this field
union:    true           # Ditto

ingredients:
  packages:                # Debian package(s) to be included in the final AppImage. Excl. the dependencies, these will be automatically downloaded!
    - <PACK1>
    - <PACK2>
    - <PACK3>
    - ...
  dist:    <DIST>      # packaging distribution codename. For example jessie for Debian 8, oldstable for Debian 7, etc.
  sources:                 # lines in /etc/apt/sources.list of your packaging distribution
    - <SOURCE1>
    - <SOURCE2>
    - <SOURCE3>
    - ...
  script:                   # Commands to be executed before (or perhaps even instead of) Debian binaries are downloaded.
    - <LINE1-1>
    - <LINE1-2>
    - <LINE1-3>
    - ...

script:                     # Commands to be run after Debian binaries are downloaded and extracted. Ideally there will not be any.
  - <LINE2-1>
  - <LINE2-2>
  - <LINE2-3>
  - ...
~~~

They are usually named `<APPNAME>.yml`, as this makes it easier to automate their build with Travis CI. It is important to note, however, that not all of these fields are mandatory. The binpatch and union fields are only needed in select cases when ommitting them causes errors, usually runtime errors. Please note that they are *mutually-exclusive*, that is, you can only use one and not both in the one YAML! The `packages`, `dist` and `sources` fields are only required if you are building your AppImage from Debian packages, if you are using binary archives you do not need them. See for example my [`atom-beta`](https://github.com/fusion809/AppImages/blob/recipes/meta/atom-beta/atom-beta.yaml) YAML. If you are running a Debian-based operating system (like Ubuntu) you can try building an AppImage from a YAML (as a means of testing it) by running:

{% include Code/codeu.html line1="bash &lt;(curl -sL https://github.com/probonopd/AppImages/raw/master/recipes/meta/Recipe) &lt;APPNAME&gt;.yml" %}

although sometimes this will not work due to missing appdata XML in `usr/share/metainfo/<APPNAME>.metadata.xml` in `<FS>`. In this case you will get a warning message:

```bash
WARNING: AppStream upstream metadata is missing, please consider creating it
         in usr/share/metainfo/<APPNAME>.appdata.xml
         Please see https://www.freedesktop.org/software/appstream/docs/chap-Quickstart.html#sect-Quickstart-DesktopApps
         for more information.
```

At this stage you can either do as the warning message suggests and create the file `usr/share/metainfo/<APPNAME>.appdata.xml` in your `<FS>` or you may wish to instead use:

{% include Code/codeu.html line1="bash &lt;(curl -sL https://github.com/fusion809/AppImages/raw/master/recipes/meta/qbittorrent/Recipe) &lt;APPNAME&gt;.yml" %}

as this modified Recipe will ignore this warning.
