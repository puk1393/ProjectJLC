'use client'; /*Se utiliza por el useState*/
import { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Favor utilizar el modal correctamente");
  return context;
};

export const Modal = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Trigger = ({ children }: { children: ReactNode }) => {
  const { setIsOpen } = useModal();
  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

Modal.Content = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useModal();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={() => setIsOpen(false)}>Cerrar</button>
      </div>
    </div>
  );
};

Modal.Header = ({ children }: { children: ReactNode }) => (
  <h2>{children}</h2>
);

Modal.Body = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

Modal.Footer = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);