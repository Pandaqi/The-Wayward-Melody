# The Free Curriculum

An HTML/Hugo website with "textbooks" on all subjects. Would be _great_ marketing for my webshop.

Completely free, completely responsive, including interactive tools for loads of stuff.

## Prompt (Claude Free)

ATTEMPT 1: I want to create a full online curriculum that 100% covers everything taught in schools (say from Kindergarten to Grade 12). I want to make this available online for free in a static website, to help teachers and homeschooling parents, and reduce their costs.

Help me lay down the entire plan for the curriculum. Below is the main hierarchy.

* Highest level = Dreams ( = subjects): Mathematics, Language, Science, Social Studies, Arts, Skills
* Each Dream has different Adventures ( = topics): 
  * Mathematics = the usual (counting, algebra, geometry, calculus, statistics, etcetera)
  * Language = the usual (grammar, spelling, vocabulary, etc) 
  * Science = Biology, Physics, Chemistry, Cosmology, Informatics (technology and computing)
  * Social Studies = History, Geography, Economics, Civics
  * Arts = the usual (Music, Visual Arts/Design, Theatre, etcetera)
  * Skills = general life skills, practical skills, anything our standard curriculums fail to teach
* Each Adventure has several Ideas ( = lessons/books/subtopics).
  * Example: Science > Physics > _Forces_ (Forces is one Idea)
  * Example: Mathematics > Geometry > _Solids_ (Solids is one Idea)
* Each Idea is cut into different Revelations ( = chapters/parts)
  * Each Revelation should be so self-contained and bite-sized that it fits within at most 500 words.
  * Describe each Revelation as three parts.
    * One short paragraph of _story_ that introduces an interesting, engaging PROBLEM.
    * A bullet point list of succinct bite-sized information taught in this chapter.
    * One short paragraph of _story_ that shows you how to SOLVE that problem using exactly the thing you were TAUGHT in this chapter.

The complete curriculum should (at least) cover 100% of the required standards for English-speaking curriculae (USA, UK, Australia).

Of course, this is a lot to do all at once. So let's go one step at a time.

First, give me a **Markdown file with complete plan for the Mathematics Dream inside**.

ATTEMPT 2: Please update this plan to already specify the exact problem each Revelation introduces + then solves. (Very succinctly, not worked out, but enough so our writers understand and can work it out later.) Also, your rule of "each Revelation fits on a single printed page" is a good one, and it is indeed imperative that the entire curriculum (or any part of it) can easily be printed or turned into books.

ATTEMPT 3: Great, now please do the exact same thing as you did for Mathematics for the **complete plan for the Science Dream**. So one Master file for the entire Dream, then one individual file for each Adventure with the Revelation outlines inside.

One small note/improvement: the story/problem must be a practical recognizable problem that a student of that age would actually experience in their daily life (with, optionally, a little magical, funny, or fantastical flair to the problem)

ATTEMPT 4 (@TODO): Great, now please do the exact same thing for the **complete plan for the Social Studies Dream**. 

One small note/improvement: I noticed many of your stories/problems are more _observations_ or _events_ than actual _problems_. Immediately presenting a problem will be more interesting as it immediately engages students to want to problem solve it. If this requires being extra silly / funny / fantastical / creative, then so be it. (But be smart about this. For some subjects, like History, the "problem" could be an actual problem people had in history that led to whatever is discussed in that Revelation, or the "story" could literally just be a real-life historic event.) Also, it feels more fitting for this project to rename "Problem" to "Mystery".

ATTEMPT 5: Great, now please do the exact same thing for the **complete plan for the Language Dream**.

Also, in response to your open decisions:

* Religious Education is usually part of Civics. Here in the Netherlands it's often combined with Philosophy and "Cultures of the World". I'm fine with creating a fifth Adventure (in Social Studies) that combines all of those and their interesting connections into one streamlined Adventure (that is also still useful to UK teachers).
* State-Level content: don't worry about this, I'll figure that out myself.
* Retrofitting mystery rule: yes, rewriting the Mathematics and Science hooks to fit the updated rules is a good idea. But it's low priority; do so after the other points above.

ATTEMPT 6: It seems you've forgotten my earlier instructions to make "mysteries" practical daily-life PROBLEMS appropriate for the intended age, so the student will immediately recognize it and be engaged because they wonder how to solve it. Your current mysteries are just random questions, which is low quality. The "Mystery" rebrand was more of a name change to fit the magical theme, these stories should still be immediate PROBLEMS that a student will want to solve.


## Monetization

* **The curriculum itself is free.** Because I believe education should be free, and because it gives the most value.
* **But it references The Wayward Melody whenever relevant.** Want to do a fun quiz about this topic? Go _here_.
* **And the support software for teachers/homeschoolers/tutors around it is paid.** 

## Writing Style

I should VERY CLEARLY specify writing style and restrictions.

* Each chapter is at most 1000 words, focused on one specific thing.
* Writing is clean, sharp, succinct. No repeated information. No wasted word. No unnecessary hesitation or uncertainty or caveats. Straight to the point, give the facts, give the new thing to learn, and get out again. No complicated words or sentence phrasing. Easy to read for anyone with basic reading ability.
* Examples are put into an `{{% example %}}TEXT HERE{{% /example %}}` block.
* Remarks are put into a `{{% remark %}}REMARK HERE{{% /remark %}}` block.
* Highlighted sections or recaps or whatever can just use the Markdown blockquotes (`>`)
* At all times, include PRACTICAL EXAMPLES and answer the question WHY ARE WE LEARNING THIS => **Make this a core part of the curriculum from top to bottom.**

OPTIONAL: Add a wrapper that turns it into one big story/puzzle/magical world? But that is _optional_. It adds one paragraph of story to the _start_ of each chapter, and then one to the _end_ based on what you've learned. You can turn that off/ignore it.

**Yes, this should really be the default style for the WHOLE THING.**

* Heading 1 = Why are we doing this?
  * Present a problem to solve. Ask user to think about how they would solve it.
* Heading 2 = Bullet-point background context (links to previous/other chapters) to make sure.
* Heading 3 = New Knowledge
* Heading 4 = Interactive widget to play around with it
* Heading 5 = So here's why we're doing this.
  * Answer to problem at start.


## Features

* PRINTING: Great support for _printing_ entire textbooks, one chapter, selected chapters, etcetera
  * Make books available too.
* INTERACTIVE WIDGETS:
  * Simply include the headless `pq-teachers.min.js` library (in English, only Widgets)
  * It will detect any widgets and load them on the page.
  * The **interactive widgets** would be a BIG DEAL to support.
* CROSS-DEVICE: Something with QR codes or whatever to make it easier to copy things on phones / let students access data on phones???
* CURRICULUM GUIDE: A POWERFUL FEATURE would be that you can just input your language/country > see list of curriculum steps > press one to immediately be brought to the right SECTIONS / LESSON PLAN for that.

## Sources / Inspiration

* SOURCE: Other open curriculae
  * https://ocw.mit.edu/
  * https://tutorial.math.lamar.edu/Extras/CheatSheets_Tables.aspx
  * https://www.reddit.com/r/learnmath/comments/dhxjje/i_compiled_a_list_of_free_online_math_resources/
  * LESSON PLAN GENERATOR: https://www.kuraplan.com/us/plans
  * OTHER FORM OF EDUCATION: <https://nl.wikipedia.org/wiki/Daltononderwijs> 
  * https://www.e-learningforkids.org/parents-teachers
  * https://www.lessonup.com/nl/lesson/wwudiqp6Tgu5QHo6E/ASe2h5HavhSjkgxN3
  * https://basisonderwijs.online/
  * https://www.junioreinstein.nl/werkbladen
  * https://bookcreator.com/2024/10/when-will-book-creator-have-ai-in-it/
* SOURCES:
  * Other AI worksheet generator (seems abandoned and bad, though?): ellmos-ai/worksheet-generator
  * magicschool.ai has lots of worksheets and games
  * worksheetscart.com/products/sight-word-worksheets-printable-fry-first-hundred-100-high-frequency-words-learn-to-read-write-kindergarten-grade-1-phonics-book-wwf165 ==> could be really great MULTISTEP exercise in my system!
  * Another great source for Math worksheets, very comprehensive = <https://edia.app/worksheets/>


RESEARCH ON COMPETITORS / EXISTING SOLUTIONS:

* https://www.reddit.com/r/Homeschooling/comments/1p8l5t5/best_self_paced_free_homeschooling_program/
* https://www.matarus.com/math/microskills/groups/addition-and-subtraction-grade-1/
* https://classroom.amplify.com/
* FREE HOMESCHOOLING:
  * https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms/x0c5bb03129646fd6:cells-organisms/e/understand-cells-and-organisms
    * https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value/cc-1st-numbers-120/v/number-grid
    * https://edte.ch/blog/khan-academy-is-not-the-progressive-model-you-are-looking-for/?v=b870c45f9584
  * https://www.sherlockhomeschooling.com/level0
  * https://freedomhomeschooling.com/
  * https://www.goodandbeautiful.com/pages/choose-electives