# To-Do


* Add ICON for LEVEL, SEARCH, SUBJECT/TEACHES, and BRAND.
* HOME PAGE: 
  * Display Factions as nice images (probably want ICONS for them anyway).
    * Their tiny square icons are just for the navigation/footer/that top section on product displays
    * Their larger images are used in this list, like how I did with NDHU
    * (This data is just set in the `_index.md` of the sections)


## Business

### API

* Actually register webhooks => Add signature/secrets to server for Printify and Printful => TEST THIS SHIT
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Print provider) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?

### Business

* ONCE I HAVE THEWAYWARDMELODY.COM SETUP
  * Change email address to no-reply@thewaywardmelody.com (in SendGrid), verify _that_ domain instead of RodePanda for Snipcart
  * Update Mollie profile with correct domain name. Confirm the webshop is "done" and it should verify.


# Niceties/Future To-Do

* HOME PAGE
  * The home page should look much more _open_ and _custom_ anyway. Custom shop logo, more space, more images, less AI-first-impression.
* Make CURRICULUM page much nicer (with table of contents, graphics, direct links to the levels, etcetera)
  * Use double-view much more? It just feels so much nicer, on a wide screen, if content is actually wide ...
  * BUT I can't really decide on this until I've actually MADE some of that material.
* Use Metadata Nav Query Parameters for more stuff? + Find a way to allow pagination on _that_ too
* (Use Snipcart JavaScript SDK to get TAX RATE on-demand? So I can display prices INCLUDING tax for users? Very difficult ...)
* Once we need it, support BRANDS.
  * These get an extra `data` file with the description + images for that brand. (Feels cleaner than polluting the root with _another_ folder ... which we must then hide from the factions ...)
  * Products can just set the `brand` metadata
  * When searching into that taxonomy (term == brand), it simply reads that data file.

## Design

* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Try other font combos
* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * Just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions, instead of icon + plain text we have now)

## Business

* Mollie => Get Zakelijke Rekening (ING seems best) to support iDEAL. => Is this really important if I'm selling internationally anyway?