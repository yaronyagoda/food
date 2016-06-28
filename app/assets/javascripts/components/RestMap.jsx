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
        if (gmaps) gmaps.removeMarkers();
        this.props.filtered.map(rest => {
            geocoder.geocode({'address': rest.address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    gmaps.addMarker({
                        title: rest.name,
                        position: results[0].geometry.location,
                        click: function(e) {
                            alert(rest.name);
                        }
                    });
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
        filtered: state.filtered
    };
};

RestMap = ReactRedux.connect(mapStateToProps)(RestMap);