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

    isRank(restaurant) {
        if (this.refs.rank.value == 'all') return true;
        return this.refs.rank.value === restaurant.rank;
    }

    isCuisine(restaurant) {
        if (this.refs.cuisine.value == 'all') return true;
        return this.refs.cuisine.value === restaurant.food_type;
    }

    handleSelect(sel) {
        //  this.render()
        this.setState({
            cuisineFilter: sel.value
        })
    }

    render() {
        return (
            <div>
                <img src="assets/pizza.jpg" className="restaurants-img"/>
                <h1> Places to eat </h1>


                <div className="">
                    <label>Cuisine </label>
                    <select ref="cuisine" default="asian" defaultValue={this.state.cuisineFilter} >
                        <option value="all"> All </option>
                        <option value="asian" > Asian </option>
                        <option value="dinner"> Dinner </option>
                        <option value="salad"> Salad </option>
                    </select>
                </div>

                <div className="">
                    <label>Rank </label>
                    <select ref="rank" defaultValue="3">
                        <option value="all"> All </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3" > 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                    </select>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th className="long">Name</th>
                        <th>Type</th>
                        <th>Speed</th>
                        <th>Ten Bis</th>
                        <th>Delivery</th>
                        <th>Rank </th>
                        <th className="long">Description</th>


                    </tr>
                    </thead>

                    <tbody>
                    {this.props.restaurants.filter(a => this.isCuisine(a) && this.isCuisine(a)).map(r =>
                         <Restaurant restaurant={r} />
                    )}
                    </tbody>
            </table>

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