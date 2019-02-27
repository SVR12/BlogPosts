import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

// use basename="/" while serving on localhost
const basename = "/learningReact-BlogPosts";
// const basename = "/";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={basename}>
        <Blog />
      </BrowserRouter>
    );
  }
}

export default App;
