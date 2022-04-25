import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import SingleBlogTemplate from './components/single-blog-template';
import SingleProjectTemplate from './components/single-project-template';
import PricingPage from './components/pricingInformation';

const routing = (
  <React.StrictMode>
    <BrowserRouter>

          <Route exact path="/" component={App}></Route>
          <Route path="/blogs/:slug" component={SingleBlogTemplate}></Route>
          <Route path="/portfolio/:slug" component={SingleProjectTemplate}></Route>
          <Route path="/pricing" component={PricingPage}></Route>

    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
