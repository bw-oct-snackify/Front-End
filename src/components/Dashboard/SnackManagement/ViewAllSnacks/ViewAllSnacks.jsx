import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import SearchComponent from "./SearchComponent";
import SnackCard from "./SnackCard";
import Grid from "@material-ui/core/Grid";

const ViewAllSnacks = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <SnackFilter />
        </Grid>
        <Grid item sm={9}>
          <SearchComponent />
          <br />
          <Grid container spacing={1}>
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
            <SnackCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewAllSnacks;
