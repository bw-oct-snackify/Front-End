import React, { useEffect, useState } from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import SearchComponent from "./SearchComponent";
import SnackCard from "./SnackCard";
import Grid from "@material-ui/core/Grid";
import { axiosInstance } from "../../../../utils/axiosInstance";


const ViewAllSnacks = () => {
  const [snacks, setSnacks] = useState([])
  useEffect(() => {
    axiosInstance
    .get('/snacks', {
    })
    .then(response => {
      console.log(response.data);
      setSnacks(response.data.snacks);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

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
            {snacks.map(snack => (
              <SnackCard key={snack.snack_ID} snack={snack} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewAllSnacks;
