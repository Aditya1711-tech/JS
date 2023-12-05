import React from "react";
import ChildWithData from "./ChildWithData";
import { useState } from "react";
import Stack from "@mui/material/Stack";

function ParentWithData() {
  var [data, setData] = useState([
    { name: "Aditya", RollNo: 54, Batch: "A3" },
    { name: "Namra", RollNo: 51, Batch: "A3" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
    { name: "Prince", RollNo: 40, Batch: "A2" },
  ]);
  return (
    <div style={{ backgroundColor: black }}>
      Parent With Data
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {data.map((d) => (
          <ChildWithData key={Math.random()} d={d} />
        ))}
      </Stack>
    </div>
  );
}

export default ParentWithData;
