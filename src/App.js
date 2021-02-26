import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
