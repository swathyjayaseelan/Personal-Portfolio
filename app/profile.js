var React = require('react');
import {Grid,Row,Col,Table} from 'react-bootstrap';
import './motivatequote';
import Img from 'react-image';



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

      <div  className="projectitem">
      <h3>Badges</h3>
      <div>
      <Img className="logo" src="/app/img/html.jpg"/>
      <Img className="logo" src="/app/img/angular_badge.png"/>
      <Img className="logo" src="/app/img/mean.png"/>
      <Img className="logo" src="/app/img/reactjs-badge.png"/>
      <Img className="logo" src="/app/img/python.png"/>
      <Img className="logo" src="/app/img/flask.png"/>
      <Img className="logo" src="/app/img/django-badge.png"/>
      <Img className="logo" src="/app/img/postgresql.png"/>
      <Img className="logo" src="/app/img/mongo.png"/>
      <Img className="logo" src="/app/img/agile.png"/>
      </div>

      <div>
      <Img className="logo" src="/app/img/aws.png"/>
      <Img className="logo" src="/app/img/heroku.png"/>
      <Img className="logo" src="/app/img/mlab.png"/>
      <Img className="logo" src="/app/img/github.png"/>
      </div>
      </div>

      <div  className="projectitem">
        <h3>Certifications</h3>
        <Row>
        <Col md={3} sm={3}>
        <Img className="certificate" src="/app/img/front.png"/>
        </Col>
        <Col md={3} sm={3}>
            <Img className="certificate" src="/app/img/full.png"/>
        </Col>
        </Row>
      </div>

      <div  className="projectitem">
      <h3>Skills</h3>
      <Table responsive>
      <tbody>
      <tr>
      <td><b>Programming Languages</b></td>
      <td>HTML, CSS, JavaScript, Python, Java</td>
      </tr>
      <tr>
      <td><b>Frameworks & Libraries</b></td>
      <td>MEAN stack, React, Flask, Django, Knockout, jQuery, Bootstrap</td>
      </tr>
      <tr>
      <td><b>Databases</b></td>
      <td>MongoDB, PostgreSQL, SQLite</td>
      </tr>
      <tr>
      <td><b>Software Life cycle</b></td>
      <td>Agile, Scrum, XP, Kanban, Requirement gathering and Analysis</td>
      </tr>
      <tr>
      <td><b>Tools</b></td>
      <td>Git, Selenium, Visual Paradigm, Jira, Eclipse, Atom</td>
      </tr>
      </tbody>
      </Table>

      </div>
      <div className="projectitem">
      <h3>Honors/Awards</h3><br/>
      <p>
      <Img className="logo" src="/app/img/dean.jpg"/> Dean’s list (top 2%) scholarships from <a href="http://www.sastra.edu/">SASTRA</a> University for 3 years in a row</p>
      <p>
      <Img className="logo" src="/app/img/100.png"/> Secured 100 percent in mathematics in the public examinations
      </p>
      </div>

      <div className="projectitem">
      <h3>Timeline</h3>
      {profileitem}
      </div><br/>

      </div>
    );
  }
};

module.exports = Profile;
