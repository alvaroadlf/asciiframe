# AsciiFrame

ASCII wireframe design tool — Design and preview ASCII wireframes in real-time.

## Features

- **Live Preview**: See your wireframe render as you type
- **ASCII Syntax**: Use simple text-based syntax to create UI wireframes
- **Responsive**: Works on mobile, tablet, and desktop
- **Split Pane**: Resizable editor/preview split on desktop
- **Tab Switching**: Editor/Preview tabs on mobile devices

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

## Tech Stack

- [Next.js](https://nextjs.org) with App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)