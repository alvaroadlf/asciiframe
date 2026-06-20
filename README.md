# ASCII Frame

ASCII wireframe design tool — Design and preview ASCII wireframes in real-time.

## Features

- **Live Preview**: See your wireframe render as you type
- **ASCII Syntax**: Use simple text-based syntax to create UI wireframes
- **Dark Theme**: Full dark mode UI (black/dark gray)
- **Predefined Templates**: Generate wireframes from 10+ templates (iOS, Android, Desktop, Tablet, etc.)
- **Responsive**: Works on mobile, tablet, and desktop
- **Split Pane**: Resizable editor/preview split on desktop
- **Tab Switching**: Editor/Preview tabs on mobile devices
- **Deploy Ready**: Configured for Dokploy and Nixpack deployment

## Supported Syntax

| Element | Syntax |
|---------|--------|
| Headings | `# H1`, `## H2`, `### H3` |
| Checkboxes | `[ ] Unchecked`, `[x] Checked` |
| Radio buttons | `( ) Unselected`, `(o) Selected` |
| Text boxes | `[____]` |
| Text with default | `[Value____]` |
| Textareas | Multiple consecutive `[____]` lines |
| Buttons | `[ Button Text ]` |
| Separators | `---` or `===` |
| Images | `![alt](url)` |
| Links | `{Link Text}(url)` |
| Containers | `+-----+` blocks |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Docker

```bash
docker build -t ascii-frame .
docker run -p 3000:3000 ascii-frame
```

Works with **Dokploy** and **Nixpack** out of the box.

## Tech Stack

- [Next.js](https://nextjs.org) 16 with App Router
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org) 5
- [Tailwind CSS](https://tailwindcss.com) 4
- Node.js 20+