class Restaurants extends React.Component {


    constructor() {
        super();
        this.state = {
            luck:""
        }
    }

     luckyBastard() {
         debugger;
         const rest = this.props.filtered[Math.floor((Math.random() * this.props.filtered.length))];
         this.setState({
             luck: "You are going to eat at " + rest.name
         })

     }


    componentWillMount() {
      Api.getCuisineTypes();
      Api.getRestaurants();
    }

    handleCuisineChange(evt) {
        store.dispatch(RestaurantsActions.cuisine_filter(evt.target.value))
    }

    handleRankChange(evt) {
        store.dispatch(RestaurantsActions.rate_filter(evt.target.value))
    }

    render() {
        const rankTypes = ["1", "2" , "3", "4", "5"]

        console.log(this.props.filtered)
        if (this.props.filtered)
            restaurants =  this.props.filtered.map(r =>
                  <Restaurant restaurant={r} key = {r.id} cuisine_types={this.props.cuisine_types}/>)
       else restaurants = [];

        return (
            <div className="wrapper">
                <div className="rest-img-container">
                    <img src="assets/food4.jpg" className="restaurants-img"/>
                 </div>
                <div>
                    <div className="title-center">
                        <h1 className="main-title"> Wewok </h1>
                        <h6 className="main-title main-title-remark"> (you know? wok is like work but Asian? hilarious!!!)</h6>
                    </div>

                    <div>
                        <div className="filter">
                            <QuisineFilter label="Cuisine"
                                           defaultValue={this.props.cuisineFilter}
                                           onChange={this.handleCuisineChange.bind(this)}
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
                        <div className="col-md-5 col-lg-5">
                            <div className="rest-list">
                                {restaurants}
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-5">
                            <RestMap/>
                        </div>
                    </div>
                    <div className="row">

                    </div>


                    <div className="footer navbar navbar-default navbar-fixed-bottom">

                        <div className="row">
                            <div className="col-md-2 col-md-offset-2">
                                <Link to="/new" className="btn btn-default newRest"> Have you found a new place to eat?</Link>
                            </div>
                            <div className="col-md-1 col-md-offset-1">
                                <button className="btn btn-default newRest" onClick={this.luckyBastard.bind(this)}>Feeling lucky?</button>
                            </div>
                            <div className="col-md-5 col-md-offset-1">
                                <h1>{this.state.luck}</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
    
}

const mapStateToProps = state => {
  console.log(state.filtered);
  return {
        restaurants: state.restaurants,
        filtered: state.filtered,
        rate_filter: state.rate_filter,
        cuisine_filter: state.cuisine_filter,
        cuisine_types: state.cuisine_types
    };
};

Restaurants = ReactRedux.connect(mapStateToProps)(Restaurants);