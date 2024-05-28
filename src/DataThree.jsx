import React from "react";
import "./App.css"; // Ensure your CSS file is correctly imported
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { surfaceDetails } from "./Details/SurfaceDetails";
import {
  roadDetails,
  roadQuality,
  assetDetails,
  roadDeatilsCondition,
} from "./Details/RoadDetails";
import RoadRoughnessIndex from "./RoadRoughnessIndex";
import { defectDetails } from "./Details/RoadDetails";

export default function DataThree() {
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "100%",
  };

  const thTdStyle = {
    textAlign: "center",
    border: "1px solid black",
    padding: "3px",
  };

  const size = {
    height: 200, // Adjust height as needed
    width: 800, // Adjust width as needed
  };

  const roadQualityPie = roadQuality.filter((item) => item.quality !== "Total");

  return (
    <div>
      <h1 className="w-full flex justify-center items-center font-bold color-blue text-2xl">
        Detailed Road Report of Each Road
      </h1>
      <div>
        {roadDetails.map((road, key) => (
          <div key={road.id} className={key !== 0 ? "page-break" : ""}>
            <br />
            <h2 className="text-xl font-semibold">
              Road Condition Data For - {road.name}
            </h2>
            <br />

            <h2 className="w-full flex justify-center items-center font-semibold">
              Road Chainage - {road.chainage}
            </h2>
            <br/>
            <div>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Contractor</th>
                    <th style={thTdStyle}>Road Name</th>
                    <th style={thTdStyle}>Road Number</th>
                    <th style={thTdStyle}>Road Type</th>
                    <th style={thTdStyle}>Survey Date</th>
                    <th style={thTdStyle}>Survey Done by</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={thTdStyle}>AI Unika</td>
                    <td style={thTdStyle}>{road.name}</td>
                    <td style={thTdStyle}>{road.name}</td>
                    <td style={thTdStyle}>{road.name}</td>
                    <td style={thTdStyle}>{road.name}</td>
                    <td style={thTdStyle}>{road.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <br/>
            
            <div>
              <RoadRoughnessIndex />
            </div>

            <br />

            <div>
              <h1 className="font-semibold">ROAD QUALITY</h1>
              <br />

              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Quality</th>
                    <th style={thTdStyle}>Percent(%)</th>
                    <th style={thTdStyle}>Kilometer(Km)</th>
                  </tr>
                </thead>
                <tbody>
                  {roadQuality.map((row, index) => (
                    <tr key={index}>
                      <td style={thTdStyle}>{row.quality}</td>
                      <td style={thTdStyle}>{row.percentage}</td>
                      <td style={thTdStyle}>{row.kilometers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <br />

            <div>
              <h1 className="font-semibold">DEFECT STATISTICS</h1>
              <br />

              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Defect</th>
                    <th style={thTdStyle}>Count of Defect</th>
                  </tr>
                </thead>
                <tbody>
                  {defectDetails.map((row, index) => (
                    <tr key={index}>
                      <td style={thTdStyle}>{row.defectType}</td>
                      <td style={thTdStyle}>{row.defectCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <br/> 

            <div>
              <h1 className="font-semibold">ASSET STATISTICS</h1>
              <br />

              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Asset</th>
                    <th style={thTdStyle}>Count of Asset</th>
                  </tr>
                </thead>
                <tbody>
                  {assetDetails.map((row, index) => (
                    <tr key={index}>
                      <td style={thTdStyle}>{row.assetType}</td>
                      <td style={thTdStyle}>{row.assetCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <br />

            <div className="mt-20">
              <PieChart
                series={[
                  {
                    data: roadQualityPie.map((item) => ({
                      id: item.quality,
                      value: `${item.percentage}`,
                      label: `${item.quality} Condition Road(%) - ${item.percentage}`,
                      color:
                        item.quality === "Good"
                          ? "#63AD43"
                          : item.quality === "Average"
                          ? "#ff8437"
                          : "#FF0000",
                    })),
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 45,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontWeight: "bold",
                  },
                }}
                {...size}
              />
            </div>

            <br />

            <div>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thTdStyle}>Start Chainage</th>
                    <th style={thTdStyle}>End Chainage</th>
                    <th style={thTdStyle}>Date</th>
                    <th style={thTdStyle}>Distance</th>
                    <th style={thTdStyle}>Start Latitude, Longitude</th>
                    <th style={thTdStyle}>End Latitude, Longitude</th>
                    <th style={thTdStyle}>Road Type</th>
                    <th style={thTdStyle}>Category</th>
                    <th style={thTdStyle}>Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {roadDeatilsCondition.map((row, index) => (
                    <tr key={index}>
                      <td style={thTdStyle}>{row.startChainage}</td>
                      <td style={thTdStyle}>{row.endChainage}</td>
                      <td style={thTdStyle}>{row.date}</td>
                      <td style={thTdStyle}>{row.distance}</td>
                      <td style={thTdStyle}>{row.startLatLong}</td>
                      <td style={thTdStyle}>{row.endLatLong}</td>
                      <td style={thTdStyle}>{row.roadType}</td>
                      <td style={thTdStyle}>{row.category}</td>
                      <td style={thTdStyle}>{row.remark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
