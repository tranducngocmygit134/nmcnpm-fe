import React from 'react';
import './index.css';

/** Navigate using react-router-dom */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Components */
import Loading from './components/utils/Loading';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import routes from './pages/routes';

import ScrollToTop from './ScrollToTop';
import Error from './components/Error';
import Snack from './components/Snack';

/** Components */

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Snack />
        <Header />
        <Switch>
          {routes.map(({ component: Component, path, ...rest }) => (
            <Route
              path={path}
              {...rest}
              render={() => (
                <React.Suspense fallback={<Loading type="page" />}>
                  <Component />
                </React.Suspense>
              )}
              key={path}
            />
          ))}
          <Route
            path=""
            render={() => (
              <Error
                statusCode={404}
                message="We can't find page you're looking for."
              />
            )}
          />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
