"use client";

import React, { useState, useCallback, useRef } from "react";
import Header from "@/components/Header";
import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import { DEFAULT_WIREFRAME } from "@/lib/parser";

export default function Home() {
  const [source, setSource] = useState(DEFAULT_WIREFRAME);
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [splitPosition, setSplitPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pos = ((e.clientX - rect.left) / rect.width) * 100;
      setSplitPosition(Math.min(Math.max(pos, 20), 80));
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Desktop: side-by-side split pane */}
      <div
        ref={containerRef}
        className="flex-1 hidden md:flex overflow-hidden"
      >
        <div style={{ width: `${splitPosition}%` }} className="h-full">
          <Editor value={source} onChange={setSource} />
        </div>
        <div className="resizer" onMouseDown={handleMouseDown} />
        <div
          style={{ width: `${100 - splitPosition}%` }}
          className="h-full"
        >
          <Preview source={source} />
        </div>
      </div>

      {/* Mobile/Tablet: tab-based switching */}
      <div className="flex-1 md:hidden overflow-hidden">
        {activeTab === "editor" ? (
          <Editor value={source} onChange={setSource} />
        ) : (
          <Preview source={source} />
        )}
      </div>
    </div>
  );
}
