import { useState } from "react";
import project1 from "../images/project1.png";

const Projects = () => {
  const headingStyle = {
    fontFamily: "'Kanit', sans-serif",
    fontSize: "50px",
  };

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="Projects  my-5 py-5 rounded">
      <div className="row container-fluid">
        <div className="col-12 text-center">
          <h1 className=" text-light" style={headingStyle}>
            My <span className="text-success">Projects</span>
          </h1>
          <p className="text-light project-des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            officiis dignissimos earum odio reprehenderit sint quos, aliquid
            explicabo debitis ipsam ratione quibusdam, in mollitia officia
            reiciendis rerum eveniet sit minus.
          </p>
        </div>
        <div className="col-12">
          <nav class="nav justify-content-center mt-5">
            <a
              class="nav-link btn btn-success mx-1 text-light"
              onClick={() => handleLinkClick(0)}
            >
              Portfolio
            </a>
            <a
              class="nav-link btn btn-success mx-1 text-light "
              onClick={() => handleLinkClick(1)}
            >
              Link
            </a>
            <a
              class="nav-link btn btn-success mx-1 text-light"
              onClick={() => handleLinkClick(2)}
            >
              Link
            </a>
          </nav>
        </div>

        <div
          className="col-12 text-center portfolio  container-fluid"
          style={{ display: activeLink === 0 ? "block" : "none" }}
        >
          <div className="row align-items-center portfolio-project">
            <div className="col-lg-3 my-5">
              <img src={project1} className="img-fluid  " />
            </div>
            <div className="col-lg-3 my-3">
              <img
                src={
                  "https://i.pinimg.com/736x/e8/c8/b0/e8c8b0adfadbc97aa96ff53e7392738e.jpg"
                }
                className="img-fluid  "
              />
            </div>
            <div className="col-lg-3 my-3">
              <img
                src={
                  "data:image/jpeg;base64,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"
                }
                className="img-fluid "
              />
            </div>
          </div>
        </div>
        <section
          className="col-12"
          style={{ display: activeLink === 1 ? "block" : "none" }}
        >
          Section 2
        </section>
        <section
          className="col-12"
          style={{ display: activeLink === 2 ? "block" : "none" }}
        >
          Section 3
        </section>
      </div>
    </div>
  );
};

export default Projects;
