# Ideas for Other Web Services

With my knowledge + AI I should be able to create something valuable people will pay for.

Plus I can make something to improve my webshop / attach to it.



preventteacherburnout.com
whatwillwelearntoday.com
homeschoolingheadquarters.com
(getarealjob.com?)


OR WE USE AI TO MAKE A PROPER ONLINE MULTIPLAYER GAME (RocketLeague clone):

* https://edgegap.com/resources/pricing => dedicated server, has Godot plugin
  * https://aws.amazon.com/free/ also fine, but only temporarily/for testing
* Netfox
* Use my "RacketPeeps" idea? Olympics sports games?
* The issue is that Steam can only ask a one-time fee. So we'd have to make it free but put a subscription _inside_ the game?? => **Oh yes, Steam supports recurring billing system ... but it's bad and barely used? Yeah no avoid that.**



MY OWN SNIPCART CLONE! Differences:

* Only digital files, but much stronger support for them.
  * Tagging, descriptions, input through dashboard instead of just website, sorting, folders, etcetera.
  * But we have clear MAX LIMITS (chained to your subscription cost to ensure we run a profit)
* Dashboard hosted on _your_ website => place an `index.html` file on there with your key inside. (Other pages access it via JS tag / CDN script, like Snipcart.)
  * Though we might want to allow ONE STATIC PAGE with your subscription on our servers?
* Easier customization of look and usage and stuff
* Specific implementation:
  * API backend
  * STORAGE => https://dev.to/wimadev/5-cheap-object-storage-providers-5hhh -> Backblaze B2 seems fine
    * "This is why I would use an object-storage service with private buckets and signed download URLs, rather than serving files through your Node.js application. A further optimization is to upload files directly from the merchant's browser to storage using a short-lived, authorized upload URL. Your API should authorize the upload, but it doesn't need to relay every byte."
  * PAYMENTS => Integrations for Mollie, Stripe, Paypal, etcetera API (User needs their own account)
  * DATABASE => https://supabase.com/pricing has free tier to start with? (Neon/Railway/NextJS -> find something that specifically scales with size?) 
    * ===> WAIT just use the Render built-in one, much easier?
    * Neon autoscales based on traffic
* EXISTING COMPETITORS (great post: https://www.reddit.com/r/ecommerce/comments/1p088w9/alternative_to_snipcart/)
  * ECWID (https://www.ecwid.com/pricing) -> low limit on #products, can't use
  * FOXYCART (https://www.foxy.io/pricing) -> low limit on transactions per month, plus more expensive, can't use
  * WIREGUM (https://wiregum.com/ecommerce/static-sites) -> no digital files I believe
  * SHOPROCKET (https://shoprocket.io/) -> seems the best alternative, albeit more expensive


PAID WEB APP APPROACH:

* Use `bun` on `Render` => https://bun.com/guides/deployment/render
* Use `Stripe` (no upfront payment, takes cut) => just copy this translation layer into my own project directly => https://github.com/OnnaSoft/stripe-bun
* Use free public APIs whenever possible.
  * https://medium.com/@itsaashish/10-mind-blowing-free-apis-to-power-up-your-next-project-9e867372e392
  * https://github.com/public-apis/public-apis

**Using AI In The Classroom** => Could I setup some quick service with knowledge and instructions and tools for "appropriate AI usage in the classroom" and "modernizing education in a safe way" and all that bullshit teachers might be looking for?

**"Newsteach"** => Use the current news directly inside your classroom! Pulls in live news + provides tools to immediately turn it into a slideshow/lesson plan/way to use in education. (+filters for grade and topic and stuff)

**"EducationBuddy"** => Same thing as SmallBusiness, but fully focused on teachers, homeschooling parents, and private tutors?

**"SmallBusinessBuddy"** => A complete tool to track finances, receipts, contracts, time tracker, website, email address, everything to run your own small business / be a freelancer
--> Smaller version would be "FinanceHub" or "ContractChaser" (ProposalWriter), some subproblem of this
--> Something like "MarketResearch" would be AWESOME. Similar to <https://goshiporskip.com/>. Find competitors, find negative reviews and positive reviews, create a report for what works and what people are missing, combine with search trends, etcetera

**"Receipts/Foods/Products"** => Some way to instantly check what's inside products, get random receipts, etcetera.
--> **"Foodprynt"** ---> check your footprint, check how climate-friendly different products and services are, etcetera. Could be for personal use or business use. 

**DocumentDodo** => It's similar to my PQ-TEACHERS worksheets, actually. But instead of worksheets I'd have a clean way to create contracts for freelancers, contracts for indie dev teams, testament, etcetera. Might be able to monetize that really well?

**"PredictorAlgorithms"** --> Predict which clients will "no-show", predict which resumes to throw out before a human sees them, predict if a message is AI text, predict how long a task will take, etcetera. These can be absolute BULLSHIT ... but with just enough truth people actually think they're valuable.

**"JobSearch"** --> Just a typical job search algorithm. But what would make it stand out? For which features would people pay? (Example: <https://docs.talroo.com/api/search>)


TOOL: **Decodable Readers**. We can have many premade ones you can buy, a dedicated tracker for progress (which can your child already decode? which can they not?) or have a strong tool to generate your own (with given images/style/words)

TOOL: **"Everything around the learning"**. Lesson planning, curriculum-checking (what's the right order?), grade insertion/progress tracking, communication with parents/school about this.

TOOL: **WorksheetWizard** => Just a basic static website with loads of one-shot worksheet generators. This should be very easy to make for AI and great for SEO, while it can link to The Wayward Melody everywhere, and explicitly remark about our paid framework that's way more powerful and stuff.

* Explicit instruction: the worksheets should never have any text _on_ them. They only have one, optional, paragraph at the top to explain _what to do_ (to both teacher and student) ===> So we ONLY need to localize that ONE TEXT.
* The worksheet itself is then just a flat list of equations or symbolic questions.
* ONE THING TO SET US APART WOULD BE THE THEMING/OVERALL FEELING ==> Should match the magical feel of The Wayward Melody to make students _want_ to engage with it.
