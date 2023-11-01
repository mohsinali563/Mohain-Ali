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
               <p className="text-light about-des">As a seasoned web developer, I specialize in crafting dynamic, user-friendly websites that blend cutting-edge technology with sleek design. With 1 year of experience, I've successfully delivered a diverse range of projects, from e-commerce platforms to custom web applications.My expertise includes front-end development, proficiency in languages such as HTML, CSS, JavaScript, and various frameworks and libraries like Bootstrap and React. I'm passionate about creating responsive, cross-browser compatible websites that not only look great but also function seamlessly</p>
               <a href="#" className="btn btn-success btn-sm">Read More</a>
            </div>
         </div>
        </div>
     );
}
 
export default About;