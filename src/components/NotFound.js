import React, { Component } from "react";
import { Header,Grid } from "semantic-ui-react";
import NavBar from "./NavBar";

class NotFound extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid centered >
        <Header
          as="h1"
          textAlign="center"
          verticalAlign="middle"
          fontSize="80px"
        >
          404- Page NotFound
        </Header>
        </Grid>
      </div>
    );
  }
}
export default NotFound;
