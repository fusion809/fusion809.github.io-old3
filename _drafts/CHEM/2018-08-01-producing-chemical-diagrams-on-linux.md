---
layout:           post
date:             2018-08-01
last_modified_at: 2018-08-01 14:16:30 +1000
title:            "A guide to creating chemical structures on Linux using entirely free (of financial charge) sofware"
permalink:        /chemical-structures/
---

I am writing this article to introduce to anyone interested, how one can create high-quality skeletal (2D) structures and 3D models of small and large (macro-) molecules on the Linux platform. 

I have never paid a cent for any chemistry software package, fortunately, I have managed to get away with this without missing out on any major functionalities. I favour open-source software, which are plentiful and feature-packed when we are talking about 3D chemical modelling, but 2D skeletal structure drawing software with features like importing from traditional chemical name are relatively scarce. So my preferred skeletal structure drawing software is, in fact, proprietary, but available for free for individual non-commercial use. Its name is [MarvinSketch](https://chemaxon.com/products/marvin) and is made by a Hungarian software company called [ChemAxon](https://en.wikipedia.org/wiki/ChemAxon). It is part of the Marvin suite and is written in Java and has Debian and RPM package downloads available from their website.

I have also at times used the proprietary 3D modelling software, Accelrys (now BIOVIA) Discovery Studio Visualizer (ADSV), but its Linux compatibility is not the best. It can run on Red Hat Enterprise Linux (RHEL) and SUSE Linux Enterprise (SLE), which are both paid products. I have tried running ADSV (specifically 2017R2) on CentOS and Scientific Linux (SL) installations, as these distributions are essentially free remakes of RHEL, but on both I found a pretty significant bug wherein the odd atom would be rendered as essentially a grey blob, even though the colour palette does not call for that colour at all. If you would to see an image of mine generated in ADSV on Windows here is one:

{% include Links/image.html description="Figure 1: Armodafinil 3D model, created using ADSV" url="https://upload.wikimedia.org/wikipedia/commons/5/5e/Armodafinil_ball-and-stick_xtal_2013.png" width="300px" float="left" %}

I personally think models generated using it are more aesthetically pleasing than those generated in the open-source 3D modelling packages I have come across. Then again, this could just be because it's easier to tweak the aesthetics to make it pleasing in ADSV than it is in most open-source packages as it is designed especially to be user-friendly, while the open-source packages generally are not. 

One important lesson I have learnt from uploading to Wikimedia Commons and dealing with people's complaints there, is that you should always, if you want to import a structure and do something formal and important with it (e.g. upload it to Wikimedia Commons, a peer-review article, an assignment, w/e), download your skeletal structure models from PubChem, or at least ChemSpider, to ensure their accuracy. MarvinSketch is great, but unfortunately I have seen times when it has imported molecules with incorrect stereochemistry or bond order or missing an atom or other relatively minor, compared to how much of the molecule they got right, but important given the difference stereochemistry, bond order and a single atom can make to a molecule's pharmacologic/physiologic effect. I would say that MarvinSketch gets the details perfectly right about 95% of the time, and that percentage is going up with time and bug reports made, so it is sufficient for merely a little recreational or educational sketching, but insufficient for something that requires perfection.

{% include Layouts/clear.html %}

## Skeletal structure drawing
Skeletal structures can be drawn using a variety of Linux-compatible software packages. The most ubiquitous are probably BKChem and GChemPaint. These definitely have their limitations, but they are open-source, at least. They are simple enough and get simple jobs done fairly easily, but if you want more functionality you may have to turn to proprietary software like MarvinSketch. 

### BKChem
{% include Links/image.html description="Figure 2: BKChem 0.13.0 running on KDE neon git unstable, with an <a href='https://en.wikipedia.org/wiki/Amitriptyline' link='_blank'>amitriptyline</a> Molfile imported" image="BKChem/BKChem-0.13.0-KDE-20180608.png" width="800px" float="right" %}
BKChem is an unmaintained (no new releases since 2010!) skeletal structure sketching program written in Python. It is fairly easy to use it, but it lacks structure importation from IUPAC or traditional name (it used to have it, however, but its method has become outdated). It has not had a 1.0 release yet (and given it is unmaintained it seems unlikely to happen anytime soon), but seems fairly stable. One can draw structures and chemical reactions, it also supports other languages, importing from CML, CML2 and Molfile formats; exporting to a variety of graphic file formats, as well as CML, CML2 and Molfile formats. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/IaPWx5vs5VA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### GChemPaint
{% include Links/image.html description="Figure 3: GChemPaint " %}
