"use client";

import React from "react";

interface HeaderProps {
  activeTab: "editor" | "preview";
  onTabChange: (tab: "editor" | "preview") => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="bg-gray-900 border-b border-gray-700 px-4 py-2 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="9" x2="9" y2="21" />
          </svg>
          <h1 className="text-white font-bold text-lg tracking-tight">
            Ascii<span className="text-emerald-400">Frame</span>
          </h1>
        </div>
        <span className="text-gray-500 text-xs hidden md:inline border-l border-gray-700 pl-3">
          ASCII wireframe design tool
        </span>
      </div>

      {/* Mobile tab switcher */}
      <div className="flex md:hidden bg-gray-800 rounded-lg p-0.5">
        <button
          onClick={() => onTabChange("editor")}
          className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
            activeTab === "editor"
              ? "bg-gray-600 text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Editor
        </button>
        <button
          onClick={() => onTabChange("preview")}
          className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
            activeTab === "preview"
              ? "bg-gray-600 text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Preview
        </button>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="https://github.com/alvaroadlf/asciiframe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
