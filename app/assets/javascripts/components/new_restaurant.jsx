
class NewRestaurant extends React.Component {

    constructor() {
        super()
        this.state = {
            formError: null,
            edit: false
        }
    }

    componentWillMount() {
        this.state = {
            formError: null,
            edit: this.props.hasOwnProperty("params") && this.props.params.hasOwnProperty("id")
        }
    }


    onValidSubmit(model) {
        console.log("valid")

       if (this.state.edit) {
            Api.updateRestaurant(this.props.params.id, model.name, model.food_type,
                model.speed, model.ten_bis ? model.ten_bis : false, model.delivery ? model.delivery : false,
                model.rank, model.link, model.description, model.address)
        } else {
            Api.createRestaurant(model.name, model.food_type,
                model.speed, model.ten_bis ? model.ten_bis : false, model.delivery ? model.delivery : false,
                model.rank, model.link, model.description, model.address)
        }
        this.context.router.transitionTo("start")
    }

    onInvalidSubmit(message) {
        console.log("invalid")
        console.log(message)
        this.setState ({
           formError: message
       })
    }

    onChange() {

    }

    render() {
        const error = this.state.formError &&
            (<p className="error-message">All fields are mandatory!!! WTF</p>);

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

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Name</label>
                         <div className="col-sm-6">
                             <Field name="name"
                                    type="string"
                                    placeholder="Restaurant's name"
                                    className="form-control"
                                    value={restaurant.name}
                                    required
                             />
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Cuisine type</label>
                         <div className="col-sm-4">
                             <SelectField
                                 name="food_type"
                                 reqiured
                                 placeholder="Select Cuisine Type"
                                 className="form-control"
                                 value={restaurant.food_type}
                                 options = {["Asian", "Dinner", "Salad"]}>
                             </SelectField>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Speed</label>
                         <div className="col-sm-3">
                             <SelectField
                                 name="speed"
                                 reqiured
                                 placeholder="Select speed"
                                 value={restaurant.speed}
                                 className="form-control"
                                 options = {["Fast", "Slow"]}>
                             </SelectField>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Accepts Ten Bis</label>
                         <div className="col-sm-1">
                             <CheckboxField  name="ten_bis"
                                             label="Ten Bis"
                                             value={restaurant.ten_bis}
                                             className="form-control"/>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Delivery</label>
                         <div className="col-sm-1">
                             <CheckboxField  name="delivery"
                                             label="Ten Bis"
                                             value={restaurant.delivery}
                                             className="form-control"/>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Website link</label>
                         <div className="col-sm-6">
                             <Field name="link"
                                    type="string"
                                    value={restaurant.link}
                                    placeholder="Enter link here..."
                                    className="form-control"
                             />
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Rating</label>
                         <div className="col-sm-5">
                             <Field name="rank"
                                    type="number"
                                    value={restaurant.rank}
                                    placeholder="Please rate from 1 to 5"
                                    className="form-control"
                                    required
                             />
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Description</label>
                         <div className="col-sm-6">
                             <TextField name="description"
                                        placeholder="Enter description"
                                        value={restaurant.description}
                                        className="form-control"v/>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Address</label>
                         <div className="col-sm-6">
                             <TextField name="address"
                                        placeholder="Street address in TA"
                                        value={restaurant.address}
                                        className="form-control"v/>
                         </div>
                     </div>

                     <div className="form-group">
                         <div className="col-sm-2 .col-sm-offset-4">
                             <input type="submit" value={buttonText} className="btn btn-default "/>
                         </div>
                         <div className="col-sm-2 .col-sm-offset-4">
                             <Link to="/start" className="btn btn-default"> Cancel</Link>
                         </div>
                     </div>

                     {error}
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
        restaurants: state.restaurants
    };
};

NewRestaurant = ReactRedux.connect(mapStateToProps)(NewRestaurant);
