import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const {data:blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleDelete = () => {
    const config = {
      method: "DELETE"
    };

    fetch("http://localhost:8000/blogs/" + id, config)
      .then(() => {
        history.push("/");
      })
  }

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error.message }</div> }
      { blog && 
        <div>
          <h2 className="primary-color">{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button className="btn" onClick = { handleDelete }>delete</button>
        </div>        
      }
    </div>
   );
}
 
export default BlogDetails;