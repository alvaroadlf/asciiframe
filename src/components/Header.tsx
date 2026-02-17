"use client";

import React from "react";

interface HeaderProps {
  activeTab: "editor" | "preview";
  onTabChange: (tab: "editor" | "preview") => void;
  onGenerate: () => void;
}

export default function Header({
  activeTab,
  onTabChange,
  onGenerate,
}: HeaderProps) {
  return (
    <header className="bg-[#111113] border-b border-[#232329] px-4 py-2.5 flex items-center justify-between shrink-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-2.5">
        <svg
          className="w-7 h-7 text-[#10b981]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
        <h1 className="text-[15px] font-semibold tracking-tight">
          <span className="text-white">ASCII </span>
          <span className="text-[#10b981]">Frame</span>
        </h1>
      </div>

      {/* Center: Generate button (desktop) */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onGenerate}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-[#10b981] hover:bg-[#0ea472] text-white transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          Generate
          <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Right: Mobile tabs + actions */}
      <div className="flex items-center gap-2">
        {/* Mobile: Generate + tabs */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onGenerate}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#10b981] hover:bg-[#0ea472] text-white transition-colors"
          >
            Generate
          </button>
          <div className="flex bg-[#1c1c21] rounded-lg p-0.5 border border-[#2a2a30]">
            <button
              onClick={() => onTabChange("editor")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === "editor"
                  ? "bg-[#2a2a30] text-white"
                  : "text-[#71717a] hover:text-[#a1a1aa]"
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => onTabChange("preview")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === "preview"
                  ? "bg-[#2a2a30] text-white"
                  : "text-[#71717a] hover:text-[#a1a1aa]"
              }`}
            >
              Preview
            </button>
          </div>
        </div>

        {/* Desktop: GitHub link */}
        <a
          href="https://github.com/alvaroadlf/asciiframe"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex text-[#71717a] hover:text-white transition-colors p-1.5"
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
