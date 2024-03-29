import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { purple } from "@material-ui/core/colors";
import UserTable from "./UserTable/UserTable";
import { connect } from "react-redux";
import { deleteUser, getCompanyUsers } from "../../../store/actions/dashboardActions";
import Snackifycat from "../../../assets/images/Snackifycat.png";
import {useHistory} from 'react-router-dom';
import { Avatar } from "@material-ui/core";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
}))(Button);

const useStyles = makeStyles(theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  container: {
    width: "400px",
    textAlign: "center"
  },
  card: {
    padding: "10px",
    width: "250px"
  },
  Snackifycat: {
    height: "75%",
    width: "250px"
  },
  userError: {
    color: "black",

    textAlign: "center",
    height: "100%"
  },
  list: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    margin: "10px",
    "&:hover": {
      backgroundColor: "lightgrey",
      height: "30px"
    },
    borderRadius: "10px"
  },
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    width: "100%",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  btn: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    },
    width: "100%",
    borderRadius: "20px;"
  },
  sideGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  notice: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },

  errorTitle: {
    fontSize: "2rem"
  },
  textField: {
    width: "400px"
  }
}));

const UserManagement = ({ user, users, deleteUser, getCompanyUsers }) => {
  const classes = useStyles();

  const history = useHistory();

  const [confOpen, setConfOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const [userToDelete, setUserToDelete] = useState({ id: null, name: "" });
 
  const [values, setValues] = useState({
    name: "",
    email: ""
  });

  const handleDelete = (id, name) => {
    setUserToDelete({ id: id, name: name });
    setConfOpen(true);
  };

  const handleDeleteUser = () => {
    deleteUser(user.company_id, userToDelete.id);
    setUserToDelete({ id: null, name: "" });
    setConfOpen(false);
    history.push('/cp/users');
  };

  const handleCancel = () => {
    setConfOpen(false);
    setOpen(false);
  };

  const handleInvite = () => {
    setOpen(false);
  };

 

  const handleChange = event => {
    setValues({...values, [event.target.name]: event.target.value });
  };

  return (
    <div>



      <Grid container spacing={1}>

        <Grid item sm={3}>
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
              Users Left: {users.length}
            </Typography>
            <ColorButton
            disabled
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={() => setOpen(true)}
          >
            Invite Users
          </ColorButton>
          </Card>
          
        </Grid>

        <Grid item sm={9}>
          {users.length > 0 && <UserTable users={users} handleDelete={handleDelete} />}
          {users.length < 1 && (
            <Grid className={classes.notice} item xs={6}>
              <Card className={classes.userError}>
                <div className={classes.errorTitle}>No users exist</div>
                <Avatar
                  className={classes.Snackifycat}
                  src={Snackifycat}
                  alt="cat-pic"
                ></Avatar>
                <p>--Snackify team</p>
              </Card>
            </Grid>
          )}
        </Grid>

      </Grid>

      <Dialog
        open={confOpen}
        keepMounted
        onClose={handleCancel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Delete user from the company."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-title">
            {`Are you sure you would like to delete ${userToDelete.name} from the company list?`}
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteUser} color="primary">
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      
      <Dialog
        open={open}
        keepMounted
        onClose={handleCancel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Invite Team Member"}
        </DialogTitle>
        <DialogContent>
            <form className={classes.container} noValidate autoComplete="off">
              Name:
              <TextField
                id="outlined-name"
                label="⍰ Name"
                name="name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
              <br></br>
              Email:
              <TextField
                id="outlined-email-input"
                label="⍰ Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              />
            </form>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>

            <Button
              onClick={handleInvite}
              style={{ backgroundColor: "turquoise", color: "white" }}
              color="primary"
            >
              Send Invite
            </Button>

          </DialogActions>
        </DialogContent>
      </Dialog>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.dashboardReducer.users,
    user: state.dashboardReducer.user
  };
};
export default connect(
  mapStateToProps,
  { deleteUser, getCompanyUsers }
)(UserManagement);
