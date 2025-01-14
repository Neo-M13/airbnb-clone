import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Search from "@mui/icons-material/Search";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
