## Atom Plugins
As previously mentioned Atom's capabilities and appearance are usually modified or extended by use of **packages** and **themes**, respectively. Henceforth, to save some space, I will refer to packages and themes, collectively, as **plugins**. Some of Atom's plugins even come bundled, or pre-installed, with Atom, while the rest are installed using Atom's own package manager, `apm`, which is sort of like a modified version of Node's `npm` package manager. At the time of updating this post (11 April 2016 18:37:00 UTC+10) there were 3,988 packages and 1,193 themes for Atom available from [https://atom.io/packages](https://atom.io/packages/) and [https://atom.io/themes](https://atom.io/themes), respectively. These plugins are those that have already been built by the community, or by the Atom developers themselves, but everyone is completely free to develop their own plugins for Atom. Unfortunately, some of these plugins available from the aforementioned websites will be for older versions of Atom and may not be compatible with the latest releases.

{% include Links/image.html image="Atom/pigments-versions-tab.png" width="full" float="none" description="This is how one checks out the available versions of a package at https://atom.io/packages. Click the &ldquo;Versions&rdquo; tab in the red rectangle." %}

### Checking Plugin Compatibility
What I do to check whether a package or theme is likely to work with the current version of Atom is I check out when the latest release of the package or theme was published. If it was within the last month it is a fair bet it will be compatible with the current version of Atom, if not, but it was updated within the past six months, then there's a chance it might work with the latest release of Atom, but I would not hold out too much hope that it will work exactly as it should. If it was last updated prior to the release of Atom 1.0 (25 June 2015) I would not even bother trying it unless I have a burning desire to use its functionalities. Unfortunately, Atom's [packages](https://atom.io/packages) and [themes](https://atom.io/themes) repositories' search engine (that is, how you search for the package/theme you want in a web browser of your choosing) is very basic (and yes I have complained about this at the [Atom Forums](https://discuss.atom.io/t/advanced-packages-themes-search/24697), with no clear intention on the behalf of developers to rectify this), so I cannot exclude plugins that have not been updated within the past six months. Rather I have to look for plugins and then when I find one I think I will like, I have to go to its description page and press on the "Versions" tab to see when the latest release of this plugin was. It is very disappointing to find that a package I would really like has not been updated since the release of Atom 1.0 in June 2015.

### Plugins I Know and Love

<div class="note">
  <b>LEGEND:</b>
  <ul>
    <li>
      A green tick (<sup><span style="color:#49E20E;">&#10004;</span></sup>) is used to denote plugins that are bundled, by default, with the latest release of Atom.
    </li>
    <li>
      A red cross (<sup><span style="color:#DB2929;">&#10006;</span></sup>) is used to denote plugins that need to be installed by running <code>apm install &lt;PACKAGE&gt;</code>, where <code>&lt;PACKAGE&gt;</code> is the package's name
    </li>
  </ul>
</div>

My favourite packages are (in alphabetical order; I also mention how much time it adds to the start time of Atom):

* [`atomic-chrome`](https://atom.io/package/atomic-chrome){% include Layouts/minus.html %} &mdash; which allows one to select a text box in the Google Chrome web browser and, with the appropriate Google Chrome extension, press an icon in the browser that will create an Atom buffer that will automatically copy any text typed into it into the text box. `atomic-chrome-0.3.0` adds 25ms to the start up time of Atom.
* [`file-icons`](https://atom.io/package/file-icons){% include Layouts/minus.html %} &mdash; which assigns files icons based on their file extension / name in the file tree. `file-icons-1.7.1` added 19ms to the start time of Atom 1.6.2.
* [`git-plus`](https://atom.io/package/git-plus){% include Layouts/minus.html %} &mdash; which allows you to run git commands in Atom without a terminal. This is analogous to the in-built ability of GNU Emacs to perform git commands without a terminal. `git-plus-5.13.4` added 5ms to the start time of Atom 1.6.2.
* [`git-time-machine`](https://atom.io/package/git-time-machine){% include Layouts/minus.html %} &mdash; which allows you to look at past revisions of a git-controlled file. `git-time-machine-1.4.1` added 2ms to the start time of Atom 1.6.2.
* [`markdown-preview`](https://atom.io/package/markdown-preview){% include Layouts/plus.html %} &mdash; allows you to preview markdown files in Atom. `markdown-preview-0.157.2` added 5ms to the start time of Atom 1.6.2.
* [`markdown-writer`](https://atom.io/package/markdown-writer){% include Layouts/minus.html %} &mdash; which allows you to more efficiently write markdown files, including in a static site's source folder. `markdown-writer-2.3.2` added 5ms to the start time of Atom 1.6.2.
* [`package-sync`](https://atom.io/package/package-sync){% include Layouts/minus.html %} &mdash; which makes it easier for one to synchronize one's installed Atom plugins across multiple devices and operating systems. `package-sync-1.0.0` added 1ms to the start time of Atom 1.6.2.
* [`pigments`](https://atom.io/package/pigments){% include Layouts/minus.html %} &mdash; which allows you to preview colours described by hexadecimals, RGB combinations and alike in Less or CSS style sheets. `pigments-0.26.0` added 127ms to the start time of Atom 1.6.2.
* [`project-manager`](https://atom.io/package/project-manager){% include Layouts/plus.html %} &mdash; which makes it easier to access and switch between project folders. `project-manager-2.9.7` added 10ms to the start time of Atom 1.6.2.
* [`script`](https://atom.io/package/script){% include Layouts/minus.html %} &mdash; which allows one to execute scripts, including those written in Python. `script-3.6.3` added 2ms to the start time of Atom 1.6.2.
* [`terminal-plus`](https://atom.io/package/terminal-plus){% include Layouts/minus.html %} &mdash; which inserts an embedded terminal into Atom. I use this plugin on a daily basis. `terminal-plus-0.14.5` added 25ms to the start time of Atom 1.6.2.

Those I have limited experience with, but on paper seem interesting and potentially useful to me at least, depending on the specifics of the programming you do, include:

* [`build`](https://atom.io/package/build){% include Layouts/minus.html %} &mdash; which allows one to compile source code in the editor. `build-0.59.0` added 59ms to the start time of Atom 1.6.2.
* [`nuclide`](https://atom.io/package/nuclide){% include Layouts/minus.html %} &mdash; a plugin created by Facebook to turn Atom into an IDE for Hack/PHP. `nuclide-0.129.0` added 7,950ms to the start-up time of Atom 1.6.2.
* [`platformio-ide`](https://atom.io/package/platformio-ide){% include Layouts/minus.html %} &mdash; a plugin created by [PlatformIO](http://platformio.org/) that also turns Atom into an IDE, specifically for C/C++. `platformio-ide-1.1.1` added 126ms to the start-up time of Atom 1.6.2.
* [`platformio-ide-terminal`](https://atom.io/package/platformio-ide-terminal){% include Layouts/minus.html %} &mdash; a plugin created by [PlatformIO](http://platformio.org/) that adds an embedded terminal to Atom. `platformio-terminal-2.0.3` added 17ms to the start-up time of Atom 1.6.2.
