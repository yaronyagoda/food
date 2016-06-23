
class Restaurant extends React.Component {

    onDelete(){
        Api.deleteRestaurant(this.props.restaurant.id);
    }

    render () {
      const tenBisClass = this.props.restaurant.ten_bis ? "" : "img-hidden";
      const deliveryClass = this.props.restaurant.delivery ? "" : "img-hidden";
      const stars = [];
      for (i = 0; i < this.props.restaurant.rank ; i++) {
          stars.push(<img src="assets/star.jpeg" id="star" key={i}/>)
      }
      return (
         <div className="restaurant">
             <div> 
                 <div className="restaurant-details">
                        <a href={this.props.restaurant.link}> {this.props.restaurant.name}</a>
                        <img src="assets/tenbis.jpeg" className={tenBisClass}/>
                        <img src="assets/deliver5.jpeg" className={deliveryClass}/>
                          <h3>{this.props.restaurant.food_type}</h3>
                  </div>
                  <div className="rating">
                      <h3> Rating: </h3>
                      {stars}
                  </div>
             </div>
             <div className="desc">
                 <p>{this.props.restaurant.description}</p>
             </div>
             <div>
                 <button className="restaurant-button">Edit </button>
                 <button className="restaurant-button" onClick={this.onDelete.bind(this)}>Delete </button>
             </div>
         </div>
    );
  }
}

Restaurant.propTypes = {
  restaurant: React.PropTypes.object
};



