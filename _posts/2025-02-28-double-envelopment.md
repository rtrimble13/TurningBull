---
layout: post
title: "Double Envelopment"
date: 2025-02-28
categories: jekyll update
image: /images/posts/feb25/battle_of_cannae.png
image0: /images/posts/feb25/battle_scene.jpg
image1: /images/posts/feb25/cannae_diagram.png
image_m1: /images/posts/feb25/image_m1.png
image_m2: /images/posts/feb25/image_m2.png
image_m3: /images/posts/feb25/image_m3.png
image_m4: /images/posts/feb25/image_m4.png
---

"So, there I was," you might say to your buddies at the canteen, if you'll humor me on this one.  Telling war stories long after the sun has set and the drinks have risen is one of humanity's staples, afterall.  Yet, you were there, and this story is yours.  You might have been the son of a slave and spent your formative years working the fields for a Roman landowner.  You might have seen your father cut down over a petty dispute when you were twelve.  And you might have lost your mother and sisters to the plague not long after.  None of that would have shielded you from conscription as a Roman foot soldier in support of the consul Paullus during the Second Punic War.  

So, there you were on a sweltering sunny day on the outskirts of Cannae, probably somewhere in the middle front of the formation.  This is where the expendable soldiers typically found themselves.  Nothing personal, you've spent a short life acquiring a deep understanding of what it is to be expendable.  At least that day didn't start with a twenty-five mile foot march or exhausting drill with wooden swords.  Your blisters were lanced and your welts, well, at least you didn't earn new ones that day...  

Around you in tight formation were your family-in-arms.  Boys, mostly, not so different from you in almost every way.  To your your front, across the field, stood Hannibal's horde.  They looked like savages.  Perhaps an illusion, but they didn't even appear to be formed in a straight line.  The center of their formation was bowed, and you could hear your sergeant growl that it was a ploy to make their numbers seem larger.  Numbers matter on open fields, and the odds were squarely against them.  

Upon the order to advance, you began a steady march toward contact.  Your view was limited: not only were you not in the front rank, but the dry earth quickly gave way to plumes of dust that lingered in the windless air.  You could see well enough to conclude that they indeed were savages, though.  Lightly armored and apparently not as disciplined, their concave line started to pull back at first contact.  The Roman line was a machine that knew one direction - *forward*.  As the tempo of battle started to quicken, you saw the face of Death, and it was staring at them.  Their casualties seemed to build, and their apparent response was to fall back.  

As the drone of battle roared to the front your section kept up the tempo, and you hadn't even yet swung your sword.  By now, you started minding your steps so as not to trip over bodies that were alive just a few moments ago.  At this pace, you had to keep moving foward since there was an entire army to your back.  But something caught your attention.  There are new sounds of battle besides those to your front.  You looked to your right.  Fellow Romans in your file were fighting on their flank.  Shifting your gaze to the left showed the same.  The dust had hung like a blanket, but your ears could hear what your eyes could not see.  The tempo had just changed, and the battle was now coming for you from both sides.  It was finally time to use that sword.

![Battle]({{page.image0 | relative_url}})

"During a fight, time loses value.  Seconds feel like minutes, and minutes stand still while Death works at his own pace," you might tell your friends.  But you weren't thinking about that.  You weren't thinking about anything.  You were just reacting to the fight, trying to keep up with the tempo.  All the while, your brothers were slashing and being slashed to your front, sides, and back.  Hannibal had broken your lines, and the only sensible thing to do was begin to fall back.  The face of Death was now looking in your direction.  

"When you no longer control the tempo in a fight, your sense of direction is one of the first things go," you might further explain.  Amid the dust and broken bodies, it was all you could do to assess your bearing based on the direction most of your surviving brothers seemed to be going.  However, you quickly found yourself stuck.  Puzzled, you cursed your fellow Romans to pick up the retreat.  It took just a second, or was it a minute, to discover the reason for the holdup.  Through a momentary break in the dust you caught a glimpse of the area of the field you had marshalled over before the battle.  Where there had been Romans, confident in their numerical superiority, there were now Iberian cavalry racing towards you, blocking any hope for an orderly retreat.  

And, so there you were, with Hannibal's infantry to your front and flanks, and with his cavalry closing in from behind.  Perhaps the only thing you could mutter to yourself was, "Well, I'll be damned..."

### A Lesson In Tempo

![Battle Formation]({{page.image1 | relative_url}})

While Hannibal ultimately lost the Second Punic War, he decicively defeated the Romans at Cannae through a maneurver that became known as a double envelopment.  Whereas an envelopment is a tactical maneuver that consists of attacking an enemy on a flank.  A double envelopement is just more of that, applied to both flanks.  I think, though, that Hannibal's true genious at Cannae was the way in which he lured the Romans into a false sense that they controlled the tempo of the fight.  The concave formation of his front line was deliberately designed to enable the Romans to build forward momentum.  As the Romans pushed foward, that line became convex and allowed the infantry on both sides of the line to pivot inward onto the Roman flanks.  Meanwhile, Hannibal used his cavalry to close in from the rear and prevent a Roman retreat.  The Romans found themselves fighting in every direction, lost their momentum, and were effectively decimated.

### The Market Index

And now for something completely different...  Well, sort of.  I actually believe one can draw an analogy between the Roman experience at Cannae and the influence that a small number of stocks has on the U.S. equities market today.  The **S&P 500**, if you recall from last month, is an index comprised of the largest 500 publicly traded U.S. companies.  It is often seen as a barometer for the equities market.  One of its main features is its free-float market capitalization (market cap) weighting scheme.  Index constituents are selected based on market cap, or the number of shares outstanding for investors (float), multiplied by the current market price per share.  We can think of a company's market cap as its equity market value.  While a market cap-weighted index is arguably better than a price-weighted one like the **DOW** - let's shelve that one for another time - it is definitely worthy of a little investigative scrutiny. 

Under a free-float market cap weighting approach to indexing, the weight of each constituent company is computed as:

$$
\omega_{i,t} = \frac{M_{i,t}} {\sum_{j=1}^{N} M_{j,t}} \tag{1}
$$

Where $$\omega_{i,t}$$ is the index weight of company $$i$$ at month $$t$$, and $$N$$ is the total number of companies in the index.  

The contribution to the index return of each company is the stock return of that company multiplied by its weight, or

$$
C_{i,t} = \omega_{i,t} \times r_{i,t} \tag{2}
$$

Where $$r_{i,t}$$ is the investment return of stock $$i$$ at month $$t$$.

The index return at month $$t$$ thus becomes

$$
R_{index,t} = \sum_{i=1}^{N} C_{i,t} \tag{3}
$$

The actual index level as you would see it published is a little more involved, but the basic mechanics are as described above.

As of the end of 2024, the S&P 500 (S&P) market cap was hovering around $52Tn.  With the inaguration now in the rearview, the books are open on how durable that $50Tn level remains...  Regardless, the index has had a hell of a run over the last 10 years, returnig ~11% per year.  From [last month](https://rtrimble13.github.io/TurningBull/2025/shoot-move-communicate), we know that means if you had invested $1 in a fund tracking the S&P on Jan 1st, 2015, you would have ~$$\$2.84 = (1 + 11\%)^{10}$$ by December 31st, 2024.  Now, imagine a number larger than $1, and you get the picture.  As that investor in an S&P tracker, though, you might wonder what's driving those gains.  Well, a significant contributor to the success of the U.S. equities market as been *Big Tech*.  

Technology companies have revolutionized not only how we interact with the world - think personal computing, mobile devices, AI, e-commerce, etc. - but also how the world interacts with us - think social media, automation, AI, cyber warfare, and so on.  Thanks to technological innovation, the world has changed in the past couple of decades in ways that would have taken centuries in other eras.  Besides the point, but at least human behavior hasn't changed, right??  As technology has exploded, economic growth has come along for the ride.  And, there you have the S&P.

As that S&P investor, you might believe those investment returns are the result of tech innovation being shared in a *diversified* manner among all of those 500 largest companies.  Afterall, how much can a few Tech companies really influence the performance of a 500-stock portfolio?  Why not rely on the power of numbers and let their momentum ride?  Well, here's where a little scrutiny of the market cap weighting method becomes useful.  As we discussed above, the S&P chooses its constituents based on market cap.  So long as the market caps of the largest 500 companies in the U.S. equities market are of a similar order of magnitude, then I would argue you are getting roughly the diversified exposure you would expect.  However, if the market caps of a minority of companies begin to dominate the rest, then you start to see that *double envelopment* action start to kick in.  

For instance, let's say we have a four-stock index comprised of stocks $$FOO$$, $$BAR$$, $$BAZ$$ and $$OOF$$.  If they each have a market cap of ~$1Bn, then according to **(1)**, their individual weights are each 0.25 (25%).  If the stocks' respective returns are 4%, 3%, 2% and -2%, then the resulting (simplified) index return is $$1.75\% = (0.25 \times 4\%) + (0.25 \times 3\%) + (0.25 \times 2\%) + (0.25 \times -2\%)$$.  In this case, no single stock is driving the index.  Now, let's say $$OOF$$ has a market cap that dwarfs the rest such that its weight is 0.4 (40%), and the others are equal weighted at 0.2 (20%).  The index return according to **(3)** becomes $$1\% = (0.2 \times 4\%) + (0.2 \times 3\%) + (0.2 \times 2\%) + (0.4 \times -2\%)$$.  $$OOF$$'s price action is clearly driving the index due to its hefty weight relative to the rest.  

### The Magnificent 7

So, let's take the discussion back to Big Tech.  We've established technology's impact on the world.  As it happens, market commentators began to coin a new term for the largest tech growth stocks that were regularly impacting the market.  **FANG** came to represent the combined influence of Facebook, Amazon, Netflix and Google.  They became **FAANGs** in 2017 after adding Apple in the mix.  In 2023, the group's membership changed to include Alphabet (was Google), Amazon, Apple, Meta (was Facebook), Microsoft, Nvidia, and Tesla.  Absent a crafty acronym, they're known as the *Magnificent 7*, not to be confused with the Western.  Though don't be surprised if there's an executive order in the pipeline to change the name to the *Beautiful American 7*.

Our task this month is to assess just how much influence the Mag-7 have on the S&P by comparing their performance and allocation within the index over the last 10 years. The conditions under which we'll undertake this analysis include having access to monthly returns of the index and the Mag-7 stocks, as well as the historical index composition over the period.  The standard, like last month, is to develop a set of useful visualizations to communicate our conclusion.  For those who are interested, there is a [companion Jupyter Notebook](https://github.com/rtrimble13/tb-notebooks.git) with the code used for the analysis.

Before going much further, it's worth mentioning how S&P constituents and monthly constituent weights were factored into the analysis.  Since the data available consisted of the current list of constituent stocks as of Feb'25 and the intramonth changes to constituents dating back to the 1950's, the approach I've taken is to start with the current set of index constituents and work backwards.  Within a given month, consituents that were added in that month are excluded from the index for that month (their performance returns are reflected in the next month going forward).  Constituents that were removed from the index in the given month are retained, but excluded going forard.  With a list of index constituents for each month between Jan'15 and Dec'24, I assign the weight for each member stock based on its market cap as of the 1st of the month.  

So, for starters let's take a look at the cumulative return of the S&P since 2015 compared with how the index would have performed sans the Mag-7s.  To be explicit, we're working with monthly returns, excluding dividends.  The dividends exclusion is perhaps a little controversial.  It was a practical decision more than by choice; I only had access to S&P index returns without dividends (also known as the S&P Total Return Index).  I don't believe the result changes the outcome, however.

![Cumulative Returns]({{page.image_m1 | relative_url}})

From this plot, we can see that a version of the S&P exluding our Mag friends returns ~3.7% $$(= 11.1\% - 7.4\%)$$ less per year, which over the 10 year period amounts to ~44% $$(= 1.037^{10} - 1)$$ in total return.

Computing the return series of the S&P excluding Mag-7s is straightforward, but perhaps worth explaining.  If we consider that the S&P return for a given month is the weighted return of the Mag-7 stocks + the weighted return of the non-Mag-7 stocks, and if we know the S&P return, the Mag-7 return and the relative weighting of the Mag's for the given month, then we can arrive at the non-Mag-7 return through simple rearrangement of terms as shown below:

$$\begin{aligned}
R_{S\&P, i} = (\omega_{Mag7,i} \times R_{Mag7,i}) + (\omega_{\not{Mag7,i}} \times R_{\not{Mag7,i}})~~~~(1)
\\
\omega_{\not{Mag7,i}} \times R_{\not{Mag7,i}} = R_{S\&P,i} - (\omega_{Mag7,i} \times R_{Mag7,i})~~~~(2)
\\
R_{\not{Mag7,i}} = \frac{R_{S\&P,i} - (\omega_{Mag7,i} \times R_{Mag7,i})}{\omega_{\not{Mag7,i}}}~~~~(3)
\end{aligned}
$$

Where $$R_{S\&P,i}$$ is the return of the S&P in month $$i$$, $$\omega_{Mag7,i}$$ is the weight of the Mag-7s in month $$i$$, $$R_{Mag7,i}$$ is the Mag-7 return in month $$i$$, $$\omega_{\not{Mag7,i}}$$ is the weight of non-Mag stocks in month $$i$$, and $$R_{\not{Mag7,i}}$$ is the return of the non-Mags in month $$i$$.

From this chart alone, we can already see that our seven *magnificent* stocks make a big difference in the index.  Let's now compare rolling 1-year returns of the S&P and the Mags:

![Rolling 1Y Returns]({{page.image_m2 | relative_url}})

A rolling 1-yr return is simply a 1-year return computed one month at a time.  This means that the 1-year return computed for Dec'23 is based on the 12 monthly returns for 2023.  The Jan'24 return is then based on the 12 monthly returns beginning Feb'23.  In computing the Mag-7 1-yr returns, I'm treating the Mags as if they were a stand-alone portfolio.  So, their seven weights sum to 100%, rather than a number much less that 100% if we were to use their actual weights within the S&P.  This permits a more direct comparison of their rolling performance.  Due to the correlated nature of rolling returns, however, one should take caution in extracting too much statistical insight.  I think the chart is still insightful, though.

What immediately stands out is the order of magnitude difference in both the average 1-yr returns for both series as well as their standard deviations.  For both measures the Mag-7s are roughly 2x the index, meaning that both the average return and dispersion of those returns are double that of the index.  Over the period, the Mag-7s alone have delivered higher returns on average than the index at the cost of being more volatile.  One takeaway from this is when the S&P is doing well, the Mags are probably doing better, and vice versa.  

Now, let's see how much the Mags are contributing to the S&P monthly returns:

![Monthly Returns]({{page.image_m3 | relative_url}})

The blue bars represent the S&P return in each month.  The red ones are the contributions of the Mags to those returns.  With the precision of throwing a dart, it seems like the beginning of 2020 marks a period where the Mags truely begin to dominate the index.  This period also coincides with a time in our lives that many of us should recall.  Everyone have their masks and hand sanitizer?  Don't forget to socially distance yourselves...  

Splitting the observation period at Jan'20, we can confirm there is indeed a regime change.  The average contribution to the S&P after Jan'20 is more than twice the average contribution prior to 2020 at 1.6% and 0.7%, respectively.  Although I have not computed it, it also appears 2020 was a regime change for volatility as well, which would be consistent with the message from the prior chart.

Still awake?  Or, are you pretending to be a Roman again?  Well, the last chart completes my double envelopment analogy:

![Mag-7 Weights]({{page.image_m4 | relative_url}})

Here, I've plotted the S&P market cap for the last 10 years overlayed with the Mag-7 weights.  While I believe my market cap data may not be entirely correct - most sources on the web indicate the S&P market cap is closer to $52Tn than $55Tn - the trend seems to be spot on.  Over the last 10 years, the S&P market has grown ~190%, with particularly explosive periods between 2020 - 2022 and from 2023 on.  The allocation afforded to the Mags has grown from 10% of the S&P in 2015 to just over 30% at the end of 2024.  Seven stocks commanding ~32% of the index price action.  I'm a taker of opinions of which one you think resembles the Carthaginian Cavalry.

To wrap up, my goal this month was to explore the impact that a small number of tech stocks is having on an index that is supposed to be symbolic of a diversifed basket of the largest publically traded U.S. companies.  Chances are that if you are an investor of stocks, then you probably have exposure to these stocks through packaged products, such as ETFs and mutual funds.  And, if you have most of your U.S. equity exposure spread across a selection of various funds, then you are probably more concentrated in these seven stocks than you realize.  The recent times have been good, and momentum has been on your side.  I encourage you to consider the cautionary tale of the Roman infantryman at Cannae, though.  The tempo of this market is being driven by a small, disruptive force.  As such, the direction of battle can change very quickly.  When that line starts to bow, watch your flanks and beware the cavalry to your rear, lest you find yourself uttering, "Well, I'll be damned..."

Action front!  Let's move out and draw fire!!

**Note:** This post is not investment advice.  It is meant to be educational and entertaining.  If you find it useful, please let me know.  If you think it sucks, please also let me know - though I prefer constructive criticism : >

**Postscript:** This article was written on 28 Febrary, 2025.  It is a day that will live in infamy with regards to American diplomacy and the post-WW2 liberal world order.  I stand with Ukraine.

#### Sources

[Wikipedia: Battle of Cannae](https://en.wikipedia.org/wiki/Battle_of_Cannae)

[Wikipedia: S&P 500](https://en.wikipedia.org/wiki/S%26P_500)

[US News: History of the Magnificent 7](https://money.usnews.com/investing/articles/magnificent-7-stocks-explainer)

[TurningBull companion Jupyter Notebook Git Repository](https://github.com/rtrimble13/tb-notebooks.git)

[Financial Modeling Prep (FMP)](https://site.financialmodelingprep.com)