import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import PollPreview from "./PollPreview";

class Dashboard extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <Tab
          menu={{
            color: "purple",
            attached: true,
            widths: 2,
          }}
          panes={panes({ answeredQuestions, unansweredQuestions })}
          style={{ marginTop: 40, marginLeft: "25%", marginRight: "25%" }}
        />
      </div>
    );
  }
}
const panes = (props) => {
  const { unansweredQuestions, answeredQuestions } = props;
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {unansweredQuestions.map((question) => (
            <PollPreview
              key={question.id}
              questionId={question.id}
              question={question}
              answered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {answeredQuestions.map((question) => (
            <PollPreview
              key={question.id}
              question={question}
              questionId={question.id}
              answered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

function mapStateToProps({ questions, users, authedUser }) {
  const currentUser = users[authedUser];
  const answeredQid = Object.keys(currentUser.answers);
  const answeredQuestions = Object.values(questions)
    .filter((question) => answeredQid.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQuestions = Object.values(questions)
    .filter((question) => !answeredQid.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    unansweredQuestions,
    answeredQuestions,
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
