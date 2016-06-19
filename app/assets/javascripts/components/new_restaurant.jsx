
class NewRestaurant extends React.Component {

    handleClick() {
        Api.createRestaurant(this.refs.name.value, this.refs.food_type.value,
            this.refs.speed.value, this.refs.ten_bis.checked, this.refs.delivery.checked,
            this.refs.rank.value, this.refs.link.value, this.refs.description.value)
        debugger;
        this.context.router.transitionTo("start")


    }

    render() {
        return (
            <div>
                <h1> Add a new Restaurant </h1>
                <div className="new_restaurant-field">
                    <label for="nameField" className="labelRest">
                        <span>
                            Name
                            <input ref='name' name="nameField" className="input-field"/>
                        </span>
                    </label>

                </div>
                <div className="new_restaurant-field">
                    <label>Type </label>
                    <select ref='food_type' className="input-field">
                        <option value="asian"> Asian </option>
                        <option value="dinner"> Dinner </option>
                        <option value="salad"> Salad </option>
                    </select>
                </div>
                <div className="new_restaurant-field">
                    <label className="new_restaurant-label">Speed </label>
                    <select ref='speed' className="input-field">
                        <option value="fast"> Fast </option>
                        <option value="slow"> Slow </option>
                    </select>
                </div>
                <div className="new_restaurant-field">
                    <label>Ten Bis </label>
                    <input ref='ten_bis' type="checkbox" className="input-field"/>
                </div>
                <div className="new_restaurant-field">
                    <label>Delivery </label>
                    <input ref='delivery' type="checkbox" className="input-field"/>
                </div>
                <div className="new_restaurant-field">
                    <label>Rank </label>
                    <input ref='rank' type="number" name="quantity" min="1" max="5" className="input-field"/>
                </div>
                <div className="new_restaurant-field">
                    <label>Link </label>
                    <input ref='link' className="input-field"/>
                </div>
                <div className="new_restaurant-field">
                    <label>Description </label>
                    <textarea ref='description' className="input-field"/>
                </div>
                <button onClick={this.handleClick.bind(this)}> Submit</button>
            </div>
        );
    }
}
NewRestaurant.contextTypes = {
    router: React.PropTypes.func.isRequired
};
