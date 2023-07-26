import React from "react";
import axios from "axios";
import './UserInfo.css';

export default class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            User:[],
            password:"",
            name:"",
            mail_ad:"",
            modPassword:"",
            modName:"",
            modMail:"",
        }
    }

    //画面で何か入力された時に、その値をstateとして保持する。
    //これにより、JavaScript動作時に毎回画面を見に行くのではなく、画面と連動したstateだけを見ればよくなる。
    onInput = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }  

    // 更新ボタン処理
    saveUser = (info) => {
        //postデータ作成
        const {password,name,mail_ad} = this.state;
        const User = {password,name,mail_ad};
        axios.post("/api/user/profile/edit" , User)
        this.setState({
            //stateにデータをいれる
            modPassword:User[info].password,
            modName:User[info].name,
            modMail:User[info].mail_ad,
        });
    }

    render(){
        const {password , name , mail_ad} = this.state;
        return(
            <div>
                <div>ユーザー情報編集ページ</div>
                {/* <p class="user_p">Password</p> */}
                <input type="password" class="u_text" name="u_password" minlength="8" required placeholder="Password(8~20文字で入力ください)" value={password}></input><br></br>
                {/* <p class="user_p">ユーザー名</p> */}
                <input type="text" class="u_text" name="u_name" minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)" value={name}></input><br></br>
                {/* <p class="user_p">メールアドレス</p> */}
                <input type="text" class="u_text" name="mail_ad" required placeholder="メールアドレス" value={mail_ad}></input><br></br>
                <p class="error"></p><br></br>
                <input type="button" class="u_button" value="更新" onclick={this.saveUser}></input>
            </div>
        )
    }
}