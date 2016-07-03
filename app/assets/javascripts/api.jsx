

class Api {

  static get(path, data = null) {
    return Api.ajax(path, 'GET', data);
  }
  static post(path, data = null) {
    return Api.ajax(path, 'POST', data);
  }
  static put(path, data = null) {
    return Api.ajax(path, 'PUT', data);
  }

  static remove(path, data = null) {
    return Api.ajax(path, 'DELETE', data);
  }

  static ajax(path, method = 'GET', data = null) {
      return $.ajax({
      url: config.api + path,
      method: method,
      contentType: 'application/json',
      data: JSON.stringify(data)
    });
  }

  static getRestaurants() {
    Api.get('/restaurants.json')
            .done(restaurants => store.dispatch(RestaurantsActions.loaded(restaurants)))
            .fail(error => {
              const message = error.message || error;
              store.dispatch(RestaurantsActions.failedToLoad(message));
            });
  }

  static getCuisineTypes() {
    Api.get('/cuisine_types.json')
      .done(types =>  {
          store.dispatch(RestaurantsActions.cuisine_types_loaded(types))
      }
         )
      .fail(error => {
        const message = error.message || error;
        store.dispatch(RestaurantsActions.failedToLoad(message));
      });
  }

  static createRestaurant(restaurant) {
    Api.post('restaurants', { restaurant: restaurant })
            .done(rest => store.dispatch(RestaurantsActions.added(rest))
    );
  }

  static updateRestaurant(id, restaurant) {
    Api.put('/restaurants/' + id, { restaurant: restaurant })
            .done(rest => store.dispatch(RestaurantsActions.updated(restaurant))
            );
  }

  static deleteRestaurant(id) {
    Api.remove('/restaurants/' + id + '.json')
            .done(restaurant => store.dispatch(RestaurantsActions.deleted(id))
            );
  }
}