import React from "react";
import "../../component.css/blogs/blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const uri = "/api/posts/";
  const [posts, setPosts] = React.useState();

  async function fetchPosts() {
    const res = await fetch(uri);
    const data = await res.json();
    setPosts(data);
  }

  React.useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);


 posts&& posts.sort(function (a, b) {
    var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt)
    return dateA - dateB
  });

  console.log(posts);

  return (
    <div className="blog-page">
      <div className="post-container">
        {posts &&
          posts.map((post) => {
            console.log(new Date(post.createdAt).getUTCFullYear());
            return (
              <div className="post">
                <h2>{post.title}</h2>
                <p>
                <small>{new Date(post.createdAt).toDateString()}</small>
              </p>
                <p>{post.desc.slice(0, 200)}</p>
                <Link to={`/post/${post._id}`}>read more...</Link>
              </div>
            );
          })}
      </div>
      <Link to={'/blog/create'} className="create-blog-btn">Create Blog</Link>
    </div>
  );
};

export default Blog;
