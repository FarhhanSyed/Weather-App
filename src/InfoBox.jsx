import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

const InfoBox = ({ info }) => {
  let img_url =
    "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHl8ZW58MHx8MHx8fDA%3D";
  const hot_url =
    "https://plus.unsplash.com/premium_photo-1720686477210-6482aff4aa48?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_url =
    "https://images.unsplash.com/photo-1640538212466-fd7e9ac47f8b?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="boxContainer">
      <Card sx={{ width: 345, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80
              ? rain_url
              : info.temperature < 15
              ? cold_url
              : hot_url
          }
          title="green iguana"
        />
        <CardContent
          sx={{
            background:
              "linear-gradient(135deg,rgba(113, 138, 147, 0.25),rgba(255,255,255,0.1))",
            padding: "20px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "rgba(5, 26, 69, 0.74)",
              fontWeight: "800",
              fontSize: "30px",
            }}
          >
            <b>{info.cityName}</b>&nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon style={{ fontSize: "10px" }} />
            ) : info.temperature < 15 ? (
              <AcUnitIcon />
            ) : (
              <SunnyIcon style={{ fontSize: "25px" }} />
            )}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component={"span"}
            sx={{ color: "rgb(1, 5, 18)", fontSize: "15px" }}
          >
            <p>Temperature : {info.temperature}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Max Temp : {info.tempMax}&deg;C</p>
            <p>Min Temp : {info.tempMin}&deg;C</p>
            <p>Feels Like : {info.feels_like}&deg;C</p>
            <p>Description : {info.description}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
