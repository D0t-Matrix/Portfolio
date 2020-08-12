import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';

//Personal Imports
import { Props } from '../global';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";



// //helper functions
// const getPrefColorScheme = () => {
//   if (!window.matchMedia) return;

//   return window.matchMedia("(prefers-color-scheme: dark)").matches;
// }

// const getInitialMode = () => {
//   const isReturningUser = exists('dark');
//   const savedMode: boolean = load('dark');
//   const userPrefDark = getPrefColorScheme();

//   //if mode is saved, load and use that given value.
//   if (isReturningUser)
//     return savedMode;
//   //if no saved value found, use preferred color scheme of system
//   else if (userPrefDark)
//     return true;
//   //otherwise, assume light
//   else
//     return false;
// }

const App: React.FC<Props> = (props) => {    
  // const [darkMode, setDarkMode] = useState(getInitialMode());

  // // const [theme, setTheme] = useState<string>(getInitialMode() ? "dark-mode" : "light-mode");

  // useEffect(() => {
  //   save('dark', darkMode);
  // }, [darkMode])

  const RenderRoutes = () => {
      const routes = props.pages.map((page) => {
            const TagName = page.component;
            return (
                <Route
                    path={page.dir}
                    exact
                    render={() => (
                        <Suspense fallback={<div>Page Loading...</div>}>
                            <TagName
                                title={page.data.title}
                                subTitle={page.data.subTitle}
                                text={page.data.text}
                            />
                        </Suspense>
                    )}
                />
            );
      });
    return <>{routes}</>
  }

  return (
    <div >
      <Router >
        <Container className="p-0" fluid={true}>
          <Header brand={props.brand} pages={props.pages} theme="dark-mode"/>
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
