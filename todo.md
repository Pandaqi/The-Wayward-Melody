# To-Do



# Extra Metadata Settings

* Turn `customizable` into a top-level metadata? (Instead of a category?)
* Add `interactive-media` metadata => Communicates that this thing "plays audio/video or has an interactive file/program to open"
* Add `cooperative/competitive` metadata
* Add `simultaneous/turn-based/real-time` metadata
* => Write down exact extra icons I'll need to draw on tablet + add this full list of metadata somewhere (commented out) to easily copy to new products??

# Specific Fixes

* Did I already add the `free` frontmatter check? Do I still want to? => In any case, the Shape Animal Cards _doesn't show the button now_, so at least I have to do something to fix that check
* On things ALREADY INPUT ...
  * Turn `player-count` metadata into one that explains BOTH min and max (`A-B` format) on things I input earlier
  * Remove IRRELEVANT METADATA completely on things I input earlier, as it might be wrong and makes things slow for no reason
  * Add MORE SCREENSHOTS of what's inside! I only realize now how little information this is to convince someone to buy.
  * Add `double-sided-required` to the general metadata list copied to every new project ...
* FUTURE: Make thumbnail images LARGER+HIGHER QUALITY
* The Faction List on the front page is still in the wrong order ...
* Alfables Part IV => Image still says "Part III", fix that

Add support for BLOG / ARTICLES / INFO LIBRARY => Yeah, probably call it _library_ and make it a subfolder of _info_, then move aaaaalll my articles (including FUN FRONTIER) into it? => The biggest question is how these will be linked/findable/indexed/searchable?


## Systems To Build

* **Gamiverses**: include rules both as PDF and as HTML page for interactivity? (Also include the _generator_ for the game as a single HTML page?? Would add immense value + make it self-contained + force me to make the code more modular/standalone too. But can the browser even load local images/fonts if not on a server?)
* **Escape Rooms**: create that general system (quite similar to Trivia system in syntax/how input is handled) for digital escape rooms (that _can_ be printed if needed).


## Business

* ONCE I HAVE THEWAYWARDMELODY.COM SETUP
  * Change email address to no-reply@thewaywardmelody.com (in SendGrid), verify _that_ domain instead of RodePanda for Snipcart
  * Update Mollie profile with correct domain name. Confirm the webshop is "done" and it should verify.

### Merchandise API

* Actually register webhooks => Add signature/secrets to server for Printify and Printful => TEST THIS SHIT
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Print provider) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?
  * Force myself to manually add a `free` frontmatter parameter when something should be free? And otherwise discard things with price 0?

# Niceties/Future To-Do

* HOME PAGE
  * The home page should look much more _open_ and _custom_ anyway. Custom shop logo, more space, more images, less AI-first-impression.
* Make CURRICULUM page much nicer: graphics, table of contents, an image for the whole "path through the factions"
* Use Metadata Nav Query Parameters for more stuff? + Find a way to allow pagination on _that_ too
  * DISABLED IT COMPLETELY FOR NOW, as it doesn't work with Search, and it's just confusing as long as I haven't built a robust system myself ...
* (Use Snipcart JavaScript SDK to get TAX RATE on-demand? So I can display prices INCLUDING tax for users? Very difficult ...)
* Once we need it, support BRANDS.
  * These get an extra `data` file with the description + images for that brand. (Feels cleaner than polluting the root with _another_ folder ... which we must then hide from the factions ...)
  * Products can just set the `brand` metadata
  * When searching into that taxonomy (term == brand), it simply reads that data file.
* _Maybe_ move banners and faction images into the faction itself, not sure. (Would prevent needing to `lower` the `.Title` and hoping that never breaks ...)
* _Research_ if I can add chapter decorations to `.epub` files too. Maybe with a background image in the ebook_styles.css? (But that would also require including that image every time. OR do we make it a base64 URL/SVG that's embedded? => YES, EPUB SUPPORTS THAT)

## Design

* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Try other font combos
* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * Just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions, instead of icon + plain text we have now)

## Business

* Mollie => Get Zakelijke Rekening (ING seems best) to support iDEAL. => Is this really important if I'm selling internationally anyway? And with iDeal going away for WERO soon?