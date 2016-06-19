
class Restaurant extends React.Component {
  render () {
      const tenBisClass = this.props.restaurant.ten_bis ? "" : "img-hidden";
      const deliveryClass = this.props.restaurant.delivery ? "" : "img-hidden";
      return (
        <tr>
           <td><a href={this.props.restaurant.link}> {this.props.restaurant.name}</a></td>
           <td>{this.props.restaurant.food_type}</td>
           <td>{this.props.restaurant.speed}</td>
           <td><img src="assets/tenbis.jpeg" className={tenBisClass}/></td>
           <td><img src="assets/deliver1.jpeg" className={deliveryClass}/></td>
           <td>{this.props.restaurant.rank}</td>
           <td>{this.props.restaurant.description}</td>
       </tr>
    );
  }
}

Restaurant.propTypes = {
  restaurant: React.PropTypes.object
};



