{% assign namesplit = include.name | split:' ' %}
{{ include.puncl }}[**{{ include.name }}**](https://en.wikipedia.org/wiki/{% for namepart in namesplit %}{{ namepart }}{% unless forloop.last %}_{% endunless %}{% endfor %}{% if include.cat %}_({{ include.cat }}){% endif %}){{ include.puncr }}
