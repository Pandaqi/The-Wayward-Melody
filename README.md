# The Wayward Melody

This is the source for the **educational online store** located at [thewaywardmelody.com](https://thewaywardmelody.com).

It contains the public ("frontend") side of the store, which we can share freely without security issues. The backend and actual paid products obviously stay private and are not here.

## What Is The Wayward Melody?

It's a store that sells "resources" to help improve education by aiding teachers, homeschooling parents, and students.

* **Explorers:** contains "art" to get people interested in a topic. Example: a tense novel that sneakily explains how _gravity_ works.
* **Teachers:** contains worksheets, lesson plans, curriculums, planners, and more. Everything a teacher, bound to the fixed curriculum, might love to have.
* **Quizmasters:** contains quizzes (digital + physical + hybrid). These use our open source PQ-TRIVIA system.
* **Puzzlepages:** contains puzzles (digital + physical). Only physical for now, but they will use our open source PQ-PUZZLE system in the near future!
* **Runaways:** contains activities, mostly focused on escape rooms (hence the name). Only physical for now, but they will use our open source PQ-ESCAPE system in the near future!
* **Gamiverses:** contains educational board games and video games. Example: a game that requires counting to win or a game where you score points when you match shapes in sets.

Teachers can start at the first categories, then work their way to later ones when they feel confident. We truly believe that _all_ of school can be taught with (board) games and that this is the future. But we're also realistic and want to create tools for how schools work _right now_ and provide guidance.

## Structure

Now that you know the main sections, the structure of this website is easy to understand!

Every section is a folder at the root (e.g. `content/explorers/`). Its subfolders are the _levels_ of our curriculum, which roughly correspond with age ranges and grades. That's where you'll find all actual products to buy: an `index.md` page defining its description and metadata, plus any marketing assets.

The `content/info/` section is for all metadata about the website: about page, FAQ, contact, blog, etcetera. This has admittedly grown larger than expected due to the massive number of diaries ("devlogs") we write to explain the process behind many of our products---those might split off into their own section in the future.

Note: There are two more sections I have not mentioned. 

* **Sneakpeeks** contains the complete source (files + assets) of all projects made by Pandaqi before the store launched. All newer projects have the source **included alrady, for free!**
* **Magimerchants** was made in preparation of selling merchandise in the future, but is currently unused.

## Roadmap (website, not products)

See the [ROADMAP](ROADMAP.md) for a loose collection of functionality we'd like to implement.

This is not a formal roadmap because it's more of a wishlist or "don't forget this good idea". The website itself is fully functional and has no bugs or broken components to our knowledge.

The biggest item on the ROADMAP, though, is a major revamp of the home page + styling + main font. Running the store for a year or two has taught us that the original landing page design was terrible for searchability and explaining how it actually works!

## Technology Stack

We keep it simple, lean, and fast. Even a broken old laptop can build this massive website.

* **Hugo** for the static website generation. (Using their basic golang templating + raw HTML/CSS/JS.)
* **Snipcart** for the ecommerce solution (products, carts, payment, taxes, etc).
* **Cloudflare** for the domain name and hosting.

## Why Open Source This?

We're working towards a future where education is completely _free_ and _open_. Accessible for all, students and teachers alike, without being locked into some predatory ecosystem or paying through the nose. And that education should be done _right_, using interactivity, playfulness, techniques actually supported by research.

This is, unfortunately, a massive ambitious project, and we can't do this for free. We've been working towards this goal for a while and getting close to releasing something ... but we need money to survive. As such, this online store was made as a kind of "expansion" of that future (100% free!) curriculum. A way to add bonus games and puzzles and whatnot to earn a bit of income, while the main curriculum stays free forever.

It's the only sustainable, sensible way to achieve this!

All that to say: we _want_ knowledge and education to be completely free and open. We realized there's no reason to hide the source of our store.
