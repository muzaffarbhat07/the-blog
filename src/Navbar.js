import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <h2 className="primary-color">The Blog</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
   );
}
 
export default Navbar;