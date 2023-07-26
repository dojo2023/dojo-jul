import React from "react";

export default class ConfirmForIPassword extends React.Component{
    render(){
        return(
            <div>
                <p>あなたのIDとメールアドレスを入力してください</p>
                <form action="" method="POST">
                    <input type="id" placeholder="ID"></input>
                    <input type="email" placeholder="メールアドレス"></input>
                    <span>※エラーメッセージ</span>
                    <input type="submit" value={"送信"}></input>
                </form>
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}