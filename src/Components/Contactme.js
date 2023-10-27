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
            <form>
              <input type="text" id="username" placeholder="Full Name" className="bg-light py-1 my-2" required/>
              <input type="email" id="e-mail" placeholder="Email" className="bg-light py-1 my-2" required/>
              <textarea  id="message" cols="10" rows="2" className="bg-light py-1 my-3" placeholder="Type Your Massage..." required></textarea>
              <button className="btn btn-success mt-2 ">Send</button>

            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
