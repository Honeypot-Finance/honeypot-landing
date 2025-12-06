"use client";

import { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";

interface DocxViewerProps {
  docxUrl: string;
}

export default function DocxViewer({ docxUrl }: DocxViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const styleContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDocument() {
      if (!containerRef.current || !styleContainerRef.current) return;

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(docxUrl);
        if (!response.ok) {
          throw new Error("Failed to load document");
        }

        const blob = await response.blob();

        // Render with separate style container so we can manipulate styles
        await renderAsync(blob, containerRef.current, styleContainerRef.current, {
          className: "docx",
          inWrapper: false, // Disable wrapper to avoid gray background
          ignoreWidth: true,
          ignoreHeight: true,
          ignoreFonts: true,
          breakPages: false,
          renderHeaders: true,
          renderFooters: true,
          renderFootnotes: true,
          renderEndnotes: true,
        });

        // Post-process: Remove all inline background styles from content
        if (containerRef.current) {
          const allElements = containerRef.current.querySelectorAll("*");
          allElements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            if (htmlEl.style) {
              htmlEl.style.backgroundColor = "";
              htmlEl.style.background = "";
              htmlEl.style.color = "";
            }
          });
        }

        // Remove problematic styles from the style container
        if (styleContainerRef.current) {
          const styleTags = styleContainerRef.current.querySelectorAll("style");
          styleTags.forEach((styleTag) => {
            styleTag.textContent = (styleTag.textContent || "")
              .replace(/background-color\s*:\s*[^;]+;?/gi, "")
              .replace(/background\s*:\s*[^;]+;?/gi, "")
              .replace(/color\s*:\s*[^;]+;?/gi, "");
          });
        }

        setLoading(false);
      } catch (err) {
        console.error("Error loading document:", err);
        setError("Failed to load document");
        setLoading(false);
      }
    }

    loadDocument();
  }, [docxUrl]);

  return (
    <>
      {/* Hidden container for docx-preview styles */}
      <div ref={styleContainerRef} className="hidden" />

      {/* Custom styles for the docx-preview output */}
      <style jsx global>{`
        /* Document content styling */
        .docx-viewer-content {
          color: #d1d5db;
          line-height: 1.7;
        }

        .docx-viewer-content * {
          color: inherit !important;
          background: transparent !important;
          background-color: transparent !important;
          font-family: inherit !important;
        }

        /* Section styling */
        .docx-viewer-content section.docx {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
          width: 100% !important;
        }

        /* Headings */
        .docx-viewer-content h1,
        .docx-viewer-content h2,
        .docx-viewer-content h3,
        .docx-viewer-content h4,
        .docx-viewer-content h5,
        .docx-viewer-content h6 {
          color: #ffffff !important;
          font-weight: bold !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.75rem !important;
        }

        .docx-viewer-content h1 { font-size: 1.875rem !important; }
        .docx-viewer-content h2 { font-size: 1.5rem !important; }
        .docx-viewer-content h3 { font-size: 1.25rem !important; }

        /* Paragraphs */
        .docx-viewer-content p {
          margin-bottom: 0.75rem !important;
        }

        /* Links */
        .docx-viewer-content a {
          color: #FFCD4D !important;
        }
        .docx-viewer-content a:hover {
          text-decoration: underline !important;
        }

        /* Tables */
        .docx-viewer-content table {
          border-collapse: collapse !important;
          width: 100% !important;
          margin: 1rem 0 !important;
        }
        .docx-viewer-content td,
        .docx-viewer-content th {
          border: 1px solid #374151 !important;
          padding: 0.5rem !important;
        }

        /* Lists */
        .docx-viewer-content ul,
        .docx-viewer-content ol {
          padding-left: 2rem !important;
          margin-bottom: 0.75rem !important;
        }
        .docx-viewer-content li {
          margin-bottom: 0.25rem !important;
        }
      `}</style>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFCD4D]"></div>
          <span className="ml-3 text-gray-400">Loading document...</span>
        </div>
      )}

      {error && (
        <div className="text-red-400 text-center py-12">
          {error}
        </div>
      )}

      <div
        ref={containerRef}
        className={`docx-viewer-content ${loading ? "hidden" : ""}`}
      />
    </>
  );
}
