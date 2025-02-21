# Structure & Philosophy

This contains some general rules for how I input, display and market things.

The general idea is to create **fantasy-like lore, magic and mystery around this webshop (and its owner)**. The School of Gamery and Funcraft is mentioned, as is its headmaster, and "The Boy Who Played".

The look is inspired by fantasy and fairy tale, while being clean and modern. Things are worded with magical synonyms and made-up words.

All product descriptions **rhyme**. (They are short, personal, distinct and written in this fantastical kind of way.)
* (Pub Quiz) "In 25 questions, you'll rummage through your knowledge of the Christmas holiday. And though the holiday may be fleeting, the jolly fun is here to stay."
* (Escape Room) "This escape room is aimed at children, mostly textless, simple and short in duration. But don't be fooled by the tricksy Escape Wizard---it will be a challenge to escape this station!"
* (Stickers) "No doubt the Goddess of Time needs your utmost support. Plaster these stickers where others can see, and Ismaraldah will never again come up short."
* (Educational Activity) "The headmaster of the School of Gamery and Funcraft has conjured up a new activity. A puzzle to solve, for ages young and maybe old, with a certain language proclivity. Print the pages, explain the rules, and every sorcerer has fun---while learning too!"

Of course, don't forget LAWS 0, 1, 2 and 3 described on the about page.

## Design

@TODO: Write a bit more specific specs about this


PROMPTS FOR HEADER IMAGE GENERATION:
* Watercolor, dreamy, fantastical painting of a line of sheet music melody notes, glowing, dancing around XXXX
  * Example for aeronaut: a hot air balloon in the shape of pig
* URL: https://deepai.org/machine-learning-model/watercolor-painting-generator
* HD Model, Quality > Speed
* UGH THEY ALREADY DISABLED THE WIDESCREEN THING I USED FOR ALL THE OTHERS!
* @SOURCE: Tool used for upscaling => https://imggen.ai/tools/upscale-image

<!--- DEBUGGING: This should only go on those OTHER websites --->
{{ partial "products/product-list-external" (dict "context" . "urls" (slice "https://webshop-test.pages.dev/merchandise/test-item/")) }}

