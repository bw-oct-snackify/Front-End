import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';
import Snack from './Snack';
import { connect } from 'react-redux';
import { getCompanySnacks } from '../../../../store/actions/snackActions';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    rowHead: {
        borderRight: '1px solid #0002',
        fontWeight: '600',
    },
    row: {
        borderRight: '1px solid #0002',
        fontWeight: '200',
    },
});

const SnackTable = ({ order, user, getCompanySnacks }) => {
    useEffect(() => {
        getCompanySnacks(user);
    }, [getCompanySnacks, user]);

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="snack table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                            className={classes.rowHead}
                        ></TableCell>
                        <TableCell align="center" className={classes.rowHead}>
                            Snack
                        </TableCell>
                        <TableCell align="center" className={classes.rowHead}>
                            Brand
                        </TableCell>
                        <TableCell align="center" className={classes.rowHead}>
                            Unit of Measure
                        </TableCell>
                        <TableCell align="center" className={classes.rowHead}>
                            Quantity
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {order.map((snack, index) => {
                        return <Snack key={index} {...snack} />;
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        order: state.snackReducer.order,
        user: state.dashboardReducer.user,
    };
};

export default connect(
    mapStateToProps,
    { getCompanySnacks }
)(SnackTable);
