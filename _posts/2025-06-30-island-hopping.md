---
layout: post
title: "Island Hopping to the Objective"
date: 2025-06-30
categories: jekyll update
image: /images/posts/jun25/marines.jpg
image1: /images/posts/jun25/spotrate.png
image2: /images/posts/jun25/price_yield1.png
image3: /images/posts/jun25/price_yield2.png
image4: /images/posts/jun25/yieldorder.png
image5: /images/posts/jun25/yield_evol.png
image6: /images/posts/jun25/nr1.png
image7: /images/posts/jun25/nr2.png
image8: /images/posts/jun25/guadalcanal.jpg
---

Tarawa.  They told us we'd land right on the beach...  Said the tide would carry the boats over the reef... But the water stopped too soon-just short of safety-and left us exposed.  The landing craft stopped abruptly, shoving us uncontrollably into each other.  A memory of packing into the NY subway at Chambers every morning before the war slid into focus for a moment before the heat set in.  When traveling toward the beach at 10 knots the breeze had lulled us into a pensive state where all you could hear was the LCVP's drone and the rumble of distant shelling.  Now there was just heat in the still air.  Heat and noise.  

The ramp dropped, and the world exploded into sound: machine guns barking from the bunkers, mortar shells whistling overhead, the sharp snap of rounds cracking through  the air like breaking sticks.  Men started yelling - some from pain, some just to be heard over the chaos.  The sergeant shouted "Over the side!  Move!"

It's moments like this when your body becomes a sack of potatoes, weighed down with equipment and ammunition.  I hit the water hard, boots sinking instantly into the reef.  It was waist-deep, then chest-deep.  My rifle was slung across my back, useless now.  My pack dragged behind me like a sandbag tied to my spine.  I was trying to keep my helmet steady, but the saltwater was in my eyes, my mouth and ears.  To this day that saltwater is in my throat.  I couldn't hear anything clearly - just noises through saltwater ears and a pounding heartbeat.

When you find yourself in such a pickle, you wade.  You don't run, you can't.  Every step is like progressing through cement.  My thighs were burning and my shoulders felt like they were being ripped from their sockets.  Bullets kicked up in the water in front of us as rain on concrete.  Jimmy pitched forward face-first.  He never surfaced.  Just vanished into the red tide.  There was no cover.  No rocks, no logs...  Just open water and flat beach 500 yards ahead.  

My legs started to shake - not from fear, that had passed.  Rather, from the effort.  If you've never swum in full gear, you should try it, especially before landing on a hot beach.  My rifle banged against my back like a dead weight.  My canteen dug into my side.  The bullet it caught exchanged my clean water for salt, which I only realized later that day.  "Better it than my hip" was little comfort then when my thirst felt like death...  I thought about dropping my pack just to move faster.  But that would have meant stopping.

The closer we got, the louder everything became.  The sand was packed hard and streaked with blood.  Guys who'd made it ahead of me were crawling now - elbows in, heads down.  I dropped beside them and tried to breathe.  My lungs felt tight, like they were being squeezed by the heat.  My hands shaking, I blinked hard, trying to clear the salt from my eyes.  I hadn't even fired a shot yet.  There are many memories packed into that moment.  I remember someone screaming for a corpsman.  I remember the metallic taste of fear - like biting down on a coin.  And I remember the smell.  Burned cordite, seawater, and battle - sickly and sour, of burnt flesh and diesel fuel.  All I could think was: Keep moving.  Get to the objective.  Stay low.

### Postcards from the West

To say that defeating Imperial Japan would require creative thinking is at best an understatement.  It is about as useful as stating there are a lot of islands in the Pacific.  Islands with names that to this day most people have never hear of were occupied with Japanese forces dug into defensive positions just waiting for the advancing Americans.  General MacArthur, commanding U.S. Army forces, and Admiral Nimitz, heading up the U.S. Navy, both knew they had neither the time nor the resources to take every Island.  They also knew Japan was unreachable without a secure supply chain and airfields close enough to reach it.  The plan, then, was for the Army and Navy to carry out parallel campaigns to seize key islands and bypass non-critical ones, forging a path toward Tokyo.  The plan, though simple in concept, was never simple in execution.  On the ground, each island took on a life of its own from the perspectives of the marines and soldiers who fought there.  Some landings were hot, meaning the Japanese actively defended the beaches the Americans landed on.  And some were not, concealing deadly battles that would ensue as the Americans tredged inland.  The island hopping strategy, hellish as it was, proved successful in the end.  That is were the metaphore will take us today.  

If my June campaign is successful, then we'll have island hopped our way though a few more topics in the vast world of fixed income with the object of gaining better appreciation for the complexity of this field.  And in a more direct application of the metaphore, we'll explore the elegant and extremely useful **Newton-Raphson** algorithm for calculating bond yields.  


![PV with Spot Rates]({{ page.image1 | relative_url }})

```text
Coupon Rate: 4.5%
Par Value: $1,000.00
Clean Price: 102.25% = $1,022.50
Days since last coupon: 145
Days in coupon period: 182

Accrued Interest: $17.93
Dirty Price: $1,022.50 + $17.93 = $1,040.43
```

```text
Newton-Raphson Method for YTM Calculation (Multiple Initial Guesses)
Bond: 4.75% coupon, 10 years to maturity, trading at $92.5
----------------------------------------------------------------------
Initial guess: 1.00% | Final YTM: 5.7465% | Iterations: 5
Initial guess: 5.00% | Final YTM: 5.7465% | Iterations: 4
Initial guess: 12.00% | Final YTM: 5.7465% | Iterations: 6
```