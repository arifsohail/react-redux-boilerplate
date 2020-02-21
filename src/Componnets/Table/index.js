// @flow
import * as React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import ManCss from "../../Containers/Main/main.css";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

type Props = {

};

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const CustomTable = (props: Object) => {
    return (
        <TableContainer component={Paper}>
            <Table className={ManCss.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>First Name</StyledTableCell>
                        <StyledTableCell align="right">Last Name</StyledTableCell>
                        <StyledTableCell align="right">Phone number</StyledTableCell>
                        <StyledTableCell align="right">Region</StyledTableCell>
                        <StyledTableCell align="right">Email Address</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map(row => (
                        <StyledTableRow key={row.firstName}>
                            <StyledTableCell component="th" scope="row">
                                {row.firstName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                            <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                            <StyledTableCell align="right">{row.region}</StyledTableCell>
                            <StyledTableCell align="right">{row.emailAddress}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
