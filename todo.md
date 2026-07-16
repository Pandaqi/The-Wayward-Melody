# To-Do

## Front Page

Front page should remove the header and immediately get you into the curriculum? 

* _"What topic will you teach today?"_
* _"Create your own curriculum tailored to your or your students' interests."_
* _We're here to make learning fun and effective. Use our resources at school or at home, as the main curriculum or educational aid._
  * Reframe "topics" as **"student interests"** or **"student passions"**? And show all topics from top to bottom, in a row, including a tagline + short description. (So viewers actually KNOW what each one means?)
  * **Unique selling point** has to be told and repeated everywhere. (Also include things like "Not connected to a religion or agenda---the world needs free thinkers, not indoctrination." and "No ads, no subscriptions, no surprises. High-quality physical resources that are yours forever.")
* ANOTHER MARKETING WRITING TIP: Focus on the destination. The improvement/benefit/transformation to someone's life. "Play our games with your kids or students and see their problem solving skills increase in real time!"

* "Help students blossom instead of wither"
* "The world's first school curriculum made of games."
* "Education that understands learning and fun are the same thing."
* "Effective education for all."
* "A new generation raised on a curriculum of games."
* "Playful education that works for you and the student."
* "No tracking, no tests, no nonsense---children are not numbers."
* "Learn from social real-life experiences like cooperative boardgames."
* "No ads, no subscriptions, no screen addiction. Teaching the natural and healthy way."

## Overall Design

* CHARMS: Add icons for all + use
* SUBJECTS: Create icons for all + use 
* BANNERS: Remove AI ones and make completely handcrafted (and simpler, more fitting)
* BANNERS: Create unique banners/header graphics for the different subjects/levels/factions.
* Improve HELPFUL HAT -> Look better (image of actual magical hat and such), show images, link to overview page of spell, etc


## Pretty Crucial


* SNIPCART SUPPORT: Send email saying that "Allow Guests Only" makes it completely _impossible_ to register/sign in, instead of just _optional_.
* MINOR: Remove AI from _Pandaqi Tutorials_ entirely. (When I do the next PQ Blog refresh, I can refresh tutorials too.) Just draw something simple myself, gives a way better first impression.
* Library
  * Make the overview page (`/info/library/`) look a bit more detailed and usable -> Create ARTICLE-SUMMARY partial that shows TYPE (update/wisdom/devlog) + DATE + bigger box
  * Possibly unique custom images for articles
  * PROGRESS TRACKING ARTICLE -> Not completely satisfied with my answers/approach.

## Free Resources / Demo Resources

CHARMS WITHOUT DEMO (because only single product right now):
* Escape Calendar ---> just make a general one that lasts a week/month? Maybe a "back to school"-calendar?
* Hybrid Game
* Logic Puzzle ---> I need to finish my system and properly kick off this Charm

THINGS THAT NEED A PROPER CUSTOM DEMO PRODUCT (and make old demo paid again):
* Novel / Novella Interactiva
* Printable Escape Kit
* One Button Game
* One Paper Game
* Classroom Game
* Murder Mystery
* Puzzle Pack


## Optimizations

* Do we NEED TWO smaller versions (500px, 250px) of headers in summaries?
* Can the banners be resized to smaller versions too?
* Create **TEMPLATES** (for immediate copy+paste+edit) for PUZZLE PIECES (JIGSAW) and TARSIA and TIMELINE TASKS



### Merchandise API

* Actually register webhooks => Add signature/secrets to server for Printify and Printful => TEST THIS SHIT
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Print provider) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?

## Connect Other Websites

* FUTURE: Saga of Life gets links to actual books.
* FUTURE: More varied/deep linking only becomes relevant once I create _merchandise_ for different existing projects.
* FUTURE: Also export Windows/Mac/Linux versions of all those _Jam Games_. Now I only have Web version, but my laptop can't open the projects anymore! => At the same time, this is bloating the file sizes everywhere A LOT.



# Niceties/Future To-Do

* DISCARDED: We could use something like this to take a snapshot of videos for their thumbnails -> https://jsfiddle.net/giu_do/e98tffu6/
* DISCARDED: Adding Super Sub World Cup. These games have strong Steam integration and are pretty large/hard to update. It's too much hassle (with too little benefit) to add them all to the store ---> Next games (which are more educational) should take this into account from the start.
* MINOR/OPTIONAL: Hide extra content/data/description on Levels/Charms/etc if we're NOT on page 1 of paginator?


IMAGE CAROUSEL CODE SWITCH (to make it _fully_ code-based instead of mixture of HTML and JS it is now):
* We'd need to create all the nodes ourselves: FLEX container, PREV/NEXT, INSTRUCTION, THUMBNAILS (container + inner), FAKE RECTANGLES BEHIND, IMG/AUDIO/VIDEO tags.
* But the image tag needs to be there _by default_ for SEO, Google Indexing, Snipcart, JavaScript disabled browsers, etcetera.
* Copy all CSS classes we need to add to each (but make them _configurable_?)

* Add support for `.webm` videos or image carousels in _product summaries_. (Would require being smart and assigning the "first actual image" as the one used by Snipcart and Pagefind.)


ALSO -> Should the website be more usable for KIDS/OLDER STUDENTS themselves too?

* Add an **"ai" or "100% human-created"** metadata tag or label. If not in the metadata section, then just a fixed thing that's written on product pages: _No AI (Artificial Intelligence) was used in the creation of this product._ Such a sentence could also be added to all my books on Amazon and such.

* Create a general `product-summary-small` partial for products that I can also use in the Library when listing the posts. (And for Promo and what not.)

* Increase the size of small metadata (comes before, comes after, etc) on MOBILE => otherwise those clickable links are just too small.
  * Also, ensure summary boxes are full-width on mobile (now it depends on size of desc text/poem within)
  * Also, maybe, _center_ that title below the small metadata on mobile?
  * Also, maybe, _center_ the links in the footer on mobile?

* Add IMAGES to my helper pages with _Printing Tips_ and _How To Install Our Games_.
* Add a little marker like "Recommended" or "Tiamo's Pick" or whatever to games? So I can at least highlight/sticky a few big projects I think are most worthy of attention?

* The PROMO sections could look a little better and more fitting
* Make CURRICULUM/PHILOSOPHY page much nicer: graphics, an image for the whole "path through the factions"

* Add "Dark Mode/Light Mode" **icon** + use at button in footer
* WEBSHOP JS FIX: If no buy button, the image carousel also doesn't show---only first header image. Is this bad?
* (Use Snipcart JavaScript SDK to get TAX RATE on-demand? So I can display prices INCLUDING tax for users? Very difficult ...)
* Once we need it, support BRANDS.
  * Like `charms`, simply create files for each brand in `brands/<name>` and it should automatically match with taxonomy + give us brand data.
  * And then products can just set the `brand` metadata
* _Research_ if I can add chapter decorations to `.epub` files too. Maybe with a background image in the ebook_styles.css? (But that would also require including that image every time. OR do we make it a base64 URL/SVG that's embedded? => YES, EPUB SUPPORTS THAT)

## Design

* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * Just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions, instead of icon + plain text we have now)

## Snipcart

* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* The file https://thewaywardmelody.com/css/logos/twwm_favicon_minimal.png is used in all email templates (mostly at bottom as sort of signature)
  * The system allows doing a "fixed email signature" automatically below everything, but only in MARKDOWN.
  * Currently I use ```<p style="text-align:center; margin-top: 32px;">
            <img width="42" height="42" src="https://thewaywardmelody.com/css/logos/twwm_favicon_minimal.png" />
        </p>``` which can't really be converted to Markdown?