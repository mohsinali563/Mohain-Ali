import { useState } from "react";
import $ from "jquery"
import { type } from "@testing-library/user-event/dist/type";
const Contactme = () => {
  const localLinks ={
    borderRadius:"100%",
    padding:"20px 22px",
    float:"left"
  }
  const localLinksheading={
    marginLeft:"15px",
    display:"inline-block",
    fontWeight:"700",
    marginBottom:"0"
  }
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [result,setResult]=useState("");
  const handleSubmit =(e)=>{
   e.preventDefault();
   const form= $(e.target);
   $.ajax({
    type:"SEND",
    url:form.attr("action"),
    data:form.serialize(),
    success(data){
      setResult(data);
    }
   })
  };
console.log(result);
  
  return (
    <div className="Contactme   ">
      <div className="overlay  d-flex justify-content-center overlay align-items-center">
      <div className="row content mb-5">
        <div className="col-12  py-5 contactme-heading">
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            cupiditate natus dolorum at molestiae incidunt repudiandae assumenda
            dolorem fugit! Quam quia minus quos commodi labore.
          </p>
        </div>
        
        <div className="col-lg-4 py-5 mb-5 d-lg-block d-none position-relative">
           <div>
            <span className="bg-light " style={localLinks}><i class="bi bi-geo-alt-fill text-success"></i></span>
              <p className="text-success  " style={localLinksheading}>Address</p>
           <a href="/" className=" text-decoration-none d-block mx-3 px-3 text-light position-absolute location-link">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus repellat eveniet, velit ipsum et odio. </a>
            </div>

            <div className="locallink-2">
            <span className="bg-light " style={localLinks}><i class="bi bi-telephone-fill text-success"></i></span>
              <p className="text-success  " style={localLinksheading}>Phone</p>
           <a href="/" className=" text-decoration-none d-block mx-3 px-3 text-light position-absolute location-link">+9234-77280767 </a>
            </div>

            <div className="locallink-3">
            <span className="bg-light " style={localLinks}><i class="bi bi-envelope text-success"></i></span>
              <p className="text-success  " style={localLinksheading}>Email</p>
           <a href="/" className=" text-decoration-none d-block mx-3 px-3 text-light position-absolute location-link">mohsinali.556380@gmail.com </a>
            </div>
          
        </div>
        <div className="col-lg-4 mb-5">
          <div className="bg-light contact-form px-4 py-5 rounded">
            <h4 className="text-dark">Send Message</h4>
            <form action="http://localhost:8000/server.php" method="SEND" onSubmit={(event)=>{handleSubmit(event);}}>
              <input type="text" name="username" id="username" placeholder="Full Name" className="bg-light py-1 my-2" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
              <input type="email" name="email" id="e-mail" placeholder="Email" className="bg-light py-1 my-2" value={email}
              onChange={(e)=>{setEmail(e.target.value)}} required/>
              <textarea  id="message" name="message" cols="10" rows="2" className="bg-light py-1 my-3" placeholder="Type Your Massage..." required></textarea>
              <button type="submit" className="btn btn-success mt-2 ">Send</button>

            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
