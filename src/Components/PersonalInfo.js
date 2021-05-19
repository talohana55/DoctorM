import React from "react";
import { jsPDF } from "jspdf";
import "../Style/Patient.css";
import '../MediaQuery/QueryPatient.css'

const PersonalInfo = (props) => {
  const doc = new jsPDF();
  doc.text(`${"Personal Information"}`, 10, 10);
  doc.text(`Name: ${props.value.patientName}`, 10, 30);
  doc.text(`ID: ${props.value.id}`, 10, 40);
  doc.text(`Age: ${props.value.age}`, 10, 50);
  doc.text(`Gender: ${props.value.gender}`, 10, 60);
  return (
    <>
      <div className="div-personal-info">
        <div className="footer1">
          <button
            className="pdf-btn"          
            onClick={() => {
              doc.save(`${props.value.patientName}.pdf`);
            }}
          >
            PDF
          </button>
          <span className="id" style={{ width: "20rem" }}>
            <strong>{props.id + 1}</strong>
          </span>
        </div>
        <span>
          <strong>Name: </strong> {props.value.patientName}
        </span>
        <span>
          <strong>ID: </strong>
          {props.value.id}
        </span>
        <span>
          <strong>Age: </strong>
          {props.value.age}
        </span>
        <span>
          <strong>Gender: </strong>
          {props.value.gender}
        </span>
      </div>
    </>
  );
};

export default PersonalInfo;
