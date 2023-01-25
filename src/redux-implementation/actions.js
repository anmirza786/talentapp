import axios from "axios";
import * as actions from "./actionTypes";
import { REQUEST_URL } from "./constatntURLS";

export const getrequisition = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "requisition/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_REQUISITION_SUCCESS,
        payload: res.data,
      });
      // //    //    console.log(res);
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_REQUISITION_FAIL,
      });
    });
};

export const postrequisition =
  (
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
    mergeleveldiscriptions,
    statusid
  ) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      requisitionno: requistionno,
      totalteam: totalteam,
      teamcost: teamcost,
      noofdays: noofdays,
      startdate: `${startdateval}T19:00:00Z`,
      enddate: `${enddateval}T19:00:00Z`,
      dated: `${startdateval}T19:00:00Z`,
      salaryfrom: salaryfrom,
      salaryto: salaryto,
      bonus: null,
      profitsharing: null,
      stockoption: null,
      vacations: null,
      number_401matching: null,
      healthinsurance: null,
      flexhours: null,
      tutionreimbursement: null,
      retirementpackage: null,
      statusid: statusid,
      level1: level1,
      level2: level2,
      level3: level3,
      level4: level4,
      level5: level5,
      mergeleveldiscriptions: mergeleveldiscriptions,
      disciplineid: null,
      occupationid: null,
      sepcialityid: null,
      subspeciality: null,
      userid: 1,
    });
    // //    //    console.log(body);
    await axios
      .post(REQUEST_URL + `requisition/`, body, config)
      .then((res) => {
        dispatch({
          type: actions.POST_REQUISITION_SUCCESS,
          payload: res.data,
        });
        // //    console.log(res);
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.POST_REQUISITION_FAIL,
        });
      });
    dispatch(getrequisition());
  };

export const geteducation = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "filter/education/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_EDUCATION_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_EDUCATION_FILTER_FAIL,
      });
    });
};

export const getexperience = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "filter/experience/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_EXPERIENCE_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_EXPERIENCE_FILTER_FAIL,
      });
    });
};

export const gettools = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "filter/tools/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_TOOLS_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_TOOLS_FILTER_FAIL,
      });
    });
};

export const getskills = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "filter/skills/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_SKILLS_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_SKILLS_FILTER_FAIL,
      });
    });
};

export const getcorporate = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "filter/corporate/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_CORPORATE_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_CORPORATE_FILTER_FAIL,
      });
    });
};

export const getfilters = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "filters/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_FILTERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_FILTERS_FAIL,
      });
    });
};

export const getrequisitionscount = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "count/requisition/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_REQUISITION_COUNT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_REQUISITION_COUNT_FAIL,
      });
    });
};

export const getdicpline = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "discipline/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_DISCIPLINE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_DISCIPLINE_FAIL,
      });
    });
};

export const getoccupation = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "occupation/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_OCCUPATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_OCCUPATION_FAIL,
      });
    });
};

export const getspecility = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "speciality/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_SPECIALITY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_SPECIALITY_FAIL,
      });
    });
};

export const getsubspecility = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + "subspeciality/", config)
    .then((res) => {
      dispatch({
        type: actions.GET_SUBSPECIALITY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_SUBSPECIALITY_FAIL,
      });
    });
};

export const getsinglerequisition =
  (id, navigate = undefined) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await axios
      .get(REQUEST_URL + `requisition/${id}/`, config)
      .then((res) => {
        dispatch({
          type: actions.GET_SINGLE_REQUISITION_SUCCESS,
          payload: res.data,
        });
        if (navigate !== undefined)
          navigate("/UpdateRequistion", { state: res.data });
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.GET_SINGLE_REQUISITION_FAIL,
        });
      });
  };

export const getresume =
  (state = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let route = "resume/";
    if (
      state.level_1 &&
      state.level_2 &&
      state.level_3 &&
      state.level_4 &&
      state.level_5
    ) {
      route = `resume/?level1=${parseInt(state.level_1)}&level2=${parseInt(
        state.level_2
      )}&level3=${parseInt(state.level_3)}&level4=${parseInt(
        state.level_4
      )}&level5=${parseInt(state.level_5)}`;
    } else if (
      state.level_1 &&
      state.level_2 &&
      state.level_3 &&
      state.level_4
    ) {
      route = `resume/?level1=${parseInt(state.level_1)}&level2=${parseInt(
        state.level_2
      )}&level3=${parseInt(state.level_3)}&level4=${parseInt(state.level_4)}`;
      // //    console.log(route);
    } else if (state.level_1 && state.level_2 && state.level_3) {
      route = `resume/?level1=${parseInt(state.level_1)}&level2=${parseInt(
        state.level_2
      )}&level3=${parseInt(state.level_3)}`;
      //    console.log(route);
    } else if (state.level_1 && state.level_2) {
      route = `resume/?level1=${parseInt(state.level_1)}&level2=${parseInt(
        state.level_2
      )}`;
      //    //    console.log(route);
    } else if (state.level_1) {
      route = `resume/?level1=${parseInt(state.level_1)}`;
      //    //    console.log(route);
    }
    await axios
      .get(REQUEST_URL + route, config)
      .then((res) => {
        dispatch({
          type: actions.GET_RESUME_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.GET_RESUME_FAIL,
        });
      });
  };

export const addcompare =
  (id, requisitionid = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ resumeid: id, requisitionid });
    await axios
      .post(REQUEST_URL + `compare/requisition/${id}`, body, config)
      .then((res) => {
        dispatch({
          type: actions.ADD_COMPARE_SUCCESS,
          payload: res.data,
        });
        dispatch(getcompare(requisitionid));
        dispatch(getresumecompare(requisitionid));
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.ADD_COMPARE_FAIL,
        });
      });
  };

export const getcompare = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + `compare/requisition/`, config)
    .then((res) => {
      dispatch({
        type: actions.GET_COMPARE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_COMPARE_FAIL,
      });
    });
};

export const deletecompare =
  (id, id2, id3, requisitionid = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    // const body = JSON.stringify({ resumeid: id, requisitionid });
    await axios
      .delete(REQUEST_URL + `compare/requisition/${id}`, config)
      .then((res) => {
        dispatch({
          type: actions.DELETE_COMPARE_SUCCESS,
          payload: res.data,
        });
        dispatch(deleteshortlist(id2, id3, requisitionid));
        dispatch(getresumecompare(requisitionid));
        dispatch(getcompare());
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.DELETE_COMPARE_FAIL,
        });
      });
  };

export const getshortlist = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + `shortlist/requisition/`, config)
    .then((res) => {
      dispatch({
        type: actions.GET_SHORTLIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_SHORTLIST_FAIL,
      });
    });
};
export const addshortlist =
  (id, requisitionid = null, comp_id) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ resumeid: id, requisitionid: requisitionid });
    await axios
      .post(REQUEST_URL + `shortlist/requisition/${id}`, body, config)
      .then((res) => {
        dispatch({
          type: actions.ADD_SHORTLIST_SUCCESS,
          payload: res.data,
        });
        // dispatch(deletecompare(comp_id, requisitionid));
        dispatch(getresumeshortlist(requisitionid));
        dispatch(getshortlist(requisitionid));
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.ADD_SHORTLIST_FAIL,
        });
      });
  };

export const deleteshortlist =
  (id, id2, requisitionid = null) =>
  async (dispatch) => {
    // //    //    console.log("thulu",id,id2,requisitionid)
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    // const body = JSON.stringify({ resumeid: id, requisitionid });
    await axios
      .delete(REQUEST_URL + `shortlist/requisition/${id}`, config)
      .then((res) => {
        dispatch({
          type: actions.DELETE_SHORTLIST_SUCCESS,
          payload: res.data,
        });
        dispatch(deletecontact(id2, requisitionid));
        dispatch(getresumeshortlist(requisitionid));
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.DELETE_SHORTLIST_FAIL,
        });
      });
  };

export const getcontact = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .get(REQUEST_URL + `contract/requisition/`, config)
    .then((res) => {
      dispatch({
        type: actions.GET_CONTACT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_CONTACT_FAIL,
      });
    });
};

export const addcontact =
  (id, requisitionid = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ resumeid: id, requisitionid });
    await axios
      .post(REQUEST_URL + `contract/requisition/${id}`, body, config)
      .then((res) => {
        dispatch({
          type: actions.ADD_CONTACT_SUCCESS,
          payload: res.data,
        });
        // dispatch(deleteshortlist(cmp_id, requisitionid));
        dispatch(getcontact(requisitionid));
        dispatch(getresumecontacted(requisitionid));
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.ADD_CONTACT_FAIL,
        });
      });
  };

export const deletecontact =
  (id, requisitionid = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    // const body = JSON.stringify({ resumeid: id, requisitionid });
    await axios
      .delete(REQUEST_URL + `contract/requisition/${id}`, config)
      .then((res) => {
        dispatch({
          type: actions.DELETE_CONTACT_SUCCESS,
          payload: res.data,
        });
        dispatch(getresumecontacted(requisitionid));
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.DELETE_CONTACT_FAIL,
        });
      });
  };

export const filterResumes = (code, type) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  let route;
  if (type === "education") {
    route = `resume/?filterflag=${type}&educationcode=${code}`;
  } else if (type === "experience") {
    route = `resume/?filterflag=${type}&experiencecode=${code}`;
  } else if (type === "tool") {
    route = `resume/?filterflag=${type}&toolid=${code}`;
  } else if (type === "skill") {
    route = `resume/?filterflag=${type}&skillid=${code}`;
  } else {
    route = `resume/?filterflag=${type}&corporateid=${code}`;
  }
  await axios
    .get(REQUEST_URL + route, config)
    .then((res) => {
      dispatch({
        type: actions.GET_RESUME_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_RESUME_FAIL,
      });
    });
};

export const getresumecompare =
  (state = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    //    //    console.log(state);
    let route = `requisition/resume/?flag=compare&requisition_id=${state}`;
    if (!state) {
      route = `requisition/resume/?flag=compare`;
    }
    // if (
    //   state.level_1 &&
    //   state.level_2 &&
    //   state.level_3 &&
    //   state.level_4 &&
    //   state.level_5
    // ) {
    //   route = `requisition/resume/?flag=compare&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(
    //     state.level_3
    //   )}&level4=${parseInt(state.level_4)}&level5=${parseInt(state.level_5)}`;
    // } else if (
    //   state.level_1 &&
    //   state.level_2 &&
    //   state.level_3 &&
    //   state.level_4
    // ) {
    //   route = `requisition/resume/?flag=compare&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(
    //     state.level_3
    //   )}&level4=${parseInt(state.level_4)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1 && state.level_2 && state.level_3) {
    //   route = `requisition/resume/?flag=compare&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(state.level_3)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1 && state.level_2) {
    //   route = `requisition/resume/?flag=compare&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1) {
    //   route = `requisition/resume/?flag=compare&level1=${parseInt(
    //     state.level_1
    //   )}`;
    //   //    //    console.log(route);
    // }
    await axios
      .get(REQUEST_URL + route, config)
      .then((res) => {
        dispatch({
          type: actions.GET_RESUME_COMPARE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.GET_RESUME_COMPARE_FAIL,
        });
      });
  };

export const getresumeshortlist =
  (state = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let route = `requisition/resume/?flag=shortlist&requisition_id=${state}`;
    if (!state) {
      route = `requisition/resume/?flag=shortlist`;
    }
    // if (
    //   state.level_1 &&
    //   state.level_2 &&
    //   state.level_3 &&
    //   state.level_4 &&
    //   state.level_5
    // ) {
    //   route = `requisition/resume/?flag=shortlist&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(
    //     state.level_3
    //   )}&level4=${parseInt(state.level_4)}&level5=${parseInt(state.level_5)}`;
    // } else if (
    //   state.level_1 &&
    //   state.level_2 &&
    //   state.level_3 &&
    //   state.level_4
    // ) {
    //   route = `requisition/resume/?flag=shortlist&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(
    //     state.level_3
    //   )}&level4=${parseInt(state.level_4)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1 && state.level_2 && state.level_3) {
    //   route = `requisition/resume/?flag=shortlist&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(state.level_3)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1 && state.level_2) {
    //   route = `requisition/resume/?flag=shortlist&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1) {
    //   route = `requisition/resume/?flag=shortlist&level1=${parseInt(
    //     state.level_1
    //   )}`;
    //   //    //    console.log(route);
    // }
    await axios
      .get(REQUEST_URL + route, config)
      .then((res) => {
        dispatch({
          type: actions.GET_RESUME_SHORTLIST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.GET_RESUME_SHORTLIST_FAIL,
        });
      });
  };

export const getresumecontacted =
  (state = null) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let route = `requisition/resume/?flag=contract&requisition_id=${state}`;
    if (!state) {
      route = `requisition/resume/?flag=contract`;
    }
    // if (
    //   state.level_1 &&
    //   state.level_2 &&
    //   state.level_3 &&
    //   state.level_4 &&
    //   state.level_5
    // ) {
    //   route = `requisition/resume/?flag=contract&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(
    //     state.level_3
    //   )}&level4=${parseInt(state.level_4)}&level5=${parseInt(state.level_5)}`;
    // } else if (
    //   state.level_1 &&
    //   state.level_2 &&
    //   state.level_3 &&
    //   state.level_4
    // ) {
    //   route = `requisition/resume/?flag=contract&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(
    //     state.level_3
    //   )}&level4=${parseInt(state.level_4)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1 && state.level_2 && state.level_3) {
    //   route = `requisition/resume/?flag=contract&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}&level3=${parseInt(state.level_3)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1 && state.level_2) {
    //   route = `requisition/resume/?flag=contract&level1=${parseInt(
    //     state.level_1
    //   )}&level2=${parseInt(state.level_2)}`;
    //   //    //    console.log(route);
    // } else if (state.level_1) {
    //   route = `requisition/resume/?flag=contract&level1=${parseInt(
    //     state.level_1
    //   )}`;
    //   //    //    console.log(route);
    // }
    await axios
      .get(REQUEST_URL + route, config)
      .then((res) => {
        dispatch({
          type: actions.GET_RESUME_CONTACTED_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.GET_RESUME_CONTACTED_FAIL,
        });
      });
  };

export const deleterequisition = (id) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  await axios
    .delete(REQUEST_URL + `requisition/${id}/`, config)
    .then((res) => {
      dispatch({
        type: actions.DELETE_REQUISITION_SUCCESS,
        payload: res,
      });
      getrequisition();
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.DELETE_REQUISITION_FAIL,
      });
      getrequisition();
    });
};

export const updaterequisition =
  (
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
    mergeleveldiscriptions,
    statusid,
    id
  ) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let sdate = `${startdateval}`,
      edate = `${enddateval}`,
      date = `${startdateval}`;
    if (sdate.includes("T")) {
      sdate = `${startdateval}`;
    } else {
      sdate = `${startdateval}T19:00:00Z`;
    }
    if (edate.includes("T")) {
      edate = `${enddateval}`;
    } else {
      edate = `${enddateval}T19:00:00Z`;
    }
    if (date.includes("T")) {
      date = `${startdateval}`;
    } else {
      date = `${startdateval}T19:00:00Z`;
    }
    const body = JSON.stringify({
      requisitionno: requistionno,
      totalteam: totalteam,
      teamcost: teamcost,
      noofdays: noofdays,
      startdate: sdate,
      enddate: edate,
      dated: date,
      salaryfrom: salaryfrom,
      salaryto: salaryto,
      bonus: null,
      profitsharing: null,
      stockoption: null,
      vacations: null,
      number_401matching: null,
      healthinsurance: null,
      flexhours: null,
      tutionreimbursement: null,
      retirementpackage: null,
      statusid: statusid,
      level1: level1,
      level2: level2,
      level3: level3,
      level4: level4,
      level5: level5,
      mergeleveldiscriptions: mergeleveldiscriptions,
      disciplineid: null,
      occupationid: null,
      sepcialityid: null,
      subspeciality: null,
      userid: 1,
    });
    // //    //    console.log(body);
    await axios
      .put(REQUEST_URL + `requisition/${id}/`, body, config)
      .then((res) => {
        dispatch({
          type: actions.UPDATE_SINGLE_REQUISITION_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.UPDATE_SINGLE_REQUISITION_FAIL,
        });
      });
    dispatch(getrequisition());
  };
