import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Grid, Header, Segment, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class PollPreview extends Component {
  render() {
  
    return (
      
      <div>
        <Grid
          textAlign="center"
          style={{ height: "35vh", marginTop: "10px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <Header as="h5" block attached="top" textAlign="left">
              <Header.Content> asks:</Header.Content>
            </Header>

            <Segment attached>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src='' size="small" circular />
                  </Grid.Column>
                  <Grid.Column width={11} textAlign="left">
                    <Header as="h4">Would you Rather...</Header>
                    <p>......</p>
                    <Link to=''>
                      <Button fluid basic color="purple" size="medium">
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

function mapStateToProps() {

  return {

  };
}

export default withRouter(connect(mapStateToProps)(PollPreview));
