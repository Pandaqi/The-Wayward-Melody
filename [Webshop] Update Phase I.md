# Webshops System (Phase I)

# Design

* More "invert-colors" button, as that just seems to have more oomph?
* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Try other font combos
* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * For home page, maybe
  * Also icons for main categories?
  * Or just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions)

# Functionality

* PAGINATION
  * Create the "button-general" partial
  * Use that in the pagination template ( + allow putting in any custom $pages variable into it?)

* PAGEFIND SEARCH + Use Metadata Nav Query Parameters for more stuff?

# Home Page

* Some more image work, more "highlighted" text or phrases (though the home page _is_ the ideal place to do that)
* Display categories as nice images. Also allow marking anything else as a "brand" to put in there.


# Business

## API

* Finishing touches
  * Actually register webhooks
  * Add signature/secrets to server for Printify and Printful
  * TEST THIS SHIT
* Rename webhook to something more sensible
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Printify) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?

## Business

* Privacy Policy + Terms & Conditions
  * https://escaperoomgeeks.com/shop/ has pretty nice ones? Or should I just link to Snipcart's?
* Mollie => 
  * Get Zakelijke Rekening (ING seems best) to support iDEAL. => Is this really important if I'm selling internationally anyway?
* ONCE I HAVE THEWAYWARDMELODY.COM SETUP
  * Change email address to no-reply@thewaywardmelody.com (in SendGrid), verify _that_ domain instead of RodePanda for Snipcart
  * Update Mollie profile with correct domain name. Confirm the webshop is "done" and it should verify.

# Niceties/Future To-Do

* Allow setting _multiple_ product images per product/variant. Then allow switching through all product images (in carousel-like mode)