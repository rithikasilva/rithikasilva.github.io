# Code Review in the Age of Agents

> Working draft: the size boundaries and review practices are starting points to refine.

Writing code with agents is increasingly common. In many situations, someone who knows how to pilot an agent can produce code faster than they could write it themselves. As more people learn to work effectively this way, that speed won't be limited to a handful of developers on a team.

That raises a question: **how do you review code when more people can produce more of it, faster?**

This isn't a post about how you test or review your own agent's output. It's about the other side of the pull request: how you, as a reviewer, understand and evaluate a change produced by someone else, whether they wrote it by hand, worked with an agent, or did a bit of both. The author can provide context and evidence, but the reviewer still needs a way to assess the change and its consequences.

As the volume grows, even the phrase *code review* might become too narrow. Reading a diff remains important, but the process also involves reviewing the design, the evidence, the integration, and the way the work is divided. Maybe we need a better name for that. For now, I'll call it code review.

For context, my team primarily writes C++ for its core components and uses Python tooling to help diagnose issues after those components run. That shapes my perspective on how much code I can reasonably review; your language, codebase, and familiarity with both may lead to different answers. I'll keep the details of the work itself out of this discussion.

## Thinking in buckets

Let's start with the amount of functional code in the diff: code whose behavior a reviewer needs to understand, rather than a large formatting change, repetitive boilerplate, or comments. Those other changes can still matter—especially if generated or mechanical changes affect behavior—but a raw line count can make a diff look much larger or smaller than the review it requires.

The line counts below are deliberately rough, anecdotal examples from the kind of codebase I work in—not limits to apply everywhere. The buckets are really about three different situations: a change that is reasonably reviewable, one that can be reviewed but takes a long time, and one that could consume a substantial part of your week alongside your own work. Complexity, risk, familiarity, and how often these reviews arrive all matter.

Readability matters too. A reviewer familiar with a Python codebase might be able to move through a change more quickly than they could through the same amount of unfamiliar, dense code in another language. Neither language nor line count alone tells you how difficult a review will be. The question is what these buckets mean for *your* codebase and your team.

## Reasonably reviewable

This is the closest to a traditional review: you can read the change, inspect its surrounding context, and build an understanding of what it does without the review becoming a major undertaking. Anecdotally, in the kind of codebase I work in, this might be under roughly 1,000 lines of functional changes. That doesn't mean every change below that number is quick or easy, and your threshold may be very different.

Start with the purpose of the change. What problem is it solving, and what should happen differently? Find the main path through the implementation, then read the changes in context. Look for assumptions, failure cases, and interactions with existing behavior. Check the evidence the author provides: what do the tests actually cover, and what remains uncertain? Run a focused check when it would help answer a question.

An agent can help a reviewer navigate unfamiliar code or suggest places to investigate. Its summary is a starting point, not a substitute for understanding the change. Verify any proposed finding before passing it along, and don't treat the absence of findings as proof of correctness.

Small also doesn't mean low-risk. A short change to authentication, concurrency, or data handling may need deeper review or a second reviewer with the right expertise. The goal is to understand what you're approving, not to get through the diff as quickly as possible.

## Reviewable, but time-consuming

A review can be technically possible while taking a significant amount of time. Even if each individual part is understandable, the reviewer has to keep track of how those parts fit together. Anecdotally, this might be somewhere around 1,000 to 10,000 lines of functional changes in the codebase I work in. That range is illustrative, not a promise that every change within it is reviewable as one unit. A good process needs to account for the cost rather than assuming that a large pull request is just a longer version of a small one.

Before opening every file, ask for a map: the problem, the approach, the major components, important decisions, and how the pieces interact. Review the design and main execution path first. Then work through the code in logical sections, recording what you have covered and where you still have questions. If parts require different expertise, agree on review responsibilities rather than assuming someone else is covering them. The interactions between those parts still need attention.

Ask whether the change can be delivered in smaller, coherent steps. Separating a preparatory refactor, a behavior change, and unrelated cleanup can make each review easier to understand. Dependent changes can use stacked pull requests, provided the team also reviews the overall design and checks that intermediate states are safe.

Automated tests, static checks, and a clear description can reduce repetitive work and give reviewers evidence to examine. They do not establish that the design is right or that the tests capture the intended behavior. The reviewer should be able to say what they checked and where their confidence comes from.

## Review becomes a workload of its own

Imagine receiving a change every week that takes a substantial portion of your time to understand, in addition to the work you're already responsible for. Anecdotally, a diff of around 10,000 or more lines of functional changes might fall into that category in the codebase I work in; in yours, it could happen much earlier. Even if every line is technically reviewable, reviewing the whole thing carefully and understanding its interactions is a workload of its own. The problem isn't only whether one pull request can eventually be reviewed; it's whether the team's review capacity can keep up with the rate at which changes arrive.

At this point, a summary and a green test suite cannot make the review problem disappear. A reviewer should be able to say that a change is too large to approve responsibly in its current form. The first question is whether the work can be redesigned or divided into smaller increments that can be understood and verified in sequence.

Some changes are genuinely hard to split. In those cases, the team needs an explicit plan: who reviews which parts, who looks at the overall design and interactions, what evidence is required, and how much time the review will take. Dividing responsibility does not eliminate the integration review. And if the necessary review cannot fit alongside existing commitments, that is a capacity decision for the team—not something to solve by silently lowering the standard for approval.

## What a review should communicate

Across all three buckets, approval is not a guarantee that the code has no bugs. It should communicate what was reviewed, what evidence was considered, and whether the reviewer understands the change well enough to support merging it. If the review covered only one area, or an important check wasn't possible, say so.

Feedback should help the author understand the concern. Distinguish a correctness issue from a question, a suggestion, or a stylistic preference, and explain the impact where it helps. The point is not to find fault with the person—or the agent—that produced the change. It is to help the team make a sound decision about code it will own together.

Agents can increase the rate at which code is proposed. The review process has to make the cost of understanding and integrating that code visible, too.

## Notes for the next draft

- What does your actual review process look like for each bucket? Where do agents help you as the reviewer?
- Are there anonymized examples that show why a review became difficult or how a team made it manageable?
- Are 1,000 and 10,000 useful illustrative boundaries for the audience, or should the examples change?

## Further reading

- [Google: What to look for in a code review](https://google.github.io/eng-practices/review/reviewer/looking-for.html)
- [Google: How to write code review comments](https://google.github.io/eng-practices/review/reviewer/comments.html)
