"use client";

import React from "react";
import WireframeRenderer from "./WireframeRenderer";

interface PreviewProps {
  source: string;
}

export default function Preview({ source }: PreviewProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span className="text-gray-600 text-xs font-medium">Preview</span>
        </div>
        <span className="text-gray-400 text-xs hidden sm:inline">
          Live wireframe
        </span>
      </div>
      <div className="flex-1 overflow-auto">
        <WireframeRenderer source={source} />
      </div>
    </div>
  );
}
