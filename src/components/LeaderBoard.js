import React, { Component } from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  Label,
  Divider,
} from "semantic-ui-react";
import NavBar from "./NavBar";

export class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Grid
          textAlign="center"
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }} >
            <Segment>
              <Label corner="left" icon="trophy" color="blue" />
              <Grid columns={3} divided verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      size="small"
                      circular
                    />
                  </Grid.Column>
                  <Grid.Column width={8} textAlign="left">
                    <Header as="h2">Tyler Mcginnis</Header>
                    <Grid>
                      <Grid.Column width={12}><p><strong>Answered Questions</strong></p></Grid.Column>
                      <Grid.Column width={4}><p><strong>5</strong></p></Grid.Column>
                    </Grid>
                    <Divider />
                    <Grid>
                      <Grid.Column width={12}><p><strong>Created Questions</strong></p></Grid.Column>
                      <Grid.Column width={4}><p><strong>2</strong></p></Grid.Column>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Segment padded >
                      <Label attached="top" textAlign="center">
                      <p><strong>Score</strong></p>
                      </Label>
                      <Label circular color="purple">
                        7
                      </Label>
                    </Segment>
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

export default LeaderBoard;
