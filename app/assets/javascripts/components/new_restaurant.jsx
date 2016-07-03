
class NewRestaurant extends React.Component {

    constructor() {
        super()
        this.state = {
            formError: null,
            edit: false
        }
    }

    componentWillMount() {
        Formsy.addValidationRule('isValidAddress', (values, value) => {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': value}, function(results, status) {
                debugger;
                return (status === google.maps.GeocoderStatus.OK)
            });
        });
        this.state = {
            formError: null,
            edit: this.props.hasOwnProperty("params") && this.props.params.hasOwnProperty("id")
        }
    }


    onValidSubmit(model) {
        console.log("valid")

        new google.maps.Geocoder().geocode({'address': model.address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                model.latitude = results[0].geometry.location.lat();
                model.longitude = results[0].geometry.location.lng();
                if (this.state.edit) {
                    Api.updateRestaurant(this.props.params.id, model);
                } else {
                    Api.createRestaurant(model);
                }
                this.context.router.transitionTo("start");
            }else {
                window.alert("Invalid address, google does not know" + model.address + " " + status);
            }
        }.bind(this));
    }   

    onInvalidSubmit(message) {
        console.log("invalid")
        this.setState ({
           formError: message
       })
    }

    onChange() {

    }

    render() {

        let restaurant =  this.state.edit ? this.props.restaurants.find( r => r.id == this.props.params.id): {};
        const buttonText = this.state.edit ? "Update" : "Save";
        const title = this.state.edit ? "Update Restaurant" : "Submit Restaurant";

        return (
             <div className="container">
                 <img src="/assets/food2.jpg" id="image-food1"/>
                 <Formsy.Form onValidSubmit={this.onValidSubmit.bind(this)}
                              onInvalidSubmit={this.onInvalidSubmit.bind(this)}
                              onChange={this.onChange}
                              className="form-horizontal myForm"
                              ref="form">
                     <div className="form-group">
                         <h2 className="col-sm-6 control-label">{title}</h2>
                      </div>
                     <Field name="name"
                            label="Name"
                            type="string"
                            placeholder="Restaurant's name"
                            className="form-control"
                            value={restaurant.name}
                            required/>

                     <SelectField
                         name="cuisine_types_id"
                         label = "Cuisine type"
                         reqiured
                         placeholder="Select Cuisine Type"
                         className="form-control"
                         value={restaurant.cuisine_types_id}
                         options = {this.props.cuisine_types}>
                     </SelectField>

                     <SelectField
                         name="speed"
                         label="Speed"
                         reqiured
                         placeholder="Select speed"
                         value={restaurant.speed}
                         className="form-control"
                         options = {["Fast", "Slow"]}>
                     </SelectField>

                     <CheckboxField  name="is_ten_bis"
                                     label="Ten Bis"
                                     value={restaurant.is_ten_bis}
                                     className="form-control"/>

                     <CheckboxField  name="is_delivery"
                                     label="Delivery"
                                     value={restaurant.is_delivery}
                                     className="form-control"/>

                     <Field name="link"
                            type="string"
                            label="Wbsite link"
                            value={restaurant.link}
                            placeholder="Enter link here..."
                            className="form-control"
                            required/>

                     <Field name="rank"
                            type="number"
                            label="Rate"
                            value={restaurant.rank}
                            placeholder="Please rate from 1 to 5"
                            className="form-control"
                            required/>
                    
                     <TextField name="description"
                                label="Description"
                                placeholder="Enter description"
                                value={restaurant.description}
                                className="form-control"v/>

                     <Field name="address"
                                placeholder="Street address in TA"
                                label="Address"
                                type="text"
                                value={restaurant.address}
                                className="form-control"
                                required/>

                     <div className="form-group">
                         <div className="col-sm-2 .col-sm-offset-4">
                             <input type="submit" value={buttonText} className="btn btn-default "/>
                         </div>
                         <div className="col-sm-2 .col-sm-offset-4">
                             <Link to="/start" className="btn btn-default"> Cancel</Link>
                         </div>
                     </div>
                  </Formsy.Form>
             </div>
        );
    }
}
NewRestaurant.contextTypes = {
    router: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        cuisine_types: state.cuisine_types
    };
};

NewRestaurant = ReactRedux.connect(mapStateToProps)(NewRestaurant);


