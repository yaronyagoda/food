class Restaurants extends React.Component {



    constructor() {
        super()
        this.state = {
            cuisineFilter: "all",
                rankFilter: "all"
        };

    }

    componentDidMount() {
       Api.getRestaurants(); 
    }



    isCuisine(restaurant) {
        const cusineState = this.state.cuisineFilter
        if (cusineState === 'all') return true;
        return cusineState === restaurant.food_type;
    }

    isRank(restaurant) {
        const rankState = this.state.rankFilter
        if (rankState === 'all') return true;
        return rankState === restaurant.rank.toString();
    }

    handleCuisineChange(evt) {
        this.setState({
            cuisineFilter: evt.target.value
        })
    }

    handleRankChange(evt) {
        this.setState({
            rankFilter: evt.target.value
        })
    }

    render() {
        const foodTypes = ["all", "Asian" , "Dinner", "Salad"]
        const rankTypes = ["1", "2" , "3", "4", "5"]

        return (
            <div>
                <img src="assets/food4.jpg" className="restaurants-img"/>
                <h1> Places to eat </h1>
                <div>
                    <div className="filter">
                        <RestaurantFilter label="Cuisine"
                                          defaultValue={this.state.cuisineFilter}
                                          onChange={this.handleCuisineChange.bind(this)}
                                          options={foodTypes}
                                          />
                    </div>
                    <div className="filter">
                        <RestaurantFilter label="Rank"
                                          defaultValue={this.state.rankFilter}
                                          onChange={this.handleRankChange.bind(this)}
                                          options={rankTypes}
                                          className="filter"/>
                    </div>
                </div>
                {this.props.restaurants.filter(a => this.isCuisine(a) && this.isRank(a)).map(r =>
                     <Restaurant restaurant={r} key = {r.id}/>
                )}
                <Link to="/new"> Do you have something new?</Link>

            </div>

        );
    }
    
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    };
};

Restaurants = ReactRedux.connect(mapStateToProps)(Restaurants);