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
            render={(props)=> <QuestionCard {...props}/>}
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
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    isAuthenticated: authedUser !== null,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);
