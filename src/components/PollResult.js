import React from "react";
import {
    Label,
    Progress,
    Grid,
    Header,
    Segment,
    Image,
    Button
} from "semantic-ui-react";
import NavBar from "./NavBar";

const PollResult = () => (
    <div>
        <NavBar/>
        <Grid
            textAlign="center"
            style={{ height: "80vh", marginTop: "20px" }}
            verticalAlign="top"
        >
            <Grid.Column style={{ maxWidth: 500 }}>
                <Header as="h5" block attached="top" textAlign="left">
                    <Header.Content>Added by Tyler Mcginnis</Header.Content>
                </Header>

                <Segment attached>
                    <Grid columns={2} divided verticalAlign='middle'>
                        <Grid.Row streched>
                            <Grid.Column width={6} textAlign="center">
                                <Image
                                    src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                                    size="small"
                                    circular
                                />
                            </Grid.Column>
                            <Grid.Column width={10} textAlign="left">
                                <Header as="h3">Results:</Header>
                                <Segment>
                                    <Label as="a" color="yellow" ribbon="right">
                                        Your Vote
                                    </Label>
                                    <p textAlign="left"><strong>Would you rather find $50 yourself?</strong></p>
                                    <Progress value="2" total="5" progress="percent" color="purple">
                                        3 out of 5 votes
                                    </Progress>
                                </Segment>
                                <Segment>
                                    <Label as="a" color="yellow" ribbon="right">
                                        Your Vote
                                    </Label>
                                    <p textAlign="left"><strong>Would you rather find $50 yourself?</strong></p>
                                    <Progress value="2" total="5" progress="percent">
                                        2 out of 5 votes
                                    </Progress>
                                </Segment>
                                <Button color='purple' floated='right'>Back to Home</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </div>
);
export default PollResult;
