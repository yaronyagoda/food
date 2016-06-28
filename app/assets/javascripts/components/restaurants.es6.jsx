class Restaurants extends React.Component {


    componentDidMount() {
       Api.getRestaurants(); 
    }



    

    handleCuisineChange(evt) {
        store.dispatch(RestaurantsActions.cuisine_filter(evt.target.value))
    }

    handleRankChange(evt) {
        store.dispatch(RestaurantsActions.rate_filter(evt.target.value))
    }

    render() {
        const foodTypes = ["all", "Asian" , "Dinner", "Salad"]
        const rankTypes = ["1", "2" , "3", "4", "5"]

        return (
            <div>
                <div className="rest-img-container">
                    <img src="assets/food4.jpg" className="restaurants-img"/>
                 </div>
                <div>
                    <div className="title-center">
                        <h1 className="main-title"> Eat What you Love </h1>
                        <h6 className="main-title main-title-remark"> (or love what you eat)</h6>
                    </div>

                    <div>
                        <div className="filter">
                            <RestaurantFilter label="Cuisine"
                                              defaultValue={this.props.cuisineFilter}
                                              onChange={this.handleCuisineChange.bind(this)}
                                              options={foodTypes}
                            />
                        </div>
                        <div className="filter">
                            <RestaurantFilter label="Rate"
                                              defaultValue={this.props.rankFilter}
                                              onChange={this.handleRankChange.bind(this)}
                                              options={rankTypes}
                                              className="filter"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="rest-list">
                                {this.props.filtered.map(r =>
                                    <Restaurant restaurant={r} key = {r.id}/>
                                )}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <RestMap/>
                        </div>
                    </div>

                    <Link to="/new" className="btn btn-default newRest"> Have you found a new place to eat?</Link>
                    <button className="btn btn-default newRest">Feeling lucky?</button>
                </div>

            </div>

        );
    }
    
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        filtered: state.filtered,
        rate_filter: state.rate_filter,
        cuisine_filter: state.cuisine_filter
    };
};

Restaurants = ReactRedux.connect(mapStateToProps)(Restaurants);