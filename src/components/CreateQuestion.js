import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Divider,
} from "semantic-ui-react";
import NavBar from "./NavBar";


class CreateQuestion extends Component {
    state ={
        text: ''
    }
    handleChange = (e) =>{
        const text = e.target.value

        this.setState(() =>({
            text,
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const { text } = this.state

       console.log('New Poll: ', text);

       this.setState(() =>({
        text: ''
    }))

    }
  render() {
    return (
      <div>
        <NavBar />
        <Grid
          textAlign="center"
          style={{ height: "100vh", marginTop: "20px" }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" block attached="top" textAlign="center">
              <Header.Content>Create New Question</Header.Content>
            </Header>

            <Segment attached>
              <Form size="large" textAlign="left" onSubmit={this.handleSubmit}>
                <Header as="h5" textAlign="left">
                  Complete the question:
                </Header>
                <Header as="h3" textAlign="left">
                  Would you rather...
                </Header>
                <Form.Field>
                  <input placeholder="Enter Option One Text Here" name='optionOne' value='optionOne' 
                  onChange={this.handleChange}/>
                </Form.Field>
                <Divider horizontal>
                  <strong>Or</strong>
                </Divider>
                <Form.Field>
                  <input placeholder="Enter Option Two Text Here" name='optionTwo' value='optionTwo' onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                  <Button color="purple" fluid size="large">
                    Submit
                  </Button>
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default CreateQuestion;
