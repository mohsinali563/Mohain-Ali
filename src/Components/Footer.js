const Footer = () => {
    return ( <>
        <div className="Footer  row  ">
           <div className="col-lg-12 pb-3  pt-3 ">
            <h4 className="text-center text-light"><span className="text-success">Contact</span> On</h4>
            <div className="text-center">
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-github"></i></a>
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-whatsapp"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
           </div>
        </div>
        <div className="Lower-footer ">
            <p className=" py-1 d-flex align-items-center justify-content-center pt-3">©Copyright Mohsin Ali 2023</p>
           </div>
        </>
     );
}

export default Footer;