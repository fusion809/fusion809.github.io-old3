---
layout:           post
date:             2018-08-01
last_modified_at: 2018-08-01 14:16:30 +1000
title:            "A guide to creating chemical structures on Linux using entirely free (of financial charge) sofware"
permalink:        /chemical-structures/
---

I have not posted in a while, although I do have quite a few ['draft' articles](https://github.com/fusion809/fusion809.github.io/tree/master/_drafts) that I never finished. I did not finish them because after a while I realized that in order to be reasonably comprehensive I'd have to write a super-long article with half of it likely becoming obsolete by the time I finish them. If you are curious about them and want to give them a read run (assuming Rubygems is installed, along with git):

```bash
# The path to the executable directory where gem binaries are found should be in
# PATH. Under some distros the next command will need to be run as root or substituted
# with a package manager command to install bundler (e.g. `zypper in
# ruby2.5-rubygem-bundler` for openSUSE Tumbleweed)
gem install bundler
# The following git command will download ~1.4 MB of data
git clone https://github.com/fusion809/fusion809.github.io
cd fusion809.github.io
# The following command will download at least 15 MB of data
# Depending on your internet speed and PC specifics it may
# take quite a few minutes
bundle install
# Should start the jekyll server and open it
# Sadly sometimes things fail
bundle exec jekyll serve --drafts --future -o
```

I am writing this article to introduce to anyone interested, how one can create high-quality skeletal (2D) structures and 3D models of small and large (macro-) molecules. I have never paid a cent for any chemistry software package, the reason why is because I am a real stingy person when it comes to money. I favour open-source software, which are plentiful and feature-packed when we are talking about 3D chemical modelling, but 2D skeletal structure drawing software with features like importing from traditional chemical name are relatively scarce. So my preferred skeletal structure drawing software is, in fact, proprietary, but available for free for individual non-commercial use. Its name is MarvinSketch and is made by a Hungarian software company called [ChemAxon](https://en.wikipedia.org/wiki/ChemAxon). It is part of the Marvin suite and is written in Java and has Debian and RPM package downloads available from their website.

I have also at times used the proprietary 3D modelling software, Accelrys (now BIOVIA) Discovery Studio Visualizer (ADSV), but its Linux compatibility is not the best. It can run on some really old, no longer supported versions of SUSE Linux Enterprise (SLE) and Red Hat Enterprise linux (RHEL), but these packages have really ancient dependencies that simply cannot be satisfied on modern distributions. If you would to see an image of mine generated in ADSV here is one:

{% include Links/image.html description="Figure 1: Armodafinil 3D model, created using ADSV" url="https://upload.wikimedia.org/wikipedia/commons/5/5e/Armodafinil_ball-and-stick_xtal_2013.png" width="300px" float="left" %}

One important lesson I have learnt from uploading to Wikimedia Commons and dealing with people's complaints there, is that you should always, if you want to import a structure and do something formal and important with it (e.g. upload it to Wikimedia Commons, a peer-review article, an assignment, w/e), download your skeletal structure models from PubChem, or at least ChemSpider, to ensure their accuracy. MarvinSketch is great, but unfortunately I have seen times when it has imported molecules with incorrect stereochemistry or bond order or missing an atom or other relatively minor, compared to how much of the molecule they got right, but important given the difference stereochemistry, bond order and a single atom can make to a molecule's pharmacologic/physiologic effect. I would say that MarvinSketch gets the details perfectly right about 95% of the time, and that percentage is going up with time and bug reports made, so it is sufficient for merely a little recreational or educational sketching, but insufficient for something that requires perfection.

{% include Layouts/clear.html %}

## Skeletal structure drawing
Skeletal structures can be drawn using a variety of Linux-compatible software packages. The most ubiquitous are probably BKChem and GChemPaint. These definitely have their limitations, but they are open-source, at least. They are simple enough and get simple jobs done fairly easily, but if you want more functionality you may have to turn to proprietary software like MarvinSketch. 

### BKChem
BKChem is an unmaintained (no new releases since 2010!) skeletal structure sketching program written in Python. It is fairly easy to use it, but it lacks structureimportation from IUPAC or traditional name (it used to have it, however, but its method has become outdated). 

