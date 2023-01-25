import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Table.style.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleterequisition,
  getsinglerequisition,
  updaterequisition,
} from "../../redux-implementation/actions";

function createData(
  name,
  requistionno,
  title,
  totalteam,
  teamcost,
  noofdays,
  salaryfrom,
  salaryto,
  status,
  action
) {
  return {
    name,
    requistionno,
    title,
    totalteam,
    teamcost,
    noofdays,
    salaryfrom,
    salaryto,
    status,
    action,
  };
}

// const rows = [
//   createData(1, 305, "software developement", 10, 12, 12, 12, 12, "Selection"),
//   createData(2, 305, "software developement", 10, 12, 12, 12, 12, "Initiated"),
//   createData(3, 305, "software developement", 10, 12, 12, 12, 12, "Rejected"),
//   createData(4, 305, "software developement", 10, 12, 12, 12, 12, "Selection"),
//   createData(5, 305, "software developement", 10, 12, 12, 12, 12, "Initiated"),
//   createData(6, 305, "software developement", 10, 12, 12, 12, 12, "Selection"),
//   createData(7, 305, "software developement", 10, 12, 12, 12, 12, "Initiated"),
//   createData(8, 305, "software developement", 10, 12, 12, 12, 12, "Rejected"),
//   createData(9, 305, "software developement", 10, 12, 12, 12, 12, "Selection"),
//   createData(10, 305, "software developement", 10, 12, 12, 12, 12, "Initiated"),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "requisitionno",
    numeric: true,
    disablePadding: false,
    label: "REQUISITION NO",
  },
  {
    id: "mergeleveldiscriptions",
    numeric: true,
    disablePadding: false,
    label: "TITLE",
  },
  {
    id: "totalteam",
    numeric: true,
    disablePadding: false,
    label: "TOTAL TEAM",
  },
  {
    id: "teamcost",
    numeric: true,
    disablePadding: false,
    label: "TEAM COST",
  },
  {
    id: "startdate",
    numeric: true,
    disablePadding: false,
    label: "Start Date",
  },
  {
    id: "enddate",
    numeric: true,
    disablePadding: false,
    label: "End Date",
  },
  {
    id: "salaryfrom",
    numeric: true,
    disablePadding: false,
    label: "SALARY FROM",
  },
  {
    id: "salaryto",
    numeric: true,
    disablePadding: false,
    label: "SALARY TO",
  },

  {
    id: "statusid",
    numeric: true,
    disablePadding: false,
    label: "STATUS",
  },
  {
    id: "ACTION",
    numeric: true,
    disablePadding: false,
    label: "ACTION",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,

    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            // sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              // direction={orderBy === headCell.id ? order : "asc"}
              // onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  // order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Search Talent
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function EnhancedTable({
  data,
  deleterequisition,
  getsinglerequisition,
  state,
}) {
  console.log(data);
  // React.useEffect(() => {
  //   getfilters();
  // }, [getfilters]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("requistionno");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  const deletetalent = (id) => {
    setAnchorEl(null);
    deleterequisition(id);
    alert("delete");
  };
  const handleupdate = (id) => {
    getsinglerequisition(id, navigate);
    setAnchorEl(null);
    // setTimeout(() => {
    //   if (state.singleRequisition)

    // }, [1000]);
  };
  function callresume(level1, level2, level3, level4, level5, requisitionid) {
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
        requisitionid: requisitionid,
      },
    });
  }
  return (
    <Box sx={{ width: { xs: 330, sm: 490, md: 690, lg: 900 } }}>
      <Paper sx={{ width: { xs: 330, sm: 490, md: 690, lg: 900 }, mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ width: { xs: 330, sm: 490, md: 690, lg: 900 } }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      // onClick={(e) =>
                      //   callresume(
                      //     row.level1,
                      //     row.level2,
                      //     row.level3,
                      //     row.level4,
                      //     row.level5
                      //   )
                      // }
                    >
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.requisitionno}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.mergeleveldiscriptions}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.totalteam}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.teamcost}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.startdate}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.enddate}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.salaryfrom}
                      </TableCell>
                      <TableCell
                        onClick={(e) =>
                          callresume(
                            row.level1,
                            row.level2,
                            row.level3,
                            row.level4,
                            row.level5,
                            row.id
                          )
                        }
                        align="right"
                      >
                        {row.salaryto}
                      </TableCell>

                      {row.statusid === 2 ? (
                        <TableCell
                          onClick={(e) =>
                            callresume(
                              row.level1,
                              row.level2,
                              row.level3,
                              row.level4,
                              row.level5,
                              row.id
                            )
                          }
                          align="right"
                        >
                          <p className="Comparison">Comparison</p>
                        </TableCell>
                      ) : row.statusid === 1 ? (
                        <TableCell
                          onClick={(e) =>
                            callresume(
                              row.level1,
                              row.level2,
                              row.level3,
                              row.level4,
                              row.level5,
                              row.id
                            )
                          }
                          align="right"
                        >
                          <p className="Initiated">Initiated</p>
                        </TableCell>
                      ) : row.statusid === 3 ? (
                        <TableCell
                          onClick={(e) =>
                            callresume(
                              row.level1,
                              row.level2,
                              row.level3,
                              row.level4,
                              row.level5,
                              row.id
                            )
                          }
                          align="right"
                        >
                          <p className="Shortlist">Shortlist</p>
                        </TableCell>
                      ) : (
                        <TableCell
                          onClick={(e) =>
                            callresume(
                              row.level1,
                              row.level2,
                              row.level3,
                              row.level4,
                              row.level5,
                              row.id
                            )
                          }
                          align="right"
                        >
                          <p className="Contacted">Contacted</p>
                        </TableCell>
                      )}
                      <TableCell align="right" id={row.id}>
                        {/* <MoreHorizIcon
                          style={{ cursor: "pointer" }}
                          id={row.id}
                          aria-controls={
                            open ? "demo-positioned-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick2}
                        /> */}
                        <IconButton onClick={(e) => handleupdate(row.id)}>
                          <EditIcon
                            style={{ color: "blue", marginRight: "8px" }}
                          />
                        </IconButton>
                        <IconButton onClick={(e) => deletetalent(row.id)}>
                          <DeleteIcon
                            style={{ color: "blue", marginRight: "8px" }}
                          />
                        </IconButton>
                        <Menu
                          id={row.id}
                          aria-labelledby="demo-positioned-button"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose2}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          <MenuItem
                            id={row.id}
                            onClick={(e) => handleupdate(row.id)}
                          >
                            <EditIcon
                              style={{ color: "blue", marginRight: "8px" }}
                            />
                            Modify
                          </MenuItem>
                          <MenuItem onClick={(e) => deletetalent(row.id)}>
                            <DeleteIcon
                              style={{ color: "blue", marginRight: "8px" }}
                            />
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, {
  deleterequisition,
  getsinglerequisition,
})(EnhancedTable);
