import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "views/home/home_page";
import TemplatePage from "views/template/template_page";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/hire-me" component={HomePage} />
      <Route path="/hire-me/:title" component={TemplatePage} />
      <Redirect from="*" to="/hire-me" />
    </Switch>
  </Router>
);

export default Routes;
