import { Link } from "react-router-dom";
const Contact = () => {
    const contactheading ={
        fontSize:"40px",
        fontFamily: "'Kanit', sans-serif"
    }
    const contactdesc ={
       width:"70%"
    }
    return ( 
    <div className="Contact my-5 text-center container-fluid">
    <h3 className="text-light" style={contactheading}>Contact <span className="text-success">Me</span></h3>
    <p className="text-light mx-auto" style={contactdesc}>Let's Connect and Create. <br />
    I'm excited to hear about your project ideas, answer any questions, or simply have a chat. Feel free to reach out by Clicking the link, and let's start building something amazing together!</p>
   
    <Link className="btn btn-success btn-lg text-light" to="/Contactme" >Contact Me</Link>
    </div>
    
    
    
    );
}
 
export default Contact;