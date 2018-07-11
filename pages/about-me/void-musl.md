I had serious runit issues and many of the more important daemons would not start including:

* cgmanager
* DBus
* LightDM
* NetworkManager

even though I set up the symlinks properly, even the {% include Links/irc.html channel="#voidlinux" %} Freenode group seemed to agree I did everything right, it is just for some reason some supervise files in {% include Layouts/path.html path="/run/runit" %} did not exist. I did like the fast boot times, though, and fast package management times.

I also had to install it from the minimal ISO (musl) as the Cinnamon ISO (musl) had the Cinnamon DE crash repeatedly on me. A dialog box kept asking me whether I wanted to restart it and I did so about four times before I said, "To ... with this!"

I gave it another go though and everything went fine and dandy. I met the consequences of using the musl C standard library, namely that several characters are not rendered properly due to poor locale support. I think the problem the first time I installed it was that I was doing some package management stuff like installing NetworkManager and LightDM from a chroot so some of the symlinks were set up improperly. In retrospect I should have looked at [this article](https://wiki.voidlinux.eu/Installing_alongside_Arch_Linux#Install_Void_from_Arch)) on the Void Wiki.


