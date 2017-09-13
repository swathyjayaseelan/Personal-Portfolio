var React = require('react');
import './motivatequote';
import {Grid,Row,Col} from 'react-bootstrap';
import Img from 'react-image';


class OtherProjects extends React.Component {
  render(){
    var arr = otherprojects.map(function(item,index){
      return (
        <Grid className="projectitem">
        <Row className="show-grid">
        <Col md={7}>
        <a href={item.url} style={{color: ' #3b5998	'}}><h3 className="titlenames">{item.name}</h3></a><br/>
        <p>{item.desc}</p>
        <p><b>Contributors:</b></p>{item.contributors}<br/><br/>
        <a href={item.url}>View</a>
        </Col>
        <Col md={5}>
        <Img id="projectimg" src={item.img}/>
        </Col>
        </Row>
        </Grid>
      );
    });

    return (
      <div className="othercontent">
      <h1 className="titlenames">My other projects</h1><hr/>
      <div>
      {arr}
      </div>
      </div>
    );
  }
};

module.exports = OtherProjects;
