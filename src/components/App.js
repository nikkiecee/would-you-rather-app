import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoadingBar } from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import QuestionCard from "./QuestionCard";
import CreateQuestion from "./CreateQuestion";
import PollResult from "./PollResult";
import LeaderBoard from "./LeaderBoard";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {

    return (
      <Router>
        <div className="app">
          <LoadingBar />
          {this.props.loading ? null : this.props.authedUser === null ? (
            <>
            <Redirect to="/login"/>
            <Route exact path="/login" component={Login} />
            </>
          ) : (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/question" component={QuestionCard} />
              <Route exact path="/add" component={CreateQuestion} />
              <Route exact path="/result" component={PollResult} />
              <Route exact path="/leaderboard" component={LeaderBoard} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
