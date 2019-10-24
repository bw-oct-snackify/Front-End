import React, {useState} from 'react';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField, Avatar} from '@material-ui/core/';

import {updateUser} from '../../../store/actions/dashboardActions';
import styles from "./accountsettings.module.scss";

const AccountSettings = ({user, updateUser, isUpdating}) =>{

    const [userInfo, setUserInfo] = useState(
        {
            name: user.name,
            email: user.email,
            img_url: user.img_url,
        }
    );

    const useStyles = makeStyles(theme => ({
        button: {
            width: '400px',
            height: '50px',
            margin: '0 auto',
          },
          avatar:{
            width: '200px',
            height: '200px',
            margin: '0 auto',
          },
          title:{
            fontSize:'2rem',
            textAlign:'center',
            fontWeight: '700',
            marginBottom: '10px',
          },
      }));


    const handleChange = e =>{
        setUserInfo({...userInfo, [e.target.name]:e.target.value});
    };

    const handleSubmit = e =>{
        e.preventDefault();
        updateUser(user.user_id, userInfo);
    };

    console.log(userInfo);


    const classes = useStyles();

    if(isUpdating){
        return(
            <div>
                <h2>Updating account information..</h2>
            </div>
        );
    }

    return(
        <div className={styles.container}>
            <h2 className={classes.title}>{user.name.toUpperCase()}</h2>
            <Avatar className={classes.avatar} src={user.img_url} alt={user.name} />
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
                    value={userInfo.name}
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
                    value={userInfo.email}
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
                    name="img_url"
                    onChange={handleChange}
                    value={userInfo.img_url}
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

const mapStateToProps = state =>{
    return{
        user: state.dashboardReducer.user,
        isUpdating: state.dashboardReducer.isUpdating,
    };
};

export default connect(mapStateToProps, {updateUser})(AccountSettings);