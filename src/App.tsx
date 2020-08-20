import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

//Personal Imports
import { save, load, exists } from './Components/LocalS';
import { Page } from '../global';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const AboutPage = React.lazy(() => import('./Pages/AboutPage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage'));
const ProjectsPage = React.lazy(() => import('./Pages/ProjectsPage'));

//helper functions
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

export const pagesRouteData: Array<any> = [
    {
        pageComponent: HomePage,
        pageData: {
            title: "Developer with no focus",
            subTitle: "Projects that grow creativity",
            text: "Check out my projects below.",
        },
        directory: '/',
        directoryTitle: 'Home',
    },
    {
        pageComponent: AboutPage,
        pageData: {
            title: "About me",
        },
        directoryTitle: 'About',
        directory: '/about',
    },
    {
        pageComponent: ContactPage,
        pageData: {
            title: "Let's Chat",
        },
        directoryTitle: 'Contact Me',
        directory: '/contact',
    },
    {
        pageComponent: ProjectsPage,
        pageData: {
            title: "My various projects",
            subTitle: "Questioning my sanity",
            text: "Projects I've built and have a public Repo for",
        },
        directoryTitle: "My Projects",
        directory: '/projects',
    },
];

interface AppProps {
    pages: Array<Page>;
}

const App: React.FC<AppProps> = (props) => {    
  const [darkMode, setDarkMode] = useState(getInitialMode());

  const [title, setTitle] = useState<string>('Dominic Kenney');

  const [theme, setTheme] = useState<string>(getInitialMode() ? "dark-mode" : "light-mode");

  const [brand, setBrand] = useState<string>('Dot Matrix');

  useEffect(() => {
    save('dark', darkMode);
  }, [darkMode])

  const RenderRoutes = () => {
      const routes = pagesRouteData.map((page) => {
            const TagName = page.pageComponent;
            return (
                <Route
                    path={page.directory}
                    exact
                    render={() => (
                        <Suspense fallback={<div>Page Loading...</div>}>
                            <TagName
                                title={page.pageData.title}
                                subTitle={page.pageData.subTitle}
                                text={page.pageData.text}
                            />
                        </Suspense>
                    )}
                />
            );
      });
    return <>{routes}</>
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <title>{title}</title>
      <Router >
        <Container className="p-0" fluid={true}>
          <Header title={title} brand={brand} pages={props.pages} theme={darkMode ? "dark-mode" : "light-mode"} />
          <div className="Content-Page">
            <RenderRoutes/>
          </div>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
