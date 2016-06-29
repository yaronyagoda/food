class RestaurantFilter extends React.Component {

    propTypes: {
        defaultValue: React.propTypes.string,
        onChange: React.propTypes.func,
        options: React.propTypes.array,
        label:React.propTypes.string
        }


    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.label}</h3>
                </div>
                <div>
                    <select defaultValue={this.props.defaultValue} onChange={this.props.onChange} className="filter-select">
                        {
                            this.props.options.map(option=>
                                <option value={option} key={option}> {option} </option>
                            )
                        }
                    </select>
                </div>

        </div>);
    }
}