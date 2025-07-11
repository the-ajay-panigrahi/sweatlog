import ReactDOM from "react-dom";

const Modal = ({ showExerciseDescription, handleCloseModal }) => {
  const { name, description } = showExerciseDescription;
  return ReactDOM.createPortal(
    <div>
      <button onClick={handleCloseModal} />
      <div>
        <div>
          <h6>Name</h6>
          <h2>{name.replaceAll("-", " ")}</h2>
        </div>
        <div>
          <h6>Description</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
