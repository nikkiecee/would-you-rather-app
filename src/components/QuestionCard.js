import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Poll from "./Poll";
import PollResult from "./PollResult";
import NotFound from "./NotFound";

class QuestionCard extends Component {
  render() {
    const { hasVoted, id,authedUser, invalidQuestion} = this.props;

    if (invalidQuestion) {
      return <NotFound />;
    }

    return (
      <Fragment>
       {!hasVoted  ? (
        <Fragment>
          <Poll id={id} authedUser={authedUser}/>
        </Fragment>
      ) : (
        <Fragment>
          <PollResult id={id} authedUser={authedUser}/>
        </Fragment>
      )}
      </Fragment>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const { author} =question;
  const questionAuthor = users[question.author];
  const hasVoted = users[authedUser].answers[question.id];
  return {
    questionAuthor,
    question,
    hasVoted,
    id,
    authedUser,
    invalidQuestion: question === undefined,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
