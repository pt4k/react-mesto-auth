import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки удаления и кнопки лайк
  const cardDeleteButtonClassName = `element__button-delete ${
    isOwn ? 'element__button-delete_visible' : 'element__button-delete_hidden'
  }`;
  const cardLikeButtonClassName = `element__button-like ${
    isLiked ? 'element__button-like_active' : ''
  }`;

  function handleSelectedCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <figure className="element">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="delete"
        onClick={handleDeleteClick}
      ></button>
      <img
        src={card.link}
        alt={card.name}
        className="element__img"
        onClick={handleSelectedCardClick}
      />
      <figcaption className="element__caption">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="like"
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
