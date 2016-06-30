

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

   static delete(path, data = null) {
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

    static getRestaurants(dispatch = store.dispatch) {
        Api.get("/restaurants.json")
            .done(restaurants => dispatch(RestaurantsActions.loaded(restaurants)))
            .fail(error => {
                const message = error.message || error;
                dispatch(RestaurantsActions.failedToLoad(message));
            });
    }

    static createRestaurant(name, food_type, speed, ten_bis, delivery, rank, link, description, address, lat, lang, dispatch = store.dispatch) {
        Api.post("/restaurants", {restaurant:{name:name, food_type:food_type, speed:speed, ten_bis:ten_bis, 
        delivery:delivery, rank:rank, link:link, description:description, address:address, lat:lat, lang:lang}})
            .done(restaurant => dispatch(RestaurantsActions.added(restaurant))
    )
                
    }

    static updateRestaurant(id, name, food_type, speed, ten_bis, delivery, rank, link, description, address, lat, lang, dispatch = store.dispatch) {
        Api.put("/restaurants/" + id, {restaurant:{id:id, name:name, food_type:food_type, speed:speed, ten_bis:ten_bis,
            delivery:delivery, rank:rank, link:link, description:description, address:address, lat:lat, lang:lang}})
            .done(restaurant => dispatch(RestaurantsActions.updated(restaurant))
            )

    }

    static deleteRestaurant(id, dispatch = store.dispatch) {
        Api.delete("/restaurants/" + id + ".json")
            .done(restaurant => dispatch(RestaurantsActions.deleted(id))
            )

    }

 }