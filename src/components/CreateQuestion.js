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
    optionOneText: "",
    optionTwoText: "",
  };

  handleOptions = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmitQuestion = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText));
    return history.push("/");
  };
  render() {
    const disabled =
      this.state.optionOneText === "" || this.state.optionTwoText === "";
    const { optionOneText, optionTwoText } = this.state;
    return (
      <div>
        <Grid
          centered
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" block attached="top" textAlign="center">
              <Header.Content>Create New Question</Header.Content>
            </Header>

            <Segment attached>
              <Form size="large" onSubmit={this.handleSubmitQuestion}>
                <Header as="h5">Complete the question:</Header>
                <Header as="h3">Would you rather...</Header>
                <Form.Input
                  placeholder="Enter Option One Text Here"
                  name="optionOneText"
                  value={optionOneText}
                  onChange={this.handleOptions}
                  required
                />

                <Divider horizontal>
                  <strong>Or</strong>
                </Divider>
                <Form.Input
                  type="text"
                  placeholder="Enter Option Two Text Here"
                  name="optionTwoText"
                  value={optionTwoText}
                  onChange={this.handleOptions}
                  required
                />

                <Button
                  color="purple"
                  fluid
                  size="large"
                  onClick={this.handleSubmitQuestion}
                  disabled={disabled}
                >
                  Submit
                </Button>
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
