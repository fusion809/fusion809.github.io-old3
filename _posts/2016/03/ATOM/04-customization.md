## Customization
Atom can be further customized by editing files in one's `~/.atom` directory. This is the example top-level structure of this directory:

<div class="tree">
<b class="TOP">~/.atom</b><br>
├── <b class="DIR">blob-store</b><br>
├── <b class="DIR">compile-cache</b><br>
├── <b class="NORM">config.cson</b><br>
├── <b class="DIR">electron</b><br>
├── <b class="NORM">keymap.cson</b><br>
├── <b class="NORM">LICENSE.md</b><br>
├── <b class="NORM">nohup.out</b><br>
├── <b class="DIR">packages</b><br>
├── <b class="NORM">packages.cson</b><br>
├── <b class="NORM">projects.cson</b><br>
├── <b class="DIR">storage</b><br>
└── <b class="NORM">style.less</b><br>
</div>

`config.cson` contains your personal modification to Atom's behaviour. For example, my `config.cson` presently looks like this:

<script src="https://gist.github.com/fusion809/3fbf01e2e3b2c500b3ec.js"></script>

most of these lines pertain to my customization of the behaviour of my installed packages. I am not really well-versed to the formatting of CSON files, so I am afraid
I probably will not be too helpful in explaining how to write your own custom `config.cson`. `keymap.cson`, as you can probably guess, contains your own custom keyboard shortcuts, while `style.less` is your personal stylesheet (I know even less about its format than the CSON format, case in my point, my `style.less` file does not even exist). The `packages.cson` is a file that pertains to the `package-sync` package. It is a list of packages that the `package-sync` package can read and install, if missing. I personally keep all these files (so that I can more easily sync them across my PCs and operating systems) in my own GitHub repository &mdash; [https://github.com/fusion809/atom](https://github.com/fusion809/atom).
