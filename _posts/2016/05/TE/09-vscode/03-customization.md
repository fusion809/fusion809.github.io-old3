### Customization
VSCode can be extensively customized using plugins written in CSS, JavaScript and TypeScript. Unfortunately, VSCode does not have support for an embedded terminal or web browser, regardless of any installed extensions. Plugins are search for and installed via opening the command pallette (with the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>) and typing `ext install`, then pressing <kbd>Enter</kbd>. Users can also customize VSCode's behaviour by editing the user's settings by going to <code>File&rarr;Preferences&rarr;User Settings</code> and editing one's `~/.config/Code/User/settings.json` file. For example, here's a settings.json file to get VSCode to syntax-highlight `.desktop`, `.directory`, `.install` and `PKGBUILD` files:

<div class="language-json highlighter-rouge"><pre class="highlight"><span class="p">{</span><span class="w">
    </span><span class="nt">"files.associations"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
        </span><span class="nt">"PKGBUILD"</span><span class="p">:</span><span class="w">    </span><span class="s2">"shellscript"</span><span class="p">,</span><span class="w">
        </span><span class="nt">"&#42;.install"</span><span class="p">:</span><span class="w">   </span><span class="s2">"shellscript"</span><span class="p">,</span><span class="w">
        </span><span class="nt">"&#42;.desktop"</span><span class="p">:</span><span class="w">   </span><span class="s2">"ini"</span><span class="p">,</span><span class="w">
        </span><span class="nt">"&#42;.directory"</span><span class="p">:</span><span class="w"> </span><span class="s2">"ini"</span><span class="w">
    </span><span class="p">}</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></pre></div>
