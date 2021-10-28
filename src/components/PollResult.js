import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Label,
  Progress,
  Grid,
  Header,
  Segment,
  Image,
} from "semantic-ui-react";

class PollResult extends Component {
  render() {
    const {
      question,
      questionAuthor,
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      optionTwoPercentage,
      optionOnePercentage,
      optionOneVoted,
    } = this.props;
    const { name, avatarURL } = questionAuthor;
    const { optionOne, optionTwo } = question;
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "80vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h5" block attached="top" textAlign="left">
              <Header.Content>Added by {name}</Header.Content>
            </Header>

            <Segment attached>
              <Grid columns={2} divided verticalAlign="middle">
                <Grid.Row stretched>
                  <Grid.Column width={6}>
                    <Image src={avatarURL} size="small" circular />
                  </Grid.Column>
                  <Grid.Column width={10} textAlign="left">
                    <Header as="h3">Results:</Header>
                    <>
                      {optionOneVoted === true ? (
                        <>
                          <Segment >
                            <Label as="a" color="yellow" ribbon="right">
                              Your Vote
                            </Label>
                            <p>
                              <strong>{optionOne.text}</strong>
                            </p>
                            <Progress
                              percent={optionOnePercentage}
                              color="purple"
                              progress
                            >
                              {optionOneVotes} out of {totalVotes} votes
                            </Progress>
                          </Segment>
                          <Segment>
                            <p>
                              <strong>{optionTwo.text}</strong>
                            </p>
                            <Progress percent={optionTwoPercentage} progress>
                              {optionTwoVotes} out of {totalVotes} votes
                            </Progress>
                          </Segment>
                        </>
                      ) : (
                        <>
                          <Segment>
                            <p>
                              <strong>{optionOne.text}</strong>
                            </p>
                            <Progress percent={optionOnePercentage} progress>
                              {optionOneVotes} out of {totalVotes} votes
                            </Progress>
                          </Segment>
                          <Segment>
                            <Label as="a" color="yellow" ribbon="right">
                              Your Vote
                            </Label>

                            <p>
                              <strong>{optionTwo.text}</strong>
                            </p>
                            <Progress
                              percent={optionTwoPercentage}
                              progress
                              color="purple"
                            >
                              {optionTwoVotes} out of {totalVotes} votes
                            </Progress>
                          </Segment>
                        </>
                      )}
                    </>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const questionAuthor = users[question.author];
  const { optionOne, optionTwo } = question;
  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercentage = ((optionOneVotes / totalVotes) * 100).toFixed(1);
  const optionTwoPercentage = ((optionTwoVotes / totalVotes) * 100).toFixed(1);
  const optionOneVoted = optionOne.votes.includes(authedUser);
  const optionTwoVoted = optionTwo.votes[authedUser];
  return {
    question,
    questionAuthor,
    authedUser,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    optionTwoPercentage,
    optionOnePercentage,
    optionOneVoted,
    optionTwoVoted,
  };
}

export default withRouter(connect(mapStateToProps)(PollResult));
