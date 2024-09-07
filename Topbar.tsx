import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import NotificationsIcon from "@mui/icons-material/Notifications";
import img from "./img/avatar.png";
import Avatar from "@mui/material/Avatar";
const Topbar=()=>{
    return( <div
        className="topbar"
        style={{
          width: "100%",
          height: "10%",
          display: "flex",
        }}
      >
        <div
          className="Dashboard"
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              marginTop: 14,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Dashboard
          </p>
          <p style={{ margin: 0, fontSize: 13, color: "gray" }}>
            14th Aug 2023
          </p>
        </div>
        <div
          className="iconpart"
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            marginLeft: "43%",
            gap: 11,
          }}
        >
          <MarkEmailUnreadIcon
            style={{
              marginTop: 14,
              border: "1px solid gray",
              padding: 10,
              borderRadius: "12px",
            }}
          />
          <NotificationsIcon
            style={{marginLeft:3,
              marginTop: 14,
              border: "1px solid gray",
              padding: 10,
              borderRadius: "12px",
            }}
          />
          <Avatar
            alt="S"
            src={img}
            style={{
              height: 50,
              width: 50,
              margin: 0,
              marginLeft: 15,
              marginTop: 10,
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 6 }}
          >
            <p
              style={{
                margin: 0,
                marginTop: 12,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Nora Watson
            </p>
            <p style={{ margin: 0, fontSize: 11, color: "gray" }}>
              Sales Manager
            </p>
          </div>
        </div>
      </div>);
};
export default Topbar;