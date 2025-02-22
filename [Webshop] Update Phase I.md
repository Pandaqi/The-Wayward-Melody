# To-Do

## Functionality

* PAGEFIND SEARCH => debug + style
* Add ICON for LEVEL, SEARCH, and SUBJECT/TEACHES
  * Add "SUBJECT" or "TEACHES" metadata? Or is this simply covered by categories?

## Home Page

* Perhaps FADE the bg-images in _both_ directions? Does that look more smooth?
* Some more image work, more "highlighted" text or phrases (though the home page _is_ the ideal place to do that)
* Display categories as nice images. Also allow marking anything else as a "brand" to put in there.


## Business

### API

* Finishing touches
  * Actually register webhooks
  * Add signature/secrets to server for Printify and Printful
  * TEST THIS SHIT
* SPLIT the merchant webhook and the shipping rates (shipping rates merely needs to create Snipcart object and we're done, no platform stuff) into separate files? To save computation power?
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Print provider) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?

### Business

* ONCE I HAVE THEWAYWARDMELODY.COM SETUP
  * Change email address to no-reply@thewaywardmelody.com (in SendGrid), verify _that_ domain instead of RodePanda for Snipcart
  * Update Mollie profile with correct domain name. Confirm the webshop is "done" and it should verify.


# Niceties/Future To-Do

* Make CURRICULUM page much nicer (with table of contents, graphics, direct links to the levels, etcetera)
* Allow setting _multiple_ product images per product/variant. Then allow switching through all product images (in carousel-like mode)
  * This requires some small limiter that says "only cycle through images of current variant"
  * This is a simple way to do it:
    * IN JAVASCRIPT, simply save _all_ current image urls in dataset.
    * In HTML, add arrows left/right (only function/appear if there are multiple images), and just swap src on click
    * If clicked on _image_ (not arrows), enlarge image?
* Use Metadata Nav Query Parameters for more stuff? + Find a way to allow pagination on _that_ too
* Allow easy switch between EXCL and INCL TAX/VAT? (Set some really high default value? Use Snipcart JavaScript SDK to get it on-demand?)

## Design

* More "invert-colors" button, as that just seems to have more oomph?
* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Try other font combos
* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * For home page, maybe
  * Also icons for main categories?
  * Or just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions)

## Business

* Mollie => 
  * Get Zakelijke Rekening (ING seems best) to support iDEAL. => Is this really important if I'm selling internationally anyway?

Terms and Conditions Other Sources:
* https://jumpseller.com/learn/sample-terms-and-conditions/
* https://escaperoomgeeks.com/shop/ has a pretty nice one?