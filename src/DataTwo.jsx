import React from "react";

export default function DataTwo() {
  const roads = [
    {
      srNo: 1,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "M G Road Tilak Road Junction End To M G Road Tilak Road Junction Start",
      startChainage: "0/60",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Acending",
      dateOfSurvey:"12-05-2024",
      pageNo: 1,
    },
    {
      srNo: 2,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "Water Field 32nd Road Junction Part 2 Start To Water Field 32nd Road Junction Part 2 End",
      startChainage: "0/40",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Acending",
      dateOfSurvey:"12-05-2024",
      pageNo: 4,
    },
    {
      srNo: 3,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "M G Road Tilak Road Junction End To M G Road Tilak Road Junction Start",
      startChainage: "0/60",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Desending",
      dateOfSurvey:"12-05-2024",
      pageNo: 1,
    },
    {
      srNo: 4,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "Water Field 32nd Road Junction Part 2 Start To Water Field 32nd Road Junction Part 2 End",
      startChainage: "0/40",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Acending",
      dateOfSurvey:"12-05-2024",
      pageNo: 4,
    },
    {
      srNo: 5,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "M G Road Tilak Road Junction End To M G Road Tilak Road Junction Start",
      startChainage: "0/60",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Desending",
      dateOfSurvey:"12-05-2024",
      pageNo: 1,
    },
    {
      srNo: 6,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "Water Field 32nd Road Junction Part 2 Start To Water Field 32nd Road Junction Part 2 End",
      startChainage: "0/40",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Acending",
      dateOfSurvey:"12-05-2024",
      pageNo: 4,
    },
    {
      srNo: 7,
      ward: "WARD H/West",
      workCode: "AW-159",
      nameLane:
        "Water Field 32nd Road Junction Part 2 Start To Water Field 32nd Road Junction Part 2 End",
      startChainage: "0/40",
      endChainage: "0/0",
      distance: "8.500 km",
      type: "Desending",
      dateOfSurvey:"12-05-2024",
      pageNo: 4,
    },
  ];

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "100%",
  };

  const thTdStyle = {
    textAlign: "center",
    border: "1px solid black",
    padding: "8px",
    // textAlign: "left",
  };

  return (
    <>
      <div>
        <h2 className="mb-5 text-2xl font-bold">List of Roads</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Sr. No.</th>
              <th style={thTdStyle}>Jurisdiction</th>
              <th style={thTdStyle}>Road Number</th>
              <th style={thTdStyle}>Road Name</th>
              <th style={thTdStyle}>Start Chainage</th>
              <th style={thTdStyle}>End Chainage</th>
              <th style={thTdStyle}>Distance</th>
              <th style={thTdStyle}>Type</th>
              <th style={thTdStyle}>Date of Survey</th>
              <th style={thTdStyle}>Page No.</th>
            </tr>
          </thead>
          <tbody>
            {roads.map((road, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{road.srNo}</td>
                <td style={thTdStyle}>{road.ward}</td>
                <td style={thTdStyle}>{road.workCode}</td>
                <td style={thTdStyle}>{road.nameLane}</td>
                <td style={thTdStyle}>{road.startChainage}</td>
                <td style={thTdStyle}>{road.endChainage}</td>
                <td style={thTdStyle}>{road.distance}</td>
                <td style={thTdStyle}>{road.type}</td>
                <td style={thTdStyle}>{road.dateOfSurvey}</td>
                <td style={thTdStyle}>{road.pageNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
