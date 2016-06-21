
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
                     <h1> Submit Restaurant </h1>
                     <h3> Name </h3>
                     <Field name="name"
                            type="string"
                            placeholder="Restaurant's name"
                            className="new_restaurant-name"
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
                     <h3> website link </h3>
                     <Field name="link"
                            type="string"
                            className="new_restaurant-link"
                            placeholder="Please enter the restaurant website link"
                            required
                     />
                     <h3> Description </h3>
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

var Field = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },

    render: function () {
        return (
            <div>
                <input type={this.props.type} placeholder={this.props.placeholder} className={this.props.className} onChange={this.changeValue} value={this.getValue()}/>
            </div>
        );
    }
});

var SelectField = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },
    validate() {
        return !this.isRequired() || this.getValue() !== undefined;
    },

    prepareOptions: function (optionsArray) {
        return optionsArray.map((option, i) => {
            if (typeof(option) != "object") {
                option = {
                    label: option,
                    value: option
                }
            }
            return (
                <option key={i} value={option.value}>
                    {option.label}
                </option>
            );
        });
    },
    render: function () {
        options = this.prepareOptions(this.props.options);

        if (this.props.placeholder) {

            const placeholderOption = (
                <option key={-1} value="" hidden disabled>{this.props.placeholder}</option>
            );

            options = [placeholderOption].concat(options);
        }

        return (
            <div>
                <select className="new_restaurant-select" name={this.props.name} onChange={this.changeValue} value={this.getValue()} defaultValue="">
                    { options }
                </select>
            </div>
        );
    }
});

var CheckboxField = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(!this.getValue());
    },

    render: function () {
        return (
            <div>
                <input className="new_restaurant-checkbox" type="checkbox" id={this.props.name} default={this.props.default} onChange={this.changeValue} checked={this.getValue()}/>
                <label htmlFor={this.props.name} className="oui-form__checkbox_label">{this.props.label}</label>
            </div>
        );
    }
});

var TextField = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },

    render: function () {
        return (
            <div>
                <textarea type={this.props.type} placeholder={this.props.placeholder} className="new_restaurant-text" onChange={this.changeValue} value={this.getValue()}/>
            </div>
        );
    }
});
