## Shell Script Syntax
The standard Unix shell syntax has several distinct components, which can be classed as [keywords and special characters](#keywords-and-special-characters), [external commands](#unix-commands), [builtins](#builtins), [variables](#variables), [functions](#functions), [loops](#loops), [selectors](#selectors), [tests](#tests) and [conditionals](#conditionals). Many of these are shared by other Unix shells.

### Unix Commands
**Table 1** lists some basic Unix commands that are provided by the GNU Core Utilities package. Not all are listed, as I do not even understand them all.
{% include_relative table1-unix-commands.html %}
<br/>

### Builtins
Several Bash commands (or **builtins**) exist and some (but by no stretch of the imagination all &mdash; I do not even understand them all!) basic ones are explained in **Table 2**. It is worthwhile noting that all these commands are purely Bash commands, by this I mean, they do not call any command-line programs to do their work for them. See many commands you will see in Bash scripts are not Bash commands, *per se*, rather they are commands that use another command-line program such as `mv` or `pwd` to do the work, but they can be run from within Bash.
{% include_relative table2-builtins.html %}
<br/>

### Conditionals
In Bash scripts **conditionals** use the output of a test and perform an action accordingly. Conditionals usually involve at least one of the following keywords: `case`, `if`, `else`, `elseif` and `fi`.

### Functions
**Functions** are essentially convenient ways we can group pieces of code together, so as to give them order and make them more logical. Quite often functions are designed to take input and use it to generate an output, or to perform a task, although some functions require no input. All Bash functions share two main things in common: the use of the word "function" and the fact the function's contents are contained within curly braces `{...}`.

### Keywords and Special Characters
**Keywords and special characters** (**KSCs**) are an important concept to understand, they are words, or symbols, that have a special, set meaning when scripting in Bash. Examples are listed in **Table 3**.
{% include_relative table3-keywords-sc.html %}
`until`, `while` and `time` are some other keywords that are not mentioned there, as I do not know enough about them to really comment on them. Keywords can be used as variables but I would not advise this, as this can quite easily become confusing.

### Loops
**Loops** (which involve the `for` keyword), in Bash scripts, are used to automate the performing of tedious tasks that are sufficiently similar to one another.

### Selectors
**Selectors** (marked by the `select` keyword) gives users choices as to which input(s) the rest of the selector block uses.

### Tests
**Tests** are essential for conditionals. As their name suggests, they test to see whether or not a condition is satisfied. If the condition is satisfied they return 0, while if the condition is unsatisfied they return 1. Square brackets (which are a builtin, by-the-way), `[...]`, are used for tests, although double square brackets (`[[...]]`) can also be used for this purpose since Bash 2.02. The difference, from what I can tell, between single and double square brackets is that double square brackets allow one to perform more advanced tests than single square brackets. Single square brackets are also POSIX compliant and are found on almost all Unix shells. Zsh, however, only allows double square bracket tests.[^5]

### Variables
Bash **variables** are defined using equal signs. They can be made global (making them available for all processes) or local (making them available just for the script at hand). Local variables are defined by just using an equal sign, for example:
{% include Code/codeu.html line1="PYTHONPATH=/usr/bin/python" %}
while to define this variable globally, one would run:
{% include Code/codeu.html line1="export PYTHONPATH=/usr/bin/python" %}
