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
    <div style={overlayStyle}>
      <div style={modalStyle}>
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

const overlayStyle = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
};