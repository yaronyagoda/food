
class NewRestaurant extends React.Component {

    constructor() {
        super()
        this.state = {
            formError: null
        }
    }


    onValidSubmit(model) {
        console.log("valid")
        Api.createRestaurant(model.name, model.food_type,
            model.speed, model.ten_bis ? model.ten_bis : false, model.delivery ? model.delivery : false,
            model.rank, model.link, model.description)
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

        return (
             <div className="container">
                 <img src="assets/food2.jpg" id="image-food1"/>
                 <Formsy.Form onValidSubmit={this.onValidSubmit.bind(this)}
                              onInvalidSubmit={this.onInvalidSubmit.bind(this)}
                              onChange={this.onChange}
                              className="form-horizontal myForm"
                              ref="form">
                     <div className="form-group">
                         <h2 className="col-sm-6 control-label">Submit Restaurant</h2>
                      </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Name</label>
                         <div className="col-sm-6">
                             <Field name="name"
                                    type="string"
                                    placeholder="Restaurant's name"
                                    className="form-control"
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
                                 className="form-control"
                                 options = {["Fast", "Slow"]}>
                             </SelectField>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Accepts Ten Bis</label>
                         <div className="col-sm-1">
                             <CheckboxField  name="ten_bis" label="Ten Bis" default="true" className="form-control"/>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Delivery</label>
                         <div className="col-sm-1">
                             <CheckboxField  name="delivery" label="Ten Bis" default="true" className="form-control"/>
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Website link</label>
                         <div className="col-sm-6">
                             <Field name="link"
                                    type="string"
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
                                    placeholder="Please rate from 1 to 5"
                                    className="form-control"
                                    required
                             />
                         </div>
                     </div>

                     <div className="form-group">
                         <label className="col-sm-3 control-label">Description</label>
                         <div className="col-sm-6">
                             <TextField name="description" placeholder="Enter description" className="form-control"v/>
                         </div>
                     </div>
                     <div className="form-group">
                         <div className="col-sm-2 .col-sm-offset-4">
                             <input type="submit" value="Create" className="btn btn-default "/>
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
