import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as 
  Switch,
  Route,
} from "react-router-dom";

import { LoadingBar } from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import NavBar from "./NavBar"
import Login from "./Login";
import QuestionCard from "./QuestionCard";
import CreateQuestion from "./CreateQuestion";
import PollResult from "./PollResult";
import LeaderBoard from "./LeaderBoard";
import Dashboard from "./Dashboard";
// import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
     <Switch>
       <NavBar/>
        <LoadingBar />
          {this.props.notAuthenticated === true ? (
        <Route path="/" render={() => <Login />} />
          ) : (
            <Switch>
              <Route exact path="/" render={() => <Dashboard />} />
              <Route exact path="/questions/:id" render={() => <QuestionCard />} />
              <Route exact path="/add" render={() => <CreateQuestion />} />
              <Route exact path="/result" render={() => <PollResult />} />
              <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
              {/* <Route render={() => <NotFound />} /> */}
            </Switch>
          )}ii
      </Switch>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    notAuthenticated: authedUser === null,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(App);