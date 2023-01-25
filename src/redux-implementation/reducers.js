import * as actions from "./actionTypes";

const initialState = {
  requisitionList: [],
  requisition: {},
  filters: [],
  level1: [],
  level2: [],
  level3: [],
  level4: [],
  level5: [],
  requisitionCount: {},
  specility: [],
  subspecility: [],
  occupation: [],
  discipline: [],
  singleRequisition: {},
  resumeList: [],
  compareResumeList: [],
  shortlistResumeList: [],
  contactedResumeList: [],
  educationFilter: [],
  experienceFilter: [],
  skillsFilter: [],
  toolsFilter: [],
  corporateFilter: [],
  compare: {},
  shortList: {},
  contact: {},
  compareList: [],
  shortlisted: [],
  contactedList: [],
};
// levels arrays
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
// functions for levels
const setlevels = (filters) => {
  // eslint-disable-next-line array-callback-return
  filters.map((filter) => {
    arr1.push({
      code: filter.level_1_code,
      description: filter.level_1_description,
    });
    arr2.push({
      code: filter.level_2_code,
      description: filter.level_2_description,
    });
    arr3.push({
      code: filter.level_3_code,
      description: filter.level_3_description,
    });
    arr4.push({
      code: filter.level_4_code,
      description: filter.level_4_description,
    });
    arr5.push({
      code: filter.level_5_code,
      description: filter.level_5_description,
    });
  });
};
function getUnique(array, level) {
  // console.log(array.map((item) => [item[`${level}_code`], item]));
  const unique = (arr, encoder = JSON.stringify, decoder = JSON.parse) =>
    [...new Set(arr.map((item) => encoder(item)))].map((item) => decoder(item));

  return unique(array);
}

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.POST_REQUISITION_SUCCESS:
      return {
        ...state,
        loading: false,
        requisition: payload,
      };
    case actions.GET_SINGLE_REQUISITION_SUCCESS:
      return {
        ...state,
        loading: false,
        singleRequisition: payload,
      };
    case actions.GET_REQUISITION_SUCCESS:
      return {
        ...state,
        loading: false,
        requisitionList: payload,
      };
    case actions.GET_FILTERS_SUCCESS:
      setlevels(payload);
      return {
        ...state,
        loading: false,
        filters: payload,
        level1: getUnique(getUnique(arr1, "level1"), "level1"),
        level2: getUnique(arr2, "level2"),
        level3: getUnique(arr3, "level3"),
        level4: getUnique(arr4, "level4"),
        level5: getUnique(arr5, "level5"),
      };
    case actions.GET_REQUISITION_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        requisitionCount: payload,
      };
    case actions.GET_SUBSPECIALITY_SUCCESS:
      return {
        ...state,
        loading: false,
        subspecility: payload,
      };
    case actions.GET_DISCIPLINE_SUCCESS:
      return {
        ...state,
        discipline: payload,
      };
    case actions.GET_OCCUPATION_SUCCESS:
      return {
        ...state,
        loading: false,
        occupation: payload,
      };
    case actions.GET_SPECIALITY_SUCCESS:
      return {
        ...state,
        loading: false,
        specility: payload,
      };
    case actions.DELETE_REQUISITION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case actions.UPDATE_SINGLE_REQUISITION_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case actions.GET_RESUME_SUCCESS:
      return {
        ...state,
        loading: false,
        resumeList: payload,
      };
    case actions.GET_RESUME_COMPARE_SUCCESS:
      return {
        ...state,
        loading: false,
        compareResumeList: payload,
      };
    case actions.GET_RESUME_SHORTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        shortlistResumeList: payload,
      };
    case actions.GET_RESUME_CONTACTED_SUCCESS:
      return {
        ...state,
        loading: false,
        contactedResumeList: payload,
      };
    case actions.GET_EDUCATION_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        educationFilter: payload,
      };
    case actions.GET_EXPERIENCE_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        experienceFilter: payload,
      };
    case actions.GET_SKILLS_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        skillsFilter: payload,
      };
    case actions.GET_TOOLS_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        toolsFilter: payload,
      };
    case actions.GET_CORPORATE_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        corporateFilter: payload,
      };
    case actions.ADD_COMPARE_SUCCESS:
      return {
        ...state,
        loading: false,
        compare: payload,
      };
    case actions.DELETE_COMPARE_SUCCESS:
      return {
        ...state,
        loading: false,
        compare: payload,
      };
    case actions.ADD_SHORTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        shortList: payload,
      };
    case actions.DELETE_SHORTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        shortList: payload,
      };
    case actions.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: payload,
      };
    case actions.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: payload,
      };
    case actions.GET_COMPARE_SUCCESS:
      return {
        ...state,
        loading: false,
        compareList: payload,
      };
    case actions.GET_SHORTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        shortlisted: payload,
      };
    case actions.GET_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contactedList: payload,
      };

    case actions.GET_REQUISITION_FAIL:
    case actions.POST_REQUISITION_FAIL:
    case actions.GET_FILTERS_FAIL:
    case actions.GET_REQUISITION_COUNT_FAIL:
    case actions.GET_DISCIPLINE_FAIL:
    case actions.GET_OCCUPATION_FAIL:
    case actions.GET_SPECIALITY_FAIL:
    case actions.GET_SUBSPECIALITY_FAIL:
    case actions.GET_RESUME_COMPARE_FAIL:
    case actions.GET_RESUME_SHORTLIST_FAIL:
    case actions.GET_RESUME_CONTACTED_FAIL:
    case actions.GET_EDUCATION_FILTER_FAIL:
    case actions.GET_CORPORATE_FILTER_FAIL:
    case actions.GET_EXPERIENCE_FILTER_FAIL:
    case actions.GET_TOOLS_FILTER_FAIL:
    case actions.GET_SKILLS_FILTER_FAIL:
    case actions.GET_CONTACT_FAIL:
    case actions.GET_COMPARE_FAIL:
    case actions.GET_SHORTLIST_FAIL:
    case actions.DELETE_COMPARE_FAIL:
    case actions.DELETE_CONTACT_FAIL:
    case actions.DELETE_SHORTLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.DELETE_REQUISITION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "Requisition Not Deleted",
      };
    case actions.UPDATE_SINGLE_REQUISITION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "Requisition Not Updated",
      };
    case actions.GET_SINGLE_REQUISITION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        singleRequisition: null,
      };
    case actions.GET_RESUME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
