import React, { useState} from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import '../App.css';

const Header = () => {
    const [activeLogo, setActiveLogo] = useState('');

    const handleMouseOver = (e) => {
    setActiveLogo(e.target.className)
    };

    const handleMouseOut = () => {
    setActiveLogo('')
    };   

    const logoClass = (logo) => `${logo} ${logo == activeLogo ? '.active' : ''}`
    return (
        <header className="Header_wrap">
                <div className="Service_wrap">
                    <span className="Small_logo"></span>
                    <div className="Service_list_wrap">
                    <ul className="Service_list">
                        <li className = {logoClass('Btn_login')}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                        <NavLink to="/login" style={{ textDecoration: "none" }}>로그인</NavLink>
                        </li>
                        <li className={logoClass("Btn_join")}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}>
                        <NavLink to="/join" style={{ textDecoration: "none" }}>회원가입</NavLink>
                        </li>
                        <li className="Btn_customer">
                        <Link to="/customer" style={{ textDecoration: "none" }}>고객센터</Link>
                        </li>
                        <li className="Btn_howto">
                        <Link to="/howto" style={{ textDecoration: "none" }}>이용안내</Link>
                        </li>
                    </ul>
                    <span className="Btn_world"></span>
                    </div>
                </div>
                <div className="Search_wrap">
                    <div className="Search_left_wrap">
                        <span>
                            <img className="Main_logo" src="https://cdnticket.melon.co.kr/resource/image/web/common/logo.png" />
                        </span>
                        <div className="Search">
                            <input type="text" placeholder="왤케 아프지? 왜 안 되지?" />
                            <span className="Search_logo"></span>
                        </div>
                    </div>
    
                    <div className="Header_event">
                        <div className="Header_slider">
                            <img src="https://cdnticket.melon.co.kr//resource/image/upload/marketing/2023/02/2023022416383942903255-d400-47d5-8449-af86ddd71646.png" />
                            </div>
                        <div className="Controls">
                            <span className="Pre_btn"></span>
                            <span className="Next_btn"></span>
                        </div>
                    </div>
                </div>
                <hr className="Header_hr" />
                <nav className="Menu_list">
                    <a className="Btn_1" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></a>
                    <a className="Btn_2"></a>
                    <a className="Btn_3"></a>
                    <a className="Btn_4"></a>
                    <a className="Btn_5"></a>
                    <a className="Btn_6"></a>
                    <a className="Btn_7"></a>
                    <a className="Btn_8"></a>
                    <a className="Btn_9"></a>
                    <a className="Btn_10"></a>
                    <a className="Btn_11"></a>
                </nav>
                <main>
                    <Outlet />
                </main>
        </header>
    );
};

export default Header;