# To-Do



# Specific Fixes




## Systems To Build

* **Gamiverses**: already did the conversion for the most part.
* **Escape Rooms**: create that general system (already wrote detailed `docs.md`)

## Business

* ONCE I HAVE THEWAYWARDMELODY.COM SETUP
  * Change email address to no-reply@thewaywardmelody.com (in SendGrid), verify _that_ domain instead of RodePanda for Snipcart
  * Update Mollie profile with correct domain name. Confirm the webshop is "done" and it should verify.

### Merchandise API

* Actually register webhooks => Add signature/secrets to server for Printify and Printful => TEST THIS SHIT
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Print provider) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?

# Niceties/Future To-Do

* Make CURRICULUM/PHILOSOPHY page much nicer: graphics, an image for the whole "path through the factions"
* UPDATE AI BANNERS TO PRETTIER / CUSTOM ONES. (And a smaller selection of regular ones, but a much bigger selection of the shared info ones.)
* LIBRARY
  * Make the overview page (`/info/library/`) look a bit more detailed and usable -> Show TYPE (update/wisdom/devlog) + DATE + bigger box per article?
  * (Possibly unique custom images for articles)
* Add icons for the MAIN SUBJECTS (Language, Mathematics, Social, Physical, World, Other? -> Any minor things like Biology and Stuff can come later or are considered "minor topics"?)
* Add "Dark Mode/Light Mode" icon + use at button in footer
* CHECK look of Search on light mode
* WEBSHOP JS FIX: If no buy button, the image carousel also doesn't show---only first header image. Is this bad?
* HOME PAGE
  * The home page should look much more _open_ and _custom_ anyway. Custom shop logo, more space, more images, less AI-first-impression.
* Use Metadata Nav Query Parameters for more stuff? + Find a way to allow pagination on _that_ too
  * DISABLED IT COMPLETELY FOR NOW, as it doesn't work with Search, and it's just confusing as long as I haven't built a robust system myself ...
* (Use Snipcart JavaScript SDK to get TAX RATE on-demand? So I can display prices INCLUDING tax for users? Very difficult ...)
* Once we need it, support BRANDS.
  * These get an extra `data` file with the description + images for that brand. (Feels cleaner than polluting the root with _another_ folder ... which we must then hide from the factions ...)
  * Products can just set the `brand` metadata
  * When searching into that taxonomy (term == brand), it simply reads that data file.
* _Research_ if I can add chapter decorations to `.epub` files too. Maybe with a background image in the ebook_styles.css? (But that would also require including that image every time. OR do we make it a base64 URL/SVG that's embedded? => YES, EPUB SUPPORTS THAT)

## Design

* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * Just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions, instead of icon + plain text we have now)

## Business

* Mollie => Get Zakelijke Rekening (ING seems best) to support iDEAL. => Is this really important if I'm selling internationally anyway? And with iDeal going away for WERO soon?