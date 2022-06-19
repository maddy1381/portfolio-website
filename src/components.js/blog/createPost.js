import React from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [img, setImg] = React.useState("");

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       title: name,
       desc: desc,
       photo: img,
      }),
    });
    const data = await res.json()
    console.log(data);
    history.push('/blogs')

  }

  return (
    <div className="create-blog-page">
      <div className="create-blog-form-container">
        <form className="create-blog-form" onSubmit={handleSubmit}>
          <label className="create-blog-form-group">
            Enter The title:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="create-blog-form-group">
            Enter The Description:
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
          </label>
          <label className="create-blog-form-group">
            upload Image
            <input
              type="file"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </label>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
