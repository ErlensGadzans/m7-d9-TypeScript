import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Route, withRouter } from "react-router-dom";




function App() {
  return (
    <div className="App">
   
      <Route path="/" exact component={Home} />

    </div>
  );
}

export default withRouter (App);
