import DashboardIcon from "@mui/icons-material/Dashboard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Avatar from "@mui/material/Avatar";
import img from "./img/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { cursorTo } from "readline";

const Navbar = () => {
  return (
    <div
      className="sidebar"
      style={{
        height: "100%",
        width: "17%",
        backgroundColor: "#fafaf7",
        display: "flex",
        padding: "30px 20px 30px 15px",

        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", gap: 10, marginLeft: 49 }}>
        <GroupIcon style={{ marginTop: 4 }} />
        <p style={{ marginTop: 0, fontSize: 22, fontWeight: "bold" }}>Niond</p>
      </div>
      <div
        className="comp2"
        style={{
          width: "100%",
          height: "35%",
          display: "flex",
          flexDirection: "column",
          marginLeft: 40,
          justifyContent: "space-between",
          marginTop: 35,
        }}
      >
        <div
          style={{ display: "flex", gap: 12, cursor: "pointer" }}
         
        >
          <DashboardIcon style={{ margin: 0 }} />
          <p style={{ margin: 0, fontSize: 16 }}>Dashboard</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <ShowChartIcon style={{ margin: 0 }} />
          <p style={{ margin: 0, fontSize: 16 }}>Statistics</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <ReceiptLongIcon style={{ margin: 0 }} />
          <p style={{ margin: 0, fontSize: 16 }}>Transaction</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <GroupIcon style={{ margin: 0 }} />
          <p style={{ margin: 0, fontSize: 16 }}>My Team</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <LeaderboardIcon style={{ margin: 0 }} />
          <p style={{ margin: 0, fontSize: 16 }}>Sell Reports</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <SettingsIcon style={{ margin: 0 }} />
          <p style={{ margin: 0, fontSize: 16 }}>Settings</p>
        </div>
      </div>
      <div
        className="Icons part"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 240,
        }}
      >
        <Avatar alt="S" src={img} style={{ margin: 0 }} />
        <p
          style={{ margin: 0, marginTop: 6, fontSize: 16, fontWeight: "bold" }}
        >
          Nora Watson
        </p>
        <p style={{ margin: 0, fontSize: 13, color: "gray" }}>Sales Manager</p>
      </div>
      <div
        className="logout"
        style={{
          width: "100%",
          display: "flex",
          gap: 9,
          marginTop: 40,
          marginLeft: 54,
        }}
      >
        <LogoutIcon />

        <p style={{ margin: 0, fontSize: 16 }}>Log Out</p>
      </div>
    </div>
  );
};
export default Navbar;
