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

Tarawa.  They told us we'd land right on the beach...  Said the tide would carry the boats over the reef... But the water stopped too soon - just short of safety - and left us exposed.  The landing craft stopped abruptly, shoving us uncontrollably into each other.  A memory of packing into the NY subway at Chambers every morning before the war slid into focus for a moment before the heat set in.  When traveling toward the beach at 10 knots the breeze had lulled us into a pensive state where all you could hear was the LCVP's drone and the rumble of distant shelling.  Now there was just heat in the still air.  Heat and noise.  

The ramp dropped, and the world exploded into sound: machine guns barking from the bunkers, mortar shells whistling overhead, the sharp snap of rounds cracking through the air like breaking sticks.  Men started yelling - some from pain, some just to be heard over the chaos.  The sergeant shouted "Over the side!  Move!"

It's moments like this when your body becomes a sack of potatoes, weighed down with equipment and ammunition.  I hit the water hard, boots sinking instantly into the reef.  It was waist-deep, then chest-deep.  My rifle was slung across my back, useless now.  My pack dragged behind me like a sandbag tied to my spine.  I was trying to keep my helmet steady, but the saltwater was in my eyes, my mouth and ears.  To this day that saltwater is in my throat.  I couldn't hear anything clearly - just noises through saltwater ears and a pounding heartbeat.

When you find yourself in such a pickle, you wade.  You don't run, you can't.  Every step is like progressing through cement.  My thighs were burning and my shoulders felt like they were being ripped from their sockets.  Bullets kicked up in the water in front of us as rain on concrete.  Jimmy pitched forward face-first.  He never surfaced.  Just vanished into the red tide.  There was no cover.  No rocks, no logs...  Just open water and flat beach 500 yards ahead.  

My legs started to shake - not from fear, that had passed.  Rather, from the effort.  If you've never swum in full gear, you should try it, especially before landing on a hot beach.  My rifle banged against my back like a dead weight.  My canteen dug into my side.  The bullet it caught exchanged my clean water for salt, which I only realized later that day.  "Better it than my hip" was little comfort then when my thirst felt like death...  I thought about dropping my pack just to move faster.  But that would have meant stopping.

The closer we got, the louder everything became.  The sand was packed hard and streaked with blood.  Guys who'd made it ahead of me were crawling now - elbows in, heads down.  I dropped beside them and tried to breathe.  My lungs felt tight, like they were being squeezed by the heat.  My hands shaking, I blinked hard, trying to clear the salt from my eyes.  I hadn't even fired a shot yet.  There are many memories packed into that moment.  I remember someone screaming for a corpsman.  I remember the metallic taste of fear - like biting down on a coin.  And I remember the smell.  Burned cordite, seawater, and battle - sickly and sour, of burnt flesh and diesel fuel.  All I could think was: Keep moving.  Get to the objective.  Stay low.

### Postcards from the West

To say that defeating Imperial Japan would require creative thinking is at best an understatement.  It is about as useful as stating there are a lot of islands in the Pacific.  Islands with names that to this day most people have never heard of were occupied with Japanese forces dug into defensive positions just waiting for the advancing Americans.  General MacArthur, commanding U.S. Army forces, and Admiral Nimitz, heading up the U.S. Navy, both knew they had neither the time nor the resources to take every Island.  They also knew Japan was unreachable without a secure supply chain and airfields close enough to reach it.  The plan, then, was for the Army and Navy to carry out parallel campaigns to seize key islands and bypass non-critical ones, forging a path toward Tokyo.  The plan, though simple in concept, was never simple in execution.  On the ground, each island took on a life of its own from the perspectives of the marines and soldiers who fought there.  Some landings were hot, meaning the Japanese actively defended the beaches the Americans landed on.  And some were not, concealing deadly battles that would ensue as the Americans tredged inland.  Sometimes an island battle lasted a couple weeks, while others consumed months.  The island hopping strategy, hellish as it was, proved successful in the end.  And that is were the metaphore will take us today.  

If my June campaign is successful, then we'll have island hopped our way though a few more topics in the vast world of fixed income with the objective of gaining better appreciation for the complexity of this field.  And in a more direct application of the metaphore, we'll explore the elegant and extremely useful **Newton-Raphson** algorithm for calculating bond yields.  

### Guadalcanal
**or "Valuing a Bond Using Spot Rates"**

Recall from last month that we discussed the concept of spot rates and how they can be used to value a bond.  This month, we'll take a closer look at how to apply spot rates to calculate the present value of a bond's cash flows.  The process is straightforward: we discount each cash flow by its corresponding spot rate and sum them up to get the bond's present value.

Using our universal present value formula, we can express the present value of a bond as:

$$
PV = \sum_{t=0.5}^{n} \frac{\frac{C_t}{2}}{(1 + \frac{R_t}{2})^{2t}} + \frac{F}{(1 + \frac{R_n}{2})^{2n}} \tag{1}
$$

Where $$t$$ is the time in years until each cash flow, $$C_t$$ is the coupon payment at time $$t$$, $$R_t$$ is the spot rate for that time period, and $$F$$ is the face value of the bond.  Since we are using semi-annual coupons, we divide the coupon rate by 2 and multiply the time by 2 to account for the semi-annual payments.

So, if we have a Treasury bond with a 5% coupon rate maturing in 10 years, and a bootstrapped spot rate curve on 1 July 2025, then we can apply **(1)** to determine a present value of $105.66 per $100 face value.  The below chart illustrates the effect of discounting on each of the cash flows.

![PV with Spot Rates]({{ page.image1 | relative_url }})

There's a few things we can take away from this example.  Notice the bars representing coupon payments are the same height, but the PV of those bars decreases over time.  The rate of decrease is a function both of time and the spot rate such that by the time we reach the 10-year mark, nearly all of the value of the cash flow has been erroded away.  The chart is plotted on a logarithmic scale so we can better see this effect on the cash flows.  They would otherwise get dwarfed by the face value cash flow.  In summing the PVs we arrive at the bond price at the far left, $105.66.  Since this value is above $100 par, we can say the bond is trading at a premium.  This is because the coupon rate of 5% is above the average level of spot rates in the term structure, plotted as the red curve against the right axis.  If the bond PV was below $100, we would say it is trading at a discount.

### Tarawa
**or "Bond Price Conventions"**

So, we know our bond is valued at $105.66.  How would that be quoted in the market, though?  When quoting stocks, ETFs and funds, we typically see them quoted directly in dollars and cents.  Not so with bonds, however.  First, bonds are typically quoted in terms of a percentage of par value.  $105.66 would be quoted, then, as 105.66%.  Second, the decimal component of the quote can be expressed as either a decimal or a fraction, but on different scales than we're used to.  Treasury bonds, and bonds issued by government agencies, are quoted in 32nds of a point.  So, 105.66% would be expressed as 105 21/32, or 105-21 (=105 + 0.66 * 32).  Bonds issued by corporations and municipalities are quoted in 1/8ths of a point.  If our bond was issued by Ford Motor Company, for instance, it would be quoted as 105 5/8 (=105 + 0.66 * 8).  

With this fun fact, we now know not to either despair over a miscalibrated spot rate curve or to squeal with glee over a potential abritrage opportunity when we see our bond quoted at 105-21.  It's simply a confirmation that our valuation is inline with the market.  

### Saipan
**or "Determining the Actual Price You Pay"**

While we have been anchoring on $100 face value in our example, bonds more commonly have a face value of $1,000.  This means our Treasury bond quoted at 105-21 would carry a price of $1,056.56 $$(=\$1,000 \times \frac{105 + \frac{21}{32}}{100})$$.  As with so many things, though, that is not the full price you would pay, and I'm not talking about mark ups or fees.  

Let me illustrate this point from the perspective of someone who holds this bond and wants to sell it.  Since the bond makes regular coupon payments, if that person sells the bond anytime before the next coupon payment, then they are forfeiting that payment.  As a holder of the bond up to that moment, wouldn't you want to be compensated for the time you've held it since the previous payment?  Short answer: "Oui!"  Naturally, you would expect to receive the **accrued interest** that has accumulated since the last coupon date.  Otherwise, bond holders would have a perverse incentive not to sell until the next coupon, and it would just create a weird market environment.  

As a buyer of the bond, then, part of the purchase will include payment of accrued interest.  We call the quoted price of $1,056.56 the **clean price**.  It is the price of the bond based on it's present value, which excludes accrued interest.  Adding that component gives us the **dirty price**, or the price that we'll actually pay to buy that bond.  Working out this example, lets say it is the 24th of May, 2025, and the next coupon date of this bond we're going to buy is July 1st.  Since it is a semi-annual bond, we know that the previous coupon payment was made on January 1st.  That means we are 143 days into the 181-day coupon period.  As a fraction of the period, that is 0.7601 $$(=\frac{143}{181})$$.  The July 1 coupon payment will be $25 $$(=\frac{5\% \times $1,000}{2})$$, so the accrued interest is $19 $$(=\$25 \times 0.7601)$$.  Soiling our clean price of $1,056.56 with that filthy $19 of accrued interest gives us our *dirty price* of $1,075.56 $$(=\$1,056.56 + \$19)$$.  This is the price we would pay to buy the bond on May 24th, 2025, per $1,000 notional face value.

### Guam
**or "Yields of our Bonds"**

"What's the yield on that bond!" shouts the trader from across the floor.  "What yield?" is the reply.  "The bond yield, a-hole!" is the thundering response.  "Oh, that yield!" is the exasperated reply.  OK, that probably never happens.  But I mention it to illustrate that there are different meaures of yield, and their differences are nuanced.  Conceptually they say something similar about how much an investor can expect to earn in percentage terms from a bond.  But let's go through a few of the main ones:

1. **Nominal Yield**: This is the simplest measure, calculated as the annual coupon payment divided by the face value of the bond. For our example bond with a 5% coupon rate and $1,000 face value, the nominal yield is 5% $$(=\frac{50}{1000})$$.
2. **Current Yield**: This measure takes into account the bond's current market price. It is calculated as the annual coupon payment divided by the current market price of the bond. For our bond priced at $1,056.56, the current yield is approximately 4.73% $$(=\frac{50}{1056.56})$$.  Notice that we compute current yield using the clean price, not including that dirty-nasty accrued interest.  Also note that the current yield is lower than nominal.  This fact is true for any premium bond.  You've probably heard it a million times: "bond prices and yields move in opposite directions."  Well, this is the case in point.
3. **Yield to Maturity (YTM)**: This is a more comprehensive measure that considers the bond's current market price, coupon payments, and the time remaining until maturity. It represents the total return an investor can expect if the bond is held until maturity. Calculating YTM can be complex, as it involves solving for the interest rate that equates the present value of the bond's cash flows to its current market price.  We'll tackle this when we hit **Okinawa**.  A back-of-the-envelope approximation of YTM can be made by amortizing the difference between the current price and par value over the remaining life of the bond:

$$
YTM \approx \frac{C + \frac{F - P}{n}}{\frac{F + P}{2}} \tag{2}
$$

Where $$C$$ is the annual coupon payment, $$F$$ is the face value, $$P$$ is the current price, and $$n$$ is the number of years to maturity.  For our example bond, this gives us a YTM of approximately 4.31% $$(=\frac{50 + \frac{(1000 - 1056.56)}{10}}{\frac{(1000 + 1056.56)}{2}})$$.  This is a good approximation, but it does not account for the time value of money in the same way as the full YTM calculation.  Notice that YTM is lower than both nominal and current yield since the bond is trading at a premium.
4. **Yield to Call (YTC)**: This measure is relevant for callable bonds, which can be redeemed by the issuer before maturity. YTC is similar to YTM but assumes the bond is called at the earliest possible date. It is calculated using the call price and the time until the call date.  Solving for YTC involves numerical methods and is a particular joy to all us financial engineers out there.  Out of scope for today, but we'll set our sights on it before too long...  If our bond was hypothetically callable at par in 5 years, that would mean the issuer, i.e., Uncle Sam for this Treasury, could call the bond away from us at a price of par.  Using **(2)**, we can approximate YTC as 3.76% $$(=\frac{50 + \frac{(1000 - 1056.56)}{5}}{\frac{(1000 + 1056.56)}{2}})$$.  Notice that YTC is the lowest of the yields we calculated so far.
5. **Yield to Worst (YTW)**: This measure calculates the lowest yield an investor can receive.  Technically, its is the lower of YTM and YTC.  It is useful for assessing the worst-case scenario for a bondholder.  Besides a credit event, e.g., a default, a bad outcome for a bond investor is to have their bond called early and be stuck with reinvesting the proceeds at less favorable rates.  This is commonly referred to as reinvestment risk.  YTW is a way to quantify that risk.  Sticking with our example, YTW would be 3.76%.

If the main takeaway from this island is that there are different measures of yield, each serving a different purpose, then the secondary takeaway is to understand the relationship between the various yields depending on whether the bond is trading at a preium or discount.  The below chart plots nominal, current YTM, and YTC for a 5.5% semi-annual bond with 8 years until maturity.  

![Price and Yield Dynamics]({{ page.image4 | relative_url }})

Nominal yield is always at the intersection of the curves at par ($100).  The blue line represents current yield.  When the bond is trading at discount, it will be above nominal, but less than YTM - the orange curve.  When trading at a premium, current yield is below nominal, but higher than YTM.  For callable bonds, YTC will always be at the extremes. It will be the highest yield measure for discount bonds, since the chances of the issuer calling the bond at a price above the discounted one are low.  And, it will be the lowest yield measure when the bond is priced above the call price, reflecting the likelihood of the issuer exercising the call feature.   

### Peleliu
**or "Prices Move Inversely to Yields"**
There, that's a million and one times.  The point is that important, though.  Let's look at three bonds with different coupon rates all maturing in 10 years:

![Price and Yield Dynamics 1]({{ page.image2 | relative_url }})

The main point to take away from this image is that the price curves as a function of yield are downward sloping.  It's a golden rule: increasing yields leads to decreasing prices.  A million and two...  Also notable is how the three curves are similarly convex.  The similarity in shape is mostly due to the shared maturity of 10 years, and the absence of other factors that impact price and are out of scope for this post.  About the convex shape, though, we can infer that the price of a bond will change more for a given change in yield when the yield is low than when it is high.  We'll also set an azimuth on this topic in more detail in the future.  But before we hop to the next rock in the Pacific, one more chart:

![Price and Yield Dynamics 2]({{ page.image3 | relative_url }})

The only thing I want to call out here is the impact maturity has on the price-yield relationship.  The longer the maturity, the more pronounced the convexity of the price curve.  This is because longer-term bonds are more sensitive to changes in interest rates, leading to larger price fluctuations for a given change in yield: a key concept in fixed income investing and risk management.

### Iwo Jima
**or "Bond Price Evolution"**

Unlike the actual experience on Iwo Jima, this one will be short and sweet.  I saw a similar chart in a text book once, and it has stayed with me ever since:

![Bond Price Evolution]({{ page.image5 | relative_url }})

From this chart we can see, given a number of bonds with different coupon rates, the same maturity and yield, how the price evolves over time until maturity.  The key takeaway is that the price approaches par as the bond nears maturity.  It's intuitive, since the bond will eventually pay out its face value plus a final coupon payment at maturity.  Absent a credit event, the price will converge to par regardless of the yield.  As a buy-and-hold investor, then, credit risk becomes your biggest concern when holding a non-callable bond.  While yield is an important factor when making the initial investment decision, the price is otherwise fairly deterministic.  Active bond traders view the world differently, though, since expectations of yield and market conditions, among other things, will inform their holding periods.

### Okinawa
**or "Calculating Yields with Newton-Raphson"**

Whew, thanks for sticking with me this far.  It's been quite a trip.  I have to warn you, though, some of this section might elicit painful memories of college calculus.  Let's jump in it...

For starters, let's assume we have our trusty semi-annual 5% Treasury bond with 10 years to maturity, quoted at 105-21.  We want to calculate YTM rather than just approximate it (perhaps we're out of envelopes..).  From last month, we know the equation for PV using yield is:

$$
PV = \sum_{t=0.5}^{n} \frac{\frac{C_t}{2}}{(1 + \frac{YTM}{2})^{2t}} + \frac{F}{(1 + \frac{YTM}{2})^{2n}} \tag{3}
$$

YTM is the only unknown, but solving for it is not as simple as rearranging the terms.  Instead, we'll use a numerical method called the **Newton-Raphson** method.  This method is an iterative approach that starts with an initial guess for YTM and refines it until we converge on a solution.  The formula for the Newton-Raphson iteration is:

$$
YTM_{n+1} = YTM_n - \frac{f(YTM_n)}{f'(YTM_n)} \tag{4}
$$

Where $$f(YTM)$$ is the objective function representing the difference between the calculated PV and the market price, and $$f'(YTM)$$ is its derivative with respect to YTM.  In our case, we can express this as:

$$
f(YTM) = P_{market} - PV_{YTM}
$$

$$
f'(YTM) = -\sum_{t=0.5}^{n} \frac{t \cdot C_t}{2(1 + \frac{YTM}{2})^{2t+1}} - \frac{n \cdot F}{2(1 + \frac{YTM}{2})^{2n+1}}
$$

Where $$P_{market}$$ is the market price of the bond, and $$PV_{YTM}$$ is the present value calculated using the current guess for YTM.

After each iteration with **(4)**, we have a new estimate for YTM.  The objective function $$f(YTM)$$ and its derivative will determine the size of leap we take toward the new estimate.  If our updated estimate is still far away from the actual YTM, then the leap will be large.  As we converge to the true value the leaps will get smaller and smaller.  We stop iterating once the absolute value of the difference in YTM estimates $$(YTM_{n+1} - YTM_n)$$ is less than a predetermined tolerance level, e.g., 1e-6.  This means we are close enough to the true YTM that further iterations would not yield a materially different result.  Applying the algorithm looks a little like this:

```python
ytm = initial_guess  # Set up parameters..
ytm_old = 0
## Iterate until convergence
for i in range(max_iterations):
    if abs(ytm - ytm_old) < tolerance: # tolerance is a very small number, e.g., 1e-6
        return ytm
    # Set the prior YTM estimate to the current one.
    ytm_old = ytm
    # calculate f(YTM) and f`(YTM) 
    ## Use equation (3) to calculate the bond price using the current YTM guess.
    objective_func = bond_price - pv_bond_ytm
    (coupon_rate, ytm, n_maturity, face_value)
    # Calculate the derivative of the bond price with respect to YTM.
    ## Use equation (5) to calculate the derivative of the bond price.
    objective_prime = pv_bond_prime(coupon_rate, ytm, n_maturity, face_value)
    # Update the YTM estimate using the Newton-Raphson formula. 
    ## Use equation (4)..
    ytm = ytm_old - objective_func / objective_prime
```
The below chart shows the Newton-Raphson convergence for our bond using three different initial guesses:

![Newton-Raphson Convergence]({{ page.image6 | relative_url }})

As you can see, convergence happens quickly - within six iterations for the worst initial guess.  They all converge to the same YTM of ~4.2982%.  Recall our back-of-the-envelope approximation was 4.31% - pretty good for when precision is less important.  For a another view showing the convergence given the initial guess that was furthest from the true value, we can see how the step sizes decrease as we the objective function approaches zero:

![Newton-Raphson Convergence 2]({{ page.image7 | relative_url }})

The Newton-Raphson method is a powerful tool for calculating yields, especially when dealing with complex bonds or when precision is paramount.  It allows us to find the yield that equates the present value of a bond's cash flows to its market price, providing a more accurate measure of the bond's return.  It's also useful in an array of other contexts ranging from calculating implied volatility for options pricing to solving for the internal rate of return (IRR) in capital budgeting.  Truly and elegant algorithm that punches well above its weight.

### Japan
**or "Reaching our Objective"**

Our island hopping campaign through the fixed income has taken us from spot rates to Newton-Raphson, with some strategic stops along the way.  A part of me wants to say that *Liberation Day* was my Pearl Harbor moment for exploring this topic, but that would just be silly..  Instead, think of it as *One Big Beautiful Bond Introduction* that has set us up for future campaigns in portfolio and risk managment.  Yup.  And on that note, as I write this, the **Big Beautiful Bill** is about the roll through Congress and has the potential to further stretch U.S. debt burden beyond sustainable levels - by as much as $5 trillion over the next decade according to some estimates.  Rather than *beautiful*, we may look back on this moment and think of it as the **One Big-Boned Bill**.  We'll just have to stay awake and watch what happens.  'Til next time..

Action front!  Move out and draw fire!!

![Guadalcanal]({{ page.image8 | relative_url }})

**Note:** This post is not investment advice.  Any opinions stated are my own and do not reflect those of my employer.  This post is meant to be educational and entertaining.  If you find it useful, then please let me know.  If you think it sucks, then please let me know that, too!
