# Algorithms & Data Structures — TypeScript

A structured repository dedicated to implementing fundamental algorithms and data structures with production-grade discipline.

This project is not a collection of solved problems. It is a deliberate exercise in:

- Algorithmic reasoning
- Explicit trade-off analysis
- Architectural clarity
- Deterministic testing
- Strong typing discipline

---

## Philosophy

Every implementation in this repository follows a consistent standard:

- Clear problem definition
- Documented strategy and pattern classification
- Explicit time and space complexity
- Isolated and behavior-focused tests
- Single responsibility per file
- No implicit assumptions

The goal is to treat algorithm implementation with the same rigor applied to production systems.

---

## Technical Stack

- TypeScript (strict type checking)
- Node.js native test runner
- tsx runtime execution
- Conventional Commits
- Modular project organization

---

## How to Execute the Project

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Primary Execution: Run Tests (Recommended)

This repository is designed to be executed through automated tests.

All algorithm executions and validations occur inside the test suite. There are no hardcoded manual execution cases.

Run all tests:

```bash
npm test
```

This command:

- Executes the Node.js native test runner via `tsx`
- Validates behavioral correctness
- Covers edge cases
- Ensures cross-implementation consistency (when applicable)

Tests are the **source of truth** for execution.

---

### 3️⃣ Type Checking

To validate strict TypeScript compliance:

```bash
npm run typecheck
```

This ensures:

- No type leaks
- No implicit `any`
- Strict compile-time guarantees

---

### 4️⃣ About the `solve` Scripts

The repository includes:

```bash
npm run solve
npm run solve:all
```

These scripts are runners intended for manual execution of implementations.

However:

- They may not produce meaningful output if no explicit execution case was implemented.
- The project is intentionally structured around automated tests instead of console-driven execution.

They exist primarily to provide execution flexibility and architectural completeness.

---

## Repository Structure

```
src
 ├── arrays
 │   └── two-sum
 │       └── two-sum.test
 │
 ├── data-structures
 │   └── linked-list
 │       └── count-nodes.iterative
 │       └── count-nodes.recursive
 │       └── count-nodes.test
 │
 └── runners
```

Implementations are organized by domain rather than by platform (e.g., not “LeetCode-style folders”), prioritizing conceptual grouping over problem source.

---

## Implementation Standards

Each algorithm includes:

- Pattern identification (e.g., HashMap, Complement Lookup)
- Strategy breakdown
- Complexity analysis
- Trade-off discussion when applicable

### Example classification:

| Problem          | Pattern                     | Time | Space       |
| ---------------- | --------------------------- | ---- | ----------- |
| Two Sum          | HashMap / Complement Lookup | O(n) | O(n)        |
| Count Nodes (LL) | Iteration / Recursion       | O(n) | O(1) / O(n) |

---

## Testing Approach

Tests are structured to validate:

- Behavioral correctness
- Edge cases
- Contract integrity
- Cross-implementation consistency (when multiple strategies exist)

Testing is treated as architectural validation, not verification after implementation.

---

## Engineering Focus

This repository emphasizes:

- Predictability over cleverness
- Readability over compression
- Determinism over side effects
- Type safety over implicit behavior

The intent is to demonstrate strong fundamentals aligned with real-world engineering expectations.

---

## Roadmap

Future additions will include:

- Trees (BST, traversal strategies)
- Graph traversal (DFS, BFS)
- Sorting algorithms with comparative complexity
- Pattern catalog (Sliding Window, Two Pointers, Divide & Conquer)
- Complexity documentation per module

---

## Author

Breno Barbieri

---

## License

MIT
