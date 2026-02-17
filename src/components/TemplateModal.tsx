"use client";

import React, { useState } from "react";
import { TEMPLATES, WireframeTemplate } from "@/lib/templates";

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (content: string) => void;
}

export default function TemplateModal({
  isOpen,
  onClose,
  onSelect,
}: TemplateModalProps) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = TEMPLATES.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (template: WireframeTemplate) => {
    onSelect(template.content);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-[#18181b] border border-[#2a2a30] rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a30]">
          <div>
            <h2 className="text-white font-bold text-lg">Generate Wireframe</h2>
            <p className="text-[#71717a] text-xs mt-0.5">
              Choose a predefined template
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#71717a] hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-3 border-b border-[#2a2a30]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search templates..."
            className="w-full bg-[#0c0c0e] border border-[#2a2a30] rounded-lg px-3 py-2 text-sm text-[#e4e4e7] placeholder-[#52525b] focus:outline-none focus:border-[#10b981] transition-colors"
          />
        </div>

        <div className="flex-1 overflow-auto p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filtered.map((template) => (
              <button
                key={template.id}
                onClick={() => handleSelect(template)}
                className="text-left bg-[#111113] hover:bg-[#1c1c21] border border-[#2a2a30] hover:border-[#10b981]/50 rounded-lg p-4 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{template.icon}</span>
                  <div>
                    <h3 className="text-white font-medium text-sm group-hover:text-[#10b981] transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-[#52525b] text-xs">
                      {template.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-[#52525b] text-center py-8 text-sm">
              No templates found for &quot;{search}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
