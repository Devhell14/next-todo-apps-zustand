"use client";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return modalOpen ? (
    <dialog open className="modal">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setModalOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  ) : null;
};

export default Modal;
