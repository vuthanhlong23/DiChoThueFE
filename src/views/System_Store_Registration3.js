import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/stylesheets/system_store_registration.css";
import axios from 'axios';

const SystemStoreRegistration3 = () => {
    let history = useHistory()
    const [passwordcf, setPasswordCf] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [contract_start, setContractStart] = useState('')
    const [contract_end, setContractEnd] = useState('')

    const SystemStoreRegister = (event) =>{
        try {
            axios({
                url: `https://market-0123.herokuapp.com/admin/reviewstore`,
                method: 'post',
                data:
                {
                    id: localStorage.getItem("System_register_store_id"),
                    username: username,
                    password: password,
                    contract_start: contract_start,
                    contract_end: contract_end,
                    rules: "1 năm"
                }
            },
            { withCredentials: true }
            )  
            .then(res => {
                history.push("/system/system_store_registration1")
                console.log(res.data)
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
        event.preventDefault();
    } 

    return (
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="dichothue-system__design-description">
                        <h5 className="dichothue-system__design-heading">9. XÉT DUYỆT ĐƠN ĐĂNG KÝ CỦA CỬA HÀNG/SIÊU THỊ</h5>
                    </div>
                </div>
                <form onSubmit={SystemStoreRegister}>
                <div className="row col-4">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Tài khoản</span>
                        <input 
                            type="text" 
                            className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row col-4">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Mật khẩu</span>
                        <input 
                            type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required    
                        />
                    </div>
                </div>
                <div className="row col-4">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Xác nhận mật khẩu</span>
                        <input 
                            type="text" 
                            className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                            value={passwordcf}
                            onChange={(e)=> setPasswordCf(e.target.value)}
                            required    
                        />
                    </div>
                </div>
                <div className="row col-6">
                    <div className="system-store_registration_start_day">
                        Ngày bắt đầu hợp đồng
                        <input 
                            type="date" 
                            className="system-store_registration__date-input system-store_registration__input-type"
                            value={contract_start}
                            onChange={(e)=> setContractStart(e.target.value)}
                            required    
                        />
                    </div>
                </div>
                <div className="row col_6">
                    <div className="system-store_registration_end_day">
                        Ngày kết thúc hợp đồng
                        <input 
                            type="date" 
                            className="system-store_registration__date-input system-store_registration__input-type"
                            value={contract_end}
                            onChange={(e)=> setContractEnd(e.target.value)}
                            required    
                        />
                    </div>
                </div>
                {/* <form onSubmit={SystemStoreRegister}> */}
                <div className="row col-2">
                    {/* <form onSubmit={SystemStoreRegister}> */}
                        <button type="submit" className="btn btn-secondary system_registration-store-list_btn">Lưu thông tin</button>
                    {/* </form> */}
                </div>
                </form>
            </div>

        </div>

    );

}

export default SystemStoreRegistration3;