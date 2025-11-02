"use client";

import { useState, useEffect } from "react";
import "./NFTCarousel.css";

interface NFTCarouselProps {
  images: string[];
}

interface DragState {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}

export default function NFTCarousel({ images }: NFTCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Initialize on mount
    setIsDesktop(window.innerWidth >= 1080);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1080);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    if (!isDesktop) return; // Disable drag on mobile
    setDraggedIndex(index);
    setDragState({
      startX: e.clientX,
      startY: e.clientY,
      currentX: e.clientX,
      currentY: e.clientY,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedIndex !== null && dragState) {
      // Calculate drag distance
      const deltaX = e.clientX - dragState.startX;
      const deltaY = e.clientY - dragState.startY;

      // Set max drag distance (in pixels)
      const maxDragDistance = 100;

      // Clamp the drag values
      const clampedX = Math.max(
        -maxDragDistance,
        Math.min(maxDragDistance, deltaX)
      );
      const clampedY = Math.max(
        -maxDragDistance,
        Math.min(maxDragDistance, deltaY)
      );

      setDragState({
        ...dragState,
        currentX: dragState.startX + clampedX,
        currentY: dragState.startY + clampedY,
      });
    }
  };

  const handleMouseUp = () => {
    setDraggedIndex(null);
    setDragState(null);
  };

  return (
    <div
      className="nft-carousel"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`nft-carousel-item ${
            hoveredIndex === index ? "hovered" : ""
          } ${draggedIndex === index ? "dragging" : ""}`}
          data-index={index + 1}
          onMouseEnter={() =>
            isDesktop && draggedIndex === null && setHoveredIndex(index)
          }
          onMouseLeave={() => isDesktop && setHoveredIndex(null)}
          onMouseDown={(e) => handleMouseDown(e, index)}
          style={
            draggedIndex === index && dragState
              ? ({
                  "--drag-x": `${dragState.currentX - dragState.startX}px`,
                  "--drag-y": `${dragState.currentY - dragState.startY}px`,
                } as React.CSSProperties)
              : undefined
          }
        >
          <img
            src={img}
            alt={`Bear NFT ${index + 1}`}
            draggable={false}
          />
        </div>
      ))}
      {/* Blur mask */}
      <div className="nft-carousel-blur-mask"></div>
    </div>
  );
}
