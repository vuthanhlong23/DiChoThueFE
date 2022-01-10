import React, {useState} from 'react';
import '../assets/stylesheets/login_register.css';
import '../assets/stylesheets/base.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import base64 from 'base-64';
import utf8 from 'utf8';
const SALT = 'anyString';
const PREPENDING_STR = '__enc__';

function encodeCredential(input) {
    //Nếu input tồn tại và nó là một chuỗi
    if (input && typeof input === 'string') {
        const newInput = `${input}${SALT}`; // Thêm muối vào input
        const utf8Bytes = utf8.encode(newInput); // Encode Utf8
        const encoded = base64.encode(utf8Bytes); // Encode Base64
        return `${PREPENDING_STR}${encoded}`; // Thêm chuỗi prepending 
    }
    return input;
}

function decodeCredential(input) {
    //Nếu input tồn tại và nó là một chuỗi và đã được encoded
    if (input && typeof input === 'string' && input.startsWith(PREPENDING_STR) === true) {
        const newInput = input.replace(PREPENDING_STR, ''); // Xóa chuỗi Prepending
        const utf8Bytes = base64.decode(newInput); // Decode Base64
        const output = utf8.decode(utf8Bytes); // Decode Utf8
        return output.replace(SALT, '');
    }
    return input;
}



const SystemLogin = () => {
    let history = useHistory();
    const [username, setName] = useState('');
    const [password, setPwd] = useState('');
    const [user, setUser] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(["System_Username", "System_Password"]);

    const handleSetCookie = () => {
        setCookie('System_Username', username, { path: '/' });
        setCookie('System_Password', encodeCredential(password), { path: '/' });
    };

    // const handleRemoveCookie = () => {
    //     removeCookie("Username");
    //     removeCookie("Password");
    // }

    const handleSuccessfulAuth = () => {
        history.push("/system");
    } 
    
    const handleSubmit = (event) => {
        axios({
            method: 'post',
            url: 'https://market-0123.herokuapp.com/admin/login',
            data:
            {  
                username: username,
                password: password
            }
        },
        { withCredentials: true }
        )
        .then(res => {
            if(res.status===200)
            {
                handleSetCookie();
                setUser(res.data);
                handleSuccessfulAuth();
                console.log(res)
            }
            else{
                alert("Username or password not correct!")
            }
            
        })
        .catch(error => {
            console.log("login error", error);
            history.push("/system/login");
            //handleRemoveCookie();
        });
        event.preventDefault();
    }
    return (
        <div className="modal open">
        <div className="modal__overlay">
        </div>
        <div className="modal__body">
            <div className="modal__inner">
            <form onSubmit={handleSubmit}>
                <div className="login-auth-form">
                    <div className="auth-form__container">
                        
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Đăng nhập hệ thống</h3>
                        </div>
                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <label>Tài khoản:</label>
                                <input type="text" 
                                    className="auth-form__input" 
                                    name="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e)=> setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="auth-form__group">
                                <label>Mật khẩu:</label>
                                <input type="password" 
                                    className="auth-form__input"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=> setPwd(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="auth-form_controls">
                            <Link to="/system" className="btn btn--normal auth-form_controls-back">Trở lại</Link>
                            <button type="submit" className="btn btn--primary">Đăng nhập</button>
                        </div>

                        <div className="auth-form__aside">
                            <p className="auth-form__register-text">
                                Bạn chưa có tài khoản?{' '}
                                <Link to="/system/register" className="auth-form__register-link">Đăng ký ngay</Link>
                            </p>
                        </div>

                    </div>
                    
                </div>
            </form>
            </div>
        </div>
    </div>
    );
}

export default SystemLogin;