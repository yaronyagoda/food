


const RestaurantsActions = {
    loaded(value = []) {
        return {
            type : "Loaded",
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





function restaurantsReducer (state = {restaurants:[] , filtered:[], cuisineFilter: "all", rateFilter: "all"}, action) {
    switch(action.type) {
        case "Loaded":
           return {restaurants  : action.value, filtered:action.value, cuisineFilter:state.cuisineFilter, rateFilter: state.rateFilter} ;
        case "Failed":
            return state;
        case "Added":
            return state;
        case "updated":
            return { restaurants:[action.value, ...state.restaurants.filter(rest => rest.id == action.value.id)], filtered:stae.filtered, cuisineFilter:state.cuisineFilter, rateFilter: state.rateFilter}
        case "deleted":
            return { restaurants:state.restaurants.filter(rest => rest.id != action.value),
                filtered:state.restaurants.filter(rest => rest.id != action.value), cuisineFilter:state.cuisineFilter, rateFilter: state.rateFilter}
        case "cuisine_filter":
            debugger;
            return {restaurants: state.restaurants, filtered:state.restaurants.filter(rest => isCuisine(rest, action.value) && isRate(rest, state.rateFilter)), cuisineFilter:action.value, rateFilter:state.rateFilter}
        case "rate_filter":
            return {restaurants: state.restaurants, filtered:state.restaurants.filter(rest => isCuisine(rest, state.cuisineFilter) && isRate(rest, action.value)), cuisineFilter:state.cuisineFilter, rateFilter:action.value}
        default:
            return state;
    }

    function isCuisine(restaurant, filter) {
        if (filter === 'all') return true;
        return filter === restaurant.food_type;
    }

    function isRate(restaurant, filter) {
        debugger;
         if (filter === 'all') return true;
        return filter <= restaurant.rank.toString();
    }
}

