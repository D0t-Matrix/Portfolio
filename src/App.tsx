import React from 'react';
import logo from './logo.svg';
import * as ReactStrap from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import {save, load, exists} from './Components/LocalS';
import {Page, Props} from './Components/AppProps';




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
  const savedMode = load('dark');
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



let props: Props = {
  title: "Dominic Kenney",
  theme: getInitialMode() ? "dark-mode" : "light-mode",
  brand: "Dot Matrix",
  pages: [home, about, projects, contact]
}

const App: React.FC = () => {
  
  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    save('dark', darkMode);
  }, [darkMode])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
