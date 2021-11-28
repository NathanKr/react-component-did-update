import React, { Component } from "react";
import axios from "axios";

class GetPostById extends Component {
  state = { post: {} };

  componentDidMount() {
    console.log(`component did mount. id : ${this.props.id}`);
    this.getPostById(this.props.id);
  }

  componentDidUpdate(prevProps/*, prevState, snapshot*/) {
    const prevId = prevProps.id;
    console.log(
      `component did update. id : ${this.props.id} , prev id : ${prevId}`
    );

    if (this.props.id && (prevId != this.props.id)) { // -- no point of getting same data again if we got the same , assume server data not changed
      console.log('getPostById is called in componentDidUpdate');  
      this.getPostById(this.props.id);
    }
  }

  getPostById(id) {
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ post: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const elemPost = this.state.post ? (
      <p>
        id : {this.state.post.id} , userId : {this.state.post.userId} , title : {this.state.post.title} ,{" "}
      </p>
    ) : (
      <p>nothing to show</p>
    );
    return <div>{elemPost}</div>;
  }
}

export default GetPostById;
