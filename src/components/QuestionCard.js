import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Poll from "./Poll";
import PollResult from "./PollResult";
import NotFound from "./NotFound";

class QuestionCard extends Component {
  render() {
    const { hasVoted, id, authedUser, question } = this.props;

    return (
      <div>
        {!question ? (
          <NotFound />
        ) : (
          <Fragment>
            {!hasVoted ? (
              <Fragment>
                <Poll id={id} authedUser={authedUser} />
              </Fragment>
            ) : (
              <Fragment>
                <PollResult id={id} authedUser={authedUser} />
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    authedUser,
    id,
    question: question?{...question,hasVoted: (users[authedUser].answers[question.id])}: null
    
  };
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
