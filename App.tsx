import { useEffect } from "react";
import Centre from "./Centre";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./App.css";



const App = () => {
  
  return (
    <div className="main" style={{ height:"100vh",
      backgroundColor: "#f1f7f5",
      display: "flex",
      overflowY:"scroll"
      }}>
      <Navbar />
      <div
        className="lightblue main"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          margin: 0,
          marginLeft: 50,
          marginTop: 20,
          flexDirection: "column",
        }}
      >
        <Topbar />
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",

            marginTop: 45,
          }}
        >
          <Centre />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default App;
