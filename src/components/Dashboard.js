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
  console.log(props)
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {unansweredQuestions.map((question) => (
             <PollPreview
             key={question.id}
             userId={question.author}
             question={question}
             unanswered={true}
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
                userId={question.author}
                question={question}
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
  const answeredQuestions = Object.keys(currentUser.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  // console.log(currentUser);
  // console.log(answeredQuestions);
  const unansweredQuestions = Object.keys(questions)
    .filter((qid) => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  // console.log(unansweredQuestions);
  return {
    unansweredQuestions,
    answeredQuestions,
    users
  };
}

export default connect(mapStateToProps)(Dashboard);
