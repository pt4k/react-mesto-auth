function Loader({ loadingText }) {
  return (
    <button
      className="popup__save-button popup__save-button_load"
      type="submit"
    >
      {loadingText}
    </button>
  );
}

export default Loader;
