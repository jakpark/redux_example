import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        body: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // call action
    createPost();
  }
  
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title:</label><br></br>
                <input type="text" name="title" onChange={this.handleInput} value={this.state.title}/>
            </div>
            <div>
                <label>Body:</label><br></br>
                <textarea name="body" onChange={this.handleInput} value={this.state.body}>
                </textarea>
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;