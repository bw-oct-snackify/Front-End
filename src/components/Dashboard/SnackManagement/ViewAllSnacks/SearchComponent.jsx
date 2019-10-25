import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { searchSnacks } from '../../../../store/actions/snackActions';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchComponent = ({ searchSnacks }) => {
    const [search, setSearch] = useState('');

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search snacks"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyUp={e => {
                    if (e.keyCode === 13) searchSnacks(search);
                }}
            />
            <IconButton onClick={() => searchSnacks(search)} className={classes.iconButton} aria-label="search">
                <SearchIcon  />
            </IconButton>
        </Paper>
    );
};

export default connect(
    null,
    { searchSnacks }
)(SearchComponent);
