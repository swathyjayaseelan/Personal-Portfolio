var quotes=new Array()
quotes[0]='There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other. - Douglas Everett'
quotes[1]='Whether you think you can or whether you think you can\'t, you\'re right! - Henry Ford'
quotes[2]='I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor. - Henry David Thoreau'
quotes[3]='Do not let what you cannot do interfere with what you can do. - John Wooden'
quotes[4]='Accept everything about yourself - I mean everything, You are you and that is the beginning and the end - no apologies, no regrets. - Clark Moustakas'
quotes[5]='We must accept life for what it actually is - a challenge to our quality without which we should never know of what stuff we are made, or grow to our full stature. - Ida R. Wylie'
quotes[6]='High achievement always takes place in the framework of high expectation. - Jack Kinder'
quotes[7]='The measure of a man is the way he bears up under misfortune. - Plutarch'
quotes[8]='Don\'t wait for your ship to come in, swim out to it. - Anon'
quotes[9]='As I grow older, I pay less attention to what men say. I just watch what they do. - Andrew Carnegie'
quotes[10]='No steam or gas ever drives anything until it is confined. No Niagara is ever turned into light and power until it is tunneled. No life ever grows until it is focused, dedicated, disciplined. - Harry Emerson Fosdick'
quotes[11]='The words printed here are concepts. You must go through the experiences. - Carl Frederick'
quotes[12]='Man cannot discover new oceans unless he has the courage to lose sight of the shore. - Andre Gide'
quotes[13]='The wise man does at once what the fool does finally. - Baltasar Gracian'
quotes[14]='The world has the habit of making room for the man whose actions show that he knows where he is going. - Napoleon Hill'
quotes[15]='Success seems to be connected with action. Successful men keep moving. They make mistakes, but they don\'t quit. - Conrad Hilton'
quotes[16]='Do the things you know, and you shall learn the truth you need to know. - George Macdonald'
quotes[17]='I have never heard anything about the resolutions of the apostles, but a good deal about their acts. - Horace Mann'
quotes[18]='Let us not be content to wait and see what will happen, but give us the determination to make the right things happen. - Peter Marshall'
quotes[19]='I hear and I forget, I see and I remember. I do and I understand. - Chinese Proverb'
quotes[20]='One may walk over the highest mountain one step at a time. - John Wanamaker'
quotes[21]='Every action is either strong or weak, and when every action is strong we are successful.- Wallace D. Wattles'
quotes[22]='If we do what is necessary, all the odds are in our favor. - Henry Kissinger'
quotes[23]='Little minds are tamed and subdued by misfortune; but great minds rise above them. - Washington Irving'
quotes[24]='When an affliction happens to you, you either let it defeat you, or you defeat it...- Rosalind Russell'
quotes[25]='There\'s a basic human weakness inherent in all people which tempts them to want what they can\'t have and not want what is readily available to them. - Robert J. Ringer'
quotes[26]='If there is something to gain and nothing to lose by asking, by all means ask! - W. Clement Stone'
quotes[27]='It\'s not the situation ... It\'s your reaction to the situation - Robert Conklin'
quotes[28]='Life at any time can become difficult: life at any time can become easy.  It all depends upon how one adjusts oneself to life. - Morarji Desai'
quotes[29]='What happens is not as important as how you react to what happens. - Thaddeus Golas'
quotes[30]='To hell with circumstances; I create opportunities. - Bruce Lee'
var projects=new Array()
projects=[
  {'name':'Pay It Forward',
  'framework': 'MEAN stack',
  'desc':'A Web app to connect volunteers to opportunities and  hospitals to eligible donors in the nearby locality, Built in MEAN stack and responsive in all devices, Uses Passport for authentication, Geolocation API and Geospatial query operators of MongoDB for locations based features, Twilio API for sending sms messages, Facebook APIs for social media sharing and Bootstrap for styling',
  'tech':'HTML, CSS,  MongoDB, ExpressJS, AngularJS, NodeJS, Bootstrap',
  'url':'https://payitforwardversion1.herokuapp.com/#!/home',
  'source':'https://github.com/swathyjayaseelan/PayItForward',
  'hosted': 'Heroku and mLab',
  'img':'/app/img/payitforward.png'},

  {'name':'EasyBuy',
  'framework': 'Django',
  'desc':'Responsive E-Commerce Website in Python with Django framework to sell books. Customer payment is handled with Stripe APIs.',
  'tech':'HTML, CSS, Python, Django, Bootstrap, Stripe',
  'url':'http://swathyjayaseelan.pythonanywhere.com',
  'source':'https://github.com/swathyjayaseelan/ECommerce_Website-Django-',
  'hosted': 'Pythonanywhere',
  'img':'/app/img/django.png'},

  {'name':'Neighbourhood Map',
  'framework': 'Knockout',
  'desc':'Developed a single-page web application using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.',
  'tech':'HTML5, CSS3, JavaScript, Knockout, JQuery, Bootstrap, Google maps APIs, Yelp API',
  'url':'https://swathyjayaseelan.github.io/Neighbourhood-Map/',
  'github':'https://github.com/swathyjayaseelan/Neighbourhood-Map',
  'hosted': 'Github Pages',
  'img':'/app/img/neighbourhoodmap.png'},

  {'name':'Classic Arcade Game',
  'framework': 'Object-Oriented JavaScript',
  'desc':'Created an HTML5 Canvas powered video game using the best practices in Object Oriented JavaScript.',
  'tech':'HTML5 Canvas, JavaScript, Object-Oriented Programming',
  'url':'https://swathyjayaseelan.github.io/Classic-Arcade-Game/',
  'github':'https://github.com/swathyjayaseelan/Classic-Arcade-Game',
  'hosted': 'Github Pages',
  'img':'/app/img/game.png'},

  {'name':'Movie_Trailer-website',
  'framework': 'Python',
  'desc':'Developed a server-side code in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers. Hover over the image to read the story line.!',
  'tech':'HTML, CSS, Python',
  'url':'https://github.com/swathyjayaseelan/Movie_Trailer-website',
  'github':'https://github.com/swathyjayaseelan/Movie_Trailer-website',
  'hosted': 'Github',
  'img':'/app/img/trailer.png'},

  {'name':'Items_Catalog',
  'framework': 'Flask',
  'desc':'A Python module is written using Flask framework to get a list of categories from SQLite database and present it in a web interface. Users can login using their Google+ accounts and add new items to category, update or delete the items that they have created. The pages that allow CRUD operations are protected so that only authenticated and authorized users can access and perform changes.',
  'tech':'Python, Flask, SQLite',
  'url':'https://github.com/swathyjayaseelan/Items_Catalog',
  'github':'https://github.com/swathyjayaseelan/Items_Catalog',
  'hosted': 'Github',
  'img':'/app/img/items.png'},

  {'name':'AngularJS-developers-directory',
  'framework': 'AngularJS',
  'desc':'An AngularJS application to display a list of freelance developers with CRUD functionality (add new developer to directory, view the details, update and remove a developer from directory). Feature to even contact a developer.',
  'tech':'HTML5, CSS3, AngularJS, Bootstrap',
  'url':'https://swathyjayaseelan.github.io/AngularJS-developers-directory/',
  'github':'https://github.com/swathyjayaseelan/AngularJS-developers-directory',
  'hosted': 'Github Pages',
  'img':'/app/img/angular.png'},

  {'name':'Interactive-Resume',
  'framework': 'jQuery',
  'desc':'An interactive resume application that reads the resume content from a JSON file and dynamically displays that content within a template. Check out the live demo to experience some animations!',
  'tech':'HTML5, CSS3, JavaScript, JQuery',
  'url':'https://swathyjayaseelan.github.io/Interactive-Resume/',
  'github':'https://github.com/swathyjayaseelan/Interactive-Resume',
  'hosted': 'Github Pages',
  'img':'/app/img/resume.png'},

  {'name':'Linux Server Configuration',
  'framework': 'Amazon Lightsail',
  'desc':'Developed a python module to display a list of catalog items. The module is written using Flask and integrated with OAuth. Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server to serve the python application.',
  'tech':'SSH, Linux, Apache, PostgreSQL',
  'url':'https://swathyjayaseelan.github.io/Neighbourhood-Map/',
  'github':'https://github.com/swathyjayaseelan/Neighbourhood-Map',
  'hosted': 'Github',
  'img':'/app/img/amazon.png'},

  {'name':'Logs Analysis PostgreSQL',
  'framework': 'PostgreSQL',
  'desc':'A large PostgreSQL database with over a million rows is explored by building complex SQL queries. An internal reporting tool is built to explore the data and report the findings like the most viewed articles, popular authors so that business decisions can be made.',
  'tech':'PostgreSQL, Python',
  'url':'https://github.com/swathyjayaseelan/Logs_Analysis_Postgresql',
  'github':'https://github.com/swathyjayaseelan/Logs_Analysis_Postgresql',
  'hosted': 'Github',
  'img':'/app/img/logs.png'},

  {'name':'Tournament Database',
  'framework': 'PostgreSQL',
  'desc':'A database backed application that uses PostgreSQL database to record the players, matches and winners of a Swiss-based non-elimination tournament. Python is used to query the database and pair the players for matches based on the number of wins of each player',
  'tech':'PostgreSQL, Python',
  'url':'https://github.com/swathyjayaseelan/Tournament_database',
  'github':'https://github.com/swathyjayaseelan/Tournament_database',
  'hosted': 'Github',
  'img':'/app/img/postgresql.png'},

  {'name':'Portfolio',
  'framework': 'Bootstrap',
  'desc':'A responsive website built from a design PDF mockup that will display images, descriptions and links.',
  'tech':'HTML5, CSS3, Bootstrap',
  'url':'https://swathyjayaseelan.github.io/Portfolio/',
  'github':'https://github.com/swathyjayaseelan/Portfolio',
  'hosted': 'Github Pages',
  'img':'/app/img/portfolio.png'}
  ]
var otherprojects=new Array()
otherprojects=[
  {'name':'Software Requirements Specification (SRS)',
  'desc':'Drafted the SRS dcoument for an Online Cafeteria Ordering System. The document includes use case diagrams, descriptions, class diagrams etc.',
  'contributors':'Swathy Jayaseelan, Jabeen Shazia Iqbal, Vidula Mahamulkar',
  'url': 'https://docs.google.com/document/d/1qONjBUJ-G27wmUF-Xjy44FMOxAVH-51dC7xUDRDSO9w/edit?usp=sharing',
  'img':'/app/img/srs.png'},

  {'name':'Foodie24',
  'desc':'Designed and managed a simulated end-to-end Agile Scrum project from forming the vision, creating user stories, defining the backlog, grooming, prioritization, iteration planning, daily scrum meeting etc. Performed a detailed assesment to identify the capability level using CMMI.',
  'contributors':'Swathy Jayaseelan, Daaman Behal, Vidula Mahamulkar, Sai Sushma Devaraj',
  'url': 'https://docs.google.com/document/d/1MYxHp3XOV3--YI85qhpfjIyhtDeQ6kOlW1bDBVF5sNw/edit?usp=sharing',
  'img':'/app/img/foodie24.png'},

  {'name':'EasyShare',
  'desc':'Came up with idea of an innovative mobile app that makes photo sharing easy. All you have to do is take a pic with your friend and enjoy the moment, the app does the rest. It shares the pic with your friend automatically. For this to happen the friend’s contact should be added to the EasyShare contact list along with a profile picture. When you take a picture with a friend, this app will automatically recognize and match the picture with the saved profile picture in the contact list and will instantly share it with that person as a normal text message.',
  'contributors':'Swathy Jayaseelan, Daaman Behal, Vidula Mahamulkar, Sai Sushma Devaraj',
  'url': 'https://docs.google.com/document/d/1tAyHMRdUm2oa8m1AYBsA1ybToLAQ-V7ZEwUbTKGlZKE/edit?usp=sharing',
  'img':'/app/img/easyshare.png'},

  {'name':'Advanced Software Process',
  'desc':'Designed a Scrum and XP like process for building an android application. Performed assessment of the process to check its complaiance with the ISO 12207 model and the gaps identified. Proposed an action plan for process improvement.',
  'contributors':'Swathy Jayaseelan, Daaman Behal, Vidula Mahamulkar, Sai Sushma Devaraj',
  'url': 'https://docs.google.com/document/d/13_9T9lfCv_RcRDWc668CEf-bH1wTSBfsd14PD0rW5_Y/edit?usp=sharing',
  'img':'/app/img/adv.png'},

  {'name':'Fullerton eShopping Architecture',
  'desc':'Designed the architecture of an ecommerce website using Attribute Driven Design (ADD). The system is designed using Multi-Tier (4 tier) architecture - Client, Web Server, Application Server and Database Tiers',
  'contributors':'Swathy Jayaseelan, Daaman Behal, Bhavya Sreenivasa Murthy, Jabeen Shazia Iqbal',
  'url': 'https://docs.google.com/document/d/1lR3mNCIl08pCGZppnoXVPnfu33FrOBatK4yravXMooM/edit?usp=sharing',
  'img':'/app/img/arch.png'},
  ]
var profile=new Array()
profile=[{'range':'Currently','profile':'<p>Master\'s in Software Engg., <a href="https://www.fullerton.edu/"><i>Cal State Fullerton </i></a>(Graduating Dec\'17)<br/>'+'<b><span className="test">CGPA: 4.00</span></b><br/>Full Stack Web Developer Nanodegree, <a href="https://www.udacity.com"><i>Udacity </i></a>(August\'17)<br/>'+'Ready to take up new opportunities !!<br/>'+'<a href="/contact">Contact me</a></p>'},{'range':'2016','profile':'<p>Started Master\'s programme at Cal State (January\'16)<br/>'+'Front-End Web Developer Nanodegree, <i>Udacity </i><p>'},{'range':'2015','profile':'<p>Project Manager, <i>Adam & Associates Inc. India </i>(2013-2015)<br/>Duties:<br/>'+'<ul><li>Planned and organized project schedules</li><li>Performed detailed assessment of project and resource requirements</li><li>Evaluated estimates, negotiated  budgets and timescales of projects with clients and managers</li></p>'},{'range':'2014','profile':'<p>Project Manager, <i>Adam & Associates Inc. India </i><br/>'+'Diploma In Computer Programming <i>Tiruchirappalli Regional Engineering College Science and Technology Entrepreneurs Park</i><br/>'+'Field of study: (C, C++ and Java)</p>'},{'range':'2013','profile':'<p>Assistant System Engineer, <a href="https://www.tcs.com/"><i>Tata Consultancy Services, India </i></a>(2012-2013)<br/>'+'Duties:<br/><ul><li>Deployed applications on WebLogic servers</li>'+'<li>Worked as a WebSSO integration engineer integrating applications with WebSSO(Single sign on)</li>'+'<li>Provided L2 level support in analyzing and resolving problems</li>'+'<li>Mentored and assisted two interns</li><br/></p>'},{'range':'2012','profile':'<p>Bachelor of Technology (B.Tech.) Honours, EE., <a href="http://www.sastra.edu/"><i>Shanmugha Arts, Science, Technology and Research Academy, India</i></a><br/>'+'<b>CGPA: 9.6</b></br>'+'Started career as a system engineer in TCS</p>'},]
