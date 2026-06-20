"use client";

import React, { useCallback, useRef, useEffect } from "react";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TAB_INDENT = "  ";

export default function Editor({ value, onChange }: EditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  // Handle tab key for indentation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue =
          value.substring(0, start) + TAB_INDENT + value.substring(end);
        onChange(newValue);

        // Restore cursor position
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + TAB_INDENT.length;
        });
      }
    },
    [value, onChange]
  );

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div className="h-full flex flex-col bg-[#0c0c0e]">
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#18181b] border-b border-[#232329] shrink-0">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#71717a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="text-[#a1a1aa] text-xs font-medium">
            Editor
          </span>
        </div>
        <span className="text-[#52525b] text-xs hidden sm:inline font-mono">
          wireframe.md
        </span>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full h-full resize-none bg-[#0c0c0e] text-[#e4e4e7] font-mono text-xs p-4 focus:outline-none leading-relaxed"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          placeholder="Start typing your ASCII wireframe..."
        />
      </div>
    </div>
  );
}
