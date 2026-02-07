---
layout: post.liquid
title: Phantom Power Blocker
date: 2026-01-29
summary: 'A little exercise in designing a small utility product: An in-line XLR unit that protects dynamic microphones by blocking phantom power.'
tags: projects, electronics
hero: img/hero.png
heroAlt: 'Image of a CAD-model of a tubular enclosure next to the layout of a circuit board.'
thumbnail: img/schematic.png
---

(NOTE: This project is ongoing, the write-up will be continually expanded)

This project is unusual for me in that it is not based on something I need. Instead, I just wanted to try designing a simple utility product, and see if I could go from zero to ready-to-order prototype stage in a single week. 

## The Use Case

Phantom power is a low-current 48V connection present in a lot of audio gear. Generally most audio interfaces (at least those below the studio-level pro gear) switch phantom power on or off globally, lacking per-channel differentiation. This can be problematic if you want to connect particularly sensitive gear like a ribbon mic, which can suffer serious damage when accidentally plugged into a phantom-powered socket.

Blocking phantom power can be done with a very simple circuit that just drops two capacitors into the XLR 2 and 3 lines, while patching XLR 1 (shield) straight through. We include two 47k resistors to ground on the microphone side to tie the signal to a stable reference. On the "mixer" side we include two high-value bleeder resistors to discharge remaining voltage for when the cable is disconnected.


