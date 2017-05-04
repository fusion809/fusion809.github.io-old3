---
layout:        post
title:         "A Comparison of Programming Languages"
date:          2016-01-07 +1000
comments:      true
id:            "programming-languages"
categories:    comparisons, programming-languages
permalink:     /comparison-of-programming-languages/
redirect_from:
      - /2016/01/08/comparison-of-programming-languages/
---

**Programming languages** are the most important tools of any software developer or computer programmer, without them software development and computer programming, as it we know it, would not be possible. This post started out as a section of the glossary of the [*A Comparison of Free Operating Systems*](/comparison-of-free-operating-systems/) post, but I have decided to make it a whole new post. I should mention, however, that my programming knowledge is in its infancy (mostly limited to some Bash, MATLAB/GNU Octave and Python knowledge), so much of this post is based on external resources that I have read and digested into a (hopefully) coherent blog post.

{% include_relative classification.md %}

{% include_relative details-on-specific-languages.md %}

{% if post.comments %}

<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
        var d = document, s = d.createElement('script');

        s.src = '//EXAMPLE.disqus.com/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% endif %}

{% include_relative table1-comparison-of-common-programming-languages.html %}
