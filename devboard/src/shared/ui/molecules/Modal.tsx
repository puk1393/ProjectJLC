'use client'; // Necesario porque este componente usa useState y useContext de React
import { createContext, useContext, useState} from "react";
import type { ReactNode, FC } from "react";

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

const ModalTrigger: FC<{ children: ReactNode }> = ({ children }) => {
  const { setIsOpen } = useModal();
  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

const ModalContent: FC<{ children: ReactNode }> = ({ children }) => {
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

const ModalHeader: FC<{ children: ReactNode }> = ({ children }) => <h2>{children}</h2>;
const ModalBody: FC<{ children: ReactNode }> = ({ children }) => <div>{children}</div>;
const ModalFooter: FC<{ children: ReactNode }> = ({ children }) => <div>{children}</div>;

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.displayName = "Modal";
Modal.Trigger.displayName = "ModalTrigger";
Modal.Content.displayName = "ModalContent";
Modal.Header.displayName = "ModalHeader";
Modal.Body.displayName = "ModalBody";
Modal.Footer.displayName = "ModalFooter";