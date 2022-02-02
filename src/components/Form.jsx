import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Form(props) {
    const [user, setUser] = useState({ age: "34", height: "173", weight: "87.4", sex: "male", fashion: "" });
    const history = useNavigate();

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        postForm();
    }
    
    function postForm() {
        // TODO : backendのURLと合わせる 
        const url = 'http://127.0.0.1:5000/post';
        const data = {
            post_text: user
        };
        console.log(user);
        axios.post(url, data)
        .then(
            response => {
                console.log(response.data);
                props.changeComTem(response.data['ComfortTemperature']);
                props.changeMap(response.data['Map']);
            });
        history('/map');
    }

    return (
        <form class='myForm'>
            <label for='age'>Age</label>
            <input
                type='text'
                id='age'
                name='age'
                placeholder='Eg. 34'
                onChange={handleChange}
                required
            />
            <label for='height'>Height / cm</label>
            <input
                type='text'
                id='height'
                name='height'
                // value='173'
                placeholder='Eg. 173'
                onChange={handleChange}
            />
            <label for='weight'>Weight / kg</label>
            <input
                type='text'
                id='weight'
                name='weight'
                // value='87.4'
                placeholder='Eg. 87.4'
                onChange={handleChange}
            />
            <fieldset onChange={handleChange}>
                <legend>What is your biological gender?</legend>
                <label> <input type='radio' name='sex' id='male' required checked value='male' /> Male </label>
                <label> <input type='radio' name='sex' id='female' required value='female' /> Female </label>
            </fieldset>
            <button type="submit" onClick={handleSubmit}>
                Register
            </button>
        </form>
    )
}

export default Form;
