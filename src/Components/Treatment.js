import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/ContextProvider";
import "../Style/Treatment.css";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Treatment = (props) => {
  const [loading, setLoading] = useState(true);
  const {
    personalDiseases,
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
  } = useContext(AppContext);

  const doc = new jsPDF();
  const headerTitle = ["Disease", "Treatment Suggustion"];

  doc.autoTable({
    head: [headerTitle],
    styles: { fillColor: [255, 0, 0] },
    margin: { horizontal: 10 },
    bodyStyles: { valign: "top" },
  });
  for (let i = 1; i < personalDiseases.length; i++) {
    doc.autoTable({
      body: [[personalDiseases[i].name, personalDiseases[i].treatment]],
      columnStyles: { 0: { halign: "left" } },
      styles: {
        halign: "right",
        cellPadding: 0.7,
      },
    });
  }

  getValue_WBC(props.value); //'Low'
  getValue_Neutrophil(props.value);
  getValue_Lymph(props.value);
  getValue_RBC(props.value);
  getValue_HCT(props.value);
  getValue_Urea(props.value);
  getValue_Hb(props.value);
  getValue_CRT(props.value);
  getValue_Iron(props.value);
  getValue_HDL(props.value);
  getValue_AP(props.value);
  //doc.autoPrint();
  useEffect(() => {
    if (props.value) {
    setLoading(false)   
    }
   
  }, [props.value]);
  return (
    <div>
      <button
        className="generatPDF-btn"
        style={{
          width: "2rem",
          borderRadius: "80px",
          backgroundColor: "#bb2e3e",
          fontWeight: "700",
        }}
        onClick={() => {
          doc.save("Treatment.pdf");
        }}
      >
        PDF
      </button>
      {loading ? <h1>Loading....</h1> :
        <table className="treatment-table" id="treat-table">
          <tr>
            <th>Disease</th>
            <th>Treatment Suggustion</th>
          </tr>

          {personalDiseases.map((dis, i) => {
            return (
              <tr key={i}>
                <td className="category">{dis.name}</td>
                <td className="values">{dis.treatment}</td>
              </tr>
            );
          })}
        </table>
      }

    </div>
  );
};

export default Treatment;
