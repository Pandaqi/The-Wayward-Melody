---
title: "Knights of the Round Table (Devlog)"
date: 2026-01-01
---

Welcome to this devlog (or "developer diary") for my game [Knights of the Round Table](/gamiverses/level-1/maths/knights-of-the-round-table/). I always keep these diaries _while_ working on the project, to write down my thoughts, possible solutions to problems, and anything else that might be interesting. I only publish them, however, when the project is large enough and the devlog actually contains enough interesting content.

Well, guess what, both things were true for this project! I did not _expect_ that to be the case, though, which is why I write (and edit) most of this devlog _after completing the game_. That's why you'll notice a lot of past tense and some details lost. 

Hopefully the diary is still an interesting and fun read.

## What's the idea?

I was brainstorming ideas for **Level 1 Mathematics** games. In this level, we're working with "pre-counters". Kids who haven't (necessarily) learned numbers or counting yet, and especially not anything beyond that (such as addition, subtraction, etcetera).

So, what is "mathematics" about in Level 1, then? It's about all the skills necessary for learning counting later.

* Matching / Visual Discrimination: identifying if two things are the same or not
* Comparing / Grouping: being able to group alike things, compare which group is bigger, etcetera

At some point, I don't know why, my brain had this image for a "Knights of the Round Table"-game.

* I could make physical 3D knights (by creating big pawns or cones), and setting up the game would just mean placing them randomly around a Round Table.
* The game itself would be about finding the "Evil Knights": the ones that **match** with the unique property of the table. (For example, a table might show a SWORD, and then all knights with a SWORD are Evil.)
* Every turn, you simply move knights onto others, until you win when **all Evil Knights are gone**. (It's a cooperative game, like most of my Level 1 games, so you play as a group and win together.)

That's the whole game. The rules seemed simple enough for very young kids to understand. It has this nice _physicality_ to it, with big chunky pawns and the intuitive action of moving them and stacking them. I could theme it around King Arthur's legends, which I (and many kids, especially boys) find fascinating anyway. 

So let's make that! Or so I thought.

## Sir Lancelot and the Many Issues

The base game I just described is absolutely fine for 3/4 year olds. They'll have to pick up the knights and study them to see if a specific feature _matches_. To them, that's a nice test/challenge of that skill.

But is it a _game_? Does it stay interesting afterwards? Can I also test the _other_ skill (of Grouping)?

I'd rather not spend days illustrating knights, round tables, icons, and more, only to get a very rudimentary exercise out of it. It has to be a _game_! One worthy of playing over and over, even as you grow in skill or get older!

And so I created 4 versions or levels.

* Version 1 = as I just described.
* Version 2 = a competitive version. Your only move is to **take away** a knight. If this splits the knights into smaller groups, then you are forced to take a knight **from the smallest group**. You **lose** if you are forced to take the last knight. (This is a typical way to turn these kinds of activities into a competitive strategical game. _Force your opponent to grab the last thing/make the last move/eat the poison/etcetera._)
* Version 3 = now knights are worth points. So your goal is to simply have the **highest score** when the table is empty and the game ends.
* Version 4 = combines all previous versions. So, you can both _move_ and _grab_ knights, including those extra rules about being forced to grab something or not.

These were fine "skeletons" of ideas, but they're not actual games yet. They _feel_ like a game, but there's not enough variety and strategy to actually make it one. 

For example, imagine a game of version 2/3.

* The first player grabs any knight.
* If the second player grabs a knight that's not at the edges, then boom, the knights around the table have already been split.
* The third player (who might just be the first one, in a 2-player game) now grabs a huge chunk of knights at once. (The "smallest group" might be as large as half the table.)
* Two turns later, the game is over, and that third player probably won without doing much.

Now, you might say "Then players should not be so stupid as to grab a knight that's not at the edges!" And that's fair. Young kids might make that mistake once and then learn from it. But what's the alternative? Maybe the knights at the edges are terrible ones, worth negative points, so nobody wants to take those. The second player doesn't have a choice---no, they'll just have a terrible time with this game as they're forced to almost immediately end the game and lose ;)

Over the years, I've learned to ask myself this question: "Suppose it's my turn now in this game, what do I _want_ to do now? And how do I go about getting it?"

A game is most fun, and has the most momentum behind it, if players _always_ have clear answers to that question. If they always know what they can get, what they want to get, and there are at least two viable ways to get it. (If there's only one, then there is no choice/strategy anymore.)

And so I started asking that question for each version, then answering it.

## Turning Ideas Into Games

### Version 1

On your turn, you want to _cover up an Evil Knight_. (Possibly you need to first _find one_.) You have two ways of doing this:

* Directly move a Good Knight to cover the Evil Knight next to itself. (_Some_ skill with matching here, as explained.)
* Or move a knight closer to an Evil one, to help someone else do it on their turn. (_Some_ skill with "thinking ahead" or "teamwork" needed here.)

This version actually answers our questions the best at the moment. There is skill and choice involved, but it's only a teeny-weeny tiny bit. 

You cannot lose this game. You can make ten completely useless random moves, and then still win anyway.

How do we change that? Without making it too complicated or convoluted? I don't want to add "loss conditions" to these games, as they just don't work well with a bunch of 4-year-olds playing games for the first time. Instead, I often add "soft loss" mechanics, which means it just becomes (near) impossible to win if you make bad/random moves.

In this case, I saw an opportunity to do that through the unique "stacking" part of this game. 

I added the following rule: 

> **You can only move standalone knights.** 

In other words, once a knight covered up another, it's now a stack and can't be moved again. Now ...

* Once you create a stack, those knights won't move again for the rest of the game.
* So you need to actually think ahead and make sure your moves will cover all Evil Knights by the end.

The one downside is that this can create games you simply cannot win. (If all Evil Knights are in a row, for example, then you can only cover up the outer ones ... and never reach the inner ones.) So I added a second simple rule that I thought was fun and wanted to add anyway.

> **The center of the table is also a space.**

You can move knights there, and from there you can move into any position. It makes a lot of sense: from the center of the table, all spaces are equally close by, so of course you can reach them all! (Though I reinforced this with the art and illustration, drawing lines from the center to all spaces for example.) At the same time, this makes every table setup solvable _and_ actually gives meaningful choice. Now every knight can move three ways (left, right, onto the table).

### Version 2

While showering that night, I realized that I did not actually need to make the game competitive yet. We could just ... keep the same objective as before!

* As a reminder: on your turn, you grab one knight. But if the knights are cut in groups, you must grab the entire smallest group.
* You win (together) once all Evil Knights are gone.

Now let's ask ourselves those crucial questions again.

* On your turn, what do you want to do? You want to get rid of Evil Knights.
* How do you go about it? You ... simply take a random Evil Knight away, always, no strategy :p

Okay, found our issue, let's fix that. Is there a way we can punish you from taking the wrong knights away? For taking too many Good Knights?

I considered a few options, but by far the simplest one was to just put it in the win condition.

> **You win once all Evil Knights are gone, but at least 3 Good Knights remain.**

Now you have actual strategy. Take away the wrong Evil Knight, and the next player is forced to take a whole group of Good Knights.

Normally I would not like introducing numbers to a game for pre-counters. But these are _educational games_ and their whole idea is to _teach_ these things. Counting if you have 3 big Knight pawns at the end is a very reasonable challenge (over version 1), then.

But, these rules can be exploited still. If the Knights just happen to be very lopsided (all Evil on one side, all Good on the other), then the game becomes trivial. Take away two specific knights, the smallest group has only Evil Knights, and tada you won the game in three obvious moves. 

Again, this isn't necessarily _bad_. Because it would be a very specific situation and three _smart moves_. But the more I tested and iterated, the more this rule of "take the ENTIRE smallest group" kept revealing exploits and games that would end far too soon.

So I changed that rule, for this version and all the next.

> **If there's a standalone group of (at most) 3 knights, you're forced to take the whole thing.**

This way, I could keep the challenge around "grouping" (that sparked this idea in the first place and fits so well with the round table!) But by limiting the maximum group size, only the strategic element remains and none of the annoying issues.

Because of this change, I could _also_ allow Version 2 to be competitive. Our old rule ("you lose if you're the last to take a knight") works again now. Because even with a lucky setup and really smart moves by the first players, the game won't be over in just a handful of moves yet. We're guaranteed an actual game and actual choices by all players.

Only one issue remained, then. On Cooperative Mode, if _somewhat lucky with the random setup_, you can still win a game by just grabbing all Evil Knights in a row without much thinking. As such, I added one tiny twist to throw a wrench into that.

> **If the previous player grabbed an Evil Knight, then you are not allowed to split the knights into (more) groups on your turn.**

This is less strict/overbearing than "can't grab two Evil Knights in a row!" or something like that. But it encourages even more thinking about groups and groupings, and it encourages more teamwork as the previous player's turn affects you even more. I made it optional though, as it is clearly the most "complicated" rule out of all we have so far.

### Version 3

Let's ask ourselves those crucial questions again.

* On your turn, what do you want to do? You want to score as many points as possible.
* How do you go about it? You take the knight that's worth the most.

It's a nice test for counting and numbers, at least for young kids, but on the surface does not seem a game.

But! Thanks to our improved grouping rule (_"must take standalone group (of at most 3 knights)"_), it's already a game.

* If you're not smart about it, then you may accidentally let an opponent grab a whole _group_ on their turn (scoring more points).
* Similarly, if you don't watch out, your opponent may _force_ you to grab a group of very bad (negative score) knights.

With those rules, you can't do mindless or random turns. You have to think ahead. Sometimes you _can_ take the best knight outright. Sometimes you don't want to. This means _choice_ on your turn, which means our question is answered.

It's not a mind-blowing game by any means, but it's a proper game, and a nice educational challenge for young kids learning to count.

That's why I made all my improvements here "optional (upgrades)". Because I saw two obvious paths forward.

* **Actions:** different seats at the table have different actions. Grabbing a knight triggers the space's action.
* **Arriving:** instead of starting with all knights already at the table, simply start with an "arrival" phase where everyone adds the knights.

I mention these two at the same time, because they work together. 

Because, when I wrote the Arrival Upgrade I was stumped on how to actually make it matter. Sure, players will try to spread out the point values (to prevent grouping all good or bad ones together), but that's basically what _all players want_. So there's no differentiation or individual strategy there. You _can_ be risky and push for really valuable/really bad groups ... but that only works if you're first player and get very lucky.

And so I thought: let's kill two birds with one stone. In the arrival phase, you place your knight at a specific seat ... and that seat _might have an action icon_! So, as a reward for arriving there, you get an "Action Token" to be used later.

This way, arriving becomes _very_ strategic. You not only decide positions, but _also_ which actions you'll get that you can use in the second half of the game. This push-and-pull is always very nice to have in games. When players are pulled towards two different things they both want, you are guaranteed to have strategic choices and interesting dilemmas.

The actions themselves are pretty basic stuff. I knew I wanted them _very simple_, with clearly medieval/knightly icons that made _some_ sense for the action. I also knew I wanted them all the same type, that is there are no "permanent effects" or "delayed effects" or whatever. Each action simply triggers right when you execute it, and then it's done.

Which leads to actions like "move one knight to any spot" or "pick two knights; they can't be grabbed until your next turn" or "you DON'T have to obey the smallest-group-rule". Because we have Action Tokens anyway, I wrote the action on the token itself, saving space in the rulebook.

{{% remark %}}
As I make all these Level 1 games, I must say that I'm often relieved when I can finally use numbers :p Being able to say "get the highest score", and then simply differentiate value of things/add score modifier actions, is such an easy and straightforward way to make games tick. This Version 3 had the fewest issues of all, as you can see, precisely because it now works with SCORING.

On the other hand, if I hadn't been forced to challenge myself and create pre-counter games, I would not have had all my best and most creative ideas to work around numbers. I would not have made this very physical and tight game at all, for example.
{{% /remark %}}

### Version 4

As a reminder, this version basically uses _all the rules from the previous versions_.

* You start with an empty table.
* You play the Arrival Phase and then the Removal Phase.
* You want to get the highest score.
* Moving works like in Version 1.
* Grabbing works like in Version 2/3.

Let's ask ourselves those crucial questions again.

* On your turn, what do you want to do? You want to score as many points as possible, and prevent others from scoring a lot of points.
* How do you go about it? You can take the knight that's worth the most. You can cover up/lock such knights for other players. You can work to get those special actions, then use them to shake things up.

Now we have our full game! Now we have a clear objective each turn and always at least two ways to try and go about it. Now doing random or mindless turns will surely not lead to good things for you.

By building up to it, I am pretty sure that even young kids can fully play this one. Because they've already seen _all_ the rules and mechanics before in the earlier versions.

But, of course, I challenged myself to add _one_ extra thing. To use this new mixture of rules to give Version 4 one unique twist to make it stand on its own.

I realized that, because we now have grabbing _and_ moving knights, we have **stacks of knights that you can move/grab**. That's new! And so I decided to use what we already had for the final polishing.

> You must grab isolated groups of (at most) 3 knights (like before). But if those don't exist, you must grab a **stack**. (In other words, standalone knights simply can't be grabbed outright.)

I was actually surprised about how many potential issues this solved. Before, you might have a game where no knight ever moved and players only grabbed one after another. Pretty boring, missed potential. Now, players literally _can't_ grab any knight at the start, because they're all standing alone. They _have_ to move them, create stacks (or isolated groups), and then the fun can start.

For simplicity, I did say that you always have to move and grab the entire stack. The game would just become messy and less readable if players are allowed to, say, only move the top knight of a stack and leave the rest. Then it would almost become more of a memory game than anything else ;)

So no, keep it simple, keep that consistent. 

With that change I was very happy with Version 4. This is a very strong game with simple rules, simple setup, and a nice physical round table with chunky pawns to move around.

... until I went showering again. Darn showers and their way of making you see potential problems. Well, not really a problem, just that there's a large first mover advantage in this game. With earlier versions, there really wasn't space for another rule or mechanic for negating this. But with version 4, we _do_ have the tools for a simple rule:

> Whoever collected the least action tokens (during the Arrival Phase), becomes start player.

Now you can actually control if you want to start. Or if you get unlucky and have the least actions, then you are compensated by starting. It's a simple thing, but it helps balance the game further.

### Version 5?

I briefly considered a 5th version. I'd been doing all this research on the knights (Sir Lancelot, Sir Percival, etc) and preparing to draw their pawns, and I thought it would be fun to create "role cards" for them all.

At the start, you draw a random Role. And it gives you some power and some weakness for this game. (On top of a funny comment or fun fact about this character, of course. Can't create my games without putting in some humor.)

But when I started to make that, I realized ... that was _it_. I just explained the only change for Version 5. You get a Role Card---read the card. Done. That does not need to be an extra page in the rulebook; that does not need to be its own version.

So I simply added them to Version 4. _If you want, you can deal a random Role at the start._

I had some more ideas, such as

* A hidden role game based on these legends, where there's one bad guy (Mordred, obviously) who tries to make the Knights fail.
* Keeping this role _secret_, and you couldn't win if you didn't grab _your specific Role knight_. (Which is interesting, but has a host of issues that would need to be solved first with extra rules or systems. Issue #1: on turn 1, some other player grabs YOUR knight, so now you're angry and have nothing to play for anymore :p)

But those were too different from what I had so far to include here. This game is already stretching the definition of "single game" with its 4 versions. I left all those ideas for some _other_ game, later, in Level 2 or 3.

I stuck to simple Role cards with simple powers/curses that a player could have for a full game, and ended it there. Think of things like ...

* POWER: All knights with a SWORD score double points for you.
* POWER: You are only forced to grab an isolated group if it has 1 or 2 knights.
* POWER: You get a free "Holy Grail" Action Token at the start.
* CURSE: You can't use the center space of the table (move into/move from).
* CURSE: You can't grab stacks with 3 knights or more.
* CURSE: You can't use Action X/Y/Z

## Sir Percival and the Visual Design

I had this pretty clear image in my head. A nice vintage wood texture on a round table, simple but strong silhouette icons for the actions, some subtle flourish (like a flag or banner) around headings and important text. When the image is that strong---which is certainly not always the case---it's "easy" to simply find references, try to make it, and then get close to it.

As such, the tables and action tokens/icons were done quite quickly. I also prettified the rules quite early on, turning headers and examples and stuff into something with more theme and color.

But then ... I had to create the knights. 13 of them. And they had to be cone-shaped! So I could not create a pretty standard knight in front-view or whatever. I had to actually take into account that you'd fold the thing onto itself to create a cone. _And_ I had to spread the key icons around the knights such that only 1/3 have a sword, only 1/3 have a shield, etcetera. (Because that's how Evil Knights are determined: those that have the unique asset depicted on the Round Table.)

As such, I basically collected as much reference material as I could, and I collected my courage, and I postponed, until I had absolutely nothing else to do for this game except draw the darn knights. And then I tried my best :p

{{% remark %}}
**Why 13 knights?** you might ask. Good question! The number of knights and seats around the table varies in all the stories. Some say 25, some say 12, some say it was an absolutely massive table with hundreds, etcetera. I focused on the gameplay first and saw that 12--16 seats was a reasonable number that was not too few and not too many. I wanted an odd number to prevent lots of ties/stalemates with the grouping mechanic. Then, when it came time to PICK the knights, I could only really name 13 popular/well-known ones anyway, and that settled the decision for me.
{{% /remark %}}

## Sir Galahad and the Extra Revelations

While creating them, though, I also realized it might be useful to re-use my illustrations for general teaching material. I'm creating all these knights, writing tidbits of lore, even creating swords and crowns to cut out so you can give them to the kids when they win the game. That's ... that's basically 90% of the work for "lesson material" or "prompt cards" about this topic. 

And when such a thought enters my brain, I just can't help but _try_ and follow through. I put extra effort into creating more illustrations (e.g. of Queen Guinevere too, who is not in the game because she was, well, not a knight nor a big fan of round tables). Why? So I could also offer that work for free to teachers, to use in an activity or lesson about all this. Which ... takes time.

And _then_ I also recently had some Eureka moments about my educational games that I can't ignore now. That kind of thing tends to happen when you make 10 games in a row. 

* I already mentioned one insight just now: giving _tangible rewards_ to young kids when they win a game. Nothing major. Just a crown to put on their head, or a little medal, or whatever fits the game's theme. It just makes the experience so much better for them than ... "hey, we've won, isn't that nice, huh?"
* The other insight was that I could make the games _more_ educational quite easily. Namely, by adding little tips and guidance for the "Guardian" running the game (such as "nudge players to try THIS if stuck" or "focus on THAT ONE RULE that they should not get wrong"). And, by adding little trivia questions or fun facts about the topic at hand.
  * This helps the teacher/parent actually reading this thing and trying to play the game.
  * This creates a perfect "warm-up", as you can ask these fun questions or tell a story, and _then_ seamlessly flow into the game. ("You want to be a Knight? Then let's see what they do all day around their Round Table ...")
  * And it's obviously educational as the kids learn some more facts about knights (or snakes, or food, or whatever the theme is)

I stand behind these ideas. With more experience, I discover these things and instantly see how much better they make the whole game and the whole package that I sell. But they obviously take even _more_ time, adding another page full of precise content to the rulebook, and it all adds up to drag out the tail end of development of any game.

It's like that famous saying in game dev: "When you've finished 90% of the game, it's time for the other 90%." Actually creating the game has become only a small part of the work, or so it often seems.

## Sir Tristan and his Final Words

In the end, I powered through and got everything done, and then the game was finished! 

{{% remark %}}
Well, it always takes a few hours to create example illustrations for the rulebook. And some header/banner for on the website. And write the explanatory text, and upload the right files to my server, etcetera. But there's nothing interesting about all that.
{{% /remark %}}

This game isn't necessarily the one that took the longest (of all Level 1 educational games I made so far) or was the hardest. But it felt ... important, somehow? I felt like I had to make this, so much so that I ended up pulling it forward in the schedule. (I only planned to look at this idea and similar ones in a year's time, actually. Because it contains numbers and I'm still finishing Level 1 and not starting on Level 2 yet.)

It is, I guess, the perfect marriage between a lot of things I needed to practice/explore, and a lot of things that good (educational/young-kid-friendly) games need. There's this physical "craft" aspect with creating the knights and table. There's the ultra-simple rules that are intuitive to kids and still challenge them. There's the attractive theming that runs through it all, and that forced me to up my game on the illustrations and design.

That's why this game took much more time to make than I planned or wanted at first ;)

That's why this game is slightly more expensive than the others. But it's also why I recommend it on the online store and put some more marketing behind it. I think it's a great product for many people to try. With version 4, you have a proper full game that even families and adults will find interesting and can play over and over.

Yes, version 1 and 2 (maybe 3) are not mind-blowing and barely a game, and it's sometimes hard for me to get over that. But I have to remind myself that I am an adult who's been playing and creating games for 20 years. _Of course_ I want _more_ challenge and creativity and strategy and mind-blowing game mechanics. Young kids, who are just learning these things, absolutely need these extremely simple rulesets and physical pieces to play around with. And I think those early versions achieve that _while_ being just "game" enough and building to the full game in the end.

And those were all my notes!

I hope some people buy the game and enjoy it, until the next devlog,

Pandaqi / Tiamo