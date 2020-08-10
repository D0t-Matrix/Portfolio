import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import './styles.css';

//Personal Imports
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {

  const title = "Dominic Kenney";

  // let headerLinks = [
  //   { title: "Home", path: "/" },
  //   { title: "About", path: "/about" },
  //   { title: "Contact", path: "/contact" },
  //   { title: "Projects", path: "/projects" },
  // ];
  
  let home = {
    title: "Developer with no focus",
    subTitle: "Projects that grow creativity",
    text: "Check out my projects below.",
  };

  let about = {
    title: "About me"
  };

  let contact = {
    title: "Let's Chat"
  };

  let projects = {
    title: "My various projects",
    subTitle: "Questioning my sanity",
    text: "Projects I've built and have a public Repo for",
  }

  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode])
  
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
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

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <title>{title}</title>
      <Router className="">
        <Container className="p-0" fluid={true}>
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle Dark Mode</button>
          <Header theme={darkMode ? "dark-mode" : "light-mode"} />
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={home.title}
                subTitle={home.subTitle}
                text={home.text}
              />
            )}
          />

          <Route
            path="/projects"
            render={() => (
              <ProjectsPage
                title={projects.title}
                subTitle={projects.subTitle}
                text={projects.text}
              />
            )}
          />

          <Route
            path="/about"
            render={() => <AboutPage title={about.title} />}
          />

          <Route
            path="/contact"
            render={() => <ContactPage title={contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import "./App.css";
// import "./styles.css";

// //Personal Imports
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import HomePage from "./Pages/HomePage";
// import AboutPage from "./Pages/AboutPage";
// import ContactPage from "./Pages/ContactPage";
// import ProjectsPage from "./Pages/ProjectsPage";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Dominic Kenney",
//       darkMode: true,
//       headerLinks: [
//         { title: "Home", path: "/" },
//         { title: "About", path: "/about" },
//         { title: "Contact", path: "/contact" },
//         { title: "Projects", path: "/projects" },
//       ],
//       home: {
//         title: "Developer with no focus",
//         subTitle: "Projects that grow creativity",
//         text: "Check out my projects below.",
//       },
//       about: {
//         title: "About me",
//       },
//       contact: {
//         title: "Let's chat",
//       },
//       projects: {
//         title: "My various projects",
//         subTitle: "Questioning my sanity",
//         text: "Projects I've built and have a public Repo for",
//       },
//     };
//   }

//   render() {
//     return (
//       <div className={darkMode ? "dark-mode" : "light-mode"}>
//         <Router className="">
//           <Container className="p-0" fluid={true}>
//             <Header />

//             <Route
//               path="/"
//               exact
//               render={() => (
//                 <HomePage
//                   title={home.title}
//                   subTitle={home.subTitle}
//                   text={home.text}
//                 />
//               )}
//             />

//             <Route
//               path="/projects"
//               render={() => (
//                 <ProjectsPage
//                   title={projects.title}
//                   subTitle={projects.subTitle}
//                   text={projects.text}
//                 />
//               )}
//             />

//             <Route
//               path="/about"
//               render={() => <AboutPage title={about.title} />}
//             />

//             <Route
//               path="/contact"
//               render={() => <ContactPage title={contact.title} />}
//             />

//             <Footer />
//           </Container>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;
