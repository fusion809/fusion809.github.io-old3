### Specifications

* **Architecture support**: {{ include.arch }}{{ include.ARCH }}{{ include.architecture }}
* **Country of origin**: {{ include.country }}{{ include.origin }}
* **Date of establishment**: {{ include.date }}{{ include.DATE }}
* **Default Unix shell**: {% if include.shell %}{{ include.shell }}{% elsif include.SHELL %}{{ include.SHELL }}{% else %}Bash.{% endif %}
* **Default user interface(s)**: {{ include.desktop }}{{ include.de }}{{ include.DE }}{{ include.ui }}{{ include.UI }}{% if include.base %}
* **Derived from**: {{ include.base }}{% endif %}
* **Installation method**: {{ include.installation }}{{ include.im }}{{ include.IM }}
* **OS type**: {% if include.type %}{{ include.type }}{% elsif include.TYPE %}{{ include.TYPE }}{% else %}Linux.{% endif %}
* **Package manager(s)**: {{ include.pm }}{{ include.PM }}{{ include.PMS }}{{ include.pms }}
* **Release model(s)**: {{ include.rm }}{{ include.RM }}{{ include.model }}
* **Target market**: {{ include.tm }}{{ include.TM }}{{ include.market }}
