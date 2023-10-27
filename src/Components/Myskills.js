import Skills from "./Skills";

const Myskills = () => {
 
  return (
    <div className="Skills mb-5 p-3 " id="Myskills">
      <div className="row container-fluid">
        <div className="col-12 skill-head pb-5 text-center">
          <h2 className=" text-light p-1">
            My <span className="text-success ">Skills</span>
          </h2>
          <p className="text-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            cumque nemo et sunt aliquid quos veniam praesentium dolor excepturi
            cum nulla, dolores fugiat, modi cupiditate perspiciatis eligendi
            consequatur maxime asperiores.
          </p>
        </div>
        <div className="col-lg-12 ">
          <div className="row container-fluid justify-content-center">
            <div className="col-lg-5">
              <Skills heading="HTML" per="90%"  />
              <Skills heading="CSS" per="80%"  />
              <Skills heading="Bootstrap 5" per="80%"  />
            </div>
            <div className="col-lg-5 ">
              <Skills heading="JS" per="70%" />
              <Skills heading="JSX" per="60%" />
              <Skills heading="React" per="70%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
