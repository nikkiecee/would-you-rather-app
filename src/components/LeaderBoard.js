import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Header,
  Image,
  Segment,
  Label,
  Divider,
} from "semantic-ui-react";

class LeaderBoard extends Component {
  render() {
    const { scoreList } = this.props;
    return (
      <Fragment>
        <Grid
          centered
          style={{ height: "100vh", marginTop: "20px", textAlign: "center" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 600 }}>
            {scoreList.map((user) => (
              <Segment key={user.id}>
                <Grid columns={3} divided verticalAlign="middle">
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Image src={user.avatarURL} size="small" circular />
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="left">
                      <Header as="h3">{user.name}</Header>
                      <Grid>
                        <Grid.Column width={12}>
                          <p>
                            <strong>Answered Questions</strong>
                          </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <p>
                            <strong>{user.noOfAnsweredQuestions}</strong>
                          </p>
                        </Grid.Column>
                      </Grid>
                      <Divider />
                      <Grid>
                        <Grid.Column width={12}>
                          <p>
                            <strong>Created Questions</strong>
                          </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <p>
                            <strong>{user.noOfCreatedQuestions}</strong>
                          </p>
                        </Grid.Column>
                      </Grid>
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="center">
                      <Segment padded>
                        <Label attached="top">
                          <p>
                            <strong>Score</strong>
                          </p>
                        </Label>
                        <Label circular size="medium" color="purple">
                          {user.score}
                        </Label>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            ))}
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  const scoreList = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      noOfCreatedQuestions: user.questions.length,
      noOfAnsweredQuestions: Object.values(user.answers).length,
      score: user.questions.length + Object.values(user.answers).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  return {
    scoreList,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
