#### Programming
Atom has several optional plugins that can be used to turn Atom into an efficient IDE for a variety of different programming languages. These plugins include:

* {% include Atom/apm.md package="build" %} &mdash; a plugin to automate the process of building projects in Atom. It has a support for most major compiled  programming languages, for a list of such languages see [here](https://atombuild.github.io/). Projects written in other compiled languages can likely be built via the use of other more language-specific packages, like {% include Atom/apm.md package="builder-go" %} for Go.
* {% include Atom/apm.md package="hydrogen" %} &mdash; a plugin for running scripts using any installed Jupyter kernels you have available.
* {% include Atom/apm.md package="nuclide" %} &mdash; a plugin developed by Facebook that adds features mentioned in greater detail [here](http://nuclide.io/docs/quick-start/getting-started/). These features include debugging, test running, problem diagnosing, difference viewing,
*etc.* primarily for the Hack and PHP programming languages. It also includes in-built support for Mercurial versioning control. I personally would not recommend it as for me it makes Atom either incredibly laggy and prone to crashes.
* {% include Atom/apm.md package="platformio-ide" %} &mdash; a plugin to turn Atom into a more efficient IDE for IoT. It includes, &ldquo;intelligent code completions&rdquo; for C/C++, along with debugging, building and version control features typical of most IDEs. It also makes Atom slower, but it does not slow it down quite as much as `nuclide`.
* {% include Atom/apm.md package="script" %} &mdash; for package for executing files (or scripts) written in an interpreted language like JavaScript or Python.
