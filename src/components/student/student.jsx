import React from "react";

const Student = ({info}) => {

  return (
    <>
      <a href={info.url} target="blank">
        <h4>{info.name}</h4>
      </a>
      <p>Ex alumno: {info.isGraduate? "Sí" : "No"}</p>
    </>
  );
};

export default Student;
