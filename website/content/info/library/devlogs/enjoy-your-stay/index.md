---
title: "Enjoy Your Stay! (Devlog)"
---

Welcome to this short devlog on how I developed the game ["Enjoy Your Stay!"](/gamiverses/themed/summer/enjoy-your-stay/) I mostly wrote this because I had to think my way through some problems/balancing issues halfway through. That's why it's quite short and skips a few things. Nevertheless I hope it's interesting to read.

## What's the idea?

The game "Hotel" (or "Hotels", or "Hotel Tycoon") is a classic known to many. We played it a lot at home too and, before we got any better board games, saw it as "the better version of Monopoly".

That was many years ago. Since then, I've discovered way way better board games, the entire hobby has grown massively, and I've designed many games.

And so I woke up one summer morning, ready to work on my next "summer product" for the online store, and thought: "What if we make Hotel ... but better?"

Well, "better" isn't really the right term. It's just the easiets way to summarize it: "We make X but better" I simply have different preferences and different goals, and I wanted to create a version that suited me more. If there was ever a time to make one, it would be as part of the summer holiday batch. 

And so I decided on a few requirements.

* The "hotels" would be much more **geared towards tourism**, resorts, holiday, etcetera. (As opposed to the original game that has many different buildings that are just, you know, basic hotels that people use year-round.)
* No extra requirements! I want all my print-and-play games to actually be _print-and-play_, so I had to find a way to **get rid of the dice**.
* More variety. Not a fixed board with just a few hotels and that's it.
* Better balancing. The original game (just like Monopoly) has a massive luck factor and can feel just ... punishing and annoying to play.

How do we achieve this?

* I quickly asked AI to give me a list of possible "hotel-like places", threw out most of it, and kept the ones I felt would fet.
* Instead of dice, let's print _numbers_ next to spaces. You simply pick one of the two numbers and move that many spaces. (This will change later---it always does---but I'm just showing the original idea here.)
* Instead of a fixed board, let's build a circle ("race track") out of tiles. By randomly placing them, the order of things is always different. Actually _buying a hotel_ means you literally _replace your current tile with the hotel tile_. (And by offering ~20 different hotels, you get a lot more choice and variety here too.)
* I gave the base game only 4 "special action types", and one of them is literally that you get free money. BUT you only get it if you actually need; if you already have more money than a certain threshold, that square does nothing for you. 
  * Additionally, you don't keep playing until one player remains. You play until one player is _broke_ (which is _harder_ now because of my changes, so it doesn't happen too quickly). Your final score is both your money AND your real estate value ( = the hotels you bought and upgraded), so even the broke player could win in the end.

This was a solid start, so I got to work laying down the framework and testing parts here and there.

## Movement Troubles

When I made the tiles, I realized they were too small. I could fit only ~3 spaces per tile.

Then I remembered seeing other games with a "race track" board like this, and they usually had _different lanes_. Like how, on an actual race track, the road is wider than exactly one car ;)

This solved basically all issues.

* By adding 2 lanes, we have 6 spaces per tile.
* By default you _must move forward_ (can't go sideways or backward). 
* BUT some spaces have an arrow/bridge between the lanes, and that's the only place you're allowed to switch lanes. This actually means you have to think ahead and be tactical about when you switch, or end up being locked into having to pay for someone's hotel.
* By simply adding 2 numbers _between_ those 6 spaces (on their 4-corner intersections) I received an even more tactical situation for free: the first two and last two squares only have _one number_. You HAVE to move that number of spaces. But the middle two squares are next to _two numbers_, so you can choose.
* Finally, you jump OVER other pawns. You can't share a space with them.

You see, the thing that makes Hotel/Monopoly work is that you _have_ to move (as the game tells you) and it _has_ to be forward. You can't just easily prevent landing on someone else's property. 

In my first idea, in my game, you _could_. You could simply look at the numbers, do some simple counting, and _make sure_ you didn't have to pay anyone anything for the next 5 turns.

With this change (two-lane, pawn-blocking) you get a bit of randomness and choice. You can think ahead and strategize, but others can outsmart you and still send you on a terrible path. 

The fact that the hotel you buy _replaces_ the tile you're on helps a lot too. Because, after replacing, the track is now _different_. (The hotel has different numbers, different action icons, some special hotels don't even have two lanes.) So even if you did plan ahead perfectly, someone else might risk buying some bad hotel very quickly just to force you to move through it on your next turn.

I also added an extra action ("taxi") that allows moving a pawn willy-nilly for even more control and choice. But I only enable it in the expansion, to keep the base game simple (and because it doesn't _need_ it now).

{{% remark %}}
Almost forgot! I also decided to assign starting spaces to players. Their pawn is simply printed on one square somewhere. This is far better than starting everyone in the same place---last player is at a severe disadvantage---or letting everyone choose where to start. Because each tile has only one pawn, and there are 5 pawns to 12 neutral tiles, you're highly likely to be fairly spread out at the start with nobody having a clear (dis)advantage.
{{% /remark %}}

## Balancing & Expansions

While finishing the base game rules (and list of materials I'd need to make), I always subconsciously start listing things for the expansions. These are usually things like "it would be nice to be able to do X" or "this part of the game is always the same now, can an expansion shake it up?"

The biggest problem area was still the _balancing_.

Hotel (and Monopoly) are based on, well, capitalism. And in that flawed system the rich get richer, the owners start owning even more, the lucky get luckier. If you're lucky and buy a nice hotel at the start, it will generate revenue _the entire game_, making you richer and able to buy better hotels later, making you even richer, and so forth. For everyone else---who has to keep paying _you_ and can't buy anything themselves---it's the other way around. A very annoying downward spiral.

As such, I really wanted to find a way to make the game enjoyable for all players and prevent it just being a simulator that proves (to half the players) why capitalism sucks.

What "softens" the edges of capitalism? It's cooperation. It's small advantages. It's actually getting something in return for your money. 

In the base game, you are forced to stay in a hotel ... but that doesn't do anything for you! It's just an abstract rule.

Continuing that train of thought made me realize a great expansion to the game.

* You can **co-own hotels**.
* Some hotels allow you to directly invest/buy stake.
* Otherwise, if you've visited a hotel thrice, you're a repeat customer and get a benefit too.
* When someone has to _pay_ for a hotel, that money is shared between _all_ stakeholders of that hotel.

Most hotels will still simply be owned by one player. But each game will have a few that has multiple owners, generating a _small_ profit for multiple players---instead of a huge one for some, and nothing for the others. Also, this is just fun and surprisingly realistic. The tactical choice to "invest" in someone else's hotel is interesting. Especially because investing earlier is cheaper but riskier.

I combined this with another expansion that's mostly about damage control. It adds some extra actions that allow _downgrading_ or _selling_ hotels. If you need quick cash, or one of your hotels just isn't doing what it should, you can go for that and keep yourself in the game. 

This is _especially_ tactical because the final scoring is MONEY + HOTEL VALUE. If you believe the game will end soon, you might want to "cash in" and hope the game ends when you are still loaded with money.

Finally, I added a third expansion, but it's not really an expansion. Early on, I decided that the _corners_ of the board should be "anchor points" or "safe spaces". You can't buy a hotel there. They always either give money or some other benefit easily. They're a space where you can breath for a bit when you reach it, before turning the corner and going down the next lane of hotels. I feel games like this really _need_ that.

But I had some ideas and sketches left, so I decided to create a few special hotels that can be build on corners too. These hotels are far less costly/predatory, to keep corners a more "safe space", but if used right can be a good moneymaker anyway.

## Designing Hotels

The rules were finished now (text + images + expansions) and looking great. Only 1 page for base game; 1 page for really useful expansions.

I had finished the player pawns, the money, etcetera. All that was left was, you know, _the hotels_.

I knew what I needed now.

* Each hotel had a COST (for buying) and a PRICE (paid if someone else visits)
* Each hotel had optional UPGRADES (with a COST/PRICE each too)
* Each hotel had those same 6 squares that continued the board, because it literally has to slot into the board where you're standing.
* Each hotel has a small space for perhaps a tagline, or some special effect/rule.

The idea, of course, is to make every hotel "equally useful". Not equally expensive, or profitable, or whatever. Equally _useful_. 

If you have 10+ hotels, you can't just scale up the numbers. You have to make every hotel fulfill a unique role. Do something that no other hotel does. Give players (at least) one reason to choose _that one_ over _all the others_ when buying.

That's too hard to keep track of in my head, of course, so I made a list. Sorted by cost, because it felt like the most sensible choice. 

As you read the list (don't feel obligated though), notice how I'm mostly just trying to make every hotel do "something different". Most are "similar to hotel X, BUT with some twist". None of them are "similar/same as hotel X" ... and that's where it ends. I've learned this is usually the best way to do it. You want the game to remain simple and consistent, so different elements should not be _too_ different and chaotic, but it's also useless to add two different things that are functionally the same to a game.

### Topi Tipi

* COST: Very Low
* PRICE: Very Low
* UPGRADES: 0 
* ICONS: Many
* VERDICT: The cheapest thing to build. Low risk, also low reward. The many icons on the spaces are useful to all players and make it interesting for other tactics.

### Beacon Tent

* COST: Low
* PRICE: Very Low
* UPGRADES: 1 / Cheap
* ICONS: Medium (NoArrow)
* VERDICT: For a bit more money than the tipi, you also get a bit more profit long-term. The fact it has no arrow and low numbers ( = no ability to change lanes or maneouver at all) makes it interesting for other tactics.

### Light Lodge

* COST: Low
* PRICE: Very Low
* UPGRADES: 3 / 2 that do nothing, then the third gives great profit
* ICONS: High
* VERDICT: It's easy to "start" with this one, but that won't bring you far. You need to commit to all three upgrades, otherwise it's a waste of money.

### Doggo Loggo

* COST: Low
* PRICE: Low
* UPGRADES: 1 / Expensive
* ICONS: Medium
* VERDICT: The special thing is that this has one expensive upgrade that also yields massive profit. If you manage to do that upgrade, it's great value. Otherwise, it's literally mediocre.

### Homely Hostel

* COST: Medium
* PRICE: Low
* Upgrades: 2 / Identical
* ICONS: Medium
* VERDICT: This just continues a similar "cost-price" ratio as the ones before. But the difference is that it has cheap identical upgrades, so you can easily up the profit at any time, and it doesn't get more expensive along the way.

### Plaza Palma

* COST: Medium
* PRICE: Low
* UPGRADES: 3 / Cheap
* ICONS: Few
* VERDICT: This is a "middle of the pack" hotel. For a higher base cost, you get more upgrades long-term. Nothing else special.

### The WigWam Way

* COST: Medium
* PRICE: Medium
* UPGRADES: 3 / (cost = 10, price = 5) / (cost = -30, price = -10) / (cost = 40, price = 30)
  * SPECIAL: Can be done in any order.
  * Yes, the second upgrade _gives you money_ in return for worsening your hotel
* ICONS: Medium
* VERDICT: This is another "middle of the pack", but with the twist that its upgrades are wildly different and can be done in any order.

### Seasort

* COST: High
* PRICE: Medium
* UPGRADES: 2 / Medium
* ICONS: Few
* VERDICT: A more expensive one (without going overboard) that can also yield bigger profits over time.

### Ark of NoMoney

* COST: High
* PRICE: High
* UPGRADES: 0
* ICONS: Many
* VERDICT: A deluxe hotel but with _no_ upgrade capability. You pay a lot, ask a lot from visitors, and that will never change.

### Elite Spire

* COST: Very High
* PRICE: High
* UPGRADES: 3 / Expensive
* ICONS: Many
* VERDICT: This is the big, expensive, deluxe hotel. Expensive to build, but if you can manage, it will bankrupt many.

### Money Mill

* COST: The cost is _half your money_ (at the moment). So, very cheap if you're nearly broke, very expensive if you're rich.
* PRICE: Everyone else who visits afterwards.
* UPGRADES: 0
* ICONS: Few, and no second lane (it merges into the first)
* VERDICT: This is just a very funky hotel that works completely differently from everything else. High risk, high reward thing---most useful if you're nearly out of money.

### Prehistoric Experience

* COST: Medium
* PRICE: High
* UPGRADES: 3 / They _reduce_ the profit instead of raising it!
  * SPECIAL: Each upgrade turns the next two squares (left to right) into wildcards. If someone lands on them, the owner decides what action it is.
* ICONS: None!
* VERDICT: Another funky hotel with the funny idea of "upgrades actually make it worse", which is easily offset by making its spaces wildcards.

### Treehoustel (Corner)

* COST: Low
* PRICE: Low
* UPGRADES: 2 / First one is very expensive for little benefit, second one is the exact inverse
* ICONS: Many
* VERDICT: The only hotel where base cost and base price are identical. Just a cozy little hotel that does nothing grand and has quite positive icons (such as getting money) that would attract other players.

### Saf Arive (Corner)

* COST: Low-Medium
* PRICE: Medium
* UPGRADES: 2 / Really good ones, because ...
* ICONS: Many
  * SPECIAL: A unique icon that _gives_ the visitor as much money as the hotel's current price. (So, jacking up the price is easy ... but might just lead to everyone getting free money.)
* VERDICT: A nice midrange option that's quite cheap to get into/get started, but you constantly run the risk of actually giving people more money than you take from them.

### Castle Camp (Corner)

* COST: Medium
* PRICE: Low
  * SPECIAL: The price DOUBLES for every other corner hotel you own. (So, with 2 corner hotels the price is "normal", 3 or 4 and you're making very good money.)
* UPGRADES: 1 / Nothing special
* ICONS: Medium
* VERDICT: A nice midrange option with the twist that it becomes a much much more valuable one if you can snatch the other corner hotels.

### Ice Palacio (Corner)

* COST: Medium-High
* PRICE: Very low
* UPGRADES: 6(!) / These upgrades are cheap, but you need to do a LOT to get the price high
* ICONS: Many (all, in fact)
* VERDICT: A hotel that starts slow (icy), but movement is also very slow on it (people are guaranteed to hit some icons), and over time it can be upgraded to a very expensive one.

### Shark Box (Corner)

* COST: High
* PRICE: Medium
* UPGRADES: 2 / Very expensive, bad compared to others
* ICONS: Many / Every single step has a side arrow, so movement is very fluid/flexible here, but you'll probably hit at least one icon
* VERDICT: "Predatory". Very hard to avoid for other players, very easy to upgrade/modify for you, as basically all icons are good for you and bad for others. PLUS it can't be co-owned.

### Tomb Cruise (Corner)

* COST: Very High
* PRICE: Medium
* UPGRADES: 3 / Somewhat expensive, mostly the same ratio/benefit as others
* ICONS: Medium / NoArrow / Special Icon: "If another boat hotel is in play, immediately move to stay at one of those"
* VERDICT: In the first place, this is just another expensive/deluxe option (we had few so far). But the special icon makes it interesting to combine this with buying/owning those other hotels, or trying to stay _slightly cheaper_ than those other hotels so people choose to pay for you instead of leaving.

## About The Graphics

I almost forgot to include this section, because this is a common workflow for me now and I can do this rather quickly. Still I think it might be interesting to mention.

I basically asked AI to generate three pictures for me.

* The big large illustration that's the box art/marketing poster
* A set of smaller illustrations and random icons to use for, well, pawns and icons and other small parts
* A set of hotels for the hotel tiles

I only get 3 free generations per day, and like all things, I decided to see this "restriction" as a good thing and lean into it.

Because, despite my greatest efforts to write solid prompts, the AI will give me a mixture of useful stuff and random bad stuff. Some hotels looked exactly like I wanted. Others were ugly, wrong, cut off, etcetera. Some icons I could easily use; others were ugly and distorted and somehow a completely different style from the rest.

Once I have these basic images, I start using and editing them. As stated, some can be used almost as-is (after just cutting them out/removing background/minor edits), while some require massive editing and manual illustration by me. 

{{% example %}}
For example, some hotels were cut off/a different aspect ratio, which forced me to draw half the image myself to make all the hotels equally large and detailed. This is easier than just drawing the whole thing myself, because I already have colors/lines/textures/etc to go from, and I just need to imitate what the image was already doing.

One day I hope to have the money to hire artists, or the time/skill/patience to do the full illustration myself. For the time being, asking AI to do a part and then doing the other part myself is great training and at the edge of my current skill as a painter.
{{% /example %}}

I guess it took a few hours total to get the images, modify them to be exactly as needed, and then use them all over the place.

Normally I'd probably draw the icons and money bills 100% myself. But this is why I do this workflow: the AI image just happened to give me a few icons and money-like drawings I could creatively use, so I went with that. 

Basically, I use my very limited free AI credits as "let's see what I get; I'll use it as a springboard to finish the rest myself"

Why? Because this workflow allowed me to finish the entire graphic design for this game in _one day_, and I think the game looks professional and good. Additionally, it has a _different_ style from other things I made before, because the random AI stuff forced me to continue down that slightly different style and color scheme.

It's a workflow that both makes finishing projects easy and speedy, as well as allowing me to grow and experiment and learn.

Yes, my games could look even better. Yes, I probably _could_ draw it all completely manually, drawing no inspiration from anything. But it will just take too long and I only manage to find the patience/energy for this every once in a while. (Such as with the 3 complete full-page illustrated picture books I made in the past.)

I guess my best tip here is to learn many tricks to make things look "good enough" (despite there being errors or mistakes behind the image). For example, the hotel tiles have a subtle _gradient_ at the bottom (from the title up to the main part of the image). Not only does this create a smooth transition from image to text/icons, but it also hides any imperfections from my manual drawings (which are usually in that area, to "extend" the image to the right aspect ratio). After several years, I apply loads of little tricks like that by default, almost subconsciously, and it allows me to be very fast while making things look "good enough".

## Conclusion

Is it a great game? No, because Hotel/Monopoly aren't great games to begin with. That element of "rich get richer, lucky get luckier" is still there. The exact element that makes some players love the game and others hate it. The element that makes people want to _play again_, even though they are annoyed, because maybe _this time_ they will be the one getting rich. I don't like it, and I tried to twist the idea into something that's more friendly and just a better game.

And in that I think I succeeded! The new game is simpler and more minimalist, while actually allowing more tactics and strategy and gameplay. Especially the expansions make this an entire new game.

I think the art has a nice balance between colorful holiday fancypancy things and just classic simple timeless board game stuff. The hotels look striking, the iconography is clear, and with one page of rules and just a few pages to cut out I think this game is a nice achievement. I've been away from making board games for some time (4 months?), and returning to it somehow made me realize just how much I've grown in the visual design department. When I started, all my designs were either ugly or convoluted and unreadable. This design came together in two days, just because I wanted a break from my "actual work", and everyone I know easily prefers it over the original Hotel.

The hardest part was, as usual, coming up with the hotels and balancing them. Numbers were constantly changed. Sometimes I had to take a break to go for a walk or something, just to let my mind generate new ideas for the 15th hotel that _somehow_ had to be different from all that came before.

Anyway, those were my thoughts and ruminations. Until the next devlog,

Pandaqi