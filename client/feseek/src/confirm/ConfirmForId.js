import React from "react";
// import './Remind.css';
import IdReRegister from "./IdReRegister";
import axios from "axios";
import { json } from "react-router-dom";
import GuestMenubar from "../menubar/GuestMenubar";

export default class ConfirmForId extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            pass:"",
        }
    }

    //入力値とstateを連動させる
    onInput = (e) => {
        let key = e.target.name;
        this.setState({
            [key]: e.target.value
        })
    }

    onSubmit = () => {
        const {email,pass} = this.state;
        const data = {e_mail:email,password:pass};
        //emailとpassをapiに渡して処理をしてもらう
        axios.post("/api/user/profile",data)
        .then(json =>{
            window.location="/IdReRegister"
        });
        //OKならid再登録画面に遷移
        //ダメならエラーメッセージを表示
    }

    render(){
        const {pass,email} = this.state;
        let errMsg;
        if(!pass || !email){
            errMsg = (<p>※エラーメッセージ</p>)
        }
        return(
            <div>
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
                <body>
                    <h1>ID再登録用本人確認</h1>
                    <p className="message">あなたのIDとメールアドレスを入力してください</p>
                    {/* <form action="" method="POST"> */}
                    <div className="around_textbox">
                        <input type="pass" placeholder="ID" className="default_textbox" name="pass" value={pass} onChange={this.onInput}></input><br />
                        <input type="email" placeholder="メールアドレス" className="default_textbox" name="email" value={email} onChange={this.onInput}></input><br />
                    </div>
                        <span>{errMsg}</span>
                        <input type="submit" className="default_button" value={"送信"} onClick={this.onSubmit}></input>
                    {/* </form> */}
                    <p><a href="../login">ログインページに戻る</a></p>
                </body>
            </div>
        )
    }
}