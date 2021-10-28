import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Grid, Header, Segment, Image } from "semantic-ui-react";

class PollPreview extends Component {

  render() {
const { question, user } = this.props

    return (
      
      <div>
        <Grid
          textAlign="center"
          style={{ height: "35vh", marginTop: "10px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500}}>
            <Header as="h5" block attached="top" textAlign="left">
              <Header.Content>{user.name} asks:</Header.Content>
            </Header>

            <Segment attached>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={user.avatarURL} size="small" circular />
                  </Grid.Column>
                  <Grid.Column width={11} textAlign="left">
                    <Header as="h4" textAlign="left">Would you Rather...</Header>
                    <p>..{question.optionOne.text.substr(0,20)}...</p>
                    <Link to={`/questions/${question.id}`}>
                      <Button fluid  color="purple" size="medium">
                        View Poll
                      </Button>
                    </Link>
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

function mapStateToProps({users, questions, authedUser}, {questionId}) {
  const question = questions[questionId];
  const user = users[question.author]
  return {
    question, 
    user,
    authedUser,
    id: questionId
  };
}

export default withRouter(connect(mapStateToProps)(PollPreview));
