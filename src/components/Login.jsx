import { React, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
const Login = ({ connectWallet }) => {
  const navigate = useNavigate()
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    connectWallet().then((address) => {
      navigate(`/profile/${address}/${event.target[0].value}`)
    })
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  return (
    <div className="app">
      <div className="login-form">
        <div className="title">I AM</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <select className='select_box' placeholder='You are'>
              <option value="patient">PATIENT</option>
              <option value="doctor">DOCTOR</option>
              <option value="other">OTHER</option>
            </select>
            <div className="button-container">
              <input type="submit" value='Login with metamask' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login