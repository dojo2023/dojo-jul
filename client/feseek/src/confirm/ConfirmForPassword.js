import React from "react";

export default class ConfirmForIPassword extends React.Component{
    render(){
        return(
            <div>
                <h1>パスワード再登録用の本人確認画面</h1>
                <p><a href="PasswordReRegister">パスワード再登録画面</a></p>
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}