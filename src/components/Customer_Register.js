import React, {useState} from 'react';
import '../assets/stylesheets/login_register.css';
import '../assets/stylesheets/base.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const CustomerRegistration = () => {
    let history = useHistory();
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAdd] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[region, setRegion] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/customer/login");
    } 
    

    const handleSubmit = (event) => {
        axios({
            method: 'post',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
            url: 'https://market-0123.herokuapp.com/customer/register',
            data: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                username: username,
                password: password,
                region: region
            }
        },
        { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    console.log("Pass");
                    handleSuccessfulAuth();
                }
              })
              .catch(error => {
                console.log("registration error", error);
              });
        event.preventDefault();

        // const isValid = this.validate();
        // if(isValid) {
        //     console.log(this.state);
        // }
    }

    return (
        <div className="modal js-register-modal open">
        <div className="modal__overlay"></div>
        <div className="modal__body">
            <div className="modal__inner js-register-modal-inner">
                <div className="register-auth-form">
                    <form onSubmit={handleSubmit}>
                        <div className="auth-form__container">
                            
                            <div className="auth-form__header">
                                <h3 className="auth-form__heading">????ng k??</h3>
                                <Link to="/customer/login" className="auth-form__switch-btn">????ng nh???p</Link>
                            </div>
                            
                            <div className="auth-form__form">
                                <div className="auth-form__group">
                                    <label>H??? & T??n:</label>
                                    <input 
                                        type="text" className="auth-form__input"
                                        placeholder="Full Name" 
                                        name = "name"
                                        value={name} 
                                        onChange={(e)=> setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>T??i kho???n:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Username" 
                                        name="username"
                                        value={username} 
                                        onChange={(e)=> setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>M???t kh???u:</label>
                                    <input 
                                        type="password" 
                                        className="auth-form__input" 
                                        placeholder="Password" 
                                        name="password"
                                        value={password} 
                                        onChange={(e)=> setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* <div className="auth-form__group">
                                    <label>X??c nh???n m???t kh???u:</label>
                                    <input 
                                        type="password" 
                                        className="auth-form__input" 
                                        placeholder="Confirm Password" 
                                        name="passwordConfirm"/>
                                        value={passwordconfirm} 
                                        onChange={(e)=> setPasswordConfirm(e.target.value)}
                                        required
                                </div> */}
                                <div className="auth-form__group">
                                    <label>S??? ??i???n tho???i:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Phone Number" 
                                        name="phone"
                                        value={phone} 
                                        onChange={(e)=> setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>Email:</label>
                                    <input 
                                        type="email" 
                                        className="auth-form__input" 
                                        placeholder="Email" 
                                        name="email"
                                        value={email} 
                                        onChange={(e)=> setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>?????a ch???:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Address" 
                                        name="address"
                                        value={address} 
                                        onChange={(e)=> setAdd(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>V??ng d???ch:</label>
                                    <select value={region} onChange={(e)=> setRegion(e.target.value)} className="auth-form__input areaCondition__input-type">
                                        <option>V??ng xanh</option>
                                        <option>V??ng v??ng</option>
                                        <option>V??ng cam</option>
                                        <option>V??ng ?????</option>
                                    </select>
                                </div>
                            </div>
                            <div className="auth-form__aside">
                                <p className="auth-form__policy-text">
                                    B???ng c??ch ???n ????ng k??, b???n ?????ng ?? v???i ??i ch??? thu??  
                                    <Link to="#" className="auth-form__text-link">??i???u kho???n d???ch v??? &</Link>
                                    <Link to="#" className="auth-form__text-link">Ch??nh s??ch b???o m???t</Link>
                                </p>
                            </div>

                            <div className="auth-form_controls">    
                                <Link to="/customer" className="btn btn--normal auth-form_controls-back js-register-modal-close">Quay l???i</Link>
                                <button type="submit" className="btn btn--primary js-register-btn">????ng k??</button>
                            </div>
                        </div>
                    </form>
                    
                </div>

            </div>
        </div>
    </div>
    );
}

export default CustomerRegistration;