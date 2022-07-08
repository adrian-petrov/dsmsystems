import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './helpers/ScrollToTop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Services } from './pages/Services';
import { RouteNotFound, CaptureRouteNotFound } from './pages/PageNotFound';

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <CaptureRouteNotFound>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navigation />
          {/* Main body */}
          <Layout>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <RouteNotFound />
            </Switch>
          </Layout>
          <Footer />
        </div>
      </CaptureRouteNotFound>
    </Router>
  );
};

export default App;
