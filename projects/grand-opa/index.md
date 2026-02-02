---
layout: base.liquid
title: Grand-OPA
date: 2026-02-02
summary: 'Creating my own version of the legendary OPA Alice circuit.'
tags: projects, electronics
---

# The Grand-OPA circuit

I have Jules Ryckenbusch, a.k.a DJJules, to thank for getting started on my audio journey. When I first looked for a "proper" microphone and realized just how expensive these were, [his Instructable](https://www.instructables.com/OPA-Based-Alice-Microphones-a-Cardioid-and-a-Figur/) on how to build your own "Alice" microphone was what got me started. Over the years I built several of these mics, gifted some to my musically inclined friends, and am still using them myself. For budget-constrained youthful me, this opened up a world I would otherwise not have been able to access. For under 50€ worth of materials, this design allows you to build a microphone that punches *way* above its weight class.

It's also a super interesting case study in electrical design. Jules' "OPA" idea was driven by the waning availability of FETs, a central component to a lot of classic microphone circuits. As those grow ever more expensive and harder to source, he wanted an alternative based on cheap, modern components. What he landed on is a design based on dual Op-Amps (hence the OPA name). Parts which are widely available in modern packages and in low quantities, draw little power, and cost about 1€ per chip.

## Can I improve this?

First of all, let me clearly state that Jules' circuit doesn't need improvement. It sounds amazing as it is, and is easy to build for anyone willing to watch a 5-min  [tutorial on how to solder](), and who can follow simple instructions. That said, it does include decisions made based on preferences I don't share. For one, Jules doesn't really seem to like the surface-mount (SMD) format. His design is based entirely on through-hole components except for the op-amp chip - In the [build video]() he grudgingly admits that these aren't all that difficult to solder by hand, but he clearly prefers "classic" through-hole parts. 

Personally, I *much* prefer SMD. I don't really find through-hole components any more easy to handle as long as you stay at or above the 0805 package size, and through-hole stuff just requires so much more processing. Pre-bending the legs to populate the board, flipping it over and soldering from the underside (which of course can cause components to fall out), the post-processing of having th snip off the leads (producing sharp edges), and having to clean the board from both sides rather than just one. Cleaning is more difficult, too, since flux residue underneath or in between components can be a real pain to remove.

So, I'm definitely going to use SMD. This also gets us another important advantage: Resistor-Networks.

## Resistance-Matching and the Network Advantage

Analog audio gear usually uses a "balanced" connection. It is called that for a reason: XLR-cables have a hot, a cold, and shield/ground connection. A lot of the circuitry is largely mirrored: You have identical sets of components for the cold and the hot line, both referenced to the same ground connection. Now if you have a resistor on each of these signal lines, and those don't exactly match in value, this can create an imbalance that can cause audible noise in the recording.

One solution to this is to measure each resistor in your bin and use manually matched pairs. If right now you thought that this sounds like a major pain, you are certainly not alone. Another solution is to just throw money at the problem and buy resistors with very low value-tolerances, which of course are more expensive.

The third and most interesting solution are resistor networks. These are sets of multiple resistors in the same physical package. Being made from the same substrate, in the same production line, means that these track very closely. So even if the overall tolerance of the part is 5%, the difference between two resistors in the same network is often >0.1%. This is perfect for us, since we only want values to be close to each other, and don't really care if they are above and below the designated value. In other words: If the sheet calls for a pair of 47kOhm resistors, I don't really care if they are both 49kOhm or both 45kOhm - I just don't want 49k on one side and 45 on the other. So with resistor networks, I can go with a lower tolerance class and still profit from the extremely good tracking that is just a natural result of the production process.

Unfortunately in the world of through-hole components these, like FETs, are about to go the way of the Dodo. Not really produced in large quantities anymore, they are becoming harder and harder to find. But in the shiny world of SMD, these are still widely available and very cheap.


