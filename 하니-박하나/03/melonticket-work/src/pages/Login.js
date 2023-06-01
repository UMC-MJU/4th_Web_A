import React ,{ useRef , useEffect }from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Login = () => {
    const inputRef = useRef();

    useEffect (() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className="Login_wrap">
           <Link to="/">
            <img className = "Login_logo"
            src="https://cdnimg.melon.co.kr/resource/image/web/member/img_logo251x47.png" alt="로고"/>
            </Link>
            <form className="Form_wrap">
                <input ref={inputRef}></input>
                <input></input>
                <div className="Save_wrap">
                    <div className="Checkbox_wrap">
                        <span>아이디 저장</span>
                    </div>
                    <div className="Finding_wrap">
                        <span>아이디 찾기 | </span>
                        <span>비밀번호 찾기</span>
                    </div>
                </div>
                <button>로그인</button>
            </form>
        </div>
        
    );
};

export default Login;