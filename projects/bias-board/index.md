---
layout: post.liquid
title: Capsule Bias Provider Board
date: 2026-01-28
summary: 'Designing a voltage-multiplier board to supply bias for true-condenser microphone capsules.'
tags: projects, electronics
hero: img/hero.png
heroAlt: 'String of images left to right displaying stages from schematic to finished circuit board.'
thumbnail: img/thumbnail.png
---

Electret condenser capsules like the TSB-2555 have internal electronics that supply a bias voltage. True condenser capsules on the other hand need an external source, which is what this project is about. 

## The Circuit

The phantom-powered impedance converter board supplies a steady and clean 12VDC via the circuits virtual ground. We're going to take those 12V to power a classic ￼￼cockroft-walton charge pump￼￼￼￼￼￼￼￼￼ and push that to a theoretical 84V. I say theoretical for a reason - because every tiny loss gets multiplied over several stages, charge pumps are very susceptible to leakage currents and parasitic capacitance. So the actual output voltage will be probably around 80V.

## How it works

A CW ladder generates a high voltage by using alternating current combined with a bunch of diodes and capacitors to multiply an input voltage. We get that alternating current by building a little oscillator with an inverter-chip, a 1nF cap, and a 10k resistor. Those values are largely arbitrary - We just want to sit comfortably above the hearing range, but not touch the frequencies so high that we have to deal with all the RF problems. 
We use this oscillating voltage to feed our ladder of capacitors, inverters, and diodes. Voltage multiplication is achieved by charging the first capacitor in series with the input voltage, then switching its output in parallel with the input voltage to double it. This then charges the capacitor of the next stage to 24V, on the next cycle that again gets switched to parallel with the input, charging the next stage's capacitor to 36V. With each stage and each clock cycle, we add another 12 volts to the output. You can find several excellent animated visualizations of this by searching for "charge pump" on youtube.
￼￼￼Making it configurable
Traditionally, microphone manufacturers have used anything between 50 and 100V for capsule bias. The problem here is that I haven't chosen a capsule for my build yet, and anyway that choice might be dictated by budget and availability constraints. So I have no idea whether 80V is a good choice or not, and there's no way to find out unless I go and source a capsule right now.

There is a saying that Adam Savage once mentioned, and which has since become somewhat of a key principle to my engineering approach: "If you can't make it fit, make it adjustable." In a classic CW ladder, the final rung of the ladder feeds the output node. But we can introduce some options here by adding some solder-jumper pads to create a way to flexibly connect earlier nodes instead for a lower voltage. Cut the default jumper with an exact knife and connect some others with a blob of solder, and we have post-production configuration options. Those are fully reversible, too. This not just potentially saves me time on having to go through several iterations of the design just to find the best value for my capsule, it also makes the circuit generally more useful for a wider range of applications, which is always nice especially for shared designs like this.

## The Board Design

I want this circuit to fit inside a BM800-style microphone body - so that determines the boards size and form. It also needs to manage noise well, and use readily available components. I'm going with surface mount components because I've always wanted to try my hand in SMD soldering and this is a good opportunity to try that. Because I will solder these by hand, I won't be picking anything smaller than a 0805 footprint, and where possible use the larger 1206.
