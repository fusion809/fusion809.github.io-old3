# The Hornery

This repository contains the Jekyll-powered GitHub Pages-hosted website, [*The Hornery*](https://fusion809.github.io), that is maintained by fusion809. This site is dedicated to Linux and other free (not necessarily the Free Software Foundation's definition of free, just free of monetary charge) operating systems. It predominantly discusses free and open-source software, although occasionally I will mention freeware software (that is, free to use, but proprietary-licensed software). *The Hornery* also has two subfolders powered by static site generators operating on other GitHub repositories of mine. They are:

*   [/hexo-site](https://fusion809.github.io/hexo-site) (source repository: [fusion809/hexo-site](https://github.com/fusion809/hexo-site)), which is powered by [Hexo](https://hexo.io)
*   [/hubpress.io](https://fusion809.github.io/hubpress.io/) (source repository: [fusion809/hubpress.io](https://github.com/fusion809/hubpress.io)), which is powered by [HubPress](https://hubpress.io)

Those interested in copyright information should see [COPYRIGHT.md](https://github.com/fusion809/fusion809.github.io/blob/master/COPYRIGHT.md).

This repo (fusion809/fusion809.github.io) can also be used for demonstration purposes on how to create a Jekyll site. When I started this site my knowledge of CSS (and SCSS), HTML, JS, YML data files and using Jekyll or any static site generator was minimal/non-existent, and it is still no better than minimal, so my ability to set up this site and maintain it with so little knowledge is a testament to how easy Jekyll makes website creation.

This website is predominantly on Linux-related topics and includes howtos and comparisons of free software.

If you want to learn more about my FOSS contributions see the [*Projects*](https://fusion809.github.io/projects/) page on *The Hornery*.

## Running Jekyll Locally

A little how-to on how to run Jekyll on Linux and how to set up a GitHub Pages-hosted Jekyll site that was once housed in this README can be found in the [*The Hornery*](http://fusion809.github.io/how-to-create-your-own-jekyll-site-with-github-pages/). I used to use the [Atom text editor](https://atom.io) to write most of *The Hornery*'s posts, nowadays, however, I use GVim, the graphical user interface of Vim.

## Why Jekyll?

A natural question is why choose Jekyll, as opposed to static site generator X? The answer is multifold:

1.  Jekyll uses the **Liquid templating engine**, making it easier to write templates and split posts up into smaller markdown files. I have tried to split posts up into smaller markdown files with the Hexo static site generator, but the included post components were not rendered correctly (where "rendered correctly" refers to how they were when the post was not split up into these smaller component markdown files). Namely footnotes were left unrendered and host headings were not hyperlinked to their respective permalink. Liquid has better documentation than Hexo's EJS and Swig templating engines.
2.  Jekyll has **superior community support**, in my opinion, in terms of response times.
3.  Being written in Ruby, Jekyll sites have access to **Ruby markdown renderers** such as Kramdown and Redcarpet (although GitHub Pages has dropped support for Redcarpet, regrettably). They are a strength as they include several advanced, optional features such as in-text footnotes. Further details on this compare and contrast can be found in [this](https://stackoverflow.com/questions/36724430/how-do-i-more-efficiently-insert-footnotes-into-a-hexo-post) StackOverflow question of mine. Hexo sites can be switched to the [`markdown-it`](https://www.npmjs.com/package/markdown-it) renderer (as opposed to the default [`marked`](https://www.npmjs.com/package/marked) renderer) which does, optionally, support footnotes but it is not official supported by Hexo and can cause one some headaches down the track.
4.  **Simplicity of deploying with GitHub Pages**. Jekyll is specifically designed to be deployed on GitHub Pages, as Jekyll is an official GitHub project.
