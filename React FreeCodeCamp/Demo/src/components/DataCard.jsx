import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function DataCard(props) {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 125 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.d.avatar_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {props.d.login}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DataCard;
