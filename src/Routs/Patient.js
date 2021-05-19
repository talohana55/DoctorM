import React, { useState } from "react";
import MedicalInfo from "../Components/MedicalInfo";
import PersonalInfo from "../Components/PersonalInfo";
import Diagnosis from "../Components/Diagnosis";
import Treatment from "../Components/Treatment";
import '../MediaQuery/QueryPatient.css'

const diagnosis = '/img/diagnosis.png'
const medicalInfo = '/img/medicalInfo.png'
const treatment = '/img/treatment.png'

const Patient = (props) => {
  const [displayDiagnosis, setDisplayDiagnosis] = useState(false);
  const [displayMedicalInfo, setDisplayMedicalInfo] = useState(false);
  const [displayTreatment, setDisplayTreatment] = useState(false);

  return (
    <>
      <div>
        <PersonalInfo value={props.value} id={props.id} />
        <div className="btn-div">
          <button
            className="btn1"
            onClick={() => setDisplayDiagnosis(!displayDiagnosis)}
          >
            <img src={diagnosis} alt="Logo" className="diag" />
            Diagnosis
          </button>
          <button
            className="btn1"
            onClick={() => setDisplayMedicalInfo(!displayMedicalInfo)}
          >
            <img src={medicalInfo} alt="Logo" className="diag" />
            Med Info
          </button>
          <button
            className="btn1"
            onClick={() => setDisplayTreatment(!displayTreatment)}
          >
            <img src={treatment} alt="Logo" className="diag2" />
            Treatment
          </button>
        </div>
        <div className="show-tables">
          {displayMedicalInfo && <MedicalInfo value={props.value} />}
          {displayDiagnosis && <Diagnosis value={props.value} />}
          {displayTreatment && <Treatment value={props.value} />}
        </div>
      </div>
    </>
  );
};

export default Patient;
