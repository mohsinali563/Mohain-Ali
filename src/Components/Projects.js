import project1 from "../images/project1.png"
import project2 from "../images/project3.jpg"
import project3 from "../images/project2.jpg"
const Projects = () => {
  return (
    <div className="projects py-3 px-2 ">
      <div className="row ">
        <div className="col-12 text-center mt-4 mb-5 project-head">
          <h2 className="text-light ">
            My <span className="text-success">Projects</span>
          </h2>
          <p className="text-light">
            These are some of the dynamic web app which i have created. They are fully Responsive and Functional websites that seamlessly adapts to various devices and screen sizes.
          </p>
        </div>
        <div className="col-lg-12 mb-5">
          <div className="row project-cards">
            <div className="col-lg-3">
              <img className="img-fluid  mb-4" src={project1} alt="portfolio" />
            </div>
            <div className="col-lg-3">
              <img className="img-fluid mb-4" src={project2} alt="portfolio" />
            </div>
            <div className="col-lg-3">
              <img className="img-fluid mb-4" src={project3} alt="portfolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projects;
