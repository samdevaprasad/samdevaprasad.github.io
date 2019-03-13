import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const mapStateToProps = state => {
  return {
  }};

const mapDispatchToProps = dispatch => ({
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {
  
  }

  render() {
    return (
      <div>
          <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/login" component={Login} /> */}
          </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
