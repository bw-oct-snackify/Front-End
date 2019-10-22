import React from 'react';
import styles from "./accountsettings.module.scss";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const AccountSettings = props =>{

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
          }
      }));


    const handleChange = e =>{

    };

    const handleSubmit = e =>{
        e.preventDefault();
    };


    const classes = useStyles();

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="name">
                    Name: <input type='text' id='name' name='name' onChange={handleChange} value='RAWR' />
                </label> */}
                <div className={styles.formContainer}>
                <h2>Account Settings</h2>

                <TextField
                    id="name"
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value="RAWR"
                    type="text"
                    margin="normal"
                    variant="outlined"
                />
                
                {/* <label htmlFor="email">
                    Email: <input type='text' id='email' name='email' onChange={handleChange} value='RAWR@gmail.com' />
                </label> */}

                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value="RAWR@gmail.com"
                    type="text"
                    margin="normal"
                    variant="outlined"
                />

                {/* <label htmlFor="image">
                    Image URL: <input type='text' id='image' name='image' onChange={handleChange} value='https://avatars3.githubusercontent.com/u/13228579?s=460&v=4' />
                </label> */}

                <TextField
                    id="image"
                    label="Image URL"
                    name="image"
                    onChange={handleChange}
                    value="https://avatars3.githubusercontent.com/u/13228579?s=460&v=4"
                    type="text"
                    margin="normal"
                    variant="outlined"
                />

                {/* <button type='submit'>Update Account</button> */}
                <Button className={classes.button} type="submit" variant="contained" color="primary">
                    Update Account
                </Button>


                </div>
            </form>
        </div>
    )
};

export default AccountSettings;