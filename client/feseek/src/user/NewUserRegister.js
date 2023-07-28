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
            <div className="body">
            <form method="POST" action="">
                <h1>新規登録</h1>
                <div className="around_textbox">
                    {/* <p class="user_p">ID</p> */}
                    <input type="text" className="default_textbox" name="u_id" minlength="5" required placeholder="ID(5~12文字で入力ください)"></input><br></br>
                    {/* <p class="user_p">Password</p> */}
                    <input type="password" className="default_textbox" name="u_password" minlength="8" required placeholder="Password(8~20文字で入力ください)"></input><br></br>
                    {/* <p class="user_p">ユーザー名</p> */}
                    <input type="text" className="default_textbox" name="u_name" minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)"></input><br></br>
                    {/* <p class="user_p">メールアドレス</p> */}
                    <input type="text" className="default_textbox" name="mail_ad" required placeholder="メールアドレス"></input><br></br>
                    {/* <p class="user_p">権限選択</p> */}
                    <select name="authority" className="default_textbox">
                        <option value="">選択してください</option>
                        <option value="0">一般利用者</option>
                        <option value="1">主催者</option>
                    </select>
                </div>
                <p>すべて必須項目です</p>
                <input type="submit" className="default_button" value="登録" onclick=""></input>
            </form>
            </div>
        )
    }
}