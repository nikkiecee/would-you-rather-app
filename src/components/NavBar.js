import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  state = { activeItem: "" };

  onLogout = (e) => {
    e.preventDefault();
    this.props.setAuthedUser(null);
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
                as={NavLink}
                to="/"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="new question"
                active={activeItem === "new question"}
                as={NavLink}
                to="/add"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="leaderboard"
                active={activeItem === "leaderboard"}
                as={NavLink}
                to="/leaderboard"
                onClick={this.handleItemClick}
              />
              <Menu.Menu position="right">
                <Menu.Item>
                  <span>
                    <img
                      src={users[authedUser].name}
                      avatar
                      spaced="right"
                      verticalAlign="bottom"
                      alt=""
                    />
                    {users[authedUser].name}{" "}
                  </span>
                </Menu.Item>
                <Menu.Item
                  name="logout"
                  active={activeItem === "logout"}
                  onClick={this.onLogout}
                />
              </Menu.Menu>
            </>
          ) : (
            <>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                as={NavLink}
                to="/"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="new question"
                active={activeItem === "new question"}
                as={NavLink}
                to="/add"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="leaderboard"
                active={activeItem === "leaderboard"}
                as={NavLink}
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
function mapStateToProps({ authedUser, users }, props) {
  return {
    authedUser,
    users,
    user: users[authedUser],
  };
}
export default connect(mapStateToProps, { setAuthedUser })(NavBar);
