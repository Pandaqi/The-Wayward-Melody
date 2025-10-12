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

## Curriculum

The **Teachers** faction is the "core" of the educational/curriculum system.

Every Teachers resource ...

* Belongs to a single `spell` (which is also the name that any related resources use)
* And has a single `advances` value (the spell that comes before us)

Other resources can belong to many spells or advance their own custom things. Teachers always go in a straight line, one after another, with a fixed order. 

This setup allows me to _ignore_ the `advances` properties on all other products, and the system will still figure out their place in the curriculum. It shows what "Comes Before", "Same Topic", and "Comes After" at the top of each product page. (It randomly picks the first 4. If any exist within the _same Faction_, it exclusively shows those. That's what you want 99% of the time.)





ABOUT FIGURING OUT TRAJECTORY OF WEBSHOP BUSINESS:
* What do customers hate about this industry/experience?
* What are your competitors unwilling to do?
* What is a problem that breaks your heart?
* What assumptions are you taking as given?
* What do you believe to be true that others don't see?
=> "What would I do if I knew I wouldn't/couldn't fail?"
=> You have more chance of achieving an aspirational goal than a moderate/modest/half-in-half-out goal. ("It's not a winnable game, if you're not Excited to Win the Game")
=> Most rules aren't rules, scale your bright spots, work with people you admire.
=> "A winnable game is a game that you can win, you want to win, and that you're excited to play..." => Winnable games aren't found, they're designed.


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

Terms and Conditions Other Sources:
* https://jumpseller.com/learn/sample-terms-and-conditions/
* https://escaperoomgeeks.com/shop/ has a pretty nice one?