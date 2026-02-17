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
    <div className="h-full flex flex-col bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-xs ml-2 font-mono">
            wireframe.md
          </span>
        </div>
        <span className="text-gray-500 text-xs hidden sm:inline">
          ASCII Wireframe Editor
        </span>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full h-full resize-none bg-gray-900 text-gray-100 font-mono text-sm p-4 focus:outline-none leading-relaxed"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          placeholder="Start typing your ASCII wireframe..."
        />
      </div>
    </div>
  );
}
