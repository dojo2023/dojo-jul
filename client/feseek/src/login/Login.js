import React from "react";
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
            id:e.target.value
        });
    }

    render(){
        return(
            <div>
            <form method="POST" action="">
                <div>ログインページ</div>
                {/* <p class="user_p">ID</p> */}
                <input type="text" class="l_text" name="u_id" minlength="5" required placeholder="ID"></input><br></br>
                {/* <p class="user_p">Password</p> */}
                <input type="password" class="l_text" name="u_password" minlength="8" required placeholder="Password"></input><br></br>
                <p class="error"></p><br></br>

                <input type="submit" class="l_button" value="ログイン" onclick=""></input><br></br>
                <a href="/ConfirmForId">IDを忘れた方はこちら</a><br></br>
                <a href="/ConfirmForPassword">パスワードを忘れた方はこちら</a><br></br>
                <a href="/NewUserRegister">新規登録はこちら</a>
            </form>
            </div>
        )
    }
}