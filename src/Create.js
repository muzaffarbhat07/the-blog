import { useHistory } from "react-router";
import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Muzaffar");

  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    };
    fetch("http://localhost:8000/blogs", config)
      .then(() => {
        setIsPending(false);
        history.push("/");
      })
  }
  return ( 
    <div className="create">
      <h2 className="primary-color">Add a New Blog</h2>
      <form onSubmit = { handleSubmit }>
        <label>Blog Title:</label>
        <input type="text" required value = {title} onChange={ (e) => setTitle(e.target.value)}/>

        <label>Blog Body:</label>
        <textarea required value = {body} onChange={ (e) => setBody(e.target.value)}></textarea>
        
        <label>Blog Author:</label>
        <select required value = {author} onChange={ (e) => setAuthor(e.target.value)}>
          <option value="Muzaffar">Muzaffar</option>
          <option value="Shahid">Shahid</option>
        </select>

        { !isPending && <button className="btn">Add Blog</button> }
        { isPending && <button className="btn" disabled>Adding Blog...</button> }
      </form>
    </div>
   );
}
 
export default Create;