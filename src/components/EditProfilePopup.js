import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ onUpdateUser, isOpen, isLoad, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoad}
      loadingText="Сохранение..."
      onSubmit={handleSubmit}
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <input
        className="popup__input popup__input_el_first-name"
        value={name || ''}
        onChange={handleChangeName}
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error firstname-input-error"></span>
      <input
        className="popup__input popup__input_el_about"
        value={description || ''}
        onChange={handleChangeDescription}
        type="text"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
