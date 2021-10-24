import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Divider,
} from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";

class CreateQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  handleOptionOne = (e) => {
    const optionOne = this.state.optionOne;
    this.setState({
      optionOne,
    });
  };

  handleOptionTwo = (e) => {
    const optionTwo = this.state.optionTwo;
    this.setState({
      optionTwo,
    });
  };

  handleSubmitQuestion = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { optionOne, optionTwo } = this.state;
    this.props.dispatch(handleAddQuestion(optionOne, optionTwo));
    return history.push("/");
  };
  render() {
    // const disabled = this.state.optionOne ==='' || this.state.optionTwo ==='';
    return (
      <div>
        <Grid
          centered
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }} >
            <Header as="h2" block attached="top" >
              <Header.Content>Create New Question</Header.Content>
            </Header>

            <Segment attached>
              <Form size="large" onSubmit={this.handleSubmitQuestion}>
                <Header as="h5">Complete the question:</Header>
                <Header as="h3">Would you rather...</Header>
                <Form.Field>
                  <input
                    placeholder="Enter Option One Text Here"
                    id="optionOne"
                    value={this.state.optionOne}
                    onChange={this.handleOptionOne}
                    required
                  />
                </Form.Field>
                <Divider horizontal>
                  <strong>Or</strong>
                </Divider>
                <Form.Field>
                  <input
                    placeholder="Enter Option Two Text Here"
                    id="optionTwo"
                    value={this.state.optionTwo}
                    onChange={this.handleOptionTwo}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <Button
                    color="purple"
                    fluid
                    size="large"
                    onClick={this.handleSubmitQuestion}
                    // disabled={disabled}
                  >
                    Submit
                  </Button>
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default withRouter(connect(mapStateToProps)(CreateQuestion));
