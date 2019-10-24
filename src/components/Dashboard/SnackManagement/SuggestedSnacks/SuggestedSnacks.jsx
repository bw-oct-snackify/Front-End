import React, { useEffect } from 'react';
import SnackFilter from '../../../SnackFilter/SnackFilter';
import SnackCard from '../ViewAllSnacks/SnackCard';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {
    getCompanySuggestions,
    getUserSuggestions,
} from '../../../../store/actions/snackActions';

const SuggestedSnacks = ({ suggestions, user, getCompanySuggestions }) => {
    useEffect(() => {
        if (user.admin) {
            console.log('Getting company suggestions');
            getCompanySuggestions(user);
        } else {
            console.log('Getting User suggestions');
            getUserSuggestions(user);
        }
    }, [getCompanySuggestions, user]);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item sm={3}>
                    <SnackFilter />
                </Grid>
                <Grid item sm={9}>
                    <Grid container spacing={2}>
                        {suggestions && suggestions.length > 0 ? (
                            suggestions.map(suggestion => {
                                return (
                                    <SnackCard
                                        key={suggestion.snack_ID}
                                        snack={suggestion}
                                    />
                                );
                            })
                        ) : (
                            <h1>You have not suggested any snacks</h1>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

function mapStateToProps(state) {
    console.log(state);
    return {
        suggestions: state.snackReducer.suggestions,
        user: state.dashboardReducer.user,
    };
}

export default connect(
    mapStateToProps,
    { getCompanySuggestions }
)(SuggestedSnacks);
