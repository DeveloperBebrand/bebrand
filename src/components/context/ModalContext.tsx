'use client'
import React, { createContext, useContext, useState } from 'react';

export const ModalContext = createContext({
  isModalOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  const { isModalOpen, openModal, closeModal } = context;
  return { isModalOpen, openModal, closeModal };
}