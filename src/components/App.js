import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoadingBar } from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Login from "./Login";
import QuestionCard from "./QuestionCard";
import CreateQuestion from "./CreateQuestion";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Router>
        <NavBar />
        <LoadingBar />
        <Switch>
        <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={isAuthenticated}
            component={Dashboard}
          />
          <PrivateRoute
            exact
            path="/questions/:id"
            isAuthenticated={isAuthenticated}
            component={QuestionCard}
          />
          <PrivateRoute
            exact
            path="/add"
            isAuthenticated={isAuthenticated}
            component={CreateQuestion}
          />
          <PrivateRoute
            exact
            path="/leaderboard"
            isAuthenticated={isAuthenticated}
            component={LeaderBoard}
          />
          <Route  component={NotFound} />
          
        </Switch>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    isAuthenticated: authedUser !== null,
    users,
  };
}

export default connect(mapStateToProps)(App);
