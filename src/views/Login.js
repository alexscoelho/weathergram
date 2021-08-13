import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState(null);

  const handleChange = ({ target }) => {
    setLoginForm({ ...loginForm, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginForm;
    if (!username.trim() || !password.trim()) {
      setMessage('Enter a Valid Username or Password');
    } else if (username.length < 3 || password.length < 3) {
      setMessage('Username and password must be at leas 3 long characters');
    } else {
      history.push('/home');
    }
  };
  return (
    <div className='container '>
      <div className='row justify-content-center '>
        {message && (
          <div className='alert alert-danger' role='alert'>
            {message}
          </div>
        )}
        <div className='col-md-3 border p-5 sign-up-form shadow-sm bg-white'>
          <h2 className='signup-title'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Username</label>
              <input
                onChange={handleChange}
                type='text'
                className='form-control'
                id='exampleInputPassword1'
                name='username'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                onChange={handleChange}
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                name='password'
              />
            </div>
            <div className='sign-up-button'>
              <button type='submit' className='btn btn-primary btn-block'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
