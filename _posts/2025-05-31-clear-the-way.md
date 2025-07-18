---
layout: post
title: "Sappers Clear the Way"
date: 2025-05-31
categories: jekyll update
image: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/may25/minefield1.jpg
image1: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/may25/mine_clearing1.jpg
image2: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/may25/yield_curve.png
image3: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/may25/spot_curve.png
image4: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/may25/minefield2.jpg
---

"Look lively, young sapper!" ... Allow me to introduce Staff Sergeant (SSG) Jones...  "Quit f-ing around and place those markers!" ...  For the record, I thought I had seen movement in the woodline.  But, when your sergeant accuses you of *"f-ing around,"* the best response is: "Yes, Sergeant."  

So, SSG Jones is a non-commissioned officer.  That means he works for a living.  And I am but a private in his section.  Together, our task is to clear a path through the 100 meters of anti-personnel mines ahead of us so the infantry platoon pulling security to our rear can continue moving toward their objective.  I have to get up on my elbows and stretch my neck out to even see the other side of the field.  "Keep your head down, dummy!" he scolds from five meters ahead in a way that only a non-comm can.  Clearly, SSG Jones has eyes in the back of his head because he's been probing for mines in his spot for the last several minutes.  "Yes, Sergeant," I mutter as I'm low crawling my way to the next designated spot to emplace a lane marker.  

![Probing]({{page.image1 | relative_url}})

"There you are.." he remarks.  He's found another mine.  "Guess what happens if this baby blows while you got your head up the sky, young sapper?"  Pretty sure this is still part of the last scolding...  "I catch shrapnel, Sergeant."  I'm still low crawling my way to a G.I. Bill.  "That's right, and you'll be back on the block, smokin' and jokin' with a hole in your face."  I've lost count how many times I heard that one.  And still, vivid imagery of me hanging out with my imaginary girlfriend back home and a gaping hold in my head flashes in my mind.  The sounds of birds in the trees make me question my life choices for a moment.  If I hadn't made my choices, though, I would never have met SSG Jones.  I'm pretty sure he is the best damned sapper in the Army.  Before rotating back to the line he was an instructor at the Sapper Leader Course, and he knows everything.  Demolitions, patrolling, obstacle emplacement and clearing.  Everything.  My Army recruiter had told me I would have a desk job.  To his credit, I didn't think he meant I'd have to wait until I left the Army to have a comfy 9-5 with good coffee and benefits.  Imagine my surprise to learn I'd been assigned to a combat engineer battalion.  My recruiter also told me my enlistment would probably only last a couple of years.  It's moments like this, with my head in the dirt, fiddling for a lane marker and locking eyes with a half-exposed land mine, that I wonder if maybe my recruiter was withholding information...  Since meeting SSG Jones, though, all I can see myself ever being is like him.  His first words at morning formation after I reported to the unit were, "Hey, young sapper!  You know what we do here?"  Probably I just mouth-breathed.  "We clear the way!"  And, so here we are, clearing our way through this field, one mine at a time.

"Another marker over here," SSG Jones says casually as he's already probing his way to the next mine.  "Only one way outta here, young sapper."  He's quizzing me now.  "Through, Sereant," is my response.  "Very good," is the reply, just loud enough for me to hear.  And by through, he means one mine at a time.  Our path is determined by the next obstacle, yet we can only reach it by reducing all the obstacles that came before it.  The sun has traveled a wide arc by the time we reach the other side of the field.  Looking back over our path, littered with mines that will never accomplish their purpose, it's hard not to feel a sense of pride.  "Good job, young sapper," SSG says as he stuffs a wad of tobacco in his mouth.  "We cleared the way."

### From Land Mines to Interest Rates

Ah, the merry month of May - complete with hamburgers, hotdogs, and Memorial Day.  If you recall, we left off last month with a promise to get into the tall grass with bond fundamentals.  Before we can do that though, we should talk about interest rates.  Just as the non-commissioned officer is the backbone of the Army, interest rates are the foundation upon which finance is built.  Without the SSG Jone's there is no Army to speak for this country when diplomacy and politics fall short.  Without interest rates, there are no incentives to raise, lend or allocate capital; no bonds to serve as debt obligations, no stocks to represent equity stakes, no forward commitments or contingent claims, and no real assets.  It all is made possible through the concept of the time value of money, and the time value of money only exists by the grace of interest rates.

While we have touched on interest rates some, [March specifically]({{ post_url 2025-03-31-ha-og6}}), let's probe the concept more deliberately.  With a little more formality an interest rate is used to determine the future value of a quantity.  In math terms, it looks like this:

$$
FV_t = PV \times (1 + R_t)^t  \tag{1}
$$

Where $$FV_t$$ is the future value at some time *t*, $$PV$$ is the present value, and $$R_t$$ is the rate of interest.  For instance, if you borrow $1 today with an obligation to pay it back in one year with 5% interest, then you are on the hook to pay your creditor $1.05 $$(= \$1 \times (1.05))$$ in a year's time.  This is a super simple example, though.  Let's add a little necessary complexity.  

Let's now say that you need $1 in a year's time and you'd like to invest in a security that offers a fixed rate of return of 5%.  The question becomes how much should you pony up to get that future dollar.  If you've never heard the expression "a doller today is worth more than a dollar tomorrow," then you've heard it here first!  This is the **time value of money** at it's core.  Logically, you must agree that if you have money on hand that has the potential to grow with interest, then the value of that money must equate to a larger sum of money in the future.  That is equation **(1)**.  However, to determine the present value of $1 in the future, we just rearrange that equation and turn it into a discount function:

$$
PV = \frac{FV_t}{(1 + R_t)^t}  \tag{2}
$$

So, with this we can say that we'll invest ~$0.95 $$(= \$1 \times (1.05)^{-1})$$ and be content with the promise that we'll get $1 when the security matures in one year, ignoring default risk of course.  Don't worry about that; just invest in Treasuries because the U.S. will never default ;)  Okay, so there's a name for this type of security that only pays back the initial invested principal plus interest.  We call them zero-coupon bonds.  Equation **(2)** is how you, young investor, determine the present value of a future cash flow.

Let's add a little more complexity.  Rather than making a one year investment, we're interested in a security that pays us back in six months, or half a year.  The quoted interest rate is still 5% annual.  However, since we're getting our $1 back in six months, its present value should be a little different.  In this scenario, our discount function becomes:

$$
PV = \frac{FV_t}{(1 + \frac{R_{t}}{2})^{2t}}  \tag{3}
$$

Applying this one, we'll conclude a fair present value of ~$0.976 $$(=\$1 \times (1.025)^{2(0.5)})$$.  As we'll see going forward **(3)** is crucial for working with semiannual cash flows.

Now a little more complexity.  Let's say you have the opportunity to buy a 1-year security that pays an annual fixed rate of interest of 5% semiannually on every $1 notional invested.  Oof, I could probably say that better...  Said differently, this security will make two payments: one in six months and another in one year.  The payment in six months will be an interest-only payment of 2.5% of however much (read: notional) you've invested, or 2.5 cents for each $1.  The $1 bit is also called the security's **face value**.  The second payment will include both another 2.5% interest payment as well as the original notional amount invested.  Said one more may differently, if we buy one of these securities, then we'll receive 2.5 cents in six months and another $1.025 in one year.  The total money we'll have received is $1.05 - financial independence, here we come!!  The question we have to ask ourselves is: how much are we willing to pay for this security today?  

Well, if we put this security under our little financial microscope, we'll see that it is just two separate cash flows separated in time.  If we can calculate and sum the present values of both cash flows, then we should have a good sense for how much this security is worth.  Mathematically, this becomes:

$$
PV = \frac{\$0.025}{(1 + \frac{R_{0.5}}{2})^{2(0.5)}} + \frac{\$1.025}{(1 + \frac{R_1}{2})^{2(1)}}  \tag{4}
$$

Where $$R_{0.5}$$ is the interest rate used to discount the cash flow received in six months, and $$R_1$$ is the rate used for the cash flow in one year.  If the rates we used in our first two examples were still valid, then we could apply them here.  Doing so would give us a present value for this security of $1 $$(=\$0.025 \times (1.025)^{-1} + \$1.025 \times (1.025)^{-2})$$.  So, there we are: our $1 face value security that pays an annual 5% interest rate (also known as a coupon) is presently worth $1.  This makes sense; so long as this security behaves as advertised, we'll end up with $1.05 after a year.  It helps, too, that the interest rates used to discount the cash flows are equal to our coupon rate.  Coincidentally, this type of security also has a name.  We call it a **coupon bond**, or even just a bond.  And because the present value of this bond equals it's face value, we can further describe it as a **par bond.**  Bonds can be structured in many ways, but semiannual coupon payments are very common.

One more layer of complexity.  Let's say we're evaluating a semiannual coupon bond that matures in ten years.  Determining its present value is mechanically the same as before, but now we have to discount 20 cash flows: two per year for the next ten years.  We can generalize this formula as:

$$
PV_{bond} = \sum_{t=1}^{n} \frac{\frac{C}{2}}{(1 + \frac{R_t}{2})^{2t}} + \frac{F}{(1 + \frac{R_n}{2})^{2n}}  \tag{5}
$$

Where $$C$$ is the coupon payment, $$F$$ is the face value, and $$R_t$$ is the interest rate used to discount the cash flows at time *t*.  Our challenge is to determine the appropriate interest rate at each *t*.  We call these interest rates **spot rates**, and we can think of them as the interest rates that apply to a zero-coupon bond that matures at time *t*.  In other words, the spot rate is the rate used to discount a cash flow that occurs at time *t*.  They are generally not constant, and they change over time.  And, unlike bond prices, spot rates are not observable in the market.  Rather, they are just below the surface and we have to probe for them, one rate at a time.  

"Yes, sergeant," you may, or may not, be thinking..  "But how do we find these spot rates outside of this strained military metaphor?" you're more likely thinking.  Well, young sapper, let's jump in it.

### Probing for Spot Rates in the Yield Curve

A term structure of interest rates, commonly referred to as a **yield curve**, is a graphical representation of the relationship between interest rates and the time to maturity of debt securities.  The yield curve is typically upward sloping, indicating that longer-term securities have higher yields than shorter-term ones.  This is because investors demand a premium for taking on the additional risk associated with longer maturities, such as inflation and interest rate risk.  It is also a reflection of the market's expectations for future interest rates and economic conditions.  It is not always upward sloping, though.  Sometimes it can be flat or even inverted, which can indicate different economic conditions.  An inverted yield curve, for example, is often seen as a predictor of an economic recession.  There are also many different types of yeild curves, such as the nominal yield curve, real yield curve, and forward yield curve, each of which provides different insights into the market's expectations for interest rates and economic conditions.  For today's mine field clearing exercise, we'll construct a nominal spot rate yield curve as inferred from the U.S. Treasury Par Yield Curve.

Okay, **par yields**, that's yet another new term.  We can think of a par yield as the coupon rate of a bond that is priced at par, or face value.  In other words, a par yield is the interest rate that makes the present value of a bond's cash flows equal to its face value, just like our example above of the 5% coupon bond.  The U.S. Treasury publishes daily a par yield curve that represents the yields on U.S. Treasury securities at various maturities.  This curve is constructed using the yields on newly issued Treasury securities.  Note: the Big Beautiful Bill going through the Senate will require a lot of new Treasury issuances.  In that vein, the par yield curve historically serves, but maybe not so much in the future, as a useful big beautiful benchmark for determining the risk-free rate upon which adjustments for credit risk and other factors are based. 

There's a hitch, though.  The government only publishes rates for a subset of the maturities we need to construct a full yield curve; specifically maturities of 1, 2, 3, and 6 months and 1, 2, 3, 5, 7, 10, 20 and 30 years.  To construct a full yield curve, we need to interpolate the missing maturities.  Interpolation is a method of estimating values between two known values.  For example, if we have the par yields for 1 and 2 year maturities, one way we can estimate the par yield for a 1.5 year maturity is by taking the average of the two known values.  

The below chart shows interpolated par yield curves as of 30 April '25 and a few other dates:

![Yield Curve]({{page.image2 | relative_url}})

As you can see, the yield curve breathes with the market; it changes over time as the market's expectations for interest rates and economic conditions change.  At this point, we're one big step - or prolonged low crawl through the mud - closer to finding our spot rates.  To accomplish this, we'll use a method called **bootstrapping**.  Bootstrapping is a technique used to derive spot rates from the par yield curve.  It involves calculating the spot rate for each maturity by solving for the interest rate that makes the present value of the bond's cash flows equal to its face value.  In other words, we can use the par yields to infer the spot rates by working our way through the yield curve, one maturity at a time, discovering each new spot rate by negotiating our way past the prior ones we've already uncovered.  Is the multi-layered metaphor sinking in? :>

### Bootstrapping Clears the Way

All right, we've finally reached our task, conditions, and standards for this session.

**Our Task, young sapper:** Construct a spot rate yield curve that can be used to determine the present value of a risk-free semiannual coupon bond.  

**Conditions:** Available to us are a set Treasury par yields, a choice of interpolation method, a bootstrapping algorithm, and a trusty Python interpreter.

**Standard:**  Our complete yield curve will have a spot rate for each maturity date contained in the par yield curve plus each six month interval between years 1 and 30.

An example of a recent par yield dataset downloaded from the U.S. Treasury website looks like this:

```csv
date  month1  month2  month3  month6  year1  year2  year3  year5  \
0  2025-05-16    4.37    4.34    4.37    4.30   4.13   3.98   3.95   4.06   
1  2025-05-15    4.37    4.35    4.38    4.29   4.10   3.96   3.95   4.07   
2  2025-05-14    4.39    4.36    4.41    4.30   4.14   4.05   4.05   4.17   
3  2025-05-13    4.39    4.35    4.41    4.29   4.11   4.02   4.00   4.12   
4  2025-05-12    4.38    4.36    4.42    4.29   4.11   3.98   3.97   4.09   

   year7  year10  year20  year30  
0   4.24    4.43    4.92    4.89  
1   4.25    4.45    4.93    4.91  
2   4.35    4.53    5.00    4.97  
3   4.30    4.49    4.97    4.94  
4   4.27    4.45    4.92    4.89
```
As you can see, there are a lot of blanks to fill in if we want to construct a full yield curve and value a bond with several years until maturity.  Our first step will be to interpolate the missing maturities in the par yield data.  For the sake of demonstration, and because it's just too easy not to, we'll use a cubic spline interpolation method.  While explaining the cubic spline is beyond the scope of this exercise, think of it as a method for producing the smoothest curve possible through a set of known points.  As always, Python makes it as easy as imposing unilateral tariffs:

```python
import numpy as np
import pandas as pd
from scipy.interpolate import CubicSpline

tenors = [0.083, 0.25, 0.5, 1, 2, 3, 5, 7, 10, 20, 30]  # in years
par_rates = [4.37, 4.34, 4.37, 4.30, 4.13, 3.98, 3.95, 4.06, 4.24, 4.43, 4.92, 4.89]  # in percent

xt = np.concatenate((np.array(tenors[:3]), np.arange(1, 31, 0.5)))  # full range of tenors

cs = CubicSpline(tenors, par_rates, bc_type='natural')
par_yield_curve = cs(xt)  # Interpolated par yields for all tenors
par_yield_curve_df = pd.DataFrame({'tenor': xt, 'par_yield': par_yield_curve})
```

Now that we have a full set of par yields, we can bootstrap our way to the spot rates.  The bootstrapping process involves iteratively calculating the spot rate for each maturity based on the par yield and the previously calculated spot rates.  Since the rates associated with maturities less than a year are not associated with coupon payments, we can treat them like zero-coupon bonds.  In other words, the spot rates for the 1-month, 3-month, and 6-month maturities will be equal to their respective par yields.  For subsequent maturities, we use the par yield as the coupon rate for a bond with the associated maturity and the previously calculated spot rates to determine the new spot rate.

Starting with equation **(5)**, and using the above data to work out the 1-year spot rate, we have:

$$
100 = \frac{\frac{4.30}{2}}{(1 + \frac{0.0437}{2})^{1}} + \frac{100 + \frac{4.30}{2}}{(1 + \frac{R_1}{2})^{2}}
$$

A couple things to note: 
1. The PV of 100 is because we know a bond priced at par equals its face value, which is 100 in this case.
2. The first term symbolizes the present value of the first coupon payment in six months, discounted at the 6-month par (and spot) rate.  The coupon payment is half of the 1-year par yield, since we are simulating a semiannual 1-year bond (4.30% / 2 = 2.15%).
3. The second term represents the present value of the second coupon payment and the face value, discounted at the unknown 1-year spot rate.

By rearranging the terms, we can solve for the 1-year spot rate:
$$
R_1 = 2 \times \left[ \left( \frac{100 + \frac{4.30}{2}}{\frac{100 - \frac{4.30}{2}}{(1 + \frac{0.0437}{2})^{1}}} \right)^{\frac{1}{2}} - 1 \right]
$$

All we've done is solve for the unknown spot rate.  And with that one under our belt, we can move on to the next one.  Only 59 to go...  If the math looks like it's getting a little hairy, rest assured that's why the nerds put computers on this Earth.  An algorithm to finish the job looks a little like this:

```python
## Bootstratp algorithm for computing spot rates between year 1 and 30 in six-month intervals.

coupons = par_rates / 2     # par_rates are interpolated par yields.  Divide by 2 for semiannual calculations.
spot_rates = [par_rates[0]] # Container for our spot rates.  The first rates is the 6-month rate.
fv = 100                    # Notional face value

## in this routine, par_rates starts at 1
for i in range(1, len(coupons)):
    c = coupons[i]      # coupon for current unknown spot rate
    
    ## compute discount factors for cash flows.
    df = sum(1. / (1 + spot_rates[j] / 2) ** (j + 1) for j in range(i))

    ## solve for the unknown rate.
    new_rate = 2 * (((fv + c) / (fv - c * df)) ** (1. / (i + 1)) - 1)

    spot_rates.append(new_rate) 
```

When all is said and done, we should get something that looks like this:

![Spot Rate Curve]({{ page.image3 | relative_url }})

And there we are..  The mine field is cleared.  Nice work, young sapper!  At this point, it would make sense to demonstrate using our yield curve to value some bonds.  This was a deceptively meaty topic, though.  So, let's leave it here and pick it up next month.  For those already familiar with the material we covered, you know that the devil lives in the details with every thing fixed income related.  For those not so familiar, I encourage you to sit with it and work it out on your own to appreciate how tricky the devil can be.  Having a solid grasp of the fixed income fundamentals we've covered here gives us a foundation to build upon as we delve deeper into the field.  So, take stock of it, pack it up in your ruck sack, and look lively, because SSG Jones is already conducting a reconnaissance of the next mine field.

Action Front!  Let's move out and draw fire!!


This article is dedicated to Micala "Mikey" Hicks, West Point '01, and first female ever to graduate from the Sapper Leadership Course.  You cleared the way, Mikey, and will never be forgotten.  'Till Duty is Done!

![Cleared the way]({{page.image4 | relative_url}})

**Note:** This post is not investment advice.  Any opinions stated are my own and do not reflect those of my employer.  This post is meant to be educational and entertaining.  If you find it useful, then please let me know.  If you think it sucks, then please let me know that, too!

#### Sources
- [U.S. Treasury Par Yield Curve](https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics/par-yield-curve)

- [Wikipedia: Bootstrapping (finance)](https://en.wikipedia.org/wiki/Bootstrapping_(finance))

- [Wikipedia: Yield Curve](https://en.wikipedia.org/wiki/Yield_curve)

- [Python: Cubic Spline Interpolation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.CubicSpline.html)