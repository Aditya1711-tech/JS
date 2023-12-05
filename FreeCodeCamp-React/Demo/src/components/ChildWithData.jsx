import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function ChildWithData({ d }) {
  const card = (
    <CardContent>
      <Typography variant="h5" component="div">
        Student Info
      </Typography>
      <Typography variant="body2">
        Name: {d.name}
        <br />
        Roll NO: {d.RollNo}
        <br />
        Batch: {d.Batch}
        <br />
      </Typography>
    </CardContent>
  );

  return (
    <Stack direction="row" spacing={2}>
      <Card variant="outlined">{card}</Card>
      {/* You can add more Card components here */}
    </Stack>
  );
}

export default ChildWithData;
