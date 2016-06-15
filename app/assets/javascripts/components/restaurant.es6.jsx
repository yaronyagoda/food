class Restaurant extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.restaurant.name}</div>
        <div>Food Type: {this.props.restaurant.food_type}</div>
        <div>Speed: {this.props.restaurant.speed}</div>
        <div>Score: {this.props.restaurant.score}</div>
      </div>
    );
  }
}

Restaurant.propTypes = {
  restaurant: React.PropTypes.object
};
