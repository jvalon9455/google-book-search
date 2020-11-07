import Search from "./components/pages/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Saved from "./components/pages/Saved";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
