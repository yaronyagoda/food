
class Restaurant extends React.Component {

    onDelete(){
        Api.deleteRestaurant(this.props.restaurant.id);
    }

    render () {
      const tenBisClass = this.props.restaurant.ten_bis ? "" : "img-hidden";
      const deliveryClass = this.props.restaurant.delivery ? "" : "img-hidden";
      const stars = [];
      for (i = 0; i < this.props.restaurant.rank ; i++) {
          stars.push(<img src="assets/star.jpeg" className="star" key={i}/>)
      }
      return (
         <div className="restaurant row">
             <div className="col-sm-5">
                 <div className="row">
                     <div className="col-sm-6">
                         <a href={this.props.restaurant.link}>
                           <h3>
                               {this.props.restaurant.name}
                           </h3>
                         </a>
                     </div>
                     <div className="col-sm-6">
                         <h3>{this.props.restaurant.food_type}</h3>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-sm-6">
                         <img src="assets/tenbis.jpeg" className={tenBisClass}/>
                     </div>

                     <div className="col-sm-6">
                         <img src="assets/deliver5.jpeg" className={deliveryClass}/>
                     </div>
                 </div>
             </div>
             <div className="col-sm-5">
                 <div className="row">
                     <div className="col-sm-12 rating">
                         {stars}
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-sm-12 desc">
                         <p>{this.props.restaurant.description}</p>
                     </div>
                 </div>
             </div>


             <div className="col-sm-2 actions-btn-container">
                 <button className="btn btn-default restaurant-button">Edit </button>
                 <button className="btn btn-default restaurant-button" onClick={this.onDelete.bind(this)}>Delete </button>
             </div>
         </div>
    );
  }
}

Restaurant.propTypes = {
  restaurant: React.PropTypes.object
};


