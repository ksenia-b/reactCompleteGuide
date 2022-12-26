import React, {useState} from 'react';


import classes from '../Login.modules.css';

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [emailInputValid, setEmailInputValid] = useState(false);

    const setEmailInputHandler = (event) => {
        setEmailInput(event.target.value);
        console.log("... So now emais = , ", emailInput);
    }

    const setEmailInputValidHandler = event => {
        if(event.target.value.includes('@')){
            setEmailInputValid(true)
            console.log("set email is valid");
        }
        console.log('nothing, emailInputValid = ', emailInputValid);
       
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        setEmailInput('');
    }

    return (<div>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input id="email"
            onChange={setEmailInputHandler}
            onBlur={setEmailInputValidHandler}
            value={emailInput}
            ></input>
            <button type="submit">Login</button>
        </form>
    </div>);
}

export default Login;