# Todo

**What this project is**

- A lightweight single-page Todo application built with Angular (generated with Angular CLI v21.0.3). It provides a minimal UI to add, list, and remove tasks and demonstrates basic Angular features such as forms and component templates.

**Features**

- **Add tasks**: enter a task and click the `Add Task` button to append a task to the list.
- **Remove tasks**: remove a task via the `remove` button next to each task.
- **Simple directives demo**: a small students list demonstrates template iteration.
- **No routing**: routing logic and route components were removed to keep the app focused on the todo functionality.

**Quick Start (Development)**

- Requirements: `node` (>=16), `npm` (>=8).
- Install dependencies:

```bash
npm install
```

- Run the dev server:

```bash
npm start
# or
ng serve
```

- Open `http://localhost:4200/` in your browser. The app reloads when you change source files.

**Available scripts (in `package.json`)**

- `npm start` — starts the dev server (`ng serve`).
- `npm test` — run unit tests (if configured).

**Key files**

- `src/app/app.ts` — main component containing todo logic (`addTask`, `deleteTask`).
- `src/app/app.html` — component template (input, buttons, lists).
- `src/app/app.css` — component styles.
- `src/app/app.config.ts` — application providers (animations noop + hydration providers).
- `src/app/app.config.server.ts` — simplified server config for SSR (routing removed).

**Notes & troubleshooting**

- Routing and related files were intentionally removed to simplify this project. If you had errors about missing route files (for example `app.routes.server`), those imports were removed in `app.config.server.ts`.
- If you see an error about `@angular/animations` during SSR or dev server startup, install it with:

```bash
npm install @angular/animations
```

- If you modify Angular configuration or dependencies, clearing the Angular cache can help:

```bash
rm -rf .angular/cache
```

**Project structure (high level)**

- `src/` — application source
	- `main.ts`, `main.server.ts`, `server.ts` — entry points
	- `app/` — angular components and configs (todo component lives here)

**Contributing**

- This project is a tiny demo. Feel free to open issues or add features (persistence, edit task, filters, unit tests).

---

If you want, I can also:
- add local persistence (e.g., `localStorage`) for tasks,
- re-introduce minimal routing (if you prefer separate pages), or
- add unit tests for the todo component.

Tell me which of the above you'd like next.
