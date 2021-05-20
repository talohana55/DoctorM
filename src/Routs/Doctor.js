import React, { useContext, useState, useEffect } from "react";
import "../Style/Doctor.css";
import "../MediaQuery/QueryDoctor.css";
import { AppContext } from "../Context/ContextProvider";
import { useHistory } from "react-router-dom";
import Patient from "./Patient";
import moment from "moment";

const logo = '/img/logo.png'
const docImg = '/img/docImg.png'
const license = '/img/license.png'
const patientImg = '/img/patientImg.png'




const Doctor = () => {
  const { setCurrentDoctor, setDoctors } = useContext(AppContext);
  const [displayPatients, setDisplayPatients] = useState(false);
  var d = new Date();
  let today = d.toLocaleDateString();
  today = moment(today, "DD/MM/YYYY").format("DD-MM-YYYY");
  const history = useHistory();
  let Data = JSON.parse(localStorage.getItem("Current-Doctor"));
  const handleExit = () => {
    history.push("/");
    localStorage.removeItem("Current-Doctor");
    alert("Good Bye!");
    setCurrentDoctor(null);
  };

  useEffect(() => {
    const DoctorsData = JSON.parse(localStorage.getItem("Doctors"));
    const currentDoctorData = JSON.parse(
      localStorage.getItem("Current-Doctor")
    );
    if (DoctorsData) {
      setDoctors(DoctorsData);
    }
    if (currentDoctorData) {
      setCurrentDoctor(currentDoctorData);
    }
  }, [setCurrentDoctor, setDoctors]);


  return (
    <>
      <div className="doctor-container">
        <div className="footer1">
          <img src={logo} alt="Logo" className="logo" />
          <h4 className="date">{today ? today : ""}</h4>
          <button className="exit-btn" onClick={handleExit}>
            EXIT
          </button>
        </div>
        <div className="footer2">
          <h2 className="h2">Welcome Doctor</h2>
          <hr className="hr-line" />
        </div>

        <div className="doc-details">
          <div className="doctorData">
            <img src={docImg} alt="Logo" className="logoDoc" />
            <strong style={{ color: "#2a77ce" }}>Dr. {Data.name}</strong>
          </div>
          <span className="doctorData">
            <img src={license} alt="Logo" className="logoDoc" />{" "}
            <strong style={{ color: "#2a77ce" }}>{Data.license}</strong>
          </span>
          <span className="doctorData">
            <img src={patientImg} alt="Logo" className="logoDoc" />{" "}
            <strong style={{ color: "orange" }}>{Data.patients.length}</strong>
          </span>
        </div>
        <div className="buttons-div">
          <button
            className="btn"
            onClick={() => setDisplayPatients(!displayPatients)}
          >
            Patient List
          </button>
          <button className="btn" onClick={() => history.push("/newpatient")}>
            Add Patient
          </button>
        </div>
        {displayPatients && (
          <div className="patients-list-div">
            {Data.patients.map((pat, i) => {
              return (
                <div className="div-personal">
                  <Patient value={pat} id={i} />
                  <hr className="hr-lineEndPatient" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Doctor;
