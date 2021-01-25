import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "views/home/home_page";
import TemplatePage from "views/template/template_page";

const Routes = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cv/:title" component={TemplatePage} />
    </Switch>
  </HashRouter>
);

export default Routes;
