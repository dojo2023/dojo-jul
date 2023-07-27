import React from "react";

export default class PasswordReRegister extends React.Component{
    render(){
        return(
            <div className="body">
                <h1>パスワード再登録ページ</h1>
                <form action="" method="POST">
                    <p className="message">新しいパスワードを入力してください</p>
                        <div className="around_textbox">
                        <input type="password" placeholder="パスワード" className="default_textbox"></input><br />
                        <input type="password" placeholder="パスワード(確認用)" className="default_textbox"></input><br />
                    </div>
                    <span>※エラーメッセージ</span><br />
                    <input type="submit" className="default_button" value={"登録"}></input>
                </form>
                <p><a href="/confirm/PasswordReRegister">次の画面</a></p>   {/* 試行用 */}
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}