import "./HeaderAndFooter.css";
import React,{ useRef } from "react";
import generatePDF from "react-to-pdf";

const HeaderAndFooter = ({ children }) => {
  const targetRef = useRef();
  const printAction = () => {
    window.print();
  };

  return (
    <>
      <button className="print-preview-button bg-red-500" onClick={printAction}>
        Print Preview
      </button>

      <button
        onClick={() => generatePDF(targetRef, { filename: "rastatesting.pdf" })}
      >
        Download PDF
      </button>
      <table className="print-component" ref={targetRef}>
        {/* <thead>
                <tr>
                <th>
                <div>
                {"Page Header"}
                </div>
                </th>
                </tr>
            </thead> */}
        <tbody>
          <tr>
            <td className="text-justify">{children}</td>
          </tr>
        </tbody>
        <tfoot className="table-footer">
          <tr>
              <td>{"AI Unika"}</td>
              {/* <td>{"AI Unika"}</td> */}
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default HeaderAndFooter;
