import "./LevelFilter.css";
import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Cards from "./Cards";
import ClearIcon from "@mui/icons-material/Clear";
import _ from "lodash";
import {
  Button,
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Pagination,
  Stack,
} from "@mui/material";
import { paginate } from "../../utils/paginate";
import { useLocation } from "react-router-dom";
import {
  getresume,
  getresumecontacted,
  getresumeshortlist,
  getresumecompare,
  geteducation,
  getexperience,
  getskills,
  gettools,
  getcorporate,
  filterResumes,
  getsinglerequisition,
  getcompare,
  getshortlist,
  getcontact,
} from "../../redux-implementation/actions";
import { connect } from "react-redux";
import { List } from "antd";
import CardsCompare from "./CardsCompare";
import Loader from "../Loaders/Loader";
import CardPagination from "../Common/Pagination";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LevelFilter = ({
  state,
  getresume,
  getresumecompare,
  getresumeshortlist,
  getresumecontacted,
  geteducation,
  getexperience,
  getskills,
  gettools,
  getcorporate,
  getsinglerequisition,
  filterResumes,
  getcompare,
  getshortlist,
  getcontact,
}) => {
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const location = useLocation();
  const [selectfilter, setselectFilter] = React.useState({});
  React.useEffect(() => {
    if (location.state) {
      getresume(location.state);
    } else {
      getresume();
    }
    if (location.state.requisitionid) {
      getcompare();
      getshortlist();
      getcontact();
      getresumecompare(location.state.requisitionid);
      getresumeshortlist(location.state.requisitionid);
      getresumecontacted(location.state.requisitionid);
      getsinglerequisition(location.state.requisitionid);
      geteducation();
      getexperience();
      getskills();
      gettools();
      getcorporate();
    }
    if (!location.state.requisitionid) {
      getresumecompare();
      getresumeshortlist();
      getresumecontacted();
      getcompare();
      getshortlist();
      getcontact();
      geteducation();
      getexperience();
      getskills();
      gettools();
      getcorporate();
    }
  }, [
    getresume,
    getsinglerequisition,
    getresumeshortlist,
    getresumecontacted,
    location.state,
    getresumecompare,
    geteducation,
    getexperience,
    getskills,
    gettools,
    getcorporate,
    getcompare,
    getshortlist,
    getcontact,
  ]);

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [yesopen, noopen] = React.useState(false);
  const [yesopen2, noopen2] = React.useState(false);
  const [yesopen3, noopen3] = React.useState(false);
  const [yesopen4, noopen4] = React.useState(false);
  const [yesopen5, noopen5] = React.useState(false);

  const openMenu = () => {
    noopen2(false);
    noopen3(false);
    noopen4(false);
    noopen5(false);
    noopen(!yesopen);
  };
  const openMenu2 = () => {
    noopen(false);
    noopen3(false);
    noopen4(false);
    noopen5(false);
    noopen2(!yesopen2);
  };
  const openMenu3 = () => {
    noopen(false);
    noopen2(false);
    noopen4(false);
    noopen5(false);
    noopen3(!yesopen3);
  };
  const openMenu4 = () => {
    noopen(false);
    noopen2(false);
    noopen3(false);
    noopen4(false);
    noopen4(!yesopen4);
  };
  const openMenu5 = () => {
    noopen(false);
    noopen2(false);
    noopen3(false);
    noopen4(false);
    noopen5(!yesopen5);
  };
  const [selectedFilterList, setSelectedFilterList] = React.useState(false);
  function getUnique(array, level) {
    // console.log(array.map((item) => [item[`${level}_code`], item]));
    const unique = (arr, encoder = JSON.stringify, decoder = JSON.parse) =>
      [...new Set(arr.map((item) => encoder(item)))].map((item) =>
        decoder(item)
      );

    return unique(array);
  }
  const resumeList = state.resumeList;
  const deep = _.cloneDeep(resumeList);
  const [newresumeList, setnewresumeList] = React.useState();
  const [checkremoveFilter, setCheckremoveFilter] = React.useState(false);
  const [tabs, setTabs] = React.useState(0);

  const applyFilter = (code, type, first = false, e) => {
    if (type === "experience") {
      state.experienceFilter.map((exp) => {
        if (code === exp.experiencelevelid) {
          setselectFilter({
            ...selectfilter,
            experience: { id: exp.experiencelevelid, name: exp.name },
          });

          if (!newresumeList || first === true) {
            const alpha = state.resumeList.filter(
              (i) => i.experiencelevelid === code
            );
            setnewresumeList(alpha);
          } else {
            const alpha = newresumeList.filter(
              (i) => i.experiencelevelid === parseInt(code)
            );
            setnewresumeList(alpha);
          }
        }
      });
    } else if (type === "education") {
      state.educationFilter.map((exp) => {
        if (code === exp.educationlevelid) {
          setselectFilter({
            ...selectfilter,
            education: { id: parseInt(exp.educationlevelid), name: exp.name },
          });

          if (!newresumeList || first === true) {
            const alpha = state.resumeList.filter(
              (i) => i.educationlevelid === parseInt(code)
            );
            setnewresumeList(alpha);
          } else {
            const alpha = newresumeList.filter(
              (i) => i.educationlevelid === code
            );
            setnewresumeList(alpha);
          }
        }
      });
    } else if (type === "tool") {
      state.toolsFilter.map((exp) => {
        if (code === exp.toolid) {
          if (selectfilter.tools) {
            let newtool = selectfilter.tools;
            let newobject = {
              id: exp.toolid,
              name: exp.toolname,
            };

            if (selectfilter.tools.some((i) => i.id === exp.toolid) === false) {
              // console.log(newtool);
              // console.log(newtool.some((i) => i === newobject));
              newtool = newtool.push(newobject);

              setselectFilter({
                ...selectfilter,
                tools: getUnique(selectfilter.tools),
              });
            }
          } else {
            setselectFilter({
              ...selectfilter,
              tools: [{ id: exp.toolid, name: exp.toolname }],
            });
          }

          if (!newresumeList || first === true) {
            const alpha = state.resumeList.filter((i) => {
              if (
                i.resumeTools.some((t) => {
                  if (t.toolid === code) {
                    return true;
                  }
                })
              ) {
                return i;
              }
            });
            setnewresumeList(alpha);
          } else {
            const alpha = newresumeList.filter((i) => {
              if (
                i.resumeTools.some((t) => {
                  if (t.toolid === code) {
                    return true;
                  }
                })
              ) {
                return i;
              }
            });
            setnewresumeList(alpha);
          }
        }
      });
    } else if (type === "corporate") {
      state.corporateFilter.map((exp) => {
        if (code === exp.exposureid) {
          setselectFilter({
            ...selectfilter,
            corporate: { id: exp.exposureid, name: exp.name },
          });

          if (!newresumeList || first === true) {
            const alpha = state.resumeList.filter((i) => {
              if (
                i.resumeHeaderCorporate.some((t) => {
                  if (t.exposureid === code) {
                    return true;
                  }
                })
              ) {
                return i;
              }
            });
            setnewresumeList(alpha);
          } else {
            const alpha = newresumeList.filter((i) => {
              if (
                i.resumeHeaderCorporate.some((t) => {
                  if (t.exposureid === code) {
                    return true;
                  }
                })
              ) {
                return i;
              }
            });
            setnewresumeList(alpha);
          }
        }
      });
    } else if (type === "skill") {
      state.skillsFilter.map((exp) => {
        if (code === exp.skillid) {
          if (selectfilter.skill) {
            let newskill = selectfilter.skill;
            let newobject = {
              id: exp.skillid,
              name: exp.skillname,
            };
            if (
              selectfilter.skill.some((i) => i.id === exp.skillid) === false
            ) {
              newskill = newskill.push(newobject);

              setselectFilter({
                ...selectfilter,
                skill: getUnique(selectfilter.skill),
              });
            }
          } else {
            setselectFilter({
              ...selectfilter,
              skill: [{ id: exp.skillid, name: exp.skillname }],
            });
          }

          if (!newresumeList || first === true) {
            const alpha = state.resumeList.filter((i) => {
              if (
                i.skillResume.some((t) => {
                  if (t.skillid === code) {
                    return true;
                  }
                })
              ) {
                return i;
              }
            });
            setnewresumeList(alpha);
          } else {
            const alpha = newresumeList.filter((i) => {
              if (
                i.skillResume.some((t) => {
                  if (t.skillid === code) {
                    return true;
                  }
                })
              ) {
                return i;
              }
            });
            setnewresumeList(alpha);
          }
        }
      });
    }
    setSelectedFilterList(true);

    // console.log(code, type);
    // filterResumes(code, type);
  };
  function checkFirst(newfilters) {
    var key;

    for (var k in newfilters) {
      key = k;
      break;
    }
    return key;
  }
  const removeFilter = (type, obj, e) => {
    setnewresumeList(undefined);
    setCheckremoveFilter(true);
    console.log(type);
    if (type === "education") {
      console.log(selectfilter);
      let newfilters = selectfilter;
      delete newfilters.education;
      setselectFilter(newfilters);
      checkFirst(newfilters);
      if (selectfilter.experience) {
        if (checkFirst(newfilters) === "experience")
          applyFilter(selectfilter.experience.id, "experience", true);
        else applyFilter(selectfilter.experience.id, "experience");
      }
      if (selectfilter.tools) {
        if (checkFirst(newfilters) === "tools") {
          selectfilter.tools.map((tool, i) => {
            if (i === 0) applyFilter(tool.id, "tool", true);
            else applyFilter(tool.id, "tool");
          });
        } else {
          selectfilter.tools.map((tool, i) => {
            applyFilter(selectfilter.education.id, "education");
          });
        }
      }
      if (selectfilter.skill) {
        if (checkFirst(newfilters) === "skill") {
          selectfilter.skill.map((skill, i) => {
            if (i === 0) applyFilter(skill.id, "skill", true);
            else applyFilter(skill.id, "skill");
          });
        } else
          selectfilter.skill.map((skill, i) => {
            applyFilter(skill.id, "skill");
          });
      }
      if (selectfilter.corporate) {
        if (checkFirst(newfilters) === "corporate")
          applyFilter(selectfilter.corporate.id, "corporate", true);
        else applyFilter(selectfilter.corporate.id, "corporate");
      }
    }
    if (type === "experience") {
      let newfilters = selectfilter;
      delete newfilters.experience;
      setselectFilter(newfilters);
      checkFirst(newfilters);
      if (selectfilter.education) {
        if (checkFirst(newfilters) === "education")
          applyFilter(selectfilter.education.id, "education", true);
        else applyFilter(selectfilter.education.id, "education");
      }
      if (selectfilter.tools) {
        if (checkFirst(newfilters) === "tools") {
          selectfilter.tools.map((tool, i) => {
            if (i === 0) applyFilter(tool.id, "tool", true);
            else applyFilter(tool.id, "tool");
          });
        } else {
          selectfilter.tools.map((tool, i) => {
            applyFilter(selectfilter.education.id, "education");
          });
        }
      }
      if (selectfilter.skill) {
        if (checkFirst(newfilters) === "skill") {
          selectfilter.skill.map((skill, i) => {
            if (i === 0) applyFilter(skill.id, "skill", true);
            else applyFilter(skill.id, "skill");
          });
        } else
          selectfilter.skill.map((skill, i) => {
            applyFilter(skill.id, "skill");
          });
      }
      if (selectfilter.corporate) {
        if (checkFirst(newfilters) === "corporate")
          applyFilter(selectfilter.corporate.id, "corporate", true);
        else applyFilter(selectfilter.corporate.id, "corporate");
      }
    }
    if (type === "tool") {
      let newfilters = selectfilter;
      if (obj === undefined) {
        delete newfilters.tools;
        setselectFilter(newfilters);
        gettools();
      } else {
        newfilters.tools = newfilters.tools.filter(function (item) {
          return item !== obj;
        });
        setselectFilter(newfilters);
      }

      // console.log(obj);

      if (selectfilter.education) {
        if (checkFirst(newfilters) === "education")
          applyFilter(selectfilter.education.id, "education", true);
        else applyFilter(selectfilter.education.id, "education");
      }
      if (selectfilter.experience) {
        if (checkFirst(newfilters) === "experience")
          applyFilter(selectfilter.experience.id, "experience", true);
        else applyFilter(selectfilter.experience.id, "experience");
      }
      if (selectfilter.tools) {
        if (checkFirst(newfilters) === "tools") {
          // console.log("a")
          selectfilter.tools.map((tool, i) => {
            if (i === 0) applyFilter(tool.id, "tool", true);
            else applyFilter(tool.id, "tool");
          });
        } else {
          selectfilter.tools.map((tool, i) => {
            applyFilter(selectfilter.education.id, "education");
          });
        }
      }
      if (selectfilter.skill) {
        if (checkFirst(newfilters) === "skill") {
          selectfilter.skill.map((skill, i) => {
            if (i === 0) applyFilter(skill.id, "skill", true);
            else applyFilter(skill.id, "skill");
          });
        } else
          selectfilter.skill.map((skill, i) => {
            applyFilter(skill.id, "skill");
          });
      }
      if (selectfilter.corporate) {
        if (checkFirst(newfilters) === "corporate")
          applyFilter(selectfilter.corporate.id, "corporate", true);
        else applyFilter(selectfilter.corporate.id, "corporate");
      }
    }
    if (type === "skill") {
      let newfilters = selectfilter;
      if (obj === undefined) {
        delete newfilters.skill;
        setselectFilter(newfilters);
        getskills();
      } else {
        newfilters.skill = newfilters.skill.filter(function (item) {
          return item !== obj;
        });
        setselectFilter(newfilters);
        console.log(obj, selectfilter.skill);
      }

      checkFirst(newfilters);
      if (selectfilter.education) {
        if (checkFirst(newfilters) === "education")
          applyFilter(selectfilter.education.id, "education", true);
        else applyFilter(selectfilter.education.id, "education");
      }
      if (selectfilter.tools) {
        if (checkFirst(newfilters) === "tools") {
          // console.log("a");
          selectfilter.tools.map((tool, i) => {
            if (i === 0) applyFilter(tool.id, "tool", true);
            else applyFilter(tool.id, "tool");
          });
        } else {
          selectfilter.tools.map((tool, i) => {
            applyFilter(selectfilter.education.id, "education");
          });
        }
      }
      if (selectfilter.skill) {
        if (checkFirst(newfilters) === "skill") {
          selectfilter.skill.map((skill, i) => {
            if (i === 0) applyFilter(skill.id, "skill", true);
            else applyFilter(skill.id, "skill");
          });
        } else
          selectfilter.skill.map((skill, i) => {
            applyFilter(skill.id, "skill");
          });
      }
      if (selectfilter.experience) {
        if (checkFirst(newfilters) === "experience")
          applyFilter(selectfilter.experience.id, "experience", true);
        else applyFilter(selectfilter.experience.id, "experience");
      }
      if (selectfilter.corporate) {
        if (checkFirst(newfilters) === "corporate")
          applyFilter(selectfilter.corporate.id, "corporate", true);
        else applyFilter(selectfilter.corporate.id, "corporate");
      }
    }
    if (type === "corporate") {
      let newfilters = selectfilter;
      delete newfilters.corporate;
      setselectFilter(newfilters);
      checkFirst(newfilters);
      console.log("fif :", checkFirst(newfilters));
      if (selectfilter.education) {
        if (checkFirst(newfilters) === "education") {
          console.log("education :", checkFirst(newfilters));
          applyFilter(selectfilter.education.id, "education", true);
        } else applyFilter(selectfilter.education.id, "education");
      }
      if (selectfilter.tools) {
        if (checkFirst(newfilters) === "tools") {
          selectfilter.tools.map((tool, i) => {
            if (i === 0) applyFilter(tool.id, "tool", true);
            else applyFilter(tool.id, "tool");
          });
        } else {
          selectfilter.tools.map((tool, i) => {
            applyFilter(selectfilter.education.id, "education");
          });
        }
      }
      if (selectfilter.skill) {
        if (checkFirst(newfilters) === "skill") {
          selectfilter.skill.map((skill, i) => {
            if (i === 0) applyFilter(skill.id, "skill", true);
            else applyFilter(skill.id, "skill");
          });
        } else
          selectfilter.skill.map((skill, i) => {
            applyFilter(skill.id, "skill");
          });
      }
      if (selectfilter.experience) {
        if (checkFirst(newfilters) === "experience")
          applyFilter(selectfilter.experience.id, "experience", true);
        else applyFilter(selectfilter.experience.id, "experience");
      }
    }
  };
  function getName(level) {
    let a;
    level.map((lev) => {
      if (lev !== undefined) {
        a = lev;
      }
    });
    return a;
  }

  const [page, setPage] = React.useState(1);
  function handlePageChange(page, value) {
    setPage(value);
    console.log(value);
  }

  const [page2, setPage2] = React.useState(1);
  function handlePageChange2(page, value) {
    setPage2(value);
    console.log(value);
  }
  const [page3, setPage3] = React.useState(1);
  function handlePageChange3(page, value) {
    setPage3(value);
    console.log(value);
  }

  const [page4, setPage4] = React.useState(1);
  function handlePageChange4(page, value) {
    setPage4(value);
  }

  function resetall() {
    window.location.reload(false);
  }
  console.log(tabs);
  if (
    state.resumeList &&
    state.contactedResumeList &&
    state.shortlistResumeList &&
    state.compareResumeList &&
    !state.loading
  )
    return (
      <div className="levelfilter_body">
        <div className="flex direction-column">
          <div className="col-3" style={{ paddingRight: "20px" }}>
            <h5>Filters</h5>
            <div style={{ background: "#D3D3D3", borderRadius: "5px" }}>
              <List>
                {(selectfilter.education ||
                  selectfilter.experience ||
                  selectfilter.tools ||
                  selectfilter.skill ||
                  selectfilter.education) && (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="sidebar">
                          <div
                            className="sidebar-item open"
                            style={{
                              width: "100% !important",
                              padding: 0,
                            }}
                          >
                            <div className="sidebar-title">
                              <span>Selected Filter</span>
                              <ExpandMoreIcon className="toggle-btn" />
                            </div>
                          </div>
                        </div>
                      </ListItemButton>
                    </ListItem>
                    <div
                      className="sidebar-content-open"
                      style={{
                        margin: 0,
                        width: "100%",
                        backgroundColor: "#fff",
                      }}
                    >
                      {selectfilter && (
                        <>
                          {selectfilter.education && (
                            <Button
                              onClick={(e) => {
                                setnewresumeList(state.resumeList);
                                return removeFilter(
                                  "education",
                                  state.resumeList
                                );
                              }}
                              endIcon={<ClearIcon />}
                              style={{
                                background: "none",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                border: "none",
                                fontSize: "10px",
                                width: "100%",
                                textAlign: "left",
                                color: "black",
                                justifyContent: "space-between",
                              }}
                            >
                              Education ({selectfilter.education.name})
                            </Button>
                          )}
                          {selectfilter.experience && (
                            <Button
                              onClick={(e) => {
                                setnewresumeList(state.resumeList);
                                return removeFilter(
                                  "experience",
                                  state.resumeList
                                );
                              }}
                              endIcon={<ClearIcon />}
                              style={{
                                background: "none",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                border: "none",
                                width: "100%",
                                fontSize: "10px",
                                textAlign: "left",
                                color: "black",
                                justifyContent: "space-between",
                              }}
                            >
                              Experience ({selectfilter.experience.name})
                            </Button>
                          )}
                          {selectfilter.tools && (
                            <Button
                              onClick={(e) => {
                                setnewresumeList(state.resumeList);
                                return removeFilter("tool");
                              }}
                              endIcon={<ClearIcon />}
                              style={{
                                background: "none",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                border: "none",
                                fontSize: "10px",
                                width: "100%",
                                textAlign: "left",
                                color: "black",
                                justifyContent: "space-between",
                              }}
                            >
                              Tool (
                              {selectfilter.tools.map((i) =>
                                selectfilter.tools.length === 1
                                  ? i.name
                                  : `${i.name} ,`
                              )}
                              ,)
                            </Button>
                          )}
                          {selectfilter.skill && (
                            <Button
                              onClick={(e) => {
                                // setnewresumeList(state.resumeList);
                                removeFilter("skill");
                              }}
                              endIcon={<ClearIcon />}
                              style={{
                                background: "none",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                border: "none",
                                fontSize: "10px",
                                width: "100%",
                                textAlign: "left",
                                color: "black",
                                justifyContent: "space-between",
                              }}
                            >
                              Skill (
                              {selectfilter.skill.map((i) =>
                                selectfilter.skill.length === 1
                                  ? i.name
                                  : `${i.name}, `
                              )}
                              )
                            </Button>
                          )}
                          {selectfilter.corporate && (
                            <Button
                              onClick={(e) => {
                                setnewresumeList(state.resumeList);
                                return removeFilter(
                                  "corporate",
                                  state.resumeList
                                );
                              }}
                              endIcon={<ClearIcon />}
                              style={{
                                background: "none",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                border: "none",
                                fontSize: "10px",
                                width: "100%",
                                textAlign: "left",
                                color: "black",
                                justifyContent: "space-between",
                              }}
                            >
                              Corporate ({selectfilter.corporate.name})
                            </Button>
                          )}
                          <Button
                            onClick={(e) => resetall()}
                            style={{
                              background: "none",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              border: "none",
                              fontSize: "10px",
                              width: "100%",
                              textAlign: "left",
                              color: "red",
                              justifyContent: "space-between",
                            }}
                          >
                            Reset All
                          </Button>
                        </>
                      )}
                    </div>
                  </>
                )}
                {!selectfilter.education && (
                  <>
                    <ListItem onClick={openMenu} disablePadding>
                      <ListItemButton>
                        <ListItemIcon style={{ width: "100% !important" }}>
                          <div className="sidebar">
                            <div
                              className={
                                yesopen ? "sidebar-item open" : "sidebar-item"
                              }
                              style={{
                                width: "100% !important",
                                padding: 0,
                              }}
                            >
                              <div className="sidebar-title">
                                <span>Education</span>
                                <ExpandMoreIcon className="toggle-btn" />
                              </div>
                            </div>
                          </div>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <div
                      className={
                        yesopen ? "sidebar-content-open" : "sidebar-content"
                      }
                      style={{ margin: 0 }}
                    >
                      {state.educationFilter &&
                        state.educationFilter.map((edu) => {
                          if (!newresumeList) {
                            if (
                              deep &&
                              deep.filter(
                                (i) =>
                                  i.educationlevelid === edu.educationlevelid
                              ).length > 0
                            )
                              return (
                                <button
                                  onClick={(e) =>
                                    applyFilter(
                                      edu.educationlevelid,
                                      "education"
                                    )
                                  }
                                  key={edu.code}
                                  style={{
                                    background: "none",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  {`${edu.name} (${
                                    !newresumeList
                                      ? deep &&
                                        deep.filter(
                                          (i) =>
                                            i.educationlevelid ===
                                            edu.educationlevelid
                                        ).length
                                      : newresumeList.filter(
                                          (i) =>
                                            i.educationlevelid ===
                                            edu.educationlevelid
                                        ).length
                                  })`}
                                </button>
                              );
                          } else {
                            if (
                              newresumeList.filter(
                                (i) =>
                                  i.educationlevelid === edu.educationlevelid
                              ).length > 0
                            )
                              return (
                                <button
                                  onClick={(e) =>
                                    applyFilter(
                                      edu.educationlevelid,
                                      "education"
                                    )
                                  }
                                  key={edu.code}
                                  style={{
                                    background: "none",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  {`${edu.name} (${
                                    !newresumeList
                                      ? deep &&
                                        deep.filter(
                                          (i) =>
                                            i.educationlevelid ===
                                            edu.educationlevelid
                                        ).length
                                      : newresumeList.filter(
                                          (i) =>
                                            i.educationlevelid ===
                                            edu.educationlevelid
                                        ).length
                                  })`}
                                </button>
                              );
                          }
                        })}
                    </div>
                  </>
                )}
                {!selectfilter.experience && (
                  <>
                    <ListItem onClick={openMenu2} disablePadding>
                      <ListItemButton>
                        <ListItemIcon style={{ width: "100% !important" }}>
                          <div className="sidebar">
                            <div
                              className={
                                yesopen2 ? "sidebar-item open" : "sidebar-item"
                              }
                              style={{
                                width: "100% !important",
                                padding: 0,
                              }}
                            >
                              <div className="sidebar-title">
                                <span>Experience</span>
                                <ExpandMoreIcon className="toggle-btn" />
                              </div>
                            </div>
                          </div>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <div
                      className={
                        yesopen2 ? "sidebar-content-open" : "sidebar-content"
                      }
                      style={{ margin: 0 }}
                    >
                      {state.experienceFilter &&
                        state.experienceFilter.map((exp) => {
                          if (!newresumeList) {
                            if (
                              deep &&
                              deep.filter(
                                (i) =>
                                  i.experiencelevelid === exp.experiencelevelid
                              ).length > 0
                            )
                              return (
                                <button
                                  onClick={(e) =>
                                    applyFilter(
                                      exp.experiencelevelid,
                                      "experience"
                                    )
                                  }
                                  key={exp.experiencelevelid}
                                  style={{
                                    background: "none",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  {`${exp.name} (${
                                    !newresumeList
                                      ? deep &&
                                        deep.filter(
                                          (i) =>
                                            i.experiencelevelid ===
                                            exp.experiencelevelid
                                        ).length
                                      : newresumeList.filter(
                                          (i) =>
                                            i.experiencelevelid ===
                                            exp.experiencelevelid
                                        ).length
                                  })`}
                                </button>
                              );
                          } else {
                            if (
                              newresumeList.filter(
                                (i) =>
                                  i.experiencelevelid === exp.experiencelevelid
                              ).length > 0
                            )
                              return (
                                <button
                                  onClick={(e) =>
                                    applyFilter(
                                      exp.experiencelevelid,
                                      "experience"
                                    )
                                  }
                                  key={exp.experiencelevelid}
                                  style={{
                                    background: "none",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  {`${exp.name} (${
                                    !newresumeList
                                      ? deep &&
                                        deep.filter(
                                          (i) =>
                                            i.experiencelevelid ===
                                            exp.experiencelevelid
                                        ).length
                                      : newresumeList.filter(
                                          (i) =>
                                            i.experiencelevelid ===
                                            exp.experiencelevelid
                                        ).length
                                  })`}
                                </button>
                              );
                          }
                        })}
                    </div>
                  </>
                )}
                <>
                  <ListItem onClick={openMenu3} disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ width: "100% !important" }}>
                        <div className="sidebar">
                          <div
                            className={
                              yesopen3 ? "sidebar-item open" : "sidebar-item"
                            }
                            style={{
                              width: "100% !important",
                              padding: 0,
                            }}
                          >
                            <div className="sidebar-title">
                              <span>Tools</span>
                              <ExpandMoreIcon className="toggle-btn" />
                            </div>
                          </div>
                        </div>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                  <div
                    className={
                      yesopen3 ? "sidebar-content-open" : "sidebar-content"
                    }
                    style={{ margin: 0 }}
                  >
                    {state.toolsFilter &&
                      state.toolsFilter.map((exp) => {
                        if (!newresumeList) {
                          if (
                            deep &&
                            deep.filter(
                              (i) =>
                                i.resumeTools.filter(
                                  (i) => exp.toolid === i.toolid
                                ).length > 0
                            ).length > 0
                          )
                            return (
                              <FormControlLabel
                                value="end"
                                onClick={(e) => {
                                  if (
                                    e.target.checked === undefined ||
                                    e.target.checked === true
                                  ) {
                                    applyFilter(exp.toolid, "tool");
                                  } else {
                                    removeFilter(
                                      "tool",
                                      selectfilter.tools.filter(
                                        (i) => i.id === exp.toolid
                                      )[0]
                                    );
                                  }
                                }}
                                key={exp.toolid}
                                control={<Checkbox />}
                                label={`${exp.toolname} (${
                                  !newresumeList
                                    ? deep &&
                                      deep.filter(
                                        (i) =>
                                          i.resumeTools.filter(
                                            (i) => exp.toolid === i.toolid
                                          ).length > 0
                                      ).length
                                    : newresumeList.filter(
                                        (i) =>
                                          i.resumeTools.filter(
                                            (i) => exp.toolid === i.toolid
                                          ).length > 0
                                      ).length
                                })`}
                                labelPlacement="end"
                              />
                            );
                        } else {
                          if (
                            newresumeList.filter(
                              (i) =>
                                i.resumeTools.filter(
                                  (i) => exp.toolid === i.toolid
                                ).length > 0
                            ).length > 0
                          )
                            return (
                              <FormControlLabel
                                value="end"
                                onClick={(e) => {
                                  if (
                                    e.target.checked === undefined ||
                                    e.target.checked === true
                                  ) {
                                    applyFilter(exp.toolid, "tool");
                                  } else {
                                    removeFilter(
                                      "tool",
                                      selectfilter.tools.filter(
                                        (i) => i.id === exp.toolid
                                      )[0]
                                    );
                                  }
                                }}
                                key={exp.toolid}
                                control={<Checkbox />}
                                label={`${exp.toolname} (${
                                  !newresumeList
                                    ? deep &&
                                      deep.filter(
                                        (i) =>
                                          i.resumeTools.filter(
                                            (i) => exp.toolid === i.toolid
                                          ).length > 0
                                      ).length
                                    : newresumeList.filter(
                                        (i) =>
                                          i.resumeTools.filter(
                                            (i) => exp.toolid === i.toolid
                                          ).length > 0
                                      ).length
                                })`}
                                labelPlacement="end"
                              />
                            );
                        }
                      })}
                  </div>
                </>
                <>
                  <ListItem onClick={openMenu4} disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ width: "100% !important" }}>
                        <div className="sidebar">
                          <div
                            className={
                              yesopen4 ? "sidebar-item open" : "sidebar-item"
                            }
                            style={{
                              width: "100% !important",
                              padding: 0,
                            }}
                          >
                            <div className="sidebar-title">
                              <span>Skills</span>
                              <ExpandMoreIcon className="toggle-btn" />
                            </div>
                          </div>
                        </div>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                  <div
                    className={
                      yesopen4 ? "sidebar-content-open" : "sidebar-content"
                    }
                    style={{ margin: 0 }}
                  >
                    {state.skillsFilter &&
                      state.skillsFilter.map((exp) => {
                        if (!newresumeList) {
                          if (
                            deep &&
                            deep.filter(
                              (i) =>
                                i.skillResume.filter(
                                  (i) => exp.skillid === i.skillid
                                ).length > 0
                            ).length > 0
                          )
                            return (
                              <FormControlLabel
                                defaultChecked={
                                  selectfilter.skill
                                    ? selectfilter.skill.some(
                                        (index) => index.id === exp.skillid
                                      )
                                    : false
                                }
                                value={exp.skillid}
                                onClick={(e) => {
                                  console.log(e.target.checked);
                                  if (
                                    e.target.checked === undefined ||
                                    e.target.checked === true
                                  ) {
                                    applyFilter(
                                      exp.skillid,
                                      "skill",
                                      false,
                                      e.target.value
                                    );
                                  } else {
                                    removeFilter("A");
                                    // applyFilter(
                                    //   exp.skillid,
                                    //   "skill",
                                    //   false,
                                    //   e.target.value
                                    // );
                                  }
                                }}
                                key={exp.skillid}
                                control={<Checkbox />}
                                label={`${exp.skillname} (${
                                  !newresumeList
                                    ? deep &&
                                      deep.filter(
                                        (i) =>
                                          i.skillResume.filter(
                                            (i) => exp.skillid === i.skillid
                                          ).length > 0
                                      ).length
                                    : newresumeList.filter(
                                        (i) =>
                                          i.skillResume.filter(
                                            (i) => exp.skillid === i.skillid
                                          ).length > 0
                                      ).length
                                })`}
                                labelPlacement="end"
                              />
                            );
                        } else {
                          if (
                            newresumeList.filter(
                              (i) =>
                                i.skillResume.filter(
                                  (i) => exp.skillid === i.skillid
                                ).length > 0
                            ).length > 0
                          )
                            return (
                              <FormControlLabel
                                defaultChecked={
                                  selectfilter.skill
                                    ? selectfilter.skill.some(
                                        (index) => index.id === exp.skillid
                                      )
                                    : false
                                }
                                value={exp.skillid}
                                onClick={(e) => {
                                  // console.log(e.target.checked);
                                  if (
                                    e.target.checked === undefined ||
                                    e.target.checked === true
                                  ) {
                                    applyFilter(
                                      exp.skillid,
                                      "skill",
                                      false,
                                      e.target.value
                                    );
                                  } else {
                                    removeFilter(
                                      "skill",
                                      selectfilter.skill &&
                                        selectfilter.skill.filter(
                                          (i) => i.id === exp.skillid
                                        )[0]
                                    );
                                    // applyFilter(
                                    //   exp.skillid,
                                    //   "skill",
                                    //   false,
                                    //   e.target.value
                                    // );
                                  }
                                }}
                                key={exp.skillid}
                                control={<Checkbox />}
                                label={`${exp.skillname} (${
                                  !newresumeList
                                    ? deep &&
                                      deep.filter(
                                        (i) =>
                                          i.skillResume.filter(
                                            (i) => exp.skillid === i.skillid
                                          ).length > 0
                                      ).length
                                    : newresumeList.filter(
                                        (i) =>
                                          i.skillResume.filter(
                                            (i) => exp.skillid === i.skillid
                                          ).length > 0
                                      ).length
                                })`}
                                labelPlacement="end"
                              />
                            );
                        }
                      })}
                  </div>
                </>
                {!selectfilter.corporate && (
                  <>
                    <ListItem onClick={openMenu5} disablePadding>
                      <ListItemButton>
                        <ListItemIcon style={{ width: "100% !important" }}>
                          <div className="sidebar">
                            <div
                              className={
                                yesopen5 ? "sidebar-item open" : "sidebar-item"
                              }
                              style={{
                                width: "100% !important",
                                padding: 0,
                              }}
                            >
                              <div className="sidebar-title">
                                <span>Corporate</span>
                                <ExpandMoreIcon className="toggle-btn" />
                              </div>
                            </div>
                          </div>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    <div
                      className={
                        yesopen5 ? "sidebar-content-open" : "sidebar-content"
                      }
                      style={{ margin: 0 }}
                    >
                      {state.corporateFilter &&
                        state.corporateFilter.map((exp) => {
                          if (!newresumeList) {
                            if (
                              deep &&
                              deep.filter(
                                (i) =>
                                  i.resumeHeaderCorporate.filter(
                                    (i) => exp.exposureid === i.exposureid
                                  ).length > 0
                              ).length > 0
                            )
                              return (
                                <button
                                  onClick={(e) =>
                                    applyFilter(exp.exposureid, "corporate")
                                  }
                                  key={exp.exposureid}
                                  style={{
                                    background: "none",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  {`${exp.name} (${
                                    !newresumeList
                                      ? deep &&
                                        deep.filter(
                                          (i) =>
                                            i.resumeHeaderCorporate.filter(
                                              (i) =>
                                                exp.exposureid === i.exposureid
                                            ).length > 0
                                        ).length
                                      : newresumeList.filter(
                                          (i) =>
                                            i.resumeHeaderCorporate.filter(
                                              (i) =>
                                                exp.exposureid === i.exporsureid
                                            ).length > 0
                                        ).length
                                  })`}
                                </button>
                              );
                          } else {
                            if (
                              newresumeList.filter(
                                (i) =>
                                  i.resumeHeaderCorporate.filter(
                                    (i) => exp.exposureid === i.exporsureid
                                  ).length > 0
                              ).length > 0
                            )
                              return (
                                <button
                                  onClick={(e) =>
                                    applyFilter(exp.exposureid, "corporate")
                                  }
                                  key={exp.exposureid}
                                  style={{
                                    background: "none",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  {`${exp.name} (${
                                    !newresumeList
                                      ? deep &&
                                        deep.filter(
                                          (i) =>
                                            i.resumeHeaderCorporate.filter(
                                              (i) =>
                                                exp.exposureid === i.exposureid
                                            ).length > 0
                                        ).length
                                      : newresumeList.filter(
                                          (i) =>
                                            i.resumeHeaderCorporate.filter(
                                              (i) =>
                                                exp.exposureid === i.exporsureid
                                            ).length > 0
                                        ).length
                                  })`}
                                </button>
                              );
                          }
                        })}
                    </div>
                  </>
                )}
              </List>
            </div>
            <br />
          </div>
          <div className="col">
            {location.state && !location.state.requisitionid ? (
              <h6 style={{ fontSize: "15px" }}>
                {location.state.level_1 && location.state.nameLevel1}
                {location.state.level_2 &&
                  `/${getName(location.state.nameLevel2)}`}
                {location.state.level_3 &&
                  `/${getName(location.state.nameLevel3)}`}
                {location.state.level_4 &&
                  `/${getName(location.state.nameLevel4)}`}
                {location.state.level_5 &&
                  `/${getName(location.state.nameLevel5)}`}{" "}
                {tabs === 0 &&
                  `(${
                    state.resumeList && !newresumeList
                      ? getUnique(state.resumeList).length
                      : newresumeList
                      ? newresumeList.length
                      : 0
                  })`}
                {tabs === 1 && `(${state.compareResumeList.length})`}
                {tabs === 2 && `(${state.shortlistResumeList.length})`}
                {tabs === 3 && `(${state.contactedResumeList.length})`}
              </h6>
            ) : (
              state.singleRequisition && (
                <>
                  <h6 style={{ fontSize: "15px" }}>
                    {state.singleRequisition.mergeleveldiscriptions}
                    {tabs === 0 &&
                      `(${
                        state.resumeList && !newresumeList
                          ? getUnique(state.resumeList).length
                          : newresumeList
                          ? newresumeList.length
                          : 0
                      })`}
                    {tabs === 1 && `(${state.compareResumeList.length})`}
                    {tabs === 2 && `(${state.shortlistResumeList.length})`}
                    {tabs === 3 && `(${state.contactedResumeList.length})`}
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>
                      <b>Requisition ID : </b>
                      {state.singleRequisition.requisitionno}
                    </p>
                    <p>
                      <b>Total Time To Fill : </b>
                      {state.singleRequisition.noofdays}
                    </p>
                    <p>
                      <b>No of Positions : </b>
                      {state.singleRequisition.totalteam}
                    </p>
                    <p>
                      <b>Total Team Cost : </b>
                      {state.singleRequisition.teamcost}
                    </p>
                  </div>
                </>
              )
            )}
            <h5>Resumes</h5>
            <Box sx={{ bgcolor: "background.paper" }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="scrollable"
                  aria-label="full width tabs example"
                  style={{ width: "100%", color: "block", background: "white" }}
                >
                  <Tab
                    style={{ color: "black" }}
                    label="Resume List"
                    onClick={(e) => setTabs(0)}
                    {...a11yProps(0)}
                  />
                  <Tab
                    style={{ color: "black" }}
                    label={`Compare List (${
                      state.compareResumeList
                        ? getUnique(state.compareResumeList).length
                        : 0
                    })`}
                    onClick={(e) => setTabs(1)}
                    {...a11yProps(1)}
                  />
                  <Tab
                    style={{ color: "black" }}
                    label={`Shortlist Resume (${
                      state.shortlistResumeList
                        ? getUnique(state.shortlistResumeList).length
                        : 0
                    })`}
                    onClick={(e) => setTabs(2)}
                    {...a11yProps(2)}
                  />
                  <Tab
                    style={{ color: "black" }}
                    label={`Contracted Resume (${
                      state.contactedResumeList
                        ? getUnique(state.contactedResumeList).length
                        : 0
                    })`}
                    onClick={(e) => setTabs(4)}
                    {...a11yProps(3)}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  {!state.loading ? (
                    !newresumeList ? (
                      state.resumeList &&
                      paginate(getUnique(state.resumeList), page, 10).map(
                        (resume) => {
                          return (
                            <>
                              <Cards
                                data={resume}
                                comparewith={
                                  state.compareResumeList &&
                                  state.compareResumeList
                                }
                              />
                              <br />
                            </>
                          );
                        }
                      )
                    ) : (
                      paginate(newresumeList, page, 10).map((resume) => {
                        return (
                          <>
                            <Cards
                              data={resume}
                              comparewith={
                                state.compareResumeList &&
                                state.compareResumeList
                              }
                            />
                            <br />
                          </>
                        );
                      })
                    )
                  ) : (
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
                  )}
                  {state.resumeList && (
                    <Stack spacing={4}>
                      <Pagination
                        count={
                          state.resumeList && !newresumeList
                            ? Math.ceil(state.resumeList.length / 10)
                            : Math.ceil(newresumeList.length / 10)
                        }
                        page={page}
                        onChange={handlePageChange}
                      />
                    </Stack>
                  )}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      flexWrap: "wrap",
                    }}
                  >
                    {!state.loading ? (
                      state.compareResumeList &&
                      paginate(
                        getUnique(state.compareResumeList),
                        page,
                        10
                      ).map((compare) => {
                        return (
                          <>
                            <CardsCompare data={compare} type="compare" />
                          </>
                        );
                      })
                    ) : (
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
                    )}
                    {state.compareResumeList && (
                      <Stack spacing={4}>
                        <Pagination
                          count={Math.ceil(state.compareResumeList.length / 10)}
                          page={page2}
                          onChange={handlePageChange2}
                        />
                      </Stack>
                    )}
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  {!state.loading ? (
                    state.shortlistResumeList &&
                    paginate(
                      getUnique(state.shortlistResumeList),
                      page,
                      10
                    ).map((short) => {
                      return <CardsCompare data={short} type="shortlist" />;
                    })
                  ) : (
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
                  )}
                  {state.shortlistResumeList && (
                    <Stack spacing={4}>
                      <Pagination
                        count={Math.ceil(state.shortlistResumeList.length / 10)}
                        page={page3}
                        onChange={handlePageChange3}
                      />
                    </Stack>
                  )}
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                  {!state.loading ? (
                    state.contactedResumeList &&
                    paginate(
                      getUnique(state.contactedResumeList),
                      page,
                      10
                    ).map((contacted) => {
                      return <CardsCompare data={contacted} type="contact" />;
                    })
                  ) : (
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
                  )}
                  {state.contactedResumeList && (
                    <Stack spacing={4}>
                      <Pagination
                        count={Math.ceil(state.contactedResumeList.length / 10)}
                        page={page4}
                        onChange={handlePageChange4}
                      />
                    </Stack>
                  )}
                </TabPanel>
              </SwipeableViews>
            </Box>
          </div>
        </div>
      </div>
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
  getresume,
  getresumeshortlist,
  getresumecontacted,
  getresumecompare,
  geteducation,
  getexperience,
  getsinglerequisition,
  getskills,
  gettools,
  getcorporate,
  getcompare,
  getshortlist,
  getcontact,
  filterResumes,
})(LevelFilter);
