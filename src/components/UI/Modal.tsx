import React, { useState, useEffect} from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown as EventListener);
        return () => {
            window.removeEventListener('keydown', handleKeyDown as EventListener);
          };
        
      }, [onClose]);

    if(!isOpen) return null;
    return(
        <>
       <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 px-2 md:px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          {children}
        </div>
      </div>
        </>
    )

};

export default Modal;
