"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  openContact: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = () => setIsOpen(true);

  return (
    <ContactContext.Provider value={{ isOpen, setIsOpen, openContact }}>
      {children}
    </ContactContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte facilement
export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}