import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({ showExerciseDescription, handleCloseModal }) => {
  const { name, description } = showExerciseDescription;
  const closeRef = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") handleCloseModal();
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [handleCloseModal]);

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleCloseModal}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={name.replaceAll("-", " ")}
        className="exercise-modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={handleCloseModal}
          ref={closeRef}
          aria-label="Close"
          className="modal-close"
        >
          <i className="fas fa-times" />
        </button>

        <div>
          <h6 className="micro-label">Name</h6>
          <h2 className="modal-title">{name.replaceAll("-", " ")}</h2>
        </div>

        <div>
          <h6 className="micro-label">Description</h6>
          <p className="modal-description">{description}</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default Modal;
