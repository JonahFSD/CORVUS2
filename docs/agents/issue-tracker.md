# Issue tracker: GitHub

Issues and PRDs for this repository live as GitHub issues in `JonahFSD/Osanwe`. Use the `gh` CLI for issue operations.

## Conventions

- **Create an issue:** `gh issue create --title "..." --body-file <file>`. Prefer `--body-file` for multiline specifications.
- **Read an issue:** `gh issue view <number> --comments`, including labels.
- **List issues:** `gh issue list --state open --json number,title,body,labels,comments` with appropriate label and state filters.
- **Comment on an issue:** `gh issue comment <number> --body "..."`.
- **Apply or remove labels:** `gh issue edit <number> --add-label "..."` or `--remove-label "..."`.
- **Close an issue:** `gh issue close <number> --comment "..."`.

Infer the repository from `git remote -v`; `gh` resolves it automatically when run inside this clone.

## Pull requests as a triage surface

**PRs as a request surface: no.**

GitHub shares one number space across issues and pull requests. If a bare number is ambiguous, try `gh pr view <number>` and fall back to `gh issue view <number>`.

## When a skill says "publish to the issue tracker"

Create a GitHub issue in `JonahFSD/Osanwe`.

## When a skill says "fetch the relevant ticket"

Run `gh issue view <number> --comments`.

## Wayfinding operations

The map is a single issue labeled `wayfinder:map`; its tickets are child issues where GitHub sub-issues are available.

- **Map:** one issue containing Notes, Decisions-so-far, and Fog.
- **Child ticket:** a GitHub sub-issue. Where sub-issues are unavailable, use a task list in the map and place `Part of #<map>` at the top of the child.
- **Blocking:** prefer GitHub native issue dependencies. Where unavailable, use a `Blocked by: #<n>` line at the top of the child issue.
- **Frontier:** the first open, unassigned child in map order with no open blocker.
- **Claim:** assign the issue to the driving developer.
- **Resolve:** comment with the result, close the child, and add the resulting context pointer to the map.

## Write safety

Before creating, editing, labeling, or closing an issue:

1. resolve the exact repository;
2. check for an existing issue with the same scope;
3. preserve links to the governing PRD and ADRs; and
4. verify the issue after the write.
