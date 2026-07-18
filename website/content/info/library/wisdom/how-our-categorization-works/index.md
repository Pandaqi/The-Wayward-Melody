---
title: "How Our Categorization Works"
date: 2025-03-01
---

From previous (large) websites, we learned it's crucial to have a strong _structure_ from the start. That's why we have a large list of standardized "tags" we can put onto any product to describe exactly what it does and doesn't do. And you can easily search through all our products using the specific tag you're looking for.

For example, a very common tag is the **player-count**. Most of our products are games or activities, and so it makes sense to clearly communicate the minimum and maximum number of players.

A less obvious tag, perhaps, is **double-sided-required**. This is attached to products that _must_ be printed double-sided, lest they don't work properly. (Or you simply make your own life considerably harder by printing this one double-sided ...)

These tags show up on every product page (next to the image, below the short description). A complete collection of all tags in a Faction also show up on that Faction's summary page, to make your life even easier.

Every tag has a clear **icon**, and you can **hover over them** to get a (succinct) popup describing what it means. Nice, right? We really hope this helps people navigate the large pile of possible activities more efficiently.

This structure, however, did not come about easily. It took many tries, and creating many products, to find the right words and settings. I wanted to briefly explain the issue and why this is very important to the webshop.

## The Issue

Our initial list of tags had only ~10 entries. The most obvious ones (player count, age, level, etcetera).

After creating the first products for several weeks, this list grew to ~20 entries. We stumbled upon more practical information to communicate with every attempt at making something new.

At some point, this store had ~40 products. We'd taken care to properly input their tags every time. (The longer you wait, the more likely you are to forget this later. Or make a mistake, because it's been so long since you finished that project.)

Unfortunately ... the defaults didn't make sense.

Some tags, if not mentioned, were **true** by default. For example, unless otherwise mentioned, **indoors** was **true**. Because you can play almost any of our products indoors! Another tag (that doesn't exist anymore) was **game-master-can-play**. This is **true** for almost all the products, as most activities don't have a dedicated "game master" who has to help but can't play along themselves.

But other tags, if not mentioned, were **false** by default! For example, unless otherwise mentioned, **double-sided-required** was **false**. For the vast majority of products this simply is not _required_. Another tag (that doesn't exist anymore) was **textless**. This is **false** for almost all the products (beyond Level 1), as they often require a bit of reading comprehension, and sometimes (... especially the books ...) have loads of text.

It was a mess! Some things defaulted to A, others to B, and others didn't even _have_ a clear default. This required mentioning _all_ tags with every product, but that was complete overkill. It takes too much time, most settings don't really matter, and it makes the website slower to build quite rapidly.

## The Solution

And so, after about ~50 products, we executed our final overhaul. We were pretty sure that we'd seen all practical tags we'd needed now, which puts the standardized list at _30 tags_.

Most importantly, though, **all the defaults are false**. We rewrote and repurposed tags until this was true.

For example, **game-master-can-play** became **guardian-cant-play**. Using the term _Guardian_ was now consistent and standardized throughout all the work. But you'll notice we _inverted_ the tag. It's false by default---most times, guardian can just play along---but setting it to **true** is the exception, the rare game where they must stand on the sidelines.

This inversion made some of the tags have a slightly longer description than we would've liked. But we accepted this downside for all the upsides.

Because now ... we also had a clear _blueprint_ for what _every product should be by default!_ We had a template for where every product should start its life. We had only vaguely considered this before, but now it was set in stone and proven. For example,

* By default, our products are _reusable_.
* By default, our products _can_ be printed double-sided (but it's not _required_)
* By default, our products can be printed on _any paper size_ (That is, the tag **paper-fixed** was originally inverted and called **paper-choice**)
* By default, our products _don't_ require printing in color
* And so forth!

The tag system is now completely consistent. If not mentioned, **the default is `false`**. 

When inputting a new product, we "merely" need to find the exceptions ("hey, this particular escape room CAN'T be reused after playing") and set those to `true`. 

Some properties, though, do not take a true/false value in the first place. Such as **setup**: how difficult and time-consuming it is to set up this activity. In this case,  the default value is always the lowest possible _number_ (setup = 1/5), or the option is just irrelevant (jokingly called "the _whatever_ option").

We wrote this article to explain how this works, yes, and what defaults you can expect from us. But we also wrote it to show the little things that improve a product over time. By happenstance, pursuing a clean hierarchy/categorization massively improved the consistency of everything we made after it. That's how creativity works. That's how you get better and better at something over time by simply putting in the work.

That's it. If you have any suggestions about tags to add, or tags that are confusing/not as useful, let us know!