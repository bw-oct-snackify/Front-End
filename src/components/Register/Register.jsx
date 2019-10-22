import React, { useState } from 'react';
import { UserInfo, CompanyInfo, PackageSelection } from '../../components';
import  {connect} from 'react-redux';

import { axiosInstance } from "../../utils/axiosInstance";


const Register = () => {
    //have some state to go thru the components.
    const [count, setCount] = useState(0);
    const [register, setRegister] = useState({
        name: '',
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

    const createUser = () => {
        axiosInstance()
        .post('/auth/register', {
            name: register.name,
            email: register.email,
            password: register.password,
            company_code: register.code
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }

    return (
        <div>
            {count === 0 ? (
                <UserInfo incrementPage={incrementPage} updateUser={updateUser} createUser={createUser} register={register}/>
            ) : count===1 ? (
                <CompanyInfo incrementPage={incrementPage} updateUser={updateUser}/>
            ) : (
                <PackageSelection incrementPage={incrementPage} updateUser={updateUser} createUser={createUser} register={register}/>
            )}
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        
    };
}

export default connect(mapStateToProps, {})(Register);

