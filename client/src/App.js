import React , {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer/Footer";
import SR from "./SR";
const App = () => {

  return (
    <div>

    <Router>
        <SR/>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          {/*<Footer />*/}
        </Router>
    </div>

  );
};

export default App;
