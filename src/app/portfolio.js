var React = require('react');
import './motivatequote';
import {Grid,Row,Col} from 'react-bootstrap';
import Img from 'react-image';

class Portfolio extends React.Component {
  render(){
    var arr = projects.map(function(item,index){
      return (
        <Grid className="projectitem">
        <Row className="show-grid">
        <Col md={7}>
        <a href={item.url} style={{color: '#008080	'}}><h3 className="titlenames">{item.name}</h3></a><br/>
        <p>{item.desc}</p>
        <p>Technologies used:</p>{item.tech}<br/>
        <a href={item.url}>Live demo!</a>
        <a style={{padding: '10px'}} href={item.github}>Source</a><br/>
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
      <h1 className="titlenames">My Works..</h1><hr/>
      <div>
      {arr}
      </div>
      </div>
    );
  }
};

module.exports = Portfolio;
