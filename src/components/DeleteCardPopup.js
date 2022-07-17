import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ isOpen, onClose, card, isLoad, onDeleteCard }) {
  function handleSubmit(e) {
    e.preventDefault();

    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoad}
      loadingText="Удаление..."
      onSubmit={handleSubmit}
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
    />
  );
}

export default DeleteCardPopup;
