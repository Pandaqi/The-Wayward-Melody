# Custom Frameworks

This is a list of all the custom systems I've made or want to make for the webshop. These are very important, but also large undertakings that need time and focus, so I try to spread them out and do only a few per year.

For each system, I list how far along it is and potentially any future remarks (what needs to be done/doubts/etc).

## To-Do In Order

* [x] PQ-TRIVIA
* [x] PQ-GAMES 
* [x] PQ-RULEBOOK
* [ ] PQ-EDUCATION
* [~~] PQ-ESCAPE
* [~~] PQ-OBG
* [~] PQ-PUZZLE
* [~] PQ-PUZZLE-SIM
* [~] PQ-BINGO
* [ ] PQ-GAME-BUDDY



## Explorers

**PQ-BINGO [Started]:** Throw in a list of images. Get back a bunch of randomized bingo cards (of size AxB).
* Right now, that's all it does. But it should, in the future, be an actual _interface_ for running a bingo game/event completely.

## Teachers

None yet.

**@IDEA (HUGE FRAMEWORK):** Something called **PQ-TEACHERS** or **PQ-WORKSHEETS**. The idea is basically to create little tools, little automatic generators, to create exercises and work sheets and word searches and tests automatically.

* https://www.reddit.com/r/TEFL/comments/teq96q/my_list_of_free_worksheet_generators_feel_free_to/
* https://www.education.com/
* https://www.education.com/resources/grade-k/interactive-worksheets/
* https://www.commoncoresheets.com/SpellingMaker.php (scroll down and it gives many different ways to turn the same word list into different exercises)
* https://www.commoncoresheets.com/create-a-test (you can basically slot in all the OTHER exercise types here, as a list, and it creates the full test)
* **This is a really good succinct overview of all the main things in the curriculum!** => https://www.commoncoresheets.com/sort-by-grade/ccss/

The idea is that each individual one can be self-contained, simple to make, maybe even in a day. But I can _use_ my own tools to very quickly create teaching resources, and I can _give_ them to other teachers to help them too. 

This feels like a MASSIVE win for the educational side of the store. A way to do a lot of good + get legitimacy with teachers, while clearly seeing all the parts of the curriculum myself.


IF I WERE TO USE AI CODING FOR THIS:

## Agent Instructions

### Project Structure

* Let's develop a TypeScript library called "PQ-TEACHERS" in this folder.
* This framework should allow any teacher to easily and quickly create a worksheet or test for any topic. For reference, look at something like [CommonCoreSheets](https://www.commoncoresheets.com/), how it works and what it offers.
* It should work in any browser, from a local file, with no internet needed.
* Look at my earlier libraries for code style and project architecture: [PQ-Trivia](https://github.com/Pandaqi/pq-trivia/) and [PQ-Escape](https://github.com/Pandaqi/pq-escape/) **@TODO: Escape Room one is not public yet!**
* **No dependencies.** It should not rely on _any_ other framework or module. The entire project is self-contained and standalone.
* **Keep it simple.** There is NO need to install additional packages, NO need to run expensive checks, NO need to involve Node. Just plain TypeScript ( + HTML/CSS) will do.

### Coding Principles

* Clean folder-file hierarchy. Prefer more files and folders over dumping everything onto the same level.
* One concept/purpose per `.ts` file.
* Functional coding: as much as possible as pure functions, no side-effects, same input means same output
* No repetition or wasted space: make functionality that's often needed shared and simply import it
* Strict coding: everything has a clearly defined type, even dictionaries passed into functions
* Clear naming and good data structures should be enough for me to easily understand the whole project. Only write code comments when some behavior is particularly weird or unusual.

The example libraries I pointed to display my own coding style and what I think works. But I am not a perfect programmer: you are allowed to improve this architecture based on your own knowledge and what this particular project needs.

### Prompt Workflow

* Turn this project into a GIT repository (if not already).
* After each prompt, 
  * Update `DOCS.md` to reflect every single functionality within the system and how to use it
  * Write a devlog (Markdown file) into a `devlogs` subfolder that succinctly outlines what has been added, including a to-do list of finished and unfinished.
  * Do a Code Review to make sure all added functionality works as expected, follows guidelines, and has tests to confirm this. At the end of each session, the framework should function without crashes or serious issues.
  * Then git _commit_ the changes, including a short summary of what this commit entails.


## Prompt 1

Establish "Sheet Syntax". It should be a syntax inspired by Markdown for defining exercises and tests/worksheets in _plain text_. (So that anyone can just type it in any text editor, then feed it into the system and be done.)

* Write a `DOCS.md` file that clearly explains the entire syntax so new users can easily use this framework.
  * From now on, whenever Sheet Syntax is mentioned or relevant, check its documentation in `DOCS.md` to know what to do.
* `# TITLE HERE` defines a new test/worksheet (like a Markdown h1) with the name "TITLE HERE". Any properties directly after it will modify global properties of the entire worksheet.
  * `Description`: extra remarks or explanation for the test
  * `ScoreMethod`: details on how the grade is calculated
  * `Duration`: how much time students have to complete it
  * `Material`: what materials are allowed/req
  * `Topics`: what topics (e.g. chapters of a textbook) this worksheet is testing
  * `Language`: set the language code of everything in this file
* `## SECTION HERE` defines a related group of questions (say, about the same chapter of the textbook) (like a Markdown h2) with the name "SECTION HERE"
* `### EXERCISE HERE` defines a new exercise (like a Markdown h3) with the unique ID of "EXERCISE HERE"
* After defining a new exercise, you can type all its other properties.
   * `Type`: the exercise type, which can be one of many types we'll define in a later step.
   * `Content`: the actual content, which is one or more strings of text, though the text can be links to image files or other media.
   * `Answers`: the right answer(s)
   * `Correct`: if a multiple choice question, use this to mark the one answer that's actually correct
   * `Feedback`: in case you want to explain _why_ the answer is the way it is / how one would have gotten there
   * `Points`: how many points this exercise is worth (if answered correctly)
* Properties are always written using this syntax: `PropertyName => YourValue`. Example: `Answers => 10`
* If a value contains multiple entries, they are separated by a `|`. Example: `Answers => 2 | 5`
* The `Type` property is actually a shorthand. Many exercise types will take (or even require) more properties. To define a more "complex" configuration, you can use the following syntax.
  * Type `#### TYPE HERE` to set this exercise to type "TYPE HERE".
  * Any property typed below it (until we define another heading) will be used when configuring the exercise.
* The `Answers` property is actually a shorthand. If an exercise needs more "complex" configuration, you can use the following syntax.
  * Type `#### Answers`. Below that ...
  * `##### ANSWER HERE` defines another possible answer for this exercise of value "ANSWER HERE"
  * Below each individual answer, like before, use properties to configure the answer. 
    * `Points`: how many points you score for getting this particular answer correct
    * `Show`: yes or no, defaults to no. If yes, then the exercise basically becomes multiple choice.
* Anything behind `//` is a comment that's ignored/stripped out by the system.
* This list already explains how to define a type for an _exercise_. 
  * But you can also define a type (in exactly the same way) for a _section_, which will make all questions in that section default to that same type (with the same parameters).
  * And you can do the same for the entire worksheet (a global property below `# TITLE HERE`) to make ALL questions default to that type


Note that properties should always be assigned to whatever the latest heading was. If we type properties below an exercise, they belong to that exercise. But as soon as we start a _new_ exercise, as expected, those properties belong to the _new_ one.

Also note that exercise types will define their own custom properties. As such, don't hard-code these property names and only look for the ones mentioned, the system should be able to easily read and decode _any_ property and use its key/value pair.

Below is a larger example of how to define a worksheet with Sheet Syntax.

```
# Math Worksheet
Description => Asks some questions with numeric answers.
ScoreMethod => Points per question.
Duration => 5 minutes
Language => en

## Custom

### WW2-Question
Type => Plain
Content => When did World War 2 end?
Answers => 1945
Points => 2

## Addition

### Addition-1
Content => Add these numbers.

#### ExerciseAddition // Sets the type
Quantity => 3
Min => 1
Max => 5
```


## Prompt 2

Create the main `Exercise` type/class.

* All implementations need to support `serialize()` (turn JS object into Sheet Syntax) and `deserialize()` (turn Sheet Syntax into the proper JS object)
* All implementations need to support `display()` (output whatever nodes needed to display the full question)
* All implementations need to support `generate()` (randomly generate the specific values/answer for this specific instance of the exercise)
* Each exercise has a hard-coded description (_what kind of exercise is it?_), a list of curriculum topics for which it can be used, and an icon. (Icons can just be emojis or empty for now, but they can take images later.) This is for the teacher and UI, NOT displayed on the test itself.
* Each exercise has a default `Content` (the actual question being asked). This is displayed on the test, unless overriden with custom `Content`.
  * A `HideExplanation` property can hide the default explanation (in case you don't need it again), if set to `yes`.
* Depending on their specific implementation, they 
* Write unit tests to check if every part if this serialization works properly (both ways). Sheet Syntax is converted into JS objects with no mistakes/loss of data, and vice versa.

To test all this, create the first few types of exercises. Each exercise should be a self-contained module that extends `Exercise`. Whenever you notice that multiple exercises need the same thing, make it a default functionality of the `Exercise` base class.

* `ExercisePlain`: simply display your content (and your answers if multiple choice). 
* `ExerciseAddition`: 
  * Takes 3 properties: `Quantity`, `Min`, `Max`
  * Generate: `Quantity` random numbers between values `Min` and `Max`
  * Display: all numbers in a row with a `+` symbol between them
  * Correct Answer: the _sum_ of all the numbers generated.
* `ExerciseIndefiniteArticle`:
  * Takes 3 properties: `MinLength` (default 10), `MaxLength` (default 200), `BlankSymbol` (default `"___"`)
  * Data: a list of simple sentences that contain one indefinite article (`a` or `an`) 
    * For now, such data is just stored hard-coded in this specific exercise.
  * Generate: pick one sentence from the list, which is between `MinLength` and `MaxLength` in length
  * Display: the sentence picked but with the indefinite article replaced by a blank ( = `BlankSymbol`).
    * Note: something like "replace something matching this pattern by a blank" should definitely be a single reusable function in the codebase that other scripts can import, we will need it a lot
  * Correct Answer: the correct indefinite article (that was replaced by a blank)

Remember, each exercise is defined by a self-contained extension of the `Exercise` class. If an exercise needs any other assets, it's put into its own folder (with assets as siblings). This should make it easy for teachers to create their own exercises and share them with others.

Below is an example of how one would define such an exercise using Sheet Syntax.

```
### TestQuestion
Content => Fill in the correct article in the blank ("a" or "an").
Points => 2

#### ExerciseIndefiniteArticle
MinLength => 30
MaxLength => 50
BlankSymbol => _ _ _

```

We probably need a simple `ExerciseRegistry` or `ExerciseDatabase` to list all exercises implemented/supported. Otherwise there is no way to list them all + pick the one you want when using the UI.


## Prompt 3

Create the `TestWizard`.

* Create a webpage that can be loaded locally in the browser. 
  * People should only need to create an `index.html` file, load this JS library, and define the test with `new TestWizard({ ... options here ... })`.
  * If you open that file in any browser, it works.
* It starts with an "empty test/worksheet". 
  * But you can also _upload_ a plain text file (pick one on your pc) to load/configure a test using Sheet Syntax.
* Add UI to develop the test on the page:
 * With a button, you can add or remove one `Exercise` to this test.
 * Make it easy to configure exercises in the UI once added.
   * Each exercise has a button: press it to exit/enter "configuration mode" for that exercise.
   * This mode displays the main info about the exercise as well as all the different properties you can change.
   * Everything needed for the UI/configuration should NEVER be part of the final PDF when you print the worksheet.
 * Make it easy to remove, duplicate, or re-order exercises already added.
 * Each exercise displays its contents (of course), but also a space to give the answer (if needed).
   * This should be responsive. On wide screens, exercises can form a grid. On narrow screens, or when the exercise is particularly wide, they stack as a column.
   * There should be a `Columns` property to let the user _control_ how many columns the layout creates.
 * Also add a foldable section (probably near the top) to configure the global properties of the entire worksheet.
 * You can press a button to export this test: as a plain text file (Sheet Syntax), as PDF (use built-in print feature of browser), as JSON (one big Test dictionary with all its properties/exercises simply exported as a list of dictionaries inside it)
* To make printing as useful as possible, set up the HTML and CSS so that the test leads to clear and beautiful PDFs automatically.

## Prompt 4

Let's add support for multiple languages.

* Each language supported gets a single TypeScript file in `translations` named after its official language code.
* Translations are simple key,value pairs. Whenever the software finds a key present in the translation (of the current language), it converts it to the value. 
* Example: `"TITLE_LABEL": "title"`, then "This is the TITLE_LABEL" becomes "This is the title" in English.

Rewrite the library so that _every single part of it_ is translatable. Yes, this means every string must go through some translation check before it's printed to the page.

* Add an English translation file with the proper key,value pairs---once done, the user experience should be exactly as it was before we added translations.
* To test this properly, also add a Dutch translation file with the proper values.
* Add a dropdown to the `TestWizard` that allows switching. (The options of this dropdown default to all languages that our _framework_ supports, not necessarily languages of exercises.)

We should also support defining translations for a specific exercise _in the exercise themselves_. So,

* Add a property `translations` to `Exercise`.
* It contains a dictionary with key,value pairs like before, indexed by language. Example: `{ en: { "ADD": "Add" }, nl: { "Add": "Optellen" } }`
* Whenever we translate anything in this exercise, these keys have precedence over global ones.

Finally, we should support uploading multiple (Sheet Syntax) text files at once into `TestWizard`. If we do so, the system automatically treats them as different languages.

* The language code is detected from the file name. 
* Example: A file that ends in `.en.md` is English, one that ends in `.nl.md` is Dutch
* If we were to put both those files in at the same time, it would create a worksheet that can toggle between English and Dutch. _This assumes that your exercises are in identical order in both files._ That's how it matches them across languages.

Make sure all translations are maintained when exporting/importing the test.


## Prompt 5

Allow the system to switch between several modes: EDITING, PRINTING, TAKING, and GRADING

* EDITING: the mode we've been using so far, where you can edit and create your worksheet
* PRINTING: displays your worksheet (ready to use/print), no editing allowed
* TAKING: makes the worksheet _interactive_ so a student can take it right in the browser.
* GRADING: displays the worksheet with all correct answers filled in / highlighted with each exercise.

The "TAKING" mode (or "INTERACTIVE") will be the hardest to get right.

* Exercises should define the `Input` they want: 
  * RADIO: Click one of multiple options 
  * DROPDOWN: Alternative way to let people pick one from multiple options
  * CHECKBOX: Click zero or more of the options
  * TEXT: Single-line text input
  * TEXTBOX: Large box for lots of text input
  * NUMBER: A specialized input for numeric answers
* After each change, all the answers are saved (in `localData`). It saves them indexed to this test's unique title. (So it can remember multiple different tests at the same time.)
* (If you reload, and it finds saved data for this particular test, it fills in those values again.)

The "GRADING" mode should also allow printing the answer sheet as PDF, as well as printing _only_ the answers (not the exercises themselves).

@TODO: You can "share" tests now by adding `builtin: EXPORTED_JSON_DATA` in your `index.html` when creating the worksheet. It detects the builtin and loads the right test automatically. You can just _share that file_ with students. But I would like a way that allows just SHARING A LINK and they can visit it themselves. How could this be possible, while keeping the system completely local-file-based and self-contained?


## Prompt 6

Let's create our first exercise that needs to do something more complicated than just print text. 

* Many exercises will need to _draw_ (randomly generated) stuff.
* We will use `SVG` for this. (NOT fixed images, NOT canvas manipulation.) 
* We should create a simple reusable (sub) framework for anything in our system that needs to draw. As we develop PQ-TEACHERS, the support for drawing lots of things should only grow and get stronger.

To test this, create the first two exercises that need it.

`ExerciseFractionsPie`:
* Properties: `Pieces` (integer)
* Generate: pick the `Quantity` = a random number between 1 and `Pieces`. Pick a random color.
* Display: draw a circle cut into `Pieces` identical slices, then fill "Quantity" pieces with our chosen color.
* Correct Answer: 1 / `Pieces` x Quantity (kept as a fraction, not decimal)

`ExerciseCoordinatesInteger`:
* Properties: `MinX`, `MaxX`, `MinY`, `MaxY`
* Generate: pick a random coordinate with x between `MinX` and `MaxX`, and y between `MinY` and `MaxY`
* Display: a square 2D grid with X and Y axes, bounds labeled, and origin labeled (if visible). Then display a big dot at `(x,y)`: the coordinate we generated
* Correct Answer: the coordinate we generated. 



## Prompt 7

Create a FULL LIST of `Exercise`s to implement, based on <https://commoncoresheets.com>. 

* Put this into the file `ROADMAP.md` and sort them based on curriculum order.
* For each exercise, define it as I have done so far: what it does, the properties it takes, what it generates (whenever you include it), what it displays, what the correct answer is.


@TODO:

* Core functionality to convert NUMBERS to different representations (decimal, fraction, integer with rest, etc)
* Core functionality to convert TEXT to different representations (lowercase, uppercase, Sentence case, ??)
* Functionality to turn your worksheet into printable FLASH CARDS ==> So, exercise at the _front_, answer at the _back_.
* Automatically NUMBER sections, then NUMBER/LABEL exercises accordingly.
  * Exercise 3 in section "SUBTRACTION", would be "S.3"??
* Visual Themes
* UI Configuration/Settings
* Default header/footer/watermark/branding.
  * Not just to let users set it.
  * But also so I can set it myself and brand it for The Wayward Melody
* Support for LaTeX and more complicated displays/answers/usage
* SHARED DATA -> Create a single shared `ExerciseData` interface/object (that contains loads of example sentences, word lists, etcetera) that all exercises have access to and can read from. (To prevent duplication of same/similar data within each and every new exercise created.)
  * We probably want this to read from JSON files or raw data inside some `data/` folder that we can keep growing and growing.

## Quizmasters

**PQ-TRIVA [Done]:** Digital and Physical pub quizzes, lots of features.

## Puzzlepages

**PQ-PUZZLE [Started]**: For randomly generating logic puzzles and solutions.
* The generation part is _mostly_ done. Just needs some cleanup and API improvements.
* The printing part is _not started at all_. (Automatically turning generated puzzles into PDF, including explanation images/text etc, once done.)
* The interactivity part is _not started at all_. (Actually playing the puzzles on the computer.)

**PQ-PUZZLE-SIM [Started]**: For generating more custom/varied/freeform puzzles for play in digital games.
* I know the basic structure (and wrote that in Rust/Bevy) from my earlier games.
* But this has been very untested and lots of features missing.

## Runaways

**PQ-ESCAPE [AlmostDone]**: Digital and Physical escape rooms, lots of features, full experience.
* This is _mostly done_. It's missing some crucial features + loads of possible input/codex methods.
* And then it's just about creating rooms and debugging.

## Gamiverses

**PQ-GAMES [Done]**: For generating final board game material from settings and code.
* Really just needs more testing and perhaps a few more standard features.
* And Pandaqi needs to be fully moved to it.

**PQ-RULEBOOK [Done]**: For displaying, interacting with and printing (board) game rulebooks.
* Like PQ-GAMES, just needs more testing and usage to make it robust.

**PQ-GAME-BUDDY [JustAnIdea]**: A simple program I can give along games that need it + easily make available on Pandaqi at all times.
* It should incorporate the stuff I already have in "tools": randomness (throw dice, select random player from list, etc) + dictionary + etc
* It should add a very good **score tracker**
* And it should add a very good **real-time game tracker**. This would allow me to make "real-time games" (like _Kitchen Rush_) without requiring hourglasses or everyone bringing their phone or whatever.
  * The dream would be to have "template" files (`game-name.gamebuddy` or something).
  * Just load that into the system, and it automatically sets the right settings + prepares timers at the right lengths and stuff.
  * Then, while playing, every player just gets this big block that they can _tap_ to reset/pause their timer. (So you can play with multiple players on a single phone/device.)

**PQ-OBG [AlmostDone]**: For _One Button Games_ (in Godot Engine).
* Just needs more features.
* And perhaps some finetuning of UI/sizes/naming/etc as I make more games with it