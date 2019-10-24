import React, { useEffect, useState } from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import SearchComponent from "./SearchComponent";
import SnackCard from "./SnackCard";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getAllSnacks } from "../../../../store/actions/snackActions";

const ViewAllSnacks = ({ user, snacks, getAllSnacks }) => {
  const [visibleSnacks, setVisibleSnacks] = useState([...snacks]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getAllSnacks();
    setVisibleSnacks(snacks);
  }, [getAllSnacks, user]);

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const newSnacks = snacks.filter(snack => {
      const lc = searchText.toLowerCase().trim();
      const snackName = snack.name.toLowerCase().trim();
      return snackName.includes(lc);
    });
    setVisibleSnacks(newSnacks);
  }, [searchText]);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <SnackFilter />
        </Grid>
        <Grid item sm={9}>
          <SearchComponent
            searchText={searchText}
            handleSearch={handleSearch}
          />
          <br />
          <Grid container spacing={1}>
            {snacks &&
              snacks.length &&
              visibleSnacks.map(snack => {
                return <SnackCard key={snack.snack_ID} snack={snack} />;
              })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.dashboardReducer.user,
    snacks: state.snackReducer.snacks
  };
}

export default connect(
  mapStateToProps,
  { getAllSnacks }
)(ViewAllSnacks);
