import myimage from "../images/profile-1.png"
const Home = () => {
    return ( 
        <div className="Home container-fluid  my-5">

          <div className="row home-row ">
          <div className="col-lg-5 text-lg-left text-center">
            
            <div className="my-5 mx-5   home-description">
            <h1 className="text-light">Mohsin ALi</h1>
            <p className=" sub">WEB DEVELOPER</p>
            <p className="text-light descrip">Step into the boundless realm of the Digital Frontier, where imagination seamlessly merges with the power of code, and every pixel is a canvas for crafting extraordinary online experiences.</p>
            <a href="/Projects" className="btn btn-success mt-3">My Works</a>
            </div>
            
            </div>
            <div className="col-lg-5 d-lg-flex d-none justify-content-center ">

            <img src={myimage} alt="profile-pic" />

            </div>
          </div>
        </div>
     );
}
 
export default Home;