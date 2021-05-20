import React, { useContext, useState } from "react";
import "../Style/NewPatient.css";
import { AppContext } from "../Context/ContextProvider";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../MediaQuery/QueryNewPatient.css'
const logo = '/img/logo.png'

const NewPatient = () => {
  const {
    currentDoctor,
    doctors,
    setDoctors,
    checkIfPatientOnList,
    setCurrentDoctor,
  } = useContext(AppContext);
  const [error, setError] = useState(false);
  const history = useHistory();

  const [patient, setPatient] = useState({
    patientName: "",
    id: "",
    age: "",
    gender: "",
    WBC: 1,
    Neut: 1,
    Lymph: 1,
    RBC: 1,
    HCT: 1,
    Urea: 1,
    Hb: 1,
    CRT: 1,
    Iron: 1,
    HDL: 1,
    AP: 1,
    surgerie: false,
    sensitivity: false,
    smoke: false,
    chronicDiseases: false,
    middleEastern: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
    setError(false);
  };

  const addPatientToDoctor = (doc, p) => {
    debugger;
    let obj = {};
    let index = doctors.findIndex((obj) => doc.name === obj.name);
    obj = doctors[index];
    obj.patients.push(p);
    localStorage.setItem("Current-Doctor", JSON.stringify(obj));
    setCurrentDoctor(obj);
    let temp = [...doctors, obj];
    setDoctors(temp);
    localStorage.setItem("Doctors", JSON.stringify(doctors));
  };
  const updatePatientDetails = (p) => {
    debugger;
    var data = [...currentDoctor.patients];
    var index = data.findIndex((obj) => obj.id === p.id);
    data[index] = p;
    currentDoctor.patients = data;
    setDoctors(currentDoctor);
    localStorage.setItem("Current-Doctor", JSON.stringify(currentDoctor));
    localStorage.setItem("Doctors", JSON.stringify(doctors));
    console.table(doctors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    let patientOnList = false;
    if (checkIfPatientOnList(currentDoctor, patient)) {
      patientOnList = true;
      updatePatientDetails(patient);
      alert("Patient Updated!");
      history.push("/doctor");
    }
    if (patientOnList === false) {
      if (
        patient.patientName === "" ||
        patient.age < 1 ||
        patient.gender === "" ||
        patient.id.length !== 9
      ) {
        flag = false;
        setError(true);
      }
    }
    if (flag) {
      console.log(currentDoctor);
      addPatientToDoctor(currentDoctor, patient);
      alert("Patient Added!");
      history.push("/doctor");
    }
  };

  return (
    <>
      <form className="newPatient-container" onSubmit={handleSubmit} noValidate>
        <div className="footerNewPatient">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="title-form-patient">New Patient Form</h3>
        </div>
        <div className="input-div-personal">
          <h4>Personal Details</h4>
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            name="patientName"
            value={patient.patientName}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="ID"
            name="id"
            value={patient.id}
            onChange={handleChange}
          ></input>
          <input
            type="number"
            className="input"
            placeholder="Age"
            name="age"
            value={patient.age}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="input"
            placeholder="Gender"
            name="gender"
            value={patient.gender}
            onChange={handleChange}
          ></input>
        </div>
        <hr className="hr-line" />
        <div className="input-div-medical">
        <h4>Medical Details</h4>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Valus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="category">white Blood Cells</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="WBC"
                    name="WBC"
                    value={patient.WBC}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Neutrophil</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="Neut"
                    name="Neut"
                    value={patient.Neut}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Lymphocytes</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="Lymph"
                    name="Lymph"
                    value={patient.Lymph}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Red Blood Cells</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="RBC"
                    name="RBC"
                    value={patient.RBC}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr >
                <td className="category">HCT</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="HCT"
                    name="HCT"
                    value={patient.HCT}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>

              <tr>
                <td className="category">Urea</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="Urea"
                    name="Urea"
                    value={patient.Urea}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Hemoglobin</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="Hb"
                    name="Hb"
                    value={patient.Hb}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Creatinine</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="CRT"
                    name="CRT"
                    value={patient.CRT}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Iron</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="Iron"
                    name="Iron"
                    value={patient.Iron}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">High Density Lipoprotein</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="HDL"
                    name="HDL"
                    value={patient.HDL}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="category">Alkaline Phosphatase</td>
                <td className="value-inp">
                  <input
                    type="number"
                    className="input-med"
                    placeholder="AP"
                    name="AP"
                    value={patient.AP}
                    onChange={handleChange}
                    min="1"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="hr-line" />
        <h4>Medical questionnaire</h4>
        <div className="med-personal-details">
          <table className="med-personal-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Yes</th>
                <th>No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="question">Have you had any surgeries?</td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="surgerie"
                    value={true}
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="surgerie"
                    value={false}
                    onChange={handleChange}
                    defaultChecked
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="question">Is there a sensitivity to drugs?</td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="sensitivity"
                    value={true}
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="radio-col">
                  <input
                    type="radio"
                    name="sensitivity"
                    value={false}
                    onChange={handleChange}
                    defaultChecked
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="question">Do you smoke?</td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="smoke"
                    value={true}
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="smoke"
                    value={false}
                    onChange={handleChange}
                    defaultChecked
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="question">Do you have chronic diseases?</td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="chronicDiseases"
                    value={true}
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="chronicDiseases"
                    value={false}
                    onChange={handleChange}
                    defaultChecked
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="question">Are you from the Middle East?</td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="middleEastern"
                    value={true}
                    onChange={handleChange}
                  ></input>
                </td>
                <td className="radio-col">
                  <input
                    type="radio"
                    className="radio-input"
                    name="middleEastern"
                    value={false}
                    onChange={handleChange}
                    defaultChecked
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {error && <p>Please provid valid information.</p>}

        <div className="add-btn-div">
          <input type="submit" value="Add/Update" className="add-btn" />
          <NavLink to="/doctor">
            <button className="add-btn">Back</button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default NewPatient;
