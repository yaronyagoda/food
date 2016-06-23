


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
    }
}





function restaurantsReducer (state = {restaurants:[]}, action) {
    switch(action.type) {
        case "Loaded":
           return {restaurants  : action.value};
        case "Failed":
            return state;
        case "Added":
            return state;
        case "updated":
            return { restaurants:[action.value, ...state.restaurants.filter(rest => rest.id == action.value.id)]}
        case "deleted":
            return { restaurants:state.restaurants.filter(rest => rest.id != action.value)}
        default:
            return state;
    }
}