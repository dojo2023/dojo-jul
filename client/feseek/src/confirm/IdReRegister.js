import React from "react";

export default class IdReRegister extends React.Component{
    render(){
        return(
            <div>
                <form action="" method="POST">
                    <p>新しいIDを入力してください</p>
                    <input type="id" placeholder="ID"></input><br />
                    <input type="id" placeholder="ID(確認用)"></input><br />
                    <span>※エラーメッセージ</span><br />
                    <input type="submit" value={"登録"}></input>
                </form>
                <p><a href="/confirm/IdReRegister">次の画面</a></p>   {/* 試行用 */}
                <p><a href="../login">ログインページに戻る</a></p>
            </div>
        )
    }
}