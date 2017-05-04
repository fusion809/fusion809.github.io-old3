#### Blog Writing
For the purpose of blog writing Atom has the following helpful features:

* It has in-built syntax-highlighting, previewing and snippeting support for GitHub-flavoured markdown (GFM). It also has in-built syntax-highlighting, auto-indentation and snippet support for HTML and, with the help of a plugin {% include Atom/apm.md package="atom-html-preview" puncl="(" puncr=")," %} it is also possible to preview HTML files in Atom. Syntax-highlighting, previewing and snippet support is also obtainable, using plugins, for asciidoc and textile.
* It can apply language-specific syntax highlighting to pieces of code (belonging to separate, non-markdown languages like YAML for front-matter) within markdown documents. If you insert a code block (denoted by triple ticks (<code>&#96;</code>) or tildes (`~`) at the start and end of the block, with the name of the computer language enclosed by the block after the first triple of ticks/tildes) Atom will highlight the code enclosed according to its respective computer language.
* The in-built git support and embedded terminal mentioned earlier can be handy for those writing blogs hosted by GitHub and other sites using the git version control system. The embedded terminal can also be handy for those using static site generators (SSGs) that need to be re-generated manually before you make any git commits (e.g., Hexo).
* One can also run certain SSGs from within Atom itself without using the embedded terminal, using plugins. For example, for Jekyll there is a plugin called {% include Atom/apm.md package="jekyll" %} that can be used to run the Jekyll server.
* Keyboard shortcuts for bolding and italicizing text, inserting code blocks, *etc.* in markdown. This capability is provided by the {% include Atom/apm.md package="markdown-writer" %} package.
* It has in-built spell-checking abilities (provided by the {% include Atom/apm.md package="spell-check" %} package)
* You can also open a web browser embedded in Atom using the {% include Atom/apm.md package="browser-plus" %} package. I personally have limited experience with this package as it has a [graphical bug](https://github.com/skandasoft/browser-plus/issues/71) that I have noticed on Arch Linux.

Personally I think it is the best text editor out there for writing a blog.
