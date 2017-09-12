var React = require('react');
import Img from 'react-image';
import {Grid,Row,Col} from 'react-bootstrap';


class About extends React.Component {
  render(){
    return (
      <div className="othercontent paint" style={{fontSize: ' 15px	'}}>
      <h1>About me</h1>
      <p>I am Swathy Jayaseelan, a self-taught, motivated Full Stack developer with a portfolio of 10+ projects. I worked as software engineer for 1+ years and for ~2 years as PM in manufacturing industry.
      I will be graduating in Fall
      17 from CSUF with Masters in S/W Engineering. I have also graduated from Udacity Nanodegrees in Front End(Jan17) and Full Stack(Sep17)</p>

      <p>
      I have developed and deployed multiple websites using  trending web technologies and frameworks like MEAN, React, Flask, Django, Heroku, AWS. You can view them in my  <a href="/portfolio" style={{color: 'lightblue'}}> Web Portfolio. </a>
      Being a Master’s graduate in S/W Engineering, I am exposed to best practices and methodologies of software development.
      As an Agile methodology follower, I firmly believe in continuous learning and improvement, especially in web development where demands are rapidly changing.
      </p>
      <p>
      To chill out, I hang out with my friends, paint and listen to Indian music.
      </p>
      <p>
      If you want to get in touch with me, just e-mail me to <a href="mailto:swathyjayaseelan@gmail.com" style={{color: 'lightblue'}}>swathyjayaseelan@gmail.com</a> 
      </p>
      <p id="quotedisplay"><i>Background painting by: Swathy Jayaseelan (Yours truly <i className="fa fa-smile-o" style ={{marginLeft: '5px'}} aria-hidden="true"></i> )</i></p>
      </div>
    );
  }
};

module.exports = About;
