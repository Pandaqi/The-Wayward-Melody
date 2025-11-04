# How To Export Books

For this to work, it's crucial that all chapters have both a **metadata title** (`--- title: "lala" ---`) and a **markdown title** (`# Lala`). They also need a `weight` that is in ascending order (i.e. chapter 1 has lowest weight).

## EBOOK

The `epub_command` should contain all the _chapters_ in the book, in order.

* Open a command prompt.
* Navigate (`cd xxx`) to the main folder of the book. (`manuscript` and `epub` are subfolders)
* Copy the epub command and execute it
* You should now have a finished epub.

Don't forget to have the right `cover.png` and `metadata.yaml` before doing this!

NOTE: Block images (not inline with a paragraph) automatically get their alt text displayed as a caption. I changed the CSS to make this look nice. If you want to turn that off, add a ` \` behind the image. (@SOURCE: https://stackoverflow.com/questions/45030895/how-to-add-an-image-with-alt-tag-but-without-caption-in-pandoc)

## PDF

This uses a simple `hugo-website`.

* Copy all the chapters into the `content/chapters` folder
* Copy the `metadata.yaml` into the `data` folder
* Put any necessary images into their own folder, and copy-paste that folder to `static/to-pdf`

Now you can visit `localhost:1313/to-pdf`, wait for it to finish loading, then use `CTRL+P` (Browser print functionality) to get the ebook as PDF.

_This also allows tweaking the design, changing fonts, etcetera on the fly through Developer Console/Inspector. Won't be needed most of the time, but nice for unique themed things._