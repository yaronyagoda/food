var Field = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },

    componentDidMount : function() {
        this.setValue(this.props.value)
    },



    render: function () {
        const errorMessage = this.getErrorMessage();

        const className = classNames(this.props.className, {
            'form-error': this.isFormSubmitted() && !this.isValid()
        });

        return (
            <div>
                <input type={this.props.type}
                       className={className}
                       placeholder={this.props.placeholder}
                       id={this.props.id}
                       onChange={this.changeValue}
                       aria-describedby="inputError2Status"
                       value={this.getValue()} min="1" max="5"/>
                <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                <span id="inputError2Status" class="sr-only">{errorMessage}</span>
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

    componentDidMount : function() {
        this.setValue(this.props.value)
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
                <select
                        name={this.props.name}
                        onChange={this.changeValue}
                        value={this.getValue()}
                        className={this.props.className}
                        defaultValue=""
                        required>
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
    componentDidMount : function() {
        this.setValue(this.props.value)
    },

    render: function () {
        return (
            <div id="field-checkbox">
                <input type="checkbox" id={this.props.name} default={this.props.default} onChange={this.changeValue} className={this.props.className} checked={this.getValue()}/>
               
            </div>
        );
    }
});

var TextField = React.createClass({
    mixins: [Formsy.Mixin],

    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },

    componentDidMount : function() {
        this.setValue(this.props.value)
    },

    render: function () {
        return (
            <div>
                <textarea type={this.props.type} placeholder={this.props.placeholder} id="field-text" onChange={this.changeValue} value={this.getValue()} className={this.props.className}/>
            </div>
        );
    }
});
