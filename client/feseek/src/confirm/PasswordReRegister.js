import React from "react";
import GuestMenubar from "../menubar/GuestMenubar";

export default class PasswordReRegister extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
            <body>
                <h1>パスワード再登録</h1>
                <form action="" method="POST">
                    <p className="message">新しいパスワードを入力してください</p>
                        <div className="around_textbox">
                        <input type="password" placeholder="パスワード" className="default_textbox"></input><br />
                        <input type="password" placeholder="パスワード(確認用)" className="default_textbox"></input><br />
                    </div>
                    {/* <span>※パスワードが一致しません</span><br /> */}
                    <input type="submit" className="default_button" value={"登録"}></input>
                </form>
                <p><a href="/confirm/PasswordReRegister">次の画面</a></p>   {/* 試行用 */}
                <p><a href="../login">ログインページに戻る</a></p>
            </body>
            </div>
        )
    }
}