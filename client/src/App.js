import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Article from './views/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">   
            <Home></Home>   
          </Route>
          <Route path="/article">   
            <Article></Article>   
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
