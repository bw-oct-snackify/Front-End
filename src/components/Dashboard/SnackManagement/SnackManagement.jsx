import React from "react";
import Grid from "@material-ui/core/Grid";
import { SnackTable } from "../..";
import SnackFilter from "../../SnackFilter/SnackFilter";

const SnackManagement = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <SnackFilter />
        </Grid>
        <Grid item xs={9}>
          <SnackTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default SnackManagement;
