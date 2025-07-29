// components/Modal.tsx
'use client';

import { ReactNode } from 'react';

export default function Modal({ isOpen, onClose, children }: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
