export type NodeType =
  | "heading"
  | "paragraph"
  | "checkbox"
  | "radio"
  | "textbox"
  | "textarea"
  | "button"
  | "separator"
  | "link"
  | "image"
  | "container"
  | "line";

export interface ASTNode {
  type: NodeType;
  content?: string;
  level?: number; // for headings
  checked?: boolean; // for checkboxes/radios
  rows?: number; // for textareas
  placeholder?: string; // for textboxes
  defaultValue?: string; // for textboxes with default values
  children?: ASTNode[];
  width?: string; // for sizing
  src?: string; // for images
  href?: string; // for links
}

/**
 * Parses ASCII wireframe markup into an AST.
 *
 * Supported syntax:
 * - Headings: # Heading 1, ## Heading 2, ### Heading 3
 * - Checkboxes: [ ] Unchecked, [x] Checked
 * - Radio buttons: ( ) Unselected, (o) Selected
 * - Text boxes: [___] or [Value___]
 * - Textareas: Multiple consecutive [___] lines
 * - Buttons: [ Button Text ] (text with spaces, no underscores)
 * - Separators: --- or ===
 * - Links: {Link Text}(url)
 * - Images: ![alt](url)
 * - Containers: +---...---+ blocks
 * - Regular text: anything else
 */
export function parse(input: string): ASTNode[] {
  const lines = input.split("\n");
  const nodes: ASTNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (trimmed === "") {
      i++;
      continue;
    }

    // Container blocks: +---...---+
    if (/^\+[-─]+\+$/.test(trimmed)) {
      const containerLines: string[] = [];
      i++;
      while (i < lines.length) {
        const cLine = lines[i].trim();
        if (/^\+[-─]+\+$/.test(cLine)) {
          i++;
          break;
        }
        // Strip leading/trailing | if present
        const content = cLine.replace(/^\|/, "").replace(/\|$/, "").trim();
        containerLines.push(content);
        i++;
      }
      const childContent = containerLines.join("\n");
      nodes.push({
        type: "container",
        children: parse(childContent),
      });
      continue;
    }

    // Headings: # Heading
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      nodes.push({
        type: "heading",
        level: headingMatch[1].length,
        content: headingMatch[2],
      });
      i++;
      continue;
    }

    // Separators: --- or ===
    if (/^[-]{3,}$/.test(trimmed) || /^[=]{3,}$/.test(trimmed)) {
      nodes.push({ type: "separator" });
      i++;
      continue;
    }

    // Image: ![alt](url)
    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      nodes.push({
        type: "image",
        content: imageMatch[1],
        src: imageMatch[2],
      });
      i++;
      continue;
    }

    // Checkbox: [ ] text or [x] text
    const checkboxMatch = trimmed.match(/^\[([x ])\]\s+(.+)$/i);
    if (checkboxMatch) {
      nodes.push({
        type: "checkbox",
        checked: checkboxMatch[1].toLowerCase() === "x",
        content: checkboxMatch[2],
      });
      i++;
      continue;
    }

    // Radio button: ( ) text or (o) text
    const radioMatch = trimmed.match(/^\(([o ])\)\s+(.+)$/i);
    if (radioMatch) {
      nodes.push({
        type: "radio",
        checked: radioMatch[1].toLowerCase() === "o",
        content: radioMatch[2],
      });
      i++;
      continue;
    }

    // Multiple buttons on one line: [ Btn1 ]  [ Btn2 ]  [ Btn3 ]
    const multiButtonMatch = trimmed.match(
      /^(\[\s+[^\]]+?\s+\]\s*){2,}$/
    );
    if (multiButtonMatch) {
      const buttonRegex = /\[\s+([^\]]+?)\s+\]/g;
      let match;
      const buttonNodes: ASTNode[] = [];
      while ((match = buttonRegex.exec(trimmed)) !== null) {
        if (!match[1].includes("_")) {
          buttonNodes.push({
            type: "button",
            content: match[1].trim(),
          });
        }
      }
      if (buttonNodes.length > 0) {
        nodes.push({
          type: "line",
          children: buttonNodes,
        });
        i++;
        continue;
      }
    }

    // Single button: [ Button Text ]
    const buttonMatch = trimmed.match(/^\[\s+([^\]]+?)\s+\]$/);
    if (buttonMatch && !buttonMatch[1].includes("_")) {
      nodes.push({
        type: "button",
        content: buttonMatch[1].trim(),
      });
      i++;
      continue;
    }

    // Pure textbox line: [____]
    const pureTextboxMatch = trimmed.match(/^\[(_+)\]$/);
    if (pureTextboxMatch) {
      // Check for textarea (consecutive textbox lines)
      let textareaRows = 1;
      const textboxWidth = `${pureTextboxMatch[1].length * 0.6}em`;
      while (i + 1 < lines.length) {
        const nextTrimmed = lines[i + 1].trim();
        if (/^\[(_+)\]$/.test(nextTrimmed)) {
          textareaRows++;
          i++;
        } else {
          break;
        }
      }
      if (textareaRows > 1) {
        nodes.push({
          type: "textarea",
          rows: textareaRows,
          width: textboxWidth,
        });
      } else {
        nodes.push({
          type: "textbox",
          width: textboxWidth,
        });
      }
      i++;
      continue;
    }

    // Inline text boxes mixed with text: e.g. "First Name [__________] Last Name [__________]"
    if (trimmed.includes("[_")) {
      const lineChildren = parseInlineTextboxes(trimmed);
      nodes.push({
        type: "line",
        children: lineChildren,
      });
      i++;
      continue;
    }

    // Link: {Link Text}(url) or just {Link Text}
    const linkMatch = trimmed.match(/^\{([^}]+)\}(?:\(([^)]+)\))?$/);
    if (linkMatch) {
      nodes.push({
        type: "link",
        content: linkMatch[1],
        href: linkMatch[2] || "#",
      });
      i++;
      continue;
    }

    // Regular paragraph text
    nodes.push({ type: "paragraph", content: trimmed });
    i++;
  }

  return nodes;
}

function parseInlineTextboxes(line: string): ASTNode[] {
  const nodes: ASTNode[] = [];

  // Handle text box with default value: [Value___]
  // And plain textboxes: [___]
  // Mixed with regular text
  const regex = /\[([A-Za-z0-9][A-Za-z0-9 ]*?)(_+)\]|\[(_+)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    // Add preceding text
    if (match.index > lastIndex) {
      const text = line.substring(lastIndex, match.index).trim();
      if (text) {
        nodes.push({ type: "paragraph", content: text });
      }
    }

    if (match[3]) {
      // Plain textbox [___]
      nodes.push({
        type: "textbox",
        width: `${match[3].length * 0.6}em`,
      });
    } else {
      // Textbox with default value [Value___]
      nodes.push({
        type: "textbox",
        defaultValue: match[1].trim(),
        width: `${(match[1].length + match[2].length) * 0.6}em`,
      });
    }

    lastIndex = match.index + match[0].length;
  }

  // Add trailing text
  if (lastIndex < line.length) {
    const text = line.substring(lastIndex).trim();
    if (text) {
      nodes.push({ type: "paragraph", content: text });
    }
  }

  return nodes;
}

export const DEFAULT_WIREFRAME = `# AsciiFrame

## Login Form

Username
[____________________________]

Password
[____________________________]

[x] Remember me
[ ] Accept terms and conditions

---

( ) Free Plan
(o) Pro Plan
( ) Enterprise Plan

---

## Contact Information

First Name [__________] Last Name [__________]

Email
[____________________________]

Date of Birth [__]/[__]/[____]

Message

[____________________________]
[____________________________]
[____________________________]
[____________________________]

---

[ Submit Form ]  [ Cancel ]  [ Reset ]

---

## Features

### Dashboard
View your analytics and metrics.

### Settings
Configure your preferences.

### Profile
Update your personal information.
`;
