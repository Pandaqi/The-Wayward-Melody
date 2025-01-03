# Webshops System (Phase I)


## API

* Ask SnipCart about raising digital good file size to 100 mb ("Most files will be below 25 MB, but I expect to ocassionally have zip bundles or very high-resolution PDFs at 50 MB or even 100 MB")
* Research possibility for MULTI-PRODUCT ORDER => creating a cart with _multiple_ things at once, which are all required to combine into a single escape kit for example?
* Finishing touches
  * Actually register webhooks
  * Add signature/secrets to server for Printify and Printful
  * TEST THIS SHIT
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Printify) Or does that happen automatically?


## Business

* Privacy Policy + Terms & Conditions
  * https://escaperoomgeeks.com/shop/ has pretty nice ones? Or should I just link to Snipcart's?
* Mollie => 
  * Get Zakelijke Rekening (ING seems best) to support iDEAL.
  * Update profile with correct domain name. Confirm the webshop is "done" and it should verify.

## Finishing Touches

* Figure out the CSS styles that Snipcart uses, then find a clean way to override them.
* Any other sanity checks for ALL products in the HUGO/API system?


## The Wayward Melody (the actual webshop domain)

All different categories have text files within their own subfolders.

* `escape-rooms` or `escape-kits`
* `pub-quizzes`
* `educational-activity` or just `educational` 
* `activities`
* `merchandise`
* `bonus-material`
* (`fun-frontier` for expansion packs and stuff for THAT project)

These _potentially_ have more subfolders, for example when many pub quizzes have the same general theme. This merely changes the URL for linking from another website, while requiring no other change, so that's fine.

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

@IDEA: FRIDGE MAGNETS ESCAPE ROOM/PUZZLES/GAME?

@IDEA: ESCAPE ROOM POSTERS! (And escape room _mugs_, pillows, beanies, T-shirts have already been done, what else?) => Might do something by _overlapping_ with paper to hide bits? Placing paper on it, then tracing (like against a window/backlight)? Turning it upside-down?

@IDEA: "The Daily Puzzle/Mystery/Cipher" => A wall art/painting/poster in the style of old newspaper clippings, containing a single mystery/escape room puzzle to solve. For example: "WHO STOLE THE DIAMONDS!?" The article + images below are all the clues you need to answer that question.


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