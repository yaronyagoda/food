
class Restaurant extends React.Component {
  render () {
      const tenBisClass = this.props.restaurant.ten_bis ? "" : "img-hidden";
      const deliveryClass = this.props.restaurant.delivery ? "" : "img-hidden";
      const stars = [];
      for (i = 0; i < this.props.restaurant.rank ; i++) {
          stars.push(<img src="assets/star.jpeg" id="star"/>)
      }
      return (
         <div className="restaurant">
              <div>
                <div>
                    <a href={this.props.restaurant.link}> {this.props.restaurant.name}</a>
                    <img src="assets/tenbis.jpeg" className={tenBisClass}/>
                    <img src="assets/deliver1.jpeg" className={deliveryClass}/>
                </div>
                  <div>
                      <h5>Cuisine:</h5>
                      <p>{this.props.restaurant.food_type}</p>
                  </div>
                <div>
                    <h5>Rank:</h5>
                    {stars}
                </div>
            </div>
             <div className="desc">
                 <h5>Description:</h5>
                 <p>{this.props.restaurant.description}</p>
             </div>
         </div>
    );
  }
}

Restaurant.propTypes = {
  restaurant: React.PropTypes.object
};



