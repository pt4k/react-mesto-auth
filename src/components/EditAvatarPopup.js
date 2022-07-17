import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, isLoad, onUpdateAvatar }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoad}
      onSubmit={handleSubmit}
      loadingText="Сохранение..."
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <input
        ref={inputRef}
        className="popup__input popup__input_el_avatar"
        type="text"
        name="avatar"
        placeholder="Аватар"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
