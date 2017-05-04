### Python
{% include Links/links.html program="Python" package="dev-lang/python" category="dev-python" wp="Python_(programming_language)" %} is a widely and extensively-used high-level general-purpose multi-paradigm programming language that is particularly invaluable as a cross-platform scripting language. It is named after the BBC TV series [*Monty Python's Flying Circus*](https://en.wikipedia.org/wiki/Monty_Python's_Flying_Circus). Python is licensed under its own free, permissive (BSD-like) license called the [Python Software Foundation License](https://en.wikipedia.org/wiki/Python_Software_Foundation_License). It is probably the most flexible programming language I have seen and it is used for numerical computations, scientific computing, writing and working with web applications, application software and package management systems. Its design philosophy emphasizes code readability and concision. It also automatically performs some tasks that users would have to perform manually if they were working with lower-level languages like C. For these reasons it, and JavaScript, are usually the programming languages that people interested in programming, are recommended to learn first, before they learn more complicated programming languages like C, C++ and Java. Its major caveat is its speed, however, it is worthwhile noting that its speed is significantly dependent on how it is implemented. The standard, official implementation of Python is [CPython](https://en.wikipedia.org/wiki/CPython) which while it is more efficient than most implementations (like Jython), is less efficient than the [PyPy](https://en.wikipedia.org/wiki/PyPy) implementation. Regardless of the implementation used, however, it is usually significantly slower than compiled languages like C, C++ and Java.

There are also two main versions of Python presently in widespread use: Python 2 and Python 3. Most programs I have come across have
greater support for Python 2 than for Python 3. Python also has its own command-line package manager called {% include Links/wp.md name="pip" cat="software" %} (`pip`). Some programs I am particularly familiar with that are written predominantly (if not exclusively) in Python that are compatible with Linux systems include:

{% capture point1 %}
{% include Links/wp.md name="Anaconda" cat="installer" %} &mdash; an operating system installer used by Fedora and most of its derivatives, see the [Fedora](#fedora) section for details.
{% endcapture %}
{% capture point2 %}
{% include Links/wp.md name="DNF" cat="software" %} &mdash; the default package manager of Fedora ≥22.
{% endcapture %}
{% capture point3 %}
{% include Links/gr.md owner="Sabayon" repo="entropy" name="Entropy" %} &mdash; the default binary package manager of Sabayon Linux.
{% endcapture %}
{% capture point4 %}
{% include Links/wp.md name="GNU Bazaar" %} &mdash; the distributed version control system developed by Canonical Ltd.
{% endcapture %}
{% capture point5 %}
{% include Links/wp.md name="Portage" cat="software" %} &mdash; the default package manager of Gentoo Linux, and the default source code package manager of its derivatives such as Sabayon Linux.
{% endcapture %}
{% capture point6 %}
{% include Links/wp.md name="PyMOL" %} &mdash; an application for viewing and performing calculations relating to molecules, especially macromolecules like proteins, DNA double helices and RNA helices. Which is managed by pip, so running {% include Code/codeus.html line1="sudo pip install pymol" %} should install it.
{% include Links/image.html image="PyMOL/PyMOL-1.7.6.0-3EIG.png" float="none" %}
{% endcapture %}
{% capture point7 %}
{% include Links/wp.md name="SageMath" %} &mdash; a mathematics program that uses a Python-like syntax and integrates several free pieces of
mathematics software in a single command-line and notebook interface, with interfaces available for several proprietary mathematics programs too.
{% include Links/image.html image="IDEs/SageMath-6.10.png" float="none" %}
{% endcapture %}
{% capture point8 %}
{% include Links/wp.md name="Spyder" cat="software" %} &mdash; a cross-platform free and open-source IDE for scientific computing in Python. It is managed by pip, so running {% include Code/codeus.html line1="sudo pip install spyder" %} should install it, provided its dependency PyQt4/PyQt5 is already installed.
{% include Links/image.html image="IDEs/Spyder-2.3.8.png" float="none" %}
{% endcapture %}
{% capture point9 %}
[youtube-dl](https://rg3.github.io/youtube-dl/) ([`youtube-dl`](/man/youtube-dl.1.html)) &mdash; a command-line program for downloading YouTube videos as media files. It is managed by pip (so running {% include Code/codeus.html line1="sudo pip install youtube-dl" %} should install it)
{% endcapture %}
{% capture point10 %}
[yum](http://yum.baseurl.org/) &mdash; the default command-line package manager of CentOS, Fedora &lt;22, Oracle Linux, Red Hat Enterprise Linux (RHEL), *etc.* It is written almost entirely in Python and this likely contributes to its relatively slow speed.
{% endcapture %}

<ul>
<li>{{ point1 | markdownify }}</li>
<li>{{ point2 | markdownify }}</li>
<li>{{ point3 | markdownify }}</li>
<li>{{ point4 | markdownify }}</li>
<li>{{ point5 | markdownify }}</li>
<li>{{ point6 | markdownify }}</li>
<li>{{ point7 | markdownify }}</li>
<li>{{ point8 | markdownify }}</li>
<li>{{ point9 | markdownify }}</li>
<li>{{ point10 | markdownify }}</li>
</ul>

Bash, MATLAB/GNU Octave and Python, in order from most to least experience, are the languages I have the most experience with. Here is an example Python script I have written, with some help from the work of others, to solve and plot the solution to the Lorenz equations. If you would like to see the Python scripts I have written see [this repository](https://github.com/fusion809/python-scripts).

~~~ python
# Lorenz Equations SciPy solver
import numpy as np
from scipy import integrate
from mpl_toolkits.mplot3d import axes3d
from math import cos
from matplotlib import pyplot as plt
tmin, tmax = 0, 200
x0, y0, z0 = 0, 1, 0
sigma, rho, beta = 10, 28, 8/3
N = 1000000
h = (tmax - tmin) / float(N)

def f(X, t):
    x, y, z = X[0], X[1], X[2]
    return [sigma*(y-x), x*(rho-z)-y, x*y-beta*z]

t    = np.arange(tmin, tmax, h)
sol  = integrate.odeint(f, [x0, y0, z0], t)
x    = sol[:,0]
y    = sol[:,1]
z    = sol[:,2]

# Call the plot function if you want to plot the data
def plot():
    fig = plt.figure(1)
    ax = fig.add_subplot(111, projection='3d')
    ax.plot_wireframe(x, y, z, rstride=10, cstride=10)
    ax.set_xlabel('x(t)')
    ax.set_ylabel('y(t)')
    ax.set_zlabel('z(t)')
    plt.show()

plot()
~~~
