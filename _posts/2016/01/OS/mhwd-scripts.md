#### Manjaro Hardware Detection Scripts
Here are some example Bash scripts for simplifying the use of `mhwd`:

~~~ bash
# Install new kernel. Example use: `kernel 43` should install the 4.3 series kernel
function kernel {
  sudo mhwd-kernel -i linux$@
}
~~~
