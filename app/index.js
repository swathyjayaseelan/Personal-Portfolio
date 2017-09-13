var React = require('react');
var ReactDOM = require('react-dom');
var About = require('./aboutme');
var Portfolio = require('./portfolio');
var Contact = require('./contact');
var OtherProjects = require('./otherprojects');
var Profile = require('./profile');
require('./css/index.css');
import {Nav,NavItem,Grid,Row,Col,Badge} from 'react-bootstrap';

import {BrowserRouter as Router,Route,NavLink,Switch,Link} from 'react-router-dom';
import Img from 'react-image';
import Typist from 'react-typist';
import '../motivatequote';
import ReactScrollbar from 'react-scrollbar-js';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Collapsible from 'react-collapsible';
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

        <Collapsible trigger="click here" className="mobile">
        <div>
        <Col md={3} sm={3} className="mob-nav-bar">
        <div id="header">
        <div className="imageholder">
        <Img src="app/img/swathy.jpg"/>
        </div>
        <p><NavLink to="/" activeStyle={{ color:'white' }}>Swathy Jayaseelan</NavLink></p><hr/>
        </div>
        <Nav bsStyle="pills" stacked>
        <NavItem eventKey={1} href="/Personal-Portfolio/about"><span id="textclr">About me</span></NavItem>
        <NavItem eventKey={2} href="/Personal-Portfolio/portfolio"><span id="textclr">Web Portfolio</span></NavItem>
        <NavItem eventKey={4} href="/Personal-Portfolio/otherprojects"><span id="textclr">Project Management Portfolio</span></NavItem>
        <NavItem eventKey={3} href="/Personal-Portfolio/profile"><span id="textclr">Profile</span></NavItem>
        <NavItem eventKey={5} href="/Personal-Portfolio/contact"><span id="textclr">Contact me</span></NavItem>
        </Nav>
        <div id="mob-footer">
        <p>Let&#39;s Connect</p>
        <a href="https://github.com/swathyjayaseelan"><i className="fa fa-github fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="http://www.linkedin.com/in/swathy-jayaseelan"><i className="fa fa-linkedin-square fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="mailto:swathyjayaseelan@gmail.com"><i className="fa fa-envelope fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/swathy.jayaseelan"><i className="fa fa-facebook fa-2x iconcolor" aria-hidden="true"></i></a>
        </div>
        </Col>
        </div>
        </Collapsible>

        <Col md={3} sm={3} className="nav-bar">
        <div id="header">
        <br/>
        <Img src="app/img/swathy.jpg"/>
        <br />
        <p><NavLink to="/Personal-Portfolio" activeStyle={{ color:'white' }}>Swathy Jayaseelan</NavLink></p><hr/>
        </div>
        <Nav bsStyle="pills" stacked>
        <NavItem eventKey={1} href="/Personal-Portfolio/about"><span id="textclr">About me</span></NavItem>
        <NavItem eventKey={2} href="/Personal-Portfolio/portfolio"><span id="textclr">Web Portfolio</span><Badge>12</Badge></NavItem>
        <NavItem eventKey={4} href="/Personal-Portfolio/otherprojects"><span id="textclr">Project Management Portfolio</span><Badge>5</Badge></NavItem>
        <NavItem eventKey={3} href="/Personal-Portfolio/profile"><span id="textclr">Profile</span></NavItem>
        <NavItem eventKey={5} href="/Personal-Portfolio/contact"><span id="textclr">Contact me</span></NavItem>
        </Nav>
        <div id="footer">
        <p>Let&#39;s Connect</p>
        <a href="https://github.com/swathyjayaseelan"><i className="fa fa-github fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="http://www.linkedin.com/in/swathy-jayaseelan"><i className="fa fa-linkedin-square fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="mailto:swathyjayaseelan@gmail.com"><i className="fa fa-envelope fa-2x iconcolor" aria-hidden="true"></i></a>
        <a href="https://profiles.udacity.com/p/7320369975"><i className="fa fa-underline fa-2x iconcolor" aria-hidden="true"></i></a>
        </div>
        </Col>

          <Col md={9}  sm={9} id="content">
          <Switch>
          <Route exact path="/Personal-Portfolio" component={Welcome}/>
          <Route path="/Personal-Portfolio/about" component={About}/>
          <Route path="/Personal-Portfolio/portfolio" component={Portfolio}/>
          <Route path="/Personal-Portfolio/contact" component={Contact}/>
          <Route path="/Personal-Portfolio/otherprojects" component={OtherProjects}/>
          <Route path="/Personal-Portfolio/profile" component={Profile}/>
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
      <p className="mainprofile">Hello, this is Swathy ! Welcome to my portfolio !!
      <br/>
      </p>
      <div className="centercontent">
        <p>I&#39;m a Full Stack Web Developer,</p>
        <p>A CSUF(Fall&#39;17) graduate holding</p>
        <p>Udacity Full Stack & Front-End Nanodegrees,</p>
        <p>With 3 years SW & PM experience.</p>
        <i>Ready for new opportunities <i className="fa fa-thumbs-up" aria-hidden="true"></i></i>
      </div>

      </div>
      </div>
    );
  }

};
ReactDOM.render(<App/>, document.getElementById('container'));
