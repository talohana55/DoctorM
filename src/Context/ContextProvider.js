import React, { createContext, useState } from "react";
export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([
    {
      name: "Tal ohana",
      id: "789789789",
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
          diseases: [{
            name: "",
            treatment: "",
          }]
        },
        {
          patientName: "Shimrit Cohen",
          id: "456456456",
          age: 70,
          gender: "female",
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
          diseases: [{
            name: "",
            treatment: "",
          }]
        },
        {
          patientName: "Dese Avera",
          id: "412486456",
          age: 22,
          gender: "female",
          WBC: 4600,
          Neut: 1380,
          Lymph: 1840,
          RBC: 5,
          HCT: 40,
          Urea: 20,
          Hb: 16,
          CRT: 0.7,
          Iron: 100,
          HDL: 55,
          AP: 90,
          surgerie: false,
          sensitivity: false,
          smoke: false,
          chronicDiseases: false,
          middleEastern: false,
          ethiopian: true,
          diseases: [{
            name: "",
            treatment: "",
          }]
        },
        {
          patientName: "Dona Mccurtny Cohen",
          id: "666999666",
          age: 45,
          gender: "female",
          WBC: 2000,
          Neut: 1200,
          Lymph: 800,
          RBC: 2,
          HCT: 10,
          Urea: 25,
          Hb: 10,
          CRT: 0.7,
          Iron: 60,
          HDL: 70,
          AP: 30,
          surgerie: false,
          sensitivity: false,
          smoke: false,
          chronicDiseases: false,
          middleEastern: true,
          ethiopian: false,
          diseases: [{
            name: "",
            treatment: "",
          }]
        },
      ],
    },
    {
      name: "Tali Tevlin",
      id: "222222222",
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
          diseases: [{
            name: "",
            treatment: "",
          }]
        },
        {
          patientName: "Mira Azrayev",
          id: "789456123",
          age: 16,
          gender: "female",
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
          diseases: [{
            name: "",
            treatment: "",
          }]
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
      name: "Infection",
      treatment: "Dedicated Antibiotics",
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

  const addToPersonalDisease = (DiseaseName, patient) => {
    let obj = {};
    let index = diseases.findIndex((x) => DiseaseName === x.name);
    obj = diseases[index];
    if (patient.diseases !== null) {
      if (!patient.diseases.some((item) => DiseaseName === item.name)) {
        let temp = [...patient.diseases, obj];
        patient.diseases = temp;
      }
    }
  };

  const [currentDoctor, setCurrentDoctor] = useState(null);

  const checkIfPatientOnList = (doc, pat) => {
    let index = doctors.findIndex((obj) => obj.id === doc.id);
    for (let j = 0; j < doctors[index].patients.length; j++) {
      if (doctors[index].patients[j].id === pat.id) {
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
    let minVal = (patient.WBC * 28) / 100;
    let maxVal = (patient.WBC * 54) / 100;
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
    let minVal = (patient.WBC * 36) / 100;
    let maxVal = (patient.WBC * 52) / 100;
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
    } else if (patient.Urea >= 17 && patient.Urea <= 43) {
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
    } else if (patient.gender === "male") {
      if (patient.Hb >= 12 && patient.Hb <= 18) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
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
    let crt = patient.CRT.toFixed(1);
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
    let femaleMinVal = 48;
    let femaleMaxVal = 128;
    if (patient.gender === "male") {
      if (patient.Iron >= 60 && patient.Iron <= 160) {
        result = "Good";
      } else if (patient.Iron < 60) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.Iron >= femaleMinVal && patient.Iron <= femaleMaxVal) {
        result = "Good";
      } else if (patient.Iron < femaleMinVal) {
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
        if (
          patient.HDL >= ethiopianMaleMinVal &&
          patient.HDL <= ethiopianMaleMaxVal
        ) {
          result = "Good";
        } else if (patient.HDL < ethiopianMaleMinVal) {
          result = "Low";
        } else {
          result = "High";
        }
      } else {
        if (
          patient.HDL >= ethiopianFemaleMinVal &&
          patient.HDL <= ethiopianFemaleMaxVal
        ) {
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
      addToPersonalDisease("Cancer", patient);
      addToPersonalDisease("Infection", patient);
      addToPersonalDisease("Blood disease", patient);
    } else if (result === "Low") {
      addToPersonalDisease("Cancer", patient);
      addToPersonalDisease("Viral disease", patient);
    }
    return result;
  };
  const getValue_Neutrophil = (patient) => {
    let minVal = (patient.WBC * 28) / 100;
    let maxVal = (patient.WBC * 54) / 100;
    let result = "";
    if (patient.Neut >= minVal && patient.Neut <= maxVal) {
      result = "Good";
    } else if (patient.Neut < minVal) {
      result = "Low";
      addToPersonalDisease("Disorder of blood formation / blood cells", patient);
      addToPersonalDisease("Infection", patient);
      addToPersonalDisease("Cancer", patient);
    } else {
      result = "High";
      addToPersonalDisease("Infection", patient);
    }
    return result;
  };
  const getValue_Lymph = (patient) => {
    let minVal = (patient.WBC * 36) / 100;
    let maxVal = (patient.WBC * 52) / 100;
    let result = "";
    if (patient.Lymph >= minVal && patient.Lymph <= maxVal) {
      result = "Good";
    } else if (patient.Lymph < minVal) {
      result = "Low";
    } else {
      result = "High";
      addToPersonalDisease("Infection", patient);
      addToPersonalDisease("Cancer", patient);
    }
    return result;
  };
  const getValue_RBC = (patient) => {
    let result = "";
    if (patient.RBC >= 4.5 && patient.RBC <= 6) {
      result = "Good";
    } else if (patient.RBC < 4.5) {
      result = "Low";
      addToPersonalDisease("Anemia", patient);
      addToPersonalDisease("Bleeding", patient);
    } else {
      result = "High";
      addToPersonalDisease("Lung Disease", patient);
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
        addToPersonalDisease("Anemia", patient);
        addToPersonalDisease("Bleeding", patient);
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
        addToPersonalDisease("Liver disease", patient);
      } else {
        result = "High";
        addToPersonalDisease("Dehydration", patient);
        addToPersonalDisease("Kidney disease", patient);
      }
    } else if (patient.Urea >= 17 && patient.Urea <= 43) {
      result = "Good";
    } else if (patient.Urea < 17) {
      result = "Low";
      addToPersonalDisease("Liver disease", patient);
    } else {
      result = "High";
      addToPersonalDisease("Dehydration", patient);
      addToPersonalDisease("Kidney disease", patient);
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
    } else if (patient.gender === "male") {
      if (patient.Hb >= 12 && patient.Hb <= 18) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.Hb >= 12 && patient.Hb <= 16) {
        result = "Good";
      } else if (patient.Hb < 12) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "Low") {
      addToPersonalDisease("Anemia", patient);
      addToPersonalDisease("Bleeding", patient);
      addToPersonalDisease("Hematologic Disorder", patient);
      addToPersonalDisease("Iron deficiency", patient);
    }
    return result;
  };
  const getValue_CRT = (patient) => {
    let result = "";
    let crt = patient.CRT.toFixed(1);
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
      addToPersonalDisease("Muscle diseases", patient);
      addToPersonalDisease("Increased consumption of meat", patient);
    } else if (result === "Low") {
      addToPersonalDisease("Malnutrition", patient);
    }
    return result;
  };
  const getValue_Iron = (patient) => {
    let result = "";
    let femaleMinVal = 48;
    let femaleMaxVal = 128;
    if (patient.gender === "male") {
      if (patient.Iron >= 60 && patient.Iron <= 160) {
        result = "Good";
      } else if (patient.Iron < 60) {
        result = "Low";
      } else {
        result = "High";
      }
    } else {
      if (patient.Iron >= femaleMinVal && patient.Iron <= femaleMaxVal) {
        result = "Good";
      } else if (patient.Iron < femaleMinVal) {
        result = "Low";
      } else {
        result = "High";
      }
    }
    if (result === "High") {
      addToPersonalDisease("Iron deficiency", patient);
    } else if (result === "Low") {
      addToPersonalDisease("Bleeding", patient);
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
        if (
          patient.HDL >= ethiopianMaleMinVal &&
          patient.HDL <= ethiopianMaleMaxVal
        ) {
          result = "Good";
        } else if (patient.HDL < ethiopianMaleMinVal) {
          result = "Low";
        } else {
          result = "High";
        }
      } else {
        if (
          patient.HDL >= ethiopianFemaleMinVal &&
          patient.HDL <= ethiopianFemaleMaxVal
        ) {
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
      addToPersonalDisease("Heart disease", patient);
      addToPersonalDisease("Adult diabetes Insulin", patient);
      addToPersonalDisease("Hyperlipidemia(blood lipids)", patient);
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
      addToPersonalDisease("Diseases of the biliary tract", patient);
      addToPersonalDisease("Hypothyroidism Propylthiouracil", patient);
      addToPersonalDisease("Use of various medications", patient);
    } else if (result === "Low") {
      addToPersonalDisease("Vitamin Deficiency", patient);
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
        checkIfPatientOnList,
        setCurrentDoctor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
