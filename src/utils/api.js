class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //получить ответ
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  //получаем данные пользователя
  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //получаем массив карточек
  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //метод добавления карточки
  addNewCard(newCard) {
    return fetch(this._baseUrl + '/cards/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
    }).then(this._handleResponse);
  }

  //метод удаления карточки
  deleteCard(cardId) {
    return fetch(this._baseUrl + '/cards/' + `${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //редактирование данных профайла
  sethUserInfo(userInfo) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about,
      }),
    }).then(this._handleResponse);
  }

  //редактирование аватара
  setUserAvatar(userInfo) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userInfo.avatar,
      }),
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(this._baseUrl + '/cards/likes/' + `${cardId}`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'e5a37e81-cb9a-4a0e-bacc-f2b0bcf5bc25',
    'Content-Type': 'application/json',
  },
});

export default api;
