import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, } from "react-router-dom";
import Poll from "./Poll";
import PollResult from "./PollResult";

class QuestionCard extends Component {
  render() {
    const { hasVoted, id,authedUser} = this.props;

    // if (question === undefined) {
    //     return {
    //         <Redirect to="/notfound" />
    //     }
    // }
    
    return (
      <div>
        {!hasVoted  ? (
          <Fragment>
            <Poll id={id} authedUser={authedUser}/>
          </Fragment>
        ) : (
          <Fragment>
            <PollResult id={id} authedUser={authedUser}/>
          </Fragment>
        )}
      </div>
    );
  }
}
function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  console.log(question);
  const questionAuthor = users[question.author];
  const hasVoted = users[authedUser].answers[question.id];
  console.log(hasVoted)
  return {
    questionAuthor,
    question,
    hasVoted,
    id,
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(QuestionCard));
