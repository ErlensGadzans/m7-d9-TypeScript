
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
// import NavBar from './components/NavBar';
import { Route, withRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <NavBar className="navbar"/> */}
      <Route path="/" exact component={Home} />

    </div>
  );
}

export default withRouter (App);
