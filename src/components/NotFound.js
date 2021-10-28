import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import error from '../404.png'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Grid style={{marginTop: 30}}>
        <Image
          src={error}
          alt='error png'
          verticalAlign='middle'
          centered
        />
        
        </Grid>
      </div>
    );
  }
}
export default NotFound;
