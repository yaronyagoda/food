
class Restaurant extends React.Component {
  render () {
      const tenBisClass = this.props.restaurant.ten_bis ? "" : "img-hidden";
      const deliveryClass = this.props.restaurant.delivery ? "" : "img-hidden";
      return (
         <div className="restaurant">
              <div>
                <div>
                    <a href={this.props.restaurant.link}> {this.props.restaurant.name}</a>
                    <img src="assets/tenbis.jpeg" className={tenBisClass}/>
                    <img src="assets/deliver1.jpeg" className={deliveryClass}/>
                </div>
                <div>
                    <h5>Rank:</h5>
                    <h5>{this.props.restaurant.rank}</h5>
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


/*
<tr>
    <td><a href={this.props.restaurant.link}> {this.props.restaurant.name}</a></td>
    <td>{this.props.restaurant.food_type}</td>
    <td>{this.props.restaurant.speed}</td>
    <td><img src="assets/tenbis.jpeg" className={tenBisClass}/></td>
    <td><img src="assets/deliver1.jpeg" className={deliveryClass}/></td>
    <td>{this.props.restaurant.rank}</td>
    <td>{this.props.restaurant.description}</td>
</tr>
*/


