---
title: GRUB ASCII Art - For Fedora
date: 2024-03-17
tags: ["linux", "note"]
---

The other day I stumbled across [this post](https://www.reddit.com/r/unixporn/comments/13iukcn/grub_ascii_art_on_grub_bootloader/) about customising the GRUB bootloader to display ASCII art. Among the comments was [Nx2's tutorial](https://nx2.site/grub-ascii-theme) on how to do this. The steps listed unfortunately don't quite work for Fedora. Fedora uses GRUB2 instead of GRUB so `update-grub` doesn't work. 

In order to get this to work on Fedora, I needed to:
1. Comment out the `GRUB_TERMINAL_OUTPUT="console"` in addition to adding the `GRUB_THEME` variable with a path to the theme file as Nx2 does.
2. Run `grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg` in order to update GRUB2 instead of `grub-update`.
