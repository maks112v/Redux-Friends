import React, {
  Component
} from 'react';
import FriendsPage from './Components/FriendsPage';
import PrivateRoute from './Components/PrivateRoute';
import {
  Container
} from 'reactstrap';
import 'axios-progress-bar/dist/nprogress.css'
import {
  loadProgressBar
} from 'axios-progress-bar'
import {
  connect
} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './Components/Login';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    loadProgressBar();
    return (
    <Router>
      <Container>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={FriendsPage} />
      </Container>
    </Router>
    );
  }
}

const stateToProps = state => ({

})

export default connect(stateToProps)(App);