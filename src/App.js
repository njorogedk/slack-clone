import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>      
        <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route path="/login">
            <Login />
          </Route>         
        </Switch>      
    </Router>
    </div>
  );
}

export default App;
