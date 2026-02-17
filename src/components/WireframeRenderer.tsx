"use client";

import React from "react";
import { ASTNode, parse } from "@/lib/parser";

interface WireframeRendererProps {
  source: string;
}

export default function WireframeRenderer({ source }: WireframeRendererProps) {
  const nodes = React.useMemo(() => {
    try {
      return parse(source);
    } catch {
      return [];
    }
  }, [source]);

  return (
    <div className="wireframe-preview text-sm p-6 space-y-2 font-sans">
      {nodes.map((node, index) => (
        <WireframeNode key={index} node={node} />
      ))}
    </div>
  );
}

function WireframeNode({ node }: { node: ASTNode }) {
  switch (node.type) {
    case "heading":
      return <HeadingNode node={node} />;
    case "paragraph":
      return <ParagraphNode node={node} />;
    case "checkbox":
      return <CheckboxNode node={node} />;
    case "radio":
      return <RadioNode node={node} />;
    case "textbox":
      return <TextboxNode node={node} />;
    case "textarea":
      return <TextareaNode node={node} />;
    case "button":
      return <ButtonNode node={node} />;
    case "separator":
      return <SeparatorNode />;
    case "link":
      return <LinkNode node={node} />;
    case "image":
      return <ImageNode node={node} />;
    case "container":
      return <ContainerNode node={node} />;
    case "line":
      return <LineNode node={node} />;
    default:
      return null;
  }
}

function HeadingNode({ node }: { node: ASTNode }) {
  const Tag = `h${node.level || 1}` as keyof React.JSX.IntrinsicElements;
  const sizeClass =
    node.level === 1
      ? "text-2xl font-bold border-b-2 border-[#e4e4e7] pb-2 mb-3"
      : node.level === 2
        ? "text-xl font-bold border-b border-[#e4e4e7] pb-1 mb-2"
        : node.level === 3
          ? "text-lg font-semibold mb-1"
          : "text-base font-semibold mb-1";

  return (
    <Tag className={`${sizeClass} text-[#18181b]`}>
      {node.content}
    </Tag>
  );
}

function ParagraphNode({ node }: { node: ASTNode }) {
  return (
    <p className="text-[#3f3f46] leading-relaxed">{node.content}</p>
  );
}

function CheckboxNode({ node }: { node: ASTNode }) {
  return (
    <label className="flex items-center gap-2 cursor-default py-0.5">
      <span
        className={`inline-flex items-center justify-center w-4 h-4 border-2 rounded-sm ${
          node.checked
            ? "bg-[#18181b] border-[#18181b]"
            : "bg-white border-[#d4d4d8]"
        }`}
      >
        {node.checked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span className="text-[#3f3f46]">{node.content}</span>
    </label>
  );
}

function RadioNode({ node }: { node: ASTNode }) {
  return (
    <label className="flex items-center gap-2 cursor-default py-0.5">
      <span
        className={`inline-flex items-center justify-center w-4 h-4 border-2 rounded-full ${
          node.checked ? "border-[#18181b]" : "border-[#d4d4d8]"
        }`}
      >
        {node.checked && (
          <span className="w-2 h-2 bg-[#18181b] rounded-full" />
        )}
      </span>
      <span className="text-[#3f3f46]">{node.content}</span>
    </label>
  );
}

function TextboxNode({ node }: { node: ASTNode }) {
  return (
    <span
      className="inline-block border border-[#d4d4d8] rounded-md px-2.5 py-1.5 bg-white align-middle"
      style={{
        minWidth: node.width || "100%",
        maxWidth: "100%",
      }}
    >
      {node.defaultValue ? (
        <span className="text-[#a1a1aa]">{node.defaultValue}</span>
      ) : (
        // Zero-width space ensures the span maintains its height when empty
        <span className="text-transparent select-none">&#8203;</span>
      )}
    </span>
  );
}

function TextareaNode({ node }: { node: ASTNode }) {
  return (
    <div
      className="border border-[#d4d4d8] rounded-md px-2.5 py-1.5 bg-white"
      style={{
        minHeight: `${(node.rows || 3) * 1.8}em`,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      {/* Zero-width space ensures the div maintains its height when empty */}
      <span className="text-transparent select-none">&#8203;</span>
    </div>
  );
}

function ButtonNode({ node }: { node: ASTNode }) {
  return (
    <span className="inline-block border border-[#d4d4d8] rounded-md px-4 py-1.5 bg-[#fafafa] hover:bg-[#f4f4f5] cursor-default font-medium text-[#18181b] mr-2 mb-1 whitespace-nowrap shadow-sm">
      {node.content}
    </span>
  );
}

function SeparatorNode() {
  return <hr className="border-t border-[#e4e4e7] my-4" />;
}

function LinkNode({ node }: { node: ASTNode }) {
  return (
    <span className="text-[#2563eb] underline cursor-default">
      {node.content}
    </span>
  );
}

function ImageNode({ node }: { node: ASTNode }) {
  return (
    <div className="border-2 border-dashed border-[#d4d4d8] rounded-lg p-4 flex items-center justify-center bg-[#fafafa]">
      <div className="text-center text-[#a1a1aa]">
        <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs">{node.content || "Image"}</span>
      </div>
    </div>
  );
}

function ContainerNode({ node }: { node: ASTNode }) {
  return (
    <div className="border border-[#d4d4d8] rounded-lg p-4 bg-white">
      {node.children?.map((child, index) => (
        <WireframeNode key={index} node={child} />
      ))}
    </div>
  );
}

function LineNode({ node }: { node: ASTNode }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {node.children?.map((child, index) => (
        <WireframeNode key={index} node={child} />
      ))}
    </div>
  );
}
