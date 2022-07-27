const InfoTooltip = ({ name, isOpen, title, onClose, icon }) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <button
          className={`popup__close-button popup__close-button_${name}`}
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <img className="" alt="Результат авторизации" src={icon} />
        <h2 className="popup__title">{title}</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
