import "./SearchTalent.styles.css";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getfilters } from "../../redux-implementation/actions";

const SearchTalent = ({ state, getfilters }) => {
  React.useEffect(() => {
    getfilters();
  }, [getfilters]);
  let navigate = useNavigate();

  //this code is for value of select form
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

  const formsubmit = (e) => {
    if (level1 !== "") {
      let l1name = state.level1.map((l) => {
        if (l.code === level1) {
          return l.description;
        }
      });
      let l2name = state.level2.map((l) => {
        if (l.code === level2) {
          return l.description;
        }
      });
      let l3name = state.level3.map((l) => {
        if (l.code === level3) {
          return l.description;
        }
      });
      let l4name = state.level4.map((l) => {
        if (l.code === level4) {
          return l.description;
        }
      });
      let l5name = state.level5.map((l) => {
        if (l.code === level5) {
          return l.description;
        }
      });
      navigate("/SearchTalent/Resume", {
        state: {
          level_1: level1,
          nameLevel1: l1name[0],
          level_2: level2,
          nameLevel2: l2name,
          level_3: level3,
          nameLevel3: l3name,
          level_4: level4,
          nameLevel4: l4name,
          level_5: level5,
          nameLevel5: l5name,
        },
      });
    } else {
      alert("Please Select a Level");
    }
  };

  return (
    <div className="Searchtalent_body">
      <div style={{ width: "300px" }}>
        <div className="row">
          <h2>Filter Resume</h2>
        </div>
        <hr />
        {/* <div className="row">
          <div className="col-xl-6"> */}
        <div>
          <FormControl
            sx={{
              m: 1,
              // width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
              width: "100%",
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
              <MenuItem value="">
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
        {/* </div>
          <div className="col-xl-6"> */}
        <div>
          <FormControl
            sx={{
              m: 1,
              // width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
              width: "100%",
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {state.level2 &&
                state.level2.map((level) => (
                  <MenuItem value={level.code}>{level.description}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        {/* </div>
        </div> */}
        {/* <div className="row">
          <div className="col-xl-6"> */}
        <div>
          <FormControl
            sx={{
              m: 1,
              // width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
              width: "100%",
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
              <MenuItem value="">
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
          {/* </div> */}
        </div>
        {/* <div className="col-xl-6"> */}
        <div>
          <FormControl
            sx={{
              m: 1,
              // width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
              width: "100%",
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
              <MenuItem value="">
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
        {/* </div>
        </div> */}
        {/* <div className="row">
          <div className="col-xl-6"> */}
        <div>
          <FormControl
            sx={{
              m: 1,
              // width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
              width: "100%",
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
              <MenuItem value="">
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
          {/* </div>
          </div> */}
        </div>{" "}
        <br />
        <div
          style={{ display: "flex", justifyContent: "right", width: "100%" }}
        >
          <div>
            <Button
              variant="contained"
              className="btncreaterequisition"
              onClick={formsubmit}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { getfilters })(SearchTalent);
