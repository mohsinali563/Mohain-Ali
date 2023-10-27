const Skills = (props) => {
  
  const style1={
     width:props.per
  };
  return (
   
    <div className="Skills mb-4">
      <div className="skill-dis">
        <h3>{props.heading}</h3>
        <p>{props.per}</p>
      </div>
      <div className="box-border p-2  ">
        <div className="bg-light  position-relative" id="skill">
          <span class="percent" style={style1}  ></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
