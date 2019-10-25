import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from '@material-ui/core';

const useStyles = makeStyles({
    row: {
        borderRight: '1px solid #0002',
        fontWeight: '200',
    },
    deleteBtn: {
        cursor: 'pointer',
    },
});

const handleClick = id => {
    alert(`Feature not implemented no id provided from backend!`);
};

const Snack = (props) => {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell align="center" className={classes.row}>
                <div
                    onClick={() => handleClick(props.snack_ID)}
                    className={classes.deleteBtn}
                >
                    X
                </div>
            </TableCell>
            <TableCell align="center" className={classes.row}>
                {props.name}
            </TableCell>
            <TableCell align="center" className={classes.row}>
                {props.brand}
            </TableCell>
            <TableCell align="center" className={classes.row}>
                {props.uom}
            </TableCell>
            <TableCell align="center" className={classes.row}>
                {props.quantity}
            </TableCell>
        </TableRow>
    );
};

export default Snack;
