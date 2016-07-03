const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const Redirect = ReactRouter.Redirect;
const RouteHandler = ReactRouter.RouteHandler;
const DefaultRoute = ReactRouter.DefaultRoute;

const MyRoutes = (
    <Route name="m" path="/" handler = {Main}>
      <Route  name="start" handler = {App}/>
      <Route  name="new" handler = {NewRestaurant}/>
      <Route  name="edit/:id" handler = {NewRestaurant}/>
    </Route>
);
