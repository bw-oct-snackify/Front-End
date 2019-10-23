import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import Grid from "@material-ui/core/Grid";
import SnackTable from "../SnackTable/SnackTable";

const SelectedSnacks = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <SnackFilter />
        </Grid>
        <Grid item sm={9}>
          <SnackTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default SelectedSnacks;
