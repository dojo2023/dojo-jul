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
                <div>新規登録ページ</div>
                {/* <p class="user_p">ID</p> */}
                <input type="text" class="u_text" name="u_id" minlength="5" required placeholder="ID(5~12文字で入力ください)"></input><br></br>
                {/* <p class="user_p">Password</p> */}
                <input type="password" class="u_text" name="u_password" minlength="8" required placeholder="Password(8~20文字で入力ください)"></input><br></br>
                {/* <p class="user_p">ユーザー名</p> */}
                <input type="text" class="u_text" name="u_name" minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)"></input><br></br>
                {/* <p class="user_p">メールアドレス</p> */}
                <input type="text" class="u_text" name="u_name" required placeholder="メールアドレス"></input><br></br>
                {/* <p class="user_p">権限選択</p> */}
                <select name="authority">
                    <option value="">選択してください</option>
                    <option value="0">一般利用者</option>
                    <option value="1">主催者</option>
                </select>
                <p>すべて必須項目です</p>
                <input type="submit" class="u_button" value="登録" onclick=""></input>
            </form>
            </div>
        )
    }
}