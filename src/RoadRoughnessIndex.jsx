import React from "react";

export default function RoadRoughnessIndex() {
  const customFontStyle = {
    fontFamily: "Poppins",
  };

  return (
    <>
      <div>
        <h1
          className="font-Poppins font-bold leading-60 tracking-normal text-center"
          style={{ fontSize: "20px", fontFamily: "Poppins" }}
        >
          International Roughness Index/Roughness Index
        </h1>
        <h1
          className="font-Poppins mt-0 text-1xl font-normal leading-60 tracking-normal text-center"
          style={{ fontSize: "16px", fontFamily: "Inter" }}
        >
          Recommended Road Roughness (IRI/RI) values based on IRC
          SP16-2004/2019: standard practice for road roughness{" "}
        </h1>
        <div className="flex justify-center mt-6">
          <div className="w-8 h-8 bg-[#029146] rounded-full"></div>
          <div className="ml-4 w-20 mt-1" style={{ fontFamily: "inter" }}>
            Good
          </div>

          <div className="w-8 h-8 bg-[#F05A27] rounded-full ml-8"></div>
          <div className="ml-4 w-20 mt-1" style={{ fontFamily: "inter" }}>
            Average
          </div>

          <div className="w-8 h-8 bg-[#EE1C25] rounded-full ml-8"></div>
          <div className="ml-4 w-20 mt-1" style={{ fontFamily: "inter" }}>
            Bad
          </div>
        </div>
        <h1
          className="font-Poppins mt-12 text-md font-bold leading-60 tracking-normal text-center"
          style={customFontStyle}
        >
          1. Maximum Permissible Values of Roughness for Expressway, National
          Highways and State Highways
        </h1>

        <table className="w-full mt-6">
          <thead>
            <tr>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                rowSpan="2"
              >
                Sr.No.
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                rowSpan="2"
              >
                Type of Surface
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="6"
              >
                Condition of Road Surface
              </th>
            </tr>
            <tr>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#029146" }}
              >
                Good
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#F05A27" }}
              >
                Fair
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#EE1C25" }}
              >
                Poor
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500"></th>
              <th className="border border-gray-500"></th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#029146" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#029146" }}
              >
                IRI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#F05A27" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#F05A27" }}
              >
                IRI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#EE1C25" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#EE1C25" }}
              >
                IRI
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                1
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Bituminous(BC,SMA,SDBC)
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 1800{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2.55
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                1800-2400
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2.55-3.30
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 2400
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3.30
              </td>
            </tr>
            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Cemented
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2000{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2.81
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2000-2400
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2.81-3.30
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 2400
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3.30
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="font-Poppins mt-6 text-1xl" style={customFontStyle}>
          <div>
            <b style={{ color: "#000" }}>Note: </b>
            In case of four-lane divided and above corridors, roughness
            measurement shall be carried out using Class 1 equipment. For other
            corridors, the roughness measurement shall be carried out using
            Class 1/Class 2 or Class 3 equipment depending upon survey
            speed/geometric suitability.
          </div>
        </div>

        <h1
          className="font-Poppins mt-8 text-md font-bold leading-60 tracking-normal text-center"
          style={customFontStyle}
        >
          2. Maximum Permissible Values of Roughness for Major District Roads
          and Other District Roads
        </h1>

        <table className="w-full mt-6">
          <thead>
            <tr>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                rowSpan="2"
              >
                Sr.No.
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                rowSpan="2"
              >
                Type of Surface
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="6"
              >
                Condition of Road Surface
              </th>
            </tr>
            <tr>
              {/* <th className="border border-gray-500"></th>
							<th className="border border-gray-500"></th> */}
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#029146" }}
              >
                Good
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#F05A27" }}
              >
                Fair
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#EE1C25" }}
              >
                Poor
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500"></th>
              <th className="border border-gray-500"></th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#029146" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#029146" }}
              >
                IRI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#F05A27" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#F05A27" }}
              >
                IRI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#EE1C25" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#EE1C25" }}
              >
                IRI
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                1
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Surface Dressing
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3000{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 4.03
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3000-3800
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                4.03-4.98
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3800
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.98
              </td>
            </tr>
            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Cemented
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2800{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.79
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2800-3500
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.79-4.62
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3500
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.62
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Mix Seal Surfacing
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2600{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.55
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2600-3200
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.55-4.27
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3200
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.27
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                4
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Semi Dense Bituminous Concrete
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2200{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.05
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2200-3000
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.05-4.03
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3000
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.03
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                5
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Bituminous Concrete
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2000{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2.81
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2000-2600
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2.81-3.55
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 2600
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3.55
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                6
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Cement Concrete
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2200{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.05
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2200-2600
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.05-3.55
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 2600
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3.55
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="font-Poppins mt-6 text-1xl" style={customFontStyle}>
          <div>
            <b style={{ color: "#000" }}>Note: </b>
            Roughness measurements shall be carried out using Class 1/Class 2 or
            Class 3 equipment on these categories of roads depending upon survey
            speed/geometric suitability.{" "}
          </div>
        </div>

        <h1
          className="font-Poppins mt-8 text-md font-bold leading-60 tracking-normal text-center "
          style={customFontStyle}
        >
          3. Maximum Permissible Values of Roughness for Village Roads
        </h1>

        <table className="w-full mt-6 font-semibold font-poppins">
          <thead className="font-semibold font-poppins ">
            <tr className="font-semibold font-poppins ">
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                rowSpan="2"
              >
                Sr.No.
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                rowSpan="2"
              >
                Type of Surface
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="6"
              >
                Condition of Road Surface
              </th>
            </tr>
            <tr>
              {/* <th className="border border-gray-500" ></th>
							<th className="border border-gray-500"></th> */}
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#029146" }}
              >
                Good
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#F05A27" }}
              >
                Fair
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                colSpan="2"
                style={{ color: "#EE1C25" }}
              >
                Poor
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500"></th>
              <th className="border border-gray-500"></th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#029146" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#029146" }}
              >
                IRI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#F05A27" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#F05A27" }}
              >
                IRI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#EE1C25" }}
              >
                RI
              </th>
              <th
                className="font-semibold font-poppins border border-gray-500 text-center"
                style={{ color: "#EE1C25" }}
              >
                IRI
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                1
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Surface Dressing
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3200{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 4.27
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3200-3800
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                4.27-4.98
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3800
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.98
              </td>
            </tr>
            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Cemented
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3000{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 4.03
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3000-3500
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                4.03-4.62
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3500
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.62
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Mix Seal Surfacing
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2800{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.79
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2800-3200
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.79-4.27
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3200
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.27
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                4
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Semi Dense Bituminous Concrete
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2400{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.30
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2400-3000
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.30-4.03
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3000
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 4.03
              </td>
            </tr>

            <tr>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                5
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Cement Concrete
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 2200{" "}
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#029146",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                {" "}
                &lt; 3.05
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                2200-2600
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#F05A27",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                3.05-3.55
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 2600
              </td>
              <td
                className="border border-gray-500"
                style={{
                  color: "#EE1C25",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  // fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                &gt; 3.55
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="font-Poppins mt-6 text-1xl " style={customFontStyle}>
          <div>
            <b style={{ color: "#000" }}>Note: </b>
            Roughness measurements shall be carried out using Class 1/Class 2 or
            Class 3 equipment on these categories of roads depending upon survey
            speed/geometric suitability.{" "}
          </div>
        </div>
      </div>
    </>
  );
}