'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface UnderConstructionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnderConstructionPopup = ({ isOpen, onClose }: UnderConstructionPopupProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#FAFAF7] p-10 border border-[#D4D5CF] max-w-md w-full mx-4">
        <div className="text-center">
          <h3 className="font-[family-name:var(--font-poppins)] font-bold text-2xl uppercase tracking-widest text-[#0E0F0C] mb-4">
            UNDER CONSTRUCTION
          </h3>
          <p className="text-[#4D4E48] text-base leading-relaxed mb-8">
            This project page is currently under construction. Check back soon!
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-[#0E0F0C] text-[#FAFAF7] font-[family-name:var(--font-poppins)] text-sm uppercase tracking-wider hover:bg-[#3D4A2A] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
