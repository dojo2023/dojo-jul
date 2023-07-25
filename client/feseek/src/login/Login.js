import React from "react";
import {useNavigate} from "react-router-dom";

import './Login.css';

export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            u_id: "",
            password: "",
        }
    }

    onInput = (e) => {
        const {u_id,password}=this.state;
        this.setState ({
            id:e.target.value,
            password:e.target.value,
        });
    }

    onSubmit = () => {
        //IDとパスワードをapiに渡してチェックしてもらう。

        //OKなら、次の画面（利用者、主催者、管理者）
        //ここに、ログイン成功した際のurlを記述するのはカッコ悪いので、WebAPIでログイン成功したときのurlを教えて貰う方がすっきり
        window.location = "/eventSearch";
        //NGならエラーメッセージ
    }
    
    /*
    onSubmit = () => {
        console.log(data);
        if (data.u_id === "u_id" && data.password === "password"){
            loginSuccess();
        }else{
            loginError();
        }
    };
    loginSuccess = () => {
        navigate("/");
    }
    loginError = () => {
        false();
    }
    */

    render(){
        const ErrorMsg = "";

        return(
            <div>
                <div>ログインページ</div>
                {/* <p class="user_p">ID</p> */}
                <input type="text" class="l_text" name="u_id" minlength="5" required placeholder="ID"></input><br></br>
                {/* <p class="user_p">Password</p> */}
                <input type="password" class="l_text" name="u_password" minlength="8" required placeholder="Password"></input><br></br>
                <p class="error">{ErrorMsg}</p><br></br>

                <input type="button" class="l_button" value="ログイン" onClick={this.onSubmit}></input><br></br>

                <a href="/ConfirmForId">IDを忘れた方はこちら</a><br></br>
                <a href="/ConfirmForPassword">パスワードを忘れた方はこちら</a><br></br>
                <a href="/NewUserRegister">新規登録はこちら</a>
            </div>
        )
    }
}