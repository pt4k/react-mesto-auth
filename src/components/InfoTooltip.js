const InfoTooltip = ({ isOpen, title, onClose, icon }) => {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__window">
        <button
          className="popup__close-button"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <img className="popup__icon" alt="Результат авторизации" src={icon} />
        <h2 className="popup__title popup__title_tooltip">{title}</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
