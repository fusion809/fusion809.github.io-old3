## Games deliberately not included
Certain games were excluded from this post deliberately, they include:

* BSD games, excluded mostly because the only individual BSD game I was really interested in was Hangman, but then I found out that KDE has its own graphical hangman game so I decided to cover it instead.
* ManaPlus, which I excluded as it serves as a client for more than one game (The Mana World, Evol Online) which adds complexity to things and makes package details more difficult. 
* netPanzer, a free and open-source strategy tank game. Excluded as running it on Gentoo was a pain, I could not seem to connect to any server as one server timed out and the other servers said the protocol was too new (after all Gentoo only has the outdated 0.8.2 release of netPanzer in their official repositories, even though 0.8.7 is out). When I clicked a server and clicked "Next" I was brought to a waiting screen that never changed, [this](https://fusion809.github.io/images/Games/netPanzer-next-screen.png) is it. The screenshot below shows the screen I was shown, when looking for a server to connect to.
{% include Layouts/clear.html %}
![](https://fusion809.github.io/images/Games/netPanzer-server-issue.png)
* [Tremulous](http://tremulous.net/), an open-source 3D first-person shooter game. Excluded as installing it on my Gentoo system returned the download error:

```bash
>>> Emerging (1 of 1) games-fps/tremulous-1.1.0-r4::games-overlay
>>> Downloading 'http://ftp.swin.edu.au/gentoo/distfiles/tremulous-gentoopatches-1.1.0-r5.zip'
--2017-05-01 00:31:53--  http://ftp.swin.edu.au/gentoo/distfiles/tremulous-gentoopatches-1.1.0-r5.zip
Resolving ftp.swin.edu.au... 2001:388:6080:64::dc41:1cf, 136.186.1.76
Connecting to ftp.swin.edu.au|2001:388:6080:64::dc41:1cf|:80... connected.
HTTP request sent, awaiting response... 404 Not Found
2017-05-01 00:31:53 ERROR 404: Not Found.

>>> Downloading 'http://dl.trem-servers.com/tremulous-gentoopatches-1.1.0-r5.zip'
--2017-05-01 00:31:53--  http://dl.trem-servers.com/tremulous-gentoopatches-1.1.0-r5.zip
Resolving dl.trem-servers.com... failed: Name or service not known.
wget: unable to resolve host address ‘dl.trem-servers.com’
!!! Couldn't download 'tremulous-gentoopatches-1.1.0-r5.zip'. Aborting.
 * Fetch failed for 'games-fps/tremulous-1.1.0-r4', Log file:
 *  '/var/tmp/portage/games-fps/tremulous-1.1.0-r4/temp/build.log'

>>> Failed to emerge games-fps/tremulous-1.1.0-r4, Log file:

>>>  '/var/tmp/portage/games-fps/tremulous-1.1.0-r4/temp/build.log'

 * Messages for package games-fps/tremulous-1.1.0-r4:

 * Fetch failed for 'games-fps/tremulous-1.1.0-r4', Log file:
 *  '/var/tmp/portage/games-fps/tremulous-1.1.0-r4/temp/build.log'
```

despite my internet working perfectly, and yes this bug has been [reported](https://github.com/hasufell/games-overlay/issues/68). 
