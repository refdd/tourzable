import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useStateContext } from "@/contexts/ContextProvider";

const columns = [
  { id: "type", label: "Type", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "date",
    label: "Order Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "Execution Time",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "paid",
    label: "Paid",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(type, name, date, time, total, paid) {
  //   const density = population / size;
  const density = "";
  return { type, name, date, time, total, density, paid };
}

const rows = [
  createData(
    "tour",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "tour",
    "Name Tour",
    "04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "active",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "umrah",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "umrah",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "tour",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "active",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "Ireland",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "umrah",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "Japan",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "tour",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "United Kingdom",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "active",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "active",
    "Name Tour",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
  createData(
    "tour",
    "Name TourBR",
    " 04/04/2022",
    "Check in : 05/14/2022Check out : 05/29/2022",
    "$222",
    "$0"
  ),
];

export default function TableBooking() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { sideBar } = useStateContext();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div
      className={`container mx-auto px-4 ${sideBar ? "md:px-1 " : "md:px-10"}`}
    >
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#5C2D90", fontWeight: "700", fontSize: "16px" }}
                  align="center"
                  colSpan={2}
                >
                  Booking
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="center" colSpan={3}></TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      top: 57,
                      minWidth: column.minWidth,
                      fontSize: "16px",
                      color: "#5C2D90 ",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
