<!--
cpu
hdd
ims
ram
-->
<h4>Minimum Requirements</h4>

* **<abbr title="Central Processing Unit">CPU</abbr>**: {{ include.CPU }}{{ include.cpu }}
* **<abbr title="Minimum Hard Disk Drive (HDD) space required to install this system">HDD</abbr>**: {{ include.HDD }}{{ include.hdd }}
* **<abbr title="Minimum Installation Medium Size (IMS) for the latest release of this system">IMS</abbr>**: {{ include.IMS }}{{ include.ims }}
* **<abbr title="Minimum Random Access Memory (RAM) required to use this system">RAM</abbr>**: {{ include.ram }}{{ include.RAM }}
{% if include.extra %}* **Extra**: {{ include.extra }}{% endif %}
