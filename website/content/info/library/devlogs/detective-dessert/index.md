---
title: "Detective Dessert (Devlog)"
date: 2025-06-01
---

Welcome to this short devlog for my game ["Detective Dessert"](/gamiverses/themed/seasons/summer/detective-dessert/). It started out as a small, fun addition to my list of small, fun "summer games".

Somehow, it always happens to me that the smallest ideas end up big and the biggest ideas end up small. In any case, this idea received far more educational value than I originally realized, and then it felt bad to _not_ realize that potential. That's why you're reading this devlog now for a relatively tiny game!

## What's the idea?

I've been playing lots of _Bomb Busters_ lately. It fits my style of games (on the online store) perfectly, as it is family friendly, cooperative, based on logic and math, etcetera. I learned a lot from it and was inspired to put my own twist on similar ideas. (I also played a lot of "Da Vinci Code" as a child, by the way, and my family dubbed Bomb Busters "Da Vinci On Steroids".)

I wanted to make a summer game where you were _holding ice cream cones in your hand_! It seemed such a natural and fun idea. Instead of cards, just cut out ice cream in specific recognizable shapes, and hold that in your hand. Great!

But what's the game?

I quickly realized that you now had a nice balance of "public and private information".

* _You_ can see what's on your ice cream (private)
* But _everyone else_ can also see the general SHAPE of that ice cream (public)

I realized this was perfect for a (heavily) simplified Bomb Busters-esque game.

* Everyone gets random ice cream with numbers. You sort them numerically (low->high).
* You can't communicate them in any way, of course. This is the secret information that you spend all day figuring out.
* Everyone else has to _guess_ the numbers in other player's hand. Because you can see the shapes, you get clear hints as to what the numbers might be.

If I just gave every ice cream a "rule", like "this ice cream is always a multiple of 5", then you would be able to deduce what numbers are where!

Great. Let's get started.

## Ice Cream Rules

### Where do we even start?

I knew I wanted your "first game" to be playable with just 3 or 4 ice cream types. Adding more would just overwhelm players. Once you are familiar with the game, you can easily chuck in a handful more ice cream types to make it more difficult.

I needed 4 rules that were _very simple_ (understandable by young kids too) but _covered all the numbers somewhat evenly_.

At first, I wanted every number to appear exactly _once_. That felt clean and minimalist. This proved impossible, however. It's really hard to come up with ~10 simple rules ... without EVER having a number that another ice cream also covered.

But this was fine, because this idea was actually _undesirable_ too. I want to say "This ice cream has all multiples of 5", instead of "this ice cream is _a_ multiple of 5" ... and players have to learn/remember, over time, which multiples are actually included and which are not.

By making rules "exhaustive"---ALL numbers that match are included, no exceptions---it's far easier to remember the rule and play with it. The consequence, of course, is that many numbers appear 2--4 times in total, because different ice cream flavors include it.

In the end, I even realized that the most interesting/tough codes in Bomb Busters usually came from someone having multiple/many of the same number. The fact that numbers _can_ be the same, a few times in a row, is actually a _benefit_ to a puzzle game like this. It suddenly adds lots of variety to what would otherwise be a very straightforward "solve".

Okay, that allowed me to come up with better and cleaner rules. Second question: _what's our highest number?_

I randomly picked 50 at first, probably because that was the maximum number in some game I finished yesterday. But that's obviously way too much. If we have a rule like "this ice cream has all multiples of 5", then that ice cream would already appear _20 times_! Impossible to solve, way too much material.

Instead, I checked the few rules I'd invented (and liked) so far and decided to cut them off once they had (at least) 4/5 numbers. It meant the ice cream appeared a handful of times, not too rare and not too abundant. The magical number where this happened was **25**.

For example, the "multiples of 5" now has these cards: 5, 10, 15, 20, 25. A nice short list, a simple rule, great.

The reason I keep giving that example is because it's a very simple one. But also because it highlights the educational angle of this game. I realized that we can learn "mental math tricks" by designing the ice cream around them! This ice cream teaches you that multiples of 5 are nice and easy and round. Another ice cream ("always one before or after 5") teaches you how to use those nice numbers to calculate more annoying sums. And so forth.

Which leads me to ...

### The base game

I wrote down a list of 20+ "rules". Most of them were too convoluted or had too many/too little numbers in them. The four that I liked the most, and covered most of the numbers equally, were chosen for the base game.

* A = Multiples of 5 (5, 10, 15, 20, 25)
* B = Squares (_num times num_) (1, 2, 4, 9, 16, 25)
* C = Only a single digit (1, 2, 3, 4, 5, 6, 7, 8, 9)
* D = Prime numbers (_not a multiple of any other number before it_) (2, 3, 5, 7, 11, 13, 17, 19, 23)

Yes, some of the very low numbers are duplicated and a few numbers are missing. But that's fine. This is the selection for first games. In fact, you can decide to just "leave out" numbers higher than 15 or 20 now, for an even simpler first game.

I ended up making Prime numbers optional here too, basically reducing your first game to just A, B and C. Prime numbers are quite easy to understand, and many people know them already, but it also has an air of "this is difficult math run away!" to it. Some people are just scared of the word, I guess. I remember explaining an older game of mine and mentioning "prime number" in passing, only to almost literally see people shrink and cringe and lose interest in the game. So that's a change I'm making because of ... human nature. Prime numbers were easiest to cut out anyway, because they add _a lot_ of cards (9)---perhaps slightly too many for a first game.

The other ice cream I selected for the "base game" (after your first game) were

* E = One before a multiple of 5 (4, 9, 14, 19, 24)
* F = An even number greater than 10 (12, 14, 16, 18, 20, 22, 24)
* G = An odd number that contains no 1 (3, 5, 7, 9, 23, 25)
* H = Last digit is always 3 or 7 (3, 7, 13, 17, 23)

Again, these were designed to add ~5 cards each. And to be simple rules that injected some rare numbers not covered by anything else.

For example, E used to be "one before OR AFTER a multiple of 5". And although that's more "educational", perhaps, it also simply yielded too many cards. Switching it to just "before" is much cleaner and simpler.

With these additions, we finally cover all numbers between 1 and 25 in a _somewhat_ equal fashion.

{{% remark %}}
I'm not naming these ice cream shapes yet because, well, I haven't made a list of all common shapes/flavors/types yet and haven't assigned any ;)
{{% /remark %}}

### Expansion 1

One "shortcoming" of the current game is that it lacks a bit of spice. Something exciting, something to shake it up, something that means it's _not_ just a raw brain-churning logic puzzle.

As such, that was the first thing I wanted to add here: ice cream that _depends on the situation_. They depend on neighbors, ice cream already revealed, etcetera. From experience, I know it's very easy to go astray here and make things that are far too convoluted. That's why I kept it to just 4 types that are as simple and consistent as I can make them.

These ice cream always have a "seed number" that's 1, 2, 3, 4 or 5. It's not their actual number---as stated, that depends on the context---but that number is _used_ to figure it out. By keeping it consistent and low (juts 1--5), this is far easier to remember and reason through.

* I = Place next to ice with a matching digit. (Example: "4" fits next to "4" or "14" or "24".)
* J = Place next to ice that's a multiple of my number. (Example: "2" fits next to "4" or "6")
* K = Place between two ice that have a numeric difference equal to my number. (Example: "3" fits between "4" and "7", as they are 3 apart.)
* L = Place at the position in your hand (left->right) equal to my number. (Example: "2" is placed as the _second card_ in your hand.)

There's a chance you _can't_ place such a card. In my quick testing, this is rare enough to just accept it. In that case, always place the ice cream at the _end_ of your hand to signal this is the case. (This has the nice benefit of also being a valid placement for some of these, so players have to _deduce_ if that card couldn't be placed OR is actually a specific card that belongs there.)

I also added the few remaining good ideas for ice cream here. They're not strong enough for base game, but also not bad enough/useless that I want to cut them completely.

* M = All digits summed equals 4 or 6 (4, 6, 13, 15, 22, 24)
* N = One digit minus the other equals at most 2 (10, 11, 12, 13, 20, 21, 22)
* O = Multiple of 6 or 7 (6, 7, 12, 14, 18, 21, 24)
* P = Contains 9, 17 and 23---twice each.

All these different cards just provide different ways to look at numbers and see patterns. Especially when playing with younger kids this should build a lot of experience and intuition with numbers and their manipulation.

### Expansion 2

The _second_ "shortcoming" for games like this is the lack of other things to do than ... guess. If you're unlucky with your cards, if things don't work out or your brain is foggy, then you're literally _guessing_ and not doing much deducing or feeling good about any of it.

Bomb Busters solved this really well with _gadgets_. Once you've revealed the wires of a certain number, a gadget unlocks and you can use it to get a special (helpful) power.

We can do the same thing! This expansion adds only _one_ type of ice cream, but each instance of it has a _different_ action written on it.

I basically just added gadgets into your _hand_. The issue with that, however, is that assigning a _number rule_ to the action ice too is too much. It's convoluted, having _two things_ on a card to read/remember, and it even allows people to instantly know what specific action/number you have after a few plays just by seeing where it is in your hand.

So, instead, I added the rule that you **put the card back after doing the action**. However, _how_ you put it back is subject to change. That's the part that "obfuscates" its number, while also giving subtle hints to some players depending on what you do.

This is what I ended up with:

* You say "I take that action" and show the ice cream that lets you do it. 
  * You can fully _reveal_ the card's contents, because its number will change soon anyway.
  * Action ice simply has random numbers for this initial placement; no need to know or memorize these beforehand.
* After doing so, you read the "put back"-rule on the card. It gives you a _card in your hand_, and you place this one next to it. It assumes the same number as that card too.
  * For example, "Put Back = first card greater than 10."
  * "Put Back = last card that shows an 8"
* You follow that rule. The card now has the same number as the one next to it.
  * Now you can't take that action again, and people just have to guess that card as usual.
  * But by how you place it back, people might be able to deduce a few more things, because that "put back"-rule is fully based on your hand and numbers.

It's slightly harder (and requires reading) than the rest of the game, which is why it's the final expansion.

The final issue here is "what if you CAN'T put it back?" Even with the simple rules I gave above, you might not be able to meet them. "First card greater than 10" ... what if you don't _have_ a card greater than 10?

The strongest solution, to me, was to simply **not allow playing it (if you can't put it back)**. Not only does it solve the issue, it _also_ gives more information to other players. If you have an action card, but never use it, they might deduce you can't "reposition" it and deduce some more things about your hand that way. It's very hard to guess an action ice without taking the action, but not impossible, and _especially_ doable if other players have special action cards themselves.

So that's what I settled on.

## Visual Design

I don't want to be stuck making the same cartoony things all the time, but ... well, a tiny little game about colorful ice cream is basically begging for that style. Making it very abstract or sci-fi or whatever makes no sense. Making the ice extremely realistic just detracts from clarity---you want people to be able to instantly recognize the _type_ and _number_, with nothing in the way.

So I ended up drawing ~20 different simplified cartoony ice cream types. I was mostly worried about making their general silhouette clearly different. Colors and all are less important. It also took some time to find the right _size_ for the card as a whole and the number on it. I want it to be as large as possible, so you can easily see it, even from across the table. But if it's too large, then you can't hold more than 3 ice cream in your hand or they'll start to overlap :p

In such cases I assume the typical player count for a game is 4, and I see that a typical number of ice cream cards would be 6 or 7. So I pick a size that allows keeping ~7 ice cream in your hand somewhat comfortably.

## Conclusion

What should've been a tiny little game holding ice cream became a much stronger deduction game with 16 different ice cream types (if you add expansions and all). And that's while discarding a large list of good ideas! About halfway through I was also imagining a _competitive_ variant, and a way to play this game but with _letters of the alphabet_ (instead of numbers). Fortunately, I'm experienced enough to know that I should just cut those ideas and leave them for a _separate project_ (if I really want). Trying to mix too many things together in one thing rarely works out.

That's how this game is still able to keep a very short rulebook and relatively little material (only ice cream cards, nothing else). I think it's very good as an educational game. Adults probably want to include the harder ice cream types, and even then the balance might shift from "too easy" to "way too hard" at a dime. It's a fine line, and I tried to balance it all, but in the end simplicity and educational games for young kids come first. 

Having said that, I'm happy with how it turned out. Just a really strong logic deduction game that has you practice all sorts of numeric things. Wrapped up in a colorful and bubbly ice cream theme that makes it look more exciting than just number-crunching if you watch people play it :p

I'm fine with taking 3x longer than I planned to accomplish that.

Until the next devlog,

Pandaqi