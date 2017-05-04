## Glossary
{% include Layouts/note.md note1="Unless otherwise specified all links are to the English Wikipedia" %}
<br/>

### [Desktop Environment](https://en.wikipedia.org/wiki/Desktop_environment)
The definition of a **desktop environment** (**DE**) varies according to whom you ask, but I will define a DE as a GUI consisting of at least three of the following, with the optional component (that is, the component that can be left out, with the DE still fitting my definition of a DE) being the FM:

* **Display server**/**Windowing system** (**DS**/**WS**): which create and maintain windows within a GUI. The most popular examples on Linux platforms are Wayland and the X Window System.
* **File manager** (**FM**): which allow users the ability to search their file system within the GUI. Most DEs have their own unique FM, although some DEs share FMs with other desktops.
* **Widget toolkit** (**WT**). These are used to construct GUIs, most popular examples on Linux platforms are the Enlightenment Foundation Libraries (EFL), GIMP Toolkit (GTK+) and Qt.
* **Window manager** (**WM**). These are programs that control the appearance, placement and other details of windows within a windowing system. Most DEs use their own WM, although some share.

Most DEs that have all of these components also come with their own set of core applications, which usually include a:

* **Picture viewer** &mdash; examples include Eye of MATE Image Viewer, Gwenview, Ristretto, *etc.*
* **Terminal emulator** &mdash; examples include GNOME Terminal, Konsole, LXTerminal, MATE Terminal, Xfce Terminal, *etc.*
* **Text editor** &mdash; examples include gedit, KWrite, Leafpad, Mousepad and Pluma.

The name **desktop environment** derives from the fact that most DEs keep to the traditional "[desktop metaphor](https://en.wikipedia.org/Desktop_metaphor)", which is a metaphor of a writing desktop where people do their paper work.

### [Window Manager](https://en.wikipedia.org/wiki/Window_manager)
{% include Layouts/note.md note1="Much of this information is taken from the [ArchWiki](https://wiki.archlinux.org/index.php/Window_manager) or Wikipedia" %}
As previously mentioned **window managers** (**WMs**) are programs that control the appearance, behaviour, placement, *etc.* of windows within a display server/windowing system. The vast majority of free &#42;nix WMs are designed to work with the X Window System (XWS) alone, although in recent years some WMs originally developed to work under XWS alone have been rewritten so that they can also run under Wayland without a problem. They can be further categorized based on their properties, as:

* [**Stacking window managers**](https://en.wikipedia.org/wiki/Stacking_window_manager) (**SWMs**) &mdash; these are window managers that treat windows like objects on an actual physical desktop &mdash; they can *stack* (or *float*) on top of each other, or they can be placed side-by-side. The vast majority of Linux DEs use SWMs as they are more intuitive for most users.
* [**Tiling window managers**](https://en.wikipedia.org/wiki/Tiling_window_manager) (**TWMs**) &mdash; these are WMs that treat windows like *tiles* &mdash; they can appear side-by-side one another, but they cannot overlap.
* [**Dynamic window managers**](https://en.wikipedia.org/wiki/Dynamic_window_manager) (**DWMs**) &mdash; which are WMs which can *dynamically* switch between stacking and tiling.
