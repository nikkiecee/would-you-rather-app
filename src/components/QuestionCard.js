import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Image,
} from "semantic-ui-react";

class QuestionCard extends Component {
  state = {
    value: ''
  };
  handleSelectOption
  render() {
    
    const {questionAuthor,question} = this.props
    const {avatarURL, name } = questionAuthor
    console.log(avatarURL)
    const {optionOne,optionTwo} = question
    const {value} = this.state
    const disabled = this.state.value !== "optionOne" && this.state.value !== "optionTwo";

    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h5" block attached="top" textAlign="left">
              <Header.Content>{name} asks:</Header.Content>
            </Header>

            <Segment attached>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={avatarURL} size="small" circular />
                  </Grid.Column>
                  <Grid.Column width={11} textAlign="left">
                    <Header as="h4">Would you Rather...</Header>
                    <Form size="large">
                      <Form.Group grouped>
                        <Form.Radio
                        //   control={Radio}
                          label={optionOne.text}
                          value="optionOne"
                          checked={this.state.value === "optionOne"}
                          onChange={this.handleSelectOption}
                        />
                        <Form.Radio
                        //   control={Radio}
                          label={optionTwo.text}
                          value="optionTwo"
                          checked={value === "optionTwo"}
                          onChange={this.handleSelectOption}
                        />
                        <Form.Field>
                          <Button
                            color="purple"
                            fluid
                            size="large"
                            //   onclick={this.handleSubmitAnswer}
                            disabled={disabled}
                          >
                            Submit
                          </Button>
                        </Form.Field>
                      </Form.Group>
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
function mapStateToProps({ users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id]; 
  const questionAuthor = users[question.author];
  return {
   questionAuthor,
   question,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionCard))
