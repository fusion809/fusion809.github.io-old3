{% capture mycapture %}
## Handling Errors
If this returns errors then my guess is that your `Gemfile` and `_config.yml` files, which should both be in the top-level directory of your Jekyll site, are incorrectly written or you have made some syntactic error in the Liquid tags on your website. Including Liquid tags that are not defined is known to return errors like:
{% include Code/gist.html id="d6e9ab458439c86ffc37" %}
where in this example, `'last_modified_at'` is the name of the undefined tag in this case and `_posts/2015-11-26-bash-scripting-and-the-command-line-an-introduction-for-sabayon-users.md/#excerpt` is where the undefined tag is included in the website. Likewise if Liquid tags (like <code>&#123;&#37; include &#37;&#125;</code>) are not properly ended (in this example they may not be correctly ended with a <code>&#37;&#125;</code>, giving <code>&#123;&#37; include &#125;</code>) it can return errors like:
{% include Code/gist.html id="4258ee4ad2495ad5c62c" %}
. While if you include a file that does not exist you will get this error:
{% include Code/gist.html id="6e73a98b03d0cdcf530b" %}
where <code>&#123;&#37; include_relative SS/table2-builtins.html &#37;&#125;</code> appeared in the `_post/SS/syntax.md`, which in turn was included (by use of the line <code>&#123;&#37; include_relative SS/syntax.md &#37;&#125;</code> in `_posts/2016-01-30-shell-scripting-and-the-command-line-an-introduction.md` and the error shown is because the file `_post/SS/table2-builtins.html` does not exist.
{% endcapture %}{{ mycapture | markdownify }}
