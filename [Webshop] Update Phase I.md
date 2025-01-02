# Webshops System (Phase I)

## Hugo

* Create a reusable partial that can display one or more products---this is completely standalone, independent of the rest of the website.
* Create a reusable shortcode so we can also do that from within pages. (Either using custom parameters or drawing from article params)
* Probably want to support BOTH data from pages and from standalone JSON data files.
  * Use a single switch somewhere to toggle between them/where to look? 
  * (I don't want to put all products in a fixed-name folder like `products`---on the escape room website, for example, all products will simply have their official page explaining the escape room at the top level.)
  * (Set a TYPE/KIND from the start, though!)

## Styling

* Figure out the CSS styles that Snipcart uses, then find a clean way to override them.
* Figure out how/where to place carts and user account stuff on all websites.

## API

* Proper validation for Printify requests
* Better error handling and certainty checks, especially in the "move order to Printify"-part.
  * Keep a max quantity for all. 
  * Some sanity checks on the list of merchandise items. (Can't be longer than full order list, can't have duplicates, etcetera.)
* At least the POSSIBILITY of a webhook for shipping and tax calculations
* Write implementations for several APIs => so I can abstract that away and easily switch.

## The Big Test

I should probably use a _new_ website---such as the escape room one---as the big test for all these new approaches and systems.

@TODO

## Possible POD Providers

@TODO: Make that list + API URL + notes after research

## Possible Products to Sell

### Pandaqi

@TODO

### TiamoPastoor

@TODO

### Escape Room/Puzzle Experience Thingy (?) => shouldn't this just be a general "fun activity" thing?

@TODO

### Explorers of the Fun Frontier (?)

@TODO

### SagaOfLife (?)

@TODO

### ElTroubadour (?)

@TODO



## Webshop To-Do

* @TODO: List all Europe-based POD providers with an API here.
* Mollie => check if I want to create multiple profiles (one per website) or keep it all on the same one. Once done, confirm the webshop is "done" and it should verify.
* Shipping => check how hard it is to ask and display these rates using Webhooks?
  * My thing should just listen to the event,
  * Poll Printify,
  * Then return the results right? => There's literally a shipping_cost value in the returned ORDER ... but we don't have that before someone has bought, right? We'd need to wait until they filled in their ADDRESS/BILLING INFO, and _then_ we can get that shit.


@SHOP_REMARK: "This shop **does not support "express" or "fast" shipping**. Digital goods are, of course, available immediately. Physical goods will arrive whenever they arrive (this rarely takes longer than 2 weeks)."

@SHOP_REMARK: "This shop **does not offer refunds or returns**."

_Why_? 

* For digital goods, this is standard. It doesn't make sense to allow refunds when somebody has already received a permanent copy of the file! 
* For physical goods, this was our choice, made after much consideration. 
* Our physical goods are printed on demand, which unfortunately means a refund just turns that product into useless waste, as it was made specifically for _you_! If worried about a product's look in real life, might we suggest purchasing your products in a physical shop instead? :)
* To incentivize people to think longer before buying, and in doing so be kinder to themselves and the environment. If your purchase still disappoints, consider recycling it creatively or giving it away. If you are _really_ disappointed, let me know personally, and I might find some other arrangement.

@SHOP_REMARK: "Orders have a **minimum cost of 35 dollars**. If below that, shipping fees will just make up the amount. If above that, though, there are **no shipping fees**. Expected shipping costs are included in the base price of all products."

_Why_?

* To incentivize people to buy everything they want _at once_, which is better for the climate _and_ for their own wallet in the long-run. (The number of times I've seen someone place six seperate orders on the same day instead of bundling it ...)
* To make the items the same price for everyone
* Because shipping costs _can't_ be properly predicted. Our system will select the cheapest and fastest ( = most local) provider once the order is already placed. 
* (And many systems, unfortunately, mark up the shipping fees with random ridiculous amounts. This is out of our hands. We decided we don't want to scare people with a sudden 30+ dollar shipping fee at the end of checkout.)





> **LESSON LEARNED:** The Shipping Webhook Endpoint is a _different setting_ from the usual endpoint!

@TODO: Do I still need to make my own Snipcart notification when I update orders? (Getting stuff back from Printify) Or does that happen automatically?



PUB QUIZ 

* Make source code available + free build of .exe; then sell packages of questions
* Allow printing the entire quiz + printing entire answer sheet (in case people want to play analog)
* What else is needed before this would be commercial/sellable?
