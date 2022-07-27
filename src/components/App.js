import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import api from '../utils/api';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isEditAvatarPopupOpen, setIsOpenEditAvatar] = useState(false);
  const [isEditProfilePopupOpen, setIsOpenEditProfile] = useState(false);
  const [isAddPlacePopupOpen, setIsOpenAddPlace] = useState(false);
  const [isDeleteCardPopupOpen, setIsOpenDeleteCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [deletionСard, setDeletionCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  //функции открытия попапов
  const handleEditAvatar = () => {
    setIsOpenEditAvatar(true);
  };
  const handleEditProfile = () => {
    setIsOpenEditProfile(true);
  };
  const handleAddCard = () => {
    setIsOpenAddPlace(true);
  };
  const handleDeleteCard = (card) => {
    setIsOpenDeleteCard(true);
    setDeletionCard(card);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  //закртыть все попапы и сбросить инпуты
  const closeAllPopups = () => {
    setIsOpenEditAvatar(false);
    setIsOpenEditProfile(false);
    setIsOpenAddPlace(false);
    setIsOpenDeleteCard(false);
    setSelectedCard({ name: '', link: '' });
    setDeletionCard({ name: '', link: '' });
    setIsLoading(false);
  };

  //получапем данные пользователя с сервера
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //получаем карточки с сервера
  useEffect(() => {
    api
      .getInitialCards()
      .then((cardList) => {
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //изменяем данные пользователя
  function handleUpdateUser(newInfo) {
    setIsLoading(true);
    api
      .sethUserInfo(newInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // изменяем аватар
  function handleUpdateAvatar(newInfo) {
    setIsLoading(true);
    api
      .setUserAvatar(newInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //добавляем карточку
  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true);
    api
      .addNewCard(newCard)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //лайк карточки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  //удалить карточку
  function handleCardDelete(card) {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          textLink="Выйти"
          userLogin="locbne@gmail.com"
          headerLinkActiveClassName="header__link_active"
          routeLink="signin"
        />

        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatar}
            onEditProfile={handleEditProfile}
            onAddPlace={handleAddCard}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCard}
            cards={cards}
          />

          <Route path="/signup">
            <Register
              textLink="Войти"
              isLoading={isLoading}
              loadingText="Регистрация..."
              buttonText="Зарегистрироваться"
              title="Регистрация"
            />
          </Route>

          <Route path="/signin">
            <Login
              isLoading={isLoading}
              loadingText="Вход..."
              buttonText="Войти"
              title="Вход"
            />
          </Route>
        </Switch>

        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          isLoad={isLoading}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isLoad={isLoading}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          isLoad={isLoading}
          onClose={closeAllPopups}
          onAddCard={handleAddPlaceSubmit}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          isLoad={isLoading}
          card={deletionСard}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
