# FluxForge

FluxForge is a next‑generation, browser‑first falling‑sand simulator focusing on performance, depth, and moddability.

## Vision

- Fast, deterministic simulation with record/rewind
- Data‑driven elements and safe, hot‑reloadable modding
- GPU‑accelerated core with robust CPU fallback
- Delightful UX with precision tools, overlays, profiling
- Clean architecture with strong tests, docs, and CI

## Architecture

Monorepo layout (pnpm workspaces):

```
packages/
  engine/    # simulation core
  render/    # WebGPU/WebGL2/Canvas2D rendering & compute wrappers
  worker/    # simulation worker, mod VM, message protocol
  ui/        # shared UI state (Zustand) & components
mods/        # builtin example packs
assets/
docs/
apps/web     # PWA shell (React + Vite)
tests/bench  # perf scenes & microbenchmarks
.github/workflows # CI
```

## Getting started

Prereqs: Node 18+, pnpm (via Corepack).

```sh
corepack enable
pnpm i
pnpm dev
```

This launches the web app at http://localhost:5173.

## Scripts

- `pnpm dev`: run the web app
- `pnpm build`: build all packages and the app
- `pnpm test`: unit tests (Vitest)
- `pnpm e2e`: end‑to‑end tests (Playwright)
- `pnpm lint`: ESLint
- `pnpm typecheck`: TypeScript project references
- `pnpm docs`: generate API docs (TypeDoc)

## License

MIT


\n# walshyy15.github.io
