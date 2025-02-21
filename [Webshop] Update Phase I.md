# Webshops System (Phase I)

# HUGO/Design

* ADD THE ICONS/BORDERS/EYE CANDY FROM TABLET (see below)
* Create a UNIQUE layout for front page/landing page
  * Major header image + welcome message
  * SHOW THE "PHILOSOPHY" or "FUNNEL"?
  * Some of those random "stats" or "advantages" or "reviews" => though make them clearly tongue-in-cheek, fitting with the Lore of the webshop?
  * Direct links to MAIN CATEGORIES.
  * Direct links to LATEST/BESTSELLING PRODUCTS.
    * "Bestselling" can simply be marked by me, or chosen randomly on every build of the website. 
* Polishing:
  * Add some nice "hover" effect when going over (main) images
  * Some more image work, more "highlighted" text or phrases (though the home page _is_ the ideal place to do that)
  * More "invert-colors" button, as that just seems to have more oomph?

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
* At least _try_ to get some selection going (like, choose variants, image carousel)
* Native support for details, GSPR, and any other "default stuff" at the end of a listing?
* Try other font combos
* Snipcart Theming => only colors are easy to change. I'd prefer having access to fonts and stuff too, but that's messy ...
* Any other sanity checks for ALL products in the HUGO/API system?



## Wayward Melody Webshop Updates

BORDER IMAGES

.border-white-m {
border-image-slice: 42 42 42 42;
border-image-width: 1.5rem;
border-image-outset: 0.5rem; // match this with actual sizes + padding of the item it's on => better yet, provide a few variants again! border-s, border-m, border-l
border-image-repeat: round round;
border-image-source: url(css/border_pattern_white.webp); // or url(css/border_pattern_black.webp);
border-style: solid;
}



HEADER DECORATIONS

// Also FLIP the one before (transform: scaleX(-1))
h2::after {
    background-image: url(css/header_decoration.webp);
    width: 2rem; // same size as header itself
    height: 2rem;
    display: inline-block;
    filter: invert(1); // only invert when it's on dark background
    content: "";
    background-size: contain;
    margin-left: 0.25rem;
    mix-blend-mode: overlay;
}


GRAINY TEXTURE (header, footer, body, snipcart-bit-in-top-right, maybe buttons, maybe over images baked-in?)

.bg-texture {
    background-image: url(css/bg_texture.webp);
    background-blend-mode: overlay;
}



OTHER CHANGES
* Remove top/bottom margin on answer (of FAQ block)
* Add text shadow to FAQ buttons too, maybe also product buttons?
* The "mid" value for Art & MEdia (dark blue) looks really weird, change that
* Some nice default message if there are NO "Latest Products" and there is NO "metadata" to search through yet
* SHOW TWO PROPERTIES ON PHYSICAL PRODUCTS: the SKU and which Platform is used to print it
* Picsum headers to 1920x432 (as the other headers will be) => NAH JUST USED DEFAULT OUTPUT FROM AI NOW
* FRONT PAGE: Also allow selecting "brands". These are just section pages that I can mark as "brand", and then their image will show up and all related products are inside.
* Also add links to cart/account in FOOTER. (In case header is hard to find/obscured?)



[Wayward] Create a UNIQUE layout for front page/landing page
* @TODO: Actually use all the icons and shit I made for this website
* @IDEA: Reuse the pretty banner headers here (randomly selected), but pick a _different one_ for each section/heading.
* Major header image + welcome message
* Some of those random "stats" or "advantages" or "reviews" => though make them clearly tongue-in-cheek, fitting with the Lore of the webshop? "A distinct lack of dark wizards to battle. 4 stars. -Harry Potter"
* Direct links to MAIN CATEGORIES.
* Direct links to BRANDS.
* (An option for a temporary SALE/DISCOUNT/EVENT?)
* Direct links to LATEST/BESTSELLING PRODUCTS.
  * "Bestselling" can simply be marked by me, or chosen randomly on every build of the website. 

FUNCTIONALITY I REALLY WANT NOW:
* Ability to set multiple "attributes" and their "variants", and then connecting that with unique product IDs + prices and such
  * Also use this to COMBINE different variants of the same product into a single page/place, as that will be REALLY USEFUL for simplicity/minimalism/efficiency in the long run I can already tell.
* A carousel to display/switch between them.
* An "extra" section with details, GPSR, and any other stuff. (Not inside main description, preferably.)
  * At least stuff like dimensions and weight should be standardized and given to Snipcart data, in case I ever need those in the future.
* Ability to set a **shipping-zone** for a product. (So I can keep stuff locally priced.) And then, somehow, disallowing shipping to anywhere else.
  * In Snipcart, you can set shipping methods and then location-lock them! https://docs.snipcart.com/v3/setup/shipping
  * The ALTERNATIVE is to use the shipping fee trick again: if shipping OUTSIDE of given zone, it's always 50 euros shipping costs (to cover basically anything). => Maybe raise the minimum cost order to 50 too, and then match that number with this one?
  * TO ALLOW WORLDWIDE DELIVERY STUFF ...
    * Simply have different product IDs behind the scenes. When you go to a product, it tells you it automatically selected the one that ships to YOUR country. If nothing set, it asks you to please make an account/input address in cart so it can show you if the product ships to your address.
    * (I might be able to grab country code directly from browser, but this is unreliable. Do so, but add "not the right location? Please fill in ...")
      * I can also add some HTML metadata to the page that knows which countries something ships to. So I have a static in-file backup in case someone has JavaScript turned off or whatever. Or someone wants a list of ALL countries.
    * When someone orders, they only get the ones that fulfill closest to them of course, allowing me to keep a fixed price and controllable shipping fees.
* Clear differentiation or mention of INCLUDING/EXCLUDING VAT.


POSSIBLE WAYWARD HEADER IMPROVEMENTS:
* (Tool used for upscaling = https://imggen.ai/tools/upscale-image)
* Use cartoon ones anyway ...
* Use the simple grain and doodles as a slight overlay/polishing on these headers, to make them actually manual and consistent in look.
* Some nice doodling/"eye candy" work => something with DREAMCATCHERS and that LINE OF MUSIC NOTES through everything?
  * For home page, maybe
  * Also icons for main categories?
  * Or just to stow away in some corner once---be SUBTLE---use that "dream catcher" and "melody line" motif!
  * Shop logo (name logo/banner in different dimensions)