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

        const className = classNames("form-group", {
            'has-error': this.isFormSubmitted() && !this.isValid()
        });

        return (
        <div className={className}>
            <label className="col-sm-3 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <input type={this.props.type}
                       className={this.props.className}
                       placeholder={this.props.placeholder}
                       id={this.props.id}
                       onChange={this.changeValue}
                       aria-describedby="inputError2Status"
                       value={this.getValue()} min="1" max="5"/>
                <span>{errorMessage}</span>
            </div>
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
                    id: option,
                    name: option
                }
            }
            return (
                <option key={i} value={option.id}>
                    {option.name}
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
            <div className="form-group">
                <label className="col-sm-3 control-label">{this.props.label}</label>
                <div className="col-sm-4">
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
            <div className="form-group">
                <label className="col-sm-3 control-label">{this.props.label}</label>
                <div className="col-sm-1">
                    <input type="checkbox"
                           default={this.props.default}
                           onChange={this.changeValue}
                           className={this.props.className}
                           checked={this.getValue()}/>
                </div>
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
            <div className="form-group">
                <label className="col-sm-3 control-label">{this.props.label}</label>
                <div className="col-sm-6">
                    <textarea type={this.props.type}
                              placeholder={this.props.placeholder}
                              onChange={this.changeValue}
                              value={this.getValue()}
                              className={this.props.className}/>
                </div>
            </div>
        );
    }
});
