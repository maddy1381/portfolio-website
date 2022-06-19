import React from "react";
import { useLocation } from "react-router";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const [post, setPost] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  React.useEffect(() => {
    const getPost = async () => {
        const res = await fetch(`/api/posts/${path}`);
        const response = await res.json()
        setPost(response);
        // setTitle(response.title);
        // setDesc(response.desc);
      };
      getPost();
  },[path])

  console.log(post);

  return <div className="blog-page">
    <div className="post-display-container">
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
    </div>
  </div>;
};

export default SinglePost;
