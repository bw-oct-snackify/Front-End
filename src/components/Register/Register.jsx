import React, { useState } from 'react';
import { UserInfo, CompanyInfo, PackageSelection } from '../../components';
import  {connect} from 'react-redux';

const Register = (props) => {
    const [count, setCount] = useState(0);
    const [goodRegister, setGoodRegister] = useState(false);
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
        setRegister((state) => {
            return {...state, ...obj}
        })
    }


    const incrementPage = () => {
        setCount(count+1);
    }

    const createUser = () => {
        setGoodRegister(true);
    }


    if (goodRegister) {
        props.history.push('/login');
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

