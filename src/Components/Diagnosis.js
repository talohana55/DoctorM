import React, { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
const Diagnosis = (props) => {
  const {
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
  } = useContext(AppContext);

  let WBC_Results = testWBC(props.value);
  let Neutrophil_Results = testNeutrophil(props.value);
  let Lymph_Results = testLymph(props.value);
  let RBC_Results = testRBC(props.value);
  let HCT_Results = testHCT(props.value);
  let Urea_Results = testUrea(props.value);
  let Hb_Results = testHb(props.value);
  let CRT_Results = testCRT(props.value);
  let Iron_Results = testIron(props.value);
  let HDL_Results = testHDL(props.value);
  let AP_Results = testAP(props.value);
  console.log(CRT_Results);
  console.log(CRT_Results);
  console.log(CRT_Results);
  const doc = new jsPDF();
  doc.autoTable({ html: "#diag-table" });
  doc.autoTable({
    head: [["Category", "Values", "Cause"]],
    body: [
      ["white Blood Cells", props.value.WBC, WBC_Results],
      ["Neutrophil", props.value.Neut, Neutrophil_Results],
      ["Lymphocytes", props.value.Lymph, Lymph_Results],
      ["Red Blood Cells", props.value.RBC, RBC_Results],
      ["HCT", props.value.HCT, HCT_Results],
      ["Urea", props.value.Urea, Urea_Results],
      ["Hemoglobin", props.value.Hb, Hb_Results],
      ["Creatinine ", props.value.CRT, CRT_Results],
      ["Iron", props.value.Iron, Iron_Results],
      ["High Density Lipoprotein", props.value.HDL, HDL_Results],
      ["Alkaline Phosphatase", props.value.AP, AP_Results],
    ],
  });
  doc.autoPrint();
  return (
    <div>
      <button
        className="pdf-btn1"
        style={{
          margin: "10px",
          width: "2.5rem,",
          borderRadius: "80px",
          backgroundColor: "#bb2e3e",
          fontWeight: "700",
        }}
        onClick={() => {
          doc.save("Diagnosis.pdf");
        }}
      >
        PDF
      </button>

      <table className="diagnosis-table" id="diag-table">
        <tr>
          <th>Category</th>
          <th>Values</th>
          <th>Cause</th>
        </tr>
        <tr>
          <td className="category">white Blood Cells</td>
          <td className="values">{props.value.WBC}</td>
          <td className="values">{WBC_Results}</td>
        </tr>
        <tr>
          <td className="category">Neutrophil</td>
          <td className="values">{props.value.Neut}</td>
          <td className="values">{Neutrophil_Results}</td>
        </tr>
        <tr>
          <td className="category">Lymphocytes</td>
          <td className="values">{props.value.Lymph}</td>
          <td className="values">{Lymph_Results}</td>
        </tr>
        <tr>
          <td className="category">Red Blood Cells</td>
          <td className="values">{props.value.RBC}</td>
          <td className="values">{RBC_Results}</td>
        </tr>
        <tr>
          <td className="category">HCT</td>
          <td className="values">{props.value.HCT}</td>
          <td className="values">{HCT_Results}</td>
        </tr>
        <tr>
          <td className="category">Urea</td>
          <td className="values">{props.value.Urea}</td>
          <td className="values">{Urea_Results}</td>
        </tr>
        <tr>
          <td className="category">Hemoglobin</td>
          <td className="values">{props.value.Hb}</td>
          <td className="values">{Hb_Results}</td>
        </tr>
        <tr>
          <td className="category">Creatinine</td>
          <td className="values">{props.value.CRT}</td>
          <td className="values">{CRT_Results}</td>
        </tr>
        <tr>
          <td className="category">Iron</td>
          <td className="values">{props.value.Iron}</td>
          <td className="values">{Iron_Results}</td>
        </tr>
        <tr>
          <td className="category">High Density Lipoprotein</td>
          <td className="values">{props.value.HDL}</td>
          <td className="values">{HDL_Results}</td>
        </tr>
        <tr>
          <td className="category">Alkaline Phosphatase</td>
          <td className="values">{props.value.AP}</td>
          <td className="values">{AP_Results}</td>
        </tr>
      </table>
    </div>
  );
};

export default Diagnosis;
