import React, { Component } from 'react';
import { connect } from "react-redux";
// import PollResult from './PollResult';
// import Poll from './Poll';

class QuestionCard extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}
function mapStateToProps(state, {questionId}) {
console.log(state)
  return {};
}

export default connect(mapStateToProps)(QuestionCard);
