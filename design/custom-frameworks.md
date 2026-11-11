# Custom Frameworks

This is a list of all the custom systems I've made or want to make for the webshop. These are very important, but also large undertakings that need time and focus, so I try to spread them out and do only a few per year.

For each system, I list how far along it is and potentially any future remarks (what needs to be done/doubts/etc).

## To-Do In Order

* [x] PQ-TRIVIA
* [x] PQ-GAMES 
* [x] PQ-RULEBOOK
* [~~] PQ-EDUCATION
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

**PQ-TEACHERS [AlmostDone]:** In-Progress. Almost ready for real world usage.

## Quizmasters

**PQ-TRIVA [Done]:** Digital and Physical pub quizzes, lots of features.

## Puzzlepages

**PQ-PUZZLE [AlmostDone]**: For randomly generating logic puzzles and solutions.
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