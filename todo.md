# To-Do




### Merchandise API

* Actually register webhooks => Add signature/secrets to server for Printify and Printful => TEST THIS SHIT
* @TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Print provider) Or does that happen automatically?
* Any other sanity checks for ALL products in the HUGO/API system?

## Connect Other Websites

* FUTURE: Saga of Life gets links to actual books.
* FUTURE: More varied/deep linking only becomes relevant once I create _merchandise_ for different existing projects.
* FUTURE: Also export Windows/Mac/Linux versions of all those _Jam Games_. Now I only have Web version, but my laptop can't open the projects anymore! => At the same time, this is bloating the file sizes everywhere A LOT.

## Optimizations

* Add support for `.webm` videos (in both summaries and product pages) => snipcart still wants an image only for product, though, so maybe try to hold off this "feature" as long as possible? => Or we do something smart by selecting the first image (in `get-product-data`) for that specific Snipcart field
* Do we need TWO smaller versions (500px, 250px) of headers in summaries?
* Can the banners be resized to smaller versions too?

## Story-Exporter

Modify the system to allow adding/keeping **all my stories there**!

* Then I don't have to _replace/clean-up_ the old one every time.
* Then I can keep CSS/changes _per book_ in there.
* And maybe, in the future, I can just publish that website and deliver all these stories for free.

What would be required?

* `static` stuff in a subfolder equal to book name. (It should then autmatically find these relatively linked files in `/bookname/filename.png`)
* `data` needs such subfolders too, or MAYBE I can move it into page bundles and use a raw GetPage or something to grab it? (I want to keep the `metadata.yaml` file to just drag-and-drop into there with no modification.)
* the `to-pdf` is just a page type I can apply to `bookname/index.md` pages, right?


# Niceties/Future To-Do

* Add an **"ai" or "100% human-created"** metadata tag or label. If not in the metadata section, then just a fixed thing that's written on product pages: _No AI (Artificial Intelligence) was used in the creation of this product._ Such a sentence could also be added to all my books on Amazon and such.

* Increase the size of small metadata (comes before, comes after, etc) on MOBILE => otherwise those clickable links are just too small.
  * Also, ensure summary boxes are full-width on mobile (now it depends on size of desc text/poem within)
  * Also, maybe, _center_ that title below the small metadata on mobile?
  * Also, maybe, _center_ the links in the footer on mobile?

* Add a little marker like "Recommended" or "Tiamo's Pick" or whatever to games? So I can at least highlight/sticky a few big projects I think are most worthy of attention?
* Create **TEMPLATES** (for immediate copy+paste+edit) for PUZZLE PIECES (JIGSAW) and TARSIA and TIMELINE TASKS
* The PROMO sections could look a little better and more fitting
* Make CURRICULUM/PHILOSOPHY page much nicer: graphics, an image for the whole "path through the factions"
* UPDATE AI BANNERS TO PRETTIER / CUSTOM ONES.
* LIBRARY
  * Make the overview page (`/info/library/`) look a bit more detailed and usable -> Show TYPE (update/wisdom/devlog) + DATE + bigger box per article?
  * (Possibly unique custom images for articles)
* Add icons for the MAIN SUBJECTS (Language, Mathematics, Social, Physical, World, Other? -> Any minor things like Biology and Stuff can come later or are considered "minor topics"?) => Also, do we need to **capitalize** these? It feels inconsistent with literally everything else on the website ...
* Add "Dark Mode/Light Mode" **icon** + use at button in footer
* WEBSHOP JS FIX: If no buy button, the image carousel also doesn't show---only first header image. Is this bad?
* HOME PAGE
  * The home page should look much more _open_ and _custom_ anyway. Custom shop logo, more space, more images, less AI-first-impression.
* Use Metadata Nav Query Parameters for more stuff? + Find a way to allow pagination on _that_ too
  * DISABLED IT COMPLETELY FOR NOW, as it doesn't work with Search, and it's just confusing as long as I haven't built a robust system myself ...
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