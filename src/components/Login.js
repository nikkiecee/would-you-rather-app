import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon,
  Dropdown,
} from "semantic-ui-react";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    value: "",
  };
  handleSelect = (e, { value }) => {
    this.setState({ value });
  };

  handleLogin = (e) => {
    const { history, location } = this.props;
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.value));
    return history.push(location.state.from || "/");
  };
  populateDropdown = () => {
    const { users } = this.props;
    return users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h3" block attached="top" textAlign="center">
              <Header.Content>
                Welcome to the Would You Rather App!
              </Header.Content>
              <Header.Subheader>Please sign in to continue</Header.Subheader>
            </Header>
            <Form size="large">
              <Segment attached>
                <Icon
                  name="rss square"
                  color="purple"
                  size="huge"
                  justify="center"
                />
                <Header as="h3" textAlign="center">
                  Sign In
                </Header>
                <Dropdown
                  placeholder="Select User"
                  style={{ marginBottom: "20px" }}
                  fluid
                  selection
                  options={this.populateDropdown()}
                  onChange={this.handleSelect}
                  value={this.state.value}
                />
                <Button
                  color="purple"
                  fluid
                  size="large"
                  onClick={this.handleLogin}
                >
                  Sign in
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default withRouter(connect(mapStateToProps)(Login));
