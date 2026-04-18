# DT Fellowship Assignment: The Daily Reflection Tree

## Design a Deterministic Reflection Agent — No LLM in the Product

**Duration:** 48hours | **Tools:** Use any AI/LLM to help you *build* it | **Stack:** Any

---

## Why This Assignment

### What DT Does

DeepThought Growth Teams builds **management operating systems** — software that helps companies run better by making their value chains visible, measurable, and improvable. Our core product is a **Practice-Driven Growth Management System (PDGMS)** — a structured ontology that maps how organizations create value, where constraints hide, and what practices drive improvement.

Think of it this way: most enterprise software captures *what* happened (CRM, ERP, project trackers). We capture *why* it happened and *what to do about it*. This requires encoding management science, organizational psychology, and domain expertise into **structured, navigable trees** — not as free-form AI chat, but as deterministic systems that guide people through rigorous thinking.

### Why We Give This to BA/DS Candidates

At DT, Business Analysts and Data Scientists don't just query dashboards or build models. They are **Knowledge Engineers** — people who:

1. **Extract structure from domain expertise.** You take a psychological framework (like Locus of Control) and turn it into a branching tree that a non-expert can navigate. This is exactly what we do with management science — we take theories from TOC, systems thinking, and behavioral economics and encode them into products.

2. **Design for determinism.** Our systems don't guess. When a manager uses our tools to diagnose a constraint in their value chain, the system walks them through a structured sequence — not an LLM hallucinating advice. You'll do the same kind of work: turning fuzzy human domains into crisp, auditable decision paths.

3. **Use AI as a power tool, not a crutch.** We use LLMs extensively in our workflow — for research, prototyping, drafting, testing. But we ship deterministic trees, not chatbots. This assignment tests whether you understand that distinction and can operate on the right side of it.

4. **Think in trees.** Trees are our primary data structure — for value chains, constraint taxonomies, practice ontologies, and conversational flows. If you enjoy designing this reflection tree, you'll enjoy the work.

### What This Tells Us About You

- **Curiosity about human behavior:** Did you actually read the psychology, or did you copy-paste a blog summary? The depth of your questions reveals the depth of your research.
- **Structural thinking:** Can you take a spectrum (victim ↔ victor) and decompose it into a sequence of concrete, chooseable options? This is the core BA/DS skill at DT.
- **AI fluency without AI dependency:** Did you use LLMs to accelerate your design process? Good. Did the LLM write your tree for you and you submitted it without thinking? We'll know.
- **Craft:** Does the tree feel like a conversation or a survey? The difference is care. We hire for care.

---

## The Big Idea

You are an **AI-powered Knowledge Engineer**. You will use LLMs (ChatGPT, Claude, Gemini — whatever you like) as your collaborator to *design and build* a deterministic reflection tool. But the tool itself — the thing an employee uses every evening — **must not call any LLM at runtime**.

Why? Because reflection tools must be **predictable, auditable, and trustworthy**. An LLM can hallucinate encouragement, fabricate psychology, or give inconsistent advice across sessions. A well-designed tree gives the same quality every time — because a human (you) encoded the intelligence into the structure.

**The output is a tree. The tree is the product. The LLM is your power tool, not your product.**

---

## What You're Building

An end-of-day reflection tool that walks an employee through a structured conversation using a **decision tree**. The tree asks questions, the employee picks from fixed options, the tree branches based on their answers, and the employee ends the session with a clearer picture of how they showed up that day.

No free text. No AI classification. No ambiguity. Every question has defined options. Every option leads to a known branch. The entire conversation is **fully deterministic** — given the same answers, the employee always gets the same path.

---

## The Three Axes of Reflection

Your tree must move the employee through three psychological axes, in order. Each axis is a spectrum. The questions help the employee locate themselves honestly.

### Axis 1: Locus — Victim vs Victor

> "Why does this always happen to me?" vs "I chose how I responded."

**The psychology:**
- **Locus of Control** (Julian Rotter, 1954): People with an *internal* locus believe their actions shape outcomes. Those with an *external* locus believe circumstances, luck, or others control what happens to them.
- **Growth Mindset** (Carol Dweck, 2006): The belief that abilities can be developed through effort, strategy, and feedback — versus a *fixed mindset* that treats talent as innate and unchangeable.

**What your questions should surface:**
- Did the employee describe today's events as things that *happened to them*, or things they *navigated*?
- When something went wrong, do they see where they had a choice — even a small one?
- The goal is not blame. It's noticing agency.

**Example question:**
> "When something didn't go as planned today, what was your first reaction?"
> - A) "I thought about what I could have done differently"
> - B) "I felt frustrated by things outside my control"
> - C) "I adapted and found another way"
> - D) "I waited for someone else to fix it"

Options A and C indicate internal locus. B and D indicate external. The tree branches accordingly — not to judge, but to ask different follow-up questions.

---

### Axis 2: Orientation — Contribution vs Entitlement

> "What did I earn today?" vs "What did I give today?"

**The psychology:**
- **Psychological Entitlement** (Campbell et al., 2004): A stable belief that one deserves more than others — independent of actual contribution. Entitled employees focus on what the organization *owes* them.
- **Organizational Citizenship Behavior** (Organ, 1988): Discretionary effort that goes beyond formal job requirements — helping a colleague, improving a process, volunteering for unglamorous work.

**What your questions should surface:**
- Is the employee thinking about what they *received* today (recognition, credit, resources) or what they *gave* (help, effort, teaching)?
- Entitlement is invisible to the person holding it. Your questions make it visible without shaming.

**Example question:**
> "Which of these best describes a moment from today?"
> - A) "I helped someone with something that wasn't my responsibility"
> - B) "I felt I deserved more recognition for my work"
> - C) "I did something extra without being asked"
> - D) "I felt frustrated that others weren't pulling their weight"

Options A and C indicate contribution orientation. B and D indicate entitlement orientation. Different branches, different follow-ups.

---

### Axis 3: Radius — Self-Centrism vs Altrocentrism

> "How did today affect *me*?" vs "How did today affect *us*?"

**The psychology:**
- **Self-Transcendence** (Maslow, 1969 — the often-overlooked peak above self-actualization): The shift from "What do I need?" to "What does the world need from me?" Maslow's later work argued that the healthiest humans orient outward.
- **Perspective-Taking** (Batson, 2011): The cognitive act of imagining another's experience — not sympathy, but empathy-as-understanding.
- Most emotional pain at work is amplified by self-centeredness. Orienting toward others doesn't suppress problems — it contextualizes them within something larger, which reduces suffering.

**What your questions should surface:**
- When the employee thinks about today, is the frame entirely self-referential ("my work", "my stress", "my goals") or does it include others ("the team's deadline", "a colleague who was struggling")?
- The goal is **transcendence** — the realization that contributing to something beyond yourself is the most reliable source of meaning.

**Example question:**
> "When you think about today's biggest challenge, who comes to mind?"
> - A) "Just me — it was my problem to solve"
> - B) "My team — we were all affected"
> - C) "A specific colleague who had it harder than me"
> - D) "The customer or end user we're serving"

Options progress from narrow (A) to wide (D) radius of concern. The tree responds accordingly.

---

## How the Tree Works

### Sample Tree (TSV)

Here is a **working fragment** — 12 nodes covering the session opening and part of Axis 1. This is not the full tree; it's a starter to show you the format. Your submission should be much larger.

**`reflection-tree.tsv`** — the tree structure:

```tsv
id	parentId	type	text	options	target	signal
START	null	start	Good evening. Let's look at your day.			
A1_OPEN	START	question	How would you describe today in one word?	Tough|Productive|Mixed|Frustrating		
A1_D1	A1_OPEN	decision		answer=Productive|Mixed:A1_Q_AGENCY_HIGH;answer=Tough|Frustrating:A1_Q_AGENCY_LOW		
A1_Q_AGENCY_HIGH	A1_D1	question	You said "{A1_OPEN.answer}". When something went well today, what made it happen?	I prepared well|The team came through|I got lucky|I adapted on the fly		axis1:internal
A1_Q_AGENCY_LOW	A1_D1	question	You said "{A1_OPEN.answer}". When things got difficult, what was your first instinct?	Figure out what I could control|Wait for someone to step in|Push through alone|Feel stuck		axis1:external
A1_R_INT	A1_Q_AGENCY_HIGH	reflection	You see your hand in what happened today. That's agency — not everything went your way, but you stayed in the driver's seat.			axis1:internal
A1_R_EXT	A1_Q_AGENCY_LOW	reflection	A tough day pulls attention outward — to what others did or didn't do. Fair enough. But somewhere in there, you made a call. What was it?			axis1:external
BRIDGE_1_2	A1_R_INT	bridge	Now let's shift from how you handled things — to what you gave.		A2_OPEN	
BRIDGE_1_2B	A1_R_EXT	bridge	Now let's shift from how you handled things — to what you gave.		A2_OPEN	
A2_OPEN	null	question	Think about one interaction you had today. Were you giving or expecting?	I helped someone|I taught someone something|I needed support|I felt overlooked		
SUMMARY	null	summary	Today you leaned {axis1.dominant} on agency and {axis2.dominant} on contribution. {summary_reflection}			
END	SUMMARY	end	See you tomorrow.			
```

**How to read this:**

| Column | Purpose |
|--------|---------|
| `id` | Unique node identifier |
| `parentId` | Which node this is a child of (builds the tree hierarchy) |
| `type` | Node type — determines behavior (auto-advance, wait for input, etc.) |
| `text` | What the employee sees. `{A1_OPEN.answer}` gets replaced with their earlier answer. |
| `options` | Pipe-separated fixed choices. Empty = no user input needed. |
| `target` | Where to jump after this node (for bridges that cross to a different subtree). Empty = follow children. |
| `signal` | What this node records in state. `axis1:internal` means "tally +1 for internal locus on Axis 1". |

**How decision nodes work:**

The `options` column on a decision node contains **routing rules**, not user-visible choices:

```
answer=Productive|Mixed:A1_Q_AGENCY_HIGH;answer=Tough|Frustrating:A1_Q_AGENCY_LOW
```

This reads: "If the previous answer was 'Productive' or 'Mixed', go to `A1_Q_AGENCY_HIGH`. If it was 'Tough' or 'Frustrating', go to `A1_Q_AGENCY_LOW`."

No code. No LLM. Just a lookup.

**This is only one possible format.** You can use JSON, YAML, multiple TSVs, or invent your own structure. What matters is:
- The tree is **readable as data** — we can trace paths without running code
- Every question has **fixed options** — no free text
- Every option leads to a **known next node** — fully deterministic
- Reflections use **interpolation** (`{placeholder}`) — not generated text

### Node Types

Your tree must use at least these node types:

| Type | What it does | User interaction |
|------|-------------|-----------------|
| `start` | Opens the session with a warm greeting | None — auto-advances |
| `question` | Asks a question with fixed options | Employee picks one option |
| `decision` | Internal routing based on prior answers | None — invisible to employee, auto-advances |
| `reflection` | Shows a reframe or insight based on the path taken | Employee reads it, clicks "Continue" when ready |
| `bridge` | Transitions between axes with a connecting statement | None — auto-advances |
| `summary` | End-of-session synthesis of the path taken | Employee reads their reflection summary |
| `end` | Closes the session | None |

You may add more node types. Creativity is encouraged.

### State and Signals

As the employee answers questions, the tree accumulates state through **signals** — simple tags on nodes that tally which pole the employee is leaning toward:

```
signal: "axis1:internal"   →  state.axis1.internal += 1
signal: "axis1:external"   →  state.axis1.external += 1
signal: "axis2:contribution" → state.axis2.contribution += 1
```

At any decision point, the tree can route based on accumulated signals:
```
condition: axis1.dominant = internal  →  go to the "you see your agency" reflection
condition: axis1.dominant = external  →  go to the "where was your choice?" reflection
```

The state also stores **every answer** by node ID, so reflection and summary nodes can interpolate:
```
"You said you felt '{A1_OPEN.answer}' — but you also '{A2_Q1.answer}'. 
That's more agency than you might think."
```

No scoring model. No sentiment analysis. Just tallies, lookups, and string templates.

---

## The Assignment

### Part A: Design the Tree (Mandatory)

Deliver your reflection tree as a **structured data file** — JSON, YAML, CSV/TSV, or any format where the tree structure is visible and readable without running code.

**Requirements:**

| Requirement | Minimum |
|-------------|---------|
| Total nodes | 25+ |
| Question nodes (with fixed options) | 8+ (at least 2 per axis, plus opening) |
| Decision nodes (internal branching) | 4+ |
| Reflection nodes (insight/reframe) | 4+ (at least 1 per axis, plus closing) |
| Bridge nodes (axis transitions) | 2+ (Axis 1→2, Axis 2→3) |
| Axes covered | All 3, in sequence |
| Options per question | 3-5 fixed options each |
| Summary node | 1+ (references the path taken) |

**We will evaluate Part A by reading your tree file.** We should be able to trace every possible conversation path by following the data. The tree is the deliverable — not a diagram, not a description, the actual structured data.

**Also provide:**
- A **tree diagram** (hand-drawn, Mermaid, draw.io — any format) showing the branching structure visually
- A **write-up** (max 2 pages) explaining:
  - Why you chose these specific questions
  - How you designed the branching — what trade-offs you made
  - What psychological sources informed your design
  - What you'd improve with more time

### Part B: Build the Agent (Optional — Bonus)

Build a working program that:
- **Loads** the tree from your Part A data file (not hardcoded in source)
- **Walks** the tree — renders each node, waits for input at question nodes, auto-advances at non-interactive nodes
- **Branches deterministically** — option selected → next node, no randomness, no LLM calls
- **Accumulates state** — tracks selections, tallies per-axis signals
- **Interpolates** reflection text with the employee's earlier answers
- **Produces a reflection summary** at the end

**Interface:** CLI is fine. Web UI is a bonus. The agent must be runnable — we will test it.

**Language/Stack:** Anything. Python, TypeScript, Go, HTML+JS — whatever you're productive in.

**If you build Part B, also provide:**
- Two sample transcripts showing different paths through the tree (one "victim/entitled/self-centric" persona, one "victor/contributing/altrocentric" persona)
- Both transcripts should show how the tree branched differently and produced different reflections

---

## What We're Evaluating

| Criterion | Weight | What we're looking for |
|-----------|--------|----------------------|
| **Tree quality** | 35% | Are the questions genuinely thought-provoking? Do branches feel purposeful? Does the conversation flow naturally across the three axes? |
| **Psychological grounding** | 25% | Do the questions actually surface the three axes? Are the options honest (not leading)? Do reflections reframe without moralizing? |
| **Data structure** | 20% | Is the tree clean, readable, and complete as data? Could another developer load it and build a different agent from the same file? |
| **Write-up clarity** | 10% | Does the candidate understand *why* they made their design choices? |
| **Bonus (Part B + extras)** | 10% | Working agent, creative additions, visual tree diagram, anything that shows you went beyond the minimum |

---

## Key Constraints

1. **No LLM at runtime.** The reflection tool must work without any API calls. You use AI to *build* it — research psychology, draft questions, iterate on tree structure — but the final product is a static tree walked by simple code.

2. **Deterministic paths.** Same answers → same conversation → same reflection. Every time.

3. **Fixed options only.** No free-text input from the employee. Every question has predefined choices. This forces you to design options that genuinely capture the spectrum — which is the hard, valuable part.

4. **No moralizing.** The tree guides reflection, it doesn't grade the employee. Someone on the "victim" end of the spectrum should leave the session with self-awareness, not shame. The tree's tone is a wise colleague — not a therapist, not a manager, not a motivational poster.

5. **The three axes must flow as a sequence.** Axis 1 (Locus) → Axis 2 (Orientation) → Axis 3 (Radius). The insight from each axis should build on the previous one. This is not three independent quizzes — it's one conversation.

---

## Hints

- **Start on paper.** Draw the tree. Walk through it as if you were the employee arriving tired at 7pm. Would you actually answer these questions? Would they make you think, or would you click through to get it over with?

- **The questions are the product.** A technically perfect tree with shallow questions loses to a rough tree with questions that make someone pause. Spend 60% of your time on question design.

- **Use LLMs aggressively during design.** Ask Claude/ChatGPT to roleplay as different employee personas. Test your questions against them. Ask the LLM to critique your options — "Would a real person distinguish between option B and C?" Use AI as your research assistant, your sparring partner, your test user.

- **The axes are connected.** Someone who recognizes their agency (Axis 1) naturally starts thinking about contribution (Axis 2), which naturally widens their concern to include others (Axis 3). Your tree can exploit this progression — each axis's opening question can reference what was surfaced in the previous axis.

- **Read the source material.** Carol Dweck's "Mindset". Rotter's locus of control scale. Maslow's 1969 paper on self-transcendence. Wikipedia summaries are fine. Understanding the original ideas will make your questions sharper than paraphrasing blog posts.

---

## Submission

A Git repository (GitHub/GitLab) containing:

```
/tree/
  reflection-tree.json (or .yaml, .csv, .tsv)    ← Part A: the tree data
  tree-diagram.png (or .svg, .md with Mermaid)    ← Part A: visual diagram
/agent/                                            ← Part B (optional): runnable code
  ...
/transcripts/                                      ← Part B (optional): sample runs  
  persona-1-transcript.md
  persona-2-transcript.md
write-up.md                                        ← Part A: design rationale (max 2 pages)
README.md                                          ← How to read the tree / run the agent
```

Send the repo link to the email provided in your application.

**Deadline:** 5 days from receipt.

---

## What This Assignment Reveals

This isn't a coding test. It's a **thinking test**.

We want to see whether you can take a psychological insight — that people grow when they see their agency, shift from entitlement to contribution, and widen their radius of concern — and **encode it into a structure** that guides someone to discover it for themselves.

The hard part is not the code. The hard part is writing a question at 7pm that makes a tired employee stop and think: *"Huh. I did have more control today than I realized."*

That's knowledge engineering. That's what we do.
