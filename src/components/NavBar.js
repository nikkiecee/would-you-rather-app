import React, { Component } from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  state = { activeItem: "" };

   handleLogout = (e) => {
    e.preventDefault();
    const {history} = this.props;
    console.log(this.props);
    this.props.dispatch(removeAuthedUser())
    return history.push('/')
  };

  render() {
    const { activeItem } = this.state;
    const { authedUser, users } = this.props;

    return (
      <div>
        <Menu pointing secondary>
          {authedUser !== null ? (
            <>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                as={Link}
                to="/"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="new question"
                active={activeItem === "new question"}
                as={Link}
                to="/add"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="leaderboard"
                active={activeItem === "leaderboard"}
                as={Link}
                to="/leaderboard"
                onClick={this.handleItemClick}
              />
              <Menu.Menu position="right">
                <Menu.Item>
                  <span>
                    <Image
                      src={users[authedUser].avatarURL}
                      avatar
                      spaced="right"
                      verticalAlign="bottom"
                      alt=""
                    />
                    {users[authedUser].name}
                  </span>
                </Menu.Item>
                <Menu.Item
                />
                <Button
                  basic
                  compact
                  content='Logout'
                  labelPosition='right'
                  size="small"
                  icon='log out'
                  onClick={this.handleLogout}
                  style={{ marginBottom: "0.5em", marginTop: "0.5em" }}
                />
              </Menu.Menu>
            </>
          ) : (
            <>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                as={Link}
                to="/"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="new question"
                active={activeItem === "new question"}
                as={Link}
                to="/add"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="leaderboard"
                active={activeItem === "leaderboard"}
                as={Link}
                to="/leaderboard"
                onClick={this.handleItemClick}
              />
            </>
          )}
        </Menu>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
    user: users[authedUser],
  };
}
export default withRouter(connect(mapStateToProps)(NavBar));
