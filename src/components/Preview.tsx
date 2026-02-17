"use client";

import React from "react";
import WireframeRenderer from "./WireframeRenderer";

interface PreviewProps {
  source: string;
}

export default function Preview({ source }: PreviewProps) {
  return (
    <div className="h-full flex flex-col bg-[#fafafa]">
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#f4f4f5] border-b border-[#e4e4e7] shrink-0">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#a1a1aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-[#71717a] text-xs font-medium">Preview</span>
        </div>
        <span className="text-[#a1a1aa] text-xs hidden sm:inline">
          Live wireframe
        </span>
      </div>
      <div className="flex-1 overflow-auto bg-white">
        <WireframeRenderer source={source} />
      </div>
    </div>
  );
}
