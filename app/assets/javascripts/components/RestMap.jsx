class RestMap extends React.Component {



    componentDidMount() {
        this.gmaps = new GMaps({
            el: '#map',
            lat: 32.075773,
            lng: 34.783386
        });


    }


    render () {
        var gmaps = this.gmaps;
        if (gmaps) {
            gmaps.removeMarkers();
            this.props.filtered.map(rest => {
            gmaps.addMarker({
                title: rest.name,
                lat: rest.lat,
                lng: rest.lang,
                click: function(e) {
                    alert(rest.name);
                }
            })
            } )
        }
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