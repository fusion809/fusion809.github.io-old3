### MATLAB
{% include Links/image.html image="IDEs/GNU-Octave-4.0.0-Menda-Theme.png" float="none" width="1130px" description="GNU Octave 4.0.0 running under Xfce on Sabayon." %}
**MATLAB** is a proprietary programming language that is primarily intended for numerical computations and scientific computing, with scripting-compatability. MATLAB is also the name of an
[integrated development environment](https://en.wikipedia.org/wiki/Integrated_development_environment) (IDE) for the MATLAB
programming language. While MATLAB itself is proprietary, there are several free clones of MATLAB (including both a programming
language and an IDE) available that are licensed under FOSS Licenses like the GNU GPL. These free clones include {% include Links/links.html program="FreeMat" package="sci-mathematics/freemat" wp="FreeMat" link="http://freemat.sourceforge.net/" %} and {% include Links/links.html program="GNU Octave" package="sci-mathematics/octave" category="g-octave" wp="GNU Octave" puncr="," format="n" link="http://www.gnu.org/software/octave/" coverlay_url="https://github.com/rafaelmartins/octave-overlay/tree/master/g-octave" coverlay="octave" %} another free programming language/IDE duo that is similar to MATLAB, but not necessarily a clone is {% include Links/links.html program="Scilab" package="sci-mathematics/scilab" wp="Scilab" link="http://www.scilab.org/" poverlay="science" poverlay_url="https://gitweb.gentoo.org/proj/sci.git/tree/sci-mathematics/scilab" puncr="," %} which while similar to MATLAB has several key differences too. Most tests have found that MATLAB and its clones/related programming languages are fairly slow compared to lower-level and less purpose-specific programming languages like C and Python. MATLAB is the most popular numerically-oriented programming language, according to [TIOBE][1], although because of GNU Octave's similarity (so much similarity that it even uses the same file extension for its scripts &mdash; `.m`) to MATLAB it is possible that TIOBE could not distinguish the popularity of GNU Octave from that of MATLAB. MATLAB/GNU Octave are probably the programming languages I have the second-greatest experience with, after Bash.

Both MATLAB and GNU Octave are themselves implemented in C, C++, Fortran and to a lesser extent other programming languages, with C making up the majority for GNU Octave (at 44.7% according to GitHub), C++ being a close second at 32.1% and Fortran making up 4.6% of the source code.[^3] GNU Octave provides its own graphical IDE too, for version 3.8.x up (e.g. 3.8.0). In fact, since version 4.0.0, the graphical IDE is the default user interface of GNU Octave.

Below is an example pair of scripts I have written in it, for the purpose of plotting a Lorenz attractor. Note, in order to execute these yourself, you need to have GNU Octave (because of the use of the `lsode` function in the second of these two scripts, it is not compatible with MATLAB) installed and these two m files need to be stored in the SAME directory.

~~~ matlab
function dy = lorenz(y,t)
dy = zeros(3,1);
P = 10;
r = 28;
b = 8/3;
dy(1) = P*(y(2) - y(1));
dy(2) = -y(1)*y(3) + r*y(1) - y(2);
dy(3) = y(1)*y(2) - b*y(3);
~~~

~~~ matlab
clear all
t = linspace(0,350,100001);
lsode_options("relative tolerance", 1e-15);
y = lsode("lorenz",[ 1.0; 1.0; 1.0]',t);

figure(1)

subplot(221)
plot(y(:,1),y(:,2),'-');
xlabel('x(t)','FontSize',16);
ylabel('y(t)','FontSize',16);

subplot(222)
plot(y(:,1),y(:,3),'-');
xlabel('x(t)','FontSize',16);
ylabel('z(t)','FontSize',16);

subplot(223)
plot(y(:,2),y(:,3),'-');
xlabel('y(t)','FontSize',16);
ylabel('z(t)','FontSize',16);
~~~

If you want to see some extra scripts I have written see [this repository](https://github.com/fusion809/GNU_Octave).
