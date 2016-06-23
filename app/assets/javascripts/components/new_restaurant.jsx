
class NewRestaurant extends React.Component {

    constructor() {
        super()
        this.state = {
            formError: null
        }
    }


    onValidSubmit(model) {
        Api.createRestaurant(model.name, model.food_type,
            model.speed, model.ten_bis, model.delivery,
            model.rank, model.link, model.description)
        this.context.router.transitionTo("start")
    }

    onInvalidSubmit(message) {
        this.state ={
           formError: message
       }
    }

    onChange() {
        this.state ={
            formError: null
        }
    }

    render() {
        const error = this.state.formError &&
            (<p id="error-message">All fields are mandatory!!! WTF</p>);

        return (
             <div className="container">
                 <img src="assets/food2.jpg" id="image-food1"/>
                 <Formsy.Form onValidSubmit={this.onValidSubmit.bind(this)}
                              onInvalidSubmit={this.onInvalidSubmit.bind(this)}
                              onChange={this.onChange}
                              id="myForm"
                              ref="form">
                     <h2> Submit Restaurant </h2>
                     <h3> Name </h3>
                     <Field name="name"
                            type="string"
                            placeholder="Restaurant's name"
                            id="new_restaurant-name"
                            required
                     />
                     <h3> Cuisine type </h3>
                     <SelectField
                            name="food_type"
                            reqiured
                            placeholder="Type"
                            options = {["Asian", "Dinner", "Salad"]}>
                     </SelectField>
                     <h3> Speed </h3>
                     <SelectField
                         name="speed"
                         reqiured
                         placeholder="Speed"
                         options = {["Fast", "Slow"]}>
                     </SelectField>
                     <h3> Accepts Ten Bis </h3>
                     <CheckboxField  name="ten_bis" label="Ten Bis" default="true"/>
                     <h3> Delivery </h3>
                     <CheckboxField  name="delivery" label="Delivery" default="false"/>
                     <h3> Website link </h3>
                     <Field name="link"
                            type="string"
                            id="new_restaurant-link"
                            placeholder="Please enter the restaurant website link"
                     />
                     <h3>User Rating </h3>
                     <Field name="rank"
                            type="number"
                            id="new_restaurant-rate"
                            placeHolder="Please rate from 1 to 5"
                            required
                            />
                     <h3 className="newRest-text"> Description </h3>
                     <TextField name="description" placeholder="Enter description"/>
                     <input type="submit" value="Create" id="submit-button"/>
                     {error}
                  </Formsy.Form>
             </div>
        );
    }
}
NewRestaurant.contextTypes = {
    router: React.PropTypes.func.isRequired
};
