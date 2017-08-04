var React = require('react');
var ReactDOM = require('react-dom');
var About = require('./aboutme');
var Portfolio = require('./portfolio');
var Contact = require('./contact');
var OtherProjects = require('./otherprojects');
var Profile = require('./profile');
require('./css/index.css');
import {Nav,NavItem,Grid,Row,Col} from 'react-bootstrap';

import {BrowserRouter as Router,Route,NavLink,Switch,Link} from 'react-router-dom';
import Img from 'react-image';
import Typist from 'react-typist';
import './motivatequote';
import ReactScrollbar from 'react-scrollbar-js';
import {Fade} from 'react-fade';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Q = quotes.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
var dailyquote = quotes[whichQuotation];


class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {activeKey: 0};
    this.handleSelect = this.handleSelect.bind(this);
  }


handleSelect(selectedKey) {
  this.setState({activeKey: selectedKey});
}
  render (){
    return (
        <Grid fluid={true}>
        <Row className="show-grid">
        <Router>
        <div>

        <Col md={3} id="nav-bar">
        <div id="header">
        <br/>
        <Img src="/app/img/swathy.jpg"/>
        <br />
        <p><NavLink to="/" activeStyle={{ color:'white' }}>Swathy Jayaseelan</NavLink></p><hr/>
        </div>

        <Nav bsStyle="pills" stacked>
        <NavItem eventKey={1} href="/about"><span id="textclr">About me</span></NavItem>
        <NavItem eventKey={2} href="/portfolio"><span id="textclr">Web Portfolio</span></NavItem>
        <NavItem eventKey={4} href="/otherprojects"><span id="textclr">Project Management Portfolio</span></NavItem>
        <NavItem eventKey={3} href="/profile"><span id="textclr">Profile</span></NavItem>
        <NavItem eventKey={5} href="/contact"><span id="textclr">Contact me</span></NavItem>
        </Nav>

        <div id="footer">
        <p>Let us Connect</p><hr/>
        <a href="https://github.com/swathyjayaseelan"><i className="fa fa-github fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="http://www.linkedin.com/in/swathy-jayaseelan"><i className="fa fa-linkedin-square fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="mailto:swathyjayaseelan@gmail.com"><i className="fa fa-envelope fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/swathy.jayaseelan"><i className="fa fa-facebook fa-2x iconcolor" aria-hidden="true"></i></a>

        </div>
        </Col>
          <Col md={9} id="content">
          <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/otherprojects" component={OtherProjects}/>
          <Route path="/profile" component={Profile}/>
          </Switch>
          </Col>
          </div>
        </Router>
        </Row>
        </Grid>
    );
  }
};

/*class Nav extends React.Component {
  render(){
    return (
    <div>
    <div className="navigation">
    <li><NavLink to="/about">About me</NavLink></li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/profile">Profile</NavLink></li>
    <li><NavLink to="/otherprojects">Other Projects</NavLink></li>
    <li><NavLink to="/contact">Contact me</NavLink></li>
    </div>
    <div className="content">
    {this.props.children}
    </div>
    </div>
  );
  }
};
*/


class Welcome extends React.Component {
  componentDidMount() {
    var elem = this.refs.fadecontent;
    console.log('hi');
	// Set the opacity of the element to 0
	elem.style.opacity = 0;
	window.requestAnimationFrame(function() {
		// Now set a transition on the opacity
		elem.style.transition = "opacity 250ms";
		// and set the opacity to 1
		elem.style.opacity = 1;
	});
  }
  render (){
    return (
      <div id="welcomepage">
      <div id="welcome">
      <p>Hi, I am Swathy !</p><br/>
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <p>
        A Full Stack Developer
        Experienced SW Professional
        Project Manager
      </p>
      </ReactCSSTransitionGroup>
      <div>
      <p id="quotedisplay"><i>{dailyquote}</i></p>
      </div>
      </div>
      </div>
    );
  }

};
ReactDOM.render(<App/>, document.getElementById('container'));
