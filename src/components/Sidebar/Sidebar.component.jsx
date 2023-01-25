import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import LayersIcon from "@mui/icons-material/Layers";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import CreateIcon from "@mui/icons-material/Create";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.styles.css";

// const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#127d0",
      },
    },
  });
  const [yesopen, noopen] = useState(false);
  const [yesopen2, noopen2] = useState(false);

  const OpensideBar = () => {
    noopen2(false);
    noopen(!yesopen);
  };

  const OpensideBar2 = () => {
    noopen(false);
    noopen2(!yesopen2);
  };

  const drawer = (
    <div>
      <h4
        style={{
          marginLeft: "15px",
          marginTop: "15px",
          marginBottom: "15px",
          marginRight: "15px",
        }}
      >
        Talent Management <WorkspacesIcon />
      </h4>
      <Divider />
      <List>
        <ListItem disablePadding style={{ marginTop: "10px" }}>
          <ListItemButton>
            <ListItemIcon>
              <div className="sidebar">
                <div className={yesopen ? "sidebar-item open" : "sidebar-item"}>
                  <div className="sidebar-title">
                    <span>
                      <Link
                        to="/"
                        className="sidebar_search"
                        style={{ color: "white" }}
                      >
                        <LayersIcon
                          style={{ marginRight: "20px", color: "#5c77ff" }}
                        />{" "}
                        Dashboard
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <p style={{ fontSize: "12px", marginLeft: "20px", marginTop: "30px" }}>
          Pages
        </p>

        <ListItem
          onClick={OpensideBar}
          disablePadding
          style={{ marginTop: "10px", width: "100%", color: "white" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <div className="sidebar">
                <div className={yesopen ? "sidebar-item open" : "sidebar-item"}>
                  <div className="sidebar-title">
                    <span style={{ color: "white" }}>
                      <LockIcon
                        style={{ marginRight: "20px", color: "white" }}
                      />{" "}
                      Talent
                    </span>
                    <ExpandMoreIcon
                      className="toggle-btn"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
              </div>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <div className={yesopen ? "sidebar-content-open" : "sidebar-content"}>
          <Link
            to="/SearchTalent"
            className="sidebar_search"
            style={{ color: "white" }}
          >
            <SearchIcon style={{ marginRight: "10px" }} />
            Search Talent
          </Link>
        </div>

        <ListItem
          onClick={OpensideBar2}
          disablePadding
          style={{ marginTop: "10px", color: "white" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <div className="sidebar">
                <div
                  className={yesopen2 ? "sidebar-item open" : "sidebar-item"}
                >
                  <div className="sidebar-title">
                    <span style={{ color: "white" }}>
                      <LockIcon
                        style={{ marginRight: "20px", color: "white" }}
                      />{" "}
                      Requistion
                    </span>
                    <ExpandMoreIcon className="toggle-btn" style={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>

        <div className={yesopen2 ? "sidebar-content-open" : "sidebar-content"}>
          <Link to="/CreateRequistion" className="sidebar_search">
            <CreateIcon style={{ marginRight: "10px" }} /> Create Requistion
          </Link>
        </div>

        <div className={yesopen2 ? "sidebar-content-open" : "sidebar-content"}>
          <Link to="/RequistionLog" className="sidebar_search">
            <RequestPageIcon style={{ marginRight: "10px" }} />
            Requistion Log
          </Link>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 300px)` },
          ml: { sm: `300px` },
          backgroundColor: "rgb(18, 18, 18)",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <AccountCircleIcon
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ color: "black", cursor: "pointer", fontSize: "40px" }}
          />
          <div>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose} style={{ padinng: "10px" }}>
                LogOut
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: "300px" }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <ThemeProvider theme={darkTheme}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "280px" },
            }}
          >
            {drawer}
          </Drawer>
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
          <Drawer
            variant="permanent"
            sx={{
              backgroundColor: "red",
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "300px" },
            }}
            open
          >
            {drawer}
          </Drawer>
        </ThemeProvider>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 300px)` } }}
      >
        <Outlet />
        <Toolbar />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
