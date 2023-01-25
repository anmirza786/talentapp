/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { connect } from "react-redux";
import { addcompare } from "../../redux-implementation/actions";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Cards({ data, comparewith, addcompare, state }) {
  function containsObject(obj, list) {
    return list.some(function (e) {
      return e.resume_id === obj;
    });
  }
  function compare(id, requisition) {
    if (state.singleRequisition) {
      let a = state.compareList.filter(
        (i) =>
          i.resumeid === id && i.requisitionid === state.singleRequisition.id
      ).length;
      if (a === 0) {
        addcompare(id, requisition);
        alert("Added to Compare");
      } else alert("This Previously is in compare List.");
    } else {
      alert("Requisition Has not been Selected");
    }
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          <div className="flex">
            <div className="col">
              {data.uscombined && data.uscombined}
              {data.state && data.country && (
                <span>
                  ({data.state && data.state}, {data.country && data.country})
                </span>
              )}
            </div>
            <div
              className="col-4"
              style={{ justifySelf: "flex-end", alignSelf: "flex-end" }}
            >
              <FormGroup>
                <FormControlLabel
                  disabled={
                    comparewith && containsObject(data.resume_id, comparewith)
                  }
                  onClick={(e) =>
                    compare(data.resume_id, state.singleRequisition.id)
                  }
                  control={
                    <Checkbox
                      checked={
                        comparewith &&
                        containsObject(data.resume_id, comparewith)
                      }
                    />
                  }
                  label="Compare"
                />
              </FormGroup>
            </div>
          </div>
        </Typography>
        <Typography variant="h4">{data.primary_title_in_header}</Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">
          <div className="flex">
            <div className="col">
              <p id={data.industry_code} style={{ margin: 0 }}>
                <b>Industry</b> :
                {data.industry ? data.industry : data.industry_label}
              </p>
              <p style={{ margin: 0 }}>
                <b>Experience</b> : {data.total_years_of_experience}
              </p>
              <p style={{ margin: 0 }}>
                <b>Working Since</b> :{" "}
                {data.create_date !== null && data.create_date.split("T")[0]}
              </p>
              <b>Actively Looking</b> : {data.isavailable === 1 ? "Yes" : "No"}
            </div>
            <div className="col">
              <b>Candidate Demands</b> :{" "}
              {data.resumeHealth.map((health) => (
                <p key={health.name} style={{ margin: 0 }}>
                  {health.name}
                </p>
              ))}
              <p style={{ margin: 0 }}>Leave For - {data.vacations_benifit}</p>
              <p style={{ margin: 0 }}>Seniority Level - {data.seniorityid}</p>
              <p style={{ margin: 0 }}>
                Extra Earning -{" "}
                {data.resumeExtraEarning.map((extra) => {
                  return <span>{extra.name}</span>;
                })}
              </p>
            </div>
          </div>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, {
  addcompare,
})(Cards);
