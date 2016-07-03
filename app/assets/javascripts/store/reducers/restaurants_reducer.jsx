


const RestaurantsActions = {
    loaded(value = []) {
        return {
            type : "Loaded",
            value : value
        }
    },

    cuisine_types_loaded(value = []) {
      return {
        type : "Cuisine Loaded",
        value : value
      }
    },

    failedToLoad(errorMessage) {
        return {
            type: "Failed",
            value: errorMessage
        };
    },
    added(value) {
        return {
            type : "Added",
            value : value
        }
    },
    updated(value) {
        return {
            type : "updated",
            value : value
        }
    },
    deleted(value) {
        return {
            type : "deleted",
            value : value
        }
    },

    cuisine_filter(value) {
        return {
            type : "cuisine_filter",
            value : value
        }
    },

    rate_filter(value) {
        return {
            type : "rate_filter",
            value : value
        }
    }
}





function restaurantsReducer (state = {restaurants:[] , filtered:[], cuisineFilter: "all", rateFilter: "1", cuisine_types:[]}, action) {

     switch(action.type) {
        case "Loaded":
           return {restaurants  : action.value, filtered:action.value, cuisineFilter:state.cuisineFilter, rateFilter: state.rateFilter, cuisine_types: state.cuisine_types} ;

      case "Cuisine Loaded":
        return {restaurants  : state.restaurants, filtered:state.filtered, cuisineFilter:state.cuisineFilter, rateFilter: state.rateFilter, cuisine_types: action.value} ;

        case "Failed":
            return state;
        case "Added":
            return state;
        case "updated":
            return { restaurants:[action.value, ...state.restaurants.filter(rest => rest.id == action.value.id)].sort,
                      filtered:stae.filtered,
                      cuisineFilter:state.cuisineFilter,
                      rateFilter: state.rateFilter,
                      cuisine_types: state.cuisine_types}
        case "deleted":
            return { restaurants:state.restaurants.filter(rest => rest.id != action.value),
                filtered:state.restaurants.filter(rest => rest.id != action.value),
              cuisineFilter:state.cuisineFilter,
              rateFilter: state.rateFilter , cuisine_types: state.cuisine_types}
        case "cuisine_filter":
            const filtered = state.restaurants.filter(rest => isCuisine(rest, action.value) && isRate(rest, state.rateFilter))
            console.log(filtered)
            return {restaurants: state.restaurants,
              filtered:state.restaurants.filter(rest => isCuisine(rest, action.value) && isRate(rest, state.rateFilter)),
              cuisineFilter:action.value, rateFilter:state.rateFilter , cuisine_types: state.cuisine_types}
        case "rate_filter":
            return {restaurants: state.restaurants,
              filtered:state.restaurants.filter(rest => isCuisine(rest, state.cuisineFilter) && isRate(rest, action.value)),
              cuisineFilter:state.cuisineFilter, rateFilter:action.value , cuisine_types: state.cuisine_types}
        default:
            return state;
    }

    function isCuisine(restaurant, filter) {
        if (filter == '0') return true;
        return filter == restaurant.cuisine_types_id;
    }

    function isRate(restaurant, filter) {
        return filter <= restaurant.rank.toString();
    }
}

