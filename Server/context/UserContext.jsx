import{createContext} from 'react';
export default createContext(null);
import axios from "axios";
import { email } from './Login/Signup/Signup.jsx';
import { password } from './Login/Signup/Signup.jsx';

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const newUser = {email,/*username,*/password/*,confirmPassword*/} ;
        await axios.post("http://localhost:8082/api/users/signup", newUser);
        const loginRes = await axios.post("http://localhost:8082/api/users/login",{
            email,
            password,
        });
        /* We store the token and user data with hashed password in loginRes which
we then use to set our UserContext with setUserData. Remember that the
login route responds with the token plus user data*/
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
        });
        /**
         *Then, we need to store the data in localStorage of the browser to establish a
        login 'session'. localStorage is a web storage object that enables developers to
store key-value pairs in a web browser and ensures that this data survives all
page refreshes, even when a user closes or restarts a browser. setItem() is
method to set the value of the storage object.
         */
        localStorage.setItem("auth-token",loginRes.data.token);
        setLoading(false);
        navigate('/')
    } catch (err){
        setLoading(false);
        err.response.data.msg && SetError(err.response.data.msg);
    }
    
};