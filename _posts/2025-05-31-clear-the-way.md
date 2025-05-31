---
layout: post
title: "Sappers Clear the Way"
date: 2025-05-31
categories: jekyll update
image: /images/posts/may25/
image1: /images/posts/may25/
image2: /images/posts/may25/
image3: /images/posts/may25/
---

"Look lively, young sapper!"  Allow me to introduce Staff Sergeant (SSG) Jones.  "Quit f-ing around and place those markers!"  For the record, I thought I had seen movement in the woodline.  But, when your sergeant accuses you of *"f-ing around,"* the best response is: "Yes, Sergeant."  

So, SSG Jones is a non-commissioned officer.  That means he works for a living.  And I am but a private in his section.  Together, our task is to clear a path through the 100 meters of anti-personnel mines ahead of us so the infantry platoon pulling security to our rear can continue moving toward their objective.  I have to get up on my elbows to even see the other side of the field.  "Keep your head down, dummy!" he scolds from five meters ahead in a way that only a non-comm can.  Clearly, SSG Jones has eyes in the back of his head because he's been probing for mines in his spot for the last several minutes.  "Yes, Sergeant," I mutter as I'm low crawling my way to the next designated spot to emplace a lane marker.  

![Probing]({{page.image1 | relative_url}})

"There you are.." he remarks.  He's found another mine.  "Guess what happens if this baby blows while you got your head up the sky, young sapper?"  Pretty sure this is still part of the last scolding...  "I catch shrapnel, Sergeant."  I'm still low crawling my way to a G.I. Bill.  "That's right, and you'll be back on the block, smokin' and jokin' with a hole in your face."  I've lost count how many times I heard that one.  And still, vivid imagery of me hanging out with my girlfriend back home with a gaping hold in my head flashes in my mind.  The sounds of birds in the trees make me question my life choices for a moment.  If I hadn't made my choices, though, I would never have met SSG Jones.  I'm pretty sure he is the best damned sapper in the Army.  Before rotating back to the line he was an instructor at the Sapper Leader Course, and he knows everything.  Demolitions, patrolling, obstacle emplacement and clearing.  Everything.  My Army recruiter had told me I would have a desk job.  To his credit, I didn't think he meant I'd have to wait until I left the Army.  Imagine my surprise to learn I'd been assigned to a combat engineer battalion.  My recruiter also told me my enlistment would probably only last a couple of years.  It's moments like this, with my head in the dirt, fiddling for a lane marker and locking eyes with a half-exposed land mine, that I wonder if maybe my recruiter was withholding information...  Since meeting SSG Jones, though, all I can see myself ever being is like him.  His first words at morning formation after I reported to the unit were, "Hey, young sapper!  You know what we do here?"  Probably I just mouth-breathed.  "We clear the way!"  And, so here we are, clearing our way through this field, one mine at a time.

"Another marker over here," SSG Jones says casually as he's already probing his way to the next mine.  "Only one way outta here, young sapper."  He's quizzing me now.  "Through, Sereant," is my response.  "Very good," is the reply, just loud enough for me to hear.  And by through, he means one mine at a time.  Our path is determined by the next obstacle, yet we can only reach it by reducing all the obstacles that came before it.  The sun has traveled a wide arc by the time we reach the other side of the field.  Looking back over our path, littered with mines that will never accomplish their purpose, it's hard not to feel a sense of pride.  "Good job, young sapper," SSG says as he stuffs a wad of tobacco in his mouth.  "We cleared the way."

![Cleard the way]({{page.image2 | relative_url}})

### From Land Mines to Interest Rates

Ah, the merry month of May - complete with hamburgers, hotdogs, and Memorial Day.  If you recall, we left off last month with a promise to get into the tall grass with bond fundamentals.  Before we can do that though, we should talk about interest rates.  Just as the non-commissioned officer is the backbone of the Army, interest rates are the foundation upon which finance is built.  Without the SSG Jone's there is no Army to speak for this country when diplomacy and politics fall short.  Without interest rates, there are no incentives to raise, lend or allocate capital; no bonds to serve as debt obligations, no stocks to represent equity stakes, no forward commitments or contingent claims, and no real assets.  It all is made possible through the concept of the time value of money, and the time value of money only exists by the grace of interest rates.

While we have touched on interest rates some, [March specifically]({{ post_url 2025-03-31-ha-og6}}), with a little more formality an interest rate is used to determine the future value of a quantity.  In math terms, it looks like this:

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

Now a little more complexity.  Let's say you have the opportunity to buy a 1-year security that pays an annual fixed rate of interest of 5% semiannually on every $1 notional invested.  Oof, I could probably say that better...  Said differently, this security will make two payments: one in six months and another in one year.  The payment in six months will be an interest-only payment of 2.5% of however much (read: notional) you've invested, or 2.5 cents for each $1.  The $1 bit is also called the bond's **face value**.  The second payment will include both another 2.5% interest payment as well as the orinal notional amount invested.  Said one more may differently, if we buy one of these securities, then we'll receive 2.5 cents in six months and another $1.025 in one year.  The total money we'll have received is $1.05 - financial independence, here we come!!  The question we have to ask ourselves is: how much are we willing to pay for this security today?  

Well, if we put this security under our little financial microscope, we'll see that it is just two separate cash flows separated in time.  If we can calculate and sum the present values of both cash flows, then we should have a good sense for how much this security is worth.  Mathematically, this becomes:

$$
PV = \frac{\$0.025}{(1 + \frac{R_{0.5}}{2})^{2(0.5)}} + \frac{\$1.025}{(1 + \frac{R_1}{2})^{2(1)}}  \tag{4}
$$

Where $$R_{0.5}$$ is the interest rate used to discount the cash flow received in six months, and $$R_1$$ is the rate used for the cash flow in one year.  If the rates we used in our first two examples were still valid, then we could apply them here.  Doing so would give us a present value for this security of $1 $$(=\$0.025 \times (1.025)^{-1} + \$1.025 \times (1.025)^{-2})$$.  Holy cow!  You see that?  Our $1 face value security that pays an annual 5% interest rate (also known as a coupon) is presently worth $1.  It makes sense, though; so long as this security behaves as advertised, we'll end up with $1.05 after a year.  It helps, too, that the interest rates used to discount the cash flows are equal to our coupon rate.  Coincidentally, this type of security also has a name.  We call it a **coupon bond**, or even just a bond.  Bonds can be structured in many ways, but semiannual coupon payments are the most common.



This article is dedicated to Micala "Mikey" Hicks, West Point '01, and first female ever to graduate from the Sapper Leadership Course.  You cleared the way, Mikey, and will never be forgotten.  'Till Duty is Done!