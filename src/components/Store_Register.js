import React, {Fragment, useState} from 'react';
import '../assets/stylesheets/login_register.css';
import '../assets/stylesheets/base.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios'

const StoreRegistration = () => {
    let history = useHistory();
    const[storename, setStoreName] = useState('');
    const[storephone, setStorePhone] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAdd] = useState('');
    const[personname, setPersonName] = useState('');
    const[personphone, setPersonPhone] = useState('');
    const[region, setRegion] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/store/login");
    } 
    

    const handleSubmit = (event) => {
        axios({
            method: 'post',
            url: 'https://market-0123.herokuapp.com/store/register',
            data: {
                store_name: storename,
                phone: storephone,
                email: email,
                address: address,
                person_name: personname,
                person_phone: personphone,
                region: region,
                url_image: ""
            }
        },
        { withCredentials: true })
            .then(response => {
                //response.ok
                if (response.status === 200) {
                    console.log('regis res', response);
                    handleSuccessfulAuth();
                }
              })
              .catch(error => {
                console.log("registration error", error);
              });
        event.preventDefault();
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
                                <h3 className="auth-form__heading">????ng k?? ?????i t??c c???a h??ng</h3>
                                <Link to="/store/login" className="auth-form__switch-btn">????ng nh???p</Link>
                            </div>
                            
                            <div className="auth-form__form">
                                <div className="auth-form__group">
                                    <label>T??n C???a h??ng:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input"
                                        value={storename}
                                        onChange={(e)=> setStoreName(e.target.value)}
                                        required    
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>S??? ??i???n tho???i:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input"
                                        value={storephone}
                                        onChange={(e)=> setStorePhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>Email:</label>
                                    <input 
                                        type="email" 
                                        className="auth-form__input"
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
                                        value={address}
                                        onChange={(e)=> setAdd(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>Ng?????i ph??? tr??ch:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input"
                                        value={personname}
                                        onChange={(e)=> setPersonName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="auth-form__group">
                                    <label>S??? ??i???n tho???i ng?????i ph??? tr??ch:</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input"
                                        value={personphone}
                                        onChange={(e)=> setPersonPhone(e.target.value)}
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
                                    <Link to="#" className="auth-form__text-link"><Fragment>&nbsp;</Fragment>??i???u kho???n d???ch v??? &<Fragment>&nbsp;</Fragment></Link>
                                    <Link to="#" className="auth-form__text-link">Ch??nh s??ch b???o m???t</Link>
                                </p>
                            </div>

                            <div className="auth-form_controls">    
                                <Link to="/store" className="btn btn--normal auth-form_controls-back js-register-modal-close">Quay l???i</Link>
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

export default StoreRegistration;