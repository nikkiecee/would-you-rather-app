import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Divider,
} from "semantic-ui-react";



class CreateQuestion extends Component {
    state ={
        optionOne: '',
        optionTwo: ''
    }
    handleChange = (e) =>{
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleAddQuestion = (e) =>{
        e.preventDefault()
        const {history} = this.props;
    console.log(this.props);
        // const { optionOne, optionTwo } = this.state

       console.log('New Poll: ', );
      //  this.props.dispatch(addQuestionToUser(this.state.value));
       this.setState(() =>({
        text: ''
    }))
       return history.push('/')
       

    }
  render() {
    return (
      <div>
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
                  <input placeholder="Enter Option One Text Here" id='optionOne'value={this.state.optionOne}
                  onChange={this.handleChange}/>
                </Form.Field>
                <Divider horizontal>
                  <strong>Or</strong>
                </Divider>
                <Form.Field>
                  <input placeholder="Enter Option Two Text Here" id='optionTwo' value={this.state.optionTwo} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                  <Button color="purple" fluid size="large" onClick={this.handleAddQuestion}>
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
