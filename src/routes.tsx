import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "views/home/home_page";
import TemplatePage from "views/template/template_page";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:title" component={TemplatePage} />
    </Switch>
  </Router>
);

export default Routes;
