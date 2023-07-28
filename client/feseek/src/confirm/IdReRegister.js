import React from "react";
import GuestMenubar from "../menubar/GuestMenubar";

export default class IdReRegister extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
                <body>
                    <h1>ID再登録</h1>
                    <form action="" method="POST">
                        <p className="message">新しいIDを入力してください</p>
                        <div className="around_textbox">
                            <input type="id" placeholder="ID" className="default_textbox"></input><br />
                            <input type="id" placeholder="ID(確認用)" className="default_textbox"></input><br />
                        </div>
                        <span>※エラーメッセージ</span><br />
                        <input type="submit" className="default_button" value={"登録"}></input>
                    </form>
                    <p><a href="/confirm/IdReRegister">次の画面</a></p>   {/* 試行用 */}
                    <p><a href="../login">ログインページに戻る</a></p>
                </body>
            </div>
        )
    }
}