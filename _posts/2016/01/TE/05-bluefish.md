## Bluefish
{% include Links/image.html image="IDEs/Bluefish.png" description="Bluefish running under LXDE" width="1130px" float="none" %}

### Background
{% include_relative links.md program="Bluefish" package="app-editors/bluefish" pacman="extra/x86_64/bluefish/" link="http://bluefish.openoffice.nl/index.html" wiki="http://bfwiki.tellefsen.net/index.php/Main_Page" wp="Bluefish_(software)" ml="http://bfwiki.tellefsen.net/index.php/Manual_2_ToC" %} is a text editor, primarily intended for web development and programming, as it provides syntax highlighting support and other features mostly for web markup, programming and style sheet languages.

### Customizability
I have limited experience with Bluefish but from what I can gather, it is customizable, although I cannot comment on how extensive this customizability is.

### Features
Syntax highlighting is available for almost (if not all) all computer languages used in web development.

### Obtaining It

#### Manjaro
Bluefish is in the official pacman repositories for Manjaro so merely running:
{% include Code/coder.html line1="pacman -S bluefish" %}
should install it.

#### Sabayon
It can be installed with Entropy or Portage (and is available in the Portage Tree). With Entropy run:
{% include Code/coder.html line1="equo i -av app-editors/bluefish" %}
While to install it with Portage run:
{% include Code/coder.html line1="emerge -av app-editors/bluefish" %}

### Advantages (Pros)
* Customizable
* Has features that would appeal to a web developer

### Disadvantages (Cons)
* Support for non-web markup/programming languages is less than adequate.

### Summary
{% include_relative 05a-bluefish-summary.html %}
