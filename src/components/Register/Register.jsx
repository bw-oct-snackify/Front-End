import React, { useState } from 'react';
import { UserInfo, CompanyInfo, PackageSelection } from '../../components';
import  {connect} from 'react-redux';
//import axios from 'axios';

const Register = () => {
    //have some state to go thru the components.
    const [count, setCount] = useState(0);
    const [register, setRegister] = useState({
        email: '', 
        password: '',
        confirm: '',
        code: '',
        companyName: '',
        companyPhone: '' ,
        companyLocationCity: '' ,
        companyLocationState: '' ,
        companyTeamSize: ''
    });

    const updateUser = obj => {
        let newRegister = register;
        let items = Object.getOwnPropertyNames(obj);
        items.map(key => {
            newRegister[key] = obj[key];
        })
        console.log(register);
    }

    const incrementPage = () => {
        setCount(count+1);
    }

    return (
        <div>
            {count === 0 ? (
                <UserInfo incrementPage={incrementPage} updateUser={updateUser}/>
            ) : count===1 ? (
                <CompanyInfo incrementPage={incrementPage} updateUser={updateUser}/>
            ) : (
                <PackageSelection incrementPage={incrementPage} updateUser={updateUser}/>
            )}
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        
    };
}

export default connect(mapStateToProps, {})(Register);

