import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart , faUserCircle, faPhoneAlt, faPlay, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add( faHeart )
library.add( faUserCircle )
library.add( faPhoneAlt )
library.add( faChevronDown )
library.add( faSearch )
library.add( faFacebookF )
library.add( faTwitter )
library.add( faPlay )
library.add( faInstagram )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
