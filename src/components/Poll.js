import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Radio,
  Image,
} from "semantic-ui-react";

//handleSelect

//handleSubmitAnswer


// handleVote = (e) => {
//   e.preventDefault();

//   this.props.dispatch(
//     handleVote({
//       qid: this.props.question.id,
//       answer: this.state.selectedOption,
//     })
//   );

//   this.setState({
//     selectedOption: "",
//   });

//   this.props.history.push(`/questions/${this.props.question.id}/result`);
// };

class Poll extends Component {
  render() {
    const { question, user } = this.props

    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h5" block attached="top" textAlign="left">
              <Header.Content>{user.name} asks:</Header.Content>
            </Header>

            <Segment attached>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image
                      src={user.avatarURL}
                      size="small"
                      circular
                    />
                  </Grid.Column>
                  <Grid.Column width={11} textAlign="left">
                    <Header as="h4">Would you Rather...</Header>
                    <Form size="large">
                      <Form.Group grouped>
                        <Form.Field>
                          <Radio
                            label={question.optionOne.text}
                            name="options"
                            value="optionOne"
                            checked={this.state.value === "optionOne"}
                            onChange={this.handleVote}
                          />
                        </Form.Field>
                        <Form.Field>
                          <Radio
                            label={question.optionTwo.text}
                            name="options"
                            value="optionTwo"
                            checked={this.state.value === "optionTwo"}
                            onChange={this.handleVote}
                          />
                        </Form.Field>
                      </Form.Group>

                      <Form.Field>
                        <Button
                          color="purple"
                          fluid
                          size="large"
                          onclick={this.handleSubmitAnswer}
                          disabled={
                            this.state.selectedOption !== "optionOne" &&
                            this.state.selectedOption !== "optionTwo"
                          }
                        >
                          Submit
                        </Button>
                      </Form.Field>
                    </Form>
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
function mapStateToProps({ users, questions, authedUser }, { questionId }) {
  const question = questions[questionId];
  const user = users[question.author];
  return {
    question,
    user,
    authedUser,
    id: questionId,
  };
}
export default connect(mapStateToProps)(Poll);
