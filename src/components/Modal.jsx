import ReactDOM from "react-dom";

const Modal = ({ showExerciseDescription, handleCloseModal }) => {
  const { name, description } = showExerciseDescription;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 sm:px-6 sm:py-8 cursor-pointer"
      onClick={handleCloseModal}
    >
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 transition-all cursor-default"
        o
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition cursor-pointer"
        >
          <i className="fas fa-times text-lg" />
        </button>

        <div>
          <h6 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Name
          </h6>
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 capitalize mt-1">
            {name.replaceAll("-", " ")}
          </h2>
        </div>

        <div>
          <h6 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            Description
          </h6>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-1 whitespace-pre-line text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
