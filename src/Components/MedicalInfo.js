import React from "react";
import "../Style/Patient.css";

const MedicalInfo = (props) => {

  return (
    <>
      <form className="patient-medical-table">
        <table>
          <tr>
            <th>Category</th>
            <th>Values</th>
          </tr>
          <tr>
            <td>white Blood Cells</td>
            <td>{props.value.WBC}</td>
          </tr>
          <tr>
            <td>Neutrophil</td>
            <td>{props.value.Neut}</td>
          </tr>
          <tr>
            <td>Lymphocytes</td>
            <td>{props.value.Lymph}</td>
          </tr>
          <tr>
            <td>Red Blood Cells</td>
            <td>{props.value.RBC}</td>
          </tr>
          <tr>
            <td>HCT</td>
            <td>{props.value.HCT}</td>
          </tr>
          <tr>
            <td>Urea</td>
            <td>{props.value.Urea}</td>
          </tr>
          <tr>
            <td>Hemoglobin</td>
            <td>{props.value.Hb}</td>
          </tr>
          <tr>
            <td>Creatinine</td>
            <td>{props.value.CRT}</td>
          </tr>
          <tr>
            <td>Iron</td>
            <td>{props.value.Iron}</td>
          </tr>
          <tr>
            <td>High Density Lipoprotein</td>
            <td>{props.value.HDL}</td>
          </tr>
          <tr>
            <td>Alkaline Phosphatase</td>
            <td>{props.value.AP}</td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default MedicalInfo;
