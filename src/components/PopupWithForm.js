import Loader from './Loader';

function PopupWithForm({
  name,
  isOpen,
  title,
  onClose,
  onSubmit,
  children,
  buttonText,
  isLoading,
  loadingText,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <h2 className="popup__title">{title}</h2>
        <button
          className={`popup__close-button popup__close-button_${name}`}
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          {isLoading ? (
            <Loader loadingText={loadingText} />
          ) : (
            <button className="popup__save-button" type="submit">
              {buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
