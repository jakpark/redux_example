import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
            <div>
                <label>Title:</label><br></br>
                <input type="text"/>
            </div>
            <div>
                <label>Body:</label><br></br>
                <textarea name="body">
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