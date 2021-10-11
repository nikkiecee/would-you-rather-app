import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon,
  Dropdown,
} from "semantic-ui-react";
import NavBar from "./NavBar";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: '',
  };
  handleSelect = (e) => { 
    this.setState(() => ({
       selectedUser: e.target.value
    }));
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { dispatch } = this.props

    dispatch(setAuthedUser(this.state.selectedUser))
    return <Redirect to='/'/>
    
    
}

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
    const { selectedUser } = this.state;

    return (
      <div>
        <NavBar />
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
            <Form size="large" onSubmit={this.handleLogin}>
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
                  value={selectedUser}
                />
                <Button
                  color="purple"
                  fluid
                  size="large"
                  onSubmit={this.handleLogin}
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
function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser,
  };
}
export default connect(mapStateToProps)(Login);
