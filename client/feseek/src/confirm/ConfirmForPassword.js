import React from "react";

export default class ConfirmForIPassword extends React.Component{
    render(){
        return(
            <div className="body">
                <h1>パスワード再登録用本人確認ページ</h1>
                <p className="message">あなたのIDとメールアドレスを入力してください</p>
                <form action="" method="POST">
                    <div className="around_textbox">
                        <input type="id" placeholder="ID" className="default_textbox"></input><br/>
                        <input type="email" placeholder="メールアドレス" className="default_textbox"></input><br/>
                    </div>
                    <span>※エラーメッセージ</span><br/>
                    <input type="submit" className="default_button" value={"送信"}></input>
                </form>
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}