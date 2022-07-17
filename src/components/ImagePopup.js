function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_view-card ${
        card.link ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__window popup__window_view-card">
        <button
          className="popup__close-button popup__close-button_view-card"
          type="button"
          aria-label="close"
          onClick={onClose}
        ></button>
        <img
          src={`${card.link}`}
          alt={card.name}
          className="popup__img popup__img_view-card"
        />
        <h2 className="popup__title popup__title_view-card">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
