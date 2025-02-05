---
title: "The Before Time: Trying WooCommerce"
---

When this article launches, I _should_ have officially launched my big webshop project. A new website connecting _all_ my work, allowing you to buy escape rooms, quizzes, games, merchandise, and more. Hopefully a cozy home for the long-term future, which both gives me an outlet for everything I make _and_ allows me to earn an income.

Launching such a large webshop obviously isn't a simple task. Multiple articles will release about the entire journey towards building it. Because _of course_ I had to pick a custom solution that I almost entirely _built from scratch_. Of course my hyperactive brain wanted to actually _know_ how all of it worked, and to code most of it myself, and to keep full freedom and ownershop over my store.

I did research and created a plan for about a week, then I started actually building this new website. I had already learned that it was impractical to attach a small webshop to every existing website of mine. Because of the way my hosting is set up, I had also already "accepted" that I simply _could not_ use any pre-made webshop solutions.

A few days into that process, however, I realized something. 

I still _had_ a running WordPress installation. I still _had_ a server that _could_ simply install an existing webshop system for free.

This server was a simple shared hosting, which had served my old Dutch blog (_Niet Dat Het Uitmaakt_) for nearly 10 years. That blog has been completely supplanted by my newer website---the one on which you're reading this article. There has been no reason for it to exist for a while now, but I'd paid for hosting annually, so I still had some months left before it was shut down.

You know what's the _one_ advantage of WordPress? You can install "WooCommerce" on it for free, which is a completely functional webshop integrated with any provider you'll ever find. In other words, I was quite certain that I could set up an experimental webshop on that old domain in less than a day.

_Why?_ Well, to experiment, and learn, and gain experience with _selling merchandise_ and _integrating a webshop with other platforms_. Any step I'd need to take for this one would be (nearly) the same as for my own webshop. But because I get an existing system (WooCommerce), there's no real risk or hard challenges that could stump me.

And so, at the start of 2025, I "cleansed" the old domain (removing all posts, media, etcetera) and installed WooCommerce. 

* This is a simple as looking up the plugin and pressing "install".
* Then I could simply go to my merchandise platform (in this case, Printify) and pick Integrations > WooCommerce. It automatically connected.
* As soon as I made a quick test product, it automatically sent it to WooCommerce. It appeared a few seconds later, with all the right images and metadata attached!
* I installed a free basic theme (_Storefront_) ... and a webshop existed! 

Not very pretty, of course. Barebones. Only one (ugly) product. But it was _fine_ and it _worked_.

As expected, this was _really quick and easy_. Compared to building your own system from scratch, this is obviously much smoother sailing.

Was I making the wrong choice? Should I just stay subscribed to this hosting and use WordPress for my webshop instead? I was really doubting myself now.

Once the initial satisfaction wore off, I stoically continued my plan. Add more products. Make the webshop more alive. Actually make sure I can receive payments and I comply with requirements for that. This is where I hit my first snags.

**Snag #1:** WooCommerce _really_ wants you to use their integrated system for accepting payments and managing that. This is fine, of course, except for the fact that this is _not straightforward_.
* You have to make an account ... and then another account (with Stripe) ... to do this.
* If you stop halfway, it will stay in limbo forever and keep bugging you, unless you manually choose to "reset everything" (risking losing other progress).
* It's not really clear on whether it costs money and/or how much of a cut it takes from your profits. 

Maybe it's _great_, I don't know. Many people use WooCommerce, and many use their integrated system, and they seem happy. But I heavily dislike having to make multiple financial accounts, accept multiple sketchy terms or checkboxes, jumping through hoops without actually knowing the cost of all of that.

I decided to bail out. I wanted to use a different provider anyway for my "real shop", so I decided to just use _that_ as the only thing. This was much easier.

* All these providers have their own plugins that directly integrate with WooCommerce.
* I installed it, added the secret token from my payment provider, and it was done.
* (Though, at that moment, the website wasn't verified yet so I could only use it in _test mode_ with fake payments. But the fact that _test mode_ worked instantly and flawlessly was a good sign.)

**Snag #2:** WooCommerce wants you to install even _more_. But one of these other things, I discovered, is something you _really want_. That's the WooCommerce Tax integration. It automatically calculates and handles tax calculations for you, which would otherwise be a royal pain in the butt---I know, because I made a webshop by myself, remember? :p

Also, it took me a while to get confirmation for this, but the Printify integration (and I suppose others too) automatically submits and handles shipping fees too. I'd have expected some settings here to turn that on/off, or override it, but I couldn't find anything. It's just ... whatever the platform decides is the shipping fee at the final moment of checkout, I guess that's it!

**Snag #3:** The (free) default themes for WooCommerce are very, very barebones. Both visually and functionally. The one I picked, for example, gave me _one_ extra page called "Refund & Return Policy" with some boilerplate text about it. 

A webshop needs much more than that. A Privacy Policy. Terms & Conditions. Shipping Fees and Methods. All these things need to be defined on some page, if not for the user---most never read any of that shit---then for legal/corporate purposes.

Similarly, the visual design was just black-and-white with more whitespace than actual design elements. I don't think it looks appealing at all, but all the other themes were somehow _worse_. I guess that's my problem. I don't like such "modern" and "stark" looks, I like things with rough edges, with some live to it, with more natural tones and curvy shapes. 

That's another reason I wanted to fully design my webshop myself. Despite having a solid chunk of customization options within WordPress _and_ WooCommerce, it's still far from enough. It's just way too hard to make things look better, consistently, improving upon a given base theme. I decided to let things be for this experimental webshop.

But with those steps taken ... it is done! People could visit the website. My first few merchandise products appeared without issue. Everything could be searched, bought, changed to different variants (such as different colors/sizes of the same shirt), all the usual stuff.

This took me a single evening. Granted, I am a very experienced web developer, WordPress developer, server manager, and---since a few weeks ago---deep into research on webshops and payment gateways :p But if you were to find the absolute cheapest WordPress hoster possible, you could have a fully functional webshop for almost no yearly fee at all.

{{% remark %}}
For example, this system could run on a hosting plan that costs 50 cents per month. You'd only need to upgrade once you start hitting serious numbers of visitors and sales, but, well, then you'll have the funds!
{{% /remark %}}

Despite the restrictions, some ugly design, and some uncomfortable tactics here and there ... I was pleasantly surprised by this. It all just works. At no point did I need to give my credit card, or pay anything, while I was able to design whatever merchandise I wanted and then place it in the shop.

As such, I feel I can actually recommend this setup. A cheap hosting, with WordPress and WooCommerce, and then a payment provider you trust and understand in the backend. Certainly much easier than creating your own custom webshop from scratch. 

At this point, I wrote down a "backup plan" to actually continue this setup if all else failed.

But, of course, the real interesting data comes over time. Did people _find_ this webshop? Did I have any sales? What else did I learn by being able to freely experiment with a shop and its products?

Well, through this process of quick iteration and pumping out products, I mostly arrived at the general wisdom you can also find online.

* Offer the customer choice, but not too much. When I accidentally enabled _all_ variants on a T-shirt, I was completely overwhelmed by how much stuff was added to the shop. How many options, buttons, dropdown lists, and more this single product page had. It was just _too much_. And if I think that, then surely customers think that. 
  * Lesson? Provide 2--5 versions of the same thing, but don't go overboard.
* At the start, I created whatever merchandise came to me. And it led to a disjointed shop with no clear reason to buy here, or what the products were even trying to accomplish. Then I found a few "gimmicks". A simple idea that could attract certain people and around which I could "brand" multiple items. Things went far more smoothly then, and the shop looked more professional. 
  * Lesson? Merchandise follows the same rules as books, and films, and any other "franchises". Try to establish a certain brand identity, a certain gimmick or rule, then create multiple things around that. Like, well, literally like a _brand_. 
* This might be personal preference, but I kept my descriptions really succinct and left it at that. Nobody is reading the endless platitudes about how _amazing_ this fabric is and how incredibly _sustainable_ this one fiber is.
  * Lesson? Less is more. Just state why you made the thing and why it might excite someone else, leave it there.

Most of all, though, I saw---again---that the saying "build it and they will come" is obviously not true. Without marketing, without other things already linking to your products, without getting through _somewhere somehow_ ... nobody is finding your shop. And you need at least hundreds of visitors to make a few sales, if you have "normal" conversion rates.

So, in the end, what did all of this bring me? Besides the experience gained and lessons learned, besides making the best use of server space that I'm losing anyway, what did this little experiment do for me _financially_?

@TODO: Finish with final data, then publish
