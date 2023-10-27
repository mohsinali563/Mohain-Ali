import { Link } from "react-router-dom";
const Contact = () => {
    const contactheading ={
        fontSize:"40px",
        fontFamily: "'Kanit', sans-serif"
    }
    const contactdesc ={
       width:"80%"
    }
    return ( 
    <div className="Contact my-5 text-center container-fluid">
    <h3 className="text-light" style={contactheading}>Contact <span className="text-success">Me</span></h3>
    <p className="text-light mx-auto" style={contactdesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ut est eum quia similique at consectetur ex nesciunt id voluptates, neque error culpa, illum perferendis! Veritatis esse unde ipsa laudantium.</p>
    <Link className="btn btn-success btn-lg text-light" to="/Contactme" >Contact Me</Link>
    </div>
    
    
    
    );
}
 
export default Contact;