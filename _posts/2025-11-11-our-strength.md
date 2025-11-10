---
layout: post
title: "Our Strength"
date: 2025-11-09
categories: jekyll update
image: https://raw.githubusercontent.com/rtrimble13/TurningBull-assets/main/images/posts/nov25/tuskegee.jpg
---

November is a time of reflection.  It is a time to reflect on the year that is fast approaching its close as the warm summer days give way to lazy autumn light.  It is a time to reflect on our life accomplishments as the vibrant multicolored leaves fall to the ground, reminding us that all is temporary.  It is a time when veterans of our armed forces collectively reflect on our shared experiences to preserve American democracy.  It is when we lament the ones we served with who never came home, in one form or another.  And, it should be a time when we reflect on what makes our military great as well as what puts that greatness at risk.

Personally, I hold a close association with Veterans Day and the turning of the leaves.  The beautiful array of diversity in colors and shapes brings visual pleasure amidst the tempered light.  They remind me that all is temporary, that none of us will be here for the long term.  Yet the trees that remain after the cold sets in are a symbol of perseverance.  Those that are healthy, with strong roots, will live on to blossom again in the Spring.  They remind me of the importance of our foundations, aspirations, hopes, and dreams in fostering permanence for that which makes humanity worth fighting for.  

If you were to ask me what it is that gives our military the strong roots to project power and win on the battlefield, I will not say that it is our technology.  It is true that ours is nearly unmatched.  That is why we have been able to succeed despite being an all-volunteer military for generations.  It is also why increasing numbers of Americans can say they do not personally know anyone who has served, and why so few of our nation’s politicians have ever put on a uniform.  Our technology is a force multiplier that enables our military to be comprised of less than 1% of the total population.

I also will not say that it is the strategic aptitude of our leaders, both military and civilian, that make our military great.  There are just too many counter examples, such as the 20-year folly of Operations Enduring Freedom and Iraqi Freedom, and the Vietnam War.  Each are rife with case studies of American tactical superiority ultimately overcome by strategic blunders.  And, each of which unnecessarily yielded scores of veterans with broken minds, bodies and souls.  

No, if you were to ask me what it is that makes our military great, I will say it is the diversity of soldiers, sailors, airmen and marines who serve in its ranks, collectively.  It is their collective diversity of skills, cultural backgrounds, experiences, cognitive abilities, technical capabilities, etc., that produce winning solutions.  Our diversity enables our fighting men and women to develop creative solutions to complex battlefield problems, to make life and death decisions effectively under stress, and to maintain our humanity in the most inhumane conditions.  I challenge you to ask a veteran why they fought.  They will likely tell you it was to protect their buddies to the left and right.  Chase the question with another asking if their buddies came from the same background.  My hunch is the answer will be no.  Some will have attended college, others not.  Some might have come from upper-middle class areas like Scottsdale, AZ, while others from less well-off places, like South Chicago.  Some were probably varsity athletes, and others high school dropouts.  They will have been white, black, Hispanic, Asian, and everything in between.  There is a good chance some of them will have been LGBTQ.  Collectively, it was those buddies, and the drive to see them come home safely, that motivated that veteran.  

There is more to diversity than highlighting its effect at the individual level, though.  The benefit carries over to the organizational level as well.  To put it simply, if an organization is charged with the responsibility to reliably develop winning strategies, such as the military, then the right people need to be in the room making those decisions.  If the solution to the winning strategy is homogenous, then I concede it is only important to have present the experts who know that one problem.  However, problems that confront the military are not homogenous.  They are complex, dynamic, and often novel.  A one-solution homogenous decision authority cannot be counted on to consistently make good decisions when the problem set is heterogeneous.  Instead, the organization needs the right mix of decision makers with diverse backgrounds and experiences.  If you need the right mix of diversity, then it is important to broaden that scope of diversity as much as possible.  Afterall, the more ideas you bring into the room, the more likely you are to find the right solution to the problem at hand.  

This is not to say that standards and shared vision don’t matter – they do.  However, embracing diversity is not mutually exclusive to maintaining standards.  If that were the case, then we would not have seen the Tuskegee Airmen fly more than 15,000 sorites in WWII logging kill-loss ratios and earning distinguished citations rivaling their white counterparts.  We also would not have seen the Navajo Code Talkers influence the tide in the Pacific by enabling a step-change in our operational security capabilities.  The airmen and marines of these units overcame extreme prejudice to serve for a shared vision of a country they believed in.  If anything, the standards were increased for them rather than reduced.  

The Secretary of War has declared, “the single dumbest phrase in military history is ‘our diversity is our strength.’”  He argues that the military’s required focus should be on unity, shared purpose, merit, individual performance and that emphasizing diversity risks undermining cohesion and the war-fighting ethos.  His policy actions have included eliminating Diversity, Equity & Inclusion (DEI) programs across the Department of Defense and instituting a strict merit-based admissions and promotion regime.  Implicit in his view is the assumption that heterogeneous representation is a distraction from unit discipline, training, cohesion, and physical standards.  He and I would probably agree that every uniformed member of the armed forces is at first a rifleman.  We likely diverge from there.

I’ll frame my argument mathematically:
Let’s first see the armed forces as a system of interacting agents, each bringing capabilities, experiences, cognitive frameworks and physical aptitudes to the whole.  Our goal is to maximize combat effectiveness ($$E$$).  

 - Let a fighting force of *N* individuals, each with a distribution of attributes (physical, cognitive, cultural, linguistic, experiential) represented as vectors $$\boldsymbol a_i  \in \mathbb{R}^d, \quad i=1, \ldots, N.$$
 - The unit's overall effectiveness *E* is some function of the $$\{\boldsymbol a_i\}.$$  For simplicity we suppose

 $$
 E = f\!\left( \frac{1}{N} \sum_{i=1}^{N} a_i, \; \operatorname{Var}(a_1, \ldots, a_N) \right)
 $$

 where $$f$$ is increasing in the mean capabilities (first term) and also increasing in the diversity/variance term, subject to coordination costs.
 - More precisely:
 
 $$
 E = \alpha \cdot \bar a + \beta \cdot D - \gamma \cdot C(D)
 $$

where $$\bar a = \frac{1}{N} \sum_{i=1}^{N} a_i $$ is the mean capability vector (projected to a single number for simplicity);

$$ D = \operatorname{Var}(a_i) $$ is the scalar measure of dispersion/heterogeneity;

$$ C(D) $$ is a cost of heterogeneity (e.g., coordination cost, communication friction) which is increasing in $$D$$; 

and $$\alpha, \beta, \gamma > 0$$

We can interpret this model in the following way:

 - The $$\alpha \bar{\boldsymbol a}$$ term is the average ability of the force.
 - The $$\beta \boldsymbol D$$ term recognises that heterogeneity enables complementarity, innovation, unexpected capacity, and resiliience under uncertainty.
 - But there is a trade-off: too much heterogeneity can raise $$C(D)$$ (e.g., language barriers, divided culture, trust issues, etc.).
 - A key strategic insight: one seeks the $$\boldsymbol D^*$$ that maximises $$E$$.  That is:

 $$
 \max_{D} \big( \beta D - \gamma C(D) \big)
 $$

 subject to met constraints (e.g, fixed $$N$$ and a minimal capability threshold).

 Under plausible assumptions (e.g., $$C(D) = kD^p$$ for some $$p > 1$$ and $$k > 0$$), the optimum occurs at

$$
D^* = \big( \frac{\beta}{\gamma k p} \big)^{\frac{1}{p - 1}}
$$

Thus, **there is a non-zero optimal diversity.**  A homogeneous force, i.e., $$D = 0$$ fails to capture gains from variance, while a wildly heterogeneous force (very large $$D$$) suffers from high coordination cost and thus falls short.

So, really..  what does this mean??  I would say the following:

 - In uncertain environments (fog of war, asymmetric threats, rapidly shifting technology) the payoff from varied backgrounds and cognitive frameworks goes up: the term $$\beta$$ effectively increases.
 - If you only recruit clones of the same type of individual, you may optimise for the known threat set, but you will be brittle when the threat set changes.  Heterogeneity gives adaptability.
 - In the high-stakes game of War, always played with incomplete information, we should want maximum coverage of perspectives, backgrounds, and experiential heuristics.  Diversity offers that.

The Secretary of War believes that $$\gamma C(D)$$ is so large, or $$\beta$$ is so small, that the optimal $$D^* \approx 0$$.  To him, diversity is a liability, not an asset.  And, on this point, I disagree with him.  With the *right* leadership in place to create vision, set priorities and maintain discipline, then the coordination costs can be much smaller than the diversity benefits.  

Imagine where the next John Basilone might be in a future American war.  It could be the nerdy video gamer who pilots kamikaze drones for 15 days straight on 20 minutes of sleep in-between missions, all in an effort to protect *his* buddies who are pinned down by an onslaught of autonomous enemy drones.  Or, it might be the cyber warfare genius who decided to answer the nation's call when all of our critical infrastructure became compromised rather than pursue that PhD, and who just happens to be gay.  History teaches us one constant in warfare.  Each new war is different than the last.  The military owes it to our America to prepare responsibly for the next one.

On this Veteran’s Day, in addition to the collection of finest Americans I will ever know who did not come home from Mosul, Iraq, there are two people, alive and well, who will be in my thoughts.  One is a West Point classmate of mine.  He was near the top of our class academically and served as an infantry officer until he was forced to depart the Army under its “Don’t ask, don’t tell” policy.  The other is also gay.  She was the commander of the support battalion I served with in Iraq.  She was tough as nails, yet fair.  She was a rifleman first, and a true leader.  Together, they were extremely talented officers who did not fit the mold in some insignificant way.  I can’t imagine how difficult it was for them both to serve their country honorably under the constant knowledge that they were inherently unwelcome.  I think their stories are worthy of reflection.

