import VideocamIcon from "@mui/icons-material/Videocam";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import g1 from "./img/g1.png";
import g2 from "./img/g2.jpeg";
import g3 from "./img/g3.jpeg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from '@mui/icons-material/Add';

const Sidebar=()=>{
    return(<div
        className="rightbar"
        style={{
          height: "100%",
          width: "21%",
          display: "flex",
          gap: 12,
          flexDirection: "column",
          marginLeft: 17
        }}
      >
        <div
          className="top"
          style={{
            border: "1px solid teal",
            borderRadius: "12px",
            backgroundColor: "teal",
            height: "28%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "white",
              marginTop: 15,
              marginLeft: 30,
              fontSize: 18,
            }}
          >
            Upgrade to Pro
          </p>
          <div style={{ display: "flex", gap: 5 }}>
            {" "}
            <p
              style={{
                margin: 0,
                color: "white",
                marginTop: 20,
                fontSize: 24,
                marginLeft: 30,
              }}
            >
              $4.20
            </p>
            <p style={{ margin: 0, color: "white", marginTop: 27 }}>
              /Month
            </p>
          </div>
          <p
            style={{
              margin: 0,
              color: "white",
              marginTop: 9,
              marginLeft: 30,
              fontSize: 15,
            }}
          >
            $50 Billed Annually
          </p>
          <p
            style={{
              margin: 0,
              border: "1px solid #7bfc03",
              backgroundColor: "#7bfc03",
              borderRadius: "8px",
              fontSize: 11,
              fontWeight: "bold",
              height: "7%",
              width: "32%",
              marginLeft: 33,
              marginTop: 12,marginBottom:8,
              padding: "10px 9px 10px 9px  ",
            }}
          >
            Upgrade Now
          </p>
        </div>
        <div
          className="mid"
          style={{
            border: "1px solid white",
            borderRadius: "12px",
            backgroundColor: "white",
            height: "25%",
            width: "100%",
            display: "flex",
            marginTop: 10,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              marginLeft: 30,
              gap: 10,
              marginTop: 14,
            }}
          >
            <VideocamIcon
              style={{
                backgroundColor: "gray",
                border: "1px solid gray",
                borderRadius: "22px",
                height: 20,
                width: 20,
                padding: 4,
              }}
            />
            <p style={{ margin: 0, fontWeight: "bold", fontSize: 20 }}>
              Daily Meeting
            </p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 70,
              gap: 10,
              marginTop: 7,
            }}
          >
            <p
              style={{
                margin: 0,
                backgroundColor: "lightgray",
                border: "1px solid lightgray",
                borderRadius: "12px",
                padding: 4,
                fontSize: 8,
              }}
            >
              12+ Person
            </p>
            <p style={{ margin: 0, fontSize: 12, marginTop: 2}}>8.30pm</p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 30,
              marginTop: 20,
              gap: 10,
            }}
          >
            <AvatarGroup>
              <Avatar src={g1} sx={{ width: 24, height: 24 }} />
              <Avatar src={g2} sx={{ width: 24, height: 24 }} />
              <Avatar src={g3} sx={{ width: 24, height: 24 }} />
            </AvatarGroup>
            <div>
              <p style={{ margin: 0, fontSize: 10, fontWeight: "bold" }}>
                They will conduct
              </p>
              <p style={{ margin: 0, fontSize: 10, fontWeight: "bold" }}>
                the meeting
              </p>
            </div>
          </div>
          <p
            style={{
              margin: 0,
              border: "1px solid black",
              backgroundColor: "black",
              borderRadius: "8px",
              fontSize: 11,

              height: "5%",
              width: "40%",
              marginLeft: 33,
              marginTop: 20,
              padding: "5px 15px 11px 15px ",
              color: "white",marginBottom:8
            }}
          >
            Click for meeting link
          </p>
        </div>
        <div
          className="bot"
          style={{
            border: "1px solid white",
            borderRadius: "12px",
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            display: "flex",
            marginTop: 10,
            flexDirection: "column",gap:10
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 30,
              marginTop: 20,
              
            }}
          >
            Team Member
          </p>
          <div
            style={{
              border: "1px solid lightgray",
              background: "lightgray",
              height: "20%",
              width: "80%",
              marginLeft: 30,
              borderRadius: "12px",
              display: "flex",
              gap: 9,
              marginTop:12
            }}
          >
            <div style={{ marginLeft: 10, marginTop: 7 }}>
              <Avatar src={g1} sx={{ width: 24, height: 24 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 5,
              }}
            >
              <p style={{ margin: 0, fontSize: 13, fontWeight: "bold" }}>
                Mahid Ahmed
              </p>
              <p style={{ margin: 0, fontSize: 9 }}>Project Manager</p>
            </div>
            <ArrowForwardIosIcon style={{ marginLeft: 30, marginTop: 9 }} />
          </div>
          <div
            style={{
              border: "1px solid lightgray",
              background: "lightgray",
              height: "20%",
              width: "80%",
              marginLeft: 30,
              borderRadius: "12px",
              display: "flex",
              gap: 9,
            }}
          >
            <div style={{ marginLeft: 10, marginTop: 7 }}>
              <Avatar src={g2} sx={{ width: 24, height: 24 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 5,
              }}
            >
              <p style={{ margin: 0, fontSize: 13, fontWeight: "bold" }}>
                Daniel Karl
              </p>
              <p style={{ margin: 0, fontSize: 9 }}>HR Head</p>
            </div>
            <ArrowForwardIosIcon style={{ marginLeft: 30, marginTop: 9 }} />
          </div>
          <div
            style={{
              border: "1px solid lightgray",
              background: "lightgray",
              height: "20%",
              width: "80%",
              marginLeft: 30,
              borderRadius: "12px",
              display: "flex",
              gap: 9,
            }}
          >
            <div style={{ marginLeft: 10, marginTop: 7 }}>
              <Avatar src={g3} sx={{ width: 24, height: 24 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 5,
              }}
            >
              <p style={{ margin: 0, fontSize: 13, fontWeight: "bold" }}>
                Elena Michel
              </p>
              <p style={{ margin: 0, fontSize: 9 }}>Co-ordinator </p>
            </div>
            <ArrowForwardIosIcon style={{ marginLeft: 30, marginTop: 9 }} />
          </div>
          <div
            style={{
              border: "1px solid lightgray",
              background: "lightgray",
              height: "20%",
              width: "80%",
              marginLeft: 30,
              borderRadius: "12px",
              display: "flex",
              gap: 9,
            }}
          >
            <div style={{ marginLeft: 10, marginTop: 7 }}>
              <Avatar src={g2} sx={{ width: 24, height: 24 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 5,
              }}
            >
              <p style={{ margin: 0, fontSize: 13, fontWeight: "bold" }}>
                Salina Mitso
              </p>
              <p style={{ margin: 0, fontSize: 9 }}>Co-ordinator</p>
            </div>
            <ArrowForwardIosIcon style={{ marginLeft: 30, marginTop: 9 }} />
          </div>
          <div
            style={{
              border: "1px solid lightblue",
              background: "lightblue",
              height: "20%",
              width: "80%",
              marginLeft: 30,
              borderRadius: "12px",
              display: "flex",
              gap: 9,
            }}
          >
            
              
            
            <AddIcon style={{marginLeft:20, marginTop: 7,border:"1px solid white",backgroundColor:"white",borderRadius:"22px",}}/>
            
              <p style={{ margin: 0,  marginTop: 10,fontSize: 13, fontWeight: "bold" }}>
                Add more member
              </p>
              
            
            
          </div>
        </div>
        
      </div>);
};
export default Sidebar;