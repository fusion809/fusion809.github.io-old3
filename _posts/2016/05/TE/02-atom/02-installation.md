### Installation
Details on installing Atom on Linux can be found in the [*Installing Atom*](https://fusion809.github.io/running-atom-on-linux/#installing-atom) section of the *Running Atom on Linux* post. Most notably I have developed a GitHub repository of installer scripts for Atom on Linux, to use them (assuming cURL is installed):

{% include Code/codeu.html line1="/bin/bash -c &quot;$(curl -sL https://git.io/vwEIX)&quot;" %}

while if you do not have cURL installed but you do have wget installed run:

{% include Code/codeu.html line1="/bin/bash -c &quot;$(wget -cqO- https://git.io/vwEIX)&quot;" %}
