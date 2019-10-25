import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";

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
        height: '50px',
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
    },
    card: {
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

    const [snackConfirmationOpen, setSnackConfirmationOpen] = useState(false);

    const handleCancel = () => {
        setSnackConfirmationOpen(false);
    };

    const addSuggestSnackHandler = () => {
        setSnackConfirmationOpen(false);
        addSnackToSuggestions(user, snack);
    }

    const addCompanySnackHandler = () =>{
        setSnackConfirmationOpen(false);
        addSnackToCompany(user, snack);
    }


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
                            setSnackConfirmationOpen(true);
                        }}
                    >
                        Add Snack
                    </Button>
                </CardActions>
            </Card>

            <Dialog
                open={snackConfirmationOpen}
                keepMounted
                onClose={handleCancel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {`Handling the ${snack.name} for you!`}
                </DialogTitle>
                <DialogContent>
                    {user.admin &&
                        <DialogContentText id="alert-dialog-slide-title">
                            {`What would you like to do with ${snack.name} ?`}
                        </DialogContentText>}

                        {!user.admin &&
                        <DialogContentText id="alert-dialog-slide-title">
                            {`Are you sure you want to add ${snack.name} to your suggested list?`}
                        </DialogContentText>}

                    {user.admin && <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={addCompanySnackHandler} color="primary">
                            Add to Company
                    </Button>
                        <Button onClick={addSuggestSnackHandler} color="primary">
                            Add to Suggested
                     </Button>
                    </DialogActions>}
                    {!user.admin && <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={addSuggestSnackHandler} color="primary">
                            Add to Suggested
                     </Button>
                    </DialogActions>}
                </DialogContent>
            </Dialog>
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
