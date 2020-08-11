import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//Personal Imports
import { save, load, exists } from './Components/LocalS';
import { Page, Props } from './Components/AppProps';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';



var home: Page = {
  pageData: {
    title: "Developer with no focus",
    subTitle: "Projects that grow creativity",
    text: "Check out my projects below.",
  },
  directory: '/',
  directoryTitle: 'Home',
};

let about: Page = {
  pageData: {
    title: "About me",
  },
  directoryTitle: 'About',
  directory: '/about',
};

let contact: Page = {
  pageData: {
    title: "Let's Chat",
  },
  directoryTitle: 'Contact Me',
  directory: '/contact',
};

let projects: Page = {
  pageData: {
    title: "My various projects",
    subTitle: "Questioning my sanity",
    text: "Projects I've built and have a public Repo for",
  },
  directoryTitle: "My Projects",
  directory: '/projects',
}

const getPrefColorScheme = () => {
  if (!window.matchMedia) return;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}


const getInitialMode = () => {
  const isReturningUser = exists('dark');
  const savedMode: boolean = load('dark');
  const userPrefDark = getPrefColorScheme();

  //if mode is saved, load and use that given value.
  if (isReturningUser)
    return savedMode;
  //if no saved value found, use preferred color scheme of system
  else if (userPrefDark)
    return true;
  //otherwise, assume light
  else
    return false;
}


const App: React.FC = () => {
  
  let props: Props = {
    title: "Dominic Kenney",
    theme: getInitialMode() ? "dark-mode" : "light-mode",
    brand: "Dot Matrix",
    pages: [home, about, projects, contact]
  }

  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    save('dark', darkMode);
  }, [darkMode])

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <title>{props.title}</title>
      <Router >
        <Container className="p-0" fluid={true}>
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle Dark Mode</button>
          <Header title={props.title} brand={props.brand} pages={props.pages} theme={darkMode ? "dark-mode" : "light-mode"} />
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={home.pageData.title}
                subTitle={home.pageData.subTitle}
                text={home.pageData.text}
              />
            )}
          />

          <Route
            path="/projects"
            render={() => (
              <ProjectsPage
                title={projects.pageData.title}
                subTitle={projects.pageData.subTitle}
                text={projects.pageData.text}
              />
            )}
          />

          <Route
            path="/about"
            render={() => <AboutPage title={about.pageData.title} />}
          />

          <Route
            path="/contact"
            render={() => <ContactPage title={contact.pageData.title} />}
          />

          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
