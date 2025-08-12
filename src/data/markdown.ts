export const markdown = `---
title: "Complex Markdown Test Suite"
author: "QA Bot"
date: 2025-08-12
tags:
  - markdown
  - testing
  - ai-chat
---

# Complex Markdown Test Suite

> A long stress-test document to exercise Markdown renderers used in AI chat UIs.
> Includes deliberate edge-cases (unfinished fence, raw HTML, mixed content).

## Table of Contents
1. [Headings & Inline](#headings--inline)
2. [Lists & Nesting](#lists--nesting)
3. [Tables](#tables)
4. [Code Blocks & Syntax Highlighting](#code-blocks--syntax-highlighting)
5. [Diagrams (Mermaid)](#diagrams-mermaid)
6. [Math (LaTeX / KaTeX)](#math-latex--katex)
7. [Blockquotes & Admonitions](#blockquotes--admonitions)
8. [Images, Links, References](#images-links-references)
9. [Raw HTML & HTML elements](#raw-html--html-elements)
10. [Footnotes, Definition lists, Task lists](#footnotes-definition-lists-task-lists)
11. [Streaming/unfinished fence (intentional)](#streamingunfinished-fence-intentional)

---

## Headings & Inline

# H1 — Primary title  
## H2 — Section  
### H3 — Subsection  
#### H4 — Small heading

Inline code: \`\`const add = (a, b) => a + b;\`\` — and **bold**, *italic*, ~~strikethrough~~, ***combined***.

Emoji: 🚀 ✅ ❗️ — and an emoji shortcode style :sparkles: (some renderers convert).

**Keyboard hint:** Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to send.

---

## Lists & Nesting

- Top level unordered
  - nested level 1
    - nested level 2
      1. ordered in nested
      2. second
  - another nested
- Second top-level

1. Ordered item one
2. Ordered item two
   - mixed nested bullet
   - another
3. Final ordered

---

## Tables

| Language | Paradigm    | First Appeared |
|:--------:|:-----------:|---------------:|
| Python   | Multi-paradigm | 1991 |
| Haskell  | Functional  | 1990 |
| Rust     | Systems    | 2015 |

---

## Code Blocks & Syntax Highlighting

### JavaScript (ESM)
\`\`\`javascript
export async function fetchWithRetry(url, { retries = 3 } = {}) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}
\`\`\`

### Python (f-strings)
\`\`\`python
def greet(name: str) -> str:
    return f"Hello, {name} 👋"

print(greet("world"))
\`\`\`

---

## Diagrams (Mermaid)

\`\`\`mermaid
flowchart TD
  A[User] -->|asks| B[AI Model]
  B --> C{Has answer?}
  C -- Yes --> D[Render Markdown]
  C -- No --> E[Ask clarifying question]
  D --> F[Display]
\`\`\`

---

## Raw HTML

<details>
  <summary>Click to expand</summary>
  This content is inside a native HTML details block.
</details>

<p>This is paragraph mate</p>

---

## Streaming / Unfinished fence (intentional)

\`\`\`python
for i in range(5):
    print(i)
# no closing fence

`;
