
NixOS is a fascinating distribution, in principle, but in practice it is a pain in the rear to set up for the first time, especially if you have a Broadcom WiFi chip. One pain with is the bootloader. On 17 November 2017 I set it up to use OS prober via the option:

```nix
boot.loader.grub.useOSProber = true;
```

and it caused GRUB2 to be only set up to boot Gentoo and NixOS properly, Arch Linux's entry in the GRUB2 menu actually booted NixOS, not Arch. Likewise if I use Arch to manage the bootloader it did not recognize NixOS and omitted a NixOS entry in the GRUB2 configuration file. I asked for help on this on Unix & Linux StackExchange [here](https://unix.stackexchange.com/questions/405255/is-it-possible-to-get-arch-linuxs-grub2-to-recognize-and-correctly-boot-nixos).
