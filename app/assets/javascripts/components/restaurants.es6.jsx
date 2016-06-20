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
        return (
            <div>
                <img src="assets/pizza.jpg" className="restaurants-img"/>
                <h1> Places to eat </h1>


                <div className="">
                    <label>Cuisine </label>
                    <select ref="cuisine" defaultValue={this.state.cuisineFilter} onChange={this.handleCuisineChange.bind(this)}>
                        <option value="all"> All </option>
                        <option value="asian" > Asian </option>
                        <option value="dinner"> Dinner </option>
                        <option value="salad"> Salad </option>
                    </select>
                </div>

                <div className="">
                    <label>Rank </label>
                    <select ref="rank" defaultValue={this.state.rankFilter} onChange={this.handleRankChange.bind(this)} >
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
                    {this.props.restaurants.filter(a => this.isCuisine(a) && this.isRank(a)).map(r =>
                         <Restaurant restaurant={r} key = {r.name}/>
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