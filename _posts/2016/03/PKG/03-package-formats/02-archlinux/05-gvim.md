~~~ bash
# Maintainer: Brenton Horne <brentonhorne77 at gmail dot com>
# Contributor: Peter Mattern <pmattern at arcor dot de>

_pkgname=vim
pkgname="gvim"
pkgver=7.4.1525
pkgrel=1
pkgdesc="Vim the editor. CLI version and GTK2 GUI providing majority of features."
arch=("i686" "x86_64")
url="http://www.vim.org"
license=("custom:vim")
depends=("gtk2" "hicolor-icon-theme" "gtk-update-icon-cache" "desktop-file-utils")
optdepends=("lua: Lua interpreter" "perl: Perl interpreter" "python: Python 3 interpreter"
            "python2: Python 2 interpreter" "ruby: Ruby interpreter")
makedepends=("lua" "python" "python2" "ruby")
provides=("gvim" "xxd" "vim-runtime")
conflicts=("vim-minimal-git" "vim-git"
           "vim-minimal" "vim" "vim-python3" "gvim" "gvim-python3")
source=("https://github.com/vim/vim/archive/v$pkgver.tar.gz"
        "gvim.desktop")
sha256sums=('SKIP'
            'c346da4725b2db6f7b58c5b72bdf9e7efbba2a3275e97c17db48689e4de674ca')
install=gvim.install

prepare() {

    # set global configuration files to /etc/[g]vimrc
    sed -i 's|^.*\(#define SYS_.*VIMRC_FILE.*"\) .*$|\1|' ${srcdir}/${_pkgname}-${pkgver}/src/feature.h

}

build() {

    cd "${srcdir}/${_pkgname}-${pkgver}"
    ./configure \
      --enable-fail-if-missing \
      --with-compiledby='Arch Linux AUR' \
      --prefix=/usr \
      --enable-gui=gtk2 \
      --with-features=huge \
      --enable-cscope \
      --enable-multibyte \
      --enable-perlinterp=dynamic \
      --enable-pythoninterp=dynamic \
      --enable-python3interp=dynamic \
      --enable-rubyinterp=dynamic \
      --enable-luainterp=dynamic
    make

}

package() {

    # actual installation
    cd "${srcdir}/${_pkgname}-${pkgver}"
    make DESTDIR=$pkgdir install

    # desktop entry file and corresponding icon
    install -D -m644 ../gvim.desktop      $pkgdir/usr/share/applications/gvim.desktop
    install -D -m644 runtime/vim48x48.png $pkgdir/usr/share/icons/hicolor/48x48/apps/gvim.png

    # remove ex/view and man pages (normally provided by package 'vi' on Arch Linux)
    cd $pkgdir/usr/bin ; rm ex view
    find $pkgdir/usr/share/man -type d -name 'man1' 2>/dev/null | \
      while read _mandir; do
        cd ${_mandir}
        rm -f ex.1 view.1
      done

    # add license
    install -D -m644 ${srcdir}/${_pkgname}-${pkgver}/runtime/doc/uganda.txt \
      $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
~~~
