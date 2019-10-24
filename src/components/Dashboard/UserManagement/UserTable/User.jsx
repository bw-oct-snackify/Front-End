import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow, TableCell, Chip } from "@material-ui/core";

const useStyles = makeStyles({
  row: {
    borderRight: "1px solid #0002",
    fontWeight: "200"
  },
  deleteBtn: {
    cursor: "pointer"
  },
  chip: {
    marginRight: "5px"
  }
});

const User = ({ id, email, name, suggested, handleDelete }) => {
  const classes = useStyles();
console.log(suggested)
  return (
    <TableRow>
      <TableCell align="center" className={classes.row}>
        <div
          onClick={() => handleDelete(id, name)}
          className={classes.deleteBtn}
        >
          X
        </div>
      </TableCell>
      <TableCell align="center" className={classes.row}>
        {email}
      </TableCell>
      <TableCell align="center" className={classes.row}>
        {name}
      </TableCell>
      <TableCell align="center" className={classes.row}>
        {suggested && suggested.map((item, index) => {
          return <Chip className={classes.chip} key={index} label={item} />;
        })}
      </TableCell>
    </TableRow>
  );
};

export default User;
