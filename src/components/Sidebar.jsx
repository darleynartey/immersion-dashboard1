import React from "react";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar"> 
      <div className="logo">
        <h1 className="logo-icon">YOOKE</h1>
        <h5 className="admin">Admin Dashboard</h5>
      </div>
      <div className="menu-bar">
        <ul>
          <li>
            <HomeOutlinedIcon fontSize="small" />
            <span onClick={() => navigate("/")}>Dashboard</span>
          </li>
          <li>
            <DescriptionOutlinedIcon fontSize="small" />
              <span onClick={() => navigate("/ridedata")}>Ride Data</span>
          </li>
          <li>
            <AirportShuttleOutlinedIcon fontSize="small" />
              <span onClick={() => navigate("/operational")}>Operational Insights</span>
          </li>
          <li>
            <GroupOutlinedIcon fontSize="small" />
              <span onClick={() => navigate("/useranalysis")}>User Analysis</span>
          </li>
          <li>
            <EqualizerOutlinedIcon fontSize="small" />
              <span onClick={() => navigate("/coremetrics")}>Core Metrics</span>
          </li>
        </ul>
      </div>

      <footer id="footer">
        <h5>Yooke Dashboard</h5>
        <h6>© 2024 All Rights Reserved</h6>
      </footer>
    </div>
  );
};

export default Sidebar;
