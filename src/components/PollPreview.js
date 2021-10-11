import React from "react";
import {
  Button,
  Grid,
  Header,
  Segment,
  Image,
} from "semantic-ui-react";
import NavBar from "./NavBar";

const PollPreview = () => (
  <div>
    <NavBar />
    <Grid
      textAlign="center"
      style={{ height: "80vh", marginTop: "20px" }}
      verticalAlign="top"
    >
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h5" block attached="top" textAlign="left">
          <Header.Content>Tyler Mcginnis asks:</Header.Content>
        </Header>

        <Segment attached>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                  size="small"
                  circular
                />
              </Grid.Column>
              <Grid.Column width={11} textAlign="left">
                <Header as="h4" >
                  Would you Rather...
                </Header>
                <p>...be telekinetic...</p>                
                    <Button  fluid  basic color='purple' size='medium'>
                    View Poll
                    </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);
export default PollPreview;
