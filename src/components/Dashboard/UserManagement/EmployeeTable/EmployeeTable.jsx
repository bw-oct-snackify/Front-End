import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import Employee from './Employee';
import {connect} from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    rowHead: {
        borderRight: "1px solid #0002",
        fontWeight: '600',
    },
    row: {
        borderRight: "1px solid #0002",
        fontWeight: '200',
    },
});

const EmployeeTable = ({employees}) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="employee table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center' className={classes.rowHead}></TableCell>
                        <TableCell align='center' className={classes.rowHead}>Email</TableCell>
                        <TableCell align='center' className={classes.rowHead}>Name</TableCell>
                        <TableCell align='center' className={classes.rowHead}>Snacks Suggestions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {employees.map(employee => {
                        return (<Employee key={employee.id} id={employee.id} email={employee.email} name={employee.name} suggested={employee.suggestions} />);
                    })}
                </TableBody>

            </Table>
        </Paper>
    );
};

const mapStateToProps = state =>{
    return{
        employees: state.dashboardReducer.employees,
    };
};


export default connect(mapStateToProps, {})(EmployeeTable);