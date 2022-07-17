import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, isLoad, onAddCard }) {
  const placeRef = useRef();
  const linkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name: placeRef.current.value,
      link: linkRef.current.value,
    });
  }

  useEffect(() => {
    placeRef.current.value = '';
    linkRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoad}
      onSubmit={handleSubmit}
      loadingText="Сохранение..."
      name="add-card"
      title="Новое место"
      buttonText="Сохранить"
    >
      <input
        ref={placeRef}
        className="popup__input popup__input_el_place"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error name-input-error"></span>
      <input
        ref={linkRef}
        className="popup__input popup__input_el_link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
