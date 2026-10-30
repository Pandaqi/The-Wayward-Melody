# Research on AI (Coding)

## AI PLANS

**Everyone clearly says that subscriptions are massive value for money, and API should only be used when building a SaaS web app.**

Also, they say **Codex** gives you way more usage than **Claude** at the moment, for the same price. **So go with that?**

Sources: <https://www.reddit.com/r/codex/comments/1vpv0sv/claude_vs_codex_whats_currently_better_for_coding/>


* DeepSeek cheapest + I'm off-peak in my timezone (https://www.activepieces.com/blog/deepseek-api-pricing-2026-cost-per-1m-tokens)
* GLM 5.3-Flash also very cheap + has native desktop app (https://docs.z.ai/guides/overview/pricing)
* Codex is good now because they just released something new, but price hikes will probably come. (https://chatgpt.com/codex/pricing/)
* Claude is the best but WAY too expensive (https://claude.com/pricing)
* BEWARE: Tools like "web search" often cost extra (especially on GLM), so make sure to NEVER let my prompts Search or Fetch.

## Plugins / Tools To Reduce Token Usage (or Improve Output)

* Prevents AI from looking a entire project folder ( = only context it needs): https://github.com/yvgude/lean-ctx
* Write simpler/less code instead of inventing complicated workarounds: Ponytail 
  * https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail/SKILL.md
  * https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md
* Reduce output usage with "caveman style speak": https://github.com/juliusbrussee/caveman#proof
* Basically a combination of all three at once that claims to be better and simpler: https://github.com/JayPokale/Chisle


## AI TOKEN SAVING

* Lower (auto) compact window ---> the number 300k or 60% is floating around a lot
* Ask it to be efficient and save tokens
* Use prompt caching
* A new session for each new thing
* Split in two steps: Create a plan, nothing more ===> Follow that exact plan, nothing more.
* (Instead of referencing websites or big documents, strip them to just .txt or .md files with the essentials, and upload that as an attachment)

Also interesting list of Claude Skills people are using:

* https://www.reddit.com/r/ClaudeAI/comments/1xevkyg/drop_your_best_claude_skills_in_here/
* https://gist.github.com/xificurC/8377d51a0c080ad81bb92a55911a0fd0
* https://github.com/integralist/agent-skills => BIG LIST, WELL MAINTAINED

## AI TOKEN SAVING; Longer Responses

> I do the same. Just start a new session and say “go through our session history for this project and look for ways to save tokens” it showed me where I was wasting tokens. Like instead of making 5 individual calls for something it was able to batch them together or put more things into scripts, limiting my auto compact window to 300k, or now I have an automation pipe line that at the end of each task in the project plan it does a handoff for what to do next then calls a script that restart all my sessions then picks up the handoff. 

> https://github.com/pleasedodisturb/awesome-llm-token-optimization

Also nice:

>  If your main project Markdown file is 200+ lines, you’re wasting tokens and confusing the AI. Every prompt forces the model to re-read that entire PRD before it even looks at your code.
> 
> The Fix: Use a "Map" File Instead of one massive file, turn your main MD into a 20-line high-level overview. Use it only to tell the AI where to find the details in other files.
> 
> The Model Hierarchy Opus (The Brain): Use for high-level planning and architectural decisions. Sonnet (The Builder): Use for the actual coding and implementation. Haiku (The Janitor): Use to clean up your MD files and keep things organized.
> 
> The Workflow Keep it lean: Your main MD should just be a "Table of Contents" (tech stack, core goals, and file paths). Surgical Context: When you ask for a feature, the AI sees the "map," knows exactly which sub-file to access, and ignores the rest. Lower Latency: Less "noise" in the main file means faster, more accurate responses and fewer hallucinations.
> 
> Bottom line: Don't make the AI read the whole book when it only needs one chapter to write your function. 

Also nice:

> Start with spec-driven development.
> Make a json that describes your source code. The json makes it unnecessary for the llm to lopen the source code.
> Make Sonnet compress the output. You can then use Haiku to uncompress and make the code changes. I.e. Sonnet makes the decisions, Haiku makes the changes, by just following Sonnets instructions. 


VERY DETAILED EXPLANATION (SOURCE: <https://www.reddit.com/r/ClaudeCode/comments/1x0ya1v/comment/pepwqtt/?context=3>):

 Intensely!

All projects are managed in their own directory, with their own repo, repo-level Claude.md.

I have a global delegation rule for top level sessions to function as orchestrator/delegator/reviewer/merger.

Global agent rule to handoff at 45-50 tool calls (generally keeps their context windows around 150k, the work goes faster, context stays fresh; it’s great) to a fresh agent.

Scope an epic with the PM and send it. Rules against ticket fanning, etc. there’s a hook which fires at 250k context to begin a handoff process which includes logging session progress, updating a handoff file, setting a platform level prompt back to itself on a 3 min delay, then hit a /clear, receive the prompt, and continue fresh.

I make my PM sessions coordinate on CPU, RAM, vRAM, and GPU resources to prevent resource issues while sharing the full machine.

So far, my gaming pc has been running nearly full blast since starting this current weekly account and I’ve done 11% of my weekly in 17 hours with 3-4 opus 5.5 med sessions.

EDIT: Been a hot minute since receiving a reddit award, thanks! I saw some chatter below about wanting more detail, so i told claude to give it to ya:

How I keep Claude Code token use low while running 3-4 sessions flat out

The short version: nothing stays in a context window longer than it has to. Durable state lives in files and tickets, so any session or agent can be thrown away and replaced by a fresh one at any time. Hooks enforce this, because rules written in CLAUDE.md alone get forgotten once a session is deep into work.
1. Layout

    One directory + one git repo per project, each with its own repo-level CLAUDE.md (paths, machine limits, project defaults, process rules).

    A global ~/.claude/CLAUDE.md for rules that apply everywhere (branch -> PR -> merge, where big files go, GPU rules, writing style).

    Work is tracked as GitHub issues on a project board. Tickets are the long-term memory, not the chat.

2. Top-level session = orchestrator only

The session I talk to (the "PM") plans, delegates, reviews diffs and merges. It does not write code, run long tool chains, or do research legwork. All of that goes to subagents.

    A SessionStart hook prints the routing rules into every new session, so the rule is there from message one.

    Each task goes to the cheapest model tier that can do it: Haiku for lookups/shell/mechanical edits, Sonnet for normal feature work, Opus only for hard debugging. On failure, go up one tier; never redo it inline.

    Why it saves tokens: a subagent's 100k of file reads and test output never enters the PM's context. The PM only sees the agent's short report. The expensive model's context stays small and it stays on planning.

    Every agent spawn is logged to a JSONL file by a PostToolUse hook, so I can audit what got delegated to which tier.

3. Agents hand off at ~50 tool calls

Agents can't see their own token count, but tool calls can be counted. So:

    A PostToolUse hook keeps a counter per agent_id (the hook payload includes it for subagents; the main session has none and is skipped).

    At 50 calls it injects: "stop at your next milestone, push, post a handoff comment on your ticket, end." At 60 it injects a hard stop.

    The handoff comment is self-contained: head SHA, numbers, what's in progress, ordered remaining steps, scratch paths, gotchas.

    The PM then starts a fresh agent briefed from the ticket comments.

50 calls is usually around 150k context. Past that, every further tool call re-sends a large context, and quality drops. Fresh agents are cheaper per call and faster.

Every agent brief includes this checkpoint/handoff clause, plus: "you are the executor, don't spawn sub-agents" (otherwise they stall trying to delegate further).
4. The PM hands itself off too (the automated part)

Answering "how did you automate handing off the sessions":

Trigger. A hook on PostToolUse and UserPromptSubmit reads the tail of the session's transcript JSONL, finds the last assistant message's usage block, and sums input_tokens + cache_read_input_tokens + cache_creation_input_tokens. That's the real context size.

    250k: injects a warning - finish the current milestone, don't start new work.

    300k: injects an order - run the handoff skill now. Repeats every extra 50k if ignored.

Hooks inject text by printing JSON with hookSpecificOutput.additionalContext; the model sees it as a system message.

The handoff skill (a SKILL.md the session follows step by step):

    Stop dispatching. Let running agents reach a safe point and post their own handoff comments. Leave nothing running.

    Write a handoff file to handoffs/<sessionId>/<timestamp>.md: role and which docs to read first, state per ticket (PR, worktree, branch, SHA - measured with git/gh, not recalled), paused agents, pending decisions for me, ordered next steps, gotchas, scratch paths.

    Create a one-time scheduled task in the desktop app, firing ~3 minutes out. Its whole job is to send a message back to this same session: "HANDOFF RESUME: read <file> and follow the resume section of the skill."

    Append an entry to an append-only handoff log (what was done, what's next).

    Give me a summary, then clear its own session as the very last tool call.

Resume. Three minutes later the scheduled task fires, the now-empty session receives the message, checks the file path really belongs to its own session id (so a stray message can't hijack it), reads the handoff file, deletes the wake task, re-checks state against the live repo, and carries on.

Same session id, same title, same folder - just an empty context. I don't have to do anything.

The 3-minute delay exists because the clear only lands when the turn ends; the wake has to arrive after it, not before.

If you're CLI-only: the same pattern works with a hook that writes the handoff file and a cron/at job that starts claude -p "read <file> and continue".
5. Things I left out of the post

    Command output filtering. A PreToolUse hook on Bash rewrites commands through RTK (git status -> rtk git status), which strips noise from command output before it reaches the model. Skipped automatically when output is piped or machine-parsed.

    Terse output rules. Global writing-style rules (answer first, no preamble, no recap) plus a concise output style. Output tokens are the expensive ones.

    Small memory. Memory is one fact per file, with a one-line index. Only the index is loaded every session; a file is read when its line looks relevant. Rule for saving: only things that would change behavior in future sessions. No status logs, nothing the repo or git history already records.

    CLAUDE.md stays short. It holds pointers ("details in docs/X.md") rather than the details. It's loaded into every session and every agent, so each line is paid for many times.

    No ticket fanning. Scope one epic with the PM and send it. Max 3 (depends on what i have going on) agents at once, one git worktree each, never two agents on the same host.

    No idle polling. A hook blocks agents from backgrounding a long job and ending their turn to "wait". Long waits are blocking calls with timeouts; CI waits are short loops. Each wake-up of a large context just to check "is it done yet" costs a full context read.

    Agents never self-merge. The PM reads the diff and checks the numbers itself. Catching a bad PR before merge is cheaper than a fix round.

    Root-cause rule. Every fix states why the bug got through and closes that gap. Fewer repeat fix rounds.

6. Sharing one machine across sessions

Not a token saver directly, but crashed jobs and reruns burn tokens.

    All GPU jobs go through one wrapper script: a FIFO queue + flock lock, with a VRAM check before and after taking the lock. Sessions check --status before launching. Nobody kills another session's job.

    Caps written into CLAUDE.md: keep >= 3 GB VRAM free (or the desktop crashes), <= 8 CPU workers for training, a RAM cap, all caches/venvs/weights on the data drive.

    PM sessions message each other to negotiate who gets priority when they collide.

Result

3-4 Opus sessions on medium effort, PC near full load: 11% of the weekly limit in 17 hours. 

