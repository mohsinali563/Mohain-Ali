import { Link } from "react-router-dom";
const Navbar = () => {
   
  return (
    <div className="Navbar container-fluid   ">
        
   <nav className="navbar navbar-expand-lg navbar-dark  ">
    <div className="container-fluid">
        <a href="#" className="navbar-brand  mx-auto" id="brand"><span className="text-success">MR</span> CODE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Content" aria-controls="Content"  aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="Content">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0  " id="navbar-navigation">
                <li className="nav-item">
                     <a href="#" className="nav-link active" aria-current="page">Home</a>
                </li>

                <li className="nav-item">
                     <a href="#about" className="nav-link" >About</a>
                </li>

                <li className="nav-item">
                     <a href="#Myskills" className="nav-link" >Skills</a>
                </li>

                <li className="nav-item">
                     <a href="#" className="nav-link" >Projects</a>
                </li>

                <li className="nav-item">
                     <Link to="/Contactme" className="nav-link" >Contact</Link>
                </li>

               {/* Social links */}

                <li className="nav-item dropdown d-lg-inline d-none " id="Social-links">
                    <a href="#" className="nav-link dropdown-toggle" id="socialDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <i class="bi bi-globe2  "></i>
                    </a>
                   <ul className="dropdown-menu bg-dark text-light" aria-labelledby="socialDropdown">
                     <li><a href="#" className="dropdown-item"><i class="bi bi-facebook icn"></i> Facebook</a></li>

                     <li><a href="#" className="dropdown-item"><i class="bi bi-twitter-x icn"></i> Twitter</a></li>

                     <li><a href="#" className="dropdown-item"><i class="bi bi-linkedin icn"></i> LinkedIn</a></li>

                   </ul>

                </li>
            </ul>
            
        </div>
    </div>

   </nav>
</div>
  );}
export default Navbar;
