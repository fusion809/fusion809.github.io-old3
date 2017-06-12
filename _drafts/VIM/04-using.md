## Using Vim
In this section I will fairly overview the basics of how to use Vim and the important background on Vim's usage. I recommend if you wish to learn more about using Vim you use [*The Vim Wiki*](http://vim.wikia.com/wiki/Vim_Tips_Wiki). It is important to note that Vim is a modal text editor and know what this means. Modal editors like Vim have five different modes:

* Command mode (acronym: cmdm). In this mode you can issue commands, search files for strings, search and replace strings in files, <i>etc.</i> From this mode you can more easily enter all other modes. From insert mode you need to first exit (by pressing <kbd>Esc</kbd>) into cmdm and then you can enter the other modes by pressing further keys. 
* Insert mode. In this mode you can edit files. By default what you type is "inserted" into the opened, selected file. Press `i` to enter insert mode from cmdm.
* Normal mode. This is for issuing basic commands, must admit I do not see what distinguishes it from cmdm. 
* Search mode. In this mode you can search files for strings. You enter this mode by pressing `/` or `?` from cmdm. 
* Visual mode. In this mode one can select text from files. To enter this mode press `v` or `V` (`shift+v`) from cmdm. 

The most important commands one can issue from Vim, include:

* `:!`: whatever comes after this command will be executed as a shell command. Note, however, your shell profile (in your `/etc/profile`, `~/.bashrc`, `~/.bash_profile`, *etc.*) is not loaded in the shell the command is executed in. Therefore any functions defined in your shell profile will not be available for you to call. 
* `:cl`: list errors. 
* `:close`: close a file. 
* `:e`: open a file. 
* `:enew`: new file. 
* `:q`: exit without saving. 
* `:make`: run make from within the directory Vim is opened to, or was started from. For example, if one ran `vim` from `~/` and then ran `:make` it will be equivalent to running `make` in a terminal opened to `~/`. It is the equivalent to running `:!make`. 
* `:sav`: save file as whatever argument is given after it. For example, running `:save foo` will save the presently opened and selected file as `foo`. 
* `:sp`: split open a file. 
* `:tabnew`: open new tab. 
* `:w`: save file.
* `:x`: close and save.
* `"+x`: cut selected text.
* `"+y`: copy selected text. 
* `"+gP`: paste text in the clipboard. 
* `ggVG`: select all text in present file or buffer. 
* `u`: undo the last command.
* <kbd>Ctrl</kbd>+<kbd>R</kbd> (shown as such instead of as code because writing `CtrlR` might be difficult to read, perhaps making some look for a CtrlR key. Likewise `Ctrl+R` might look like I mean press <kbd>Ctrl</kbd> then <kbd>+</kbd> and lastly <kbd>R</kbd>): redo (undo the last undo) 

Adding an `a` to the end of the `:q`, `:w` and `:x`, applies the actions to all opened files. Likewise adding `!` to the end of `:q`, `:w` and `:x`, even after an end `a` applies these actions despite warnings. 
