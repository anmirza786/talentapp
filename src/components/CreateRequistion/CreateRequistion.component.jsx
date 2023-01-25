import "./CreateRequistion.styles.css";
import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  postrequisition,
  getdicpline,
  getoccupation,
  getspecility,
  getfilters,
} from "../../redux-implementation/actions";
import Loader from "../Loaders/Loader";
const CreateRequistion = ({
  postrequisition,
  getdicpline,
  getoccupation,
  getspecility,
  getfilters,
  state,
}) => {
  let navigate = useNavigate();
  React.useEffect(() => {
    getdicpline();
    getoccupation();
    getspecility();
    getfilters();
  }, [getdicpline, getoccupation, getspecility, getfilters]);
  //this code is for close alert by button
  const [open, setOpen] = React.useState(true);

  //this code is for display alert
  const [alertshow, setalertshow] = React.useState(true);

  //this code is for validation
  const [disciplane, setdisciplane] = React.useState();
  const [occupationval, setoccupationval] = React.useState();
  const [specialityval, setspecialityval] = React.useState();
  const [requistionno, setrequistionno] = React.useState();
  const [totalteam, settotalteam] = React.useState();
  const [teamcost, setteamcostno] = React.useState();
  const [noofdays, setnoofdays] = React.useState();
  const [startdate, setstartdate] = React.useState();
  const [enddate, setenddate] = React.useState();
  const [salaryfrom, setsalaryfrom] = React.useState();
  const [salaryto, setsalaryto] = React.useState();

  //this code is for diplay or hide the occuption select
  const [occupation, setoccupation] = React.useState("");
  const [speciality, setSpeciality] = React.useState("");

  //this code is for value of select form
  const [age, setAge] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [startdateval, setstartdateval] = React.useState("");
  const [enddateval, setenddateval] = React.useState("");

  const startdatefunc = (e) => {
    setstartdateval(e.target.value);
    setstartdate(e.target.value);
  };

  const enddatefunc = (e) => {
    setenddateval(e.target.value);
    setenddate(e.target.value);
  };

  const handletextvalidation = (e) => {
    if (e.target.name === "teamcost") {
      setteamcostno(e.target.value);
    }
    if (e.target.name === "noofdays") {
      setnoofdays(e.target.value);
    }
    if (e.target.name === "totalteam") {
      settotalteam(e.target.value);
    }
    if (e.target.name === "requisitionno") {
      setrequistionno(e.target.value);
    }

    if (e.target.name === "salaryfrom") {
      setsalaryfrom(e.target.value);
    }

    if (e.target.name === "salaryto") {
      setsalaryto(e.target.value);
    }
  };
  const [disciplaneval, setdisciplaneval] = React.useState();
  const handleChange = (event) => {
    setoccupation(event.target.value);
    setdisciplaneval(event.target.value);
    setAge(event.target.value);
    if (event.target.value === 2) {
      setSpeciality(0);
    }
    if (event.target.value.length !== 0) {
      setSpeciality(0);
      setdisciplane(true);
    } else {
      setdisciplane(false);
    }
  };

  const handleChange2 = (event) => {
    setSpeciality(event.target.value);
    setAge2(event.target.value);
    if (event.target.value.length !== 0) {
      setoccupationval(true);
    } else {
      setoccupationval(false);
    }
  };
  const handlechange3 = (event) => {
    setspecialityval(event.target.value);
  };

  const handledisciplin = (event) => {
    setdisciplane(false);
    if (event.target.value.length !== 0) {
      setdisciplane(true);
    } else {
      setdisciplane(false);
    }
  };

  const handleoccupation = (event) => {
    setoccupationval(false);
    if (event.target.value !== 0) {
      setoccupationval(true);
    } else {
      setoccupationval(false);
    }
  };
  const [level1, setlevel1] = React.useState("");
  const [level2, setlevel2] = React.useState("");
  const [level3, setlevel3] = React.useState("");
  const [level4, setlevel4] = React.useState("");
  const [level5, setlevel5] = React.useState("");

  const level1func = (event) => {
    setlevel1(event.target.value);
  };

  const level2func = (event) => {
    setlevel2(event.target.value);
  };
  const level3func = (event) => {
    setlevel3(event.target.value);
  };

  const level4func = (event) => {
    setlevel4(event.target.value);
  };
  const level5func = (event) => {
    setlevel5(event.target.value);
  };
  const mergedecfunc = () => {
    let l1, l2, l3, l4, l5;
    state.level1.map((lev) => {
      if (lev.code === level1) {
        l1 = lev.description;
      }
    });
    state.level2.map((lev) => {
      if (lev.code === level2) {
        l2 = lev.description;
      }
    });
    state.level3.map((lev) => {
      if (lev.code === level3) {
        l3 = lev.description;
      }
    });
    state.level4.map((lev) => {
      if (lev.code === level4) {
        l4 = lev.description;
      }
    });
    state.level5.map((lev) => {
      if (lev.code === level5) {
        l5 = lev.description;
      }
    });
    if (
      l1 !== undefined &&
      l5 === undefined &&
      l4 === undefined &&
      l3 === undefined &&
      l2 === undefined
    )
      return `${l1}`;
    if (
      l2 !== undefined &&
      l5 === undefined &&
      l4 === undefined &&
      l3 === undefined
    )
      return `${l1}/ ${l2}`;
    if (l3 !== undefined && l5 === undefined && l4 === undefined)
      return `${l1}/ ${l2}/ ${l3}`;
    if (l4 !== undefined && l5 === undefined)
      return `${l1}/ ${l2}/ ${l3}/ ${l4}`;
    if (l5 !== undefined) return `${l1}/ ${l2}/ ${l3}/ ${l4}/ ${l5}`;
  };
  const Status = 1;
  const formsubmit = (e) => {
    e.preventDefault();
    if (
      requistionno &&
      totalteam &&
      teamcost &&
      noofdays &&
      startdateval &&
      enddateval &&
      salaryfrom &&
      salaryto &&
      level1
    ) {
      alert("Form Succesfully Submitted");
      let a = mergedecfunc();
      postrequisition(
        disciplaneval,
        age2,
        specialityval,
        requistionno,
        totalteam,
        teamcost,
        noofdays,
        startdateval,
        enddateval,
        salaryfrom,
        salaryto,
        level1,
        level2,
        level3,
        level4,
        level5,
        a,
        Status
      );
      navigate("/RequistionLog");
    } else {
      alert(
        "All the required Previlages Are not filled kindly check the and fill all the fields with *."
      );
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setalertshow(true);
    }, 4000);
  }, [alertshow]);
  if (
    state.level1 &&
    state.level2 &&
    state.level3 &&
    state.level4 &&
    state.level5
  )
    return (
      <>
        <div className="createrequistion_body">
          {alertshow ? (
            ""
          ) : (
            <Box sx={{ width: "100%" }}>
              <Collapse in={open}>
                <Alert
                  variant="filled"
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Form Not Submite!!! Please Fill The Form Again
                </Alert>
              </Collapse>
            </Box>
          )}
          <div className="row">
            <h2>Create New Requisition</h2>
          </div>
          <hr />
          {/* <div className="row">
          <div className="col-xl-6">
            <div>
              <FormControl
                sx={{
                  m: 1,
                  width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Discipline
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  label="discipline"
                  onClick={handledisciplin}
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {state.discipline &&
                    state.discipline.map((special) => (
                      <MenuItem value={special.disciplineid}>
                        {special.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <br />
              {disciplane === true ? (
                <small></small>
              ) : disciplane === false ? (
                <small>Please Select The Value</small>
              ) : (
                <small></small>
              )}
            </div>
          </div>
          <div className="col-xl-6">
            {state.occupation && occupation === 1 && (
              <div>
                <FormControl
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Occupation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age2}
                    onChange={handleChange2}
                    autoWidth
                    label="discipline"
                    onClick={handleoccupation}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {state.occupation.map((occupa) => {
                      if (occupa.disciplineid === age) {
                        return (
                          <MenuItem value={occupa.occupationid}>
                            {occupa.name}
                          </MenuItem>
                        );
                      }
                    })}
                  </Select>
                </FormControl>
                <br />
                {occupationval === true ? (
                  <small></small>
                ) : occupationval === false ? (
                  <small>Please Select The Value</small>
                ) : (
                  <small></small>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            {state.specility && speciality > 0 && (
              <div>
                <FormControl
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Speciality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={specialityval}
                    onChange={handlechange3}
                    autoWidth
                    label="specility"
                    onClick={handleoccupation}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {state.specility.map((special) => {
                      if (age2 === special.occupationid) {
                        return (
                          <MenuItem value={special.specialityid}>
                            {special.name}
                          </MenuItem>
                        );
                      }
                    })}
                  </Select>
                </FormControl>
              </div>
            )}
          </div>
        </div> */}
          <div className="row">
            <div className="col-xl-6">
              <div>
                <FormControl
                  required
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Level1
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="Level1"
                    value={level1}
                    onChange={level1func}
                    autoWidth
                    label="Level1"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    {state.level1 && (
                      <MenuItem value={state.level1[0].code}>
                        {state.level1[0].description}
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-xl-6">
              <div>
                <FormControl
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Level2
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="Level2"
                    value={level2}
                    onChange={level2func}
                    autoWidth
                    label="Level2"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    {state.level2 &&
                      state.level2.map((level) => (
                        <MenuItem value={level.code}>
                          {level.description}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div>
                <FormControl
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Level3
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="level3"
                    value={level3}
                    onChange={level3func}
                    autoWidth
                    label="Level3"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    {state.level3 &&
                      state.level3.map((level) => {
                        if (level2 !== null) {
                          const split = level2.split("");
                          if (split[1] === level.code.split("")[1]) {
                            return (
                              <MenuItem value={level.code}>
                                {level.description}
                              </MenuItem>
                            );
                          }
                        }
                      })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-xl-6">
              <div>
                <FormControl
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Level4
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={level4}
                    onChange={level4func}
                    autoWidth
                    label="Level4"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    {state.level4 &&
                      state.level4.map((level) => {
                        if (level3 !== null) {
                          const split = level3.split("");
                          if (split[2] === level.code.split("")[2]) {
                            return (
                              <MenuItem value={level.code}>
                                {level.description}
                              </MenuItem>
                            );
                          }
                        }
                      })}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div>
                <FormControl
                  sx={{
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Level5
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={level5}
                    onChange={level5func}
                    autoWidth
                    label="Level5"
                  >
                    <MenuItem value={null}>
                      <em>None</em>
                    </MenuItem>
                    {state.level5 &&
                      state.level5.map((level) => {
                        if (level4 !== null) {
                          const split = level4.split("");
                          if (split[3] === level.code.split("")[3]) {
                            return (
                              <MenuItem value={level.code}>
                                {level.description}
                              </MenuItem>
                            );
                          }
                        }
                      })}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  id="requisitionno"
                  name="requisitionno"
                  onChange={handletextvalidation}
                  label="Requisition No"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br /> {requistionno === false ? <small>Required</small> : ""}
              </Box>
            </div>

            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="number"
                  onChange={handletextvalidation}
                  name="totalteam"
                  id="totalteam"
                  label="Total Team"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                {totalteam === false ? <small>Required</small> : ""}
              </Box>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="number"
                  id="teamcost"
                  onChange={handletextvalidation}
                  name="teamcost"
                  label="Team Cost"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br /> {teamcost === false ? <small>Required</small> : ""}
              </Box>
            </div>

            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="number"
                  onChange={handletextvalidation}
                  name="noofdays"
                  id="noofdays"
                  label="No Of Days"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                {noofdays === false ? <small>Required</small> : ""}
              </Box>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="date"
                  value={startdateval}
                  onSelect={(e) => {
                    setstartdateval(e.target.value);
                    console.log(startdateval);
                  }}
                  onChange={(e) => setstartdateval(e.target.value)}
                  id="standard-basic"
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                {startdate === false ? <small>Required</small> : ""}
              </Box>
            </div>
            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="date"
                  value={enddateval}
                  onSelect={(e) => setenddateval(e.target.value)}
                  onChange={(e) => setenddateval(e.target.value)}
                  label="End Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                {enddate === false ? <small>Required</small> : ""}
              </Box>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="number"
                  id="salaryfrom"
                  name="salaryfrom"
                  onChange={handletextvalidation}
                  label="Salary From"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br /> {salaryfrom === false ? <small>Required</small> : ""}
              </Box>
            </div>

            <div className="col-xl-6">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  required
                  type="number"
                  onChange={handletextvalidation}
                  id="salaryto"
                  name="salaryto"
                  label="Salary To"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br />
                {salaryto === false ? <small>Required</small> : ""}
              </Box>
            </div>
          </div>
          {/* <div className="row">
          <div className="col-xl-6">
            <div>
              <FormControl
                sx={{
                  m: 1,
                  width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Level1
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="Level1"
                  value={level1}
                  onChange={level1func}
                  autoWidth
                  label="Level1"
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {state.level1 && (
                    <MenuItem value={state.level1[0].code}>
                      {state.level1[0].description}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-xl-6">
            <div>
              <FormControl
                sx={{
                  m: 1,
                  width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Level2
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="Level2"
                  value={level2}
                  onChange={level2func}
                  autoWidth
                  label="Level2"
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {state.level2 &&
                    state.level2.map((level) => (
                      <MenuItem value={level.code}>
                        {level.description}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div>
              <FormControl
                sx={{
                  m: 1,
                  width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Level3
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="level3"
                  value={level3}
                  onChange={level3func}
                  autoWidth
                  label="Level3"
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {state.level3 &&
                    state.level3.map((level) => {
                      const split = level2.split("");
                      if (split[1] === level.code.split("")[1]) {
                        return (
                          <MenuItem value={level.code}>
                            {level.description}
                          </MenuItem>
                        );
                      }
                    })}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-xl-6">
            <div>
              <FormControl
                sx={{
                  m: 1,
                  width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Level4
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={level4}
                  onChange={level4func}
                  autoWidth
                  label="Level4"
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {state.level4 &&
                    state.level4.map((level) => {
                      const split = level3.split("");
                      if (split[2] === level.code.split("")[2]) {
                        return (
                          <MenuItem value={level.code}>
                            {level.description}
                          </MenuItem>
                        );
                      }
                    })}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div>
              <FormControl
                sx={{
                  m: 1,
                  width: { xs: 300, sm: 300, md: 400, lg: 400, xl: 400 },
                }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Level5
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={level5}
                  onChange={level5func}
                  autoWidth
                  label="Level5"
                >
                  <MenuItem value={null}>
                    <em>None</em>
                  </MenuItem>
                  {state.level5 &&
                    state.level5.map((level) => {
                      const split = level4.split("");
                      if (split[3] === level.code.split("")[3]) {
                        return (
                          <MenuItem value={level.code}>
                            {level.description}
                          </MenuItem>
                        );
                      }
                    })}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>{" "} */}
          <br />
          <div
            className="row"
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <div style={{ width: "30%" }}>
              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/RequistionLog");
                }}
              >
                Cancel
              </Button>
            </div>

            <div style={{ width: "30%" }}>
              <Button
                variant="contained"
                className="btncreaterequisition"
                onClick={formsubmit}
              >
                Create
              </Button>
            </div>
          </div>
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
export default connect(mapStateToProps, {
  postrequisition,
  getdicpline,
  getoccupation,
  getspecility,
  getfilters,
})(CreateRequistion);
