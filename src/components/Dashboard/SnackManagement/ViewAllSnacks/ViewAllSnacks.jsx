import React, { useEffect } from 'react';
import SnackFilter from '../../../SnackFilter/SnackFilter';
import SearchComponent from './SearchComponent';
import SnackCard from './SnackCard';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getAllSnacks } from '../../../../store/actions/snackActions';

const ViewAllSnacks = ({ user, snacks, getAllSnacks }) => {
    useEffect(() => {
        getAllSnacks();
    }, [getAllSnacks, user]);

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
                        {snacks &&
                            snacks.length &&
                            snacks.map(snack => {
                                return (
                                    <SnackCard
                                        key={snack.snack_ID}
                                        snack={snack}
                                    />
                                );
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
        snacks: state.snackReducer.snacks,
    };
}

export default connect(
    mapStateToProps,
    { getAllSnacks }
)(ViewAllSnacks);
