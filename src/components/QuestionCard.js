import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Radio,
  Image,
} from "semantic-ui-react";
import NavBar from "./NavBar";

const QuestionCard = () => (
  <div>
    <NavBar />
    <Grid
      textAlign="center"
      style={{ height: "100vh", marginTop: "20px" }}
      verticalAlign="top"
    >
      <Grid.Column style={{ maxWidth: 500 }}>
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
                <Form size="large">
                  <Form.Group grouped>
                    <Form.Field>
                      <Radio
                        label="Find $50 yourself"
                        name="radioGroup"
                        value="optionOne"
                        // checked={this.state.value === "optionOne"}
                        // onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label="Have your bestfriend find $500"
                        name="radioGroup"
                        value="optionTwo"
                        // checked={this.state.value === "optionTwo"}
                        // onChange={this.handleChange}
                      />
                    </Form.Field>
                  </Form.Group>

                  <Form.Field>
                    <Button color="purple" fluid size="large">
                      Submit
                    </Button>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);


export default QuestionCard;
