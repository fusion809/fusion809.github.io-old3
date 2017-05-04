{% capture ratings %}
### Ratings

* **Beginner-friendliness**: {{ include.bf }}{{ include.BF }}{{ include.beginner-friendliness }}
* **Customizability**: {{ include.customizability }}{{ include.custom }}{{ include.cmb }}{{ include.CMB }}
* **Documentation**: {{ include.doc }}{{ include.docs }}{{ include.DOCS }}{{ include.DOC }}{{ include.documentation }}{{ include.docqual }}
* **Free support**: {{ include.support }}{{ include.sup }}{{ include.SUP }}
* **Out-of-the-box**: {{ include.ob }}{{ include.OB }}{{ include.out-of-the-box }}
* **Package management**: {{ include.pm }}{{ include.PM }}
* **Performance/<abbr title="System Resource Usage">SRU</abbr>**: {{ include.sru }}{{ include.SRU }}{{ include.performance }}
* **Stability**: {{ include.stability }}{{ include.sb }}{{ include.SB }}
* **<abbr title="My Experience With It (MEWI), a numerical estimate as to how much experience I have with this system">MEWI</abbr>**: {{ include.MEWI }}{{ include.mewi }}
* **Overall**: {{ include.overall }}{{ include.oa }}{{ include.OA }}
{% endcapture %}{{ ratings | markdownify }}
