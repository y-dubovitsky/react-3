import React from 'react';
import Posts from './components/Posts';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [
        { id: '1', name: 'First' },
        { id: '2', name: 'Second' },
        { id: '3', name: 'Third' }
      ]
    };
  }

  onDeletePost = (id) => {
    const newPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({
      posts: newPosts
    })
  }

  render() {
    return (
      <div>
        <Posts posts={this.state.posts} onDeletePost={this.onDeletePost} />
      </div>
    )
  }
}