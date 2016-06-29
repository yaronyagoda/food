
const Provider = ReactRedux.Provider;

class Main extends React.Component {
    render() {
        return  (
        <Provider store ={store} >
            <RouteHandler/>
        </Provider>
        );
    }
}