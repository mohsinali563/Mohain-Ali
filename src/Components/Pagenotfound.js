const Pagenotfound = () => {
    const notfoundPage={
        fontSize:"30px",
        fontWeight:"bold",
        height:"25rem"
    }
    return ( 
        <div className="pagenotfound my-5 py-5 d-flex justify-content-center align-items-center" style={notfoundPage}>
            <p className="text-danger mx-auto "  >Page Not Found</p>
        </div>
     );
}
 
export default Pagenotfound;