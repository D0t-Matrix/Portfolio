import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.css';

//Personal Imports
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Dominic Kenney',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
        { title: 'Projects', path: '/projects'}
      ],
      home: {
        title: "Developer with no focus",
        subTitle: "Projects that grow creativity",
        text: "Check out my projects below."
      },
      about: {
        title: "About me",
      },
      contact: {
        title: 'Let\'s chat'
      },
      projects: {
        title: 'My various projects',
        subTitle: 'Questioning my sanity',
        text: 'Projects I\'ve built and have a public Repo for'
      }
    }
  }

  render() {
    return(
      <Router className="background">
        <Container className="p-0" fluid={true}>
          
          <Header />

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />
          
        </Container>
      </Router>
    )
  }
}

export default App;