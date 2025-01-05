# Webshops System (Phase I)

# HUGO/Design

* Create a UNIQUE layout for front page/landing page
  * Major header image + welcome message
  * Some of those random "stats" or "advantages" or "reviews" => though make them clearly tongue-in-cheek, fitting with the Lore of the webshop?
  * Direct links to MAIN CATEGORIES.
  * Direct links to LATEST/BESTSELLING PRODUCTS.
    * "Bestselling" can simply be marked by me, or chosen randomly on every build of the website. 
* Polishing:
  * Add some nice "hover" effect when going over (main) images
  * Some more image work, more "highlighted" text or phrases (though the home page _is_ the ideal place to do that)
  * More "invert-colors" button, as that just seems to have more oomph?

MAYBE use these final few months (NDHU runs out 14-04, Hosting 22-04) that I still have my Vimexx hosting to try WooCommerce directly?
* Just to make a few products, get something running
* AND TRY OUT ALL THE DIFFERENT FRAMEWORKS DIRECTLY? Yes, that should work simultaneously, as far as I can see. WooCommerce even recommends Printful inside the interface.
* If this runs out, I _can_ keep the domain anyway (but move it to CloudFlare) + switch to some free hosting (infinityfree, byet.host, accuweb free wordpress trial for 6 months) and do DNS magic to make it work. Keep that system alive as long as I can, without real cost.
* BUUUUUT CloudFlare's domains don't allow hosting them somewhere else, so then I'd need to keep it at VIMEXX instead ... => HAHA CLOUDFLARE DOESN'T EVEN SUPPORT .nl EXTENSION ANYWAY!
  * Moet eigenlijk testen, iets voordat domein verloopt, of ik de nameservers al kan switchen naar zo'n gratis host.

* [Need Tablet] 
  * Try fairy tale decorations around headers + fairy tale border-image decorations around boxes?
  * Some nice texturing/doodling/"eye candy" work
  * A BUNCH OF HEADERS TO USE?
    * One header per category, in that nice style from picsum. (Start saving the ones that look best as reference!)
    * Then just a few random headers for any other pages/placeholders
  * Create metadata icons => then use
  * Create custom images cart + user account + shop icon (square) + shop logo (name logo/banner in different dimensions)


## API

* Finishing touches
  * Actually register webhooks
  * Add signature/secrets to server for Printify and Printful
  * TEST THIS SHIT
* Rename webhook to something more sensible
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Printify) Or does that happen automatically?


## Business

* Privacy Policy + Terms & Conditions
  * https://escaperoomgeeks.com/shop/ has pretty nice ones? Or should I just link to Snipcart's?
* Mollie => 
  * Get Zakelijke Rekening (ING seems best) to support iDEAL.
* ONCE I HAVE THEWAYWARDMELODY.COM SETUP
  * Change email address to no-reply@thewaywardmelody.com (in SendGrid), verify _that_ domain instead of RodePanda for Snipcart
  * Update Mollie profile with correct domain name. Confirm the webshop is "done" and it should verify.

## Finishing Touches (Optional)

* Metadata Nav (adding query parameters) => this is actually quite powerful and I might want to use this for OTHER stuff to filter by too?
  * Then also find a clean way to COMMUNICATE those query parameters to the user.
  * YES, Search should be SOLID and EASY TO USE.
    * Add freeform search function with Pagefind?
    * Also allow searching for price, of course?
  * Also, PAGINATION
* Try other font combos
* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Any other sanity checks for ALL products in the HUGO/API system?


## The Wayward Melody (the actual webshop domain)

All different categories have text files within their own subfolders.

* `escape-rooms` (might become `escape-kits`)
* `trivia`
* `educational` 
* `art-media`
* `merchandise`
* `bonus-materials`
* (`fun-frontier` for expansion packs and stuff for THAT project => remove at launch?)

These _potentially_ have more subfolders, for example when many pub quizzes have the same general theme. This merely changes the URL for linking from another website, while requiring no other change, so that's fine. By setting `bundle:true` in Params, we can actually allow you to buy the full bundle at once if we want.

These subfolders are treated as their own "index" page (with `_index.md`), so we can explain the specific rules and stuff for _that_ category. That's how we get unique landing pages for different things.

Actual tags/categories are used to link things belonging to the same general franchise or type of good. (Such as different merchandise items and bonus material all labeled "wildebyte-arcades".)

## Possible POD Providers

Maybe have TWO providers, one for EUROPE and one for USA?

* **Teemill (UK)**.
  * API = https://teemill.com/print-on-demand-api/
  * More limited in offerings, more restrictive in what they allow or take on.
  * Sustainability focus.
* **Inkthreadable (UK)**
  * API = https://www.inkthreadable.co.uk/api-documentation
  * Reliable and well-reviewed, but shipping fees are expensive.
* **Gearment (USA)**
  * API = https://api.gearment.com/
  * Very USA-focused, somewhat bland; not really sure what their strengths or weaknesses are.
* **Printful (USA + UK + LATVIA + SPAIN + "MEXICO")**
  * API = https://developers.printful.com/docs/v2-beta/
  * The biggest one, very well designed (the API too), but somewhat expensive
* **Prodigi (UK/GERMANY)**
  * API = https://www.prodigi.com/print-api/docs/
  * Very good reviews, solid website and docs, seems smaller and more confined though
* **Gooten (USA + "SERBIA")**
  * API = https://www.gooten.com/print-on-demand/gooten-api/
  * Not sure. Seems big, used a lot, nice website, also some clear holes and bad reviews.
* **Spreadshirt (NL + GERMANY)**
  * NO API, but has OWN STOREFRONT; MAIN PAGE = https://www.spreadshirt.nl/
  * Local, seems nice enough, has its own storefront so I don't need one technically.
* **Gelato (EUROPE, ALL OVER)**
  * API = https://dashboard.gelato.com/docs/
  * Very much Europe-based, nice website, one of the big ones that I shouldn't ignore!


## Possible Products to Sell

### Pandaqi

* Tutorials and Blog??
* Merchandise for general brand as well as individual games, characters, etcetera.
* Source Files and Assets

### TiamoPastoor

* Extra material for books, tiny standalone stories, the ebook version of a book for a lower price?
* Merchandise for the bigger franchises
* Source Files and Assets?

### Activities & Experiences

#### ESCAPE KITS

@TODO

@IDEA/SOLUTION: Yes, I _can_ make digital escape rooms without overhead! If I simply do the same thing as I plan to do with the pub quizzes: give people a single webpage to open in their browser. It can be completely self-contained, while hiding answers/solutions, and allowing checks. (I can always make this available ONLINE too, for ease of access from mobile, later.)

@IDEA: FRIDGE MAGNETS ESCAPE ROOM/PUZZLES/GAME?

@IDEA: ESCAPE ROOM POSTERS! (And escape room _mugs_, pillows, beanies, T-shirts have already been done, what else?) => Might do something by _overlapping_ with paper to hide bits? Placing paper on it, then tracing (like against a window/backlight)? Turning it upside-down?

@IDEA: "The Daily Puzzle/Mystery/Cipher" => A wall art/painting/poster in the style of old newspaper clippings, containing a single mystery/escape room puzzle to solve. For example: "WHO STOLE THE DIAMONDS!?" The article + images below are all the clues you need to answer that question.

MERCHANDISE IDEA: "SOLVE MY BACK"/"SOLVE MY FRONT" which asks others to look at your back and solve the puzzle/answer the question there.

@IDEA (ESCAPE ROOM; POSTER?): A side-view of a house, like that 2D video game where you manage a skyscraper or a news station. You start at ground floor (or top-left room), then move from room to room by solving puzzles. (The puzzle tells you which door/stairway/elevator stuff to take?)

@IDEA: "Wie is de Mol/Trol" verjaardagspaketten. Or just general "birthday cookbooks" or "activity day workbooks"?

#### PUB QUIZ 

* START WITH FULLY ANALOG/CUSTOM ONES. If I simply design them manually, I can do crazy stuff with presentation and questions, so really use that.
* THEN MAKE DIGITAL ONES. Simply give people the entire set of files (html + js + css, with questions baked in?), then tell them to open in a browser.
  * Might be simpler to start with pure spreadsheet ones using Markdown, as these also print nicely to PDF.
  * https://marp.app/
  * https://github.com/gnab/remark/wiki/Markdown
* ONLY ONCE FOUNDATION IS SOLID, completely switch to an .exe or some more involved pub quiz package service.

* Make source code available + free build of .exe; then sell packages of questions
* Allow printing the entire quiz + printing entire answer sheet (in case people want to play analog)
* What else is needed before this would be commercial/sellable?

OTHER QUIZ PROVIDERS:
* https://pubquiznederland.nl/en/shop/pubquiz-en/2024-general-pub-quiz-1-short-version/
* https://www.instant-quizzes.co.uk/collections/quiz-packs

#### (EDUCATIONAL) ACTIVITIES

* Simply puzzles or card games, if possible?
* "Worksheets" for teachers.
* "Workplans" for parents, teachers, kids.
* General things like coloring pages, connect the dots, etc?

@SOURCE: twinkl.nl

### Explorers of the Fun Frontier (?)

* Have the BASE GAME for "Explorers of the Fun Frontier" be free, but expansions/other material is sold through my webshop?
  * And then add: "Can't afford the expansions or extra material for this specific game? Don't worry. Send me an email, and I'll give them to you, no questions asked. I only ask money from those who _can_ afford it, to put food on my table, but I'm not interested in paywalling education or gaming."
* Merchandise around the general project and philosophy, or individual games, adding to the "adventure" and "exploring" vibe.
* Source Files and Assets

### SagaOfLife

* Tiny in-between stories that don't fit the cycle structure and can't be sold normally.
* Merchandise around the general project OR individual characters/stories/icons

### ElTroubadour

* Merchandise based on songs or album art.
* Song snippets, sound effects, anything else that streaming can't really do.
* Source Files and Assets