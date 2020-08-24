import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import './App.css';

//Personal Imports
import { Page, AppProps } from '../global';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App: React.FC<AppProps> = (props) => {

  const RenderRoutes = () => {
    const routes = props.pages.map((page: Page) => {
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
    <div className="dark-mode">
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Router >
        <Container className="p-0" fluid={true}>
          <Header title={props.title} brand={props.brand} pages={props.pages} theme={props.theme} />
          <div className="Content-Page">
            <RenderRoutes />
          </div>
          <Footer brand={props.brand} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
