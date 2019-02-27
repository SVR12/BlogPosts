import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from '../Blog/NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
  return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {

  state = {
    auth: true,
  }

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                // use first for serving on localhost
                // to="/posts"
                to="learningReact-BlogPosts/posts"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Posts</NavLink></li>
              <li><NavLink to={{
                // use first for serving on localhost
                // pathname: '/new-post',
                pathname: 'learningReact-BlogPosts/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>

        {/* use first for serving on localhost */}
        {/* <Switch basename=""> */}
        <Switch basename="learningReact-BlogPosts">

          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>404 Not Found!</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;