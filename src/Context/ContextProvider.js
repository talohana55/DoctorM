import React, { createContext, useState } from "react";
export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([
    {
      name: "Tal ohana",
      id: "1",
      license: 307833,
      userName: "docTal12",
      password: "tal1234$$",
      patients: [
        {
          patientName: "moshe yacov",
          id: "123123123",
          age: 58,
          gender: "male",
          WBC: 4300,
          Neut: 333,
          Lymph: 234234,
          RBC: 100,
          HCT: 67,
          Urea: 1321,
          Hb: 3,
          CRT: 2331,
          Iron: 345,
          HDL: 789,
          AP: 2342,
          surgerie: false,
          sensitivity: false,
          smoke: false,
          chronicDiseases: false,
          middleEastern: false,
          ethiopian: true,
        },
        {
          patientName: "Shimrit Cohen",
          id: "456456456",
          age: 70,
          gender: "fmale",
          WBC: 8000,
          Neut: 1200,
          Lymph: 900,
          RBC: 3,
          HCT: 43,
          Urea: 50,
          Hb: 15,
          CRT: 2,
          Iron: 65,
          HDL: 20,
          AP: 100,
          surgerie: true,
          sensitivity: true,
          smoke: true,
          chronicDiseases: false,
          middleEastern: true,
          ethiopian: false,

        },
      ],
    },
    {
      name: "Tali Tevlin",
      id: "2",
      license: 546125,
      userName: "docTalit",
      password: "tal1234$$",
      patients: [
        {
          patientName: "alexsander mokdon",
          id: "528456951",
          age: 27,
          gender: "male",
          WBC: 4300,
          Neut: 333,
          Lymph: 234234,
          RBC: 100,
          HCT: 23,
          Urea: 1321,
          Hb: 3,
          CRT: 2331,
          Iron: 345,
          HDL: 789,
          AP: 2342,
          surgerie: false,
          sensitivity: false,
          smoke: false,
          chronicDiseases: false,
          middleEastern: false,
          ethiopian: false,

        },
        {
          patientName: "Mira Azrayev",
          id: "789456123",
          age: 16,
          gender: "fmale",
          WBC: 8000,
          Neut: 1200,
          Lymph: 900,
          RBC: 3,
          HCT: 10,
          Urea: 50,
          Hb: 15,
          CRT: 2,
          Iron: 65,
          HDL: 20,
          AP: 100,
          surgerie: true,
          sensitivity: false,
          smoke: true,
          chronicDiseases: false,
          middleEastern: true,
          ethiopian: false,

        },
      ],
    },
  ]);
  const [diseases, setDiseases] = useState([
    {
      name: "Anemia",
      treatment: "Two pills of 10 mg of B12 a day for a month",
    },
    {
      name: "Diet",
      treatment: "To coordinate an appointment with a nutritionist",
    },
    {
      name: "Bleeding",
      treatment: "to evacuate urgently to the hospital",
    },
    {
      name: "Hyperlipidemia(blood lipids)",
      treatment:
        "to schedule an appointment with a nutritionist, 5 mg of Simobil pill per day for a week",
    },
    {
      name: "Disorder of blood formation / blood cells",
      treatment:
        "pill 10 mg of B12 a day for a month , 5 mg pill of folic acid a day for a month",
    },
    {
      name: "Hematologic Disorder",
      treatment:
        "Injection of a hormone to encourage red blood cell production",
    },
    {
      name: "Iron poisoning",
      treatment: "to evacuate to hospital",
    },
    {
      name: "Dehydration",
      treatment: "Complete rest while lying down, returning fluids to drinking",
    },
    {
      name: "Dedicated",
      treatment: "antibiotic infection",
    },
    {
      name: "Vitamin Deficiency",
      treatment: "Referral for a blood test to identify the missing vitamins",
    },
    {
      name: "Viral disease",
      treatment: "to rest at home",
    },
    {
      name: "Diseases of the biliary tract",
      treatment: "Referral to surgical treatment",
    },
    {
      name: "Heart disease",
      treatment: "to schedule an appointment with a nutritionist",
    },
    {
      name: "Blood disease",
      treatment: "A combination of cyclophosphamide and corticosteroids",
    },
    {
      name: "Liver disease",
      treatment: "Referral to a specific diagnosis for treatment",
    },
    {
      name: "Kidney disease",
      treatment: "balances blood sugar levels",
    },
    {
      name: "Iron deficiency",
      treatment: "Two 10 mg pills of B12 a day for a month",
    },
    {
      name: "Muscle diseases",
      treatment: "Two pills 5 mg of Altman c3 turmeric a day for a month",
    },
    {
      name: "Smokers",
      treatment: "quit smoking",
    },
    {
      name: "Lung Disease",
      treatment: "Stop Smoking / Referral for X-ray of the lungs",
    },
    {
      name: "Hypothyroidism Propylthiouracil",
      treatment: "reduces hypothyroidism",
    },
    {
      name: "Adult diabetes Insulin",
      treatment: "adjustment for the patient",
    },
    {
      name: "Cancer",
      treatment: "Entrectinib",
    },
    {
      name: "Increased consumption of meat",
      treatment: "to coordinate an appointment with a nutritionist",
    },
    {
      name: "Use of various medications",
      treatment:
        "Refer to the family doctor for a match between the medications",
    },
    {
      name: "Malnutrition",
      treatment: "Coordinate an appointment with a nutritionist",
    },
  ]);
  const [personalDiseases, setPersonalDiseases] = useState([
    {
      name: "",
      treatment: "",
    },
  ]);
  const addToPersonalDisease = (DiseaseName) => {
    let obj = {};
    let index = diseases.findIndex((obj) => DiseaseName === obj.name);
    obj = diseases[index];
    if (!personalDiseases.some((item) => DiseaseName === item.name)) {
      let temp = [...personalDiseases, obj];
      setPersonalDiseases(temp);
    }
    console.table(personalDiseases);
  };
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const checkIfPatientOnList = (doc, pat) => {
    let index = doctors.findIndex((obj) => obj.id === doc.id);
    for (let j = 0; j < doctors[index].patients.length; j++) {
      if (doctors[index].patients[j].patientName === pat.patientName) {
        return true;
      }
    }

    return false;
  };
  const addCurrentDoctor = (doc) => {
    localStorage.setItem("Current-Doctor", JSON.stringify(doc));
    setCurrentDoctor(doc);
  };
  const addDoctor = (doctor) => {
    let temp = [...doctors, doctor];
    localStorage.setItem("Doctors", JSON.stringify(temp));
    setDoctors(temp);
  };
  const checkIfContainNumber = (name) => {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
      if (/^\d+$/.test(name[i])) {
        count++;
      }
    }
    if (count <= 2) {
      return true;
    }
    return false;
  };
  const currectUserName = (username) => {
    let flag = true;
    if (
      !checkIfContainNumber(username) ||
      username.length < 6 ||
      username.length > 8
    ) {
      alert("Username length Invalid!");
      flag = false;
    }
    return flag;
  };
  const currectPassword = (pass) => {
    let flag = true;
    if (pass.length < 8 || pass.length > 10) {
      alert("Password length Invalid!");
      flag = false;
    }
    if (!/\d/.test(pass)) {
      alert("Password must contain number!");
      flag = false;
    }
    if (!/[a-zA-Z]/g.test(pass)) {
      alert("Password must contain letter!");
      flag = false;
    }
    if (!/[|\\/~^:,;?!&%$@*+]/.test(pass)) {
      alert("Username must contain special symbol!");
      flag = false;
    }
    return flag;
  };

  const testWBC = (patient) => {
    let wbc = patient.WBC;
    let result = "";
    if (patient.age >= 18) {
      if (wbc >= 4500 && wbc <= 11000) {
        result = "Good";
      } else if (wbc < 4500) {
        result = "Low";
      } else {
        result = "High";
      }
    } else if (patient.age >= 4 && patient.age <= 17) {
      if (wbc >= 5500 && wbc <= 15500) {
        result = "Good";
      } else if (wbc < 5500) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (wbc >= 6000 && wbc <= 17500) {
        result = "Good";
      } else if (wbc < 6000) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      return "Indicate viral disease, immune system failure and in very rare cases cancer";
    } else if (result === "High") {
      return "Most often indicate the presence of an infection, if there is a fever. In other cases, very rare, may Very high values ​​indicate blood disease or cancer";
    } else {
      return "Good";
    }
  };
  const testNeutrophil = (patient) => {
    let minVal = (patient.wbc * 28) / 100;
    let maxVal = (patient.wbc * 54) / 100;
    let result = "";
    if (patient.Neut >= minVal && patient.Neut <= maxVal) {
      result = "Good";
    } else if (patient.Neut < minVal) {
      result = "Low";
    } else {
      result = "High";
    }
    if (result === "Low") {
      return "Indicate a disorder in the formation of blood, a tendency to bacterial infections and in rare cases - a process cancerous.";
    } else if (result === "High") {
      return "Most often indicate a bacterial infection";
    } else {
      return "Good";
    }
  };
  const testLymph = (patient) => {
    let minVal = (patient.wbc * 36) / 100;
    let maxVal = (patient.wbc * 52) / 100;
    let result = "";
    if (patient.Lymph >= minVal && patient.Lymph <= maxVal) {
      result = "Good";
    } else if (patient.Lymph < minVal) {
      result = "Low";
    } else {
      result = "High";
    }
    if (result === "Low") {
      return "Indicate a problem in the formation of blood cells.";
    } else if (result === "High") {
      return "May indicate a prolonged bacterial infection or lymphoma cancer.";
    } else {
      return "Good";
    }
  };
  const testRBC = (patient) => {
    let result = "";
    if (patient.RBC >= 4.5 && patient.RBC <= 6) {
      result = "Good";
    } else if (patient.RBC < 4.5) {
      result = "Low";
    } else {
      result = "High";
    }
    if (result === "Low") {
      return "May indicate anemia or severe bleeding.";
    } else if (result === "High") {
      return "May indicate a disorder in the blood production system. High levels were also observed in smokers and in patients In lung diseases.";
    } else {
      return "Good";
    }
  };
  const testHCT = (patient) => {
    let result = "";
    if (patient.gender === "male") {
      if (patient.HCT >= 37 && patient.HCT <= 54) {
        result = "Good";
      } else if (patient.HCT < 37) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.HCT >= 33 && patient.HCT <= 47) {
        result = "Good";
      } else if (patient.HCT < 33) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      return "Most often indicate bleeding or anemia.";
    } else if (result === "High") {
      return "Common in smokers.";
    } else {
      return "Good";
    }
  };
  const testUrea = (patient) => {
    let result = "";
    if (patient.middleEastern) {
      let minVal = Math.round(17 * 1.1);
      let maxVal = Math.round(46 * 1.1);
      if (patient.Urea >= minVal && patient.Urea <= maxVal) {
        result = "Good";
      } else if (patient.Urea < minVal) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    else if (patient.Urea >= 17 && patient.Urea <= 43) {
      result = "Good";
    } else if (patient.Urea < 17) {
      result = "Low";
    } else {
      result = "High";
    }

    if (result === "Low") {
      return "Malnutrition, low-protein diet or liver disease. It should be noted that during pregnancy the level of urination decreases.";
    } else if (result === "High") {
      return "May indicate kidney disease, dehydration or a high-protein diet.";
    } else {
      return "Good";
    }
  };
  const testHb = (patient) => {
    let result = "";
    if (patient.age >= 0 && patient.age <= 17) {
      if (patient.Hb >= 11.5 && patient.Hb <= 15.5) {
        result = "Good";
      } else if (patient.Hb < 11.5) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    else if (patient.gender === "male") {

      if (patient.Hb >= 12 && patient.Hb <= 18) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    else {
      if (patient.Hb >= 12 && patient.Hb <= 16) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      return "Indicates anemia. This can be due to a hematologic disorder, iron deficiency and bleeding.";
    } else {
      return "Good";
    }
  };
  const testCRT = (patient) => {
    let result = "";
    let crt = parseInt(patient.CRT).toFixed(1);
    if (patient.age >= 0 && patient.age <= 2) {
      if (crt >= 0.2 && crt <= 0.5) {
        result = "Good";
      } else if (crt < 0.2) {
        result = "Low";
      } else {
        result = "High";
      }
    } else if (patient.age >= 3 && patient.age <= 17) {
      if (crt >= 0.5 && crt <= 1) {
        result = "Good";
      } else if (crt < 0.5) {
        result = "Low";
      } else {
        result = "High";
      }
    } else if (patient.age >= 18 && patient.age <= 59) {
      if (crt >= 0.6 && crt <= 1) {
        result = "Good";
      } else if (crt < 0.6) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (crt >= 0.6 && crt <= 1.2) {
        result = "Good";
      } else if (crt < 0.6) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      return "Are most commonly seen in patients with very poor muscle mass and malnourished people who do not consume enough protein.";
    } else if (result === "High") {
      return "May indicate a kidney problem and in severe cases kidney failure. High values ​​are possible Also found in diarrhea and vomiting (causes of increased muscle breakdown and high levels of creatinine), muscle diseases And increased consumption of meat.";
    } else {
      return "Good";
    }
  };
  const testIron = (patient) => {
    let result = "";
    let fmaleMinVal = 48;
    let fmaleMaxVal = 128;
    if (patient.gender === "male") {
      if (patient.Iron >= 60 && patient.Iron <= 160) {
        result = "Good";
      } else if (patient.Iron < 60) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    else {
      if (patient.Iron >= fmaleMinVal && patient.Iron <= fmaleMaxVal) {
        result = "Good";
      } else if (patient.Iron < fmaleMinVal) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      return "Usually indicates an inadequate diet or an increase in the need for iron (for example during pregnancy) or blood loss Following bleeding.";
    } else if (result === "High") {
      return "May indicate iron poisoning.";
    } else {
      return "Good";
    }
  };
  const testHDL = (patient) => {
    let result = "";
    let ethiopianMaleMinVal = 34;
    let ethiopianMaleMaxVal = 74;
    let ethiopianFemaleMinVal = 41;
    let ethiopianFemaleMaxVal = 98;
    if (patient.ethiopian) {
      if (patient.gender === "male") {
        if (patient.HDL >= ethiopianMaleMinVal && patient.HDL <= ethiopianMaleMaxVal) {
          result = "Good";
        } else if (patient.HDL < ethiopianMaleMinVal) {
          result = "Low";
        } else {
          result = "High";
        }
      } else {
        if (patient.HDL >= ethiopianFemaleMinVal && patient.HDL <= ethiopianFemaleMaxVal) {
          result = "Good";
        } else if (patient.HDL < ethiopianFemaleMinVal) {
          result = "Low";
        } else {
          result = "High";
        }
      }
    } else {
      if (patient.gender === "male") {
        if (patient.HDL >= 29 && patient.HDL <= 62) {
          result = "Good";
        } else if (patient.HDL < 29) {
          result = "Low";
        } else {
          result = "High";
        }
      } else {
        if (patient.HDL >= 34 && patient.HDL <= 82) {
          result = "Good";
        } else if (patient.HDL < 34) {
          result = "Low";
        } else {
          result = "High";
        }
      }
    }
    if (result === "Low") {
      return "May indicate a risk of heart disease, hyperlipidemia (hyperlipidemia) or adult-onset diabetes.";
    } else if (result === "High") {
      return "Are usually harmless. Exercise raises good cholesterol levels.";
    } else {
      return "Good";
    }
  };
  const testAP = (patient) => {
    let result = "";
    if (patient.middleEastern) {
      if (patient.AP >= 60 && patient.AP <= 120) {
        result = "Good";
      } else if (patient.AP < 60) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.AP >= 30 && patient.AP <= 90) {
        result = "Good";
      } else if (patient.AP < 30) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      return "May indicate a poor diet that lacks protein. Deficiency in vitamins like vitamin, vitamin B12, C Vitamin B6 folic acid.";
    } else if (result === "High") {
      return "May indicate liver disease, biliary tract disease, pregnancy, hypothyroidism or Use of various medications.";
    } else {
      return "Good";
    }
  };
  const getValue_WBC = (patient) => {

    let wbc = patient.WBC;
    let result = "";
    if (patient.age >= 18) {
      if (wbc >= 4500 && wbc <= 11000) {
        result = "Good";
      } else if (wbc < 4500) {
        result = "Low";
      } else {
        result = "High";
      }
    } else if (patient.age >= 4 && patient.age <= 17) {
      if (wbc >= 5500 && wbc <= 15500) {
        result = "Good";
      } else if (wbc < 5500) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (wbc >= 6000 && wbc <= 17500) {
        result = "Good";
      } else if (wbc < 6000) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "High") {
      addToPersonalDisease("Cancer");
      addToPersonalDisease("Dedicated");
      addToPersonalDisease("Blood disease");
    } else if (result === "Low") {
      addToPersonalDisease("Cancer");
      addToPersonalDisease("Viral disease");
    }
    return result;
  };
  const getValue_Neutrophil = (patient) => {
    let minVal = (patient.wbc * 28) / 100;
    let maxVal = (patient.wbc * 54) / 100;
    let result = "";
    if (patient.Neut >= minVal && patient.Neut <= maxVal) {
      result = "Good";
    } else if (patient.Neut < minVal) {
      result = "Low";
      addToPersonalDisease("Disorder of blood formation / blood cells");
      addToPersonalDisease("Dedicated");
      addToPersonalDisease("Cancer");
    } else {
      result = "High";
      addToPersonalDisease("Dedicated");
    }
    return result;
  };
  const getValue_Lymph = (patient) => {
    let minVal = (patient.wbc * 36) / 100;
    let maxVal = (patient.wbc * 52) / 100;
    let result = "";
    if (patient.Lymph >= minVal && patient.Lymph <= maxVal) {
      result = "Good";
    } else if (patient.Lymph < minVal) {
      result = "Low";
    } else {
      result = "High";
      addToPersonalDisease("Dedicated");
      addToPersonalDisease("Cancer");
    }
    return result;
  };
  const getValue_RBC = (patient) => {
    let result = "";
    if (patient.RBC >= 4.5 && patient.RBC <= 6) {
      result = "Good";
    } else if (patient.RBC < 4.5) {
      result = "Low";
      addToPersonalDisease("Anemia");
      addToPersonalDisease("Bleeding");
    } else {
      result = "High";
      addToPersonalDisease("Lung Disease");
    }
    return result;
  };
  const getValue_HCT = (patient) => {
    let result = "";
    if (patient.gender === "male") {
      if (patient.HCT >= 37 && patient.HCT <= 54) {
        result = "Good";
      } else if (patient.HCT < 37) {
        result = "Low";
        addToPersonalDisease("Anemia");
        addToPersonalDisease("Bleeding");
      } else {
        result = "High";
      }
    } else {
      if (patient.HCT >= 33 && patient.HCT <= 47) {
        result = "Good";
      } else if (patient.HCT < 33) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    return result;
  };
  const getValue_Urea = (patient) => {
    let result = "";
    if (patient.middleEastern) {
      let minVal = Math.round(17 * 1.1);
      let maxVal = Math.round(46 * 1.1);
      if (patient.Urea >= minVal && patient.Urea <= maxVal) {
        result = "Good";
      } else if (patient.Urea < minVal) {
        result = "Low";
        addToPersonalDisease("Liver disease");
      } else {
        result = "High";
        addToPersonalDisease("Dehydration");
        addToPersonalDisease("Kidney disease");
      }
    } else if (patient.Urea >= 17 && patient.Urea <= 43) {
      result = "Good";
    } else if (patient.Urea < 17) {
      result = "Low";
      addToPersonalDisease("Liver disease");
    } else {
      result = "High";
      addToPersonalDisease("Dehydration");
      addToPersonalDisease("Kidney disease");
    }
    return result;
  };
  const getValue_Hb = (patient) => {
    let result = "";
    if (patient.age >= 0 && patient.age <= 17) {
      if (patient.Hb >= 11.5 && patient.Hb <= 15.5) {
        result = "Good";
      } else if (patient.Hb < 11.5) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    else if (patient.gender === "male") {
      if (patient.Hb >= 12 && patient.Hb <= 18) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    else {
      if (patient.Hb >= 12 && patient.Hb <= 16) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      addToPersonalDisease("Anemia");
      addToPersonalDisease("Bleeding");
      addToPersonalDisease("Hematologic Disorder");
      addToPersonalDisease("Iron deficiency");
    }
    return result;
  };
  const getValue_CRT = (patient) => {
    let result = "";
    let crt = parseInt(patient.CRT).toFixed(1);
    if (patient.age >= 0 && patient.age <= 2) {
      if (crt >= 0.2 && crt <= 0.5) {
        result = "Good";
      } else if (crt < 0.2) {
        result = "Low";
      } else {
        result = "High";
      }
    } else if (patient.age >= 3 && patient.age <= 17) {
      if (crt >= 0.5 && crt <= 1) {
        result = "Good";
      } else if (crt < 0.5) {
        result = "Low";
      } else {
        result = "High";
      }
    } else if (patient.age >= 18 && patient.age <= 59) {
      if (crt >= 0.6 && crt <= 1) {
        result = "Good";
      } else if (crt < 0.6) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (crt >= 0.6 && crt <= 1.2) {
        result = "Good";
      } else if (crt < 0.6) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "High") {
      addToPersonalDisease("Muscle diseases");
      addToPersonalDisease("Increased consumption of meat");
    } else if (result === "Low") {
      addToPersonalDisease("Malnutrition");
    }
    return result;
  };
  const getValue_Iron = (patient) => {
    let result = "";
    let fmaleMinVal = 48;
    let fmaleMaxVal = 128;
    if (patient.gender === "male") {
      if (patient.Iron >= 60 && patient.Iron <= 160) {
        result = "Good";
      } else if (patient.Iron < 60) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.Iron >= fmaleMinVal && patient.Iron <= fmaleMaxVal) {
        result = "Good";
      } else if (patient.Iron < fmaleMinVal) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "High") {
      addToPersonalDisease("Iron deficiency");
    } else if (result === "Low") {
      addToPersonalDisease("Bleeding");
    }
    return result;
  };
  const getValue_HDL = (patient) => {
    let result = "";
    let ethiopianMaleMinVal = 34;
    let ethiopianMaleMaxVal = 74;
    let ethiopianFemaleMinVal = 41;
    let ethiopianFemaleMaxVal = 98;
    if (patient.ethiopian) {
      if (patient.gender === "male") {
        if (patient.HDL >= ethiopianMaleMinVal && patient.HDL <= ethiopianMaleMaxVal) {
          result = "Good";
        } else if (patient.HDL < ethiopianMaleMinVal) {
          result = "Low";
        } else {
          result = "High";
        }
      } else {
        if (patient.HDL >= ethiopianFemaleMinVal && patient.HDL <= ethiopianFemaleMaxVal) {
          result = "Good";
        } else if (patient.HDL < ethiopianFemaleMinVal) {
          result = "Low";
        } else {
          result = "High";
        }
      }
    } else {
      if (patient.gender === "male") {
        if (patient.HDL >= 29 && patient.HDL <= 62) {
          result = "Good";
        } else if (patient.HDL < 29) {
          result = "Low";
        } else {
          result = "High";
        }
      } else {
        if (patient.HDL >= 34 && patient.HDL <= 82) {
          result = "Good";
        } else if (patient.HDL < 34) {
          result = "Low";
        } else {
          result = "High";
        }
      }
    }
    if (result === "Low") {
      addToPersonalDisease("Heart disease");
      addToPersonalDisease("Adult diabetes Insulin");
    }
    return result;
  };
  const getValue_AP = (patient) => {
    let result = "";
    if (patient.middleEastern) {
      if (patient.AP >= 60 && patient.AP <= 120) {
        result = "Good";
      } else if (patient.AP < 60) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.AP >= 30 && patient.AP <= 90) {
        result = "Good";
      } else if (patient.AP < 30) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "High") {
      addToPersonalDisease("Diseases of the biliary tract");
      addToPersonalDisease("Hypothyroidism Propylthiouracil");
      addToPersonalDisease("Use of various medications");
    } else if (result === "Low") {
      addToPersonalDisease("Vitamin Deficiency");
    }
    return result;
  };
  return (
    <AppContext.Provider
      value={{
        doctors,
        setDoctors,
        checkIfContainNumber,
        addDoctor,
        currentDoctor,
        addCurrentDoctor,
        currectUserName,
        currectPassword,
        testHCT,
        testLymph,
        testNeutrophil,
        testRBC,
        testWBC,
        testUrea,
        testCRT,
        testIron,
        testHb,
        testHDL,
        testAP,
        getValue_WBC,
        getValue_Neutrophil,
        getValue_Lymph,
        getValue_RBC,
        getValue_HCT,
        getValue_Urea,
        getValue_Hb,
        getValue_CRT,
        getValue_Iron,
        getValue_HDL,
        getValue_AP,
        diseases,
        setDiseases,
        personalDiseases,
        checkIfPatientOnList,
        setCurrentDoctor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
