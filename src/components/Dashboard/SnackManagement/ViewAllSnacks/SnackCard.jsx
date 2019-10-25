import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import {
    addSnackToSuggestions,
    addSnackToCompany,
} from '../../../../store/actions/snackActions';

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        height:'50px',
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
    },
    card:{
        height: '350px',
        padding: '20px'
    }
});

const SnackCard = ({
    user,
    snack,
    addSnackToSuggestions,
    addSnackToCompany,
}) => {
    const classes = useStyles();
    //console.log(snack);
    return (
        <Grid item sm={3}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={snack.img_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {snack.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {snack.brand}
                        </Typography>
                        {snack.users && (
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {snack.users.reduce((acc, curr) => {
                                    return curr + ', ' + acc;
                                }, '')}
                            </Typography>
                        )}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">⍰</Button>
                    <Button
                        size="small"
                        onClick={() => {
                            if (user.admin) {
                                addSnackToCompany(user, snack);
                            } else {
                                addSnackToSuggestions(user, snack);
                            }
                        }}
                    >
                        {user.admin ? 'Add to snacks' : 'Add to Suggestions'}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

function mapStateToProps(state) {
    return {
        user: state.dashboardReducer.user,
    };
}

export default connect(
    mapStateToProps,
    { addSnackToSuggestions, addSnackToCompany }
)(SnackCard);
