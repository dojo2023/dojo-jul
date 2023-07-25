import React from "react";
import './UserInfo.css';

export default class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
            <form method="POST" action="">
                <div>ユーザー情報編集ページ</div>
                {/* <p class="user_p">Password</p> */}
                <input type="password" class="u_text" name="u_password" minlength="8" required placeholder="Password(8~20文字で入力ください)"></input><br></br>
                {/* <p class="user_p">ユーザー名</p> */}
                <input type="text" class="u_text" name="u_name" minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)"></input><br></br>
                {/* <p class="user_p">メールアドレス</p> */}
                <input type="text" class="u_text" name="u_name" required placeholder="メールアドレス"></input><br></br>
                <p class="error"></p><br></br>
                <input type="submit" class="u_button" value="更新" onclick=""></input>
            </form>
            </div>
        )
    }
}