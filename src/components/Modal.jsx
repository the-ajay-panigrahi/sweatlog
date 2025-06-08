import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ showExerciseDescription, handleCloseModal }) => {
  const { name, description } = showExerciseDescription || {};

  return ReactDOM.createPortal(
    <div
      className="fixed z-50 inset-0 bg-black/40 flex justify-center items-center px-4 cursor-pointer"
      onClick={handleCloseModal} // click outside to close
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md animate-fadeIn scale-95 cursor-default"
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-slate-800">
            Exercise Info
          </h3>
          <button
            onClick={handleCloseModal}
            className= "cursor-pointer text-slate-400 hover:text-red-500 transition duration-200 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <h6 className="text-sm text-slate-500">Name</h6>
          <h2 className="text-lg font-bold text-slate-800 break-words">
            {name?.replaceAll("-", " ")}
          </h2>
        </div>

        <div>
          <h6 className="text-sm text-slate-500">Description</h6>
          <p className="text-base text-slate-700 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("popup")
  );
};

export default Modal;
