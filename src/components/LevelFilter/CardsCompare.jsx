/* eslint-disable no-unused-vars */

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import {
  addshortlist,
  addcontact,
  deletecontact,
  deleteshortlist,
  deletecompare,
} from "../../redux-implementation/actions";
import { useNavigate } from "react-router";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CardsCompare({
  data,
  type,
  addshortlist,
  addcontact,
  deletecontact,
  deletecompare,
  deleteshortlist,
  state,
}) {
  const navigate = useNavigate();
  const shortList = (id) => {
    let a;
    console.log(state.shortlisted.length)
    if (state.shortlisted.length === 0) a = 0;
    else
      a = state.shortlisted.filter(
        (i) =>
          i.resumeid === id && i.requisitionid === state.singleRequisition.id
      ).length;
    if (a === 0) {
      addshortlist(id, state.singleRequisition.id);
      alert("Added to Short List");
    } else alert("This is Previously in Shortlist");
  };

  const compareremove = (id, id2, id3, resume_id) => {
    let a = state.compareList.filter(
      (i) =>
        i.resumeid === resume_id &&
        i.requisitionid === state.singleRequisition.id
    ).length;
    // console.log(id, id2, id3, resume_id, a);
    id2 = 20;
    deletecompare(
      id[0].id,
      id2.length > 0 ? id2[0].id : 0,
      id3.length > 0 ? id3[0].id : 0,
      state.singleRequisition.id
    );
    alert("Delete from Compare");
  };
  const contact = (id) => {
    let a = state.contactedList.filter(
      (i) => i.resumeid === id && i.requisitionid === state.singleRequisition.id
    ).length;
    if (a === 0) {
      addcontact(id, state.singleRequisition.id);
      alert("Added to Contact List");
    } else alert("This is Previously in contract");
  };
  const removeshortlist = (id, id2, resume_id) => {
    console.log(id, id2);
    deleteshortlist(id, id2, state.singleRequisition.id);
    alert("Delete from Shortlist");
  };
  const reject = (id) => {
    deletecontact(id, state.singleRequisition.id);
    alert("Rejected");
  };
  return (
    <Card sx={{ padding: "7px", margin: "7px", width: "100%" }}>
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
          </div>
        </Typography>
        <Typography variant="h4">{data.primary_title_in_header}</Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">
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
        </Typography>
        <p id={data.industry_code} style={{ margin: 0 }}>
          <b>Education</b> : {data.education_level}
        </p>
        <p style={{ margin: 0 }}>
          <b>Experience</b> : {data.experience_level}
        </p>
        <p style={{ margin: 0 }}>
          <b>Tools</b> :{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {data.resumeTools &&
              data.resumeTools.map((tool) => (
                <div key={tool.name} style={{ fontSize: "15px" }}>
                  {tool.name},{" "}
                </div>
              ))}
          </div>
        </p>
        <b>Skills</b> :{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {data.skillResume &&
            data.skillResume.map((health) => (
              <div key={health.name}>{health.name}, </div>
            ))}
        </div>
        <Typography variant="body2">
          <b>Candidate Demands</b> :{" "}
          {data.resumeHealth.map((health) => (
            <p key={health.name} style={{ margin: 0 }}>
              {health.name}
            </p>
          ))}
          <p style={{ margin: 0 }}>Leave For - {data.vacations_benifit}</p>
          <p style={{ margin: 0 }}>Seniority Level - {data.seniorityid}</p>
          {data.resumeExtraEarning !== [] && (
            <p style={{ margin: 0 }}>
              Extra Earning -{" "}
              {data.resumeExtraEarning.map((extra) => {
                return <span>{extra.name}</span>;
              })}
            </p>
          )}
        </Typography>
        <div
          style={{
            width: "100%",
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          {type === "compare" ? (
            <>
              <Button
                onClick={(e) => shortList(data.resume_id)}
                variant="contained"
                style={{ maxWidth: 345, marginRight: "10px" }}
              >
                ShortList Resume
              </Button>
              <Button
                onClick={(e) =>
                  compareremove(
                    data.resumeCompare,
                    data.resumeShortlist,
                    data.resumeContact,
                    data.resume_id
                  )
                }
                variant="contained"
                style={{ maxWidth: 345 }}
              >
                Remove from Compare
              </Button>
            </>
          ) : type === "shortlist" ? (
            <>
              <Button
                onClick={(e) => contact(data.resume_id)}
                variant="contained"
                style={{ maxWidth: 345, marginRight: "10px" }}
              >
                Contract
              </Button>
              <br />
              <Button
                onClick={(e) =>
                  removeshortlist(
                    data.resumeShortlist.length > 0
                      ? data.resumeShortlist[0].id
                      : 0,
                    data.resumeContact.length > 0 ? data.resumeContact[0].id : 0
                  )
                }
                variant="contained"
                style={{ maxWidth: 345 }}
              >
                Remove From ShortList
              </Button>
            </>
          ) : (
            <Button
              onClick={(e) => reject(data.resumeContact[0].id)}
              variant="contained"
              style={{ maxWidth: 345 }}
            >
              Reject
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, {
  addshortlist,
  addcontact,
  deletecompare,
  deleteshortlist,
  deletecontact,
})(CardsCompare);
