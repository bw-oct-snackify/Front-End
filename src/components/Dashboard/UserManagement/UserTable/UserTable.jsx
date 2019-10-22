import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import User from './User';
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


export const UserTable = ({users, handleDelete}) => {

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
                {users.map(user => {
                        return (<User key={user.id} id={user.id} email={user.email} name={user.name} suggested={user.suggestions} handleDelete={handleDelete} />);
                    })}
                </TableBody>

            </Table>            
        </Paper>
   
    );
};

const mapStateToProps = state =>{
    return{
        users: state.dashboardReducer.users,
    };
};


export default connect(mapStateToProps, {})(UserTable);