import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>404</h1>
      <p>We could not find the page you were looking for.</p>
      <Link to="/" className="btn">Go back to Homepage</Link>
    </div>
   );
}
 
export default NotFound;