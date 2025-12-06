"use client";

import { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";

interface DocxViewerProps {
  docxUrl: string;
}

export default function DocxViewer({ docxUrl }: DocxViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDocument() {
      if (!containerRef.current) return;

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(docxUrl);
        if (!response.ok) {
          throw new Error("Failed to load document");
        }

        const blob = await response.blob();

        await renderAsync(blob, containerRef.current, undefined, {
          className: "docx-wrapper",
          inWrapper: true,
          ignoreWidth: true,
          ignoreHeight: true,
          ignoreFonts: false,
          breakPages: false,
          renderHeaders: true,
          renderFooters: true,
          renderFootnotes: true,
          renderEndnotes: true,
        });

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
      {/* Custom styles for the docx-preview output */}
      <style jsx global>{`
        .docx-wrapper {
          background: transparent !important;
        }
        .docx-wrapper > section.docx {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin-bottom: 0 !important;
          width: 100% !important;
          min-height: auto !important;
        }
        .docx-wrapper .docx > * {
          color: #d1d5db !important; /* gray-300 */
        }
        .docx-wrapper .docx h1,
        .docx-wrapper .docx h2,
        .docx-wrapper .docx h3,
        .docx-wrapper .docx h4,
        .docx-wrapper .docx h5,
        .docx-wrapper .docx h6 {
          color: #ffffff !important;
        }
        .docx-wrapper .docx p {
          margin-bottom: 1rem !important;
          line-height: 1.6 !important;
        }
        .docx-wrapper .docx a {
          color: #FFCD4D !important;
        }
        .docx-wrapper .docx a:hover {
          text-decoration: underline !important;
        }
        .docx-wrapper .docx table {
          border-collapse: collapse !important;
          width: 100% !important;
        }
        .docx-wrapper .docx td,
        .docx-wrapper .docx th {
          border: 1px solid #374151 !important;
          padding: 0.5rem !important;
        }
        .docx-wrapper .docx ul,
        .docx-wrapper .docx ol {
          padding-left: 2rem !important;
          margin-bottom: 1rem !important;
        }
        .docx-wrapper .docx li {
          margin-bottom: 0.5rem !important;
        }
        /* Override any background colors */
        .docx-wrapper .docx span[style*="background"] {
          background: transparent !important;
        }
        /* Ensure highlight/mark styling is visible */
        .docx-wrapper .docx mark,
        .docx-wrapper .docx span[style*="yellow"] {
          background: #FFCD4D !important;
          color: #000000 !important;
          padding: 0 0.25rem !important;
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
        className={loading ? "hidden" : ""}
      />
    </>
  );
}
