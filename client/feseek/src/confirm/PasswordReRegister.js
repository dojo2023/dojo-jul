import React from "react";

export default class PasswordReRegister extends React.Component{
    render(){
        return(
            <div>
                <form action="" method="POST">
                    <p>新しいパスワードを入力してください</p>
                    <input type="password" placeholder="パスワード"></input><br />
                    <input type="password" placeholder="パスワード(確認用)"></input><br />
                    <span>※エラーメッセージ</span><br />
                    <input type="submit" value={"登録"}></input>
                </form>
                <p><a href="/confirm/PasswordReRegister">次の画面</a></p>   {/* 試行用 */}
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}