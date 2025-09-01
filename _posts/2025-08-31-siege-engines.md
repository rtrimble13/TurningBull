---
layout: post
title: "Mind the Siege Engines"
date: 2025-08-31
categories: jekyll update
image: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/stalingrad_gpt.png
image1: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/stalingrad.jpg
image2: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/npv1.png
image3: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/npv2.png
image4: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/revenue.png
image5: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/spending.png
image6: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/debt.png
image7: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/crfb_deficit.png
image8: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/crfb_debt.png
image9: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/aug25/stalingrad2.jpeg
---

Let’s open with a passage from Vasily Grossman’s *Life and Fate*, a novel about the Battle of Stalingrad in the Second World War:

*Several times during the day the soldiers had fought off attacks by German tanks and infantry.  Their eyes were bloodshot and their ears deafened…*

*… The German air-raids stopped at dusk.  A man arriving in Stalingrad at night, deafened by the guns, might well imagine that some cruel fate had brought him there just as a major offensive was being launched.  For the veterans, however, this was the time to shave, to wash clothes and write letters; for the turners, mechanics, solderers and watchmakers this was the time to repair clocks, cigarette-lighters, cigarette-holders, and the oil-lamps made from old shellcases with strips of greatcoat as wicks.*

*In the flickering light from the shell-bursts you could see the banks of the river, the oil-tanks and factory-chimneys, the ruins of the city itself.  The view was sullen and sinister…*

*… At the front line itself, letters folded into triangles were handed to postmen, and the dead were buried – to spend the first night of their eternal rest beside the dug-outs and trenches where their comrades were writing letters, shaving, eating bread, drinking tea and washing in improvised baths.*

### Positions whence there is no escape

![Stalingrad]({{ page.image1 | relative_url }})

Grossman, a Soviet war correspondent, knew Stalingrad perhaps better than anyone.  Over the 1,000 days he spent reporting on the front lines, including the battles of Moskow, Stalingrad, Kursk and Berlin, he witnessed the carnage first-hand.  Grossman compiled his notes from Stalingrad after the war and set out to tell the story in its true light (read *darkness*..)  Despite criticism from the state censors – Grossman was as critical of the Soviets as he was of the Nazis – he was permitted to publish the epic *Life and Fate* in 1952.  

The Battle of Stalingrad was the single largest and costliest urban battle in military history.  It was also the subject to the bloodiest and fiercest fighting in all the Second World War.  Should you choose to read the [Wikipedia page](https://en.wikipedia.org/wiki/Battle_of_Stalingrad) about it, you find the article to be one of the longest you might encounter on Wikipedia!  For this piece, though, it is enough to know that the Germans besieged the Russians at Stalingrad for its symbolic significance.  The Russians held out long enough for reinforcements to route and encircle the weary Germans, flipping tables such that the besiegers became the besieged.  To put it in modern context, it might be like Canada laying siege to Trumperica, formerly Washington D.C., only to find their position untenable once Hegseth remakes the U.S. Army in his image and rides in for the kill…  Okay, that’s a ridiculous analogy.  For one, the Russians, unlike the Germans, enlisted female soldiers.  I digress… The important point to take away from this opening segment is Stalingrad was a siege: a military blockade of a city with the intent of conquering by attrition.

With the height of summer upon us, I thought the concept of siege warfare would be a fitting topic this month.  As the summer heat dominates our activities – scouring for shade, mounting increasingly creative defenses against mosquitoes, and encouraging retreat to the confines of air-conditioned spaces – we are effectively under its influence.  For many, summer in the city can feel like a months-long siege that must be endured until it breaks with the coming of Fall.  Personally, I welcome the siege, wishing only that it might go on longer.  Better still if I could just figure how to leverage the semi-permanent SPF 50 residue on my body to thwart the mosquito hordes.  I like to believe my superpower is a high tolerance for heat, unfortunately offset by an extreme anathema to the cold.  My kids call it a skill issue.

More on the siege stuff, though.  With so many to pick from history, Stalingrad stands apart due to its layers of complexity.  Yes, the German encirclement possesses all the necessary ingredients for a good siege, complete with tanks, trenches, profound human suffering and starvation.  None of those are lessons to take away from it, however.  Instead, I’d like to call your attention to hubris and broken systems.  Where we saw in the [hypothesis testing ballad to OG-6](https://rtrimble13.github.io/TurningBull/2025/ha-og6/) the importance of rigor and objectivity in making sound decisions, in Stalingrad we encounter the cautionary tale of poor decision making.

### Resisting the invation of ideas

You see, a siege might look good on a white board when brainstorming ideas on how to take a strategic objective.  A siege might also sound like the total boss move as it’s drawn out on a napkin after a couple of cocktails.  But does it still shine if the assumptions backing it prove to be less rosy in practice?  How do we know where the “good idea” becomes an albatross, and when we need to shift to plan B?  Well, there are tools for this sort of decision making.  One of them is what we’ll call the **Net Present Value Analysis**, or NPVA.  From all our talk about [bond valuations]({% post_url 2025-06-30-island-hopping %}), you’ll recall my incessant ‘splaining about discounting cash flows.  So, I might have mentioned that approach can be used for more than just putting a price on a bond.  Today, we’ll talk about using it to help make better decisions – the kinds you need to make when deciding if a capital-intensive investment is worth making, or when choosing between different investments given limited capital and resources.  At the highest level, an NPVA generally consists of (1) an initial outlay, or initial cost of pursuing the project, (2) a sequence of expected cash flows over the life of the project, (3) a final cash flow, or teardown cost/income associated with the terminating the project, and (4) a discount rate for computing the present value (PV) of all the cash flows.  The sum of PVs gives us the net present value for the project.  It represents the value in today’s dollars for pursuing that course of action.  

Let’s start with a simple example.  As a business analyst with the **ACME Widget & Thing Foundry**, or WTF, we want to evaluate a potential capital project to enhance the Ostrich Buffer product line.  Specifically, this would be an upgrade to the Ostrich Buffer Blast Base Assembly, or OBBBA.  Pursuing this upgrade will improve the end-user experience, according to the marketing department.  The initial outlay for the upgrade is $5,000, mostly related to purchasing new equipment.  The upgrade is expected to have a useful life of 10 years.  We expect to earn $100 in net revenue in year 1, and $300 each year for the following 9 years.  At the end of year 10, marketing is confident that the project terminal value will be $4,000 – something about the residual inventory after 10 years and effectively altruistic synergies the project end-of-life will have with other widgets in the WTF pipeline.  Armed with this information, we can construct a barebones NPVA that looks something like this in Excel:

![Project A]({{ page.image2 | relative_url }})

A few things to note from this example: First, if anyone ever encourages you to include effectively altruistic synergies in your model, rethink your employment with that company.  Second, the choice of discount rate is usually a bit of art grounded in reason.  We used 4.2% based on the yield of the 10-year Treasury Note at the time of the analysis.  The intuition for it is the project has a 10-year lifespan, and a potential alternative to investing in this capital project could be to simply invest in government bonds.  Under this alternative, we are essentially exploring if pursuing this risky endeavor produces a better return than opting for risk-free growth.  However, WTF, with a B- credit rating, might plan to issue bonds to fund this project.  Under that scenario the interest rate might be higher than the 10Y Treasury yield.  Considering the higher interest rates as the *required rate of return* would be a more reasonable discount rate.  Third, from the last row (Cumulative PV) we can see the NPV for this project never turns positive.  This row is the cumulative sum of the annual PVs such that the value in year 10 is the final NPV for the project.  Since it is negative, the reasonable decision to make is to abandon the project.  Realistically, there’s probably not much of a market for ostrich buffers anyway.  

Besides the NPV, there are two other statistics that can be useful to know.  One is the project **internal rate of return**, or IRR.  The IRR is conceptually identical to bond yield-to-maturity – recall the [postcard from Okinawa]({% post_url 2025-06-30-island-hopping %}).  In Excel, it’s as simple as using the XIRR function.  Alternatively, you can use the *‘newton’* function in python's [scipy.optimize](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.newton.html) library.  You can also roll your own implementation in any language as demonstrated in Okinawa.  Or, now days you can just ask AI to do it for you…  Opting for Excel, we find the IRR is -0.32%, or equivalent to losing 32 basis points relative to a risk-free Treasury annually for the next 10 years.  The IRR conveys the same message as NPV, so choosing one over the other is a matter of context and preference.  The other statistic worth mentioning is the **return on investment (ROI)**.  Often decision makers want to know the ROI for a project because it is easy to conceptualize.  It is simply the total cash inflows less the total cash outflows over the life of the project divided by the initial investment: 

$$
ROI = \frac{Cash_{in} - Cash_{out}}{Initial\ Investment}  \tag{1}
$$

It does not require discounting and thus should be treated carefully.  The ROI for this project is 36%, a potentially misleading number.  On closer inspection, we can see that a primary driver for the elevated ROI is the residual $4,000 end-of-life value.  Were we to exclude it, or replace it with a less optimistic value, we find the ROI could be closer to -44%.  This example teaches us the importance of realistic assumptions in our modeling.  Models with poor inputs are rarely self-correcting.  I can hear you whispering it now: *Garbage in = garbage out*.  It’s the same reason why the answer to the ultimate question of life is 42.

Ok, let’s extend the example to consider a competing project.  The WTF brain trust has decided to bid on a government contract to develop a **Good Idea Machine**.  The GIM will require a capital outlay of $6,000 and produce net revenues over the next six years that grow to $2,500 in years 4 – 6.  Unlike the OBBBA project, it will have a final teardown cost of $2,000.  For simplicity, we’ll assume the same discount rate, though we could have chosen another.  In general, the discount rate applied should be reasonable for the project, even when the project is being compared to another.  Following the same approach as before, we layout our cash flows and determine the NPV:

![GIM]({{ page.image3 | relative_url }})

According to our NPVA, the GIM produces an NPV of $2,400, or an IRR of 10.6%.  Since both values are positive, the project is worth considering.  And, since both values for the OBBBA are negative, that project is best left to the napkin.  If the OBBBA had yielded a positive NPV, however, you might need to make a decision.  In a world with scarce resources, we sometimes need to decide among several viable projects.  The rule of thumb in these cases is to rank the projects by NPV and select the top ones that fit your budget.

### Routes not to be followed
Speaking of acronyms, there is another OBBBA that was one of the motivations for this article.  While it has little to do with buffing ostriches, I worry that it may leave us all with the same bewilderment.  Yes, it’s the **One Big Beautiful Bill Act** that slid through Congress to the President’s desk in June.  To set the stage, the Federal Government operates over a fiscal year that starts in October.  It has collected $4.4T in revenue in the 2025 fiscal year through July 31st.  That figure compares to $4.1T over the same period in 2024.  Nearly half of that revenue comes from individual income taxes and in total represents about 16% of GDP (currently $30.4T).  

![Revenues]({{ page.image4 | relative_url }})

Now, consider the $6T the government has spent in 2025.  The top 5 budget allocations – Medicare, Social Security, national security, net interest on debt, and healthcare – comprise over 70% of spending, with net interest nearly on par with national defense.  The difference between ~$6T and ~$4.4T results in a deficit of ~$1.63T, compared to $1.52T over the same period last year.  

![Spending]({{ page.image5 | relative_url }})

Time for a quick situation report: 
- No foreign wars requiring U.S. direct involvement – check 
- No major national disasters – check
- No national health emergencies – check.  

I think it’s safe to say the only military deployments have been domestic, neither DOGE nor the dismantling of the post-WW2 American-led liberal world order qualifies as budget ramping national disasters, and, well, let’s just say it’s a good thing the CDC is being marginalized today rather than five years ago…  So, amidst a relatively benign backdrop, at least as far as fiscal pressures go, we find government spending on the up and up.  It’s not to say there are no real threats on the horizon.  Americans are getting older, healthcare costs continue to spiral in the wrong direction, social security is estimated to become insolvent in under a decade, college graduates are among the highest un- and underemployed populations, climate change is real, so is nuclear proliferation, and the list goes on.  My point is this is all occurring despite a lack of fiscal reform.  Unfortunately, these are all sticky issues that will only get worse with time.

What is one to do when one spends more than one earns?  Well, if you are the U.S., then you can just add it to the national debt.  At $37.3T, our debt stands at 123% of GDP, and about $2T higher than in 2024.  One of the chief risks, as spelled out in the [Sorcerer's Apprentice]({% post_url 2025-04-30-magical-thinking %}), is that the net interest payments the government must make to service its debt become unsustainable.  A reliance on debt markets will work only so long as the music is playing.  Once it stops, though, the hangover will leave us dazed and confused.  

![debt]({{ page.image6 | relative_url }})

Enter the OBBBA, the administration’s hallmark budget bill for the next year and beyond.  To trivialize the Bill’s highlights, it disproportionately benefits high income earners and wealthy households at the expense of low-income earners while adding significantly to the deficit with the claim that it will spark new growth in the economy.  Under the hood it extends tax cuts on individuals and corporations that were set to expire, contributing ~$4.7T to the deficit.  It also adds an additional $700B in new tax cuts.  In all, the Bill adds $5.9T to the deficit as passed.  To offset some of those costs, it introduces $2.5T in cuts to Medicaid, Obama’s ACA, Biden’s IRA, SNAP and other programs.  The tax cuts are particularly beneficial to the wealthy, but just about everything else, including rolling back access to healthcare under the Affordable Care Act and the promotion of alternative energy technologies under the Inflation Reduction Act will further squeeze lower and middle-class households.  According to the Committee for a Responsible Fiscal Budget (CRFB), a think tank, the OBBBA as written adds $4.1T over the next 10 years, including ~$720B in interest payments to service the added deficit.  The below chart depicts the long-run growth tragectory for the deficit under a few scenarios.  **Baseline** reflects the state of the world without OBBBA, note the short-run reduction due to expiring tax cuts.  The yellow line reflects the official Congressional Budget Office (CBO) estimates assuming interest rates decline as the administration promises.  The lower red line is the CRFB's estimate of deficit growth using the CBO's optimistic interest rate assumptions if the OBBBA *temporary* tax cuts remain permanent.  Finally, the dashed curve is the CRFB's estimate assuming tax cuts remain permanent and interest rates do not decline.

![crfb_deficit]({{ page.image7 | relative_url }})

It's no wonder the President is so keen for the FED to cut interest rates.  There is a lot at stake!

While several of the Bill’s provisions are set to expire - no doubt part of the grease that helped it through Congress - the CRFB reasonably expects the most impactful provisions to be made permanent.  Just look to the TCJA tax cuts that were extended via the OBBBA as grounds for that expectation.  Temporary tax cuts are often temporary in name only, as it takes great intestinal fortitude to let them expire.  If the CRFB is right, then they expect the deficit to grow by an additional $1.4T by 2034 to $5.5T.  The additional interest obligation could rise to $836B, doubling the government’s interest expense and making it the largest component of government spending.  In finding ourselves at that milestone we will struggle to put our tax dollars to work on anything that fosters GDP growth and improved quality of life for all.  Instead, we will be busily toiling away just to service our national debt while future generations gaze upon us with scorn for squandering their future.

![crfb_debt]({{ page.image8 | relative_url }})

The above chart shows, under the same assumptions as before, the rate of growth for National Debt.  There's little more to add to the story other than 220% debt-to-GDP is a bad outcome....

Reasonable people would argue that the U.S. continues to be the largest economy with the greatest military, not to mention the world’s reserve currency.  Under that premise, we should continue to be able to win friends and influence others while borrowing from the future.  My humble response to that argument, informed through my experience and training in financial risk management, as well as a born-again interest in history, is that nothing is written.  Complacent superpowers decline, neglected alliances fade, foes unite around shared interests.  There does not have to be a single 100-year tail event to usurp the dollar’s dominance.  It can happen gradually over time, as it has been, until we wake up one morning to realize the risk-free treasury bond is no longer a thing.  When that day happens we’ll all wish we’d sunk six grand into that Good Idea Machine rather than believing the hype about ostrich buffers.

So, with that, let’s bring this session to a close.  I thought it would be fitting to end where we started, with an excerpt from *Life & Fate*.  The Germans realized their peril too late; the Russians routed their defenses with an armored attack and subsequently encircled remains of the 6th Army.  The siege was reversed, and the Germans eventually capitulated after having exhausted their ammunition and food.  We close, then, from the German perspective:

*[General] Paulus’s headquarters were now in the cellar of a burnt-out department store.  The established routine continued as usual: superior officers came and went; orderlies prepared reports of any change in the situation or any action undertaken by the enemy.*

*The continuity, of course, was illusory; a vast number of changes had imposed themselves since the beginning of the encirclement.  You could see these changes in the colour of the coffee, in the lines of communication stretching out to new sectors of the front, in the new instructions regarding the expenditure of ammunition, in the cruel, now daily spectacle of burning cargo-planes that had been shot down as they tried to break the blockade…*

*…The changes were obvious enough.  Those who had previously had plenty to eat now went hungry.  And there were changes in attitude: pride and arrogance softened, there was less boasting, even the most determined optimists had now started to curse the Fuhrer and question his policies.*

*But there were also the beginnings of other, deeper changes, in the hearts and minds of the soldiers who until now had been spellbound by the inhuman power of the nation-state.  These changes took place in the subsoil of human life and mostly went unnoticed.*

*This process was as difficult to pin down as the work of time itself.  The torments of fear and hunger, the awareness of impending disaster slowly and gradually humanized men, liberating their core of freedom…*

*…Over their heads hung a terrible frozen abyss.  Frosted tin stars stood out against a frostbound sky.  Who among these doomed men could have understood that for millions of Germans these were the first hours, after ten years of complete inhumanity, of a slow return to human life?*

![the end]({{ page.image9 | relative_url }})

**Note:** This post is not investment advice.  Any opinions stated are my own and do not reflect those of my employer.  This post is meant to be educational and entertaining.  If you find it useful, then please let me know.  If you think it sucks, well, now you know that you can use my loathing of the cold against me..

#### References
1. [USA Spending.gov](https://www.usaspending.gov/explorer/agency)
2. [Treasury.gov](https://fiscaldata.treasury.gov/americas-finance-guide/federal-spending/)
3. [Committee for a Responsible Fiscal Budget](https://www.crfb.org/blogs/whats-one-big-beautiful-bill-act)
4. [Wikipedia-Stalingrad](https://en.wikipedia.org/wiki/Battle_of_Stalingrad)
5. [Life and Fate, by Vasily Grossman](https://www.amazon.com/Life-Fate-Review-Books-Classics/dp/1590172019)
