import PaidIcon from "@mui/icons-material/Paid";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import ss from "./img/ss.png";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExtensionIcon from "@mui/icons-material/Extension";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { singlegetoperation} from "./Api";

const Centre=()=>{
    return(
        <div
          className="centre box"
          style={{
            gap: 9,
            height: "100%",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            paddingRight: 45,
          }}
        >
          <div
            className="earning"
            style={{
              width: "100%",
              height: "22%",
              display: "flex",
              gap: 40,
              flexDirection: "row",
            }}
          >
            <div
              style={{
                border: "1px solid #d5c7fe",
                borderRadius: "16px",
                width: "100%",
                height: "100%",
                backgroundColor: "#d5c7fe",
                display: "flex",
                flexDirection: "column",
                marginBottom:17
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginLeft: 19,
                  marginTop: 14,
                  gap: 9,
                  fontSize: 14,
                }}
              >
                <PaidIcon />
                <p style={{ margin: 0, fontWeight: "bold", marginTop: 2 }}>
                  
                  Total Earning
                </p>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 17,
                  gap: 9,
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 22 }}>
                  242.65K
                </p>
                <p style={{ margin: 0, fontSize: 14 }}>
                  From the running month
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "16px",
                border: "1px solid #a2cffe",
                width: "100%",
                height: "100%",
                backgroundColor: "#a2cffe",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: 14,
                  marginLeft: 19,
                  gap: 9,
                  fontSize: 14,
                }}
              >
                <CastForEducationIcon />
                <p style={{ margin: 0, fontWeight: "bold", marginTop: 2 }}>
                  Average Earning
                </p>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 17,
                  gap: 9,
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 22 }}>
                  17.347K
                </p>
                <p style={{ margin: 0, fontSize: 14 }}>
                  Daily Earning of this month
                </p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "16px",
                border: "1px solid #9fe2bf",
                width: "100%",
                height: "100%",
                backgroundColor: "#9fe2bf",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginLeft: 19,
                  marginTop: 14,
                  gap: 9,
                  fontSize: 14,
                }}
              >
                <SafetyCheckIcon />
                <p style={{ margin: 0, fontWeight: "bold", marginTop: 2 }}>
                  Conversation rate
                </p>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 17,
                  gap: 9,
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 22 }}>
                  74.86%
                </p>
                <p style={{ margin: 0, fontSize: 14 }}>
                  +6.04% greater than last month
                </p>
              </div>
            </div>
          </div>
          <div
            className="regular and analysis"
            style={{
              marginTop: 30,
              width: "100%",
              height: "29%",
              display: "flex",
            }}
          >
            <div
              className="Regular"
              style={{
                border: "1px solid white",
                borderRadius: "12px",
                backgroundColor: "white",
                height: "100%",
                width: "55%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 9,
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginRight: 25,
                  marginTop: 15,
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 21 }}>
                  Regular Sell
                </p>
                <p
                  style={{
                    margin: 0,
                    border: "1px solid #7bfc03",
                    backgroundColor: "#7bfc03",
                    borderRadius: "8px",
                    fontSize: 12,
                    fontWeight: "bold",
                    padding: "6px 13px 6px 13px",cursor:"pointer",color:"blue"
                  }} onClick={()=>{singlegetoperation();}}  >
                
                  Export
                </p>
              </div>
              <img
                src={ss}
                style={{ marginTop: 10, height: "70%", width: "85%",marginLeft:14 }}
              />
            </div>
            <div
              className="analysis"
              style={{
                backgroundColor: "#f1f7f5",
                height: "60%",
                width: "37%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginLeft: 38,
                marginTop: 9,
              }}
            >
              <p style={{ margin: 0, fontWeight: "bold", fontSize: 21 }}>
                More Analysis
              </p>
              <p style={{ margin: 0, color: "gray" ,fontSize:14}}>
                There are more to view
              </p>
              <div
                style={{
                  marginTop: 17,
                  border: "1px solid white",
                  backgroundColor: "white",
                  height: "32%",
                  borderRadius: "12px",
                  display: "flex",
                  gap: 18,
                  width:"95%"
                }}
              >
                <SignalCellularAltIcon
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: "22px",
                    padding: 2,
                    height: 19,
                    width: 19,
                    marginTop: 7,
                    marginLeft: 22,marginBottom:6
                  }}
                />
                <p style={{ margin: 0, fontSize: 15, marginTop: 8 }}>
                  Store Sell Ratio
                </p>
                <ArrowForwardIosIcon
                  style={{ marginLeft: 80, marginTop: 7 }}
                />
              </div>
              <div
                style={{
                  marginTop: 10,
                  border: "1px solid white",
                  backgroundColor: "white",
                  height: "32%",
                  borderRadius: "12px",
                  display: "flex",
                  gap: 18,width:"95%"
                }}
              >
                <ExtensionIcon
                 style={{
                  backgroundColor: "lightgray",
                  borderRadius: "22px",
                  padding: 2,
                  height: 19,
                  width: 19,
                  marginTop: 7,marginLeft: 22,marginBottom:6
                  }}
                />
                <p style={{ margin: 0, fontSize: 15, marginTop: 8 }}>
                  Top item sold
                </p>
                <ArrowForwardIosIcon
                  style={{ marginLeft: 90, marginTop: 7 }}
                />
              </div>
              <div
                style={{
                  marginTop: 9,
                  display: "flex",
                  gap: 18,
                }}
              >
                <p style={{ margin: 0 }}>Analysis created by</p>
                <DragHandleIcon
                  style={{
                    backgroundColor: "#7bfc03",
                    borderRadius: "22px",
                    padding: 4,
                    height: 20,
                    width: 20,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="Topstore"
            style={{
              border: "1px solid white",
              borderRadius: "12px",
              backgroundColor: "white",
              marginTop: 30,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 9,
                justifyContent: "space-between",
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
              }}
            >
              <p style={{ margin: 0, fontWeight: "bold", fontSize: 22 }}>
                Top Store
              </p>
              <p
                style={{
                  margin: 0,
                  border: "1px solid #7bfc03",
                  backgroundColor: "#7bfc03",
                  borderRadius: "8px",
                  fontSize: 14,
                  fontWeight: "bold",
                  padding: "6px 13px 6px 13px",
                }}
              >
                Share
              </p>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: 20,
                marginRight: 20,
                marginTop: 25,fontWeight:"bold",color:"lightgray"
              }}
            >
              <p style={{ margin: 0,  fontSize: 14 }}>
                Store Name
              </p>
              <p
                style={{
                  margin: 0,
                  marginLeft: "16.2%",
                  
                  fontSize: 14,
                }}
              >
                Location
              </p>
              <p
                style={{
                  margin: 0,
                  
                  fontSize: 14,
                  marginLeft: "18.6%",
                }}
              >
                Sell
              </p>
              <p
                style={{
                  margin: 0,
                  
                  fontSize: 14,
                  marginLeft: "22.6%",
                }}
              >
                Amount
              </p>
            </div>
            <div
              style={{
                height: 1,
                width: "95.4%",
                backgroundColor: "lightgray",
                marginLeft: 20,

                marginTop: 15,
              }}
            ></div>
            <div
              style={{
                height: "100%",
                width: "95.4%",
                gap: 9,
                display: "flex",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,color:"gray"
              }}
            >
              <div
                style={{
                  
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 19,
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 14 }}>
                  Solaris Sparkle
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  Miami, Florida
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  102 Quantity
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  12.50K
                </p>
              </div>
              <div
                style={{
                  
                  height: "100%",
                  width: "100%",
                  flexDirection: "column",
                  gap: 19,display:"flex",
                }}
              >
                
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 14 }}>
                  Crimson Dusk
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  Denver, Colorado
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  214 Quantity
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  07.85K
                </p>
              </div>
              <div
                style={{
                  
                  height: "100%",
                  width: "100%",
                  flexDirection: "column",
                  gap: 19,display:"flex"
                }}
              >
                {" "}
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 14 }}>
                  Indigo Zephyr
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  Orlando, Florida
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  143 Quantity
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  16.40K
                </p>
              </div>
              <div
                style={{
                  
                  height: "100%",
                  width: "100%",display:"flex",
                  flexDirection: "column",
                  gap: 19,
                }}
              >
                {" "}
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 14 }}>
                  Roseate Crest
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  Las Vegas, Nevada
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  185 Quantity
                </p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: "bold" }}>
                  23.64K
                </p>
              </div>
            </div>
          </div>
        </div>
        
      );
};
export default Centre;