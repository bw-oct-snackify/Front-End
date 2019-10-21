import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {TableRow, TableCell} from '@material-ui/core';

const useStyles = makeStyles({
    row: {
        borderRight:"1px solid #0002",
        fontWeight: '200',
    },
    deleteBtn: {
        cursor:'pointer',
    },
});

const handleClick = id =>{
    alert(`You are attempting to remove it with id: ${id}`);
};

const Snack = ({id, snack, brand, uom, quantity}) =>{

    const classes = useStyles();

    return (
        <TableRow>
            <TableCell align='center' className={classes.row}><div onClick={() => handleClick(id)} className={classes.deleteBtn}>X</div></TableCell>
            <TableCell align='center' className={classes.row}>{snack}</TableCell>
            <TableCell align='center' className={classes.row}>{brand}</TableCell>
            <TableCell align='center' className={classes.row}>{uom}</TableCell>
            <TableCell align='center' className={classes.row}>{quantity}</TableCell>
        </TableRow>
    );

};

export default Snack;