var React = require('react');



class Contact extends React.Component {
  render(){
    return (
      <div id="contact">
      <h1 className="titlenames">My Contacts</h1><hr/><br/>
      <h4>Email:<i style={{paddingLeft: '100px'}} className="fa fa-envelope fa-1x" aria-hidden="true"></i><a style={{paddingLeft: '10px'}} href="mailto:swathyjayaseelan@gmail.com">swathyjayaseelan@gmail.com</a></h4>
      <h4>Linkedin: <i style={{paddingLeft: '73px'}} className="fa fa-linkedin-square fa-1x" aria-hidden="true"></i><a style={{paddingLeft: '10px'}} href="http://www.linkedin.com/in/swathy-jayaseelan">swathy-jayaseelan</a></h4>
      <h4>Github: <i style={{paddingLeft: '90px'}} className="fa fa-github fa-1x" aria-hidden="true"></i><a style={{paddingLeft: '10px'}} href="https://github.com/swathyjayaseelan">swathyjayaseelan</a></h4>
      <h4>Facebook:<i style={{paddingLeft: '75px'}} className="fa fa-facebook fa-1x" aria-hidden="true"></i>  <a style={{paddingLeft: '10px'}} href="https://www.facebook.com/swathy.jayaseelan">Swathy</a></h4>
      </div>
    );
  }
};

module.exports = Contact;
