import * as React from "react";
import "./RequistionLog.styles.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { connect } from "react-redux";
import Loader from "../Loaders/Loader";
import Popover from "@mui/material/Popover";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import EnhancedTable from "../Dashboard/Table";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { getrequisition, getfilters } from "../../redux-implementation/actions";

const RequistionLog = ({ state, getrequisition }) => {
  React.useEffect(() => {
    getrequisition();
    getfilters();
  }, [getrequisition, getfilters]);

  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  if (state.requisitionList)
    return (
      <>
        <div className="requistionlog_body">
          <div className="row">
            <div className="col-2" style={{ alignSelf: "start" }}>
              <h4 style={{ marginTop: "22px" }}>Requisitions List</h4>
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
          {state.requisitionList && (
            <EnhancedTable data={state.requisitionList} />
          )}
        </div>
      </>
    );
  else {
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
    </div>;
  }
};

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { getrequisition, getfilters })(
  RequistionLog
);
