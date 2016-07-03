class QuisineFilter extends React.Component {

    propTypes: {
        defaultValue: React.propTypes.string,
        onChange: React.propTypes.func,
        options: React.propTypes.array,
        label:React.propTypes.string
        }


    render() {
      const options = [{id:0, name:"All"},... this.props.cuisine_types]
        return (
            <div>
                <div>
                    <h3>{this.props.label}</h3>
                </div>
                <div>
                    <select defaultValue={this.props.defaultValue} onChange={this.props.onChange} className="filter-select">
                        {
                          options.map(option=>
                                <option value={option.id} key={option.id}> {option.name} </option>
                            )
                        }
                    </select>
                </div>

        </div>);
    }
}

const mapStateToProps = state => {
  return {
    cuisine_types: state.cuisine_types
  };
};

QuisineFilter = ReactRedux.connect(mapStateToProps)(QuisineFilter);