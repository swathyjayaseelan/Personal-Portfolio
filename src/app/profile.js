var React = require('react');
import {Grid,Row,Col} from 'react-bootstrap';
import './motivatequote';




class Profile extends React.Component {
  render(){
    var profileitem = profile.map(function(item,index){
      return (
        <Grid className="projectitem">
        <Row className="show-grid">
        <Col md={1} id="timerange">
        <p>{item.range}</p>
        </Col>
        <Col md={11} id="profile">
          <p dangerouslySetInnerHTML={{__html: item.profile}} ></p>
        </Col>
        <hr/>
        </Row>
        </Grid>
      );
    });
    return (
      <div className="othercontent">
      <h1 className="titlenames">Profile <span style={{fontSize: '15px'}} id="moveright">View detailed Resume<a href="#"><i style={{padding: '10px'}} className="fa fa-file" aria-hidden="true"></i></a></span></h1>

      <hr/>
      <div>
      {profileitem}
      </div><br/>
      </div>
    );
  }
};

module.exports = Profile;
