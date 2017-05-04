{% capture my_content %}
<div class="note-title">NOTE</div>
* *{{ include.note1 }}*
{% if include.note2 %}
* *{{ include.note2 }}*
{% if include.note3 %}
* *{{ include.note3 }}*
{% if include.note4 %}
* *{{ include.note4 }}*
{% if include.note5 %}
* *{{ include.note5 }}*
{% if include.note6 %}
* *{{ include.note6 }}*
{% if include.note7 %}
* *{{ include.note7 }}*
{% if include.note8 %}
* *{{ include.note8 }}*
{% if include.note9 %}
* *{{ include.note9 }}*
{% if include.note10 %}
* *{{ include.note10 }}*
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endif %}
{% endcapture %}
<div class="note">
{{ my_content | markdownify }}
</div>
