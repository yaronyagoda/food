class RestMap extends React.Component {



    componentDidMount() {
        this.gmaps = new GMaps({
            el: '#map',
            lat: 32.075773,
            lng: 34.783386
        });


    }


    render () {
        var geocoder = new google.maps.Geocoder();
        var gmaps = this.gmaps;
        this.props.restaurants.map(rest => {
            geocoder.geocode({'address': rest.address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    debugger;
                    gmaps.addMarker({
                        title: rest.name,
                        position: results[0].geometry.location,
                        click: function(e) {
                            alert(rest.name);
                        }
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + rest.address);
                }
            });
        });


        return (
            <div id="map" className="map">
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    };
};

RestMap = ReactRedux.connect(mapStateToProps)(RestMap);