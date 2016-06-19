


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
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    LOADED: (state, action) => {
        return {
            loaded: true,
            array: action.value
        };
    },
    FAILED_TO_LOAD: (state, action) => {
        return {
            loaded: true,
            array: state.array,
            error: action.value
        };
    }
};






function restaurantsReducer (state = {restaurants:[]}, action) {
    switch(action.type) {
        case "Loaded":
           return {restaurants  : action.value}
        case "Failed":
            return state;
        case "Added":
            return { restaurants:[action.value, ...state.restaurants]}
        default:
            return state;
    }
}