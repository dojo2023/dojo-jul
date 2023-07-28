import React from "react";
import axios from "axios";
import './UserInfo.css';
import GuestMenubar from "../menubar/GuestMenubar";

export default class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            User:[],
            u_password:"",
            u_name:"",
            mail_ad:"",
            modPassword:"",
            modName:"",
            modMail:"",
        }
    }

    // 更新ボタン処理
    saveUser = (info) => {
        //postデータ作成
        const {u_password,u_name,mail_ad} = this.state;
        const User = {u_password,u_name,mail_ad};
        axios.post("/",User)
        this.setState({
            //stateにデータをいれる
            modPassword:User[info].u_password,
            modName:User[info].u_name,
            modMail:User[info].mail_ad,
        });
    }

    render(){
        return(
            <div>
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
                <body>
                    <h1>ユーザー情報編集</h1>
                        <div className="around_textbox">
                        {/* <p class="user_p">Password</p> */}
                        <input type="password" className="default_textbox" name="u_password" minlength="8" required placeholder="Password(8~20文字で入力ください)"></input><br></br>
                        {/* <p class="user_p">ユーザー名</p> */}
                        <input type="text" className="default_textbox" name="u_name" minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)"></input><br></br>
                        {/* <p class="user_p">メールアドレス</p> */}
                        <input type="text" className="default_textbox" name="mail_ad" required placeholder="メールアドレス"></input><br></br>
                    </div>
                    <p class="error"></p><br></br>
                    <input type="button" className="default_button" value="更新" onclick={this.saveUser}></input>
                </body>
            </div>
        )
    }
}