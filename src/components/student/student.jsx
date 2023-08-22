import React from "react";

const Student = (props) => {
  console.log(props);
  return (
    <>
      <a href={props.url} target="blank">
        <h4>{props.name}</h4>
      </a>
      <p>Ex alumno: {props.isGraduate? "Sí" : "No"}</p>
    </>
  );
};

export default Student;
