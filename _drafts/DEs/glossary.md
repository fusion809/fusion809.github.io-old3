## Glossary
Some basic definitions of the terminology used in this post are called for.

<h3 style="width: 100%">Desktop environment</h3>
{% include Layouts/note.md note1="Desktop environment's Wikipedia article is [here](https://en.wikipedia.org/wiki/Desktop_environment)." %}

A desktop environment is an implementation of the desktop metaphor. It consists of several crucial components, including:
* A display server &mdash; the most common options are Wayland and X.Org Server. 
* A Wayland compositor / window manager.
* A widget toolkit &mdash; most commonly GTK+ or Qt. 

<h3 style="width: 100%">Wayland compositor</h3>
{% include Layouts/note.md note1="Wayland's Wikipedia article is [here](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol))." %}

A Wayland compositor is essentially the Wayland equivalent to a compositing window manager. It also plays the role of the display server, while Wayland serves as the display server protocol. The X.Org Server is also a display server. 

<h3 style="width: 100%">Window manager</h3>
{% include Layouts/note.md note1="The Wikipedia article for window manager is [here](https://en.wikipedia.org/wiki/Window_manager)." %}

A window manager does exactly what its name suggests, it manages the windows, like the titlebar, position and other characteristics, of applications. A tiling window manager is one in which windows are placed side-by-side like tiles, as opposed to on top of one another, and there is no overlap. A stacking window manager is one in which windows stack on one another, as opposed to side-by-side. Dynamic window managers are ones that can dynamically switch between these two paradigms. 

{% include Layouts/clear.html %}
