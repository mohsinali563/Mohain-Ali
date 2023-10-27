import aboutImage from "../images/about-pic.jpg"
const About = () => {
    return ( 
        <div className="About my-5 p-5 container-fluid rounded" id="about">
         <div className="row justify-content-center">
            <div className="col-lg-5 p-5 d-lg-block d-md-none d-none">
          <img src={aboutImage} className="aboutimage" alt="About-pic" />

            </div>
            <div className="col-lg-5 p-5 text-lg-left text-center">
               <h2 className="text-light about-heading">About <span className="text-success">Me</span></h2>
               <p className="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet odio provident expedita temporibus atque cum suscipit velit, perspiciatis possimus, dolores nostrum doloribus optio similique cupiditate aut. Unde accusantium animi mollitia vel deserunt architecto reprehenderit sapiente assumenda corrupti, asperiores hic illum iste quaerat aut ipsa placeat dolorum! Atque quisquam nihil iure!</p>
               <a href="#" className="btn btn-success btn-sm">Read More</a>
            </div>
         </div>
        </div>
     );
}
 
export default About;