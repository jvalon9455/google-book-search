import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/save" component={Saved} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
