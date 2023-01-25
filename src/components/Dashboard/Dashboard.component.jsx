import "./Dashboard.styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloudOffRoundedIcon from "@mui/icons-material/CloudOffRounded";
import AlarmOnRoundedIcon from "@mui/icons-material/AlarmOnRounded";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import EnhancedTable from "./Table";
import { useNavigate } from "react-router-dom";
import {
  getrequisition,
  getrequisitionscount,
  getfilters,
} from "../../redux-implementation/actions";
import { connect } from "react-redux";
import Loader from "../Loaders/Loader";

const Dashboard = ({
  getrequisition,
  getrequisitionscount,
  getfilters,
  state,
}) => {
  let l = React.useMemo(() => {
    getrequisition();
    getrequisitionscount();
    getfilters();
  }, [getrequisition, getrequisitionscount, getfilters]);
  console.log(l);
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  if (state.requisitionList && state.requisitionCount)
    return (
      <>
        <Outlet />
        <div className="dashboard_body">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="card"
                style={{
                  backgroundColor: "white",
                  borderColor: "rgba(59,130,246,1)",
                }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ textAlign: "center", color: "rgba(59,130,246,1)" }}
                  >
                    <PeopleAltIcon style={{ fontSize: "40px" }} />
                  </h5>
                  {state.requisitionCount && (
                    <h1 className="card_number">
                      {state.requisitionCount.count}
                    </h1>
                  )}
                  <h6 className="card_number_caption">Total Requisitions </h6>
                </div>
              </div>
              <div></div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="card"
                style={{
                  backgroundColor: "white",
                  borderColor: "rgba(255,152,0,1)",
                }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ textAlign: "center", color: "rgba(255,152,0,1)" }}
                  >
                    <SearchRoundedIcon style={{ fontSize: "40px" }} />
                  </h5>
                  {state.requisitionCount && (
                    <h1 className="card_number">
                      {state.requisitionCount.countcompare}
                    </h1>
                  )}
                  <h6 className="card_number_caption">Requisition Compare </h6>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card" style={{ backgroundColor: "white" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ textAlign: "center", color: "black" }}
                  >
                    <CloudOffRoundedIcon style={{ fontSize: "40px" }} />
                  </h5>
                  {state.requisitionCount && (
                    <h1 className="card_number">
                      {state.requisitionCount.countshortlist}
                    </h1>
                  )}
                  <h6 className="card_number_caption">
                    Requisition Shortlisted
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card" style={{ backgroundColor: "white", borderColor: "rgba(255,87,34,1)" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ textAlign: "center", color: "rgba(255,87,34,1)" }}
                  >
                    <AlarmOnRoundedIcon style={{ fontSize: "40px" }} />
                  </h5>
                  {state.requisitionCount && (
                    <h1 className="card_number">
                      {state.requisitionCount.countcontact}
                    </h1>
                  )}
                  <h6 className="card_number_caption">Requisition Closed</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard_body_flex">
          <div className="col-2" style={{ alignSelf: "start" }}>
            <h4 style={{ marginTop: "22px" }}>Requisitions</h4>
          </div>
          <div className="col" style={{ alignSelf: "center" }}>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SearchIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5, width: 50 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Search..."
                  variant="standard"
                />
              </Box>
            </Box>
          </div>

          <div className="col-2" style={{ alignSelf: "end" }}>
            <div>
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Fab
                  color="primary"
                  aria-label="add"
                  onClick={() => navigate("/CreateRequistion")}
                >
                  <AddIcon />
                </Fab>
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>Create User</Typography>
              </Popover>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12"></div>
        </div>
        <div className="container">
          {state.requisitionList && (
            <EnhancedTable data={state.requisitionList} />
          )}
        </div>
      </>
    );
  else {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, {
  getrequisition,
  getrequisitionscount,
  getfilters,
})(Dashboard);
