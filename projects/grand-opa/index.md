---
layout: post.liquid
title: Grand-OPA
date: 2026-02-02
summary: 'Designing my own version of a microphone head amplifier inspired by public designs of an OP-AMP-based unity gain impedance converter.'
tags: projects, electronics
---

When I first looked for a "proper" microphone and realized just how expensive these were, I immediately started looking for open-source DIY-designs. One of the most popular ones I found is the "Alice" conversion, which takes a cheap BM800-style microphone as a donor body, and replaces the internals with a 24mm Electret capsule and custom electronics. I don't know who the original inventor of the circuit behind this is - there are several very similar designs floating around - but this [Instructable](https://www.instructables.com/OPA-Based-Alice-Microphones-a-Cardioid-and-a-Figur/) by Jules Ryckenbusch was the first I found when I started looking. Over the years I built several of these mics, gifted some to my musically inclined friends, and am still using them myself. For budget-constrained youthful me, this opened up a world I would otherwise not have been able to access. For under 50€ worth of materials, this design allows you to build a microphone that punches *way* above its weight class and can comfortably keep up with studio mics.

It's also a super interesting case study in electrical design. Apparently driven by the waning availability of the FETs that are a central part of a lot of classic mic builds, this circuit provides an alternative based on cheap, modern components: Op-Amps (hence the OPA name). These are widely available in modern packages and in low quantities, draw little power, and cost about 1€ per chip.

## Can I improve this?

First of all, let me clearly state that 99% of DIY circuits out there don't really need any improvement, and will yield perfectly usable microphones that are easy to build for anyone willing to watch a 5-min  [tutorial on how to solder](), and who can follow simple instructions. That said, each design includes decisions made based on preferences I don't necessarily share. For example, the author of aforementioned instructable I followed to build my first mic seems to harbour a dislike for surface-mount (SMD) components. His design is based entirely on through-hole components except for the op-amp chip - In the [build video]() he grudgingly admits that these aren't all that difficult to solder by hand, but he clearly prefers "classic" through-hole parts. In this example a lot of the components are also placed upright rather than flat on the board, which allows them to easily bend and touch the leads of a neighboring component. It is *really* easy to accidentally short one of these, and I think that's fundamentally poor design.

Personally, I much prefer SMD. I don't really find through-hole components any more easy to handle as long as you stay at or above the 0805 package size, and through-hole stuff just requires so much more processing. Pre-bending the legs to populate the board, flipping it over and soldering from the underside (which of course can cause components to fall move or even fall out), the post-processing of having th snip off the leads (producing sharp edges), and having to clean the board from both sides rather than just one. Cleaning is more difficult, too, since flux residue underneath or in between components can be a real pain to remove.

So, I'm definitely going to use SMD. This also gets us another important advantage: Resistor-Networks.

## Resistance-Matching and the Network Advantage

Analog audio gear usually uses a "balanced" connection. It is called that for a reason: XLR-cables have a hot, a cold, and shield/ground connection. A lot of the circuitry is largely mirrored: You have identical sets of components for the cold and the hot line, both referenced to the same ground connection. Now if you have a resistor on each of these signal lines, and those don't exactly match in value, this can create an imbalance that can cause audible noise in the recording.

One solution to this is to go through the bin, measure each individual resistor, and use manually matched pairs. If right now you thought that this sounds like a major pain, you are certainly not alone. Another solution is to just throw money at the problem and buy resistors with very precise tolerances, but obviously the downside of that is cost and generally increased sourcing-headaches.

The third and most interesting solution are resistor networks. These are sets of multiple resistors in the same physical package. Being made from the same substrate on the same production line, means that these naturally track very closely. So even if the overall tolerance of the part is 5%, the difference between two resistors in the same network is often >0.1%. This is perfect for us, since we only want values to be close to each other, and don't really care if they are above and below the designated value. In other words: If the sheet calls for a pair of 47kOhm resistors, I don't really care if they are both 49kOhm or both 45kOhm - I just don't want 49k on one side and 45 on the other. So with resistor networks, I can go with a lower tolerance class and still profit from the extremely good tracking that is just a natural result of the production process.

Unfortunately in the world of through-hole components these, like FETs, are about to go the way of the Dodo. Not really produced in large quantities anymore, they are becoming harder and harder to find. But in the shiny world of SMD, these are still widely available and very cheap.


