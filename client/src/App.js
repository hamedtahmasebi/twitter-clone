import "./styles/App.css";
import "./styles/sideNav.css";
// components
import { Home } from "./pages/Home";
import SideNav from "./components/layout/SideNav";
import SearchBar from "./components/layout/SearchBar";
import { Profile } from "./pages/Profile";
import { Notifications } from "./pages/Notifications";
import Bookmarks from "./pages/Bookmarks";
// Context
import TweetsState from "./context/tweetContext/TweetsState";
// other stuff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

function App() {
  return (
    <TweetsState>
      <div className="App">
        <Router>
          <Switch>
            <div className="main">
              <div className="p-0 px-lg-3">
                <div className="d-flex">
                  <div className="bg-white col-md-1 col-lg-3 pt-2 p-md-2 p-lg-4">
                    <SideNav />
                  </div>
                  <div className="col-lg-6 col-md-11 col-12 p-0 px-md-3 pt-0 pb-5">
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/user/notifications"
                      component={Notifications}
                    />
                    <Route exact path="/user/bookmarks" component={Bookmarks} />
                    <Route path="/user/profile/:tab" component={Profile} />
                  </div>
                  <div className="col-lg-3 pt-2 d-none d-lg-block">
                    <SearchBar />
                  </div>
                </div>
              </div>
            </div>
          </Switch>
        </Router>
      </div>
    </TweetsState>
  );
}

export default App;
